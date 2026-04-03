export const dynamic = 'force-dynamic';
import type { Metadata } from 'next';
import MFASetupPage from '@/page-components/admin/MFASetupPage';

export const metadata: Metadata = {
  title: 'MFA Setup | Centience Admin',
  robots: { index: false, follow: false },
};

export default function Page() {
  return <MFASetupPage />;
}
