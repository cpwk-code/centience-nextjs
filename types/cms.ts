// CMS Types

export interface CMSBlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  featured_image_url: string | null;
  status: 'draft' | 'published' | 'archived';
  published_at: string | null;
  created_at: string;
  updated_at: string;
  // SEO fields
  meta_title: string | null;
  meta_description: string | null;
  keywords: string | null;
}

export interface CMSPageContent {
  id: string;
  page_key: string;
  section_key: string;
  content: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export interface CMSPageSEO {
  id: string;
  page_key: string;
  meta_title: string | null;
  meta_description: string | null;
  keywords: string | null;
  og_title: string | null;
  og_description: string | null;
  og_image_url: string | null;
  canonical_url: string | null;
  no_index: boolean;
  created_at: string;
  updated_at: string;
}

export interface CMSService {
  id: string;
  slug: string;
  name: string;
  short_description: string;
  full_description: string | null;
  icon: string | null;
  features: string[];
  order_index: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  // SEO fields
  meta_title: string | null;
  meta_description: string | null;
  keywords: string | null;
}

export interface CMSIndustry {
  id: string;
  slug: string;
  name: string;
  short_description: string;
  full_description: string | null;
  icon: string | null;
  key_regulations: string[];
  order_index: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  // SEO fields
  meta_title: string | null;
  meta_description: string | null;
  keywords: string | null;
}

export type CMSBlogPostInsert = Omit<CMSBlogPost, 'id' | 'created_at' | 'updated_at'>;
export type CMSBlogPostUpdate = Partial<CMSBlogPostInsert>;

export type CMSServiceInsert = Omit<CMSService, 'id' | 'created_at' | 'updated_at'>;
export type CMSServiceUpdate = Partial<CMSServiceInsert>;

export type CMSIndustryInsert = Omit<CMSIndustry, 'id' | 'created_at' | 'updated_at'>;
export type CMSIndustryUpdate = Partial<CMSIndustryInsert>;

export type CMSPageSEOInsert = Omit<CMSPageSEO, 'id' | 'created_at' | 'updated_at'>;
export type CMSPageSEOUpdate = Partial<CMSPageSEOInsert>;
