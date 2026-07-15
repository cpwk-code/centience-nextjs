import type { Metadata } from "next";
import FoundingPage from "@/page-components/FoundingPage";
import { buildBreadcrumbSchema } from "@/lib/landingSchema";

const title = "Founding Customer Program | Centience Platform";
const description =
  "Join the charter cohort for the Centience governance platform ahead of our September launch. Founding pricing, roadmap influence, white-glove onboarding, and a launch guarantee. Limited to 20 firms.";
const url = "https://centience.ai/founding";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Centience founding customer",
    "governance platform early access",
    "charter pricing compliance software",
    "RIA broker-dealer governance platform",
    "SEC FINRA HIPAA governance early access",
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

const breadcrumb = buildBreadcrumbSchema([
  { name: "Home", path: "" },
  { name: "Platform", path: "/platform" },
  { name: "Founding Customer Program", path: "/founding" },
]);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <FoundingPage />
    </>
  );
}
