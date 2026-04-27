import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: "Infrastructure Governance Guide for Regulated Organizations | Centience",
  description: "How managed infrastructure enforces compliance obligations — endpoints, networks, cloud, identity, and backup governance specific to your regulated body.",
  keywords: ["infrastructure governance guide", "managed infrastructure compliance", "infrastructure SEC FINRA HIPAA", "IT infrastructure governance"],
  alternates: {
    canonical: "https://centience.ai/resources/guides/infrastructure",
  },
  openGraph: {
    title: "Infrastructure Governance Guide for Regulated Organizations | Centience",
    description: "How managed infrastructure enforces compliance obligations — endpoints, networks, cloud, identity, and backup governance.",
    url: "https://centience.ai/resources/guides/infrastructure",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-guide-infrastructure.png",
        width: 1200,
        height: 630,
        alt: "Infrastructure Governance Guide for Regulated Organizations | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Infrastructure Governance Guide for Regulated Organizations | Centience",
    description: "How managed infrastructure enforces compliance obligations — endpoints, networks, cloud, identity, and backup governance.",
    images: ["https://centience.ai/og-guide-infrastructure.png"],
  },
};

export default function Page() {
  redirect('/resources/guides');
}
