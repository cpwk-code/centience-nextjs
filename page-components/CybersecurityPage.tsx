"use client";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { motion } from "framer-motion";
import { ArrowRight, Shield, Eye, Lock, FileSearch, Users, CheckCircle2, Cpu, AlertTriangle } from "lucide-react";

const capabilities = [
  { icon: Eye, title: "Security Posture Monitoring", description: "Continuous monitoring of your security posture with regular assessments, gap analysis, and remediation tracking aligned with governance objectives — not point-in-time snapshots." },
  { icon: FileSearch, title: "Vulnerability Oversight", description: "Structured vulnerability management ensuring identified risks are tracked, prioritized, and resolved within governance-defined timelines. No alerts closed without investigation." },
  { icon: Users, title: "Vendor Risk Management", description: "Evaluate and monitor third-party vendor security posture — including AI vendors — ensuring supply chain risks are identified, assessed, and managed as part of your ongoing governance program." },
  { icon: AlertTriangle, title: "Incident Response Governance", description: "Documented incident response plan with defined roles, escalation procedures, and regulatory notification timelines — in place before an incident occurs, not assembled in response to one." },
  { icon: Lock, title: "Compliance Readiness", description: "Audit-ready documentation and controls mapping for SOC 2, HIPAA, NIST CSF, and industry-specific regulatory requirements — maintained continuously, not prepared on demand." },
  { icon: Cpu, title: "Governance Reporting", description: "Documented security controls aligned with regulatory frameworks. Regular security posture reports for leadership and board. The evidence your regulators will ask for — assembled before they arrive." },
];

const operationalAdvantages = [
  "Continuous security posture visibility — no blind spots between annual assessments",
  "Vendor risk under active management — not just documented at onboarding",
  "Incident response governance in place before an incident occurs",
  "Regulatory compliance documentation assembled continuously — not prepared in response to an exam notice",
  "Board and leadership reporting that translates security posture into business-level governance metrics",
  "A security program that scales as your organization adds vendors, staff, and technology",
];

const CybersecurityPage = () => (
  <Layout>
    {/* Hero */}
    {/* Related Industries — Internal Linking */}
    <section className="py-16 bg-muted/50 border-t border-border">
      <div className="container mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-xl font-display font-bold text-primary mb-2">Industries We Serve</h2>
          <p className="text-sm text-muted-foreground mb-8">Centience delivers continuous governance programs for regulated organizations across multiple industries.</p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <a href="/industries/financial-services" className="card-premium p-5 block hover:border-accent/50 transition-colors group">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight size={14} className="text-accent group-hover:translate-x-1 transition-transform" />
                <span className="font-semibold text-primary text-sm">Financial Services</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">SEC Reg S-P and FINRA cybersecurity examination readiness.</p>
            </a>
            <a href="/industries/healthcare" className="card-premium p-5 block hover:border-accent/50 transition-colors group">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight size={14} className="text-accent group-hover:translate-x-1 transition-transform" />
                <span className="font-semibold text-primary text-sm">Healthcare</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">HIPAA Security Rule and OCR audit readiness.</p>
            </a>
            <a href="/industries/private-equity" className="card-premium p-5 block hover:border-accent/50 transition-colors group">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight size={14} className="text-accent group-hover:translate-x-1 transition-transform" />
                <span className="font-semibold text-primary text-sm">Private Equity</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">Portfolio-level cybersecurity governance through exit.</p>
            </a>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Related Programs:</span>
              <a href="/ai-governance" className="text-accent hover:text-accent/80 transition-colors text-sm font-medium flex items-center gap-1">
                <ArrowRight size={12} /> AI Governance Program
              </a>
              <a href="/governance" className="text-accent hover:text-accent/80 transition-colors text-sm font-medium flex items-center gap-1">
                <ArrowRight size={12} /> Technology Governance Programs
              </a>
              <a href="/infrastructure" className="text-accent hover:text-accent/80 transition-colors text-sm font-medium flex items-center gap-1">
                <ArrowRight size={12} /> Infrastructure Governance
              </a>
          </div>
        </div>
      </div>
    </section>

    <section className="section-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "var(--gradient-gold)" }} />
      <div className="container mx-auto relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Security</p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-extrabold leading-[1.1] mb-6">
            Cybersecurity Governance That{" "}
            <span className="text-gradient-gold">Holds Up Under Examination.</span>
          </h1>
          <p className="text-lg leading-relaxed opacity-70 mb-4 max-w-2xl">
            A cybersecurity incident is a governance failure before it is a technical one. Organizations that govern their cybersecurity environment continuously — not just before an audit — are the ones that recover faster, satisfy regulators more completely, and avoid the reputational damage that follows a disclosed breach.
          </p>
          <p className="text-lg leading-relaxed opacity-70 mb-10 max-w-2xl">
            Centience delivers cybersecurity governance that is technically enforced at the infrastructure level — not documented in a policy binder and reviewed annually.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link href="/ai-governance-risk-assessment">Book Your Security Assessment <ArrowRight size={16} /></Link>
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

    {/* Operational Value */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-line" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">What It Enables</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">
              Security Governance That Keeps Your Organization Running — And Defensible.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cybersecurity governance is not a collection of tools. It is a continuous operational discipline that requires oversight, documentation, and enforcement at the infrastructure level. When Centience manages your cybersecurity governance, the evidence is already assembled when regulators arrive.
            </p>
          </div>
          <div className="card-premium p-8">
            <ul className="space-y-4">
              {operationalAdvantages.map((adv) => (
                <li key={adv} className="text-sm text-muted-foreground flex items-start gap-3">
                  <CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />
                  {adv}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Regulatory Context */}
    <section className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto max-w-3xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="gold-line" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">What Regulators Expect</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">
          Cybersecurity Is Now a Board-Level Governance Obligation.
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The SEC's FY2026 examination priorities identify cybersecurity governance, identity theft prevention controls, vendor oversight, and incident response preparedness as primary examination areas. FINRA's 2026 report flags cybersecurity and cyber fraud as central examination focus areas — including AI-enabled threats that most firms have not yet addressed at the governance level.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Compliance documentation alone is not a security strategy. Regulators expect technically enforced controls — and evidence that those controls are operating.
        </p>
      </div>
    </section>

    {/* Capabilities */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">The Cybersecurity Governance Program</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">What Centience Delivers</h2>
          <p className="text-muted-foreground leading-relaxed">Technically enforced at the infrastructure level — not delivered as a policy binder.</p>
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

    {/* CTA */}
    <section className="section-navy py-20 lg:py-28">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-5">Cybersecurity Governance That Holds Up Under Examination.</h2>
        <p className="text-lg opacity-70 mb-6">Start with a security assessment to evaluate your current posture and build a governance roadmap for structured, continuously enforced cybersecurity oversight.</p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm opacity-50 mb-10">
          <span>✓ No commitment required</span>
          <span>✓ Results within 5 business days</span>
          <span>✓ 100% audit success rate</span>
        </div>
        <Button variant="cta" size="xl" asChild>
          <Link href="/ai-governance-risk-assessment">Book Your Security Assessment <ArrowRight size={16} /></Link>
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

export default CybersecurityPage;
