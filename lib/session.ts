import { SignJWT, jwtVerify } from 'jose';

const SESSION_COOKIE = 'cpwk_admin_session';
const SESSION_DURATION = 8 * 60 * 60; // 8 hours in seconds

function getSecret(): Uint8Array {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error('JWT_SECRET environment variable is not set');
  return new TextEncoder().encode(secret);
}

export type UserRole = 'admin' | 'editor';

export interface SessionPayload {
  email: string;
  role: UserRole;
  mfaVerified: boolean;
}

export interface AdminUser {
  email: string;
  password: string;
  role: UserRole;
  totpSecret: string;
}

/**
 * Parse the ADMIN_USERS environment variable.
 * Format: JSON array of AdminUser objects.
 * Falls back to legacy ADMIN_EMAIL / ADMIN_PASSWORD / TOTP_SECRET env vars
 * so existing deployments keep working.
 */
export function getAdminUsers(): AdminUser[] {
  const raw = process.env.ADMIN_USERS;
  if (raw) {
    try {
      return JSON.parse(raw) as AdminUser[];
    } catch {
      throw new Error('ADMIN_USERS env var is not valid JSON');
    }
  }

  // Legacy single-user fallback
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  const totpSecret = process.env.TOTP_SECRET;
  if (email && password && totpSecret) {
    return [{ email, password, role: 'admin', totpSecret }];
  }

  throw new Error('No admin users configured. Set ADMIN_USERS or ADMIN_EMAIL/ADMIN_PASSWORD/TOTP_SECRET.');
}

export async function createSessionToken(payload: SessionPayload): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_DURATION}s`)
    .sign(getSecret());
}

export async function verifySessionToken(token: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, getSecret());
    return {
      email: payload.email as string,
      role: (payload.role as UserRole) ?? 'editor',
      mfaVerified: payload.mfaVerified as boolean,
    };
  } catch {
    return null;
  }
}

export { SESSION_COOKIE };
