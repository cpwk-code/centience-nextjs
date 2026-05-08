import type { Metadata } from 'next';
import { blogPosts } from '@/data/blogPosts';
import dynamic from 'next/dynamic';

// Render BlogPostPage client-only — it uses useParams() and cannot run server-side
const BlogPostPage = dynamic(() => import('@/page-components/BlogPostPage'), { ssr: false });

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug && p.id >= 11);
  if (!post) return {};

  const title = post.metaTitle || post.title;
  const description = post.metaDescription || post.excerpt;
  const url = `https://centience.ai/insights/${post.slug}`;
  const ogImage = 'https://centience.ai/og-image.png';

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      siteName: 'Centience',
      authors: [post.author],
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug && p.id >= 11);

  const articleJsonLd = post ? JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    author: { '@type': 'Person', name: post.author, url: 'https://www.linkedin.com/in/orvillematias/' },
    publisher: { '@type': 'Organization', name: 'Centience', url: 'https://centience.ai', logo: { '@type': 'ImageObject', url: 'https://centience.ai/assets/logo-white.png' } },
    datePublished: post.date,
    dateModified: post.date,
    url: `https://centience.ai/insights/${post.slug}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://centience.ai/insights/${post.slug}` },
    image: `https://centience.ai${typeof post.image === 'string' ? post.image : (post.image as any).src}`,
  }) : null;

  const breadcrumbJsonLd = post ? JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://centience.ai' },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://centience.ai/insights/articles' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://centience.ai/insights/${post.slug}` },
    ],
  }) : null;

  return (
    <>
      {articleJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleJsonLd }} />}
      {breadcrumbJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }} />}
      <BlogPostPage />
    </>
  );
}
