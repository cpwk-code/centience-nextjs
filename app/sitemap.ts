import type { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blogPosts';
import { complianceContent } from '@/data/complianceContent';
import { comparePages } from '@/data/comparePages';
import { localGovernancePages } from '@/data/localGovernancePages';

// New programmatic SEO landing pages ship with the 2026-07-13 release.
const LANDING_LASTMOD = '2026-07-13';

const MONTHS: Record<string, string> = {
  January: '01', February: '02', March: '03', April: '04',
  May: '05', June: '06', July: '07', August: '08',
  September: '09', October: '10', November: '11', December: '12',
};

function toLastMod(dateStr: string | undefined): string {
  if (!dateStr) return '2026-05-01';
  if (/^\d{4}-\d{2}-\d{2}/.test(dateStr)) return dateStr.slice(0, 10);
  const match = dateStr.match(/^(\w+)\s+(\d{4})$/);
  if (match && MONTHS[match[1]]) return `${match[2]}-${MONTHS[match[1]]}-01`;
  return '2026-05-01';
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    // Core
    { url: 'https://centience.ai', lastModified: '2026-07-10', changeFrequency: 'weekly', priority: 1.0 },
    // Programs
    { url: 'https://centience.ai/governance', lastModified: '2026-07-10', changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://centience.ai/ai-governance', lastModified: '2026-07-10', changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://centience.ai/cybersecurity', lastModified: '2026-07-10', changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://centience.ai/infrastructure', lastModified: '2026-07-10', changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://centience.ai/co-management', lastModified: '2026-07-10', changeFrequency: 'monthly', priority: 0.85 },
    { url: 'https://centience.ai/data-governance', lastModified: '2026-06-21', changeFrequency: 'monthly', priority: 0.9 },
    // Program enrollment — Governance Readiness Review (primary CTA)
    // Assessment
    // Industries
    { url: 'https://centience.ai/industries', lastModified: '2026-05-01', changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://centience.ai/industries/financial-services', lastModified: '2026-05-01', changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://centience.ai/industries/healthcare', lastModified: '2026-05-01', changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://centience.ai/industries/law-firms', lastModified: '2026-07-10', changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://centience.ai/industries/private-equity', lastModified: '2026-05-01', changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://centience.ai/industries/accounting-cpa', lastModified: '2026-07-10', changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://centience.ai/industries/professional-services', lastModified: '2026-05-01', changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://centience.ai/industries/non-profit', lastModified: '2026-05-01', changeFrequency: 'monthly', priority: 0.75 },
    // Resources
    { url: 'https://centience.ai/resources/assessments', lastModified: '2026-05-01', changeFrequency: 'monthly', priority: 0.75 },
    { url: 'https://centience.ai/resources/guides', lastModified: '2026-07-10', changeFrequency: 'monthly', priority: 0.75 },
    // Guide detail pages (full SEC/FINRA/HIPAA content + gated PDF download)
    { url: 'https://centience.ai/resources/guides/ai-governance', lastModified: '2026-07-10', changeFrequency: 'monthly', priority: 0.75 },
    { url: 'https://centience.ai/resources/guides/cybersecurity', lastModified: '2026-07-10', changeFrequency: 'monthly', priority: 0.75 },
    { url: 'https://centience.ai/resources/guides/infrastructure', lastModified: '2026-07-10', changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://centience.ai/resources/guides/governance-program', lastModified: '2026-07-10', changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://centience.ai/resources/guides/compliance-readiness', lastModified: '2026-07-10', changeFrequency: 'monthly', priority: 0.75 },
    { url: 'https://centience.ai/resources/newsletter', lastModified: '2026-05-01', changeFrequency: 'monthly', priority: 0.6 },
    // Assessments — Governance Score (headline conversion funnels)
    { url: 'https://centience.ai/assessments/governance-score', lastModified: '2026-07-13', changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://centience.ai/assessments/governance-score-healthcare', lastModified: '2026-07-13', changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://centience.ai/assessments/ai-governance', lastModified: '2026-05-01', changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://centience.ai/assessments/financial-services', lastModified: '2026-05-01', changeFrequency: 'monthly', priority: 0.75 },
    { url: 'https://centience.ai/assessments/healthcare', lastModified: '2026-05-01', changeFrequency: 'monthly', priority: 0.75 },
    { url: 'https://centience.ai/assessments/law-firms', lastModified: '2026-05-01', changeFrequency: 'monthly', priority: 0.75 },
    { url: 'https://centience.ai/assessments/private-equity', lastModified: '2026-05-01', changeFrequency: 'monthly', priority: 0.75 },
    { url: 'https://centience.ai/assessments/accounting-cpa', lastModified: '2026-05-01', changeFrequency: 'monthly', priority: 0.75 },
    { url: 'https://centience.ai/assessments/non-profit', lastModified: '2026-05-01', changeFrequency: 'monthly', priority: 0.7 },
    // Insights
    { url: 'https://centience.ai/insights', lastModified: '2026-06-27', changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://centience.ai/insights/articles', lastModified: '2026-06-27', changeFrequency: 'weekly', priority: 0.8 },
    // Company
    { url: 'https://centience.ai/about', lastModified: '2026-05-01', changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://centience.ai/partners', lastModified: '2026-05-01', changeFrequency: 'monthly', priority: 0.65 },
    { url: 'https://centience.ai/contact', lastModified: '2026-05-01', changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://centience.ai/privacy-policy', lastModified: '2026-05-01', changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://centience.ai/terms-of-service', lastModified: '2026-05-01', changeFrequency: 'yearly', priority: 0.3 },
    // Locations
    { url: 'https://centience.ai/locations', lastModified: '2026-05-01', changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://centience.ai/locations/ai-governance-new-york', lastModified: '2026-05-01', changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://centience.ai/locations/ai-governance-manhattan', lastModified: '2026-05-01', changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://centience.ai/locations/ai-governance-westchester', lastModified: '2026-05-01', changeFrequency: 'monthly', priority: 0.65 },
    { url: 'https://centience.ai/locations/ai-governance-greenwich-ct', lastModified: '2026-05-01', changeFrequency: 'monthly', priority: 0.65 },
    { url: 'https://centience.ai/locations/ai-governance-stamford-ct', lastModified: '2026-05-01', changeFrequency: 'monthly', priority: 0.65 },
    { url: 'https://centience.ai/locations/ai-governance-white-plains-ny', lastModified: '2026-05-01', changeFrequency: 'monthly', priority: 0.65 },
    { url: 'https://centience.ai/locations/ai-governance-miami', lastModified: '2026-05-01', changeFrequency: 'monthly', priority: 0.65 },
    { url: 'https://centience.ai/locations/ai-governance-palm-beach', lastModified: '2026-05-01', changeFrequency: 'monthly', priority: 0.65 },
    { url: 'https://centience.ai/locations/ai-governance-fort-lauderdale', lastModified: '2026-05-01', changeFrequency: 'monthly', priority: 0.65 },
  ];

  const complianceLanding: MetadataRoute.Sitemap = Object.keys(complianceContent).map((slug) => ({
    url: `https://centience.ai/compliance/${slug}`,
    lastModified: LANDING_LASTMOD,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const compareLanding: MetadataRoute.Sitemap = Object.keys(comparePages).map((slug) => ({
    url: `https://centience.ai/compare/${slug}`,
    lastModified: LANDING_LASTMOD,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  const localLanding: MetadataRoute.Sitemap = Object.keys(localGovernancePages).map((slug) => ({
    url: `https://centience.ai/locations/${slug}`,
    lastModified: LANDING_LASTMOD,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts
    // Published Centience articles only, and exclude LinkedIn-only / empty stubs
    .filter((p) => p.id >= 11 && !p.externalUrl && p.content && p.content.trim().length > 0)
    .map((post) => ({
      url: `https://centience.ai/insights/${post.slug}`,
      lastModified: toLastMod(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    }));

  return [...staticPages, ...complianceLanding, ...compareLanding, ...localLanding, ...blogPages];
}
