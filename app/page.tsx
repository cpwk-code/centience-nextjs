import type { Metadata } from 'next';
import Index from '@/page-components/Index';

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Centience — AI & Technology Governance for Regulated Organizations",
  description: "Centience implements, integrates, and manages AI governance, cybersecurity, and infrastructure for regulated organizations. We work with your existing CISO, vCISO, or outside firm. Full management or co-management available.",
  keywords: ["AI governance","technology governance","cybersecurity governance","regulated organizations","compliance","NIST AI RMF","ISO 42001","co-managed IT","vCISO partner","SEC compliance","FINRA compliance","HIPAA compliance"],
  alternates: { canonical: "https://centience.ai/" },
  openGraph: {
    title: "Centience — AI & Technology Governance for Regulated Organizations",
    description: "Centience implements, integrates, and manages AI governance, cybersecurity, and infrastructure for regulated organizations. Full management or co-management with your existing team.",
    url: "https://centience.ai/",
    type: 'website',
    siteName: 'Centience',
    images: [{ url: "https://centience.ai/og-image.png", width: 1200, height: 630, alt: "Centience — AI & Technology Governance for Regulated Organizations" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Centience — AI & Technology Governance for Regulated Organizations",
    description: "Centience implements, integrates, and manages AI governance, cybersecurity, and infrastructure for regulated organizations.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <Index />;
}
