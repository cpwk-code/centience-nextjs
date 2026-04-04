'use client'

import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, Brain, Lock, Users, FileText, AlertTriangle } from "lucide-react";

const pressurePoints = [
  { title: "HIPAA Technical Safeguard Requirements", body: "HIPAA requires technical safeguards protecting ePHI — access controls, audit controls, integrity controls, and transmission security. Most organizations have policies describing these controls. Fewer have technically verified that the controls are operating." },
  { title: "AI in Clinical and Operational Settings", body: "Healthcare organizations are deploying AI tools for documentation, coding, patient communication, and clinical support — often without governance frameworks assessing privacy risk, accuracy bias, or regulatory exposure." },
  { title: "Third-Party and Business Associate Risk", body: "Healthcare organizations depend on dozens of technology vendors who touch patient data. Each vendor relationship requires Business Associate Agreements, vendor risk assessments, and ongoing oversight — obligations that most organizations manage inconsistently." },
  { title: "Breach Preparedness and Incident Response", body: "HHS breach notification requirements are specific and time-sensitive. Organizations without documented incident response governance — and technically verified controls — face compounded regulatory exposure when a breach occurs." },
];

const capabilities = [
  { icon: Shield, title: "HIPAA-Aligned Infrastructure Governance", items: ["Managed workstations, servers, and cloud environments with ePHI controls", "Access controls and minimum necessary access enforcement", "Audit logging and access monitoring for ePHI systems", "Encryption governance for data at rest and in transit", "Mobile device management and security controls", "Network segmentation protecting clinical systems"] },
  { icon: Brain, title: "AI Governance for Healthcare", items: ["AI usage discovery across clinical and operational functions", "Privacy risk assessment for AI tools touching patient data", "AI governance framework aligned to HIPAA and emerging AI guidance", "Vendor AI risk evaluation for clinical AI platforms", "Ongoing monitoring of AI tool usage and access controls", "Documentation of AI governance program for auditors"] },
  { icon: Lock, title: "Cybersecurity Governance", items: ["Security monitoring with healthcare threat intelligence", "Ransomware protection and response governance", "Medical device security oversight", "Vulnerability management across clinical and administrative systems", "Phishing and social engineering defense", "NIST Cybersecurity Framework alignment"] },
  { icon: Users, title: "Business Associate and Vendor Risk", items: ["Business Associate Agreement inventory and management", "Vendor security assessments and ongoing monitoring", "Third-party access controls and privileged access management", "Vendor incident notification tracking", "Annual vendor risk review documentation"] },
  { icon: FileText, title: "HIPAA Compliance Documentation", items: ["Risk assessment documentation (required by HIPAA Security Rule)", "Policies and procedures aligned to HIPAA administrative safeguards", "Training documentation and security awareness program", "Audit-ready evidence packages for HHS review", "Breach risk assessment documentation", "Annual HIPAA review and remediation tracking"] },
  { icon: AlertTriangle, title: "Incident Response and Breach Preparedness", items: ["Documented incident response plan with defined roles", "Breach risk assessment framework", "HHS breach notification timeline governance", "Tabletop exercise facilitation and documentation", "Post-incident review and remediation tracking"] },
];

const clientTypes = [
  "Medical Practices and Group Practices", "Behavioral Health Organizations", "Dental Practices",
  "Healthcare Technology Companies", "Medical Billing and Revenue Cycle Organizations",
  "Home Health and Care Management Organizations", "Healthcare Administrative Services Organizations",
];

const HealthcarePage = () => (
  <Layout>
    <section className="section-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "var(--gradient-gold)" }} />
      <div className="container mx-auto relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Healthcare</p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-extrabold leading-[1.1] mb-6">
            HIPAA-Compliant Technology Governance for Healthcare Organizations <span className="text-gradient-gold">Navigating AI Adoption</span>
          </h1>
          <p className="text-lg leading-relaxed opacity-70 mb-10 max-w-2xl">
            Healthcare organizations face a convergence of pressures: HIPAA enforcement is increasing, AI tools are being adopted across clinical and operational functions, and infrastructure complexity is growing. Centience delivers governance programs that manage the technical environment where patient data lives — ensuring compliance is enforced, not just documented.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link href="/ai-governance-risk-assessment">Book Your Healthcare Governance Assessment <ArrowRight size={16} /></Link>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* Challenge */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4"><div className="gold-line" /><p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">The Challenge</p></div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5">Why Healthcare Technology Governance Is More Complex Than Ever</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Healthcare organizations have always operated under strict data governance requirements. HIPAA established the foundational framework — but the environment it must govern has changed dramatically.</p>
          <p className="text-muted-foreground leading-relaxed">AI tools are now used in clinical decision support, revenue cycle management, patient communication, and administrative operations. Remote care has expanded the infrastructure perimeter. Third-party vendor relationships have multiplied. And HHS enforcement actions have made clear that technical safeguards — not policies — are what auditors assess.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {pressurePoints.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="card-premium p-8">
              <h3 className="font-display font-bold text-primary text-lg mb-4">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Capabilities */}
    <section className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4"><div className="gold-line" /><p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Technical Capabilities</p></div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5">What Centience Manages Inside Healthcare Organizations</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div key={cap.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="card-premium p-8">
              <div className="w-11 h-11 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-5"><cap.icon size={20} /></div>
              <h3 className="font-display font-bold text-primary mb-4">{cap.title}</h3>
              <ul className="space-y-2">{cap.items.map((item) => (<li key={item} className="text-sm text-muted-foreground flex items-start gap-2"><CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />{item}</li>))}</ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Who We Serve */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-10">Healthcare Organizations We Serve</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {clientTypes.map((t) => (<div key={t} className="card-premium p-5 flex items-center gap-3"><CheckCircle2 size={18} className="text-accent shrink-0" /><span className="text-primary font-medium">{t}</span></div>))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-navy py-20 lg:py-28">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-5">HHS enforcement actions are increasing. AI adoption is accelerating. Is your HIPAA governance technically enforced?</h2>
        <p className="text-lg opacity-70 mb-8">Our healthcare governance assessment identifies technical safeguard gaps, AI governance exposures, and vendor risk vulnerabilities — and delivers a prioritized roadmap to HIPAA readiness.</p>
        <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm">
          <span className="flex items-center gap-2 opacity-80"><CheckCircle2 size={16} className="text-accent" /> No commitment required</span>
          <span className="flex items-center gap-2 opacity-80"><CheckCircle2 size={16} className="text-accent" /> Results delivered within 5 business days</span>
          <span className="flex items-center gap-2 opacity-80"><CheckCircle2 size={16} className="text-accent" /> 100% audit success rate across all healthcare engagements</span>
        </div>
        <Button variant="cta" size="xl" asChild><Link href="/ai-governance-risk-assessment">Book Your Healthcare Governance Assessment <ArrowRight size={16} /></Link></Button>
      </div>
    </section>
  </Layout>
);

export default HealthcarePage;
