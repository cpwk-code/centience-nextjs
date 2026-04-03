import type { Metadata } from 'next';
import { getCMSSEO } from '@/lib/cms-seo';
import FinancialServicesPage from '@/page-components/FinancialServicesPage';

// ─── SEO Metadata (CMS-overridable) ─────────────────────────────────────────
export async function generateMetadata(): Promise<Metadata> {
  // ── CMS Override: fetch from Supabase admin panel ──────────────────────
  const cms = await getCMSSEO("/industries/financial-services");

  // ── Lovable defaults (extracted from <SEO> component at sync time) ──────
  const baseMetadata: Metadata = {
    title: "Managed IT & Cybersecurity for Financial Services | Centience",
    description: "Audit-ready IT, cybersecurity, and compliance for financial firms. SEC, FINRA, NYDFS, and multi-state aligned solutions with 24/7 support to keep your business secure.",
    keywords: ["managed IT services","cybersecurity","compliance"],
    alternates: {
      canonical: "https://centience.ai/industries/financial-services",
    },
    openGraph: {
      title: "Managed IT & Cybersecurity for Financial Services | Centience",
      description: "Audit-ready IT, cybersecurity, and compliance for financial firms. SEC, FINRA, NYDFS, and multi-state aligned solutions with 24/7 support to keep your business secure.",
      url: "https://centience.ai/industries/financial-services",
      type: 'website',
      siteName: 'Centience',
      images: [
        {
          url: "https://centience.ai/og-image.png",
          width: 1200,
          height: 630,
          alt: "Managed IT & Cybersecurity for Financial Services | Centience",
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: "Managed IT & Cybersecurity for Financial Services | Centience",
      description: "Audit-ready IT, cybersecurity, and compliance for financial firms. SEC, FINRA, NYDFS, and multi-state aligned solutions with 24/7 support to keep your business secure.",
      images: ["https://centience.ai/og-image.png"],
    },
  };

  // ── Merge: CMS values override Lovable defaults ─────────────────────────
  if (!cms) return baseMetadata;
  return {
    ...baseMetadata,
    ...(cms.meta_title && { title: cms.meta_title }),
    ...(cms.meta_description && { description: cms.meta_description }),
    ...(cms.keywords && { keywords: cms.keywords.split(',').map((k) => k.trim()) }),
    ...(cms.no_index && { robots: { index: false, follow: false } }),
    ...(cms.canonical_url && { alternates: { canonical: cms.canonical_url } }),
    ...((cms.og_title || cms.og_description || cms.og_image_url) && {
      openGraph: {
        ...(baseMetadata.openGraph || {}),
        ...(cms.og_title && { title: cms.og_title }),
        ...(cms.og_description && { description: cms.og_description }),
        ...(cms.og_image_url && { images: [{ url: cms.og_image_url, width: 1200, height: 630, alt: cms.og_title || '' }] }),
      },
    }),
    ...((cms.og_title || cms.og_description || cms.og_image_url) && {
      twitter: {
        ...(baseMetadata.twitter || {}),
        ...(cms.og_title && { title: cms.og_title }),
        ...(cms.og_description && { description: cms.og_description }),
        ...(cms.og_image_url && { images: [cms.og_image_url] }),
      },
    }),
  };
}

export default function Page() {
  return <FinancialServicesPage />;
}
