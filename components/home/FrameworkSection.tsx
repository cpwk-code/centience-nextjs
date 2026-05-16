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
    description: "What it enables: Operational continuity, resilient systems, and the technical foundation that makes every governance layer above it enforceable. You cannot govern what you do not control.",
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
    description: "What it enables: Continuous security posture visibility, vendor risk control, and incident readiness — so a security event does not become a regulatory event.",
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
    description: "What it enables: Confident AI adoption with documented oversight — so your organization can deploy, scale, and benefit from AI without creating the governance gaps regulators are now actively examining.",
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
          Three integrated governance programs — not separate engagements delivered by separate vendors. One accountable firm managing every layer of your technology environment as a single ongoing program.
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
