"use client";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { motion } from "framer-motion";
import { ArrowRight, Brain, Eye, FileText, AlertTriangle, BarChart3, CheckCircle2, Cpu, Zap } from "lucide-react";

const capabilities = [
  { icon: Eye, title: "AI Usage Discovery", description: "We identify where AI tools and models are being used across your organization — sanctioned and unsanctioned — to establish visibility before governance. This is the foundation everything else is built on." },
  { icon: FileText, title: "AI Policy and Framework Development", description: "We develop AI usage policies, acceptable use guidelines, and governance frameworks tailored to your industry's regulatory requirements. Built on NIST AI RMF, ISO/IEC 42001, and applicable regulatory guidance." },
  { icon: Zap, title: "AI Implementation", description: "We implement approved AI tools inside your governed infrastructure — ensuring every tool deployed is configured, documented, and integrated within your governance framework from day one." },
  { icon: Cpu, title: "AI Integration", description: "We connect AI capabilities to your existing systems, workflows, and data environments. Implementation without integration creates shadow usage and governance gaps. We close both." },
  { icon: AlertTriangle, title: "Day-to-Day AI Management", description: "We manage the ongoing AI governance program operationally — monitoring usage, maintaining policy enforcement, evaluating vendors for emerging risk, tracking regulatory changes, and producing the reporting your leadership and auditors require." },
  { icon: BarChart3, title: "Executive and Board Reporting", description: "Structured AI governance reporting for leadership and boards — translating technical AI risk into business-level oversight metrics your executives can defend to regulators." },
];

const frameworks = [
  "NIST AI Risk Management Framework (AI RMF)",
  "ISO/IEC 42001 — AI Management Systems",
  "EU AI Act compliance readiness",
  "SEC guidance on AI disclosures",
  "Industry-specific AI regulatory requirements",
];

const AIGovernancePage = () => (
  <Layout>
    {/* Hero */}
    <section className="section-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "var(--gradient-gold)" }} />
      <div className="container mx-auto relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">AI Oversight</p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-extrabold leading-[1.1] mb-6">
            AI Governance — <span className="text-gradient-gold">Implementation, Integration & Management</span>
          </h1>
          <p className="text-lg leading-relaxed opacity-70 mb-4 max-w-2xl">
            We don't hand you a framework and walk away. We implement AI tools inside your governed environment, integrate them into your workflows, and manage the day-to-day oversight — so your organization captures the benefit of AI without the regulatory exposure.
          </p>
          <p className="text-lg leading-relaxed opacity-70 mb-10 max-w-2xl">
            AI governance is only enforceable if you know what's being used, by whom, on what infrastructure, and if someone is actively managing it. Centience does all of it — discovery, framework, implementation, integration, and ongoing management.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="cta" size="xl" asChild>
              <Link href="/ai-governance-risk-assessment">Schedule AI Governance Assessment <ArrowRight size={16} /></Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Challenge */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="gold-line" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">The Challenge</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">AI Is Outpacing Governance — And Governance Without Management Is Just Paper</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Organizations are adopting AI tools faster than governance structures can keep up. Employees use AI daily — often without IT knowledge. Vendors embed AI into existing products without disclosure. Regulators are accelerating enforcement timelines.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Most AI governance engagements end with a policy document. Yours won't. Centience builds the framework, implements the tooling, integrates AI into your governed environment, and manages the program operationally — so AI adoption doesn't outpace oversight.
        </p>
      </div>
    </section>

    {/* Capabilities */}
    <section className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Capabilities</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">AI Governance Program — From Discovery Through Daily Operations</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div key={cap.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="card-premium p-8">
              <div className="w-11 h-11 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-5">
                <cap.icon size={20} />
              </div>
              <h3 className="font-display font-bold text-primary text-lg mb-3">{cap.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Frameworks */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-line" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Frameworks</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">Aligned With Leading Standards</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our AI governance programs are built on recognized frameworks and standards — ensuring your governance approach meets current and emerging regulatory expectations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our governance frameworks aren't filing cabinet documents. They're the operational foundation we implement and manage against daily.
            </p>
          </div>
          <div className="card-premium p-8">
            <Brain size={24} className="text-accent mb-5" />
            <h3 className="font-display font-bold text-primary text-lg mb-4">Regulatory Alignment</h3>
            <ul className="space-y-3">
              {frameworks.map((f) => (
                <li key={f} className="text-sm text-muted-foreground flex items-start gap-3">
                  <CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-navy py-20 lg:py-28">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-5">AI Governance That Actually Gets Managed</h2>
        <p className="text-lg opacity-70 mb-10">Most firms leave you with a framework. We implement it, integrate it, and manage it. Start with an AI governance assessment — and leave with a roadmap to a running program.</p>
        <Button variant="cta" size="xl" asChild>
          <Link href="/ai-governance-risk-assessment">Schedule AI Governance Assessment <ArrowRight size={16} /></Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default AIGovernancePage;
