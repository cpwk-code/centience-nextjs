import Layout from "@/components/Layout";
import Link from 'next/link';

const PrivacyPolicyPage = () => {
  const lastUpdated = "January 2025";

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
              <li><strong>Automated technologies:</strong> As you navigate our website, we may automatically collect certain information including your IP address, browser type, operating system, and browsing patterns</li>
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
            <h2 className="text-2xl font-bold text-foreground mb-4">Data Protection & Security</h2>
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
            <h2 className="text-2xl font-bold text-foreground mb-4">Information Sharing & Disclosure</h2>
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
            <h2 className="text-2xl font-bold text-foreground mb-4">Cookies & Tracking Technologies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our website may use cookies and similar tracking technologies to enhance your experience. These technologies help us:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Remember your preferences and settings</li>
              <li>Understand how you use our website</li>
              <li>Improve our website and services</li>
              <li>Provide relevant content and recommendations</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              You can control cookies through your browser settings. However, disabling cookies may affect your ability to use certain features of our website.
            </p>
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
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:info@centience.ai" className="text-accent hover:underline">info@centience.ai</a>.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. When determining retention periods, we consider the amount, nature, and sensitivity of the information, the potential risk of harm from unauthorized use or disclosure, and applicable legal requirements.
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
              <a href="mailto:info@centience.ai" className="text-accent hover:underline">info@centience.ai</a>{" "}
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
                <a href="mailto:info@centience.ai" className="text-accent hover:underline">info@centience.ai</a>
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
