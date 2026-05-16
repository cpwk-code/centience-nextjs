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
  title: "Contact Centience – IT & Cybersecurity Support",
  description: "Contact Centience for expert managed IT, cybersecurity, and compliance support. Reach our New York & Florida teams today!",
  keywords: ["contact managed IT services", "Centience IT support", "cybersecurity contact", "compliance IT support", "financial services IT help", "legal IT support contact", "healthcare IT services contact", "SEC compliance IT support", "FINRA compliance IT contact", "HIPAA IT support", "SOC 2 compliance IT", "CMMC IT support"],
  robots: "index, follow",
  alternates: {
    canonical: "https://centience.ai/contact",
  },
  openGraph: {
    title: "Contact Centience | Managed IT Services & Cybersecurity Support",
    description: "Get in touch with Centience for compliance-first managed IT and cybersecurity support. Offices in New York & Florida ready to assist you.",
    url: "https://centience.ai/contact",
    type: "website",
    siteName: 'Centience',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: "Contact Centience | Managed IT Services & Cybersecurity Support",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact Centience | Managed IT Services & Cybersecurity Support",
    description: "Get in touch with Centience for compliance-first managed IT and cybersecurity support. Offices in New York & Florida ready to assist you.",
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
  "description": "Contact Centience for expert managed IT services, cybersecurity, and compliance support. Our teams in New York and Florida are ready to assist your business.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I contact Centience for IT support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can contact Centience via email at hello@centience.ai or by phone at 877.945.7177. Our support team is available 24/7."
      }
    },
    {
      "@type": "Question",
      "name": "What industries does Centience support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Centience specializes in managed IT and cybersecurity services for financial services, legal, healthcare, and professional services organizations."
      }
    },
    {
      "@type": "Question",
      "name": "Does Centience provide compliance support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Centience offers compliance-first IT services specializing in SEC, FINRA, HIPAA, SOC 2, and CMMC compliance requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Where are Centience\u2019s offices located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Centience has offices in New York City and Florida to provide local and remote IT support."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly will Centience respond to a contact inquiry?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Once you fill out the contact form, a Centience specialist will reach out within 24 hours to discuss your needs."
      }
    }
  ]
}) }}
      />

      {/* ── Semantic KeyFacts for AI Search Engines ──────────────────── */}
      <KeyFacts
        entityName="Centience"
        entityType="ProfessionalService"
        description="Centience is a managed IT services and cybersecurity provider specializing in compliance for regulated industries. Founded in 2005, with offices in New York and Florida."
        facts={[
      {
            "label": "Founded",
            "value": "2005"
      },
      {
            "label": "Offices",
            "value": "New York, Florida"
      },
      {
            "label": "Compliance Specialties",
            "value": "SEC, FINRA, HIPAA, SOC 2, CMMC"
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
      "Managed IT Services",
      "Cybersecurity",
      "Compliance Support"
]}
        contactInfo={{
          phone: '+1-800-CENTIENCE',
          website: 'https://centience.ai',
        }}
      />

      {/* ── Page Content ───────────────────────────────────────────────── */}
          <ContactPage />
    </>
  );
}
