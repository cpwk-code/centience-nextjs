import type { Metadata } from 'next';
import HealthcareAssessment from '@/page-components/assessments/HealthcareAssessment';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Healthcare Governance Assessment | Centience",
  description: "Free technology and AI governance assessment for healthcare organizations. Identify gaps relative to HIPAA, FDA, and ONC requirements.",
  keywords: ["healthcare governance assessment","HIPAA assessment","healthcare technology assessment","healthcare AI assessment","health compliance assessment"],
  alternates: {
    canonical: "https://centience.ai/assessments/healthcare",
  },
  openGraph: {
    title: "Healthcare Governance Assessment | Centience",
    description: "Free technology and AI governance assessment for healthcare organizations. Identify gaps relative to HIPAA, FDA, and ONC requirements. Get your customized governance roadmap.",
    url: "https://centience.ai/assessments/healthcare",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Healthcare Governance Assessment | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Healthcare Governance Assessment | Centience",
    description: "Free technology and AI governance assessment for healthcare organizations. Identify gaps relative to HIPAA, FDA, and ONC requirements. Get your customized governance roadmap.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://centience.ai"},{"@type":"ListItem","position":2,"name":"Assessments","item":"https://centience.ai/resources/assessments"},{"@type":"ListItem","position":3,"name":"Healthcare Governance Assessment","item":"https://centience.ai/assessments/healthcare"}]}' }} />
      <HealthcareAssessment />
    </>
  );
}
