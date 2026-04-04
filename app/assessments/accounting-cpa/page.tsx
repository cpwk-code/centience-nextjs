import type { Metadata } from 'next';
import AccountingCpaAssessment from '@/page-components/assessments/AccountingCpaAssessment';

export const dynamic = 'force-dynamic';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Accounting & CPA Firm Governance Assessment | Centience",
  description: "Free technology and AI governance assessment for accounting and CPA firms. Identify gaps relative to AICPA standards and SOC 2 requirements. Get your customized roadmap.",
  keywords: ["accounting firm assessment","CPA governance assessment","AICPA assessment","SOC 2 assessment","accounting technology assessment"],
  alternates: {
    canonical: "https://centience.ai/assessments/accounting-cpa",
  },
  openGraph: {
    title: "Accounting & CPA Firm Governance Assessment | Centience",
    description: "Free technology and AI governance assessment for accounting and CPA firms. Identify gaps relative to AICPA standards and SOC 2 requirements. Get your customized roadmap.",
    url: "https://centience.ai/assessments/accounting-cpa",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Accounting & CPA Firm Governance Assessment | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Accounting & CPA Firm Governance Assessment | Centience",
    description: "Free technology and AI governance assessment for accounting and CPA firms. Identify gaps relative to AICPA standards and SOC 2 requirements. Get your customized roadmap.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <AccountingCpaAssessment />;
}
