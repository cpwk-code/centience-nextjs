import type { Metadata } from "next";
import SmsTermsPage from "@/page-components/SmsTermsPage";

const title = "SMS / Text Messaging Terms | Centience";
const description =
  "Centience SMS program terms: conversational and customer-care messages, message frequency, rates, and how to opt out (reply STOP) or get help (reply HELP).";
const url = "https://centience.ai/sms-terms";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url,
    type: "website",
    siteName: "Centience",
  },
};

export default function Page() {
  return <SmsTermsPage />;
}
