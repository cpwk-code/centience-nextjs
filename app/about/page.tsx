import type { Metadata } from 'next';
import AboutPage from '@/page-components/AboutPage';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "About Centience — Built From 20 Years Inside Regulated Organizations",
  description: "Centience was founded by Orville Matias — builder of OfficeSafe, scaled to 5,000+ healthcare practices before acquisition by Rectangle Health. 20+ years governing regulated IT environments. 100% audit success rate across all engagements. Continuous AI and technology governance for regulated organizations.",
  keywords: ["Centience about","Orville Matias","OfficeSafe","technology governance firm","AI governance company","regulated industries governance","continuous technology governance","100% audit success rate"],
  alternates: {
    canonical: "https://centience.ai/about",
  },
  openGraph: {
    title: "About Centience — Built From 20 Years Inside Regulated Organizations",
    description: "Centience was founded by Orville Matias — builder of OfficeSafe (5,000+ healthcare practices, acquired by Rectangle Health). 20+ years governing regulated IT. 100% audit success rate. Continuous AI and technology governance.",
    url: "https://centience.ai/about",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Centience — Built From 20 Years Inside Regulated Organizations",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Centience — 20 Years Inside Regulated Organizations",
    description: "Centience was founded by the builder of OfficeSafe. 20+ years governing regulated IT. 100% audit success rate. Continuous AI and technology governance.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <AboutPage />;
}
