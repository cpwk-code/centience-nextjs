import type { Metadata } from 'next';
import NonProfitPage from '@/page-components/industries/NonProfitPage';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Technology Governance for Non-Profit Organizations | Centience",
  description: "Centience helps non-profit organizations build technology governance programs that protect donor data, satisfy grant requirements, and demonstrate responsible stewardship of technology resources.",
  keywords: ["non-profit governance","non-profit technology","donor data protection","grant compliance","non-profit cybersecurity","charitable organization compliance"],
  alternates: {
    canonical: "https://centience.ai/industries/non-profit",
  },
  openGraph: {
    title: "Technology Governance for Non-Profit Organizations | Centience",
    description: "Centience helps non-profit organizations build technology governance programs that protect donor data, satisfy grant requirements, and demonstrate responsible stewardship of technology resources.",
    url: "https://centience.ai/industries/non-profit",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Technology Governance for Non-Profit Organizations | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Technology Governance for Non-Profit Organizations | Centience",
    description: "Centience helps non-profit organizations build technology governance programs that protect donor data, satisfy grant requirements, and demonstrate responsible stewardship of technology resources.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <NonProfitPage />;
}
