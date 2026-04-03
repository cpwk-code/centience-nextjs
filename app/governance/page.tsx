import type { Metadata } from 'next';
import GovernancePage from '@/page-components/GovernancePage';

export const metadata: Metadata = {
  title: "Technology Governance Programs — Implemented & Managed | Centience",
  description: "Three integrated governance programs — infrastructure, cybersecurity, and AI — implemented, integrated, and managed across your entire technology stack. Full management or co-management with your existing team.",
  keywords: ["technology governance", "governance program", "managed governance", "co-managed governance", "infrastructure governance", "cybersecurity governance", "AI governance", "regulated organizations"],
  alternates: { canonical: "https://centience.ai/governance" },
  openGraph: {
    title: "Technology Governance Programs — Implemented & Managed | Centience",
    description: "Three integrated governance programs implemented, integrated, and managed across your technology stack. Full management or co-management available.",
    url: "https://centience.ai/governance",
    type: 'website',
    siteName: 'Centience',
    images: [{ url: "https://centience.ai/og-image.png", width: 1200, height: 630, alt: "Technology Governance Programs | Centience" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Technology Governance Programs — Implemented & Managed | Centience",
    description: "Implemented, integrated, and managed governance programs across infrastructure, cybersecurity, and AI. Full management or co-management.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <GovernancePage />;
}
