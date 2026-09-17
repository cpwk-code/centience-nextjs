import type { Metadata } from 'next';
import PartnerProgram from '@/page-components/PartnerProgram';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Governance Partner Program | Centience",
  description: "For compliance consultants, CCOs of record, vCISOs and MSPs serving regulated firms. We operate the technical controls and keep the evidence. You keep the program and the relationship.",
  keywords: ["governance partner program","fractional CISO partner","vCISO governance partner","compliance consultant partner","CCO of record partner","data privacy attorney partner","technology governance co-delivery","managed governance partner","control testing evidence","governance referral partner"],
  alternates: {
    canonical: "https://centience.ai/partners",
  },
  openGraph: {
    title: "Governance Partner Program | Centience",
    description: "Centience partners with compliance consultancies, CCOs of record, vCISOs and MSPs. We run the technical controls underneath your program and keep the evidence that they operated — your interpretation, procedures and client relationship stay where they are.",
    url: "https://centience.ai/partners",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Governance Partner Program | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Governance Partner Program | Centience",
    description: "For compliance consultants, CCOs of record, vCISOs and MSPs serving regulated firms. We operate the technical controls and keep the evidence. You keep the program and the relationship.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <PartnerProgram />;
}
