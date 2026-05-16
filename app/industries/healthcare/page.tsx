import type { Metadata } from 'next';
import HealthcarePage from '@/page-components/industries/HealthcarePage';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "HIPAA-Compliant AI & Technology Governance for Healthcare Organizations | Centience",
  description: "Centience delivers HIPAA-compliant AI and technology governance for healthcare organizations deploying AI in clinical and operational environments — managing the infrastructure where patient data lives, governing AI tools from day one, and maintaining audit-ready evidence continuously. OfficeSafe heritage: 5,000+ healthcare practices governed.",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What HIPAA requirements apply to AI tools in clinical settings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI tools that access, process, or transmit electronic protected health information (ePHI) are subject to HIPAA Security Rule requirements including technical safeguards (access controls, audit controls, integrity controls, transmission security), administrative safeguards (risk analysis, workforce training, business associate management), and physical safeguards. A HIPAA-compliant AI governance framework must include a risk assessment for each AI tool, Business Associate Agreements for AI vendors, and documented access controls."
      }
    },
    {
      "@type": "Question",
      "name": "Are healthcare organizations required to assess AI vendor HIPAA compliance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Any AI vendor that creates, receives, maintains, or transmits ePHI on behalf of a covered entity is a Business Associate and must sign a Business Associate Agreement (BAA). Healthcare organizations must also conduct vendor security assessments and ongoing monitoring of AI vendors with access to patient data. HIPAA civil penalty caps now exceed $2 million annually per violation category as of January 2026."
      }
    },
    {
      "@type": "Question",
      "name": "What is a HIPAA technical safeguard for AI tools?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HIPAA technical safeguards for AI tools include: unique user identification and access controls limiting access to ePHI to authorized users only; audit controls that record and examine activity in systems containing ePHI; integrity controls ensuring ePHI is not improperly altered or destroyed; and transmission security protecting ePHI transmitted over electronic communications networks. AI tools must be governed within this framework, not operated outside it."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a HIPAA AI governance assessment take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Centience HIPAA governance assessments typically complete within 5 business days. The assessment identifies technical safeguard gaps, evaluates AI tools touching patient data, reviews Business Associate Agreement coverage, and delivers a prioritized remediation roadmap. No commitment is required."
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <HealthcarePage />
    </>
  );
}
