import type { Metadata } from 'next';
import Index from '@/page-components/Index';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Centience — Continuous AI & Technology Governance for Regulated Organizations",
  description: "Centience builds and operates continuous AI and technology governance programs for regulated organizations — combining managed infrastructure, cybersecurity oversight, and AI governance into a single continuously enforced model. Serving broker-dealers, RIAs, healthcare organizations, private equity firms, and legal and professional services firms.",
  keywords: ["continuous AI governance","technology governance","AI governance for regulated organizations","cybersecurity governance","managed infrastructure","SEC FINRA compliance","HIPAA compliance","AI oversight","continuous technology governance"],
  alternates: {
    canonical: "https://centience.ai",
  },
  openGraph: {
    title: "Centience — Continuous AI & Technology Governance for Regulated Organizations",
    description: "Centience builds and operates continuous AI and technology governance programs for regulated organizations. Technically enforced. Continuously managed. Serving financial services, healthcare, private equity, and legal firms.",
    url: "https://centience.ai",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Centience — Continuous AI & Technology Governance for Regulated Organizations",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Centience — Continuous AI & Technology Governance for Regulated Organizations",
    description: "Centience builds and operates continuous AI and technology governance programs for regulated organizations. Technically enforced. Continuously managed.",
    images: ["https://centience.ai/og-image.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://centience.ai/#organization",
  "name": "Centience",
  "url": "https://centience.ai",
  "logo": "https://centience.ai/assets/logo.png",
  "description": "Continuous AI and technology governance for regulated organizations — combining managed infrastructure, cybersecurity oversight, and AI governance into a single continuously enforced model.",
  "telephone": "+18779457177",
  "email": "hello@centience.ai",
  "foundingDate": "2026",
  "founder": {
    "@type": "Person",
    "name": "Orville Matias",
    "jobTitle": "Founder & CEO",
    "sameAs": "https://www.linkedin.com/in/orville-matias-3b93393/"
  },
  "areaServed": [
    "New York City", "Manhattan", "Westchester County",
    "Greenwich CT", "Stamford CT", "Westport CT", "Norwalk CT",
    "Miami", "Palm Beach County", "Broward County", "Nationwide"
  ],
  "sameAs": [
    "https://www.linkedin.com/company/centience-ai/",
    "https://www.youtube.com/@Centience"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://centience.ai/#website",
  "url": "https://centience.ai",
  "name": "Centience",
  "description": "Continuous AI and technology governance for regulated organizations.",
  "publisher": { "@id": "https://centience.ai/#organization" },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://centience.ai/?s={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Index />
    </>
  );
}
