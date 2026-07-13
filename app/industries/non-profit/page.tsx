import type { Metadata } from 'next';
import NonProfitPage from '@/page-components/industries/NonProfitPage';
import { nonProfitFaqs, buildFaqSchema } from '@/data/industryFaqs';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "AI & Technology Governance for Non-Profit Organizations | Centience",
  description: "Donor data protected. Federal grant requirements met. AI governed. Board fiduciary documentation provided. Scaled for non-profit organizations.",
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
      "name": "Non-Profit",
      "item": "https://centience.ai/industries/non-profit"
    }
  ]
};

const faqSchema = buildFaqSchema(nonProfitFaqs);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <NonProfitPage />
    </>
  );
}
