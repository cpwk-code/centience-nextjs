import DataGovernancePage from "@/page-components/DataGovernancePage";
import type { Metadata } from "next";
import { buildFaqSchema } from "@/data/industryFaqs";
import { dataGovernanceFaqs } from "@/data/serviceFaqs";

export const metadata: Metadata = {
  title: "Data Governance for Regulated Organizations | Centience",
  description: "Centience delivers continuous data governance for regulated organizations — data classification, FINRA 17a-4 retention, AI data lineage.",
  keywords: [
    "data governance regulated organizations",
    "data governance financial services",
    "FINRA 17a-4 records retention",
    "data governance HIPAA",
    "data classification compliance",
    "AI data lineage",
    "off-channel communications compliance",
    "data governance SEC",
    "records retention management",
    "data access controls financial firms",
  ],
  alternates: {
    canonical: "https://centience.ai/data-governance",
  },
  openGraph: {
    title: "Data Governance for Regulated Organizations | Centience",
    description: "Continuous data governance — classification, retention aligned to FINRA 17a-4 and HIPAA, AI data lineage, and access control governance. The control layer that makes every other governance program defensible.",
    url: "https://centience.ai/data-governance",
    type: "website",
    siteName: "Centience",
    images: [{ url: "https://centience.ai/og-image.png", width: 1200, height: 630, alt: "Data Governance for Regulated Organizations | Centience" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Governance for Regulated Organizations | Centience",
    description: "Classification, retention, lineage, and access controls — continuously maintained. The control layer that makes AI governance, cybersecurity, and infrastructure governance defensible.",
    images: ["https://centience.ai/og-image.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://centience.ai/data-governance/#service",
  "name": "Data Governance Program",
  "url": "https://centience.ai/data-governance",
  "description": "Centience Data Governance Program — continuous data classification, records retention, data lineage for AI audit trails, and access control governance for regulated organizations.",
  "provider": { "@id": "https://centience.ai/#organization" },
  "areaServed": "Nationwide",
};

const faqSchema = buildFaqSchema(dataGovernanceFaqs);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://centience.ai" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://centience.ai/governance" },
    { "@type": "ListItem", "position": 3, "name": "Data Governance", "item": "https://centience.ai/data-governance" },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <DataGovernancePage />
    </>
  );
}
