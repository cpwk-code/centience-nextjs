import { Server, Shield, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { Search, BookOpen, Cog } from "lucide-react";

const lifecycle = [
  {
    icon: Search,
    number: "01",
    label: "ASSESS",
    title: "Governance Assessment",
    description: "We identify gaps across infrastructure, cybersecurity posture, AI usage, and compliance readiness. Most assessments complete within 5 business days. You receive a prioritized roadmap and a clear picture of where you stand.",
  },
  {
    icon: BookOpen,
    number: "02",
    label: "PLAN",
    title: "Governance Roadmap",
    description: "A structured plan sequenced by risk priority and aligned to your regulatory calendar and technology roadmap. Specific to your organization — not a generic framework.",
  },
  {
    icon: Cog,
    number: "03",
    label: "OPERATE",
    title: "Ongoing Governance Program",
    description: "The roadmap transitions into a continuously managed governance program. Monitoring, evidence collection, AI oversight, and regulatory readiness — maintained as an ongoing function that evolves with your organization.",
  },
];

const programs = [
  {
    icon: Server,
    title: "Managed Infrastructure",
    tag: "Foundation",
    items: [
      "Managed workstations, servers, and cloud environments",
      "Endpoint detection and continuous monitoring",
      "Disaster recovery and business continuity governance",
      "Infrastructure resilience and uptime management",
    ],
  },
  {
    icon: Shield,
    title: "Cybersecurity Governance",
    tag: "Oversight",
    items: [
      "Security posture monitoring and oversight",
      "Vulnerability management and remediation",
      "Vendor and third-party risk evaluation",
      "Compliance readiness monitoring",
    ],
  },
  {
    icon: Brain,
    title: "AI Governance",
    tag: "Strategic Layer",
    items: [
      "AI usage discovery and shadow AI identification",
      "AI governance framework development (NIST AI RMF, ISO 42001)",
      "Ongoing AI monitoring and regulatory readiness",
      "Board-level AI governance reporting",
    ],
  },
];

const CapabilitiesSection = () => (
  <section className="py-24 lg:py-32 bg-muted">
    <div className="container mx-auto">
      {/* Governance Programs by Stack Layer */}
      <div className="max-w-2xl mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="gold-line" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Programs</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">
          Three Integrated Governance Programs. One Accountable Firm.
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Technology governance at Centience is structured as a three-layer stack. Each layer is managed as part of a single ongoing program — not separate engagements delivered by separate vendors.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-24">
        {programs.map((prog, i) => (
          <motion.div
            key={prog.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card-premium p-8"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="w-11 h-11 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                <prog.icon size={20} />
              </div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-accent/60 uppercase">{prog.tag}</span>
            </div>
            <h3 className="font-display font-bold text-primary text-lg mb-5">{prog.title}</h3>
            <ul className="space-y-3">
              {prog.items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Governance Lifecycle */}
      <div className="max-w-2xl mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="gold-line" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Governance Lifecycle</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">
          Assessment → Roadmap → Ongoing Program
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Every engagement follows a structured lifecycle — from initial assessment through to a continuously managed governance program. This is where most firms stop — at the assessment. This is where Centience starts.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {lifecycle.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card-premium p-8 relative"
          >
            <span className="text-3xl font-display font-bold text-teal/30 block mb-3">{step.number}</span>
            <span className="text-[10px] font-bold tracking-[0.3em] text-accent">{step.label}</span>
            <h3 className="font-display font-bold text-primary text-lg mt-2 mb-3">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CapabilitiesSection;
