import type { Metadata } from 'next';
import CybersecurityPage from '@/page-components/CybersecurityPage';

export const metadata: Metadata = {
  title: "Cybersecurity Governance for Regulated Industries | Centience",
  description: "Centience implements security controls, integrates them into your environment, and manages your cybersecurity posture continuously. We work alongside your CISO, vCISO, CTO, or outside security firm. Co-management available.",
  keywords: ["cybersecurity governance", "co-managed cybersecurity", "CISO collaboration", "vCISO implementation partner", "security governance", "regulated industries", "cybersecurity compliance", "SEC FINRA HIPAA security"],
  alternates: { canonical: "https://centience.ai/cybersecurity" },
  openGraph: {
    title: "Cybersecurity Governance for Regulated Industries | Centience",
    description: "We implement security controls, integrate them into your environment, and manage your cybersecurity posture continuously — working alongside your CISO, vCISO, CTO, or outside security firm.",
    url: "https://centience.ai/cybersecurity",
    type: 'website',
    siteName: 'Centience',
    images: [{ url: "https://centience.ai/og-image.png", width: 1200, height: 630, alt: "Cybersecurity Governance for Regulated Industries | Centience" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cybersecurity Governance for Regulated Industries | Centience",
    description: "We implement, integrate, and manage cybersecurity governance — working alongside your existing security leadership. Co-management available.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <CybersecurityPage />;
}
