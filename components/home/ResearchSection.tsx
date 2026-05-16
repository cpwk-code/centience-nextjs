import { Brain, Shield, Server } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Brain,
    title: "AI Governance",
    description: "Discover AI usage across your organization, build governance frameworks aligned to NIST AI RMF and ISO 42001, implement approved AI tools inside governed infrastructure, and monitor compliance continuously. Aligned to SEC, FINRA, and HIPAA requirements.",
  },
  {
    icon: Shield,
    title: "Cybersecurity Governance",
    description: "Continuous security posture monitoring, vulnerability management, vendor and third-party risk evaluation, incident response governance, and compliance readiness documentation — technically enforced at the infrastructure level, not advisory.",
  },
  {
    icon: Server,
    title: "Infrastructure Governance",
    description: "Managed workstations, servers, cloud environments, and endpoints with 24/7 monitoring, defined SLAs, and disaster recovery governance. The technical foundation that makes every cybersecurity and AI governance layer above it enforceable.",
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
          One Integrated Governance Program. Three Layers. Continuously Operated.
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Centience does not deliver governance frameworks and walk away. We build and operate the governance program — managing your infrastructure, governing your cybersecurity, and overseeing your AI environment as a single continuously enforced model.
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
          <Link href="/governance">See All Governance Programs</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default ResearchSection;
