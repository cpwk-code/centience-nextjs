import type { Metadata } from 'next';
import AboutPage from '@/page-components/AboutPage';

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "About Centience — 20 Years Governing Regulated Technology",
  description: "Centience was built from 20 years of hands-on work inside regulated organizations. We implement, integrate, and manage technology governance programs — working alongside your existing team, not around it.",
  keywords: ["about Centience","Centience mission","technology governance firm","AI governance company","compliance firm","Orville Matias","regulated industries","SEC FINRA HIPAA governance"],
  alternates: { canonical: "https://centience.ai/about" },
  openGraph: {
    title: "About Centience — 20 Years Governing Regulated Technology",
    description: "Built from 20 years inside regulated organizations. Centience implements and manages technology governance programs — working alongside your existing team, not around it.",
    url: "https://centience.ai/about",
    type: 'website',
    siteName: 'Centience',
    images: [{ url: "https://centience.ai/og-image.png", width: 1200, height: 630, alt: "About Centience — AI & Technology Governance" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Centience — 20 Years Governing Regulated Technology",
    description: "Built from 20 years inside regulated organizations. We implement and manage technology governance — working alongside your existing team.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <AboutPage />;
}
