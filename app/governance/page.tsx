import type { Metadata } from 'next';
import GovernancePage from '@/page-components/GovernancePage';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Technology Governance Programs | Centience",
  description: "Structured technology governance programs for regulated organizations. From assessment to roadmap to full program implementation — Centience builds governance that holds up under regulatory scrutiny.",
  keywords: ["technology governance","IT governance","governance program","regulatory compliance","risk management","compliance framework"],
  alternates: {
    canonical: "https://centience.ai/governance",
  },
  openGraph: {
    title: "Technology Governance Programs | Centience",
    description: "Structured technology governance programs for regulated organizations. From assessment to roadmap to full program implementation — Centience builds governance that holds up under regulatory scrutiny.",
    url: "https://centience.ai/governance",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Technology Governance Programs | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Technology Governance Programs | Centience",
    description: "Structured technology governance programs for regulated organizations. From assessment to roadmap to full program implementation — Centience builds governance that holds up under regulatory scrutiny.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <GovernancePage />;
}
