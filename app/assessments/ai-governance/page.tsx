import type { Metadata } from 'next';
import AIGovernanceAssessment from '@/page-components/assessments/AIGovernanceAssessment';

export const metadata: Metadata = {
  title: "Free AI Governance Readiness Assessment | Centience",
  description: "Take the free Centience AI Governance Readiness Assessment. Identify gaps in your AI policy, vendor oversight, and regulatory alignment — aligned with NIST AI RMF and ISO 42001.",
  keywords: ["AI governance assessment","AI readiness assessment","NIST AI RMF assessment","ISO 42001 assessment","AI compliance gap assessment","free AI governance assessment"],
  alternates: {
    canonical: "https://centience.ai/assessments/ai-governance",
  },
  openGraph: {
    title: "Free AI Governance Readiness Assessment | Centience",
    description: "Identify gaps in your AI governance program across policy, risk management, vendor oversight, and regulatory alignment — in under 5 minutes.",
    url: "https://centience.ai/assessments/ai-governance",
    type: 'website',
    siteName: 'Centience',
    images: [{ url: "https://centience.ai/og-image.png", width: 1200, height: 630, alt: "Free AI Governance Readiness Assessment | Centience" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Free AI Governance Readiness Assessment | Centience",
    description: "Identify gaps in your AI governance program across policy, risk management, vendor oversight, and regulatory alignment — in under 5 minutes.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://centience.ai"},{"@type":"ListItem","position":2,"name":"Assessments","item":"https://centience.ai/resources/assessments"},{"@type":"ListItem","position":3,"name":"AI Governance Assessment","item":"https://centience.ai/assessments/ai-governance"}]}' }} />
      <AIGovernanceAssessment />
    </>
  );
}
