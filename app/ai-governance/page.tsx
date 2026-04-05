import type { Metadata } from 'next';
import AIGovernancePage from '@/page-components/AIGovernancePage';

export const dynamic = 'force-dynamic';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "AI Governance for Responsible Adoption | Centience",
  description: "Centience AI governance programs help regulated firms adopt AI responsibly. Aligned with NIST AI RMF, ISO 42001, and EU AI Act. Manage AI risk before it becomes regulatory exposure.",
  keywords: ["AI governance","responsible AI","NIST AI RMF","ISO 42001","EU AI Act","AI risk management","AI compliance"],
  alternates: {
    canonical: "https://centience.ai/ai-governance",
  },
  openGraph: {
    title: "AI Governance for Responsible Adoption | Centience",
    description: "Centience AI governance programs help regulated firms adopt AI responsibly. Aligned with NIST AI RMF, ISO 42001, and EU AI Act. Manage AI risk before it becomes regulatory exposure.",
    url: "https://centience.ai/ai-governance",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Governance for Responsible Adoption | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Governance for Responsible Adoption | Centience",
    description: "Centience AI governance programs help regulated firms adopt AI responsibly. Aligned with NIST AI RMF, ISO 42001, and EU AI Act. Manage AI risk before it becomes regulatory exposure.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <AIGovernancePage />;
}
