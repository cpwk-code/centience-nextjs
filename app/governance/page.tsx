import type { Metadata } from 'next';
import GovernancePage from '@/page-components/GovernancePage';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Continuous Technology Governance Programs | Centience",
  description: "Centience delivers continuous technology governance as a managed operating program — combining infrastructure governance, cybersecurity oversight, and AI governance into a single continuously enforced model for regulated organizations. Not a one-time engagement.",
  keywords: ["continuous technology governance","managed technology governance","technology governance program","infrastructure governance","cybersecurity governance","AI governance","regulated organizations","ongoing governance program"],
  alternates: {
    canonical: "https://centience.ai/governance",
  },
  openGraph: {
    title: "Continuous Technology Governance Programs | Centience",
    description: "Three integrated governance programs — infrastructure, cybersecurity, and AI — delivered as a single continuously managed operating model for regulated organizations. Assessment to roadmap to ongoing program.",
    url: "https://centience.ai/governance",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Continuous Technology Governance Programs | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Continuous Technology Governance Programs | Centience",
    description: "Three integrated governance programs delivered as a single continuously managed operating model. Assessment → Roadmap → Ongoing Program.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <GovernancePage />;
}
