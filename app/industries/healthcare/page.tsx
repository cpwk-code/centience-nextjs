import type { Metadata } from 'next';
import HealthcarePage from '@/page-components/industries/HealthcarePage';

export const dynamic = 'force-dynamic';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "AI & Technology Governance for Healthcare | Centience",
  description: "Centience healthcare governance programs align technology and AI adoption with HIPAA, FDA, and ONC requirements. Build compliant, secure health technology environments.",
  keywords: ["healthcare governance","HIPAA compliance","healthcare AI governance","FDA compliance","health technology","healthcare cybersecurity"],
  alternates: {
    canonical: "https://centience.ai/industries/healthcare",
  },
  openGraph: {
    title: "AI & Technology Governance for Healthcare | Centience",
    description: "Centience healthcare governance programs align technology and AI adoption with HIPAA, FDA, and ONC requirements. Build compliant, secure health technology environments.",
    url: "https://centience.ai/industries/healthcare",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI & Technology Governance for Healthcare | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI & Technology Governance for Healthcare | Centience",
    description: "Centience healthcare governance programs align technology and AI adoption with HIPAA, FDA, and ONC requirements. Build compliant, secure health technology environments.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <HealthcarePage />;
}
