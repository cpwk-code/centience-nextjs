import type { Metadata } from 'next';
import { getCMSSEO } from '@/lib/cms-seo';
import KeyFacts from '@/components/KeyFacts';
import ContactPage from '@/page-components/ContactPage';

export const dynamic = 'force-dynamic';

// ─── SEO Metadata (CMS-overridable) ─────────────────────────────────────────
export async function generateMetadata(): Promise<Metadata> {
  // ── CMS Override: fetch from Supabase admin panel ──────────────────────
  const cms = await getCMSSEO("/contact");

  // ── Lovable defaults (extracted from <SEO> component at sync time) ──────
  const baseMetadata: Metadata = {
  title: "Contact Centience — AI & Technology Governance for Regulated Firms",
  description: "Contact Centience to discuss the Governance Program for your regulated organization — AI governance, cybersecurity, data, and infrastructure oversight. Offices in New York and South Florida.",
  keywords: ["contact Centience", "AI governance contact", "technology governance program", "cybersecurity governance", "regulated industries governance", "SEC FINRA governance", "HIPAA governance", "governance readiness review"],
  robots: "index, follow",
  alternates: {
    canonical: "https://centience.ai/contact",
  },
  openGraph: {
    title: "Contact Centience | AI & Technology Governance",
    description: "Get in touch with Centience to discuss the Governance Program for your regulated organization. Offices in New York and South Florida.",
    url: "https://centience.ai/contact",
    type: "website",
    siteName: 'Centience',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: "Contact Centience | AI & Technology Governance",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact Centience | AI & Technology Governance",
    description: "Get in touch with Centience to discuss the Governance Program for your regulated organization. Offices in New York and South Florida.",
    images: ['/og-image.png'],
  },
};

  // ── Merge: CMS values override Lovable defaults ─────────────────────────
  if (!cms) return baseMetadata;

  return {
    ...baseMetadata,
    ...(cms.meta_title && { title: cms.meta_title }),
    ...(cms.meta_description && { description: cms.meta_description }),
    ...(cms.keywords && { keywords: cms.keywords.split(',').map((k: string) => k.trim()) }),
    ...(cms.no_index && { robots: { index: false, follow: false } }),
    ...(cms.canonical_url && {
      alternates: { canonical: cms.canonical_url },
    }),
    ...((cms.og_title || cms.og_description || cms.og_image_url) && {
      openGraph: {
        ...(baseMetadata.openGraph as object || {}),
        ...(cms.og_title && { title: cms.og_title }),
        ...(cms.og_description && { description: cms.og_description }),
        ...(cms.og_image_url && { images: [{ url: cms.og_image_url, width: 1200, height: 630, alt: cms.og_title || cms.meta_title || '' }] }),
      },
    }),
    ...((cms.og_title || cms.og_description || cms.og_image_url) && {
      twitter: {
        ...(baseMetadata.twitter as object || {}),
        ...(cms.og_title && { title: cms.og_title }),
        ...(cms.og_description && { description: cms.og_description }),
        ...(cms.og_image_url && { images: [cms.og_image_url] }),
      },
    }),
  };
}

export default function Page() {
  return (
    <>
      {/* ── Structured Data (JSON-LD) ─────────────────────────────────── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://centience.ai/#location-ny",
  "name": "Centience",
  "url": "https://centience.ai",
  "telephone": "+18779457177",
  "email": "hello@centience.ai",
  "priceRange": "$$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1350 Ave of the Americas, Fl 3",
    "addressLocality": "New York",
    "addressRegion": "NY",
    "postalCode": "10019",
    "addressCountry": "US"
  },
  "geo": {"@type": "GeoCoordinates", "latitude": 40.7614, "longitude": -73.9776},
  "openingHours": "Mo-Fr 09:00-18:00",
  "serviceArea": ["New York City", "Manhattan", "Westchester County", "White Plains NY", "Greenwich CT", "Stamford CT", "Westport CT", "Norwalk CT"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Governance Programs",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "AI Governance Program"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Cybersecurity Governance"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Infrastructure Governance"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Governance Assessment"}}
    ]
  }
}) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://centience.ai/#location-fl",
  "name": "Centience — South Florida",
  "url": "https://centience.ai",
  "telephone": "+18779457177",
  "email": "hello@centience.ai",
  "priceRange": "$$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "200 S. Biscayne Blvd.",
    "addressLocality": "Miami",
    "addressRegion": "FL",
    "postalCode": "33131",
    "addressCountry": "US"
  },
  "geo": {"@type": "GeoCoordinates", "latitude": 25.7691, "longitude": -80.1873},
  "openingHours": "Mo-Fr 09:00-18:00",
  "serviceArea": ["Miami", "Palm Beach County", "Palm Beach Gardens", "Broward County", "Fort Lauderdale"]
}) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Centience",
  "description": "Contact Centience to discuss the Governance Program for your regulated organization — AI governance, cybersecurity, data, and infrastructure oversight. Teams in New York and South Florida.",
  "url": "https://centience.ai/contact",
  "provider": {
    "@id": "https://centience.ai/#organization"
  },
  "areaServed": [
    "New York",
    "Florida",
    "USA"
  ]
}) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://centience.ai"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Contact",
      "item": "https://centience.ai/contact"
    }
  ]
}) }}
      />

      {/* ── Semantic KeyFacts for AI Search Engines ──────────────────── */}
      <KeyFacts
        entityName="Centience"
        entityType="ProfessionalService"
        description="Centience runs continuous AI and technology governance programs for regulated organizations — AI governance, cybersecurity, data, and infrastructure oversight. Offices in New York and South Florida."
        facts={[
      {
            "label": "Experience",
            "value": "20+ years governing regulated technology"
      },
      {
            "label": "Offices",
            "value": "New York, South Florida"
      },
      {
            "label": "Regulatory Focus",
            "value": "SEC, FINRA, HIPAA"
      },
      {
            "label": "Support Availability",
            "value": "24/7"
      },
      {
            "label": "Contact Phone",
            "value": "877.945.7177"
      },
      {
            "label": "Contact Email",
            "value": "hello@centience.ai"
      }
]}
        services={[
      "AI Governance",
      "Cybersecurity Governance",
      "Data Governance",
      "Infrastructure Governance"
]}
        contactInfo={{
          phone: '+1-877-945-7177',
          website: 'https://centience.ai',
        }}
      />

      {/* ── Page Content ───────────────────────────────────────────────── */}
          <ContactPage />
    </>
  );
}
