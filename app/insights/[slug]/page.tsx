import type { Metadata } from 'next';
import { blogPosts } from '@/data/blogPosts';
import BlogPostPage from '@/page-components/BlogPostPage';

export async function generateStaticParams() {
  // Published articles only — exclude LinkedIn-only / empty stubs (they link out, not to a native page)
  return blogPosts
    .filter((p) => p.id >= 11 && !p.externalUrl && p.content && p.content.trim().length > 0)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug && p.id >= 11);
  if (!post) return {};

  const title = post.metaTitle || post.title;
  const description = post.metaDescription || post.excerpt;
  const url = `https://centience.ai/insights/${post.slug}`;
  const postImage = typeof post.image === 'string' ? post.image : (post.image as any).src;
  const ogImage = postImage.startsWith('http') ? postImage : `https://centience.ai${postImage}`;

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

  const postImagePath = typeof post?.image === 'string' ? post.image : (post?.image as any)?.src ?? '';
  const postImageUrl = postImagePath.startsWith('http') ? postImagePath : `https://centience.ai${postImagePath}`;

  const MONTHS: Record<string, string> = {
    January: '01', February: '02', March: '03', April: '04',
    May: '05', June: '06', July: '07', August: '08',
    September: '09', October: '10', November: '11', December: '12',
  };
  function toIso(dateStr: string): string {
    const m = dateStr.match(/^(\w+)\s+(\d{4})$/);
    return m && MONTHS[m[1]] ? `${m[2]}-${MONTHS[m[1]]}-01` : dateStr;
  }

  const articleJsonLd = post ? JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    keywords: post.category,
    author: { '@type': 'Person', name: post.author, url: 'https://www.linkedin.com/in/orvillematias/' },
    publisher: { '@type': 'Organization', name: 'Centience', url: 'https://centience.ai', logo: { '@type': 'ImageObject', url: 'https://centience.ai/assets/logo-white.png' } },
    datePublished: toIso(post.date),
    dateModified: toIso(post.date),
    url: `https://centience.ai/insights/${post.slug}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://centience.ai/insights/${post.slug}` },
    image: { '@type': 'ImageObject', url: postImageUrl, width: 1200, height: 630 },
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
      {/* Render the article body server-side (client component still hydrates) so the
          full text is present in the initial HTML for crawlers. Passing the slug as a
          prop keeps server and client renders deterministic. */}
      <BlogPostPage slug={params.slug} />
    </>
  );
}
