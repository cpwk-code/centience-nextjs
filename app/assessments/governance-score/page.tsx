import type { Metadata } from 'next';
import FinancialServicesGovernanceScore from '@/page-components/assessments/FinancialServicesGovernanceScore';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Governance Score — Free SEC/FINRA Readiness Assessment | Centience",
  description: "Get your firm's 0–100 Governance Score in under 5 minutes. Instant per-domain breakdown, peer benchmark, and priority gaps mapped to SEC and FINRA requirements.",
  keywords: ["governance score", "SEC exam readiness", "FINRA compliance assessment", "RIA governance assessment", "broker-dealer compliance score", "Reg S-P readiness"],
  alternates: {
    canonical: "https://centience.ai/assessments/governance-score",
  },
  openGraph: {
    title: "Governance Score — Free SEC/FINRA Readiness Assessment | Centience",
    description: "Get your firm's 0–100 Governance Score in under 5 minutes. Instant per-domain breakdown, peer benchmark, and priority gaps mapped to SEC and FINRA requirements.",
    url: "https://centience.ai/assessments/governance-score",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Centience Governance Score",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Governance Score — Free SEC/FINRA Readiness Assessment | Centience",
    description: "Get your firm's 0–100 Governance Score in under 5 minutes. Instant per-domain breakdown, peer benchmark, and priority gaps mapped to SEC and FINRA requirements.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://centience.ai"},{"@type":"ListItem","position":2,"name":"Assessments","item":"https://centience.ai/resources/assessments"},{"@type":"ListItem","position":3,"name":"Governance Score","item":"https://centience.ai/assessments/governance-score"}]}' }} />
      <FinancialServicesGovernanceScore />
    </>
  );
}
