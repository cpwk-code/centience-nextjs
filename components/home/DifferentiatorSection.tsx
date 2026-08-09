"use client";
import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const cols = [
  {
    label: "One-Time Assessment",
    highlight: false,
    items: [
      { text: "Delivers a report",                    yes: false },
      { text: "Ends at document delivery",            yes: false },
      { text: "Controls implemented by your team",    yes: false },
      { text: "Evidence rebuilt before every exam",   yes: false },
      { text: "AI oversight included",                yes: false },
      { text: "Ongoing program available",            yes: false },
    ],
  },
  {
    label: "Generic MSP",
    highlight: false,
    items: [
      { text: "Manages infrastructure",               yes: true  },
      { text: "Governance layer included",             yes: false },
      { text: "Regulatory expertise on staff",        yes: false },
      { text: "Audit evidence maintained",            yes: false },
      { text: "AI oversight included",                yes: false },
      { text: "All four layers, one firm",            yes: false },
    ],
  },
  {
    label: "Centience",
    highlight: true,
    items: [
      { text: "Builds and operates the program",      yes: true  },
      { text: "Continuous — never stops",             yes: true  },
      { text: "Controls technically enforced",        yes: true  },
      { text: "Evidence maintained in real time",     yes: true  },
      { text: "AI, data, cybersecurity, infrastructure", yes: true  },
      { text: "One accountable firm for all four",    yes: true  },
    ],
  },
];

const outcomes = [
  {
    industry: "Registered Investment Adviser",
    role: "Chief Compliance Officer",
    quote: "We were using AI across the firm and had no way to show an examiner what went in or what came out. Once I understood that books-and-records rules apply to AI the same as email, we had to fix it. Now we can answer every question.",
  },
  {
    industry: "Investment Management",
    role: "Chief Operating Officer",
    quote: "An institutional investor's due diligence questionnaire asked about AI governance and we didn't have answers. Six months later we did. That questionnaire was the moment I stopped treating this as optional.",
  },
  {
    industry: "Capital Management",
    role: "Principal",
    quote: "We were handling a lot of this ourselves without really knowing if it was right. Having a team that understands what regulators actually look for changed how we think about every technology decision.",
  },
];

const DifferentiatorSection = () => (
  <section className="py-24 lg:py-32 bg-muted">
    <div className="container mx-auto">
      <div className="max-w-2xl mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="gold-line" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Why Centience</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">
          Not a Report. Not a Managed Service. A Governance Operation.
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Most regulated organizations have either hired a consultant who delivered a binder, or an MSP who manages their technology without a governance layer. Centience is the third option — the firm that builds and operates both.
        </p>
      </div>

      {/* Comparison table */}
      <div className="grid md:grid-cols-3 gap-4 mb-20">
        {cols.map((col, ci) => (
          <motion.div
            key={col.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: ci * 0.1 }}
            className={`rounded-2xl p-7 flex flex-col ${
              col.highlight
                ? "bg-primary text-warm-white shadow-xl ring-2 ring-gold/30"
                : "bg-background border border-border"
            }`}
          >
            <p className={`text-xs font-bold uppercase tracking-[0.2em] mb-5 ${col.highlight ? "text-gold" : "text-muted-foreground"}`}>
              {col.label}
            </p>
            <ul className="space-y-3 flex-1">
              {col.items.map((item) => (
                <li key={item.text} className="flex items-start gap-2.5">
                  {item.yes ? (
                    <Check size={14} className={`mt-0.5 shrink-0 ${col.highlight ? "text-gold" : "text-green-500"}`} />
                  ) : (
                    <X size={14} className="mt-0.5 shrink-0 text-muted-foreground/40" />
                  )}
                  <span className={`text-sm leading-snug ${col.highlight ? "text-warm-white/80" : item.yes ? "text-foreground" : "text-muted-foreground/50"}`}>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Anonymized outcome callouts */}
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 mb-8">
          <div className="gold-line" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">In Practice</p>
        </div>
        <div className="space-y-4">
          {outcomes.map((o, i) => (
            <motion.div
              key={o.industry}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-background border border-border rounded-xl p-6"
            >
              <p className="text-sm text-foreground leading-relaxed mb-4 italic">&ldquo;{o.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-border" />
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent bg-accent/10 rounded-full px-3 py-1 shrink-0">
                  {o.role}, {o.industry}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground/40 mt-4 italic pl-1">
          Names and firm details withheld. Quotes reflect real client conversations.
        </p>
      </div>
    </div>
  </section>
);

export default DifferentiatorSection;
