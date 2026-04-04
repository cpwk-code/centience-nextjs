"use client";
import { Server, Shield, Brain, FileCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const cards = [
  {
    icon: Server,
    title: "Managed Infrastructure",
    description:
      "Computers, networks, cloud, and endpoints — fully managed, monitored, and governed 24/7.",
  },
  {
    icon: Shield,
    title: "Cybersecurity Operations",
    description:
      "Security monitoring, vulnerability management, incident response, and compliance controls — continuously enforced.",
  },
  {
    icon: Brain,
    title: "AI Governance & Monitoring",
    description:
      "AI usage discovery, governance frameworks, and continuous monitoring across your organization's AI environment.",
  },
  {
    icon: FileCheck,
    title: "Audit-Ready Evidence",
    description:
      "Continuous evidence collection means your documentation is assembled before the auditor arrives — not after.",
  },
];

const stats = [
  { value: "100%", label: "Audit Success Rate" },
  { value: "24/7", label: "Infrastructure Monitoring" },
  { value: "20+", label: "Years Technical Operations" },
  { value: "1,000+", label: "Regulated Organizations Served" },
];

const TechnicalFoundation = () => (
  <section className="py-24 lg:py-32 bg-muted">
    <div className="container mx-auto">
      <div className="max-w-3xl mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="gold-line" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            The Technical Difference
          </p>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">
          Governance Enforced at the Infrastructure Level
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Most governance firms deliver frameworks, policies, and documentation. Centience delivers
          governance that is technically enforced — because we own and operate the infrastructure it
          runs on.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We manage the computers, networks, cloud environments, endpoints, and communication
          systems inside your organization. That operational control is what makes our governance
          programs enforceable — not advisory.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          When a policy is in place, we can verify it. When a control is required, we can implement
          it. When an auditor requests evidence, we have already assembled it.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card-premium p-7"
          >
            <div className="w-11 h-11 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-5">
              <card.icon size={20} />
            </div>
            <h3 className="font-display font-bold text-primary text-base mb-2">{card.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Stats bar */}
      <div className="rounded-xl border border-border bg-background p-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-display font-bold text-accent">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button variant="cta" size="xl" asChild>
            <Link href="/governance">
              See How It Works <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default TechnicalFoundation;
