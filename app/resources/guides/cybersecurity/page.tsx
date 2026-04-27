import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: "Cybersecurity Governance Guide for Regulated Organizations | Centience",
  description: "Technical controls, regulatory frameworks, and continuous monitoring for cybersecurity governance — specific to SEC, FINRA, and HIPAA regulated organizations.",
  keywords: ["cybersecurity governance guide", "cybersecurity SEC FINRA HIPAA", "cybersecurity compliance guide", "regulated organizations cybersecurity"],
  alternates: {
    canonical: "https://centience.ai/resources/guides/cybersecurity",
  },
  openGraph: {
    title: "Cybersecurity Governance Guide for Regulated Organizations | Centience",
    description: "Technical controls, regulatory frameworks, and continuous monitoring for cybersecurity governance — specific to your regulated body.",
    url: "https://centience.ai/resources/guides/cybersecurity",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-guide-cybersecurity.png",
        width: 1200,
        height: 630,
        alt: "Cybersecurity Governance Guide for Regulated Organizations | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cybersecurity Governance Guide for Regulated Organizations | Centience",
    description: "Technical controls, regulatory frameworks, and continuous monitoring for cybersecurity governance.",
    images: ["https://centience.ai/og-guide-cybersecurity.png"],
  },
};

export default function Page() {
  redirect('/resources/guides');
}
