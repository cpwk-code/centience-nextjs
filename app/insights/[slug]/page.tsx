import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPostPage from '@/page-components/BlogPostPage';
import { blogPosts } from '@/data/blogPosts';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    alternates: {
      canonical: `https://centience.ai/insights/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      url: `https://centience.ai/insights/${post.slug}`,
      type: 'article',
      siteName: 'Centience',
      images: [
        {
          url: 'https://centience.ai/og-image.png',
          width: 1200,
          height: 630,
          alt: post.metaTitle || post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      images: ['https://centience.ai/og-image.png'],
    },
  };
}

export default function Page({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();
  return <BlogPostPage />;
}
