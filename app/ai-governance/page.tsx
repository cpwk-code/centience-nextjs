import type { Metadata } from 'next';
import AIGovernancePage from '@/page-components/AIGovernancePage';

export const metadata: Metadata = {
  title: "AI Governance — Implementation, Integration & Management | Centience",
  description: "Centience implements AI tools inside your governed infrastructure, integrates them into your workflows, and manages day-to-day AI governance operations. We lead AI governance for regulated organizations — from discovery through ongoing management.",
  keywords: ["AI governance", "AI implementation", "AI integration", "AI governance management", "regulated AI", "NIST AI RMF", "ISO 42001", "SEC AI governance", "FINRA AI", "HIPAA AI governance"],
  alternates: { canonical: "https://centience.ai/ai-governance" },
  openGraph: {
    title: "AI Governance — Implementation, Integration & Management | Centience",
    description: "We don't hand you a framework and walk away. Centience implements AI tools, integrates them into your workflows, and manages the day-to-day governance program for regulated organizations.",
    url: "https://centience.ai/ai-governance",
    type: 'website',
    siteName: 'Centience',
    images: [{ url: "https://centience.ai/og-image.png", width: 1200, height: 630, alt: "AI Governance — Implementation, Integration & Management | Centience" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Governance — Implementation, Integration & Management | Centience",
    description: "We implement AI tools, integrate them into your workflows, and manage day-to-day AI governance for regulated organizations.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <AIGovernancePage />;
}
