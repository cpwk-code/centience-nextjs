import type { Metadata } from 'next';
import InfrastructurePage from '@/page-components/InfrastructurePage';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Infrastructure Governance | Centience",
  description: "Build a resilient, compliant technology foundation. Centience infrastructure governance programs align IT operations with regulatory requirements and organizational risk tolerance.",
  keywords: ["infrastructure governance","IT infrastructure","technology operations","compliance infrastructure","resilient IT","regulated organizations"],
  alternates: {
    canonical: "https://centience.ai/infrastructure",
  },
  openGraph: {
    title: "Infrastructure Governance | Centience",
    description: "Build a resilient, compliant technology foundation. Centience infrastructure governance programs align IT operations with regulatory requirements and organizational risk tolerance.",
    url: "https://centience.ai/infrastructure",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Infrastructure Governance | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Infrastructure Governance | Centience",
    description: "Build a resilient, compliant technology foundation. Centience infrastructure governance programs align IT operations with regulatory requirements and organizational risk tolerance.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <InfrastructurePage />;
}
