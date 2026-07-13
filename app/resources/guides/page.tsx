import type { Metadata } from 'next';
import GuidesPage from '@/page-components/resources/GuidesPage';
import { buildBreadcrumbSchema } from '@/lib/landingSchema';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Governance Guides & Frameworks | Centience",
  description: "Practical governance guides, frameworks, and checklists for regulated organizations. Download free resources on AI governance, cybersecurity.",
  keywords: ["governance guides","compliance frameworks","AI governance guide","cybersecurity checklist","governance resources","compliance program guide"],
  alternates: {
    canonical: "https://centience.ai/resources/guides",
  },
  openGraph: {
    title: "Governance Guides & Frameworks | Centience",
    description: "Practical governance guides, frameworks, and checklists for regulated organizations. Download free resources on AI governance, cybersecurity, and compliance program development.",
    url: "https://centience.ai/resources/guides",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Governance Guides & Frameworks | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Governance Guides & Frameworks | Centience",
    description: "Practical governance guides, frameworks, and checklists for regulated organizations. Download free resources on AI governance, cybersecurity, and compliance program development.",
    images: ["https://centience.ai/og-image.png"],
  },
};

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', path: '' },
  { name: 'Resources', path: '/resources' },
  { name: 'Guides', path: '/resources/guides' },
]);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <GuidesPage />
    </>
  );
}
