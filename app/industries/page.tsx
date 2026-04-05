import type { Metadata } from 'next';
import IndustriesPage from '@/page-components/IndustriesPage';

export const dynamic = 'force-dynamic';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Governance for Regulated Industries | Centience",
  description: "Centience serves financial services, healthcare, and other regulated industries with deep expertise in sector-specific compliance requirements, regulatory frameworks, and governance standards.",
  keywords: ["regulated industries","financial services governance","healthcare governance","industry compliance","sector compliance","regulatory frameworks"],
  alternates: {
    canonical: "https://centience.ai/industries",
  },
  openGraph: {
    title: "Governance for Regulated Industries | Centience",
    description: "Centience serves financial services, healthcare, and other regulated industries with deep expertise in sector-specific compliance requirements, regulatory frameworks, and governance standards.",
    url: "https://centience.ai/industries",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Governance for Regulated Industries | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Governance for Regulated Industries | Centience",
    description: "Centience serves financial services, healthcare, and other regulated industries with deep expertise in sector-specific compliance requirements, regulatory frameworks, and governance standards.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <IndustriesPage />;
}
