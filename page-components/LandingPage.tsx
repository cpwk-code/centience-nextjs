"use client";

import Layout from "@/components/Layout";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { FaqItem } from "@/data/industryFaqs";

export interface LandingSection {
  heading: string;
  body?: string[];
  bullets?: string[];
}

export interface LandingContent {
  slug: string;
  eyebrow: string;
  h1: string;
  intro: string[];
  sections: LandingSection[];
  faqs?: FaqItem[];
  faqHeading?: string;
  related?: { label: string; href: string }[];
  ctaHeading?: string;
}

const LandingPage = ({ content }: { content: LandingContent }) => (
  <Layout>
    {/* Hero */}
    <section className="section-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "var(--gradient-gold)" }} />
      <div className="container mx-auto relative z-10 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">{content.eyebrow}</p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.1rem] font-display font-extrabold leading-[1.1] mb-6">
            {content.h1}
          </h1>
          {content.intro.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed opacity-70 mb-5 max-w-2xl">{p}</p>
          ))}
          <div className="flex flex-wrap gap-4 mt-4">
            <Button variant="cta" size="xl" asChild>
              <Link href="/assessments/governance-score">Get Your Free Governance Score <ArrowRight size={16} /></Link>
            </Button>
          </div>
          <p className="text-sm opacity-50 mt-5">
            Or call us directly:{" "}
            <a href="tel:+18779457177" className="text-gold hover:text-gold/80 transition-colors font-semibold">(877) 945-7177</a>
          </p>
        </motion.div>
      </div>
    </section>

    {/* Body sections */}
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="space-y-14">
          {content.sections.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-5 leading-tight">{s.heading}</h2>
              {(s.body ?? []).map((p, j) => (
                <p key={j} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
              ))}
              {s.bullets && s.bullets.length > 0 && (
                <ul className="space-y-2.5 mt-4">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-muted-foreground">
                      <CheckCircle2 size={18} className="text-accent mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        {content.related && content.related.length > 0 && (
          <div className="mt-16 pt-10 border-t border-border">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">Related</p>
            <div className="flex flex-wrap gap-3">
              {content.related.map((r) => (
                <Link key={r.href} href={r.href} className="text-sm font-medium text-gold hover:text-gold/80 inline-flex items-center gap-1.5 border border-border rounded-lg px-4 py-2 transition-colors hover:border-gold/40">
                  {r.label} <ArrowRight size={14} />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>

    {content.faqs && content.faqs.length > 0 && (
      <FAQSection items={content.faqs} heading={content.faqHeading ?? "Frequently Asked Questions"} />
    )}

    {/* Closing CTA */}
    <section className="py-20 lg:py-28 section-navy relative overflow-hidden">
      <div className="container mx-auto max-w-2xl text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-5 leading-tight">
          {content.ctaHeading ?? "See where your firm stands — in minutes."}
        </h2>
        <p className="text-lg opacity-70 mb-8">
          The free Governance Score gives you a 0–100 readiness score, a peer benchmark, and your priority gaps mapped to the rules that matter.
        </p>
        <Button variant="cta" size="xl" asChild>
          <Link href="/assessments/governance-score">Get Your Free Governance Score <ArrowRight size={16} /></Link>
        </Button>
        <p className="text-sm opacity-50 mt-5">
          Or call{" "}
          <a href="tel:+18779457177" className="text-gold hover:text-gold/80 transition-colors font-semibold">(877) 945-7177</a>
        </p>
      </div>
    </section>
  </Layout>
);

export default LandingPage;
