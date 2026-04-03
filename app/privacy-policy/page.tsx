import type { Metadata } from 'next';
import PrivacyPolicyPage from '@/page-components/PrivacyPolicyPage';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Privacy Policy | Centience",
  description: "AI and technology governance for regulated organizations.",
  keywords: ["AI governance","technology governance","compliance"],
  alternates: {
    canonical: "https://centience.ai/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Centience",
    description: "AI and technology governance for regulated organizations.",
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
    description: "AI and technology governance for regulated organizations.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <PrivacyPolicyPage />;
}
