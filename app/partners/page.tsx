import type { Metadata } from 'next';
import PartnerProgram from '@/page-components/PartnerProgram';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Governance Partner Program — Extend Your Practice With Centience | Centience",
  description: "Centience partners with fractional CISOs, compliance consultants, data privacy attorneys, accounting and risk firms, and technology partners — delivering the operational governance layer that makes advisory programs enforceable. Recurring revenue. Protected client relationships. Co-delivery model.",
  keywords: ["governance partner program","fractional CISO partner","vCISO governance partner","compliance consultant partner","data privacy attorney partner","technology governance co-delivery","managed governance partner","recurring revenue governance","governance referral partner"],
  alternates: {
    canonical: "https://centience.ai/partners",
  },
  openGraph: {
    title: "Governance Partner Program | Centience",
    description: "Centience partners with fractional CISOs, compliance consultants, data privacy attorneys, and advisory firms. We deliver the operational governance layer — you retain the client relationship. Recurring revenue. Always protected.",
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
    description: "Fractional CISOs, compliance consultants, data privacy attorneys, and advisory firms. We operate the governance. You keep the relationship. Recurring revenue.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <PartnerProgram />;
}
