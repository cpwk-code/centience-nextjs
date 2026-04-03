import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const SESSION_COOKIE = 'cpwk_admin_session';

const PUBLIC_ROUTES = [
  '/admin/login',
  '/api/admin/login',
  '/api/admin/mfa-verify',
  '/api/admin/mfa-setup',
];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isAdminRoute = pathname.startsWith('/admin') || pathname.startsWith('/api/admin');
  if (!isAdminRoute) return NextResponse.next();

  if (PUBLIC_ROUTES.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  const token = req.cookies.get(SESSION_COOKIE)?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }

  try {
    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error('JWT_SECRET not set');

    const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));

    if (!payload.mfaVerified) {
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }

    return NextResponse.next();
  } catch {
    const response = NextResponse.redirect(new URL('/admin/login', req.url));
    response.cookies.set(SESSION_COOKIE, '', { maxAge: 0, path: '/' });
    return response;
  }
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};
