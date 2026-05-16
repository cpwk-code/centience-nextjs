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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does FINRA expect in its 2026 AI governance examinations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FINRA's 2026 Annual Regulatory Oversight Report introduced a dedicated Generative AI section requiring broker-dealers to assess regulatory compliance before deploying GenAI, establish supervision and governance frameworks, conduct robust testing for bias and hallucinations, monitor AI outputs continuously, and capture AI-enabled communications in books and records. Examiners will look for documented AI policies, evidence of human oversight, and vendor diligence records."
      }
    },
    {
      "@type": "Question",
      "name": "How should broker-dealers prepare for SEC FY2026 cybersecurity examinations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEC FY2026 examination priorities explicitly flag cybersecurity governance, Regulation S-P compliance, identity theft prevention controls, vendor oversight, and incident response preparedness. Firms should have written cybersecurity policies, documented vendor risk assessments, an incident response plan, and audit-ready evidence of controls operating continuously \u2014 not just at the time of examination."
      }
    },
    {
      "@type": "Question",
      "name": "What is required in a FINRA-compliant AI governance framework?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A FINRA-compliant AI governance framework must include: written policies for AI development, deployment, use, and monitoring; supervision procedures covering AI use cases and model risks; testing protocols for accuracy, bias, and hallucinations; ongoing human monitoring of model outputs; capture of AI-enabled communications in books and records; and vendor diligence for third-party AI tools. FINRA expects firms to apply existing supervisory rules to AI just as they apply to other technology."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a technology governance assessment take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Centience governance assessments typically complete within 5 business days. The assessment covers infrastructure, cybersecurity posture, AI usage across the organization, and compliance readiness \u2014 and delivers a prioritized roadmap regardless of whether you engage further. No commitment is required."
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <FinancialServicesPage />
    </>
  );
}
