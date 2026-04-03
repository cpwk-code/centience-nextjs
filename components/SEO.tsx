"use client";
import React from "react";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string[];
  structuredData?: object;
  breadcrumbs?: Array<{ name: string; url: string }>;
  entityName?: string;
  entityType?: string;
  website?: string;
  phone?: string;
  address?: object;
  sameAs?: string[];
  services?: string[];
  areaServed?: string[];
  faqItems?: Array<{ question: string; answer: string }>;
  faq?: Array<{ question: string; answer: string }>;
  noindex?: boolean;
  service?: {
    serviceType?: string;
    provider?: string;
    areaServed?: string[];
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

/**
 * SEO component - no-op stub for Next.js.
 * Metadata is handled via generateMetadata() in app/layout.tsx and page files.
 */
const SEO: React.FC<SEOProps> = () => null;

export default SEO;
