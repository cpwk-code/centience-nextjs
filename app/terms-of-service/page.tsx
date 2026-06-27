import type { Metadata } from 'next';
import TermsOfServicePage from '@/page-components/TermsOfServicePage';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Terms Of Service | Centience",
  description: "Read Centience's Terms of Service. Understand the terms governing use of Centience's AI governance, cybersecurity, and technology governance services.",
  keywords: ["Centience terms of service","service agreement","governance services terms","technology governance agreement"],
  alternates: {
    canonical: "https://centience.ai/terms-of-service",
  },
  openGraph: {
    title: "Terms Of Service | Centience",
    description: "Read Centience's Terms of Service. Understand the terms governing use of Centience's AI governance, cybersecurity, and technology governance services.",
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
    description: "Read Centience's Terms of Service. Understand the terms governing use of Centience's AI governance, cybersecurity, and technology governance services.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <TermsOfServicePage />;
}
