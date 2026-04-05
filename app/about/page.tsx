import type { Metadata } from 'next';
import AboutPage from '@/page-components/AboutPage';

export const dynamic = 'force-dynamic';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "About Centience — Our Story & Mission",
  description: "Centience was founded to help regulated organizations navigate the intersection of technology, AI, and compliance. Learn about our mission, team, and approach to governance.",
  keywords: ["about Centience","Centience mission","governance firm","technology governance company","AI governance company","compliance firm"],
  alternates: {
    canonical: "https://centience.ai/about",
  },
  openGraph: {
    title: "About Centience — Our Story & Mission",
    description: "Centience was founded to help regulated organizations navigate the intersection of technology, AI, and compliance. Learn about our mission, team, and approach to governance.",
    url: "https://centience.ai/about",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Centience — Our Story & Mission",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Centience — Our Story & Mission",
    description: "Centience was founded to help regulated organizations navigate the intersection of technology, AI, and compliance. Learn about our mission, team, and approach to governance.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <AboutPage />;
}
