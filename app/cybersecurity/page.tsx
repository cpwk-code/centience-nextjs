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


const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://centience.ai/cybersecurity/#service",
  "name": "Cybersecurity Governance",
  "url": "https://centience.ai/cybersecurity",
  "description": "Centience Cybersecurity Governance — continuous cybersecurity oversight, vulnerability management, incident response, and examination-ready evidence for regulated organizations.",
  "provider": { "@id": "https://centience.ai/#organization" },
  "areaServed": "Nationwide"
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://centience.ai" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://centience.ai/governance" },
    { "@type": "ListItem", "position": 3, "name": "Cybersecurity", "item": "https://centience.ai/cybersecurity" }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CybersecurityPage />
    </>
  );
}
