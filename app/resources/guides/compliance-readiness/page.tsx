import type { Metadata } from 'next';
import GuideDetailPage from '@/page-components/resources/GuideDetailPage';
import { GUIDE_CONTENT } from '@/data/guideContent';

export const metadata: Metadata = {
  title: "Compliance Readiness Guide for Regulatory Examinations | Centience",
  description: "What regulators are actually looking for in technology governance examinations — specific to SEC, FINRA, or HIPAA.",
  keywords: ["compliance readiness guide", "regulatory examination guide", "SEC examination readiness", "FINRA examination", "HIPAA compliance readiness"],
  alternates: {
    canonical: "https://centience.ai/resources/guides/compliance-readiness",
  },
  openGraph: {
    title: "Compliance Readiness Guide for Regulatory Examinations | Centience",
    description: "What regulators are actually looking for in technology governance examinations — specific to SEC, FINRA, or HIPAA.",
    url: "https://centience.ai/resources/guides/compliance-readiness",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-guide-compliance-readiness.png",
        width: 1200,
        height: 630,
        alt: "Compliance Readiness Guide for Regulatory Examinations | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Compliance Readiness Guide for Regulatory Examinations | Centience",
    description: "What regulators are actually looking for in technology governance examinations — specific to SEC, FINRA, or HIPAA.",
    images: ["https://centience.ai/og-guide-compliance-readiness.png"],
  },
};

const guide = GUIDE_CONTENT.compliance_readiness;

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://centience.ai" },
    { "@type": "ListItem", "position": 2, "name": "Governance Guides", "item": "https://centience.ai/resources/guides" },
    { "@type": "ListItem", "position": 3, "name": guide.title, "item": `https://centience.ai/resources/guides/${guide.slug}` }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <GuideDetailPage guide={guide} />
    </>
  );
}
