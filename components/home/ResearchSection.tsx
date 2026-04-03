import { Brain, Shield, Server } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Brain,
    title: "AI Governance",
    description: "Structured AI governance oversight including AI usage discovery, governance framework development, vendor AI risk evaluation, AI security controls, and regulatory readiness monitoring.",
  },
  {
    icon: Shield,
    title: "Cybersecurity Governance",
    description: "Cybersecurity integrated into the broader governance program through security monitoring oversight, vulnerability management review, incident response governance, and vendor security evaluation.",
  },
  {
    icon: Server,
    title: "Infrastructure Governance",
    description: "Infrastructure governance ensuring technology environments remain resilient and compliant, including architecture oversight, disaster recovery governance, cloud governance, and resilience monitoring.",
  },
];

const ResearchSection = () => (
  <section className="py-24 lg:py-32 bg-muted">
    <div className="container mx-auto">
      <div className="max-w-2xl mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="gold-line" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Governance Services</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">
          Governance Across Every Domain
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Centience provides structured governance oversight across AI, cybersecurity, and infrastructure.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5 mb-10">
        {services.map((svc, i) => (
          <motion.article
            key={svc.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card-premium p-7"
          >
            <div className="w-11 h-11 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-5">
              <svc.icon size={20} />
            </div>
            <h3 className="font-display font-semibold text-primary mb-3 leading-snug text-lg">
              {svc.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{svc.description}</p>
          </motion.article>
        ))}
      </div>

      <div className="text-center">
        <Button variant="cta-outline" size="lg" asChild>
          <Link href="/governance">See All Services</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default ResearchSection;
