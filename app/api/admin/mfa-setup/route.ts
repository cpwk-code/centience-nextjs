import { NextRequest, NextResponse } from 'next/server';
import { TOTP } from 'otpauth';
import QRCode from 'qrcode';
import { verifySessionToken, getAdminUsers, SESSION_COOKIE } from '@/lib/session';

export async function GET(req: NextRequest) {
  try {
    // Require a valid pre-MFA session
    const token = req.cookies.get(SESSION_COOKIE)?.value;
    if (!token) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const session = await verifySessionToken(token);
    if (!session) {
      return NextResponse.json({ error: 'Session expired' }, { status: 401 });
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

    const otpauthUrl = totp.toString();
    const qrCodeDataUrl = await QRCode.toDataURL(otpauthUrl);

    return NextResponse.json({
      qrCode: qrCodeDataUrl,
      secret: user.totpSecret,
      otpauthUrl,
    });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
