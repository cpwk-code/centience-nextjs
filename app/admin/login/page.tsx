export const dynamic = 'force-dynamic';
import type { Metadata } from 'next';
import AdminLoginPage from '@/page-components/admin/AdminLoginPage';

export const metadata: Metadata = {
  title: 'Admin Login | Centience',
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminLoginPage />;
}
