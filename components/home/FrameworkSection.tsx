import { Server, Shield, Brain } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const layers = [
  {
    icon: Server,
    label: "FOUNDATION",
    title: "Managed Infrastructure",
    subtitle: "Managed Infrastructure",
    description: "Governance begins with control over the infrastructure running the organization. Centience manages workstations, servers, cloud environments, endpoints, and disaster recovery frameworks — ensuring systems remain secure, resilient, and compliant.",
    items: [
      "Managed workstations, servers, and cloud environments",
      "Endpoint detection and continuous monitoring",
      "Disaster recovery and business continuity governance",
      "Infrastructure resilience and uptime management",
    ],
  },
  {
    icon: Shield,
    label: "OVERSIGHT",
    title: "Cybersecurity Governance",
    subtitle: "Security Oversight",
    description: "Cybersecurity is a governance responsibility requiring continuous oversight. Centience provides cybersecurity governance programs that monitor security posture, evaluate risks, and ensure organizations maintain regulatory readiness — continuously, not just at audit time.",
    items: [
      "Security posture monitoring and oversight",
      "Vulnerability management and remediation",
      "Vendor and third-party risk evaluation",
      "Incident response governance",
      "Compliance readiness monitoring",
    ],
  },
  {
    icon: Brain,
    label: "STRATEGIC LAYER",
    title: "AI Governance",
    subtitle: "Strategic Governance",
    description: "AI governance is the strategic layer of the Centience model. We discover AI usage, build governance frameworks, implement approved AI tools, and manage ongoing AI oversight — ensuring every AI deployment is compliant, documented, and defensible to regulators.",
    items: [
      "AI usage discovery and shadow AI identification",
      "AI governance framework development (NIST AI RMF, ISO 42001)",
      "AI implementation inside governed infrastructure",
      "Ongoing AI monitoring and regulatory readiness",
      "Board-level AI governance reporting",
    ],
  },
];

const FrameworkSection = () => (
  <section className="section-navy py-24 lg:py-32 relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-[0.02]"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--warm-white)) 1px, transparent 0)`,
        backgroundSize: "40px 40px",
      }}
    />

    <div className="container mx-auto relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="flex items-center gap-3 justify-center mb-4">
          <div className="gold-line" />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">The Governance Stack</p>
          <div className="gold-line" />
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-5 leading-tight">
          The Centience Governance Stack
        </h2>
        <p className="opacity-60 leading-relaxed">
          Centience structures AI and technology governance as a three-layer stack. Each layer is technically enforced, continuously monitored, and operationally managed — not delivered as a one-time assessment or policy document.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-10">
        {layers.map((layer, i) => (
          <motion.div
            key={layer.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="relative group"
          >
            <div className="rounded-xl border border-border/10 bg-primary/20 backdrop-blur-sm p-7 hover:border-gold/20 transition-all duration-300 h-full flex flex-col">
              <span className="text-[10px] font-bold tracking-[0.3em] text-gold mb-3">{layer.label}</span>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                  <layer.icon size={18} className="text-gold" />
                </div>
                <h3 className="font-display font-bold text-lg">{layer.title}</h3>
              </div>
              <p className="text-sm opacity-60 leading-relaxed mb-5">{layer.description}</p>
              <ul className="space-y-2 mt-auto">
                {layer.items.map((item) => (
                  <li key={item} className="text-sm opacity-50 flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Button variant="cta-outline" size="lg" asChild>
          <Link href="/ai-governance">See How the Governance Stack Works</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default FrameworkSection;
