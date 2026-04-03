import type { Metadata } from 'next';
import PartnerProgram from '@/page-components/PartnerProgram';

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Partner Program — CISOs, vCISOs & Advisory Firms | Centience",
  description: "Centience partners with CISOs, vCISOs, cybersecurity firms, compliance consultants, and MSPs serving regulated industries. We implement and manage the governance layer. You retain the client relationship. Co-delivery model — referral and recurring revenue available.",
  keywords: ["CISO partner","vCISO partner","cybersecurity partner program","compliance partner","MSP partner","co-delivery partner","governance partner","referral program","channel partner","regulated industries partner"],
  alternates: { canonical: "https://centience.ai/partners" },
  openGraph: {
    title: "Partner Program — CISOs, vCISOs & Advisory Firms | Centience",
    description: "We implement and manage the governance layer. You retain the client relationship. Co-delivery model for CISOs, vCISOs, cybersecurity firms, compliance consultants, and MSPs.",
    url: "https://centience.ai/partners",
    type: 'website',
    siteName: 'Centience',
    images: [{ url: "https://centience.ai/og-image.png", width: 1200, height: 630, alt: "Partner Program | Centience" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Partner Program — CISOs, vCISOs & Advisory Firms | Centience",
    description: "We implement the governance layer. You keep the client. Co-delivery model for security and compliance professionals.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <PartnerProgram />;
}
