import type { Metadata } from 'next';
import GovernancePage from '@/page-components/GovernancePage';

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Technology Governance Programs — Implemented & Managed | Centience",
  description: "Three integrated governance programs covering infrastructure, cybersecurity, and AI — implemented, integrated, and managed daily. Full management or co-management with your existing team. Built for SEC, FINRA, and HIPAA regulated organizations.",
  keywords: ["technology governance","governance program","managed governance","co-managed governance","SEC governance","FINRA compliance program","HIPAA governance","AI governance program","cybersecurity governance program","infrastructure governance"],
  alternates: { canonical: "https://centience.ai/governance" },
  openGraph: {
    title: "Technology Governance Programs — Implemented & Managed | Centience",
    description: "Not frameworks delivered. Programs operated. Three integrated governance programs implemented, integrated, and managed daily — full management or co-management with your existing team.",
    url: "https://centience.ai/governance",
    type: 'website',
    siteName: 'Centience',
    images: [{ url: "https://centience.ai/og-image.png", width: 1200, height: 630, alt: "Technology Governance Programs | Centience" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Technology Governance Programs | Centience",
    description: "Not frameworks delivered. Programs operated. Implemented, integrated, and managed daily for regulated organizations.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <GovernancePage />;
}
