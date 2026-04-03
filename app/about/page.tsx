import type { Metadata } from 'next';
import { getCMSSEO } from '@/lib/cms-seo';
import AboutPage from '@/page-components/AboutPage';

// ─── SEO Metadata (CMS-overridable) ─────────────────────────────────────────
export async function generateMetadata(): Promise<Metadata> {
  // ── CMS Override: fetch from Supabase admin panel ──────────────────────
  const cms = await getCMSSEO("/about");

  // ── Lovable defaults (extracted from <SEO> component at sync time) ──────
  const baseMetadata: Metadata = {
    title: "About Centience | 20+ Years of Compliance-Focused IT",
    description: "Since 2005, Centience has been the trusted IT partner for financial services, law firms, and healthcare organizations. Learn about our mission, leadership, and values.",
    keywords: ["about Centience","IT company history","compliance IT experts","managed services provider","Orville Matias","IT leadership"],
    alternates: {
      canonical: "https://centience.ai/about",
    },
    openGraph: {
      title: "About Centience | 20+ Years of Compliance-Focused IT",
      description: "Since 2005, Centience has been the trusted IT partner for financial services, law firms, and healthcare organizations. Learn about our mission, leadership, and values.",
      url: "https://centience.ai/about",
      type: 'website',
      siteName: 'Centience',
      images: [
        {
          url: "https://centience.ai/og-image.png",
          width: 1200,
          height: 630,
          alt: "About Centience | 20+ Years of Compliance-Focused IT",
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: "About Centience | 20+ Years of Compliance-Focused IT",
      description: "Since 2005, Centience has been the trusted IT partner for financial services, law firms, and healthcare organizations. Learn about our mission, leadership, and values.",
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
  return <AboutPage />;
}
