import { Server, Shield, Brain, Database } from "lucide-react";
import { motion } from "framer-motion";
import { Search, Layers, Cog, FileCheck, BarChart3, RefreshCw } from "lucide-react";

const lifecycle = [
  {
    icon: Search,
    number: "01",
    label: "BASELINE",
    title: "Free Governance Score",
    description: "Take the free Governance Score to see where you stand across infrastructure, cybersecurity, AI usage, vendor risk, and compliance readiness — an instant 0–100 score, a peer benchmark, and a prioritized gap map before the program begins.",
  },
  {
    icon: Layers,
    number: "02",
    label: "BUILD",
    title: "Program Construction",
    description: "Policies, control frameworks, evidence structures, AI registers, vendor risk processes, and reporting templates — built for your specific regulatory environment, not adapted from a generic template.",
  },
  {
    icon: Cog,
    number: "03",
    label: "OPERATE",
    title: "Continuous Operation",
    description: "The program runs continuously. Infrastructure is managed, controls are enforced, AI tools are monitored, vendors are assessed, and support is provided — as an ongoing function, not a project.",
  },
  {
    icon: FileCheck,
    number: "04",
    label: "EVIDENCE",
    title: "Real-Time Evidence Assembly",
    description: "Audit evidence is assembled continuously — logs, access reviews, policy attestations, AI oversight records, and vendor assessments. Nothing is reconstructed before an exam.",
  },
  {
    icon: BarChart3,
    number: "05",
    label: "REPORT",
    title: "Monthly & Quarterly Reporting",
    description: "Monthly governance status reports and quarterly executive control reports — so leadership always knows where the program stands and what is open.",
  },
  {
    icon: RefreshCw,
    number: "06",
    label: "IMPROVE",
    title: "Continuous Improvement",
    description: "As regulations change, AI tools evolve, and your organization grows, the program adapts. New tools enter the framework. New requirements are addressed. The governance layer never falls behind.",
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
    icon: Database,
    title: "Data Governance",
    tag: "Control",
    items: [
      "Data classification and sensitive data inventory",
      "Records retention aligned to FINRA 17a-4, HIPAA, and SEC",
      "Data lineage and AI audit trails",
      "Access control governance and audit logs",
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
          Four Integrated Governance Programs. One Accountable Firm.
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Technology governance at Centience is structured as a four-layer stack: infrastructure, cybersecurity, data, and AI. Each layer is managed as part of a single ongoing program — not separate engagements delivered by separate vendors.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
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
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">How the Program Works</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">
          Baseline → Build → Operate → Evidence → Report → Improve
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          The Centience Governance Program follows a structured operating rhythm. Most firms stop at an assessment. Centience starts there and runs the program continuously from that point forward.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
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
      <blockquote className="border-l-2 border-accent pl-6 italic text-primary font-medium text-lg">
        &ldquo;This is where most firms stop — at the assessment. This is where Centience starts.&rdquo;
      </blockquote>
    </div>
  </section>
);

export default CapabilitiesSection;
