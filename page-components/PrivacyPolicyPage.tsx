"use client";
import Layout from "@/components/Layout";
import Link from 'next/link';

const PrivacyPolicyPage = () => {
  const lastUpdated = "July 2026";

  return (
    <Layout>
      {/* Hero */}
      <section className="section-navy pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg opacity-70">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto max-w-4xl space-y-8">

          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Centience ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in any way. By using our services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">What Information Do We Collect?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you interact with us, we may collect the following types of personal information:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Your name and job title</li>
              <li>Business name and industry</li>
              <li>Business address</li>
              <li>Email address(es)</li>
              <li>Telephone number(s)</li>
              <li>Information about your IT infrastructure and technology needs</li>
              <li>Communication preferences</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">How Do We Collect Information?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may collect information about you in the following ways:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li><strong>Direct interactions:</strong> When you contact us regarding our services, request a consultation, complete a risk assessment, or submit a form on our website</li>
              <li><strong>Automated technologies:</strong> As you navigate our website, we collect limited, anonymous usage measurement (such as pages viewed, referring source, approximate region, and device type) using privacy-first, cookieless analytics that do not identify you. Detailed, cookie-based analytics and session insights are collected only after you provide explicit consent through our consent banner (see Analytics &amp; Consent below)</li>
              <li><strong>Third parties:</strong> We may receive information about you from business partners, marketing partners, or other third parties, but only if you have given them permission to share your information</li>
              <li><strong>Referrals:</strong> When someone refers your business to us through our referral program</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">How Do We Use Your Information?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>To provide and maintain our IT services</li>
              <li>To respond to your inquiries and fulfill your requests</li>
              <li>To send you relevant information about our services</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations and regulatory requirements</li>
              <li>To protect our rights and prevent fraud</li>
              <li>To send periodic emails regarding your services or other products and services</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Analytics &amp; Consent</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We use analytics on a tiered, consent-aware basis. <strong>Anonymous, cookieless measurement runs by default</strong> — it sets no cookies, stores nothing on your device, and does not identify you. <strong>Cookie-based analytics and session insights are collected only after you explicitly consent</strong> by clicking "Accept" in the banner displayed on your first visit. The three tiers are described below.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-3">Vercel Web Analytics (no consent required — cookieless)</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">
              Operated by Vercel Inc., our hosting provider. This runs on every page regardless of your consent choice because it is privacy-preserving by design:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
              <li>Aggregate page views, referring source, and top pages</li>
              <li>Approximate location (country/region level) and device/browser type</li>
              <li><strong>No cookies, no persistent identifiers, and no personal data</strong> — visits are counted using a rotating, non-identifying hash that cannot be traced back to you</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
              Because it stores nothing on your device and collects no personal information, this measurement does not require consent under applicable law. Data is processed by Vercel in accordance with Vercel's Privacy Policy.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-3">Google Analytics (GA4) — Consent Mode v2</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">
              Operated by Google LLC. Google Analytics loads on our pages but operates under Google Consent Mode v2 with all consent signals defaulted to <em>denied</em>. This means:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-2">
              <li><strong>Before you consent:</strong> GA sends only cookieless pings — no analytics or advertising cookies are set, no persistent identifiers are used, and advertising data is redacted. These pings support aggregate, modeled traffic measurement only.</li>
              <li><strong>After you click "Accept":</strong> GA additionally collects the following via cookies:</li>
            </ul>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
              <li>Pages visited and time spent on each page</li>
              <li>Referring website or search query</li>
              <li>Device type, browser, and operating system</li>
              <li>Anonymized IP address (IP anonymization is enabled)</li>
              <li>General geographic location (country/region level)</li>
            </ul>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
              <li>Pages visited and time spent on each page</li>
              <li>Referring website or search query</li>
              <li>Device type, browser, and operating system</li>
              <li>Anonymized IP address (IP anonymization is enabled)</li>
              <li>General geographic location (country/region level)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
              Data is processed by Google in accordance with Google's Privacy Policy. Google Analytics data is used solely for internal reporting on site performance. We do not use GA for advertising, remarketing, or cross-site tracking.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-3">Microsoft Clarity</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">
              Operated by Microsoft Corporation. When you consent, Microsoft Clarity collects:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
              <li>Anonymized session recordings (mouse movements, clicks, scroll depth)</li>
              <li>Heatmap data aggregated across sessions</li>
              <li>Page interaction patterns</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
              Clarity does not capture passwords, payment information, or other sensitive form fields. Data is processed by Microsoft in accordance with Microsoft's Privacy Statement.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-3">How Consent Works</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">
              On your first visit to centience.ai, a consent banner appears at the bottom of the screen. Your choice is stored in your browser's local storage under the key <code className="bg-muted px-1 py-0.5 rounded text-xs">centience_consent</code>. If you:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mb-4">
              <li><strong>Accept:</strong> Google Analytics upgrades from cookieless pings to full cookie-based analytics, and Microsoft Clarity loads and begins collecting session insights as described above. Your choice is remembered for future visits.</li>
              <li><strong>Decline:</strong> Microsoft Clarity does not load, and Google Analytics remains in cookieless mode — no analytics cookies are set and no session recording occurs. Cookieless, non-identifying measurement (Vercel Web Analytics, and GA's denied-state pings) continues, as it collects no personal data. Your choice is remembered for future visits.</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mb-3">Withdrawing Consent</h3>
            <p className="text-muted-foreground leading-relaxed">
              You may withdraw consent at any time by clearing your browser's local storage for centience.ai (in your browser settings under "Site Data" or "Cookies and Site Storage") or by using your browser's developer tools to remove the <code className="bg-muted px-1 py-0.5 rounded text-xs">centience_consent</code> key. The consent banner will reappear on your next visit, allowing you to make a new selection. You may also email us at{" "}
              <a href="mailto:hello@centience.ai" className="text-accent hover:underline">hello@centience.ai</a>{" "}
              to request deletion of any analytics data associated with your sessions.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Cookies &amp; Tracking Technologies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our website uses the following categories of technologies:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
              <li>
                <strong>Strictly necessary:</strong> Browser local storage is used to remember your analytics consent choice. No personal data is collected. This cannot be disabled as it is required for the consent mechanism to function.
              </li>
              <li>
                <strong>Cookieless analytics (no consent required):</strong> Vercel Web Analytics, and Google Analytics operating in cookieless Consent Mode, set no cookies and store nothing on your device. See the Analytics &amp; Consent section above.
              </li>
              <li>
                <strong>Cookie-based analytics (consent required):</strong> Google Analytics cookies and Microsoft Clarity session insights are activated only after you click "Accept" in the consent banner.
              </li>
              <li>
                <strong>Security / bot protection:</strong> hCaptcha is used on our contact and assessment forms to prevent automated abuse. hCaptcha may set cookies and process your IP address for this purpose. See hCaptcha's Privacy Policy for details.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              You can also control cookies and site storage through your browser settings. Note that blocking all storage may affect the consent preference functionality.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Data Protection &amp; Security</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As a cybersecurity-focused company serving regulated industries, we take data protection seriously. We implement appropriate technical and organizational measures to protect your personal information, including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Access controls and authentication measures</li>
              <li>Regular security assessments and audits</li>
              <li>Employee training on data protection best practices</li>
              <li>Incident response procedures</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Confidentiality</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We are committed to maintaining the confidentiality of your information. Please note:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>We will not be responsible for the privacy of data collected by websites not owned or managed by Centience, including those linked through our website</li>
              <li><strong>No mobile information will be shared with third parties or affiliates for marketing or promotional purposes</strong></li>
              <li>All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">SMS / Text Messaging</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you provide your mobile number and opt in on one of our forms, you consent to receive conversational and customer-care text messages from Centience (such as replies, scheduling, onboarding, and account notifications). Consent is not a condition of purchase. Message frequency varies and message and data rates may apply. Reply <strong>STOP</strong> to opt out at any time or <strong>HELP</strong> for assistance.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Your mobile opt-in information and phone number are used only to deliver these messages. <strong>We do not sell, rent, or share your mobile opt-in information or phone number with third parties or affiliates for their marketing or promotional purposes.</strong> For full program details, see our{" "}
              <a href="/sms-terms" className="text-accent font-semibold hover:underline">SMS Terms</a>.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Information Sharing &amp; Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li><strong>Service providers:</strong> With trusted third parties who assist us in operating our business, provided they agree to keep your information confidential</li>
              <li><strong>Legal requirements:</strong> When required by law, regulation, or legal process</li>
              <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>Protection of rights:</strong> To protect the safety and security of our users, our services, or the public</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li><strong>Access:</strong> The right to request a copy of your personal information</li>
              <li><strong>Correction:</strong> The right to request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> The right to request deletion of your personal information</li>
              <li><strong>Opt-out:</strong> The right to opt out of marketing communications</li>
              <li><strong>Data portability:</strong> The right to receive your data in a portable format</li>
              <li><strong>Withdraw analytics consent:</strong> The right to withdraw consent for analytics tracking at any time (see Analytics &amp; Consent above)</li>
            </ul>

            <div className="mt-6 p-5 bg-muted/50 rounded-lg border border-border">
              <h3 className="text-base font-semibold text-foreground mb-2">California Residents — CCPA / CIPA</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA) and California Penal Code § 638.51 (the California Invasion of Privacy Act, as amended by SB 362).
              </p>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-2 ml-2">
                <li><strong>Right to Know:</strong> You may request disclosure of the categories and specific pieces of personal information we have collected about you, the categories of sources, our business purpose for collecting it, and the categories of third parties with whom we share it.</li>
                <li><strong>Right to Delete:</strong> You may request deletion of personal information we have collected, subject to certain exceptions.</li>
                <li><strong>Right to Opt Out of Sale:</strong> We do not sell personal information. No opt-out is required, but you may submit a request to confirm this.</li>
                <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising any CCPA right.</li>
                <li><strong>Pen Register / Tracking:</strong> We do not set cookies, use persistent identifiers, or record your session without your prior affirmative consent. Before you consent, only cookieless, non-identifying aggregate measurement occurs (Vercel Web Analytics and Google Analytics in denied-state Consent Mode); this collects no personal information and does not associate activity with you or your device. Cookie-based analytics and session-recording tools (Google Analytics cookies and Microsoft Clarity) are initialized only after you click "Accept" in our consent banner. You may withdraw consent at any time as described in the Analytics &amp; Consent section.</li>
              </ul>
              <p className="text-muted-foreground text-sm mt-3">
                To exercise any California privacy right, contact us at{" "}
                <a href="mailto:hello@centience.ai" className="text-accent hover:underline">hello@centience.ai</a>{" "}
                with the subject line "California Privacy Request." We will respond within 45 days as required by law.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed mt-4">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:hello@centience.ai" className="text-accent hover:underline">hello@centience.ai</a>.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. When determining retention periods, we consider the amount, nature, and sensitivity of the information, the potential risk of harm from unauthorized use or disclosure, and applicable legal requirements. Analytics data collected via Google Analytics and Microsoft Clarity is subject to the data retention settings of those platforms; we configure both services with the minimum available retention period. Cookieless aggregate measurement (Vercel Web Analytics) is not tied to any individual and is retained only in aggregate form.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately so we can take appropriate action.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Making a Complaint</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you are not satisfied with how we handle your personal information or have concerns about our privacy practices, please contact us at{" "}
              <a href="mailto:hello@centience.ai" className="text-accent hover:underline">hello@centience.ai</a>{" "}
              with the details explaining your concerns.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We will review your complaint, investigate if the right procedures have been followed, and respond back to you as appropriate. <strong>We aim to complete this investigation within 15 working days of receiving your complaint</strong>; however, in some cases it may take longer. If you are still unsatisfied with the response, you may escalate your complaint to the appropriate data protection authority in your jurisdiction.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website with a new "Last Updated" date. We encourage you to review this policy periodically to stay informed about how we protect your information.
            </p>
          </div>

          <div className="bg-accent/5 border border-accent/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p><strong>Email:</strong>{" "}
                <a href="mailto:hello@centience.ai" className="text-accent hover:underline">hello@centience.ai</a>
              </p>
              <p><strong>Phone:</strong>{" "}
                <a href="tel:+18779457177" className="text-accent hover:underline">(877) 945-7177</a>
              </p>
              <p><strong>Website:</strong>{" "}
                <Link href="/contact" className="text-accent hover:underline">Contact Page</Link>
              </p>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicyPage;
