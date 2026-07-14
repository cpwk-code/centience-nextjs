import type { Metadata } from "next";
import PlatformPage from "@/page-components/PlatformPage";
import { buildBreadcrumbSchema } from "@/lib/landingSchema";

const title = "The Centience Platform — Governance Software for Regulated Firms";
const description =
  "Continuous technology and AI governance in software. Connect Microsoft 365 or Google, get scored against SEC, FINRA, and HIPAA, and keep a standing evidence trail. Book a demo.";
const url = "https://centience.ai/platform";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "governance platform for regulated firms",
    "compliance software RIA broker-dealer",
    "SEC FINRA governance software",
    "continuous compliance monitoring platform",
    "AI governance software financial services",
    "evidence vault exam readiness",
    "HIPAA governance platform",
    "technology governance software",
  ],
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    type: "website",
    siteName: "Centience",
    images: [{ url: "https://centience.ai/og-image.png", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://centience.ai/og-image.png"],
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Centience Platform",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Continuous technology and AI governance platform for SEC, FINRA, and HIPAA regulated firms — control monitoring, evidence vault, policy generation, incident and Regulation S-P workflows, and control mapping.",
  url,
  provider: { "@id": "https://centience.ai/#organization" },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "PriceSpecification",
      description: "Pricing scales with firm size and scope. Contact for a quote.",
    },
  },
};

const breadcrumb = buildBreadcrumbSchema([
  { name: "Home", path: "" },
  { name: "Platform", path: "/platform" },
]);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PlatformPage />
    </>
  );
}
