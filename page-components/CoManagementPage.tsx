"use client";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, Shield, Cpu, Building2, CheckCircle2, Handshake } from "lucide-react";

const models = [
  {
    icon: Building2,
    label: "Model 1",
    title: "Governance Layer Over Internal IT",
    you: "An internal IT team managing day-to-day operations.",
    gap: "No structured governance layer — controls aren't documented, evidence isn't collected, and audit readiness depends on scrambling before an exam.",
    how: "We implement the governance program on top of your existing infrastructure. Your internal IT team continues managing day-to-day operations. We own the governance layer — controls documentation, compliance tracking, AI oversight, security posture reporting, and audit-ready evidence collection.",
  },
  {
    icon: Shield,
    label: "Model 2",
    title: "Implementation Arm for Security Leadership",
    you: "A CISO, vCISO, or outside security firm setting strategy and direction.",
    gap: "No operational arm to implement the controls, manage the infrastructure, and maintain day-to-day execution.",
    how: "Your security leader sets the program. We implement it. We manage the infrastructure, deploy the controls, maintain continuous monitoring, and deliver the documentation and evidence your security leader needs to report to leadership and regulators.",
  },
  {
    icon: Handshake,
    label: "Model 3",
    title: "Partner Co-Delivery",
    you: "An outside firm — compliance consultant, fractional CISO, cybersecurity advisory, or technology partner — already engaged with the client.",
    gap: "The engagement needs an implementation and managed operations layer the outside firm doesn't provide.",
    how: "We co-deliver with the referring partner. The partner retains the client relationship and advisory role. Centience handles implementation, managed infrastructure, security governance operations, and AI program management. The client gets a complete program. The partner relationship is protected — always.",
  },
];

const partners = [
  { title: "CISOs & vCISOs", body: "We handle implementation and operational management so your security leader can focus on strategy and oversight." },
  { title: "CTOs & IT Leadership", body: "We implement technical controls that align with your organizational direction and integrate into your existing stack." },
  { title: "Outside Security Firms", body: "We serve as the managed implementation and operations arm for firms that advise but don't operate day-to-day." },
  { title: "Compliance & Legal Counsel", body: "We ensure security posture and documentation maps directly to your regulatory obligations." },
  { title: "MSPs & Technology Partners", body: "We provide the AI governance, cybersecurity governance, and compliance layer on top of your managed environment." },
  { title: "Fractional CTOs", body: "You define the technology direction. Centience implements the governance around it — compliant, documented, and audit-ready." },
];

const CoManagementPage = () => (
  <Layout>
    {/* Hero */}
    <section className="section-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "var(--gradient-gold)" }} />
      <div className="container mx-auto relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">How We Work</p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-extrabold leading-[1.1] mb-6">
            We Work With Your Team —{" "}
            <span className="text-gradient-gold">Not Around It</span>
          </h1>
          <p className="text-lg leading-relaxed opacity-70 mb-4 max-w-2xl">
            Centience is built for co-management. Whether you have an internal IT team, an existing CISO or vCISO, a CTO driving strategy, or an outside firm already engaged — we implement, integrate, and manage the governance layer alongside the people and relationships already in place.
          </p>
          <p className="text-lg leading-relaxed opacity-70 mb-10 max-w-2xl">
            We don't arrive to replace your team. We arrive to make your governance program enforceable.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="cta" size="xl" asChild>
              <Link href="/ai-governance-risk-assessment">Book a Governance Assessment <ArrowRight size={16} /></Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link href="/partners">Partner With Centience <ArrowRight size={16} /></Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* How it works intro */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="gold-line" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Approach</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">Built Around Your Existing Structure</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Every organization arrives with a different team configuration. Some have internal IT but no governance layer. Some have a vCISO who sets strategy but no operational arm to execute. Some have an outside firm engaged on compliance but nothing managing the infrastructure underneath it.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Centience maps your existing team first. Then we identify precisely where governance execution and oversight are missing — and plug in there. Nothing more, nothing displaced.
        </p>
      </div>
    </section>

    {/* Three models */}
    <section className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Engagement Models</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">Three Co-Management Models</h2>
          <p className="text-muted-foreground leading-relaxed">We structure the engagement around your team — not the other way around.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {models.map((model, i) => (
            <motion.div key={model.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="card-premium p-8 flex flex-col">
              <div className="w-11 h-11 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-5">
                <model.icon size={20} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">{model.label}</p>
              <h3 className="font-display font-bold text-primary text-xl mb-6 leading-tight">{model.title}</h3>
              <div className="space-y-4 flex-1">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">You have</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{model.you}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">The gap</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{model.gap}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">How Centience plugs in</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{model.how}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* AI — We Lead */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-line" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">AI Governance</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">AI Governance — We Lead</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              For AI implementation, integration, and governance management, Centience takes the lead. This is deliberate. AI governance in regulated environments requires a single accountable operator who understands both the regulatory requirements and the technical environment.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Fragmented AI governance — where strategy, implementation, and monitoring are split across multiple parties — creates gaps that regulators find. Centience owns the operational governance of AI. That accountability is what makes the program enforceable and defensible.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Your existing team remains involved and informed. We run the program.
            </p>
          </div>
          <div className="card-premium p-8">
            <Cpu size={24} className="text-accent mb-5" />
            <h3 className="font-display font-bold text-primary text-lg mb-5">What AI Leadership Looks Like</h3>
            <ul className="space-y-4">
              {[
                ["Discovery", "We identify all AI usage across the organization — sanctioned and unsanctioned."],
                ["Framework", "We build the governance framework aligned to NIST AI RMF, ISO/IEC 42001, and applicable regulatory requirements."],
                ["Implementation", "We deploy approved AI tools inside your governed infrastructure."],
                ["Integration", "We connect AI capabilities to your existing workflows and systems."],
                ["Day-to-day management", "We run the program operationally — monitoring, enforcement, vendor evaluation, regulatory tracking, and reporting."],
              ].map(([label, desc]) => (
                <li key={label} className="flex items-start gap-3">
                  <CheckCircle2 size={14} className="text-accent mt-1 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-primary">{label}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Who we work with */}
    <section className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Who We Work With</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">We Fit Into Your Team — Whatever That Looks Like</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="card-premium p-6">
              <Users size={18} className="text-accent mb-4" />
              <h3 className="font-display font-bold text-primary text-base mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Partner reference */}
    <section className="py-20 bg-background border-y border-border">
      <div className="container mx-auto max-w-3xl text-center">
        <Handshake size={32} className="text-accent mx-auto mb-5" />
        <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4">Referring a Client? We Protect the Relationship.</h2>
        <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
          Centience is built to work alongside the partners who introduce us. We don't displace existing relationships — we extend them. When a partner refers a client into a co-managed engagement, the partner retains their advisory role and client relationship.
        </p>
        <Button variant="outline" size="lg" asChild>
          <Link href="/partners">Learn About the Partner Program <ArrowRight size={16} /></Link>
        </Button>
      </div>
    </section>

    {/* CTA */}
    <section className="section-navy py-20 lg:py-28">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-5">Let's Map Where Centience Fits In Your Structure</h2>
        <p className="text-lg opacity-70 mb-10">Every co-management engagement starts with a governance assessment — including a mapping of your existing team. We identify the gaps, propose where we plug in, and build a program around your structure.</p>
        <Button variant="cta" size="xl" asChild>
          <Link href="/ai-governance-risk-assessment">Book Your Governance Assessment <ArrowRight size={16} /></Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default CoManagementPage;
