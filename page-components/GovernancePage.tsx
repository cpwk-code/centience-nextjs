"use client";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { motion } from "framer-motion";
import { ArrowRight, Shield, Server, Brain, Search, BookOpen, Cog, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Managed Infrastructure",
    href: "/infrastructure",
    description: "What it enables: Operational continuity, resilient systems, and the technical foundation that makes every governance layer above it enforceable. You cannot govern what you do not control.",
    items: [
      "Managed infrastructure platform — computers, networks, cloud, endpoints",
      "Infrastructure monitoring and resilience with defined SLAs",
      "Endpoint and cloud management with governance controls",
      "Disaster recovery governance and business continuity",
    ],
  },
  {
    icon: Shield,
    title: "Cybersecurity Governance",
    href: "/cybersecurity",
    description: "What it enables: Continuous security posture visibility, vendor risk control, and incident readiness — so a security event does not become a regulatory event.",
    items: [
      "Security posture monitoring and gap analysis",
      "Vulnerability management oversight",
      "Vendor and third-party risk evaluation",
      "Incident response governance",
      "Compliance readiness monitoring",
    ],
  },
  {
    icon: Brain,
    title: "AI Governance",
    href: "/ai-governance",
    description: "What it enables: Confident AI adoption with documented oversight — so your organization can deploy, scale, and benefit from AI without creating the governance gaps regulators are now actively examining.",
    items: [
      "AI usage discovery and monitoring across your entire environment",
      "AI governance framework development aligned to SEC, FINRA, and HIPAA",
      "Technology risk oversight",
      "Regulatory readiness for emerging AI frameworks",
      "Board and executive-level AI governance reporting",
    ],
  },
];

const lifecycle = [
  {
    icon: Search,
    number: "01",
    label: "ASSESS",
    title: "Governance Assessment",
    description: "We identify gaps across infrastructure, cybersecurity posture, AI usage, and compliance readiness. Most assessments complete within 5 business days. You receive a prioritized roadmap and a clear picture of where you stand.",
  },
  {
    icon: BookOpen,
    number: "02",
    label: "PLAN",
    title: "Governance Roadmap",
    description: "A structured plan sequenced by risk priority and aligned to your regulatory calendar and technology roadmap. Specific to your organization — not a generic framework.",
  },
  {
    icon: Cog,
    number: "03",
    label: "OPERATE",
    title: "Ongoing Governance Program",
    description: "The roadmap transitions into a continuously managed governance program. Monitoring, evidence collection, AI oversight, and regulatory readiness — maintained as an ongoing function that evolves with your organization.",
  },
];

const GovernancePage = () => (
  <Layout>
    {/* Hero */}
    <section className="section-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "var(--gradient-gold)" }} />
      <div className="container mx-auto relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Services</p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-extrabold leading-[1.1] mb-6">
            GRC Without Technical Enforcement{" "}
            <span className="text-gradient-gold">Is Just Documentation.</span>
          </h1>
          <p className="text-lg leading-relaxed opacity-70 mb-4 max-w-2xl">
            Governance, risk, and compliance programs that exist only in documentation do not protect organizations. They protect the documentation. Centience builds governance programs that are technically enforced across your infrastructure, cybersecurity, and AI environment — and operates them continuously.
          </p>
          <p className="text-lg leading-relaxed opacity-70 mb-10 max-w-2xl">
            Every layer works together. Every control is technically enforced. Every piece of audit evidence is assembled in real time — not reconstructed before an exam.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link href="/ai-governance-risk-assessment">Book Your Governance Assessment <ArrowRight size={16} /></Link>
          </Button>
          <p className="text-sm opacity-50 mt-5">
            Or call us directly:{" "}
            <a href="tel:+18779457177" className="text-gold hover:text-gold/80 transition-colors font-semibold">
              (877) 945-7177
            </a>
          </p>
        </motion.div>
      </div>
    </section>

    {/* Governance Programs */}
    <section className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">The Program</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">Three Integrated Governance Programs. One Accountable Firm.</h2>
          <p className="text-muted-foreground leading-relaxed">Technology governance at Centience is structured as a three-layer stack. Each layer is managed as part of a single ongoing program — not separate engagements delivered by separate vendors.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div key={svc.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <Link href={svc.href} className="card-premium p-8 block group h-full">
                <div className="w-11 h-11 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <svc.icon size={20} />
                </div>
                <h3 className="font-display font-bold text-primary text-lg mb-3">{svc.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 italic">{svc.description}</p>
                <ul className="space-y-2">
                  {svc.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Governance Lifecycle */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">How We Start</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">Assessment → Roadmap → Ongoing Program</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Every engagement follows a structured lifecycle — from initial assessment through to a continuously managed governance program. The assessment is the starting point, not the deliverable.</p>
          <p className="text-muted-foreground leading-relaxed font-medium">This is where most firms stop — at the assessment. This is where Centience starts.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {lifecycle.map((step, i) => (
            <motion.div key={step.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="card-premium p-8">
              <span className="text-3xl font-display font-bold text-accent/15 block mb-3">{step.number}</span>
              <span className="text-[10px] font-bold tracking-[0.3em] text-accent">{step.label}</span>
              <h3 className="font-display font-bold text-primary text-lg mt-2 mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-navy py-20 lg:py-28">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-5">Governance Starts With an Assessment. Enforcement Starts With Centience.</h2>
        <p className="text-lg opacity-70 mb-6">Start with a governance assessment to understand where your organization stands — and build the foundation for a continuously governed operation. Results delivered within 5 business days.</p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm opacity-50 mb-10">
          <span>✓ No commitment required</span>
          <span>✓ Results within 5 business days</span>
          <span>✓ 100% audit success rate</span>
        </div>
        <Button variant="cta" size="xl" asChild>
          <Link href="/ai-governance-risk-assessment">Book Your Governance Assessment <ArrowRight size={16} /></Link>
        </Button>
        <p className="text-sm opacity-50 mt-5">
          Or call us directly:{" "}
          <a href="tel:+18779457177" className="text-gold hover:text-gold/80 transition-colors font-semibold">
            (877) 945-7177
          </a>
        </p>
      </div>
    </section>
  </Layout>
);

export default GovernancePage;
