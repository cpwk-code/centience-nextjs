import type { Metadata } from 'next';
import NewsletterPage from '@/page-components/resources/NewsletterPage';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Governance Intelligence Newsletter | Centience",
  description: "Subscribe to the Centience Governance Intelligence newsletter for expert insights on AI governance, regulatory developments, and technology compliance for regulated organizations.",
  keywords: ["governance newsletter","AI governance updates","compliance newsletter","regulatory intelligence","technology governance news"],
  alternates: {
    canonical: "https://centience.ai/resources/newsletter",
  },
  openGraph: {
    title: "Governance Intelligence Newsletter | Centience",
    description: "Subscribe to the Centience Governance Intelligence newsletter for expert insights on AI governance, regulatory developments, and technology compliance for regulated organizations.",
    url: "https://centience.ai/resources/newsletter",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Governance Intelligence Newsletter | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Governance Intelligence Newsletter | Centience",
    description: "Subscribe to the Centience Governance Intelligence newsletter for expert insights on AI governance, regulatory developments, and technology compliance for regulated organizations.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <NewsletterPage />;
}
