import type { Metadata } from 'next';
import CoManagementPage from '@/page-components/CoManagementPage';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Co-Management & Team Collaboration | Centience",
  description: "Centience works alongside your existing CISO, vCISO, CTO, and outside security firms. Full management or co-management — we implement and manage the governance layer without displacing your team.",
  keywords: ["co-managed IT", "co-managed cybersecurity", "CISO collaboration", "vCISO partner", "technology co-management", "governance co-management", "managed security partner"],
  alternates: {
    canonical: "https://centience.ai/co-management",
  },
  openGraph: {
    title: "Co-Management & Team Collaboration | Centience",
    description: "We work with your CISO, vCISO, CTO, or outside firm — not around them. Full management or co-management, Centience implements and manages the governance layer alongside your existing team.",
    url: "https://centience.ai/co-management",
    type: 'website',
    siteName: 'Centience',
    images: [{ url: "https://centience.ai/og-image.png", width: 1200, height: 630, alt: "Co-Management & Team Collaboration | Centience" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Co-Management & Team Collaboration | Centience",
    description: "We work with your CISO, vCISO, CTO, or outside firm — not around them. Full management or co-management available.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <CoManagementPage />;
}
