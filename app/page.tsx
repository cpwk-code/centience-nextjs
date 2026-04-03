import type { Metadata } from 'next';
import Index from '@/page-components/Index';

export const metadata: Metadata = {
  title: "Centience — AI & Technology Governance for Regulated Organizations",
  description: "Centience implements, integrates, and manages technology governance for regulated organizations — infrastructure, cybersecurity, and AI. We work alongside your existing CISO, vCISO, CTO, or outside firm. Full management or co-management.",
  keywords: ["AI governance", "technology governance", "cybersecurity governance", "regulated organizations", "co-managed IT", "CISO collaboration", "compliance", "NIST AI RMF", "ISO 42001", "SEC FINRA HIPAA"],
  alternates: { canonical: "https://centience.ai/" },
  openGraph: {
    title: "Centience — AI & Technology Governance for Regulated Organizations",
    description: "We implement, integrate, and manage technology governance for regulated organizations — working alongside your existing team or taking the lead. Full management or co-management.",
    url: "https://centience.ai/",
    type: 'website',
    siteName: 'Centience',
    images: [{ url: "https://centience.ai/og-image.png", width: 1200, height: 630, alt: "Centience — AI & Technology Governance for Regulated Organizations" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Centience — AI & Technology Governance for Regulated Organizations",
    description: "We implement, integrate, and manage technology governance for regulated organizations. Full management or co-management available.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <Index />;
}
