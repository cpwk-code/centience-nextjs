import type { Metadata } from 'next';
import PartnerProgram from '@/page-components/PartnerProgram';

export const metadata: Metadata = {
  title: "Partner Program — Co-Deliver Governance With Centience | Centience",
  description: "Centience partners with CISOs, vCISOs, cybersecurity firms, compliance consultants, and MSPs serving regulated industries. We implement and manage the governance layer. You retain the client relationship. Formal two-tier program with referral and co-delivery options.",
  keywords: ["governance partner program", "vCISO partner", "CISO implementation partner", "cybersecurity referral program", "MSP governance partner", "co-delivery partner", "compliance partner", "regulated industries partner"],
  alternates: { canonical: "https://centience.ai/partners" },
  openGraph: {
    title: "Partner Program — Co-Deliver Governance With Centience",
    description: "We implement and manage the governance layer. You retain the client relationship. Formal two-tier partner program for CISOs, vCISOs, security firms, compliance consultants, and MSPs.",
    url: "https://centience.ai/partners",
    type: 'website',
    siteName: 'Centience',
    images: [{ url: "https://centience.ai/og-image.png", width: 1200, height: 630, alt: "Partner Program | Centience" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Partner Program — Co-Deliver Governance With Centience",
    description: "We implement and manage the governance layer. You retain the client relationship. Two-tier partner program for security and compliance practitioners.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <PartnerProgram />;
}
