import type { Metadata } from 'next';
import InsightsPage from '@/page-components/InsightsPage';

export const dynamic = 'force-dynamic';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Governance Insights & Resources | Centience",
  description: "Expert insights on AI governance, technology governance, cybersecurity, and compliance for regulated organizations. Practical guidance from Centience practitioners.",
  keywords: ["AI governance insights","technology governance resources","compliance insights","cybersecurity guidance","regulatory updates","governance best practices"],
  alternates: {
    canonical: "https://centience.ai/insights",
  },
  openGraph: {
    title: "Governance Insights & Resources | Centience",
    description: "Expert insights on AI governance, technology governance, cybersecurity, and compliance for regulated organizations. Practical guidance from Centience practitioners.",
    url: "https://centience.ai/insights",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Governance Insights & Resources | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Governance Insights & Resources | Centience",
    description: "Expert insights on AI governance, technology governance, cybersecurity, and compliance for regulated organizations. Practical guidance from Centience practitioners.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <InsightsPage />;
}
