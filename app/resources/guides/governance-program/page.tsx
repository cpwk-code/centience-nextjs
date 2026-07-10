import type { Metadata } from 'next';
import GuideDetailPage from '@/page-components/resources/GuideDetailPage';
import { GUIDE_CONTENT } from '@/data/guideContent';

export const metadata: Metadata = {
  title: "Technology Governance Program Guide | Centience",
  description: "The Centience governance model — Assessment, Roadmap, and Program — built around your specific regulatory obligations.",
  keywords: ["technology governance program", "governance program guide", "compliance program guide", "technology governance model"],
  alternates: {
    canonical: "https://centience.ai/resources/guides/governance-program",
  },
  openGraph: {
    title: "Technology Governance Program Guide | Centience",
    description: "The Centience governance model — Assessment, Roadmap, and Program — built around your specific regulatory obligations.",
    url: "https://centience.ai/resources/guides/governance-program",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-guide-governance-program.png",
        width: 1200,
        height: 630,
        alt: "Technology Governance Program Guide | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Technology Governance Program Guide | Centience",
    description: "The Centience governance model — Assessment, Roadmap, and Program — built around your specific regulatory obligations.",
    images: ["https://centience.ai/og-guide-governance-program.png"],
  },
};

const guide = GUIDE_CONTENT.tech_governance;

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
