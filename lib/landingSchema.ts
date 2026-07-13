import type { Metadata } from "next";
import type { LandingPageData } from "@/data/landingContent";
import { buildFaqSchema } from "@/data/industryFaqs";

const SITE = "https://centience.ai";

/** Build Next.js Metadata for a programmatic landing page. */
export function landingMetadata(page: LandingPageData, path: string): Metadata {
  const url = `${SITE}${path}`;
  const title = page.metaTitle;
  const description = page.metaDescription;
  return {
    title,
    description,
    keywords: page.keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "Centience",
      images: [{ url: `${SITE}/og-image.png`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE}/og-image.png`],
    },
  };
}

type Crumb = { name: string; path: string };

/** BreadcrumbList JSON-LD from an ordered list of crumbs. */
export function buildBreadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE}${c.path}`,
    })),
  };
}

/**
 * Combined JSON-LD (BreadcrumbList + FAQPage) for a landing page, ready to
 * inject via a single <script> tag as a @graph array.
 */
export function landingJsonLd(page: LandingPageData, crumbs: Crumb[]) {
  const graph: object[] = [buildBreadcrumbSchema(crumbs)];
  if (page.faqs && page.faqs.length > 0) graph.push(buildFaqSchema(page.faqs));
  return graph;
}
