import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: "Technology Governance Program Guide | Centience",
  description: "The Centience governance model — Assessment, Roadmap, and Program — built around your specific regulatory obligations.",
  keywords: ["technology governance program", "governance program guide", "compliance program guide", "technology governance model"],
  alternates: {
    canonical: "https://centience.ai/resources/guides/governance-program",
  },
  openGraph: {
    title: "Technology Governance Program Guide | Centience",
    description: "The Centience governance model — Assessment, Roadmap, and Program — built around your specific regulatory obligations.",
    url: "https://centience.ai/resources/guides/governance-program",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-guide-governance-program.png",
        width: 1200,
        height: 630,
        alt: "Technology Governance Program Guide | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Technology Governance Program Guide | Centience",
    description: "The Centience governance model — Assessment, Roadmap, and Program — built around your specific regulatory obligations.",
    images: ["https://centience.ai/og-guide-governance-program.png"],
  },
};

export default function Page() {
  redirect('/resources/guides');
}
