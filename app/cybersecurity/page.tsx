import type { Metadata } from 'next';
import CybersecurityPage from '@/page-components/CybersecurityPage';

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Cybersecurity Governance for Regulated Industries | Centience",
  description: "Centience implements security controls, integrates them into your environment, and manages your security posture continuously — working alongside your CISO, vCISO, CTO, or outside security firm. Full co-management available.",
  keywords: ["cybersecurity governance","co-managed cybersecurity","CISO collaboration","vCISO implementation partner","security governance","regulated industries","cybersecurity compliance","financial services security","healthcare cybersecurity","SEC cybersecurity"],
  alternates: { canonical: "https://centience.ai/cybersecurity" },
  openGraph: {
    title: "Cybersecurity Governance for Regulated Industries | Centience",
    description: "We implement security controls and manage your security posture alongside your CISO, vCISO, CTO, or outside firm. Not a replacement — the implementation and operational arm your security program needs.",
    url: "https://centience.ai/cybersecurity",
    type: 'website',
    siteName: 'Centience',
    images: [{ url: "https://centience.ai/og-image.png", width: 1200, height: 630, alt: "Cybersecurity Governance for Regulated Industries | Centience" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cybersecurity Governance for Regulated Industries | Centience",
    description: "We implement and manage security governance alongside your existing CISO, vCISO, CTO, or outside security firm. Co-management available.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <CybersecurityPage />;
}
