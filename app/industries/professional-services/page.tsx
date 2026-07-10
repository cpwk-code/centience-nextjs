import type { Metadata } from 'next';
import { getCMSSEO } from '@/lib/cms-seo';
import ProfessionalServicesPage from '@/page-components/ProfessionalServicesPage';

export const dynamic = 'force-dynamic';

// ─── SEO Metadata (CMS-overridable) ─────────────────────────────────────────
export async function generateMetadata(): Promise<Metadata> {
  // ── CMS Override: fetch from Supabase admin panel ──────────────────────
  const cms = await getCMSSEO("/industries/professional-services");

  // ── Lovable defaults (extracted from <SEO> component at sync time) ──────
  const baseMetadata: Metadata = {
    title: "Technology Governance for Professional Services Firms | Centience",
    description: "Continuous AI, cybersecurity, data, and infrastructure governance for accounting, consulting, and professional services firms — audit-ready, with SOC 2 and client-data protection built in.",
    keywords: ["professional services technology governance","AI governance professional services","consulting firm governance","accounting firm governance","SOC 2 governance","cybersecurity governance professional services","client data governance","regulated professional services"],
    alternates: {
      canonical: "https://centience.ai/industries/professional-services",
    },
    openGraph: {
      title: "Technology Governance for Professional Services Firms | Centience",
      description: "Continuous AI, cybersecurity, data, and infrastructure governance for accounting, consulting, and professional services firms — audit-ready, with SOC 2 and client-data protection built in.",
      url: "https://centience.ai/industries/professional-services",
      type: 'website',
      siteName: 'Centience',
      images: [
        {
          url: "https://centience.ai/og-image.png",
          width: 1200,
          height: 630,
          alt: "Technology Governance for Professional Services Firms | Centience",
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: "Technology Governance for Professional Services Firms | Centience",
      description: "Continuous AI, cybersecurity, data, and infrastructure governance for accounting, consulting, and professional services firms — audit-ready, with SOC 2 and client-data protection built in.",
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
  return <ProfessionalServicesPage />;
}
