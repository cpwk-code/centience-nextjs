import type { Metadata } from 'next';
import Index from '@/page-components/Index';

export const dynamic = 'force-dynamic';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Centience — AI & Technology Governance for Regulated Organizations",
  description: "Centience helps financial, healthcare, and regulated firms build secure, compliant technology environments that withstand regulatory scrutiny. AI governance, cybersecurity, and infrastructure oversight.",
  keywords: ["AI governance","technology governance","cybersecurity governance","regulated organizations","compliance","NIST AI RMF","ISO 42001"],
  alternates: {
    canonical: "https://centience.ai/",
  },
  openGraph: {
    title: "Centience — AI & Technology Governance for Regulated Organizations",
    description: "Centience helps financial, healthcare, and regulated firms build secure, compliant technology environments that withstand regulatory scrutiny. AI governance, cybersecurity, and infrastructure oversight.",
    url: "https://centience.ai/",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Centience — AI & Technology Governance for Regulated Organizations",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Centience — AI & Technology Governance for Regulated Organizations",
    description: "Centience helps financial, healthcare, and regulated firms build secure, compliant technology environments that withstand regulatory scrutiny. AI governance, cybersecurity, and infrastructure oversight.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <Index />;
}
