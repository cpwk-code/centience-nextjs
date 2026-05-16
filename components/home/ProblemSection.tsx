import { ShieldAlert, Scale, Brain, Server } from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  {
    icon: Brain,
    title: "AI tools are deployed without governance",
    description: "Employees are using AI across your organization today — often without disclosure, risk assessment, or governance controls. Every unsanctioned AI tool is a regulatory liability.",
  },
  {
    icon: ShieldAlert,
    title: "Policies exist. Enforcement doesn't.",
    description: "Most organizations have AI and cybersecurity policies. Few have programs that technically enforce them. The gap between policy and enforcement is where incidents and regulatory findings originate.",
  },
  {
    icon: Scale,
    title: "Regulators are demanding evidence, not documentation",
    description: "SEC, FINRA, HIPAA, and emerging AI frameworks now require demonstrable governance controls — not policy documents. Regulators want to see what you actually do, not what you say you do.",
  },
  {
    icon: Server,
    title: "No single firm owns the full governance stack",
    description: "Infrastructure, cybersecurity, and AI governance are typically managed by separate vendors with no unified oversight. That fragmentation creates gaps that regulators and attackers exploit.",
  },
];

const ProblemSection = () => (
  <section className="py-24 lg:py-32 bg-background">
    <div className="container mx-auto">
      {/* What is AI Governance intro */}
      <div className="max-w-3xl mb-20">
        <div className="flex items-center gap-3 mb-4">
          <div className="gold-line" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">What is AI Governance</p>
        </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">
          Oversight for AI, Cybersecurity & Infrastructure — Technically Enforced
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          AI governance is the discipline of overseeing AI systems, cybersecurity posture, and infrastructure controls to ensure regulatory compliance, operational resilience, and audit readiness.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Effective AI governance requires control over the infrastructure running the organization. Without operational ownership of systems, governance becomes theoretical rather than enforceable.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Centience delivers AI and technology governance programs built on managed infrastructure — allowing organizations to enforce AI policies, monitor usage, and maintain regulatory readiness continuously.
        </p>
      </div>

      {/* The Problem */}
      <div className="max-w-2xl mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="gold-line" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">The challenge</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">
          Most regulated organizations are exposed to AI governance risk — and don't know it yet.
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Most organizations have adopted AI tools faster than they have implemented governance controls. Without a structured AI governance program, organizations expose themselves to regulatory penalties, security incidents, and operational failures that are difficult to defend to auditors.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {problems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card-premium p-7"
          >
            <div className="w-11 h-11 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-5">
              <item.icon size={20} />
            </div>
            <h3 className="font-display font-semibold text-primary text-[15px] mb-2 leading-snug">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
