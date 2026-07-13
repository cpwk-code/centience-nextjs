import type { Metadata } from 'next';
import InsightsPage from '@/page-components/InsightsPage';
import { buildBreadcrumbSchema } from '@/lib/landingSchema';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Governance Insights & Resources | Centience",
  description: "Expert insights on AI governance, technology governance, cybersecurity, and compliance for regulated organizations.",
  keywords: ["AI governance insights","technology governance resources","compliance insights","cybersecurity guidance","regulatory updates","governance best practices"],
  alternates: {
    canonical: "https://centience.ai/insights",
  },
  openGraph: {
    title: "Governance Insights & Resources | Centience",
    description: "Expert insights on AI governance, technology governance, cybersecurity, and compliance for regulated organizations. Practical guidance from Centience practitioners.",
    url: "https://centience.ai/insights",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Governance Insights & Resources | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Governance Insights & Resources | Centience",
    description: "Expert insights on AI governance, technology governance, cybersecurity, and compliance for regulated organizations. Practical guidance from Centience practitioners.",
    images: ["https://centience.ai/og-image.png"],
  },
};

const breadcrumb = buildBreadcrumbSchema([
  { name: 'Home', path: '' },
  { name: 'Insights', path: '/insights' },
]);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <InsightsPage />
    </>
  );
}
