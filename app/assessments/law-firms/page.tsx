import type { Metadata } from 'next';
import LawFirmsAssessment from '@/page-components/assessments/LawFirmsAssessment';

export const dynamic = 'force-dynamic';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Law Firm Technology Governance Assessment | Centience",
  description: "Free technology and AI governance assessment for law firms. Identify gaps in client data security, AI adoption governance, and technology risk management. Get your roadmap.",
  keywords: ["law firm governance assessment","legal technology assessment","law firm AI assessment","legal compliance assessment","attorney technology governance"],
  alternates: {
    canonical: "https://centience.ai/assessments/law-firms",
  },
  openGraph: {
    title: "Law Firm Technology Governance Assessment | Centience",
    description: "Free technology and AI governance assessment for law firms. Identify gaps in client data security, AI adoption governance, and technology risk management. Get your roadmap.",
    url: "https://centience.ai/assessments/law-firms",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Law Firm Technology Governance Assessment | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Law Firm Technology Governance Assessment | Centience",
    description: "Free technology and AI governance assessment for law firms. Identify gaps in client data security, AI adoption governance, and technology risk management. Get your roadmap.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <LawFirmsAssessment />;
}
