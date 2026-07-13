import type { Metadata } from 'next';
import PrivateEquityAssessment from '@/page-components/assessments/PrivateEquityAssessment';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Private Equity Technology Governance Assessment | Centience",
  description: "Free technology and AI governance assessment for private equity firms. Identify gaps relative to SEC requirements and LP due diligence standards.",
  keywords: ["private equity assessment","PE governance assessment","SEC private equity assessment","portfolio governance assessment","investment management assessment"],
  alternates: {
    canonical: "https://centience.ai/assessments/private-equity",
  },
  openGraph: {
    title: "Private Equity Technology Governance Assessment | Centience",
    description: "Free technology and AI governance assessment for private equity firms. Identify gaps relative to SEC requirements and LP due diligence standards. Get your customized roadmap.",
    url: "https://centience.ai/assessments/private-equity",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Private Equity Technology Governance Assessment | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Private Equity Technology Governance Assessment | Centience",
    description: "Free technology and AI governance assessment for private equity firms. Identify gaps relative to SEC requirements and LP due diligence standards. Get your customized roadmap.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://centience.ai"},{"@type":"ListItem","position":2,"name":"Assessments","item":"https://centience.ai/resources/assessments"},{"@type":"ListItem","position":3,"name":"Private Equity Governance Assessment","item":"https://centience.ai/assessments/private-equity"}]}' }} />
      <PrivateEquityAssessment />
    </>
  );
}
