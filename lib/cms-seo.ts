/**
 * cms-seo.ts
 * Server-side helper to fetch SEO overrides from the Supabase CMS.
 * Used in generateMetadata() in every page.tsx.
 *
 * Priority order:
 *   1. CMS override (cms_page_seo table) — set by admin
 *   2. Lovable SEO (extracted from <SEO> component at sync time) — fallback
 */

import { createClient } from '@supabase/supabase-js';

export interface CMSSEOOverride {
  meta_title: string | null;
  meta_description: string | null;
  keywords: string | null;
  og_title: string | null;
  og_description: string | null;
  og_image_url: string | null;
  canonical_url: string | null;
  no_index: boolean | null;
}

/**
 * Derive the page_key used in the CMS from the Next.js route path.
 * Examples:
 *   /                                    → "home"
 *   /about                               → "about"
 *   /services/managed-it-services        → "service-managed-it-services"
 *   /industries/financial-services       → "industry-financial-services"
 *   /locations/managed-it-services-miami → "locations-managed-it-services-miami"
 *   /blogs                               → "blogs"
 */
export function routeToPageKey(route: string): string {
  if (route === '/') return 'home';
  const clean = route.replace(/^\//, '').replace(/\/$/, '');
  // Normalize segment prefixes to match CMS convention
  return clean
    .replace(/^services\//, 'service-')
    .replace(/^industries\//, 'industry-')
    .replace(/^locations\//, 'locations-')
    .replace(/\//g, '-');
}

/**
 * Fetch CMS SEO override for a given route from Supabase.
 * Returns null if no override exists or if Supabase is unavailable.
 * This function runs server-side only (no 'use client').
 */
export async function getCMSSEO(route: string): Promise<CMSSEOOverride | null> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) return null;

  try {
    const supabase = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const pageKey = routeToPageKey(route);

    const { data, error } = await supabase
      .from('cms_page_seo')
      .select('meta_title, meta_description, keywords, og_title, og_description, og_image_url, canonical_url, no_index')
      .eq('page_key', pageKey)
      .maybeSingle();

    if (error || !data) return null;

    // Only return if at least one field is set (avoid empty rows overriding Lovable SEO)
    const hasContent = data.meta_title || data.meta_description || data.canonical_url;
    return hasContent ? (data as CMSSEOOverride) : null;
  } catch {
    return null;
  }
}

/**
 * Merge CMS override with Lovable SEO defaults.
 * CMS values take priority; Lovable values are used as fallback.
 */
export function mergeSEO(
  lovable: {
    title: string;
    description: string;
    canonical: string;
    keywords?: string[];
    ogImage?: string;
  },
  cms: CMSSEOOverride | null
) {
  const SITE_URL = 'https://compuwork.ai';
  const OG_IMAGE = `${SITE_URL}/og-image.png`;

  // Determine the final title.
  // If the CMS title already contains the brand name (e.g. "About Compuwork™ | ..."),
  // we use it as an absolute title to prevent the layout template from appending
  // "| Compuwork" a second time.
  const rawTitle = cms?.meta_title || lovable.title;
  // Strip trailing "| Compuwork" suffix to avoid double-suffix when template was active
  const cleanTitle = rawTitle.replace(/\s*\|\s*Compuwork\s*$/i, '').trim();
  // Always use the clean title as-is — the layout template is set to '%s' (pass-through)
  // so no suffix will be appended automatically.
  const title: string = cleanTitle;
  const titleString: string = cleanTitle;
  const description = cms?.meta_description || lovable.description;
  const canonical = cms?.canonical_url || `${SITE_URL}${lovable.canonical}`;
  const keywords = cms?.keywords
    ? cms.keywords.split(',').map((k) => k.trim())
    : lovable.keywords || [];
  const ogTitle = cms?.og_title || titleString;
  const ogDescription = cms?.og_description || description;
  const ogImage = cms?.og_image_url || lovable.ogImage || OG_IMAGE;
  const noIndex = cms?.no_index ?? false;

  return {
    title,
    description,
    keywords,
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    alternates: { canonical },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: canonical,
      siteName: 'Compuwork',
      images: [{ url: ogImage, width: 1200, height: 630, alt: ogTitle }],
      type: 'website' as const,
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: ogTitle,
      description: ogDescription,
      images: [ogImage],
    },
  };
}
