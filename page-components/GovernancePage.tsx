import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { motion } from "framer-motion";
import { ArrowRight, Shield, Server, Brain, Search, BookOpen, Cog, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Infrastructure Governance",
    href: "/infrastructure",
    description: "Managed infrastructure platform with monitoring, resilience, endpoint management, and disaster recovery governance.",
    items: ["Managed infrastructure platform", "Infrastructure monitoring & resilience", "Endpoint and cloud management", "Disaster recovery governance"],
  },
  {
    icon: Shield,
    title: "Cybersecurity Governance",
    href: "/cybersecurity",
    description: "Security posture monitoring, vulnerability oversight, vendor risk management, and compliance readiness integrated into the governance program.",
    items: ["Security posture monitoring", "Vulnerability oversight", "Vendor risk management", "Compliance readiness"],
  },
  {
    icon: Brain,
    title: "AI & Technology Governance",
    href: "/ai-governance",
    description: "AI governance frameworks, technology risk oversight, regulatory readiness, and executive reporting for boards and leadership.",
    items: ["AI governance frameworks", "Technology risk oversight", "Regulatory readiness", "Executive & board-level reporting"],
  },
];

const lifecycle = [
  { icon: Search, number: "01", label: "ASSESS", title: "Governance Assessment", description: "Identify risks across infrastructure, cybersecurity posture, AI usage, and compliance readiness." },
  { icon: BookOpen, number: "02", label: "PLAN", title: "Governance Roadmap", description: "Develop a governance roadmap outlining the steps required to establish structured oversight." },
  { icon: Cog, number: "03", label: "OPERATE", title: "Ongoing Governance Program", description: "Transition into a continuous governance program with monitoring and regulatory readiness." },
];

const GovernancePage = () => (
  <Layout>
    {/* Hero */}
    <section className="section-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "var(--gradient-gold)" }} />
      <div className="container mx-auto relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Services</p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-extrabold leading-[1.1] mb-6">
            Technology Governance for <span className="text-gradient-gold">Regulated Organizations</span>
          </h1>
          <p className="text-lg leading-relaxed opacity-70 mb-10 max-w-2xl">
            A structured governance program spanning AI oversight, cybersecurity, and managed infrastructure — built to withstand regulatory scrutiny and support operational resilience.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link href="/ai-governance-risk-assessment">Schedule Governance Assessment <ArrowRight size={16} /></Link>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* Governance Programs */}
    <section className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Programs</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">Governance Programs</h2>
          <p className="text-muted-foreground leading-relaxed">Three integrated governance programs covering every layer of the technology stack — from foundational infrastructure to strategic AI oversight.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div key={svc.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <Link href={svc.href} className="card-premium p-8 block group h-full">
                <div className="w-11 h-11 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <svc.icon size={20} />
                </div>
                <h3 className="font-display font-bold text-primary text-lg mb-3">{svc.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{svc.description}</p>
                <ul className="space-y-2">
                  {svc.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Governance Lifecycle */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Governance Lifecycle</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">Assessment → Roadmap → Program</h2>
          <p className="text-muted-foreground leading-relaxed">Every engagement follows a structured lifecycle designed to move organizations from initial assessment through to an ongoing governance program.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {lifecycle.map((step, i) => (
            <motion.div key={step.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="card-premium p-8">
              <span className="text-3xl font-display font-bold text-accent/15 block mb-3">{step.number}</span>
              <span className="text-[10px] font-bold tracking-[0.3em] text-accent">{step.label}</span>
              <h3 className="font-display font-bold text-primary text-lg mt-2 mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-navy py-20 lg:py-28">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-5">Ready to Establish Governance?</h2>
        <p className="text-lg opacity-70 mb-10">Start with a governance assessment to understand where your organization stands and build a roadmap for structured oversight.</p>
        <Button variant="cta" size="xl" asChild>
          <Link href="/ai-governance-risk-assessment">Schedule Governance Assessment <ArrowRight size={16} /></Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default GovernancePage;
