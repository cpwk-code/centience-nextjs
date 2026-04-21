"use client";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { motion } from "framer-motion";
import { ArrowRight, Shield, Users, Building2, Cpu, CheckCircle2, Handshake } from "lucide-react";

const partnerTypes = [
  { icon: Shield, title: "vCISOs and Fractional CISOs", description: "You set the security program. We implement and manage it. Your client gets a complete security governance operation. High-value partners who also advise on AI governance are enrolled in both programs simultaneously." },
  { icon: Building2, title: "Cybersecurity and GRC Advisory Firms", description: "You deliver assessments, frameworks, and compliance programs. We deliver the managed implementation and ongoing operations your engagements need to be enforceable. Co-delivery model — you stay in the engagement." },
  { icon: Cpu, title: "Compliance Consultants and Legal Counsel", description: "Your clients have regulatory obligations that require technical governance controls. Centience implements and manages those controls and produces the documentation your clients need. You remain their compliance advisor." },
  { icon: Users, title: "MSPs and Technology Partners", description: "You manage your clients' technology. Your clients need governance. Centience provides the AI governance, cybersecurity governance, and compliance layer — or integrates into a co-managed model where you handle day-to-day IT and we handle the governance stack." },
  { icon: Handshake, title: "Fractional CTOs and Technology Executives", description: "You define the technology direction. Centience implements the governance around it — ensuring your clients' technology decisions are compliant, documented, and audit-ready." },
];

const steps = [
  { num: "01", title: "Introduction", description: "You introduce Centience to a client with a governance gap. We conduct a no-obligation governance assessment. You stay involved throughout." },
  { num: "02", title: "Proposal", description: "We develop a governance program proposal that reflects the client's existing team structure — including your ongoing role. The engagement is designed around co-delivery, not replacement." },
  { num: "03", title: "Engagement", description: "Centience implements and manages the governance program. You retain your advisory and client relationship role. The client gets a complete, integrated program." },
  { num: "04", title: "Ongoing", description: "Referral compensation is paid per program terms. You maintain visibility into the engagement. Your client relationship is protected — in writing." },
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
            Built to Work With Partners — <span className="text-gradient-gold">Not Compete With Them</span>
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

    {/* Why Partners Work With Us */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-line" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Why Partners Choose Us</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">What Centience Brings to the Partnership</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">When you refer a client to Centience, your role doesn't shrink — it gets stronger. We bring the implementation, managed infrastructure, and governance operations your clients need. You bring the strategic relationship and advisory expertise.</p>
          </div>
          <div className="space-y-4">
            {[
              { title: "Implement what you design", body: "You set the strategy. We execute it. Your program becomes enforceable, not just advisory." },
              { title: "Fill gaps without replacing your engagement", body: "Centience fills the implementation and management gap without touching your advisory relationship." },
              { title: "Expand your offering without adding headcount", body: "Offer your clients a full governance program and co-deliver it — without building the operations capability yourself." },
              { title: "Referral revenue on a formal structure", body: "Centience operates a two-tier partner program with defined commission terms. Referrals are tracked, protected, and compensated." },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="card-premium p-6">
                <h3 className="font-display font-bold text-primary text-base mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Partner Types */}
    <section className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Who This Is Built For</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">Partner Types</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerTypes.map((partner, i) => (
            <motion.div key={partner.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="card-premium p-8">
              <div className="w-11 h-11 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-5">
                <partner.icon size={20} />
              </div>
              <h3 className="font-display font-bold text-primary text-lg mb-3">{partner.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{partner.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
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
              <p className="text-3xl font-display font-bold text-accent/30 mb-4">{step.num}</p>
              <h3 className="font-display font-bold text-primary text-lg mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Tiers */}
    <section className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Program Structure</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">Partner Program Tiers</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { tier: "Tier 1", title: "Referral Partner", description: "For partners who refer clients and remain in an advisory capacity. One-time referral compensation on executed engagements. Simple, tracked, paid on contract execution." },
            { tier: "Tier 2", title: "Delivery Partner", description: "For partners who co-deliver with Centience. Recurring commission on monthly program revenue for the duration of the engagement, up to 24 months." },
            { tier: "Dual", title: "Dual-Program Partners", description: "Partners who refer clients across both cybersecurity governance and AI governance programs are enrolled in both tracks simultaneously and compensated accordingly." },
          ].map((item, i) => (
            <motion.div key={item.tier} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="card-premium p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-3">{item.tier}</p>
              <h3 className="font-display font-bold text-primary text-xl mb-4">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-8 max-w-2xl">Specific commission rates and terms are provided in the Centience Partner Agreement. Contact us to receive current program documentation.</p>
      </div>
    </section>

    {/* Commitment */}
    <section className="py-20 lg:py-24 bg-background border-t border-border">
      <div className="container mx-auto max-w-3xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="gold-line" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Our Commitment</p>
        </div>
        <h2 className="text-3xl font-display font-bold text-primary mb-5">Your Client. Your Relationship. Protected.</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          This is the commitment Centience makes to every partner: we will never use a co-managed engagement to displace the partner who brought us in. We don't sell around you. We don't position against you. We don't expand our scope into your advisory role.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Every partner engagement is governed by a written partner agreement that defines scope, protects the referral relationship, and establishes compensation terms before the client engagement begins.
        </p>
      </div>
    </section>

    {/* CTA */}
    <section className="section-navy py-20 lg:py-28">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-5">Let's Talk About Whether This Fits Your Practice</h2>
        <p className="text-lg opacity-70 mb-10">We work best with firms and practitioners already engaged in regulated industries who have clients with real governance gaps.</p>
        <Button variant="cta" size="xl" asChild>
          <Link href="/contact">Schedule a Partner Call <ArrowRight size={16} /></Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default PartnerProgramPage;
