import { NextRequest, NextResponse } from 'next/server';
import { createSessionToken, getAdminUsers, SESSION_COOKIE } from '@/lib/session';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    let users;
    try {
      users = getAdminUsers();
    } catch {
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // Find matching user (case-insensitive email)
    const user = users.find(
      (u) => u.email.trim().toLowerCase() === email.trim().toLowerCase()
    );

    // Constant-time-ish delay to prevent timing attacks
    await new Promise((r) => setTimeout(r, 500));

    if (!user || user.password.trim() !== password.trim()) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    // Issue a pre-MFA session token (mfaVerified: false)
    const token = await createSessionToken({
      email: user.email,
      role: user.role,
      mfaVerified: false,
    });

    const response = NextResponse.json({ success: true, requiresMfa: true });
    response.cookies.set(SESSION_COOKIE, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 10 * 60, // 10 minutes to complete MFA
    });

    return response;
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
