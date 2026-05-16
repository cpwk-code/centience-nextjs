import type { Metadata } from 'next';
import AccountingCpaPage from '@/page-components/industries/AccountingCpaPage';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "AI Governance for CPA and Accounting Firms — Tax, Audit & Advisory Practice | Centience",
  description: "Centience delivers AI and technology governance for CPA and accounting firms deploying AI in tax, audit, and advisory workflows — protecting client financial data, managing professional liability risk, and meeting AICPA standards and the FTC Safeguards Rule. Governing Gramm-Leach-Bliley subject firms.",
  keywords: ["CPA AI governance","accounting firm AI governance","AICPA technology governance","FTC Safeguards Rule accounting","Gramm-Leach-Bliley CPA","tax firm AI governance","audit firm technology governance","CPA cybersecurity","accounting data governance","AI independence risk attest"],
  alternates: {
    canonical: "https://centience.ai/industries/accounting-cpa",
  },
  openGraph: {
    title: "AI Governance for CPA & Accounting Firms | Centience",
    description: "AI and technology governance for CPA and accounting firms — protecting client financial data, managing AI professional liability, and meeting AICPA and FTC Safeguards Rule requirements. Gramm-Leach-Bliley compliant.",
    url: "https://centience.ai/industries/accounting-cpa",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Governance for CPA & Accounting Firms | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Governance for CPA & Accounting Firms | Centience",
    description: "AI governance for tax, audit, and advisory practice. AICPA standards. FTC Safeguards Rule. Professional liability protection.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <AccountingCpaPage />;
}
