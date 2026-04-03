export const dynamic = 'force-dynamic';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import CMSPage from '@/page-components/admin/CMSPage';

export const metadata: Metadata = {
  title: 'CMS | Centience',
  robots: { index: false, follow: false },
};

// Catch-all route for all CMS sub-paths:
// /admin/cms/blog, /admin/cms/blog/new, /admin/cms/blog/[id]/edit
// /admin/cms/services, /admin/cms/industries, /admin/cms/pages, /admin/cms/seo
// All render the same CMSPage component which reads the path internally
// via usePathname() to determine which section/editor to show.
export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <CMSPage />
    </Suspense>
  );
}
