import type { Metadata } from 'next';
import { getCMSSEO } from '@/lib/cms-seo';
import HealthcarePage from '@/page-components/HealthcarePage';

// ─── SEO Metadata (CMS-overridable) ─────────────────────────────────────────
export async function generateMetadata(): Promise<Metadata> {
  // ── CMS Override: fetch from Supabase admin panel ──────────────────────
  const cms = await getCMSSEO("/industries/healthcare");

  // ── Lovable defaults (extracted from <SEO> component at sync time) ──────
  const baseMetadata: Metadata = {
    title: "HIPAA Compliant IT Services for Healthcare | Centience",
    description: "Secure, HIPAA-compliant IT and cybersecurity for medical and dental practices. Protect ePHI, pass HHS audits, and keep systems running 24/7 with Centience.",
    keywords: ["managed IT services","cybersecurity","compliance"],
    alternates: {
      canonical: "https://centience.ai/industries/healthcare",
    },
    openGraph: {
      title: "HIPAA Compliant IT Services for Healthcare | Centience",
      description: "Secure, HIPAA-compliant IT and cybersecurity for medical and dental practices. Protect ePHI, pass HHS audits, and keep systems running 24/7 with Centience.",
      url: "https://centience.ai/industries/healthcare",
      type: 'website',
      siteName: 'Centience',
      images: [
        {
          url: "https://centience.ai/og-image.png",
          width: 1200,
          height: 630,
          alt: "HIPAA Compliant IT Services for Healthcare | Centience",
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: "HIPAA Compliant IT Services for Healthcare | Centience",
      description: "Secure, HIPAA-compliant IT and cybersecurity for medical and dental practices. Protect ePHI, pass HHS audits, and keep systems running 24/7 with Centience.",
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
  return <HealthcarePage />;
}
