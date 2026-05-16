import { TrendingUp, Shield, Brain, Server } from "lucide-react";
import { motion } from "framer-motion";

const opportunities = [
  {
    icon: Brain,
    title: "Deploy AI with documented oversight from day one",
    description: "Deploy AI tools across your organization with documented oversight from day one — not reactive governance after a regulator flags them.",
  },
  {
    icon: TrendingUp,
    title: "Accelerate client service workflows",
    description: "Accelerate client service workflows without creating undocumented AI exposure. Governed AI adoption is a competitive advantage, not a constraint.",
  },
  {
    icon: Shield,
    title: "Onboard new technology inside an existing framework",
    description: "Onboard new technology vendors inside an existing governance framework — not after the fact. Every new tool enters a program that is already running.",
  },
  {
    icon: Server,
    title: "Scale operations without scaling headcount",
    description: "Scale operations without scaling headcount — governed automation with enforced controls already in place. Demonstrate responsible AI use to clients, counterparties, and regulators.",
  },
];

const ProblemSection = () => (
  <section className="py-24 lg:py-32 bg-background">
    <div className="container mx-auto">
      {/* What is Technology Governance intro */}
      <div className="max-w-3xl mb-20">
        <div className="flex items-center gap-3 mb-4">
          <div className="gold-line" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">What is AI Governance</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">
          One Integrated Governance Program. Three Layers. Continuously Operated.
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Centience does not deliver governance frameworks and walk away. We build and operate the governance program — managing your infrastructure, governing your cybersecurity, and overseeing your AI environment as a single continuously enforced model.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Every layer works together. Every control is technically enforced. Every piece of audit evidence is assembled in real time — not reconstructed before an exam.
        </p>
      </div>

      {/* The Opportunity */}
      <div className="max-w-2xl mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="gold-line" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">The Opportunity</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">
          AI Is Reshaping How Regulated Organizations Operate. Governance Is What Makes It Stick.
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Organizations that build governed AI operations gain a durable operational advantage: they can move faster than competitors because their governance infrastructure keeps pace with their technology adoption. Every new AI tool, every new workflow, every new vendor is onboarded into a framework that is already running.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
        {opportunities.map((item, i) => (
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

      {/* Regulatory Stakes */}
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="gold-line" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">The Governance Gap Has a Price Tag</p>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-6">
          SEC, FINRA, and HIPAA enforcement is accelerating — and regulators are now using AI to surface governance gaps faster than manual examination ever could.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { stat: "$2M+", label: "HIPAA civil penalty annual caps per violation category as of January 2026" },
            { stat: "Feb 2025", label: "SEC Cyber and Emerging Technologies Unit launched with explicit AI governance authority" },
            { stat: "$2.3M", label: "FINRA fines in 2025 for automated monitoring and off-channel communications failures" },
            { stat: "$90M", label: "Two Sigma paid to SEC for failing to address known system vulnerabilities" },
          ].map((item) => (
            <div key={item.stat} className="card-premium p-6 flex items-center gap-4 min-h-[96px]">
              <p className="text-2xl font-display font-bold text-gold shrink-0 w-[88px]">{item.stat}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.label}</p>
            </div>
          ))}
        </div>
        <blockquote className="border-l-2 border-accent pl-6 italic text-primary font-medium">
          "The firms that modernize successfully are not the ones that avoid AI. They are the ones that govern it."
        </blockquote>
      </div>
    </div>
  </section>
);

export default ProblemSection;
