export const dynamic = 'force-dynamic';
import type { Metadata } from 'next';
import AdminDashboard from '@/page-components/admin/AdminDashboard';

export const metadata: Metadata = {
  title: 'Admin Dashboard | Centience',
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminDashboard />;
}
