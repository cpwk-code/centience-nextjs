import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { motion } from "framer-motion";
import { ArrowRight, Server, Monitor, Cloud, HardDrive, RefreshCw, CheckCircle2 } from "lucide-react";

const capabilities = [
  { icon: Server, title: "Managed Infrastructure Platform", description: "Fully managed infrastructure with proactive monitoring, patch management, and performance optimization — the foundation of the governance program." },
  { icon: Monitor, title: "Infrastructure Monitoring & Resilience", description: "24/7 monitoring with defined SLAs, uptime commitments, and automated alerting to ensure infrastructure remains resilient and available." },
  { icon: Cloud, title: "Endpoint & Cloud Management", description: "Centralized management of endpoints, cloud environments, and hybrid infrastructure with governance controls and compliance tracking." },
  { icon: RefreshCw, title: "Disaster Recovery Governance", description: "Documented disaster recovery procedures, regular testing, and governance oversight ensuring business continuity plans meet regulatory expectations." },
];

const stats = [
  { value: "99.9%", label: "Infrastructure Uptime" },
  { value: "24/7", label: "Monitoring & Support" },
  { value: "< 15min", label: "Critical Response Time" },
];

const InfrastructurePage = () => (
  <Layout>
    {/* Hero */}
    <section className="section-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "var(--gradient-gold)" }} />
      <div className="container mx-auto relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Resilience</p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-extrabold leading-[1.1] mb-6">
            Infrastructure <span className="text-gradient-gold">Governance</span>
          </h1>
          <p className="text-lg leading-relaxed opacity-70 mb-4 max-w-2xl">
            Centience manages computers, networks, cloud environments, endpoints, and disaster recovery systems — all governed to meet your specific regulatory requirements. This is not infrastructure monitoring from the outside. We own and operate the environment.
          </p>
          <p className="text-lg leading-relaxed opacity-70 mb-10 max-w-2xl">
            Managed infrastructure providing the resilient, monitored foundation that the entire governance program is built upon — ensuring technology environments remain compliant, available, and audit-ready.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link href="/ai-governance-risk-assessment">Schedule Infrastructure Assessment <ArrowRight size={16} /></Link>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 bg-background border-b border-border">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-16 lg:gap-24">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-display font-bold text-accent">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Foundation Matters */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="gold-line" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Foundation</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">Governance Starts With Infrastructure</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          You can't govern what you can't see or control. Infrastructure governance is the foundational layer — providing the visibility, stability, and control that cybersecurity and AI governance programs depend on.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Our managed infrastructure platform ensures that every device, server, and cloud resource is inventoried, monitored, and maintained to governance standards before layering cybersecurity and AI oversight on top.
        </p>
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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">Infrastructure Governance Program</h2>
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
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-5">Build a Resilient Foundation</h2>
        <p className="text-lg opacity-70 mb-10">Start with an infrastructure assessment to evaluate your current environment and establish the governance foundation your organization needs.</p>
        <Button variant="cta" size="xl" asChild>
          <Link href="/ai-governance-risk-assessment">Schedule Assessment <ArrowRight size={16} /></Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default InfrastructurePage;
