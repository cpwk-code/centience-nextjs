import type { LandingContent } from "@/page-components/LandingPage";

/**
 * Content for programmatic SEO landing pages (regulation, comparison, and
 * sector-location). Extends the render-time LandingContent with the metadata
 * fields the route's generateMetadata needs.
 */
export interface LandingPageData extends LandingContent {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}
