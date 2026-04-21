import type { Metadata } from 'next';
import AccountingCpaPage from '@/page-components/industries/AccountingCpaPage';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Technology Governance for Accounting & CPA Firms | Centience",
  description: "Centience helps accounting and CPA firms build technology governance programs aligned with AICPA standards, SOC 2 requirements, and client data protection obligations.",
  keywords: ["accounting firm governance","CPA firm technology","AICPA compliance","SOC 2 compliance","accounting cybersecurity","client data protection"],
  alternates: {
    canonical: "https://centience.ai/industries/accounting-cpa",
  },
  openGraph: {
    title: "Technology Governance for Accounting & CPA Firms | Centience",
    description: "Centience helps accounting and CPA firms build technology governance programs aligned with AICPA standards, SOC 2 requirements, and client data protection obligations.",
    url: "https://centience.ai/industries/accounting-cpa",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Technology Governance for Accounting & CPA Firms | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Technology Governance for Accounting & CPA Firms | Centience",
    description: "Centience helps accounting and CPA firms build technology governance programs aligned with AICPA standards, SOC 2 requirements, and client data protection obligations.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <AccountingCpaPage />;
}
