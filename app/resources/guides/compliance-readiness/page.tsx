import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: "Compliance Readiness Guide for Regulatory Examinations | Centience",
  description: "What regulators are actually looking for in technology governance examinations — specific to SEC, FINRA, or HIPAA.",
  keywords: ["compliance readiness guide", "regulatory examination guide", "SEC examination readiness", "FINRA examination", "HIPAA compliance readiness"],
  alternates: {
    canonical: "https://centience.ai/resources/guides/compliance-readiness",
  },
  openGraph: {
    title: "Compliance Readiness Guide for Regulatory Examinations | Centience",
    description: "What regulators are actually looking for in technology governance examinations — specific to SEC, FINRA, or HIPAA.",
    url: "https://centience.ai/resources/guides/compliance-readiness",
    type: 'website',
    siteName: 'Centience',
    images: [
      {
        url: "https://centience.ai/og-guide-compliance-readiness.png",
        width: 1200,
        height: 630,
        alt: "Compliance Readiness Guide for Regulatory Examinations | Centience",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Compliance Readiness Guide for Regulatory Examinations | Centience",
    description: "What regulators are actually looking for in technology governance examinations — specific to SEC, FINRA, or HIPAA.",
    images: ["https://centience.ai/og-guide-compliance-readiness.png"],
  },
};

export default function Page() {
  redirect('/resources/guides');
}
