"use client";
import { ShieldAlert, Scale, Brain, Server } from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  {
    icon: Brain,
    title: "AI tools are outpacing governance",
    description: "Employees are using AI across your organization today. Without a governance framework, every AI tool is a regulatory liability.",
  },
  {
    icon: ShieldAlert,
    title: "Attackers target regulated data",
    description: "Regulated firms hold high-value data. Compliance documentation alone is not a security strategy — you need enforced controls.",
  },
  {
    icon: Scale,
    title: "Regulators are increasing AI scrutiny",
    description: "SEC, FINRA, HIPAA, and emerging AI frameworks now demand demonstrable governance controls — not policies. Evidence.",
  },
  {
    icon: Server,
    title: "Technology moves faster than controls",
    description: "Without infrastructure-level governance oversight, risk accumulates invisibly until an audit or incident reveals it.",
  },
];

const ProblemSection = () => (
  <section className="py-24 lg:py-32 bg-background">
    <div className="container mx-auto">
      {/* What is Technology Governance intro */}
      <div className="max-w-3xl mb-20">
        <div className="flex items-center gap-3 mb-4">
          <div className="gold-line" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">What is Technology Governance</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">
          Oversight for AI, Cybersecurity & Infrastructure
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Technology governance is the discipline of overseeing AI systems, cybersecurity posture, and infrastructure controls to ensure regulatory compliance, operational resilience, and audit readiness.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Effective governance requires control over the infrastructure running the organization. Without operational oversight of systems, governance becomes theoretical rather than enforceable.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Centience delivers technology governance programs built on managed infrastructure, allowing organizations to enforce security policies, monitor AI usage, and maintain regulatory readiness.
        </p>
      </div>

      {/* The Problem */}
      <div className="max-w-2xl mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="gold-line" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">The challenge</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">
          Most regulated firms are exposed — and don't know it yet.
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Most organizations deploy technology faster than they can implement governance controls. Without structured governance oversight, organizations expose themselves to operational risk, regulatory penalties, and security incidents.
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
