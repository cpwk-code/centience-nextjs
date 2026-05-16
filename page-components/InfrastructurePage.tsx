"use client";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { motion } from "framer-motion";
import { ArrowRight, Server, Monitor, Cloud, RefreshCw, Users, CheckCircle2, Shield } from "lucide-react";

const capabilities = [
  { icon: Server, title: "Managed Infrastructure Platform", description: "Fully managed computers, servers, networks, and cloud environments — implemented, monitored, and maintained with defined SLAs. Every device in your environment is inventoried, governed, and operating within documented standards." },
  { icon: Monitor, title: "Infrastructure Monitoring & Resilience", description: "24/7 monitoring with automated alerting, performance tracking, and uptime management. Monitoring is integrated into your broader governance reporting — not siloed in a separate tool that nobody reviews." },
  { icon: Cloud, title: "Endpoint & Cloud Management", description: "Centralized management of endpoints, cloud environments, and hybrid infrastructure with governance controls and compliance tracking maintained continuously. Every device, every user, every cloud resource — under governance." },
  { icon: RefreshCw, title: "Disaster Recovery Governance", description: "Documented disaster recovery procedures, regular testing, and governance oversight — so your business continuity plans meet regulatory expectations and are tested, not just documented. When an examiner asks for your DR plan, it exists and it has been tested." },
  { icon: Users, title: "Co-Management Program", description: "For organizations with internal IT resources, Centience offers co-managed infrastructure governance. We integrate into your existing team structure, manage the governance and compliance layer, and ensure the whole environment meets regulatory standards — without replacing your internal team." },
  { icon: Shield, title: "Governance-Aligned Architecture", description: "Infrastructure architecture designed and maintained to support cybersecurity controls, AI governance requirements, and regulatory compliance — not retrofitted after the fact. The foundation everything else runs on." },
];

const stats = [
  { value: "99.9%", label: "Infrastructure Uptime" },
  { value: "24/7", label: "Monitoring & Support" },
  { value: "< 15min", label: "Critical Response Time" },
  { value: "10+", label: "Avg. Client Relationship (Years)" },
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
            The Foundation Your Governance Program Is Built On —{" "}
            <span className="text-gradient-gold">Managed, Monitored, and Always Running.</span>
          </h1>
          <p className="text-lg leading-relaxed opacity-70 mb-4 max-w-2xl">
            You cannot govern what you do not control. Infrastructure governance is the foundational
            layer of the Centience model — providing the visibility, stability, and technical control that
            cybersecurity governance and AI oversight depend on. Centience manages your computers,
            networks, cloud environments, endpoints, and disaster recovery systems — fully governed to
            your specific regulatory requirements. This is not infrastructure monitoring from the outside.
            We own and operate the environment.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link href="/ai-governance-risk-assessment">Book Your Infrastructure Assessment <ArrowRight size={16} /></Link>
          </Button>
          <p className="text-sm opacity-50 mt-5">
            Or call us directly:{" "}
            <a href="tel:+18779457177" className="text-gold hover:text-gold/80 transition-colors font-semibold">
              (877) 945-7177
            </a>
          </p>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 bg-background border-b border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-display font-bold text-accent">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Foundation */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="gold-line" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Why Infrastructure First</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">Infrastructure That Supports Growth — Without Creating Governance Gaps.</h2>
        <ul className="space-y-3 text-muted-foreground">
          {[
            "Operational continuity with monitored, resilient systems",
            "A single managed environment where governance controls can be technically enforced",
            "Endpoint and cloud governance that scales as your organization grows",
            "Disaster recovery governance that satisfies regulators and actually works when tested",
            "The technical foundation that makes every cybersecurity and AI governance layer above it enforceable",
            "Consolidated infrastructure management — one accountable firm, not a patchwork of vendors",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* Capabilities */}
    <section className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">The Infrastructure Governance Program</p>
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

    {/* CTA */}
    <section className="section-navy py-20 lg:py-28">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-5">Governance Starts With Infrastructure. Build the Foundation First.</h2>
        <p className="text-lg opacity-70 mb-6">Start with an infrastructure assessment to evaluate your current environment and establish the technical foundation your governance program requires. Results delivered within 5 business days.</p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm opacity-50 mb-10">
          <span>✓ No commitment required</span>
          <span>✓ Results within 5 business days</span>
          <span>✓ 100% audit success rate</span>
        </div>
        <Button variant="cta" size="xl" asChild>
          <Link href="/ai-governance-risk-assessment">Book Your Infrastructure Assessment <ArrowRight size={16} /></Link>
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

export default InfrastructurePage;
