import type { Metadata } from 'next';
import Index from '@/page-components/Index';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "AI & IT Governance for RIAs & Regulated Firms | Centience",
  description: "Prove your technology is compliant before regulators ask. Centience runs IT, cybersecurity, and AI oversight for RIAs, broker-dealers, and regulated firms — with audit evidence kept ready continuously. Free instant Governance Score.",
  keywords: ["RIA cybersecurity compliance","SEC AI books and records","outsourced CISO for RIA","vCISO for RIA","FINRA IT compliance","MSP for financial advisors","AI governance for regulated firms","broker-dealer technology compliance","HIPAA IT compliance","technology governance"],
  alternates: {
    canonical: "https://centience.ai",
  },
  openGraph: {
    title: "AI & IT Governance for RIAs & Regulated Firms | Centience",
    description: "Prove your technology is compliant before regulators ask. Centience runs IT, cybersecurity, and AI oversight for regulated firms — audit evidence kept ready continuously. Free instant Governance Score.",
    url: "https://centience.ai",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI & IT Governance for RIAs & Regulated Firms | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "The Centience Governance Program — AI & Technology Governance for Regulated Organizations",
    description: "The Centience Governance Program: AI and technology governance for regulated organizations. Built, operated, and evidenced continuously.",
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
