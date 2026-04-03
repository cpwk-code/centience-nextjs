export const dynamic = 'force-dynamic';
import type { Metadata } from 'next';
import CMSPage from '@/page-components/admin/CMSPage';

export const metadata: Metadata = {
  title: 'CMS | Centience',
  robots: { index: false, follow: false },
};

export default function Page() {
  return <CMSPage />;
}
