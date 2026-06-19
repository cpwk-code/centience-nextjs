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
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Governance Assessment</p>
        <div className="gold-line" />
      </div>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
        Know Where You Stand Before Regulators Ask.
      </h2>
      <p className="text-lg opacity-60 leading-relaxed mb-8 max-w-2xl mx-auto">
        Our governance assessment evaluates your technology governance gaps across infrastructure, cybersecurity, and AI — then delivers a prioritized roadmap before your next exam, audit, or client review. Results within 5 business days. No commitment required to proceed.
      </p>

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm opacity-50 mb-12">
        <span>✓ No commitment required</span>
        <span>✓ Results delivered within 5 business days</span>
        <span>✓ Evidence-first governance built for regulated environments</span>
        <span>✓ Ongoing governance program available immediately following assessment</span>
      </div>

      <Button variant="cta" size="xl" asChild>
        <Link href="/resources/assessments">
          Start Free Assessment <ArrowRight size={16} />
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
