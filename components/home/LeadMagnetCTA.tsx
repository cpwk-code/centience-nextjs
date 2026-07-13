import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const LeadMagnetCTA = () => (
  <section className="section-navy py-24 lg:py-32 relative overflow-hidden">
    {/* Decorative circles */}
    <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full border border-gold/5" />
    <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full border border-gold/5" />

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="container mx-auto text-center max-w-3xl relative z-10"
    >
      <div className="flex items-center gap-3 justify-center mb-6">
        <div className="gold-line" />
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Free Governance Score</p>
        <div className="gold-line" />
      </div>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
        Know Where You Stand Before Regulators Ask.
      </h2>
      <p className="text-lg opacity-60 leading-relaxed mb-8 max-w-2xl mx-auto">
        The free Governance Score evaluates your technology governance posture across infrastructure, cybersecurity, AI usage, and compliance readiness — then delivers an instant 0–100 score, a peer benchmark, and a prioritized gap map — free, with no commitment.
      </p>

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm opacity-50 mb-12">
        <span>✓ Instant results — your score in minutes</span>
        <span>✓ Covers AI, cybersecurity, infrastructure, and vendor risk</span>
        <span>✓ Evidence-first — built for regulated environments</span>
        <span>✓ See exactly which gaps to close first</span>
      </div>

      <Button variant="cta" size="xl" asChild>
        <Link href="/assessments/governance-score">
          Get Your Free Assessment <ArrowRight size={16} />
        </Link>
      </Button>
      <p className="text-sm opacity-50 mt-6">
        Or call us directly:{" "}
        <a href="tel:+18779457177" className="text-gold hover:text-gold/80 transition-colors font-semibold">
          (877) 945-7177
        </a>
      </p>
    </motion.div>
  </section>
);

export default LeadMagnetCTA;
