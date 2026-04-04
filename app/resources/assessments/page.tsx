import type { Metadata } from 'next';
import AssessmentsPage from '@/page-components/resources/AssessmentsPage';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Technology & AI Governance Assessments | Centience",
  description: "Free technology and AI governance assessments for regulated organizations. Identify gaps in your governance program and get a customized roadmap from Centience.",
  keywords: ["governance assessment","AI governance assessment","technology assessment","compliance gap analysis","governance gap assessment","risk assessment"],
  alternates: {
    canonical: "https://centience.ai/resources/assessments",
  },
  openGraph: {
    title: "Technology & AI Governance Assessments | Centience",
    description: "Free technology and AI governance assessments for regulated organizations. Identify gaps in your governance program and get a customized roadmap from Centience.",
    url: "https://centience.ai/resources/assessments",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Technology & AI Governance Assessments | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Technology & AI Governance Assessments | Centience",
    description: "Free technology and AI governance assessments for regulated organizations. Identify gaps in your governance program and get a customized roadmap from Centience.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <AssessmentsPage />;
}
