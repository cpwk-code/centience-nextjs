'use client';
import dynamic from 'next/dynamic';

// Client component wrapper — ssr:false is only allowed in Client Components (Next.js 15)
const BlogPostPage = dynamic(() => import('@/page-components/BlogPostPage'), { ssr: false });

export default function BlogPostClient() {
  return <BlogPostPage />;
}
