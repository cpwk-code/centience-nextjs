"use client";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { motion } from "framer-motion";
import { ArrowRight, Brain, Eye, FileText, AlertTriangle, BarChart3, CheckCircle2, Cpu, Zap, Shield } from "lucide-react";

const capabilities = [
  { icon: Eye, title: "AI Usage Discovery", description: "Identify where AI tools and models are being used across the organization — sanctioned and unsanctioned — to establish visibility before governance. You cannot govern what you cannot see." },
  { icon: FileText, title: "AI Policy Development", description: "Develop AI usage policies, acceptable use guidelines, and governance frameworks tailored to your industry's regulatory requirements and your organization's specific AI deployment profile." },
  { icon: AlertTriangle, title: "AI Risk Assessment", description: "Evaluate AI-related risks including data privacy, model bias, vendor dependency, and regulatory exposure across all AI tools and platforms in your environment." },
  { icon: Zap, title: "Ongoing AI Monitoring", description: "Continuous monitoring of AI usage across your organization — so new tools, new use cases, and new vendor AI integrations are captured and governed as they emerge, not discovered during an examination." },
  { icon: BarChart3, title: "Executive and Board Reporting", description: "Structured AI governance reporting for leadership and boards, translating technical AI risk into business-level oversight metrics that regulators and directors can evaluate and act on." },
  { icon: Cpu, title: "AI Implementation", description: "Deploy approved AI tools inside your governed infrastructure — ensuring every tool is configured, documented, and integrated within your governance framework from day one." },
];

const frameworks = [
  "NIST AI Risk Management Framework (AI RMF)",
  "ISO/IEC 42001 — AI Management Systems",
  "EU AI Act compliance readiness",
  "SEC guidance on AI disclosures and oversight",
  "FINRA 2026 GenAI governance expectations",
  "Industry-specific AI regulatory requirements",
];

const advantages = [
  "Deploy AI tools across your organization with documented oversight from day one",
  "Accelerate client service workflows without creating undocumented AI exposure",
  "Onboard AI vendors inside an existing governance framework — not after the fact",
  "Demonstrate responsible AI use to clients, counterparties, and regulators",
  "Build institutional confidence at the board and executive level",
  "Scale AI operations with enforced controls already in place",
];

const AIGovernancePage = () => (
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
              <p className="text-xs text-muted-foreground leading-relaxed">SEC/FINRA AI governance requirements for broker-dealers and RIAs.</p>
            </a>
            <a href="/industries/healthcare" className="card-premium p-5 block hover:border-accent/50 transition-colors group">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight size={14} className="text-accent group-hover:translate-x-1 transition-transform" />
                <span className="font-semibold text-primary text-sm">Healthcare</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">HIPAA-aligned AI governance for clinical and administrative AI tools.</p>
            </a>
            <a href="/industries/law-firms" className="card-premium p-5 block hover:border-accent/50 transition-colors group">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight size={14} className="text-accent group-hover:translate-x-1 transition-transform" />
                <span className="font-semibold text-primary text-sm">Law Firms</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">AI governance for legal research, document review, and client communications.</p>
            </a>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Related Programs:</span>
              <a href="/cybersecurity" className="text-accent hover:text-accent/80 transition-colors text-sm font-medium flex items-center gap-1">
                <ArrowRight size={12} /> Cybersecurity Governance
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
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">AI Oversight</p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-extrabold leading-[1.1] mb-6">
            AI Governance Is Not a Policy.{" "}
            <span className="text-gradient-gold">It Is an Operational Obligation.</span>
          </h1>
          <p className="text-lg leading-relaxed opacity-70 mb-4 max-w-2xl">
            Regulated organizations that govern AI effectively do not just avoid enforcement risk — they gain a measurable operational advantage. They deploy AI faster, adopt new tools with confidence, and demonstrate to regulators and clients that their AI environment is supervised. The question is not whether to govern AI. It is whether your governance program is technically enforced or just documented.
          </p>
          <p className="text-lg leading-relaxed opacity-70 mb-6 max-w-2xl">
            Centience discovers AI usage across your organization, builds governance frameworks aligned to your regulatory requirements, and monitors compliance continuously — technically, not theoretically.
          </p>
          <p className="text-base leading-relaxed opacity-60 mb-10 max-w-2xl italic">
            Governed AI is not a constraint on modernization. It is what makes modernization sustainable.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="cta" size="xl" asChild>
              <Link href="/ai-governance-risk-assessment">Book Your AI Governance Assessment <ArrowRight size={16} /></Link>
            </Button>
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

    {/* What Governed AI Enables */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-line" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">What Governed AI Enables</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">
              AI Adoption Is a Competitive Advantage — When Governance Keeps Pace.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Organizations that build governed AI operations gain a durable operational edge: they can move faster because their governance infrastructure keeps pace with their technology adoption. Every new AI tool, every new workflow, every new vendor enters a framework that is already running.
            </p>
          </div>
          <div className="card-premium p-8">
            <ul className="space-y-4">
              {advantages.map((adv) => (
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
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">What Regulators Now Require</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">
          AI Is Now an Examination Priority. The Governance Gap Has a Price Tag.
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          FINRA's 2026 Annual Regulatory Oversight Report introduced a dedicated Generative AI section for the first time — requiring documented governance over AI use cases, model risks, vendor oversight, and AI-enabled communications capture. The SEC's FY2026 examination priorities explicitly flag AI technologies and automated investment tools as primary focus areas for broker-dealers and investment advisers.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Employees are using AI tools across your organization today. Without a governance framework, every AI tool is a potential regulatory liability — and regulators are now asking for documentation of how it is being supervised.
        </p>
      </div>
    </section>

    {/* Capabilities */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">The AI Governance Program</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">What Centience Delivers</h2>
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
    <section className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-line" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Standards Alignment</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">Aligned With Leading AI Governance Standards</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our AI governance programs are built on recognized frameworks and standards — ensuring your governance approach meets current and emerging regulatory expectations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              These are not filing cabinet documents. They are the operational foundation we implement and manage against daily.
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
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-5">Governed AI Is Not a Constraint on Modernization. It Is What Makes Modernization Sustainable.</h2>
        <p className="text-lg opacity-70 mb-6">Our AI governance assessment identifies AI usage across your environment, evaluates governance gaps, and delivers a prioritized roadmap to regulatory readiness — typically within 5 business days.</p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm opacity-50 mb-10">
          <span>✓ No commitment required</span>
          <span>✓ Results within 5 business days</span>
          <span>✓ 100% audit success rate</span>
        </div>
        <Button variant="cta" size="xl" asChild>
          <Link href="/ai-governance-risk-assessment">Book Your AI Governance Assessment <ArrowRight size={16} /></Link>
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

export default AIGovernancePage;
