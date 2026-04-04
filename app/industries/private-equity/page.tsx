import type { Metadata } from 'next';
import PrivateEquityPage from '@/page-components/industries/PrivateEquityPage';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Technology Governance for Private Equity | Centience",
  description: "Centience helps private equity firms and their portfolio companies build technology governance programs that satisfy LP due diligence, SEC requirements, and operational risk standards.",
  keywords: ["private equity governance","PE firm compliance","portfolio company governance","SEC private equity","LP due diligence","investment management technology"],
  alternates: {
    canonical: "https://centience.ai/industries/private-equity",
  },
  openGraph: {
    title: "Technology Governance for Private Equity | Centience",
    description: "Centience helps private equity firms and their portfolio companies build technology governance programs that satisfy LP due diligence, SEC requirements, and operational risk standards.",
    url: "https://centience.ai/industries/private-equity",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Technology Governance for Private Equity | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Technology Governance for Private Equity | Centience",
    description: "Centience helps private equity firms and their portfolio companies build technology governance programs that satisfy LP due diligence, SEC requirements, and operational risk standards.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <PrivateEquityPage />;
}
