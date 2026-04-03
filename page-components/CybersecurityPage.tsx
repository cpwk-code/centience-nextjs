"use client";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { motion } from "framer-motion";
import { ArrowRight, Shield, Eye, Lock, FileSearch, Users, CheckCircle2, Building2, Cpu } from "lucide-react";

const capabilities = [
  { icon: Eye, title: "Security Posture Monitoring", description: "Continuous monitoring of your security posture with regular assessments, gap analysis, and remediation tracking. We manage this operationally — not as a quarterly report, but as a daily function." },
  { icon: FileSearch, title: "Vulnerability Oversight", description: "Structured vulnerability management ensuring identified risks are tracked, prioritized, and resolved. We implement the remediation — not just identify the gap." },
  { icon: Users, title: "Vendor Risk Management", description: "We evaluate and monitor your third-party vendors and supply chain continuously — integrating vendor risk into your broader governance posture." },
  { icon: Lock, title: "Compliance Readiness", description: "Audit-ready documentation and controls mapping for SOC 2, HIPAA, CMMC, and regulatory requirements — assembled continuously, not when you get the audit notice." },
  { icon: Shield, title: "Incident Response Governance", description: "Documented incident response procedures, defined escalation paths, and governance oversight — implemented and tested, not written and filed." },
  { icon: Cpu, title: "Security Awareness Governance", description: "Training program governance ensuring your organization's security awareness posture is tracked, documented, and reportable to leadership and regulators." },
];

const teamTypes = [
  { title: "CISOs and vCISOs", description: "We handle implementation and operational management so your security leader can focus on strategy and oversight. Your program gets enforced, not just designed." },
  { title: "CTOs and IT Leadership", description: "We implement technical controls that align with your organizational direction and integrate into your existing stack — no displacement of existing leadership." },
  { title: "Outside Security Firms", description: "We serve as the managed implementation and operations arm for firms that advise but don't operate day-to-day. You stay in the engagement." },
  { title: "Compliance and Legal Counsel", description: "We ensure security posture and documentation maps directly to your regulatory obligations, producing the evidence your counsel needs." },
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
            We implement security controls, integrate them into your environment, and manage your security posture continuously — working alongside your existing security leadership or serving as your primary security governance partner.
          </p>
          <p className="text-lg leading-relaxed opacity-70 mb-10 max-w-2xl">
            We work with your CISO, vCISO, CTO, or outside security firm. We co-manage where you need operational support. We take the lead where you don't have existing security leadership. The outcome is the same: enforced controls, continuous monitoring, and audit-ready documentation.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link href="/ai-governance-risk-assessment">Schedule Security Assessment <ArrowRight size={16} /></Link>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* Work With Your Team */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-line" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Approach</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">We Work With Your Team — Not Around It</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Many of our clients already have a CISO, vCISO, CTO, or outside security firm in place. That's not a conflict — it's exactly where we fit. Centience operates as the implementation and governance layer: executing the controls your security leadership defines, integrating them into your managed infrastructure, and maintaining continuous monitoring and documentation.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Full co-management available. If your organization has partial security coverage and needs operational execution and governance enforcement for the rest — that's exactly where Centience operates.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link href="/co-management">See How Co-Management Works <ArrowRight size={14} /></Link>
            </Button>
          </div>
          <div className="space-y-4">
            {teamTypes.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="card-premium p-6">
                <h3 className="font-display font-bold text-primary text-base mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
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
          <p className="text-muted-foreground leading-relaxed">Implemented, integrated, and managed — not delivered as a policy binder.</p>
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
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-5">Already Have a Security Team? Good. Let's Talk About Where Centience Fits.</h2>
        <p className="text-lg opacity-70 mb-10">We don't replace security leadership. We implement, integrate, and manage the operational layer — making your existing security program enforceable and audit-ready.</p>
        <Button variant="cta" size="xl" asChild>
          <Link href="/ai-governance-risk-assessment">Schedule Security Assessment <ArrowRight size={16} /></Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default CybersecurityPage;
