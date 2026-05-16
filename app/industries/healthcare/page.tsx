import type { Metadata } from 'next';
import HealthcarePage from '@/page-components/industries/HealthcarePage';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "HIPAA-Compliant AI & Technology Governance for Healthcare Organizations | Centience",
  description: "Centience delivers HIPAA-compliant AI and technology governance for healthcare organizations deploying AI in clinical and operational environments — managing the infrastructure where patient data lives, governing AI tools from day one, and maintaining audit-ready evidence continuously. OfficeSafe heritage: 5,000+ healthcare practices governed.",
  keywords: ["HIPAA AI governance","healthcare AI governance","HIPAA technology governance","clinical AI governance","healthcare cybersecurity governance","HIPAA compliance managed services","patient data governance","OfficeSafe","healthcare IT governance","OCR audit readiness","HIPAA technical safeguards"],
  alternates: {
    canonical: "https://centience.ai/industries/healthcare",
  },
  openGraph: {
    title: "HIPAA-Compliant AI & Technology Governance for Healthcare | Centience",
    description: "Centience governs AI adoption in clinical and operational healthcare environments — HIPAA-compliant from day one. OfficeSafe heritage: 5,000+ healthcare practices governed before acquisition by Rectangle Health. Continuously enforced. Audit-ready.",
    url: "https://centience.ai/industries/healthcare",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "HIPAA-Compliant AI & Technology Governance for Healthcare | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "HIPAA-Compliant AI Governance for Healthcare | Centience",
    description: "OfficeSafe heritage: 5,000+ healthcare practices governed. HIPAA-compliant AI governance for clinical and operational environments. Continuously enforced.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <HealthcarePage />;
}
