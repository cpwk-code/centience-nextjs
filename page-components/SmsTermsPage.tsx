"use client";
import Layout from "@/components/Layout";
import Link from "next/link";

const SmsTermsPage = () => {
  const lastUpdated = "July 2026";

  return (
    <Layout>
      {/* Hero */}
      <section className="section-navy pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-4">
            SMS / Text Messaging Terms
          </h1>
          <p className="text-lg opacity-70">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto max-w-4xl space-y-8">
          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Program description</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Centience offers an SMS/text messaging program for clients and prospective clients who provide their mobile number and consent. Messages are conversational and customer-care in nature &mdash; replies to your inquiries, scheduling and appointment coordination, onboarding assistance, and account and service notifications. Centience does not send promotional or marketing text messages under this program.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By providing your mobile phone number and checking the SMS consent box on our forms, you consent to receive text messages from Centience at that number. <strong>Consent is not a condition of purchasing any product or service.</strong>
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Message frequency &amp; cost</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
              <li>Message frequency varies based on your interactions with us.</li>
              <li><strong>Message and data rates may apply.</strong> Your mobile carrier's standard rates apply to all messages you send and receive.</li>
              <li>Centience does not charge for the messages themselves; charges come only from your wireless carrier.</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Opt-out &amp; help</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
              <li>Reply <strong>STOP</strong> to any message at any time to unsubscribe. You will receive a one-time confirmation and no further messages unless you opt back in.</li>
              <li>Reply <strong>HELP</strong> for help, or contact us at{" "}
                <a href="tel:+18779457177" className="text-accent font-semibold hover:underline">(877) 945-7177</a> or{" "}
                <a href="mailto:hello@centience.ai" className="text-accent font-semibold hover:underline">hello@centience.ai</a>.
              </li>
              <li>You may also opt out by contacting us directly using the details above.</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Supported carriers &amp; liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              Carriers are not liable for delayed or undelivered messages. Message delivery is subject to effective transmission from your wireless service provider and is outside of Centience's control. Supported carriers may change without notice.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We respect your privacy. The mobile information and opt-in consent you provide is used solely to deliver the messages described above. <strong>We do not sell, rent, or share your mobile opt-in information or phone number with third parties or affiliates for their marketing or promotional purposes.</strong> For full details, see our{" "}
              <Link href="/privacy-policy" className="text-accent font-semibold hover:underline">Privacy Policy</Link>.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Changes to these terms</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may update these SMS Terms from time to time. Changes are effective when posted, indicated by the "Last Updated" date above.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Questions? Contact us at{" "}
              <a href="mailto:hello@centience.ai" className="text-accent font-semibold hover:underline">hello@centience.ai</a> or{" "}
              <a href="tel:+18779457177" className="text-accent font-semibold hover:underline">(877) 945-7177</a>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SmsTermsPage;
