"use client";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { motion } from "framer-motion";
import { ArrowRight, Building2, Briefcase, Heart, Calculator, Scale, HandHeart, ArrowUpRight } from "lucide-react";

const industries = [
  { icon: Calculator, title: "Accounting & CPA", sub: "Financial data governance and AICPA readiness", href: "/industries/accounting-cpa" },
  { icon: Building2, title: "Financial Services", sub: "SEC, FINRA, and state regulatory alignment", href: "/industries/financial-services" },
  { icon: Heart, title: "Healthcare", sub: "HIPAA-compliant governance and AI oversight", href: "/industries/healthcare" },
  { icon: Scale, title: "Law Firms", sub: "Client data protection and legal AI governance", href: "/industries/law-firms" },
  { icon: HandHeart, title: "Non-Profit", sub: "Data governance and compliance for mission-driven organizations", href: "/industries/non-profit" },
  { icon: Briefcase, title: "Private Equity", sub: "Portfolio-level governance and oversight", href: "/industries/private-equity" },
];

const IndustriesPage = () => (
  <Layout>
    {/* Hero */}
    <section className="section-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "var(--gradient-gold)" }} />
      <div className="container mx-auto relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Industries</p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-extrabold leading-[1.1] mb-6">
            Governance Programs Built for Your <span className="text-gradient-gold">Regulatory Environment</span>
          </h1>
          <p className="text-lg leading-relaxed opacity-70 max-w-2xl">
            Every regulated industry faces unique compliance obligations. Centience delivers governance programs engineered to meet your specific regulatory requirements — not generic frameworks adapted to fit.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Industry Cards */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <motion.div key={ind.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <Link href={ind.href} className="card-premium p-8 block group h-full">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                    <ind.icon size={22} />
                  </div>
                  <ArrowUpRight size={16} className="text-muted-foreground/0 group-hover:text-accent transition-all duration-300" />
                </div>
                <h3 className="font-display font-bold text-primary text-lg mb-2">{ind.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{ind.sub}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-navy py-20 lg:py-28">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-5">Don't see your industry? Let's talk.</h2>
        <p className="text-lg opacity-70 mb-10">If your organization operates in a regulated environment and needs technology governance — we can help.</p>
        <Button variant="cta" size="xl" asChild>
          <Link href="/ai-governance-risk-assessment">Book Your Governance Assessment <ArrowRight size={16} /></Link>
        </Button>
        <p className="text-sm opacity-50 mt-6">
          Or call us directly:{" "}
          <a href="tel:+18779457177" className="text-gold font-semibold hover:text-gold/80 transition-colors">(877) 945-7177</a>
        </p>
      </div>
    </section>
  </Layout>
);

export default IndustriesPage;
