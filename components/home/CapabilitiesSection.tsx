import { Server, Shield, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { Search, BookOpen, Cog } from "lucide-react";

const lifecycle = [
  {
    icon: Search,
    number: "01",
    label: "ASSESS",
    title: "Governance Assessment",
    description: "Organizations begin with a governance assessment identifying risks across infrastructure, cybersecurity posture, AI usage, and compliance readiness.",
  },
  {
    icon: BookOpen,
    number: "02",
    label: "PLAN",
    title: "Governance Roadmap",
    description: "Following the assessment, Centience develops a governance roadmap outlining the steps required to establish structured oversight.",
  },
  {
    icon: Cog,
    number: "03",
    label: "OPERATE",
    title: "Ongoing Governance Program",
    description: "The roadmap transitions into an ongoing governance program providing continuous monitoring and regulatory readiness.",
  },
];

const programs = [
  {
    icon: Server,
    title: "Infrastructure Governance",
    tag: "Foundation",
    items: [
      "Managed infrastructure platform",
      "Infrastructure monitoring and resilience",
      "Endpoint and cloud management",
      "Disaster recovery governance",
    ],
  },
  {
    icon: Shield,
    title: "Cybersecurity Governance",
    tag: "Oversight",
    items: [
      "Security posture monitoring",
      "Vulnerability oversight",
      "Vendor risk management",
      "Compliance readiness",
    ],
  },
  {
    icon: Brain,
    title: "AI & Technology Governance",
    tag: "Strategic Layer",
    items: [
      "AI governance frameworks",
      "Technology risk oversight",
      "Regulatory readiness",
      "Executive and board-level reporting",
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
          Governance Programs
        </h2>
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
          Assessment → Roadmap → Program
        </h2>
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
