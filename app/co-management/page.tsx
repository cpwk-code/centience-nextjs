import type { Metadata } from 'next';
import CoManagementPage from '@/page-components/CoManagementPage';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Co-Managed Technology Governance — We Work With Your Existing Team | Centience",
  description: "Centience implements and operates the governance layer alongside your existing IT team, CISO, vCISO, or outside compliance firm. Three co-management models: governance layer over internal IT, implementation arm for security leadership, or partner co-delivery. No displacement.",
  keywords: ["co-managed governance","co-management IT governance","vCISO governance support","CISO governance implementation","governance layer managed services","technology governance co-management","fractional CISO support","governance implementation partner"],
  alternates: {
    canonical: "https://centience.ai/co-management",
  },
  openGraph: {
    title: "Co-Managed Technology Governance | Centience",
    description: "Centience works with your existing team — internal IT, CISO, vCISO, or outside firm. We implement and operate the governance layer. No displacement. Three co-management models available.",
    url: "https://centience.ai/co-management",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Co-Managed Technology Governance | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Co-Managed Technology Governance | Centience",
    description: "We work with your existing team. No displacement. We implement and operate the governance layer alongside whoever you already have in place.",
    images: ["https://centience.ai/og-image.png"],
  },
};


const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://centience.ai/co-management/#service",
  "name": "Co-Managed Governance",
  "url": "https://centience.ai/co-management",
  "description": "Centience Co-Managed Governance — three delivery models that work alongside your existing IT team, CISO, or fractional provider without displacement.",
  "provider": { "@id": "https://centience.ai/#organization" },
  "areaServed": "Nationwide"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://centience.ai" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://centience.ai/governance" },
    { "@type": "ListItem", "position": 3, "name": "Co-Management", "item": "https://centience.ai/co-management" }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CoManagementPage />
    </>
  );
}
