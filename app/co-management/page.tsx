import type { Metadata } from 'next';
import CoManagementPage from '@/page-components/CoManagementPage';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Co Management | Centience",
  description: "AI and technology governance for regulated organizations.",
  keywords: ["AI governance","technology governance","compliance"],
  alternates: {
    canonical: "https://centience.ai/co-management",
  },
  openGraph: {
    title: "Co Management | Centience",
    description: "AI and technology governance for regulated organizations.",
    url: "https://centience.ai/co-management",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Co Management | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Co Management | Centience",
    description: "AI and technology governance for regulated organizations.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <CoManagementPage />;
}
