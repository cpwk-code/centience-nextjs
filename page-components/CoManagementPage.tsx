"use client";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Users, Shield, Brain, Server } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const worksWith = [
  { label: "Internal IT Teams", desc: "Centience operates the governance layer. Your internal team handles day-to-day operations. Both work from the same evidence base." },
  { label: "vCISOs & Fractional Security Leaders", desc: "The vCISO sets the security strategy. Centience builds and maintains the governance infrastructure that makes the strategy demonstrable." },
  { label: "Compliance Counsel & Outside Advisors", desc: "Legal and compliance counsel advises on regulatory requirements. Centience builds the technical controls and evidence that satisfy them." },
  { label: "Cybersecurity Providers", desc: "Existing security vendors continue operating. Centience governs the output — controls, evidence, and regulatory alignment — across all providers." },
  { label: "GRC Platforms & Tools", desc: "If you have a GRC tool or compliance platform in place, Centience operates inside it — or establishes the governance dashboard as part of the program." },
];

const principles = [
  {
    icon: Shield,
    title: "One accountable operator",
    desc: "Governance without a single accountable operator produces documentation, not governance. Centience takes operational accountability for the program — regardless of what other teams, tools, or advisors are in place.",
  },
  {
    icon: Users,
    title: "No displacement required",
    desc: "Centience does not require replacing your existing IT team, security provider, or compliance advisor. The program is additive — it provides the governance layer that most teams, tools, and advisors do not supply.",
  },
  {
    icon: Brain,
    title: "Governance lives in the program, not in relationships",
    desc: "When governance depends on a person, it leaves when that person does. The Centience Governance Program creates institutional continuity — documented controls, evidence, registers, and reporting that persist independent of any individual.",
  },
  {
    icon: Server,
    title: "Infrastructure support is included by design",
    desc: "Centience includes operational IT support because unsupported infrastructure creates governance gaps. The program covers infrastructure, cybersecurity, AI, and data — not governance alone.",
  },
];

const CoManagementPage = () => (
  <Layout>
    {/* Hero */}
    <section className="section-navy pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "var(--gradient-gold)" }} />
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              The Centience Governance Program
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-display font-extrabold leading-[1.1] mb-6">
            Governance Support for{" "}
            <span className="text-gradient-gold">Your Existing Team</span>
          </h1>
          <p className="text-lg opacity-70 leading-relaxed max-w-2xl mb-10">
            Centience works alongside your existing IT team, vCISO, compliance counsel, cybersecurity provider, or outside advisors. The program does not require replacing any of them. It requires one thing: a single accountable governance operator. That is Centience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="cta" size="xl" asChild>
              <Link href="/readiness">
                Get the Free 5-Day Assessment <ArrowRight size={16} />
              </Link>
            </Button>
            <Button variant="cta-outline" size="xl" asChild>
              <Link href="/governance">See the Full Program</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* The key distinction */}
    <section className="py-16 bg-muted border-y border-border">
      <div className="container mx-auto max-w-4xl">
        <blockquote className="text-xl md:text-2xl font-display font-bold text-primary leading-snug border-l-4 border-gold pl-8">
          "Centience is not a co-managed IT provider. It is the governance operator for regulated technology environments — and it works with whatever team, tools, and advisors are already in place."
        </blockquote>
      </div>
    </section>

    {/* Who we work with */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Who We Work Alongside</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">
            The Program Works With Your Existing Structure
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Most regulated organizations have some combination of internal IT staff, outside security resources, compliance advisors, and technology vendors already in place. The Centience Governance Program operates on top of that structure — providing the governance layer those teams, tools, and advisors do not supply.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {worksWith.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="card-premium p-7 flex gap-4"
            >
              <CheckCircle2 size={20} className="text-gold shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display font-bold text-primary mb-2">{item.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-primary rounded-2xl p-8 md:p-10 text-warm-white">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold mb-4">The One Requirement</p>
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 leading-snug">
            Governance requires one accountable operator.
          </h3>
          <p className="opacity-70 leading-relaxed max-w-2xl">
            Partner flexibility does not mean shared accountability. The Centience Governance Program works with any existing team — but the governance layer has one operator, one evidence standard, and one reporting cadence. That accountability is what makes the program defensible.
          </p>
        </div>
      </div>
    </section>

    {/* Operating principles */}
    <section className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto max-w-5xl">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">How It Works</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">
            Four Principles Behind the Program
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {principles.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card-premium p-8"
            >
              <div className="w-11 h-11 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-5">
                <item.icon size={20} />
              </div>
              <h3 className="font-display font-bold text-primary text-lg mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Program Components</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "AI Governance", href: "/ai-governance" },
              { label: "Cybersecurity Governance", href: "/cybersecurity" },
              { label: "Data Governance", href: "/data-governance" },
              { label: "Technology Governance", href: "/governance" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="card-premium p-5 flex items-center justify-between group hover:border-gold/30 transition-colors"
              >
                <span className="font-semibold text-sm text-primary">{link.label}</span>
                <ArrowRight size={15} className="text-muted-foreground group-hover:text-gold transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-navy py-20">
      <div className="container mx-auto max-w-3xl text-center">
        <div className="flex items-center gap-3 justify-center mb-6">
          <div className="gold-line" />
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Get Started</p>
          <div className="gold-line" />
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-5 leading-tight">
          Ready to Enroll in the Centience Governance Program?
        </h2>
        <p className="text-lg opacity-60 leading-relaxed mb-8 max-w-xl mx-auto">
          The Free 5-Day Assessment is the first step. Results within 5 business days.
        </p>
        <Button variant="cta" size="xl" asChild>
          <Link href="/readiness">
            Get the Free 5-Day Assessment <ArrowRight size={16} />
          </Link>
        </Button>
        <p className="text-sm opacity-50 mt-6">
          Questions?{" "}
          <a href="tel:+18779457177" className="text-gold hover:text-gold/80 font-semibold transition-colors">
            (877) 945-7177
          </a>
        </p>
      </div>
    </section>
  </Layout>
);

export default CoManagementPage;
