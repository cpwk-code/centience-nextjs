import type { Metadata } from 'next';
import PartnerProgram from '@/page-components/PartnerProgram';

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Partner Program | Centience",
  description: "Join the Centience partner program. Collaborate with a governance-first technology firm to deliver AI governance, cybersecurity, and compliance solutions to regulated organizations.",
  keywords: ["partner program","technology partner","governance partner","channel partner","referral program","consulting partner"],
  alternates: {
    canonical: "https://centience.ai/partners",
  },
  openGraph: {
    title: "Partner Program | Centience",
    description: "Join the Centience partner program. Collaborate with a governance-first technology firm to deliver AI governance, cybersecurity, and compliance solutions to regulated organizations.",
    url: "https://centience.ai/partners",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Partner Program | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Partner Program | Centience",
    description: "Join the Centience partner program. Collaborate with a governance-first technology firm to deliver AI governance, cybersecurity, and compliance solutions to regulated organizations.",
    images: ["https://centience.ai/og-image.png"],
  },
};

export default function Page() {
  return <PartnerProgram />;
}
