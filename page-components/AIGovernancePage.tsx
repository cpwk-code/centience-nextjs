import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { motion } from "framer-motion";
import { ArrowRight, Brain, Eye, FileText, AlertTriangle, BarChart3, CheckCircle2 } from "lucide-react";

const capabilities = [
  { icon: Eye, title: "AI Usage Discovery", description: "Identify where AI tools and models are being used across the organization — sanctioned and unsanctioned — to establish visibility before governance." },
  { icon: FileText, title: "AI Policy Development", description: "Develop AI usage policies, acceptable use guidelines, and governance frameworks tailored to your industry's regulatory requirements." },
  { icon: AlertTriangle, title: "AI Risk Assessment", description: "Evaluate AI-related risks including data privacy, model bias, vendor dependency, and regulatory exposure across all AI tools and platforms." },
  { icon: BarChart3, title: "Executive & Board Reporting", description: "Provide structured AI governance reporting for leadership and boards, translating technical AI risk into business-level oversight metrics." },
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
            AI Governance for <span className="text-gradient-gold">Responsible Adoption</span>
          </h1>
          <p className="text-lg leading-relaxed opacity-70 mb-4 max-w-2xl">
            AI governance is only enforceable if you know what AI is being used, by whom, and on what infrastructure. Centience discovers AI usage across your organization, builds governance frameworks, and monitors compliance — technically, not theoretically.
          </p>
          <p className="text-lg leading-relaxed opacity-70 mb-10 max-w-2xl">
            Structured AI governance oversight including usage discovery, framework development, vendor AI risk evaluation, and regulatory readiness monitoring — ensuring AI adoption doesn't outpace governance.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="cta" size="xl" asChild>
              <Link href="/ai-governance-risk-assessment">Schedule AI Governance Assessment <ArrowRight size={16} /></Link>
            </Button>
            <Button variant="cta-outline" size="xl" asChild>
              <Link href="/ai-governance-risk-assessment">Download AI Governance Guide</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* The Problem */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-line" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">The Challenge</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">AI Is Outpacing Governance</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Organizations are adopting AI tools faster than governance structures can keep up. Employees use AI daily — often without IT knowledge. Vendors embed AI into existing products without disclosure. Regulators are accelerating enforcement timelines.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Without structured AI governance, organizations face regulatory exposure, data leakage, vendor lock-in, and inability to demonstrate oversight during audits or board reviews.
            </p>
          </div>
          <div className="card-premium p-8">
            <Brain size={24} className="text-accent mb-5" />
            <h3 className="font-display font-bold text-primary text-lg mb-4">Key AI Governance Risks</h3>
            <ul className="space-y-4">
              {[
                "Unsanctioned AI usage across departments",
                "Vendor AI embedded in existing tools without visibility",
                "No AI usage policies or acceptable use guidelines",
                "Regulatory requirements evolving faster than controls",
                "Board and leadership unable to articulate AI oversight",
              ].map((risk) => (
                <li key={risk} className="text-sm text-muted-foreground flex items-start gap-3">
                  <AlertTriangle size={14} className="text-accent mt-0.5 shrink-0" />
                  {risk}
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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">AI Governance Program</h2>
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

    {/* Frameworks */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-line" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Frameworks</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">Aligned With Leading Standards</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">Our AI governance programs are built on recognized frameworks and standards, ensuring your governance approach meets current and emerging regulatory expectations.</p>
            <ul className="space-y-4">
              {frameworks.map((fw) => (
                <li key={fw} className="text-sm text-foreground flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
                  {fw}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-premium p-10 text-center">
            <Brain size={48} className="text-accent mx-auto mb-6" />
            <h3 className="font-display font-bold text-primary text-xl mb-3">AI Governance Assessment</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">Start with a structured assessment to understand your current AI exposure, governance gaps, and regulatory readiness.</p>
            <Button variant="cta" size="lg" asChild>
              <Link href="/ai-governance-risk-assessment">Get Started <ArrowRight size={16} /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default AIGovernancePage;
