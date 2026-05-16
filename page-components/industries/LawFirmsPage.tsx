"use client";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, Brain, Lock, MessageSquare, AlertTriangle, FileText } from "lucide-react";

const pressurePoints = [
  { title: "ABA Model Rules and State Bar Requirements", body: "ABA Model Rule 1.6 requires competence in technology as part of the duty of confidentiality. State bars are increasingly issuing guidance on technology governance, AI use, and cybersecurity — and several have implemented mandatory reporting requirements for security incidents." },
  { title: "Client Confidentiality and Data Isolation", body: "Law firms hold sensitive information across hundreds or thousands of client matters. Without technically enforced access controls and data isolation, the risk of unauthorized access — internal or external — is continuous." },
  { title: "Legal AI Tools and Privilege Risk", body: "AI tools used in legal practice — for research, drafting, and document review — raise specific privilege, confidentiality, and accuracy concerns. Firms adopting legal AI without governance frameworks expose clients and themselves to professional liability." },
  { title: "Cyber Extortion Targeting Legal Data", body: "Attackers know that law firms hold sensitive client data and face reputational pressure not to disclose incidents. This makes legal practices high-value targets for ransomware and data extortion — and makes breach preparedness a governance priority." },
];

const capabilities = [
  { icon: Shield, title: "Client Data Governance and Access Controls", items: ["Matter-level data access controls and isolation", "Minimum necessary access enforcement by role", "Privileged access management for partners and administrators", "Client portal security governance", "Data retention and destruction governance", "Document management system security controls"] },
  { icon: Brain, title: "Legal AI Governance", items: ["AI usage discovery — identify every AI tool in use across the firm", "Confidentiality risk assessment for AI tools touching client data", "AI governance framework aligned to ABA and state bar guidance", "Vendor AI risk evaluation for legal technology platforms", "AI usage policies for attorneys and staff", "Ongoing monitoring and documentation of AI governance"] },
  { icon: Lock, title: "Cybersecurity Governance", items: ["Security monitoring with legal sector threat intelligence", "Email security and phishing defense", "Ransomware protection and response governance", "Endpoint detection and response", "Remote access security controls", "Vulnerability management across all systems"] },
  { icon: MessageSquare, title: "Communication and Collaboration Security", items: ["Secure email governance and encryption controls", "Client communication platform security assessment", "Video conferencing security governance", "Mobile device management and security", "External collaboration security controls"] },
  { icon: AlertTriangle, title: "Incident Response and Breach Preparedness", items: ["Documented incident response plan", "State bar notification requirement mapping", "Client notification governance", "Cyber extortion response framework", "Tabletop exercise facilitation", "Post-incident remediation tracking"] },
  { icon: FileText, title: "Compliance Documentation", items: ["Written Information Security Policy (WISP) development", "Technology governance policy framework", "Annual security review and documentation", "Vendor security assessment documentation", "Audit-ready evidence packages", "Board and partnership-level governance reporting"] },
];

const clientTypes = ["AmLaw 200 Regional Practices", "Mid-Size Multi-Practice Firms", "Boutique Specialty Firms", "Solo and Small Practices", "Legal Service Organizations", "Alternative Legal Service Providers"];

const LawFirmsPage = () => (
  <Layout>
    <section className="section-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "var(--gradient-gold)" }} />
      <div className="container mx-auto relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6"><div className="gold-line" /><p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Law Firms</p></div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-extrabold leading-[1.1] mb-6">
            Client Confidentiality Is a Professional Obligation. <span className="text-gradient-gold">Technology Governance Is How You Enforce It.</span>
          </h1>
          <p className="text-lg leading-relaxed opacity-70 mb-4 max-w-2xl">
            Law firms that govern their technology environment effectively — technically enforced access controls, AI oversight, and breach preparedness — protect client confidentiality, reduce professional liability exposure, and demonstrate to clients and bar authorities that their obligations are being met. Technology governance is not a compliance exercise. It is a professional responsibility.
          </p>
          <p className="text-lg leading-relaxed opacity-70 mb-10 max-w-2xl">
            Centience manages the technical environment where client data lives, governs the AI tools that touch it, and maintains the documentation that demonstrates your firm is meeting its professional responsibility obligations.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="cta" size="xl" asChild><Link href="/ai-governance-risk-assessment">Book Your Law Firm Governance Assessment <ArrowRight size={16} /></Link></Button>
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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5">Technology Governance Is a Professional Responsibility — and a Competitive Differentiator.</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Law firms that invest in technically enforced governance build a durable advantage: they protect client confidentiality more reliably, respond to breaches more effectively, and demonstrate to sophisticated clients that their data is being protected at the technical level — not just the policy level.</p>
          <p className="text-muted-foreground leading-relaxed">Beyond professional responsibility, law firms face an expanding threat landscape. Attackers specifically target law firms for the high-value client data they hold. Ransomware attacks against legal practices have increased significantly. And the adoption of AI tools — for research, drafting, document review, and client communication — has introduced new confidentiality, privilege, and ethical risks that most firms have not yet formally assessed.</p>
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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5">What Centience Manages Inside Law Firms</h2>
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
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-10">Law Firm Types We Serve</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {clientTypes.map((t) => (<div key={t} className="card-premium p-5 flex items-center gap-3"><CheckCircle2 size={18} className="text-accent shrink-0" /><span className="text-primary font-medium">{t}</span></div>))}
        </div>
      </div>
    </section>

    <section className="section-navy py-20 lg:py-28">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-5">Client Confidentiality Is a Professional Obligation. Technology Governance Is How You Enforce It.</h2>
        <p className="text-lg opacity-70 mb-8">Our law firm governance assessment identifies client data exposure, AI governance gaps, and cybersecurity vulnerabilities — and delivers a prioritized roadmap aligned to ABA and state bar requirements.</p>
        <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm">
          <span className="flex items-center gap-2 opacity-80"><CheckCircle2 size={16} className="text-accent" /> No commitment required</span>
          <span className="flex items-center gap-2 opacity-80"><CheckCircle2 size={16} className="text-accent" /> Results delivered within 5 business days</span>
          <span className="flex items-center gap-2 opacity-80"><CheckCircle2 size={16} className="text-accent" /> 100% audit success rate across all legal engagements</span>
        </div>
        <Button variant="cta" size="xl" asChild><Link href="/ai-governance-risk-assessment">Book Your Law Firm Governance Assessment <ArrowRight size={16} /></Link></Button>
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

export default LawFirmsPage;
