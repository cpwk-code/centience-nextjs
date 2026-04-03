"use client";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Users, Building2, Handshake, CheckCircle2, DollarSign } from "lucide-react";

const partnerTypes = [
  { icon: Shield, title: "vCISOs & Fractional CISOs", body: "You set the security program. We implement and manage it. Your client gets a complete security governance operation. High-value partners who also advise on AI governance are enrolled in both programs simultaneously." },
  { icon: Building2, title: "Cybersecurity & GRC Advisory Firms", body: "You deliver assessments, frameworks, and compliance programs. We deliver the managed implementation and ongoing operations your engagements need to be enforceable. Co-delivery model — you stay in the engagement." },
  { icon: Users, title: "Compliance Consultants & Legal Counsel", body: "Your clients have regulatory obligations that require technical governance controls. Centience implements and manages those controls — and produces the documentation your clients need. You remain their compliance advisor." },
  { icon: Building2, title: "MSPs & Technology Partners", body: "You manage your clients' technology. We provide the AI governance, cybersecurity governance, and compliance layer on top — or integrate into a co-managed model where you handle day-to-day IT and we handle the governance stack." },
  { icon: Shield, title: "Fractional CTOs & Technology Executives", body: "You define the technology direction. Centience implements the governance around it — ensuring your clients' technology decisions are compliant, documented, and audit-ready." },
  { icon: Users, title: "Outside Security Firms", body: "You advise. We operate. Centience serves as the managed implementation arm for firms that set security strategy but need an operational partner to execute and maintain the program daily." },
];

const steps = [
  { num: "01", title: "Introduction", body: "You introduce Centience to a client with a governance gap. We conduct a no-obligation governance assessment. You stay involved throughout." },
  { num: "02", title: "Proposal", body: "We develop a governance program proposal that reflects the client's existing team — including your ongoing role. Designed around co-delivery, not replacement." },
  { num: "03", title: "Engagement", body: "Centience implements and manages the governance program. You retain your advisory and client relationship role. The client gets a complete, integrated program." },
  { num: "04", title: "Ongoing", body: "Referral compensation is paid per program terms. You maintain visibility into the engagement. Your client relationship is protected — in writing." },
];

const tiers = [
  { icon: DollarSign, label: "Tier 1 — Referral Partner", body: "For partners who refer clients and remain in an advisory capacity. One-time referral compensation on executed engagements. Simple, tracked, paid on contract execution." },
  { icon: DollarSign, label: "Tier 2 — Delivery Partner", body: "For partners who co-deliver with Centience. Recurring commission on monthly program revenue for the duration of the engagement, up to 24 months." },
  { icon: Users, label: "Dual-Program Partners", body: "Partners who refer across both cybersecurity governance and AI governance programs are enrolled in both tracks simultaneously and compensated accordingly." },
];

const PartnerProgramPage = () => (
  <Layout>
    {/* Hero */}
    <section className="section-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "var(--gradient-gold)" }} />
      <div className="container mx-auto relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Partner Program</p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-extrabold leading-[1.1] mb-6">
            Built to Work With Partners —{" "}
            <span className="text-gradient-gold">Not Compete With Them</span>
          </h1>
          <p className="text-lg leading-relaxed opacity-70 mb-4 max-w-2xl">
            Centience operates a formal partner program for CISOs, vCISOs, cybersecurity firms, compliance consultants, fractional technology executives, and MSPs who serve regulated industries.
          </p>
          <p className="text-lg leading-relaxed opacity-70 mb-10 max-w-2xl">
            We implement and manage the governance layer. You retain the client relationship. Our model is co-delivery, not displacement.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link href="/contact">Schedule a Partner Call <ArrowRight size={16} /></Link>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* What Centience brings */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="gold-line" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Why Partners Work With Us</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-8 leading-tight">What Centience Brings to the Partnership</h2>
        <div className="space-y-6">
          {[
            ["Implement what you design", "You set the strategy. We execute it. If you're a vCISO, fractional CISO, or outside security firm, Centience is the operational arm that implements your program, manages the infrastructure, and maintains the governance layer — making your work enforceable rather than advisory."],
            ["Fill gaps without replacing your engagement", "Most advisory engagements leave implementation and day-to-day management uncovered. Centience fills that gap without touching your advisory relationship. Your client gets a complete program. You get a delivery partner who makes you look better, not one who competes with you."],
            ["Expand your offering without adding headcount", "Adding managed infrastructure, AI governance, and compliance operations to your practice normally requires hiring or turning away work. With Centience, you can offer your clients a full governance program and co-deliver it — without building the operations capability yourself."],
            ["Referral revenue on a formal structure", "Centience operates a two-tier partner program with defined commission terms. Referrals are tracked, protected, and compensated."],
          ].map(([title, body]) => (
            <div key={title} className="flex items-start gap-4">
              <CheckCircle2 size={18} className="text-accent mt-1 shrink-0" />
              <div>
                <p className="font-display font-bold text-primary mb-1">{title}</p>
                <p className="text-muted-foreground leading-relaxed text-sm">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Partner types */}
    <section className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Who This Is Built For</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">Built for Security & Compliance Professionals</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerTypes.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="card-premium p-8">
              <div className="w-11 h-11 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-5">
                <p.icon size={20} />
              </div>
              <h3 className="font-display font-bold text-primary text-lg mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* How it works */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Process</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">Simple to Start. Structured to Last.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div key={step.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="card-premium p-8">
              <p className="text-4xl font-display font-extrabold text-accent/20 mb-4">{step.num}</p>
              <h3 className="font-display font-bold text-primary text-lg mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Partner tiers */}
    <section className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Program Structure</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">Partner Program Tiers</h2>
          <p className="text-muted-foreground leading-relaxed">Specific commission rates and terms are provided in the Centience Partner Agreement. Contact us to receive the current program documentation.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <motion.div key={tier.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="card-premium p-8">
              <div className="w-11 h-11 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-5">
                <tier.icon size={20} />
              </div>
              <h3 className="font-display font-bold text-primary text-lg mb-3">{tier.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{tier.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Relationship protection */}
    <section className="py-20 bg-background border-y border-border">
      <div className="container mx-auto max-w-3xl text-center">
        <Handshake size={32} className="text-accent mx-auto mb-5" />
        <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4">Your Client. Your Relationship. Protected.</h2>
        <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
          Centience will never use a co-managed engagement to displace the partner who brought us in. We don't sell around you. We don't position against you. Every partner engagement is governed by a written partner agreement that defines scope, protects the referral relationship, and establishes compensation terms before the client engagement begins.
        </p>
      </div>
    </section>

    {/* CTA */}
    <section className="section-navy py-20 lg:py-28">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-5">Let's Talk About Whether This Fits Your Practice</h2>
        <p className="text-lg opacity-70 mb-10">We work best with firms and practitioners already engaged in regulated industries who have clients with real governance gaps. If that's you, the conversation is worth having.</p>
        <Button variant="cta" size="xl" asChild>
          <Link href="/contact">Schedule a Partner Call <ArrowRight size={16} /></Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default PartnerProgramPage;
