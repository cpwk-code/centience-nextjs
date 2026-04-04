import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';
import FinancialServicesAssessment from '@/page-components/assessments/FinancialServicesAssessment';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Financial Services Governance Assessment | Centience",
  description: "Free technology and AI governance assessment for financial services firms. Identify gaps relative to SEC, FINRA, and OCC requirements. Get your customized governance roadmap.",
  keywords: ["financial services assessment","SEC governance assessment","FINRA compliance assessment","financial technology assessment","investment firm governance"],
  alternates: {
    canonical: "https://centience.ai/assessments/financial-services",
  },
  openGraph: {
    title: "Financial Services Governance Assessment | Centience",
    description: "Free technology and AI governance assessment for financial services firms. Identify gaps relative to SEC, FINRA, and OCC requirements. Get your customized governance roadmap.",
    url: "https://centience.ai/assessments/financial-services",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Financial Services Governance Assessment | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Financial Services Governance Assessment | Centience",
    description: "Free technology and AI governance assessment for financial services firms. Identify gaps relative to SEC, FINRA, and OCC requirements. Get your customized governance roadmap.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <FinancialServicesAssessment />;
}
