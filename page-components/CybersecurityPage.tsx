import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { motion } from "framer-motion";
import { ArrowRight, Shield, Eye, Lock, FileSearch, Users, CheckCircle2 } from "lucide-react";

const capabilities = [
  { icon: Eye, title: "Security Posture Monitoring", description: "Continuous monitoring of your security posture with regular assessments, gap analysis, and remediation tracking aligned with governance objectives." },
  { icon: FileSearch, title: "Vulnerability Oversight", description: "Structured vulnerability management ensuring identified risks are tracked, prioritized, and resolved within governance-defined timelines." },
  { icon: Users, title: "Vendor Risk Management", description: "Evaluate and monitor third-party vendor security posture, ensuring supply chain risks are identified and managed as part of your governance program." },
  { icon: Lock, title: "Compliance Readiness", description: "Maintain audit-ready documentation and controls mapping for SOC 2, HIPAA, CMMC, and industry-specific regulatory requirements." },
];

const outcomes = [
  "Documented security controls aligned with regulatory frameworks",
  "Regular security posture reports for leadership and board",
  "Vendor risk assessments and ongoing monitoring",
  "Incident response governance and escalation procedures",
  "Audit-ready compliance documentation",
  "Security awareness and training governance",
];

const CybersecurityPage = () => (
  <Layout>
    {/* Hero */}
    <section className="section-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "var(--gradient-gold)" }} />
      <div className="container mx-auto relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Security</p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-extrabold leading-[1.1] mb-6">
            Cybersecurity <span className="text-gradient-gold">Governance</span>
          </h1>
          <p className="text-lg leading-relaxed opacity-70 mb-4 max-w-2xl">
            Cybersecurity governance at Centience is technically enforced — not advisory. Because we operate your infrastructure, we can implement controls, verify enforcement, and collect evidence continuously.
          </p>
          <p className="text-lg leading-relaxed opacity-70 mb-10 max-w-2xl">
            Cybersecurity integrated into the broader governance program — moving beyond point solutions to structured security oversight with continuous monitoring, vendor risk management, and compliance readiness.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link href="/ai-governance-risk-assessment">Schedule Security Assessment <ArrowRight size={16} /></Link>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* Approach */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-line" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Approach</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">Security as a Governance Discipline</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Most organizations treat cybersecurity as a standalone function — a collection of tools and alerts without structured oversight. This approach creates blind spots, inconsistent controls, and audit challenges.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our cybersecurity governance program integrates security into the broader governance framework, ensuring controls are documented, monitored, and reported with the same rigor applied to financial and operational oversight.
            </p>
          </div>
          <div className="card-premium p-8">
            <Shield size={24} className="text-accent mb-5" />
            <h3 className="font-display font-bold text-primary text-lg mb-4">Governance Outcomes</h3>
            <ul className="space-y-3">
              {outcomes.map((outcome) => (
                <li key={outcome} className="text-sm text-muted-foreground flex items-start gap-3">
                  <CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>
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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">Cybersecurity Governance Program</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
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
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-5">Strengthen Your Security Governance</h2>
        <p className="text-lg opacity-70 mb-10">Start with a security assessment to evaluate your current posture and build a governance roadmap for structured cybersecurity oversight.</p>
        <Button variant="cta" size="xl" asChild>
          <Link href="/ai-governance-risk-assessment">Schedule Assessment <ArrowRight size={16} /></Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default CybersecurityPage;
