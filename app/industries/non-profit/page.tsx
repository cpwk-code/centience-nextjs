import type { Metadata } from 'next';
import { getCMSSEO } from '@/lib/cms-seo';
import NonProfitPage from '@/page-components/NonProfitPage';

// ─── SEO Metadata (CMS-overridable) ─────────────────────────────────────────
export async function generateMetadata(): Promise<Metadata> {
  // ── CMS Override: fetch from Supabase admin panel ──────────────────────
  const cms = await getCMSSEO("/industries/non-profit");

  // ── Lovable defaults (extracted from <SEO> component at sync time) ──────
  const baseMetadata: Metadata = {
    title: "Managed IT Services for Nonprofits | 25–200 Users | Centience",
    description: "Secure, reliable IT support for nonprofit organizations with 25–200 users. Cybersecurity, Google Workspace, TechSoup support, and predictable pricing. Serving New York & Florida.",
    keywords: ["nonprofit IT support","managed IT for nonprofits","nonprofit cybersecurity","Google Workspace for nonprofits","TechSoup IT support","nonprofit managed services","nonprofit data protection","IT services for nonprofits","nonprofit technology solutions","nonprofit IT budget planning"],
    alternates: {
      canonical: "https://centience.ai/industries/non-profit",
    },
    openGraph: {
      title: "Managed IT Services for Nonprofits | 25–200 Users | Centience",
      description: "Secure, reliable IT support for nonprofit organizations with 25–200 users. Cybersecurity, Google Workspace, TechSoup support, and predictable pricing. Serving New York & Florida.",
      url: "https://centience.ai/industries/non-profit",
      type: 'website',
      siteName: 'Centience',
      images: [
        {
          url: "https://centience.ai/og-image.png",
          width: 1200,
          height: 630,
          alt: "Managed IT Services for Nonprofits | 25–200 Users | Centience",
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: "Managed IT Services for Nonprofits | 25–200 Users | Centience",
      description: "Secure, reliable IT support for nonprofit organizations with 25–200 users. Cybersecurity, Google Workspace, TechSoup support, and predictable pricing. Serving New York & Florida.",
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
  return <NonProfitPage />;
}
