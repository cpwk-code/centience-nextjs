import type { Metadata } from 'next';
import LawFirmsPage from '@/page-components/industries/LawFirmsPage';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Legal AI Governance & Technology Governance for Law Firms | Centience",
  description: "Centience delivers technology governance for law firms deploying AI in legal research, drafting, and document review — protecting client confidentiality, managing privilege risk, and meeting ABA and state bar professional responsibility requirements. Technically enforced. Continuously managed.",
  keywords: ["legal AI governance","law firm AI governance","ABA technology governance","attorney client confidentiality governance","legal cybersecurity governance","law firm data security","state bar technology requirements","legal technology governance","law firm AI compliance","privilege risk AI"],
  alternates: {
    canonical: "https://centience.ai/industries/law-firms",
  },
  openGraph: {
    title: "Legal AI Governance & Technology Governance for Law Firms | Centience",
    description: "Centience governs AI adoption in legal practice — protecting client confidentiality, managing privilege risk, and meeting ABA and state bar professional responsibility requirements. Technically enforced governance for law firms deploying AI.",
    url: "https://centience.ai/industries/law-firms",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Legal AI Governance & Technology Governance for Law Firms | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Legal AI Governance for Law Firms | Centience",
    description: "AI governance for legal practice. Client confidentiality protected. Privilege risk managed. ABA and state bar professional responsibility alignment.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <LawFirmsPage />;
}
