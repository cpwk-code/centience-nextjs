"use client";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, Brain, Lock, Cloud, FileText, Server } from "lucide-react";

const pressurePoints = [
  { title: "Client Financial Data Security", body: "CPA firms process and store tax returns, financial statements, and business records containing some of the most sensitive financial information their clients hold. This data is a high-value target — and a professional liability if compromised." },
  { title: "AI in Tax and Audit Practice", body: "AI tools are being used for tax research, document analysis, audit sampling, and financial modeling. Without governance frameworks, firms face professional liability, client confidentiality risk, and potential independence issues in attest engagements." },
  { title: "AICPA and State Board Obligations", body: "AICPA standards require firms to maintain the confidentiality of client information and implement appropriate security measures. State boards are increasingly addressing technology governance and cybersecurity in their oversight of licensed practitioners." },
  { title: "Third-Party and Cloud Platform Risk", body: "Most accounting firms depend on cloud-based platforms for tax, audit, and practice management. Each platform represents a vendor risk requiring governance — data access controls, security assessments, and contractual protections." },
];

const capabilities = [
  { icon: Shield, title: "Client Data Governance", items: ["Client file access controls by engagement and staff role", "Data segregation between client environments", "Secure file sharing and client portal governance", "Data retention and destruction governance", "Tax return and financial data encryption controls", "Document management security governance"] },
  { icon: Brain, title: "AI Governance for Accounting Practice", items: ["AI usage discovery across tax, audit, and advisory functions", "Professional liability risk assessment for AI tools in client engagements", "Independence risk evaluation for AI tools in attest engagements", "AI governance policy development aligned to AICPA guidance", "Vendor AI risk evaluation for accounting technology platforms", "Ongoing AI usage monitoring and documentation"] },
  { icon: Lock, title: "Cybersecurity Governance", items: ["Security monitoring with accounting sector threat intelligence", "Email security and phishing defense", "Ransomware protection and response governance", "Endpoint detection and response for staff and remote users", "Multi-factor authentication enforcement", "Vulnerability management across all systems"] },
  { icon: Cloud, title: "Cloud Platform and Vendor Governance", items: ["Security assessment for tax and audit software platforms", "Cloud access governance and monitoring", "Vendor contract review for data protection provisions", "Third-party data processing governance", "Annual vendor risk review and documentation", "Business Continuity planning for critical platform dependencies"] },
  { icon: FileText, title: "Compliance Documentation", items: ["Written Information Security Policy aligned to AICPA standards", "FTC Safeguards Rule compliance for firms subject to Gramm-Leach-Bliley", "State board technology compliance documentation", "Annual security review and evidence documentation", "Staff security awareness training documentation", "Audit-ready evidence package assembly"] },
  { icon: Server, title: "Infrastructure Governance", items: ["Managed workstations and servers for accounting environments", "Remote access security for staff working with client data", "Backup and disaster recovery governance", "Seasonal capacity planning for tax season infrastructure", "24/7 infrastructure monitoring and response", "Network security and segmentation"] },
];

const clientTypes = ["CPA Firms — All Sizes", "Tax Advisory Practices", "Accounting and Bookkeeping Firms", "Forensic Accounting Practices", "Valuation and Financial Advisory Firms", "Outsourced CFO Practices"];

const AccountingCpaPage = () => (
  <Layout>
    {/* Related Services — Internal Linking */}
    <section className="py-16 bg-muted/50 border-t border-border">
      <div className="container mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-xl font-display font-bold text-primary mb-2">Related Governance Programs</h2>
          <p className="text-sm text-muted-foreground mb-8">Centience delivers continuous governance across three interconnected programs — each reinforcing the others.</p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <a href="/ai-governance" className="card-premium p-5 block hover:border-accent/50 transition-colors group">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight size={14} className="text-accent group-hover:translate-x-1 transition-transform" />
                <span className="font-semibold text-primary text-sm">AI Governance Program</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">Governance for AI tools used in tax preparation, audit, and advisory practice.</p>
            </a>
            <a href="/cybersecurity" className="card-premium p-5 block hover:border-accent/50 transition-colors group">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight size={14} className="text-accent group-hover:translate-x-1 transition-transform" />
                <span className="font-semibold text-primary text-sm">Cybersecurity Governance</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">FTC Safeguards Rule and Gramm-Leach-Bliley compliance — continuously enforced.</p>
            </a>
            <a href="/governance" className="card-premium p-5 block hover:border-accent/50 transition-colors group">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight size={14} className="text-accent group-hover:translate-x-1 transition-transform" />
                <span className="font-semibold text-primary text-sm">Technology Governance Programs</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">Continuous governance programs for accounting and professional services firms.</p>
            </a>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Other Industries:</span>
              <a href="/industries/law-firms" className="text-accent hover:text-accent/80 transition-colors text-sm font-medium flex items-center gap-1">
                <ArrowRight size={12} /> Law Firms
              </a>
              <a href="/industries/non-profit" className="text-accent hover:text-accent/80 transition-colors text-sm font-medium flex items-center gap-1">
                <ArrowRight size={12} /> Non-Profit Organizations
              </a>
          </div>
        </div>
      </div>
    </section>

    <section className="section-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "var(--gradient-gold)" }} />
      <div className="container mx-auto relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6"><div className="gold-line" /><p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Accounting & CPA Firms</p></div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-extrabold leading-[1.1] mb-6">
            Adopt AI in Tax, Audit, and Advisory Practice —{" "}
            <span className="text-gradient-gold">With Governance That Protects Your Clients and Your License.</span>
          </h1>
          <p className="text-lg leading-relaxed opacity-70 mb-4 max-w-2xl">
            AI tools are transforming how accounting and CPA firms work — from tax research and
            document analysis to audit sampling and financial modeling. The firms deploying AI
            effectively are gaining productivity advantages that are increasingly difficult to compete
            against. The firms doing it without governance frameworks are accumulating professional
            liability they may not yet see. Centience governs the technology environment where your
            client financial data lives — ensuring AI adoption in your practice is documented, controlled,
            and defensible.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="cta" size="xl" asChild><Link href="/ai-governance-risk-assessment">Book Your Accounting Firm Governance Assessment <ArrowRight size={16} /></Link></Button>
          </div>
          <p className="text-sm opacity-50 mt-5">
            Or call us directly:{" "}
            <a href="tel:+18779457177" className="text-gold hover:text-gold/80 transition-colors font-semibold">
              (877) 945-7177
            </a>
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4"><div className="gold-line" /><p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">The Challenge</p></div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5">What CPA Firms Gain From Governed Technology Operations.</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Firms that govern AI adoption effectively — with documented oversight, independence risk assessment, and client data controls — can deploy AI tools across tax and audit workflows with confidence. They move faster, serve clients better, and demonstrate professional responsibility at the technical level.</p>
          <p className="text-muted-foreground leading-relaxed">The rapid adoption of AI tools for tax preparation, audit procedures, and financial analysis has introduced a new layer of governance complexity — one that most firms are managing informally, if at all. Centience closes that gap.</p>
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

    <section className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4"><div className="gold-line" /><p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Technical Capabilities</p></div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5">What Centience Manages Inside Accounting and CPA Firms</h2>
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

    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-10">Accounting Organizations We Serve</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {clientTypes.map((t) => (<div key={t} className="card-premium p-5 flex items-center gap-3"><CheckCircle2 size={18} className="text-accent shrink-0" /><span className="text-primary font-medium">{t}</span></div>))}
        </div>
      </div>
    </section>

    <section className="section-navy py-20 lg:py-28">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-5">AI Is Transforming Accounting Practice. Governance Is What Makes It Defensible.</h2>
        <p className="text-lg opacity-70 mb-8">Our accounting firm governance assessment identifies client data exposure, AI governance gaps in tax and audit workflows, and technology vulnerabilities — and delivers a prioritized roadmap to AICPA and regulatory readiness.</p>
        <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm">
          <span className="flex items-center gap-2 opacity-80"><CheckCircle2 size={16} className="text-accent" /> No commitment required</span>
          <span className="flex items-center gap-2 opacity-80"><CheckCircle2 size={16} className="text-accent" /> Results delivered within 5 business days</span>
          <span className="flex items-center gap-2 opacity-80"><CheckCircle2 size={16} className="text-accent" /> 100% audit success rate across all accounting firm engagements</span>
        </div>
        <Button variant="cta" size="xl" asChild><Link href="/ai-governance-risk-assessment">Book Your Accounting Firm Governance Assessment <ArrowRight size={16} /></Link></Button>
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

export default AccountingCpaPage;
