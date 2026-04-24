import type { Metadata } from 'next';
import InsightsArticlesPage from '@/page-components/InsightsArticlesPage';

export const metadata: Metadata = {
  title: "AI Governance & Cybersecurity Articles | Centience Insights",
  description: "Practitioner-level articles on AI governance, cybersecurity, and regulatory compliance for SEC, FINRA, and HIPAA regulated organizations. Written by Centience practitioners.",
  keywords: [
    "AI governance articles",
    "SEC compliance blog",
    "FINRA cybersecurity",
    "HIPAA AI governance",
    "technology governance insights",
    "AI washing enforcement",
    "regulated industry compliance",
  ],
  alternates: {
    canonical: "https://centience.ai/insights/articles",
  },
  openGraph: {
    title: "AI Governance & Cybersecurity Articles | Centience Insights",
    description: "Practitioner-level articles on AI governance, cybersecurity, and regulatory compliance for SEC, FINRA, and HIPAA regulated organizations.",
    url: "https://centience.ai/insights/articles",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Centience Insights — AI Governance & Cybersecurity Articles",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Governance & Cybersecurity Articles | Centience Insights",
    description: "Practitioner-level articles on AI governance, cybersecurity, and regulatory compliance for SEC, FINRA, and HIPAA regulated organizations.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <InsightsArticlesPage />;
}
