import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';
import HealthcareAssessment from '@/page-components/assessments/HealthcareAssessment';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Healthcare Governance Assessment | Centience",
  description: "Free technology and AI governance assessment for healthcare organizations. Identify gaps relative to HIPAA, FDA, and ONC requirements. Get your customized governance roadmap.",
  keywords: ["healthcare governance assessment","HIPAA assessment","healthcare technology assessment","healthcare AI assessment","health compliance assessment"],
  alternates: {
    canonical: "https://centience.ai/assessments/healthcare",
  },
  openGraph: {
    title: "Healthcare Governance Assessment | Centience",
    description: "Free technology and AI governance assessment for healthcare organizations. Identify gaps relative to HIPAA, FDA, and ONC requirements. Get your customized governance roadmap.",
    url: "https://centience.ai/assessments/healthcare",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Healthcare Governance Assessment | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Healthcare Governance Assessment | Centience",
    description: "Free technology and AI governance assessment for healthcare organizations. Identify gaps relative to HIPAA, FDA, and ONC requirements. Get your customized governance roadmap.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <HealthcareAssessment />;
}
