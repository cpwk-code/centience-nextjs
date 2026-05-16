import type { Metadata } from 'next';
import InfrastructurePage from '@/page-components/InfrastructurePage';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Managed Infrastructure Governance — The Foundation of Governed Operations | Centience",
  description: "Centience manages computers, networks, cloud environments, endpoints, and disaster recovery — fully governed to your specific regulatory requirements. The technical foundation that makes cybersecurity and AI governance enforceable. 99.9% uptime. 24/7 monitoring. <15 min critical response.",
  keywords: ["managed infrastructure governance","infrastructure governance regulated organizations","managed IT governance","cloud governance","endpoint management","disaster recovery governance","compliance infrastructure","24/7 infrastructure monitoring"],
  alternates: {
    canonical: "https://centience.ai/infrastructure",
  },
  openGraph: {
    title: "Managed Infrastructure Governance | Centience",
    description: "Centience owns and operates your infrastructure — governed to your specific regulatory requirements. The technical foundation that makes every governance layer above it enforceable. 99.9% uptime. 24/7 monitoring.",
    url: "https://centience.ai/infrastructure",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Managed Infrastructure Governance | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Managed Infrastructure Governance | Centience",
    description: "Own the infrastructure. Enforce the governance. 99.9% uptime. 24/7 monitoring. The foundation of continuously governed operations.",
    images: ["https://centience.ai/og-image.png"],
  },
};


const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://centience.ai/infrastructure/#service",
  "name": "Infrastructure Governance",
  "url": "https://centience.ai/infrastructure",
  "description": "Centience Infrastructure Governance — managed infrastructure, 99.9% uptime, 24/7 monitoring, and the technical foundation that makes governance programs enforceable.",
  "provider": { "@id": "https://centience.ai/#organization" },
  "areaServed": "Nationwide"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://centience.ai" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://centience.ai/governance" },
    { "@type": "ListItem", "position": 3, "name": "Infrastructure", "item": "https://centience.ai/infrastructure" }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <InfrastructurePage />
    </>
  );
}
