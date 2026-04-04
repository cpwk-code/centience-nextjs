import type { Metadata } from 'next';
import NonProfitAssessment from '@/page-components/assessments/NonProfitAssessment';

export const dynamic = 'force-dynamic';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Non-Profit Technology Governance Assessment | Centience",
  description: "Free technology and AI governance assessment for non-profit organizations. Identify gaps in donor data protection, grant compliance, and technology stewardship. Get your roadmap.",
  keywords: ["non-profit governance assessment","non-profit technology assessment","donor data assessment","grant compliance assessment","charitable organization assessment"],
  alternates: {
    canonical: "https://centience.ai/assessments/non-profit",
  },
  openGraph: {
    title: "Non-Profit Technology Governance Assessment | Centience",
    description: "Free technology and AI governance assessment for non-profit organizations. Identify gaps in donor data protection, grant compliance, and technology stewardship. Get your roadmap.",
    url: "https://centience.ai/assessments/non-profit",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Non-Profit Technology Governance Assessment | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Non-Profit Technology Governance Assessment | Centience",
    description: "Free technology and AI governance assessment for non-profit organizations. Identify gaps in donor data protection, grant compliance, and technology stewardship. Get your roadmap.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <NonProfitAssessment />;
}
