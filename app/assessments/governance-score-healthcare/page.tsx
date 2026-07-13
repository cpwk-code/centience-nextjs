import type { Metadata } from 'next';
import HealthcareGovernanceScore from '@/page-components/assessments/HealthcareGovernanceScore';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "HIPAA Governance Score — Free Healthcare Compliance Assessment | Centience",
  description: "Get your healthcare organization's 0–100 HIPAA Governance Score in under 5 minutes. Instant per-domain breakdown, peer benchmark, and priority gaps mapped to the HIPAA Security, Privacy, and Breach Notification Rules.",
  keywords: ["HIPAA governance score", "HIPAA compliance assessment", "healthcare security risk analysis", "HIPAA readiness", "ePHI protection assessment", "medical practice compliance"],
  alternates: {
    canonical: "https://centience.ai/assessments/governance-score-healthcare",
  },
  openGraph: {
    title: "HIPAA Governance Score — Free Healthcare Compliance Assessment | Centience",
    description: "Get your healthcare organization's 0–100 HIPAA Governance Score in under 5 minutes. Instant per-domain breakdown, peer benchmark, and priority gaps mapped to the HIPAA Security, Privacy, and Breach Notification Rules.",
    url: "https://centience.ai/assessments/governance-score-healthcare",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Centience HIPAA Governance Score",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "HIPAA Governance Score — Free Healthcare Compliance Assessment | Centience",
    description: "Get your healthcare organization's 0–100 HIPAA Governance Score in under 5 minutes.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://centience.ai"},{"@type":"ListItem","position":2,"name":"Assessments","item":"https://centience.ai/resources/assessments"},{"@type":"ListItem","position":3,"name":"HIPAA Governance Score","item":"https://centience.ai/assessments/governance-score-healthcare"}]}' }} />
      <HealthcareGovernanceScore />
    </>
  );
}
