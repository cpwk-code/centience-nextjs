import type { Metadata } from 'next';
import TermsOfServicePage from '@/page-components/TermsOfServicePage';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Terms Of Service | Centience",
  description: "AI and technology governance for regulated organizations.",
  keywords: ["AI governance","technology governance","compliance"],
  alternates: {
    canonical: "https://centience.ai/terms-of-service",
  },
  openGraph: {
    title: "Terms Of Service | Centience",
    description: "AI and technology governance for regulated organizations.",
    url: "https://centience.ai/terms-of-service",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Terms Of Service | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Terms Of Service | Centience",
    description: "AI and technology governance for regulated organizations.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <TermsOfServicePage />;
}
