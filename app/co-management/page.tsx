import type { Metadata } from 'next';
import CoManagementPage from '@/page-components/CoManagementPage';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Governance Support for Existing Teams | Centience",
  description: "The Centience Governance Program works alongside your existing IT team, vCISO, compliance counsel, or cybersecurity providers. One accountable governance operator — no displacement required.",
  keywords: ["governance support existing team","technology governance operator","vCISO governance support","CISO governance program","regulated technology governance","AI governance program","governance layer","governance accountability"],
  alternates: {
    canonical: "https://centience.ai/co-management",
  },
  openGraph: {
    title: "Governance Support for Existing Teams | Centience",
    description: "The Centience Governance Program works with your existing IT team, vCISO, compliance counsel, and cybersecurity providers. One accountable governance operator. No displacement.",
    url: "https://centience.ai/co-management",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Governance Support for Existing Teams | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Governance Support for Existing Teams | Centience",
    description: "The Centience Governance Program works alongside whoever you already have in place. One accountable operator. No displacement required.",
    images: ["https://centience.ai/og-image.png"],
  },
};


const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://centience.ai/co-management/#service",
  "name": "Governance Support for Existing Teams",
  "url": "https://centience.ai/co-management",
  "description": "The Centience Governance Program works alongside your existing IT team, vCISO, compliance counsel, and cybersecurity providers. One accountable governance operator. No displacement required.",
  "provider": { "@id": "https://centience.ai/#organization" },
  "areaServed": "Nationwide"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://centience.ai" },
    { "@type": "ListItem", "position": 2, "name": "The Program", "item": "https://centience.ai/governance" },
    { "@type": "ListItem", "position": 3, "name": "Works With Your Team", "item": "https://centience.ai/co-management" }
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
