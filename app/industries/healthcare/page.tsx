import type { Metadata } from 'next';
import HealthcarePage from '@/page-components/industries/HealthcarePage';
import { healthcareFaqs, buildFaqSchema } from '@/data/industryFaqs';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "HIPAA-Compliant AI & Technology Governance for Healthcare | Centience",
  description: "OfficeSafe heritage: 5,000+ healthcare practices governed. HIPAA-compliant AI governance for clinical and operational environments. Continuously enforced.",
  keywords: ["HIPAA AI governance","healthcare AI governance","HIPAA technology governance","clinical AI governance","healthcare cybersecurity governance","HIPAA compliance managed services","patient data governance","OfficeSafe","healthcare IT governance","OCR audit readiness","HIPAA technical safeguards"],
  alternates: {
    canonical: "https://centience.ai/industries/healthcare",
  },
  openGraph: {
    title: "HIPAA-Compliant AI & Technology Governance for Healthcare | Centience",
    description: "Centience governs AI adoption in clinical and operational healthcare environments — HIPAA-compliant from day one. OfficeSafe heritage: 5,000+ healthcare practices governed before acquisition by Rectangle Health. Continuously enforced. Audit-ready.",
    url: "https://centience.ai/industries/healthcare",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "HIPAA-Compliant AI & Technology Governance for Healthcare | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "HIPAA-Compliant AI Governance for Healthcare | Centience",
    description: "OfficeSafe heritage: 5,000+ healthcare practices governed. HIPAA-compliant AI governance for clinical and operational environments. Continuously enforced.",
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
      "name": "Healthcare",
      "item": "https://centience.ai/industries/healthcare"
    }
  ]
};

const faqSchema = buildFaqSchema(healthcareFaqs);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <HealthcarePage />
    </>
  );
}
