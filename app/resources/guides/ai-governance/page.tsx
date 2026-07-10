import type { Metadata } from 'next';
import GuideDetailPage from '@/page-components/resources/GuideDetailPage';
import { GUIDE_CONTENT } from '@/data/guideContent';

export const metadata: Metadata = {
  title: "AI Governance Guide for Regulated Organizations | Centience",
  description: "A practical framework for governing AI tools under SEC, FINRA, and HIPAA requirements. Download the free AI Governance Guide from Centience.",
  keywords: ["AI governance guide", "AI governance SEC", "AI governance FINRA", "AI governance HIPAA", "regulated organizations AI"],
  alternates: {
    canonical: "https://centience.ai/resources/guides/ai-governance",
  },
  openGraph: {
    title: "AI Governance Guide for Regulated Organizations | Centience",
    description: "A practical framework for governing AI tools under SEC, FINRA, and HIPAA requirements.",
    url: "https://centience.ai/resources/guides/ai-governance",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-guide-ai-governance.png",
        width: 1200,
        height: 630,
        alt: "AI Governance Guide for Regulated Organizations | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Governance Guide for Regulated Organizations | Centience",
    description: "A practical framework for governing AI tools under SEC, FINRA, and HIPAA requirements.",
    images: ["https://centience.ai/og-guide-ai-governance.png"],
  },
};

const guide = GUIDE_CONTENT.ai_governance;

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
