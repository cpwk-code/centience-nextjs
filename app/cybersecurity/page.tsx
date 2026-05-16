import type { Metadata } from 'next';
import CybersecurityPage from '@/page-components/CybersecurityPage';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Cybersecurity Governance That Holds Up Under Examination | Centience",
  description: "Centience delivers cybersecurity governance that is technically enforced at the infrastructure level — continuously monitored, documented, and audit-ready. Built for broker-dealers, RIAs, healthcare organizations, and legal firms facing SEC, FINRA, and HIPAA examination scrutiny.",
  keywords: ["cybersecurity governance","cybersecurity governance regulated organizations","SEC cybersecurity examination","FINRA cybersecurity","HIPAA cybersecurity","continuous security monitoring","vendor risk management","incident response governance","cybersecurity compliance financial services"],
  alternates: {
    canonical: "https://centience.ai/cybersecurity",
  },
  openGraph: {
    title: "Cybersecurity Governance That Holds Up Under Examination | Centience",
    description: "Cybersecurity governance technically enforced at the infrastructure level — continuously monitored, documented, and audit-ready for SEC, FINRA, and HIPAA examination. Not just a policy binder.",
    url: "https://centience.ai/cybersecurity",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cybersecurity Governance That Holds Up Under Examination | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cybersecurity Governance That Holds Up Under Examination | Centience",
    description: "Technically enforced at the infrastructure level. Continuously monitored. Audit-ready for SEC, FINRA, and HIPAA examination.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <CybersecurityPage />;
}
