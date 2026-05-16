"use client";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, Brain, Lock, BarChart3, FileText, Users } from "lucide-react";

const pressurePoints = [
  { title: "SEC Investment Adviser Oversight", body: "Registered PE firms face SEC examination expectations that now include technology governance, cybersecurity controls, and — increasingly — AI governance. Firms must demonstrate governance at the firm level and show oversight of significant technology risks at portfolio companies." },
  { title: "Inconsistent Governance Across Portfolio", body: "Portfolio companies acquired at different stages carry different technology governance postures. Without a standardized governance baseline, risk exposure varies dramatically across the portfolio — and is often invisible until due diligence or an incident occurs." },
  { title: "AI Adoption Without Governance at Portfolio Companies", body: "Portfolio companies are adopting AI tools rapidly — often without governance frameworks. This creates undisclosed regulatory and operational risk that flows through to the PE firm's oversight obligations." },
  { title: "Technology Risk at Exit", body: "Due diligence processes now include detailed technology governance assessments. Governance gaps discovered during exit diligence create material value impacts. Firms that invest in governance programs during the hold period realize higher valuations and cleaner exits." },
];

const capabilities = [
  { icon: Shield, title: "Firm-Level Governance (The PE Firm)", items: ["Managed infrastructure governance for the PE firm", "Investment data security and access controls", "Communication compliance and archiving", "AI governance for investment analysis tools", "SEC examination readiness documentation", "Executive and LP-level governance reporting"] },
  { icon: BarChart3, title: "Portfolio-Wide Governance Assessment", items: ["Standardized technology governance assessment across all portfolio companies", "Cybersecurity posture scoring by company", "AI usage discovery and governance gap identification", "Compliance framework mapping by company regulatory exposure", "Consolidated portfolio risk dashboard", "Prioritized remediation roadmap by company"] },
  { icon: Lock, title: "Portfolio Company Governance Baseline", items: ["Standardized cybersecurity baseline deployment across portfolio", "Infrastructure governance standards and monitoring", "Endpoint security and access control standardization", "Incident response framework deployment", "Governance policy templates for portfolio deployment", "Annual governance review cadence across portfolio"] },
  { icon: Brain, title: "AI Governance for Portfolio", items: ["AI usage discovery across portfolio companies", "AI governance framework development for each company", "Vendor AI risk evaluation for portfolio technology platforms", "AI governance monitoring and reporting", "Regulatory readiness assessment for AI-related obligations", "Board-level AI governance reporting"] },
  { icon: FileText, title: "Due Diligence and Transaction Support", items: ["Pre-acquisition technology governance assessment", "Cybersecurity posture evaluation for target companies", "Governance gap documentation for deal teams", "Post-acquisition governance integration planning", "Exit readiness governance preparation", "Data room technology governance documentation"] },
  { icon: Users, title: "Board and LP Governance Reporting", items: ["Portfolio-wide technology risk dashboard", "Board-ready governance reporting by company", "Incident and risk escalation framework", "Regulatory change monitoring affecting portfolio", "Annual governance program review and reporting", "LP-level technology risk disclosure support"] },
];

const clientTypes = ["Registered Investment Adviser PE Firms", "Growth Equity Firms", "Venture Capital Firms with Portfolio Oversight Obligations", "Family Office PE Operations", "PE-Backed Portfolio Companies Directly"];

const PrivateEquityPage = () => (
  <Layout>
    <section className="section-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "var(--gradient-gold)" }} />
      <div className="container mx-auto relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6"><div className="gold-line" /><p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Private Equity</p></div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-extrabold leading-[1.1] mb-6">
            Governance That Protects Portfolio Value —{" "}
            <span className="text-gradient-gold">From Hold Period Through Exit.</span>
          </h1>
          <p className="text-lg leading-relaxed opacity-70 mb-4 max-w-2xl">
            Technology governance gaps discovered during due diligence create material valuation
            impacts. Governance programs built during the hold period protect value, reduce exit friction,
            and give portfolio companies the operational credibility that sophisticated buyers and
            regulators expect. Centience delivers portfolio-level governance oversight — from firm-level
            SEC compliance through portfolio company technology baseline — as a single continuously
            managed program.
          </p>
          <div className="inline-block border-l-4 border-accent pl-4 mb-8">
            <p className="text-sm font-semibold text-gold">Technology risk accumulates invisibly across a portfolio. The right time to surface it is before due diligence does.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button variant="cta" size="xl" asChild><Link href="/ai-governance-risk-assessment">Book Your Portfolio Governance Assessment <ArrowRight size={16} /></Link></Button>
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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5">Why Governance Drives Portfolio Value.</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Firms that govern technology across the portfolio — not just at the firm level — enter exit processes with a material advantage. Governance documentation is ready. Cybersecurity posture is defensible. AI usage is supervised. Due diligence does not surface surprises.</p>
          <p className="text-muted-foreground leading-relaxed">Beyond exit value, portfolio governance reduces regulatory exposure for registered investment advisers, protects LP relationships, and gives portfolio company management teams the governance infrastructure they need to scale without creating undisclosed risk.</p>
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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5">What Centience Delivers for Private Equity Firms and Their Portfolios</h2>
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
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-10">Private Equity Firms We Serve</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {clientTypes.map((t) => (<div key={t} className="card-premium p-5 flex items-center gap-3"><CheckCircle2 size={18} className="text-accent shrink-0" /><span className="text-primary font-medium">{t}</span></div>))}
        </div>
      </div>
    </section>

    <section className="section-navy py-20 lg:py-28">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-5">Build Governance During the Hold Period. Protect Value at Exit.</h2>
        <p className="text-lg opacity-70 mb-8">Our private equity governance assessment evaluates firm-level and portfolio-level technology governance — delivering a consolidated risk view and prioritized remediation roadmap.</p>
        <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm">
          <span className="flex items-center gap-2 opacity-80"><CheckCircle2 size={16} className="text-accent" /> No commitment required</span>
          <span className="flex items-center gap-2 opacity-80"><CheckCircle2 size={16} className="text-accent" /> Results delivered within 5 business days</span>
          <span className="flex items-center gap-2 opacity-80"><CheckCircle2 size={16} className="text-accent" /> 100% audit success rate across all PE firm engagements</span>
        </div>
        <Button variant="cta" size="xl" asChild><Link href="/ai-governance-risk-assessment">Book Your Portfolio Governance Assessment <ArrowRight size={16} /></Link></Button>
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

export default PrivateEquityPage;
