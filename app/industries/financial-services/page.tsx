import type { Metadata } from 'next';
import FinancialServicesPage from '@/page-components/industries/FinancialServicesPage';

export const dynamic = 'force-dynamic';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "AI & Technology Governance for Financial Services | Centience",
  description: "Centience helps banks, investment firms, and financial services organizations build governance programs aligned with SEC, FINRA, and OCC requirements. Manage AI and technology risk.",
  keywords: ["financial services governance","SEC compliance","FINRA compliance","OCC compliance","banking technology governance","investment firm compliance"],
  alternates: {
    canonical: "https://centience.ai/industries/financial-services",
  },
  openGraph: {
    title: "AI & Technology Governance for Financial Services | Centience",
    description: "Centience helps banks, investment firms, and financial services organizations build governance programs aligned with SEC, FINRA, and OCC requirements. Manage AI and technology risk.",
    url: "https://centience.ai/industries/financial-services",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI & Technology Governance for Financial Services | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI & Technology Governance for Financial Services | Centience",
    description: "Centience helps banks, investment firms, and financial services organizations build governance programs aligned with SEC, FINRA, and OCC requirements. Manage AI and technology risk.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <FinancialServicesPage />;
}
