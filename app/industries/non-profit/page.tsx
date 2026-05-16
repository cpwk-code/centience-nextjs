import type { Metadata } from 'next';
import NonProfitPage from '@/page-components/industries/NonProfitPage';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "AI & Technology Governance for Non-Profit Organizations | Centience",
  description: "Centience delivers AI and technology governance scaled for non-profit organizations — protecting donor data, meeting federal grant cybersecurity requirements (NIST SP 800-171), governing AI adoption in fundraising and program delivery, and giving boards the documentation they need to demonstrate fiduciary oversight.",
  keywords: ["nonprofit AI governance","nonprofit technology governance","donor data protection","federal grant cybersecurity requirements","NIST SP 800-171 nonprofit","nonprofit HIPAA compliance","charity data governance","board fiduciary technology oversight","nonprofit AI compliance","federal grant CUI requirements"],
  alternates: {
    canonical: "https://centience.ai/industries/non-profit",
  },
  openGraph: {
    title: "AI & Technology Governance for Non-Profit Organizations | Centience",
    description: "Governance scaled for non-profits — protecting donor data, meeting federal grant cybersecurity requirements, governing AI adoption, and providing boards with fiduciary oversight documentation. Governance right for your organization.",
    url: "https://centience.ai/industries/non-profit",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI & Technology Governance for Non-Profit Organizations | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI & Technology Governance for Non-Profits | Centience",
    description: "Donor data protected. Federal grant requirements met. AI governed. Board fiduciary documentation provided. Scaled for non-profit organizations.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <NonProfitPage />;
}
