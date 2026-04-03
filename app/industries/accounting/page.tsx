import type { Metadata } from 'next';
import { getCMSSEO } from '@/lib/cms-seo';
import AccountingPage from '@/page-components/AccountingPage';

// ─── SEO Metadata (CMS-overridable) ─────────────────────────────────────────
export async function generateMetadata(): Promise<Metadata> {
  // ── CMS Override: fetch from Supabase admin panel ──────────────────────
  const cms = await getCMSSEO("/industries/accounting");

  // ── Lovable defaults (extracted from <SEO> component at sync time) ──────
  const baseMetadata: Metadata = {
    title: "Managed IT & Cybersecurity for CPA & Accounting Firms | Centience",
    description: "Secure IT, cybersecurity, and compliance solutions for CPA firms and bookkeeping practices. IRS, AICPA, and SOC aligned with 24/7 support, especially during tax season.",
    keywords: ["accounting firm IT support","CPA firm cybersecurity","managed IT for accountants","bookkeeping firm IT services","IRS compliant IT solutions","AICPA compliance IT services","SOC 2 compliance for accountants","tax season IT support","accounting firm data protection","CPA firm managed services"],
    alternates: {
      canonical: "https://centience.ai/industries/accounting",
    },
    openGraph: {
      title: "Managed IT & Cybersecurity for CPA & Accounting Firms | Centience",
      description: "Secure IT, cybersecurity, and compliance solutions for CPA firms and bookkeeping practices. IRS, AICPA, and SOC aligned with 24/7 support, especially during tax season.",
      url: "https://centience.ai/industries/accounting",
      type: 'website',
      siteName: 'Centience',
      images: [
        {
          url: "https://centience.ai/og-image.png",
          width: 1200,
          height: 630,
          alt: "Managed IT & Cybersecurity for CPA & Accounting Firms | Centience",
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: "Managed IT & Cybersecurity for CPA & Accounting Firms | Centience",
      description: "Secure IT, cybersecurity, and compliance solutions for CPA firms and bookkeeping practices. IRS, AICPA, and SOC aligned with 24/7 support, especially during tax season.",
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
  return <AccountingPage />;
}
