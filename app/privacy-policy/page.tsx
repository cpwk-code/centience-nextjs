import type { Metadata } from 'next';
import PrivacyPolicyPage from '@/page-components/PrivacyPolicyPage';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Privacy Policy | Centience",
  description: "Read Centience's Privacy Policy. Learn how we collect, use, and protect personal information for clients across regulated industries including finance, healthcare, and legal.",
  keywords: ["Centience privacy policy","data privacy","information security","regulated industry privacy"],
  alternates: {
    canonical: "https://centience.ai/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Centience",
    description: "Read Centience's Privacy Policy. Learn how we collect, use, and protect personal information for clients across regulated industries including finance, healthcare, and legal.",
    url: "https://centience.ai/privacy-policy",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Privacy Policy | Centience",
    description: "Read Centience's Privacy Policy. Learn how we collect, use, and protect personal information for clients across regulated industries including finance, healthcare, and legal.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <PrivacyPolicyPage />;
}
