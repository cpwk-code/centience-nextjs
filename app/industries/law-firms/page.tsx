import type { Metadata } from 'next';
import LawFirmsPage from '@/page-components/industries/LawFirmsPage';

export const dynamic = 'force-dynamic';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Technology Governance for Law Firms | Centience",
  description: "Centience helps law firms manage technology risk, client data security, and AI adoption in alignment with bar association requirements and client confidentiality obligations.",
  keywords: ["law firm technology governance","legal technology compliance","law firm cybersecurity","legal AI governance","client data security","bar association compliance"],
  alternates: {
    canonical: "https://centience.ai/industries/law-firms",
  },
  openGraph: {
    title: "Technology Governance for Law Firms | Centience",
    description: "Centience helps law firms manage technology risk, client data security, and AI adoption in alignment with bar association requirements and client confidentiality obligations.",
    url: "https://centience.ai/industries/law-firms",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Technology Governance for Law Firms | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Technology Governance for Law Firms | Centience",
    description: "Centience helps law firms manage technology risk, client data security, and AI adoption in alignment with bar association requirements and client confidentiality obligations.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <LawFirmsPage />;
}
