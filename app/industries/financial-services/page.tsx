import type { Metadata } from 'next';
import FinancialServicesPage from '@/page-components/industries/FinancialServicesPage';
import { financialServicesFaqs, buildFaqSchema } from '@/data/industryFaqs';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "AI & Technology Governance for Financial Services | Centience",
  description: "Aligned to SEC FY2026 and FINRA 2026 examination priorities. documented track record of successful outcomes across financial services engagements.",
  keywords: ["financial services AI governance","SEC FY2026 examination priorities","FINRA 2026 AI governance","broker dealer technology governance","RIA AI governance","SEC cybersecurity compliance","FINRA supervision AI","communication compliance SEC Rule 17a-4","financial services cybersecurity governance","documented track record of successful outcomes"],
  alternates: {
    canonical: "https://centience.ai/industries/financial-services",
  },
  openGraph: {
    title: "AI & Technology Governance for Financial Services | Centience",
    description: "Continuous AI and technology governance for broker-dealers, RIAs, and wealth managers — aligned to SEC FY2026 and FINRA 2026 examination priorities. Managed infrastructure, cybersecurity, AI oversight, and communication compliance. documented track record of successful outcomes.",
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
    description: "Aligned to SEC FY2026 and FINRA 2026 examination priorities. documented track record of successful outcomes across financial services engagements.",
    images: ["https://centience.ai/og-image.png"],
  },
};


const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://centience.ai"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Industries",
      "item": "https://centience.ai/industries"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Financial Services",
      "item": "https://centience.ai/industries/financial-services"
    }
  ]
};

const faqSchema = buildFaqSchema(financialServicesFaqs);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <FinancialServicesPage />
    </>
  );
}
