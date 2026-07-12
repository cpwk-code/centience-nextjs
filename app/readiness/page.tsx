import type { Metadata } from 'next';
import ReadinessPage from '@/page-components/ReadinessPage';

export const metadata: Metadata = {
  title: "Get the Free 5-Day Assessment | Centience",
  description: "Request the Centience Free 5-Day Assessment — a structured evaluation of your organization's posture across infrastructure, cybersecurity, AI, vendor risk, and compliance readiness. Results delivered within 5 business days.",
  keywords: ["governance readiness review","technology governance assessment","AI governance review","cybersecurity readiness","compliance gap assessment","regulated organization governance","SEC FINRA HIPAA governance review"],
  alternates: {
    canonical: "https://centience.ai/readiness",
  },
  openGraph: {
    title: "Get the Free 5-Day Assessment | Centience",
    description: "The first step in the Centience Governance Program. Evaluates your posture across infrastructure, cybersecurity, AI, vendor risk, and compliance readiness. Results within 5 business days.",
    url: "https://centience.ai/readiness",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Get the Free 5-Day Assessment | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Get the Free 5-Day Assessment | Centience",
    description: "Evaluates your posture across infrastructure, cybersecurity, AI, vendor risk, and compliance readiness. Results within 5 business days.",
    images: ["https://centience.ai/og-image.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://centience.ai" },
    { "@type": "ListItem", "position": 2, "name": "Free 5-Day Assessment", "item": "https://centience.ai/readiness" }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ReadinessPage />
    </>
  );
}
