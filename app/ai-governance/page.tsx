import type { Metadata } from 'next';
import AIGovernancePage from '@/page-components/AIGovernancePage';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "AI Governance for Regulated Organizations — Deploy AI With Confidence | Centience",
  description: "Centience delivers AI governance programs that let regulated organizations deploy AI with documented oversight from day one — discovering AI usage, building governance frameworks aligned to SEC, FINRA, and HIPAA, and monitoring compliance continuously. NIST AI RMF, ISO 42001, and EU AI Act aligned.",
  keywords: ["AI governance regulated organizations","AI governance SEC FINRA","AI governance HIPAA","NIST AI RMF","ISO 42001","AI compliance","governed AI adoption","AI oversight program","continuous AI monitoring","AI risk management financial services"],
  alternates: {
    canonical: "https://centience.ai/ai-governance",
  },
  openGraph: {
    title: "AI Governance for Regulated Organizations | Centience",
    description: "Deploy AI with confidence. Centience discovers AI usage across your organization, builds governance frameworks aligned to SEC, FINRA, and HIPAA, and monitors compliance continuously. Governed AI is not a constraint on modernization — it is what makes modernization sustainable.",
    url: "https://centience.ai/ai-governance",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Governance for Regulated Organizations | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Governance for Regulated Organizations | Centience",
    description: "Deploy AI with confidence. Governed AI is not a constraint on modernization — it is what makes modernization sustainable. SEC, FINRA, and HIPAA aligned.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <AIGovernancePage />;
}
