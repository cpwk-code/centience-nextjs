import BlogPostPage from '@/page-components/BlogPostPage';

// Force dynamic rendering — BlogPostPage is a client component
// that uses useParams() and cannot be statically prerendered
export const dynamic = 'force-dynamic';

export default function Page() {
  return <BlogPostPage />;
}
