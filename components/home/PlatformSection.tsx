"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Activity, ShieldCheck, FileText, Network } from "lucide-react";
import { Button } from "@/components/ui/button";

const points = [
  { icon: Activity, label: "Live control monitoring" },
  { icon: ShieldCheck, label: "Timestamped evidence vault" },
  { icon: FileText, label: "Policy & WSP generation" },
  { icon: Network, label: "Mapped to SEC · FINRA · HIPAA" },
];

const PlatformSection = () => (
  <section className="py-20 lg:py-28 section-navy relative overflow-hidden">
    <div className="container mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Now in software</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-5">
            Meet the Centience Platform
          </h2>
          <p className="text-lg opacity-75 leading-relaxed mb-6 max-w-xl">
            The same governance we've run for regulated firms for 20+ years, now as a platform. Connect Microsoft 365 or Google, get scored against the rules that matter, and keep a standing evidence trail — running alongside your internal IT or MSP.
          </p>
          <div className="grid grid-cols-2 gap-3 mb-8 max-w-md">
            {points.map((p) => (
              <div key={p.label} className="flex items-center gap-2.5 text-sm opacity-80">
                <p.icon className="w-4 h-4 text-accent shrink-0" />
                <span>{p.label}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Button variant="cta" size="lg" asChild>
              <Link href="/platform">Explore the platform <ArrowRight size={16} /></Link>
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white/40 hover:bg-white/10" asChild>
              <Link href="/contact">Book a demo</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden lg:block"
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <p className="text-xs uppercase tracking-widest text-warm-white/50">Governance Score</p>
              <span className="text-[10px] font-semibold text-accent bg-accent/15 rounded-full px-2 py-0.5">Live</span>
            </div>
            <div className="flex items-center gap-5">
              <div className="relative w-24 h-24 shrink-0">
                <svg viewBox="0 0 100 100" className="w-24 h-24 -rotate-90">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="8" />
                  <circle cx="50" cy="50" r="42" fill="none" stroke="var(--gold)" strokeWidth="8" strokeLinecap="round" strokeDasharray="264" strokeDashoffset="66" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-display font-bold text-warm-white">75</span>
                </div>
              </div>
              <div className="space-y-2 text-sm w-full">
                {[["Access & MFA", "92"], ["Data protection", "68"], ["Recordkeeping", "71"]].map(([label, val]) => (
                  <div key={label}>
                    <div className="flex justify-between text-warm-white/70 text-xs mb-1"><span>{label}</span><span>{val}</span></div>
                    <div className="h-1.5 rounded-full bg-white/10"><div className="h-1.5 rounded-full" style={{ width: `${val}%`, background: "var(--gradient-gold)" }} /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-center text-[11px] text-warm-white/35 mt-3">Illustrative — your dashboard reflects your live environment.</p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default PlatformSection;
