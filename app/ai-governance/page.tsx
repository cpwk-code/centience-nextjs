import type { Metadata } from 'next';
import AIGovernancePage from '@/page-components/AIGovernancePage';

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "AI Governance Implementation & Management for Regulated Organizations | Centience",
  description: "Centience implements AI tools, integrates them into your workflows, and manages day-to-day AI governance operations — from usage discovery through executive reporting. We lead AI governance so your organization captures the benefit without the regulatory exposure.",
  keywords: ["AI governance","AI implementation","AI integration","AI governance management","regulated AI","NIST AI RMF","ISO 42001","SEC AI compliance","FINRA AI","HIPAA AI governance","AI risk management","AI governance program"],
  alternates: { canonical: "https://centience.ai/ai-governance" },
  openGraph: {
    title: "AI Governance Implementation & Management for Regulated Organizations | Centience",
    description: "We don't hand you a framework and walk away. Centience implements AI tools, integrates them into your workflows, and manages day-to-day AI governance operations for regulated organizations.",
    url: "https://centience.ai/ai-governance",
    type: 'website',
    siteName: 'Centience',
    images: [{ url: "https://centience.ai/og-image.png", width: 1200, height: 630, alt: "AI Governance Implementation & Management | Centience" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Governance Implementation & Management | Centience",
    description: "We implement AI tools, integrate them into your workflows, and manage day-to-day AI governance — not just a framework delivery.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <AIGovernancePage />;
}
