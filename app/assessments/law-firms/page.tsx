import type { Metadata } from 'next';
import LawFirmsAssessment from '@/page-components/assessments/LawFirmsAssessment';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Law Firm Technology Governance Assessment | Centience",
  description: "Free technology and AI governance assessment for law firms. Identify gaps in client data security, AI adoption governance, and technology risk management. Get your roadmap.",
  keywords: ["law firm governance assessment","legal technology assessment","law firm AI assessment","legal compliance assessment","attorney technology governance"],
  alternates: {
    canonical: "https://centience.ai/assessments/law-firms",
  },
  openGraph: {
    title: "Law Firm Technology Governance Assessment | Centience",
    description: "Free technology and AI governance assessment for law firms. Identify gaps in client data security, AI adoption governance, and technology risk management. Get your roadmap.",
    url: "https://centience.ai/assessments/law-firms",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Law Firm Technology Governance Assessment | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Law Firm Technology Governance Assessment | Centience",
    description: "Free technology and AI governance assessment for law firms. Identify gaps in client data security, AI adoption governance, and technology risk management. Get your roadmap.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://centience.ai"},{"@type":"ListItem","position":2,"name":"Assessments","item":"https://centience.ai/resources/assessments"},{"@type":"ListItem","position":3,"name":"Law Firms Governance Assessment","item":"https://centience.ai/assessments/law-firms"}]}' }} />
      <LawFirmsAssessment />
    </>
  );
}
