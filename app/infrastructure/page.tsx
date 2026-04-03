import type { Metadata } from 'next';
import InfrastructurePage from '@/page-components/InfrastructurePage';

export const metadata: Metadata = {
  title: "Infrastructure Governance — Managed & Co-Managed | Centience",
  description: "Centience implements and manages your infrastructure — computers, networks, cloud, endpoints, and disaster recovery — as the operational foundation your governance program runs on. Full management or co-management with your existing IT team.",
  keywords: ["managed infrastructure", "co-managed infrastructure", "infrastructure governance", "managed IT", "cloud management", "endpoint management", "disaster recovery governance", "regulated industries IT"],
  alternates: { canonical: "https://centience.ai/infrastructure" },
  openGraph: {
    title: "Infrastructure Governance — Managed & Co-Managed | Centience",
    description: "Centience implements and manages your infrastructure as the operational foundation your governance program runs on. Full management or co-management with your existing IT team.",
    url: "https://centience.ai/infrastructure",
    type: 'website',
    siteName: 'Centience',
    images: [{ url: "https://centience.ai/og-image.png", width: 1200, height: 630, alt: "Infrastructure Governance — Managed & Co-Managed | Centience" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Infrastructure Governance — Managed & Co-Managed | Centience",
    description: "Full management or co-management — Centience implements and manages your infrastructure as the governance foundation.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <InfrastructurePage />;
}
