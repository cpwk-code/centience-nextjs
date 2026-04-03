import type { Metadata } from 'next';
import AIGovernanceAssessment from '@/page-components/AIGovernanceAssessment';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Free AI Governance Risk Assessment | Centience",
  description: "Take the free Centience AI Governance Risk Assessment. Identify gaps in your AI governance program and receive a customized roadmap aligned with NIST AI RMF and ISO 42001.",
  keywords: ["AI governance risk assessment","AI risk assessment","NIST AI RMF assessment","ISO 42001 assessment","AI compliance assessment","free AI assessment"],
  alternates: {
    canonical: "https://centience.ai/ai-governance-risk-assessment",
  },
  openGraph: {
    title: "Free AI Governance Risk Assessment | Centience",
    description: "Take the free Centience AI Governance Risk Assessment. Identify gaps in your AI governance program and receive a customized roadmap aligned with NIST AI RMF and ISO 42001.",
    url: "https://centience.ai/ai-governance-risk-assessment",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Free AI Governance Risk Assessment | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Free AI Governance Risk Assessment | Centience",
    description: "Take the free Centience AI Governance Risk Assessment. Identify gaps in your AI governance program and receive a customized roadmap aligned with NIST AI RMF and ISO 42001.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <AIGovernanceAssessment />;
}
