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
      { text: "All three layers, one firm",           yes: false },
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
      { text: "AI, cybersecurity, infrastructure",    yes: true  },
      { text: "One accountable firm for all three",   yes: true  },
    ],
  },
];

const outcomes = [
  {
    industry: "Investment Management",
    result: "An institutional due diligence questionnaire surfaced three unmonitored AI tools in use across the firm — no policy, no DLP controls, no input/output log. Every gap was closed before the next questionnaire cycle. The answers were ready.",
  },
  {
    industry: "Registered Investment Adviser",
    result: "Client data was moving through AI without protection. Books and records requirements apply to every AI input and output — the same rules as email. Controls were live before the first SEC examination question arrived.",
  },
  {
    industry: "Broker-Dealer",
    result: "Shadow AI monitoring found staff using four unapproved platforms with firm data. No one knew the extent of it. The governance program was built and enforced before regulators asked. No remediation requests on examination.",
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
              className="flex items-start gap-5 bg-background border border-border rounded-xl p-6"
            >
              <div className="shrink-0 mt-0.5">
                <span className="inline-block text-[10px] font-bold uppercase tracking-[0.15em] text-accent bg-accent/10 rounded-full px-3 py-1">
                  {o.industry}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{o.result}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground/40 mt-4 italic pl-1">
          Client details withheld. Outcomes based on active engagements.
        </p>
      </div>
    </div>
  </section>
);

export default DifferentiatorSection;
