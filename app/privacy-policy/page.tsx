import type { Metadata } from 'next';
import { getCMSSEO } from '@/lib/cms-seo';
import PrivacyPolicyPage from '@/page-components/PrivacyPolicyPage';

// ─── SEO Metadata (CMS-overridable) ─────────────────────────────────────────
export async function generateMetadata(): Promise<Metadata> {
  // ── CMS Override: fetch from Supabase admin panel ──────────────────────
  const cms = await getCMSSEO("/privacy-policy");

  // ── Lovable defaults (extracted from <SEO> component at sync time) ──────
  const baseMetadata: Metadata = {
    title: "Privacy Policy | Centience",
    description: "Learn how Centience collects, uses, and protects your personal information. Our privacy policy outlines our commitment to data security and your privacy rights.",
    keywords: ["managed IT services","cybersecurity","compliance"],
    alternates: {
      canonical: "https://centience.aihttps://centience.ai/privacy-policy",
    },
    openGraph: {
      title: "Privacy Policy | Centience",
      description: "Learn how Centience collects, uses, and protects your personal information. Our privacy policy outlines our commitment to data security and your privacy rights.",
      url: "https://centience.aihttps://centience.ai/privacy-policy",
      type: 'website',
      siteName: 'Centience',
      images: [
        {
          url: "https://centience.ai/og-image.png",
          width: 1200,
          height: 630,
          alt: "Privacy Policy | Centience",
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: "Privacy Policy | Centience",
      description: "Learn how Centience collects, uses, and protects your personal information. Our privacy policy outlines our commitment to data security and your privacy rights.",
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
  return <PrivacyPolicyPage />;
}
