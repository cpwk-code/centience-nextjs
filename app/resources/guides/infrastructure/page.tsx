import type { Metadata } from 'next';
import GuideDetailPage from '@/page-components/resources/GuideDetailPage';
import { GUIDE_CONTENT } from '@/data/guideContent';

export const metadata: Metadata = {
  title: "Infrastructure Governance Guide for Regulated Organizations | Centience",
  description: "How managed infrastructure enforces compliance obligations — endpoints, networks, cloud, identity, and backup governance specific to your regulated body.",
  keywords: ["infrastructure governance guide", "managed infrastructure compliance", "infrastructure SEC FINRA HIPAA", "IT infrastructure governance"],
  alternates: {
    canonical: "https://centience.ai/resources/guides/infrastructure",
  },
  openGraph: {
    title: "Infrastructure Governance Guide for Regulated Organizations | Centience",
    description: "How managed infrastructure enforces compliance obligations — endpoints, networks, cloud, identity, and backup governance.",
    url: "https://centience.ai/resources/guides/infrastructure",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-guide-infrastructure.png",
        width: 1200,
        height: 630,
        alt: "Infrastructure Governance Guide for Regulated Organizations | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Infrastructure Governance Guide for Regulated Organizations | Centience",
    description: "How managed infrastructure enforces compliance obligations — endpoints, networks, cloud, identity, and backup governance.",
    images: ["https://centience.ai/og-guide-infrastructure.png"],
  },
};

const guide = GUIDE_CONTENT.infrastructure;

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
