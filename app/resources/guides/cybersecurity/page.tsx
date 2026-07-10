import type { Metadata } from 'next';
import GuideDetailPage from '@/page-components/resources/GuideDetailPage';
import { GUIDE_CONTENT } from '@/data/guideContent';

export const metadata: Metadata = {
  title: "Cybersecurity Governance Guide for Regulated Organizations | Centience",
  description: "Technical controls, regulatory frameworks, and continuous monitoring for cybersecurity governance — specific to SEC, FINRA, and HIPAA regulated organizations.",
  keywords: ["cybersecurity governance guide", "cybersecurity SEC FINRA HIPAA", "cybersecurity compliance guide", "regulated organizations cybersecurity"],
  alternates: {
    canonical: "https://centience.ai/resources/guides/cybersecurity",
  },
  openGraph: {
    title: "Cybersecurity Governance Guide for Regulated Organizations | Centience",
    description: "Technical controls, regulatory frameworks, and continuous monitoring for cybersecurity governance — specific to your regulated body.",
    url: "https://centience.ai/resources/guides/cybersecurity",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-guide-cybersecurity.png",
        width: 1200,
        height: 630,
        alt: "Cybersecurity Governance Guide for Regulated Organizations | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cybersecurity Governance Guide for Regulated Organizations | Centience",
    description: "Technical controls, regulatory frameworks, and continuous monitoring for cybersecurity governance.",
    images: ["https://centience.ai/og-guide-cybersecurity.png"],
  },
};

const guide = GUIDE_CONTENT.cybersecurity;

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
