import type { Metadata } from 'next';
import CybersecurityPage from '@/page-components/CybersecurityPage';

export const dynamic = 'force-dynamic';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Cybersecurity Governance for Regulated Industries | Centience",
  description: "Centience cybersecurity governance programs treat security as a governance discipline — not just a technical function. Built for financial services, healthcare, and regulated organizations.",
  keywords: ["cybersecurity governance","security governance","regulated industries","cybersecurity compliance","financial services security","healthcare cybersecurity"],
  alternates: {
    canonical: "https://centience.ai/cybersecurity",
  },
  openGraph: {
    title: "Cybersecurity Governance for Regulated Industries | Centience",
    description: "Centience cybersecurity governance programs treat security as a governance discipline — not just a technical function. Built for financial services, healthcare, and regulated organizations.",
    url: "https://centience.ai/cybersecurity",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cybersecurity Governance for Regulated Industries | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cybersecurity Governance for Regulated Industries | Centience",
    description: "Centience cybersecurity governance programs treat security as a governance discipline — not just a technical function. Built for financial services, healthcare, and regulated organizations.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <CybersecurityPage />;
}
