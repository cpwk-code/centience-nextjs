import type { Metadata } from 'next';
import InfrastructurePage from '@/page-components/InfrastructurePage';

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Managed Infrastructure Governance for Regulated Organizations | Centience",
  description: "Centience implements and manages your infrastructure — computers, networks, cloud, endpoints, and disaster recovery — as the operational foundation your governance program runs on. Full management or co-management with your existing IT team.",
  keywords: ["managed infrastructure","infrastructure governance","co-managed IT","managed IT regulated industries","cloud management","endpoint management","disaster recovery governance","compliance infrastructure","SEC FINRA infrastructure","HIPAA infrastructure"],
  alternates: { canonical: "https://centience.ai/infrastructure" },
  openGraph: {
    title: "Managed Infrastructure Governance for Regulated Organizations | Centience",
    description: "Full management or co-management with your existing IT team. Centience implements and manages your infrastructure as the operational foundation your entire governance program runs on.",
    url: "https://centience.ai/infrastructure",
    type: 'website',
    siteName: 'Centience',
    images: [{ url: "https://centience.ai/og-image.png", width: 1200, height: 630, alt: "Managed Infrastructure Governance | Centience" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Managed Infrastructure Governance | Centience",
    description: "Full management or co-management with your existing IT team. Infrastructure implemented and managed as the foundation of your governance program.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <InfrastructurePage />;
}
