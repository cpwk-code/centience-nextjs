import type { Metadata } from 'next';
import AboutPage from '@/page-components/AboutPage';

export const metadata: Metadata = {
  title: "About Centience — 20 Years Governing Regulated Technology",
  description: "Centience was built on 20+ years of hands-on technology operations inside regulated industries. We implement, integrate, and manage governance programs — working alongside existing teams or taking the lead. Founded by Orville Matias, architect of OfficeSafe and Bridge Compliance.",
  keywords: ["about Centience", "Orville Matias", "technology governance firm", "regulated industries", "AI governance company", "compliance firm", "OfficeSafe", "Bridge Compliance", "CyberGRID"],
  alternates: { canonical: "https://centience.ai/about" },
  openGraph: {
    title: "About Centience — 20 Years Governing Regulated Technology",
    description: "Built on 20+ years of hands-on technology operations inside regulated industries. We implement, integrate, and manage governance programs — working alongside your existing team.",
    url: "https://centience.ai/about",
    type: 'website',
    siteName: 'Centience',
    images: [{ url: "https://centience.ai/og-image.png", width: 1200, height: 630, alt: "About Centience — AI & Technology Governance" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Centience — 20 Years Governing Regulated Technology",
    description: "Built on 20+ years inside regulated industries. We implement and manage governance programs alongside your existing team.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <AboutPage />;
}
