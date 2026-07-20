import { NextRequest, NextResponse } from 'next/server';

/**
 * Server-side gate for lead-capture submissions (contact, guide downloads,
 * assessments, newsletter). Combines:
 *   - honeypot detection (bots fill hidden fields)
 *   - USA-only hard block via Vercel's geolocation header
 *   - hCaptcha token verification (fail-open until HCAPTCHA_SECRET_KEY is set)
 *   - email format validation
 * and surfaces the client IP + country so routes can persist them.
 */

export interface GuardResult {
  ok: boolean;
  ip: string;
  country: string | null;
  /** Present only when ok === false — return this straight from the route. */
  response?: NextResponse;
}

export interface GuardOptions {
  /** 'required' forces a valid hCaptcha token; 'optional' verifies only if one is sent. Default 'optional'. */
  captcha?: 'required' | 'optional';
  /** Hidden honeypot field name the form includes. Default 'website'. */
  honeypotField?: string;
}

/** First public client IP from the standard proxy headers Vercel sets. */
export function getClientIp(req: NextRequest): string {
  const xff = req.headers.get('x-forwarded-for');
  if (xff) return xff.split(',')[0].trim();
  return req.headers.get('x-real-ip') || 'unknown';
}

/**
 * Two-letter country from Vercel's edge geolocation. Returns null when the
 * header is absent (local dev / non-Vercel). On Vercel it's an ISO 3166-1
 * alpha-2 code, or an "unknown" marker ('XX', 'T1', etc.) when the IP can't be
 * resolved (VPNs, corporate proxies, Tor).
 */
export function getCountry(req: NextRequest): string | null {
  const c = req.headers.get('x-vercel-ip-country');
  return c && c.trim() ? c.trim().toUpperCase() : null;
}

// Markers Vercel uses when it can't resolve the IP to a real country.
const UNKNOWN_COUNTRY = new Set(['XX', 'T1', 'A1', 'A2', 'O1']);

/**
 * True only when the request resolves to a confirmed country other than the US.
 * Unknown/unresolved locations (null, XX, Tor, anonymized) are NOT treated as
 * foreign, so legitimate US visitors behind VPNs/proxies aren't turned away.
 */
export function isConfirmedNonUS(country: string | null): boolean {
  return country !== null && country !== 'US' && !UNKNOWN_COUNTRY.has(country);
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: unknown): email is string {
  return typeof email === 'string' && email.length <= 254 && EMAIL_RE.test(email.trim());
}

/**
 * Verify an hCaptcha token against hCaptcha's siteverify endpoint.
 * Fail-open when HCAPTCHA_SECRET_KEY is unset so deploying this never takes the
 * forms down; set the env var in Vercel to activate strict enforcement.
 */
export async function verifyHCaptcha(
  token: unknown,
  ip: string,
): Promise<{ ok: boolean; reason?: string }> {
  const secret = process.env.HCAPTCHA_SECRET_KEY;
  if (!secret) {
    console.warn(
      '[guard] HCAPTCHA_SECRET_KEY not set — captcha verification skipped (fail-open). Set it in Vercel to enforce.',
    );
    return { ok: true, reason: 'secret-not-configured' };
  }
  if (typeof token !== 'string' || !token) return { ok: false, reason: 'missing-token' };
  try {
    const params = new URLSearchParams({ secret, response: token });
    if (ip && ip !== 'unknown') params.set('remoteip', ip);
    const res = await fetch('https://api.hcaptcha.com/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });
    const data = (await res.json()) as { success?: boolean; 'error-codes'?: string[] };
    if (data.success) return { ok: true };
    return { ok: false, reason: (data['error-codes'] || []).join(',') || 'verify-failed' };
  } catch (e) {
    console.error('[guard] hCaptcha verify error:', e);
    return { ok: false, reason: 'verify-exception' };
  }
}

export async function guardSubmission(
  req: NextRequest,
  body: Record<string, unknown>,
  opts: GuardOptions = {},
): Promise<GuardResult> {
  const ip = getClientIp(req);
  const country = getCountry(req);
  const honeypotField = opts.honeypotField || 'website';

  // 1. Honeypot — respond with a fake success so bots don't retry or adapt.
  const hp = body?.[honeypotField];
  if (typeof hp === 'string' && hp.trim() !== '') {
    console.warn('[guard] honeypot triggered — dropping submission', { ip, country });
    return { ok: false, ip, country, response: NextResponse.json({ success: true }) };
  }

  // 2. Email format.
  if (!isValidEmail(body?.email)) {
    return {
      ok: false,
      ip,
      country,
      response: NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 }),
    };
  }

  // 3. Geo gate: block only confirmed non-US locations. Unknown/unresolved
  // (local dev, VPNs, proxies, Tor) are allowed through to avoid turning away
  // legitimate US visitors whose IP doesn't cleanly geolocate.
  if (isConfirmedNonUS(country)) {
    console.warn('[guard] confirmed non-US submission blocked', { ip, country });
    return {
      ok: false,
      ip,
      country,
      response: NextResponse.json(
        { error: 'This form is available to United States residents only.' },
        { status: 403 },
      ),
    };
  }

  // 4. hCaptcha. Returning-user silent tracking shows no widget, so it's exempt.
  const isReturning = body?.is_returning === true;
  const requireCaptcha = opts.captcha === 'required' && !isReturning;
  const token = body?.captchaToken;
  if (requireCaptcha || (typeof token === 'string' && token)) {
    const v = await verifyHCaptcha(token, ip);
    if (!v.ok) {
      return {
        ok: false,
        ip,
        country,
        response: NextResponse.json(
          { error: 'Captcha verification failed. Please try again.' },
          { status: 400 },
        ),
      };
    }
  }

  return { ok: true, ip, country };
}
