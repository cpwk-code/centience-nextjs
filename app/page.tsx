import type { Metadata } from 'next';
import Index from '@/page-components/Index';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Centience — Continuous AI & Technology Governance for Regulated Organizations",
  description: "Centience builds and operates continuous AI and technology governance programs for regulated organizations — combining managed infrastructure, cybersecurity oversight, and AI governance into a single continuously enforced model. Serving broker-dealers, RIAs, healthcare organizations, private equity firms, and legal and professional services firms.",
  keywords: ["continuous AI governance","technology governance","AI governance for regulated organizations","cybersecurity governance","managed infrastructure","SEC FINRA compliance","HIPAA compliance","AI oversight","continuous technology governance"],
  alternates: {
    canonical: "https://centience.ai",
  },
  openGraph: {
    title: "Centience — Continuous AI & Technology Governance for Regulated Organizations",
    description: "Centience builds and operates continuous AI and technology governance programs for regulated organizations. Technically enforced. Continuously managed. Serving financial services, healthcare, private equity, and legal firms.",
    url: "https://centience.ai",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Centience — Continuous AI & Technology Governance for Regulated Organizations",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Centience — Continuous AI & Technology Governance for Regulated Organizations",
    description: "Centience builds and operates continuous AI and technology governance programs for regulated organizations. Technically enforced. Continuously managed.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <Index />;
}
