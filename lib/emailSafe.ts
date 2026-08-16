/**
 * Escaping helpers for anything a submitter typed that ends up in an email.
 *
 * Every lead-capture route builds its notification body by interpolating
 * submitted values into an HTML template. Without escaping, whatever someone
 * types arrives as live markup in a message sent from our own verified domain,
 * passing our own SPF and DKIM.
 *
 * The realistic abuse is not a script tag — mail clients strip those. It is a
 * plausible link: an "invoice" or "view results" anchor pointing anywhere,
 * wrapped in Centience branding. For the routes that notify hello@centience.ai
 * that is a phishing primitive aimed at our own inbox. For the assessment
 * results route, which sends to a caller-supplied address, it would be one
 * aimed at anyone.
 */

/** Escape for interpolation into an HTML text or attribute context. */
export function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Collapse to a single line and cap the length, for values that become part of
 * a Subject header. A newline here would let a submitter append their own
 * headers, so this is a correctness fix rather than a cosmetic one.
 */
export function subjectSafe(value: unknown, maxLength = 120): string {
  return String(value ?? '')
    .replace(/[\r\n]+/g, ' ')
    .trim()
    .slice(0, maxLength);
}

/** Trim and cap. Stops a multi-megabyte body reaching the inbox or the database. */
export function capped(value: unknown, maxLength: number): string {
  return String(value ?? '').trim().slice(0, maxLength);
}

/** Escape and cap in one step — the common case inside an email template. */
export function safe(value: unknown, maxLength = 500): string {
  return escapeHtml(capped(value, maxLength));
}
