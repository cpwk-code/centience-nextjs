import { NextRequest, NextResponse } from 'next/server';
import { TOTP } from 'otpauth';
import { verifySessionToken, createSessionToken, getAdminUsers, SESSION_COOKIE } from '@/lib/session';

export async function POST(req: NextRequest) {
  try {
    const { code } = await req.json();

    // Verify the pre-MFA session cookie exists
    const token = req.cookies.get(SESSION_COOKIE)?.value;
    if (!token) {
      return NextResponse.json({ error: 'No session found. Please log in again.' }, { status: 401 });
    }

    const session = await verifySessionToken(token);
    if (!session) {
      return NextResponse.json({ error: 'Session expired. Please log in again.' }, { status: 401 });
    }

    if (session.mfaVerified) {
      return NextResponse.json({ error: 'MFA already verified.' }, { status: 400 });
    }

    // Look up the user's TOTP secret
    let users;
    try {
      users = getAdminUsers();
    } catch {
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const user = users.find(
      (u) => u.email.trim().toLowerCase() === session.email.trim().toLowerCase()
    );

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 401 });
    }

    const totp = new TOTP({
      issuer: 'Centience Admin',
      label: session.email,
      algorithm: 'SHA1',
      digits: 6,
      period: 30,
      secret: user.totpSecret,
    });

    const delta = totp.validate({ token: code.replace(/\s/g, ''), window: 1 });

    if (delta === null) {
      return NextResponse.json({ error: 'Invalid or expired code. Please try again.' }, { status: 401 });
    }

    // Issue a full session token (mfaVerified: true), valid for 8 hours
    const fullToken = await createSessionToken({
      email: session.email,
      role: session.role,
      mfaVerified: true,
    });

    const response = NextResponse.json({ success: true });
    response.cookies.set(SESSION_COOKIE, fullToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 8 * 60 * 60, // 8 hours
    });

    return response;
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
