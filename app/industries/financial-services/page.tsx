import type { Metadata } from 'next';
import FinancialServicesPage from '@/page-components/industries/FinancialServicesPage';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "AI & Technology Governance for Broker-Dealers, RIAs, and Financial Services Firms | Centience",
  description: "Centience delivers continuous AI and technology governance for financial services firms — managed infrastructure, cybersecurity, AI oversight, and communication compliance aligned to SEC FY2026 and FINRA 2026 examination priorities. 100% audit success rate across all financial services engagements.",
  keywords: ["financial services AI governance","SEC FY2026 examination priorities","FINRA 2026 AI governance","broker dealer technology governance","RIA AI governance","SEC cybersecurity compliance","FINRA supervision AI","communication compliance SEC Rule 17a-4","financial services cybersecurity governance","100% audit success rate"],
  alternates: {
    canonical: "https://centience.ai/industries/financial-services",
  },
  openGraph: {
    title: "AI & Technology Governance for Financial Services | Centience",
    description: "Continuous AI and technology governance for broker-dealers, RIAs, and wealth managers — aligned to SEC FY2026 and FINRA 2026 examination priorities. Managed infrastructure, cybersecurity, AI oversight, and communication compliance. 100% audit success rate.",
    url: "https://centience.ai/industries/financial-services",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI & Technology Governance for Financial Services | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI & Technology Governance for Financial Services | Centience",
    description: "Aligned to SEC FY2026 and FINRA 2026 examination priorities. 100% audit success rate across all financial services engagements.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <FinancialServicesPage />;
}
