import type { Metadata } from 'next';
import PrivateEquityPage from '@/page-components/industries/PrivateEquityPage';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Portfolio-Level AI & Technology Governance for Private Equity Firms | Centience",
  description: "Centience delivers portfolio-level AI and technology governance for private equity firms — from firm-level SEC examination readiness through portfolio company technology baseline. Governance built during the hold period protects value at exit. Due diligence support. AI governance for portfolio companies.",
  keywords: ["private equity AI governance","PE portfolio technology governance","SEC registered investment adviser compliance","portfolio company governance","PE exit due diligence technology","private equity cybersecurity governance","portfolio AI governance","PE firm SEC examination"],
  alternates: {
    canonical: "https://centience.ai/industries/private-equity",
  },
  openGraph: {
    title: "Portfolio-Level AI & Technology Governance for Private Equity | Centience",
    description: "Centience delivers portfolio-level governance for PE firms — firm-level SEC compliance through portfolio company technology baseline. Governance built during hold period protects value at exit. Due diligence support included.",
    url: "https://centience.ai/industries/private-equity",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio-Level AI & Technology Governance for Private Equity | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI & Technology Governance for Private Equity | Centience",
    description: "Portfolio-level governance from hold period through exit. SEC examination readiness. Due diligence support. Governance that protects portfolio value.",
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
      "name": "Private Equity",
      "item": "https://centience.ai/industries/private-equity"
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PrivateEquityPage />
    </>
  );
}
