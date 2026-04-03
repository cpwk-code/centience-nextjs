"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Phone, Sparkles } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import GlowOrb from "./GlowOrb";
import { motion } from "framer-motion";
import { useCMSPageContent } from "@/hooks/useCMS";

const defaultContent = {
  badge: "Get Started Today",
  headline: "Ready to Simplify",
  headline_highlight: "Compliance",
  description: "Schedule a free risk assessment and discover how we can transform your IT infrastructure into a compliance advantage.",
  primary_cta: "Schedule Your Free Assessment",
  secondary_cta: "Call Us (877) 945-7177",
};

const CTA = () => {
  const { content, isLoading } = useCMSPageContent("home");
  
  // Find CTA section content
  const ctaContent = content.find(c => c.section_key === "cta");
  const cmsData = ctaContent?.content as Record<string, string> | undefined;
  
  // Merge CMS data with defaults
  const data = {
    badge: cmsData?.badge || defaultContent.badge,
    headline: cmsData?.headline || defaultContent.headline,
    headline_highlight: cmsData?.headline_highlight || defaultContent.headline_highlight,
    description: cmsData?.description || defaultContent.description,
    primary_cta: cmsData?.primary_cta || defaultContent.primary_cta,
    secondary_cta: cmsData?.secondary_cta || defaultContent.secondary_cta,
  };

  return (
    <section className="py-32 mb-16 mesh-gradient relative overflow-hidden">
      {/* Glow Orbs */}
      <GlowOrb className="top-0 left-1/4" size="lg" color="gold" />
      <GlowOrb className="bottom-0 right-1/4" size="md" color="gold" />

      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 noise pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass-card px-5 py-2.5 mb-8"
          >
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-primary-foreground/80 text-sm font-medium">{data.badge}</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-primary-foreground mb-8 leading-tight">
            {data.headline}{" "}
            <span className="text-gradient-shine">{data.headline_highlight}</span>?
          </h2>
          <p className="text-xl text-primary-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            {data.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button variant="gold" size="xl" className="group shadow-gold-lg" asChild>
                <Link href="/schedule-assessment">
                  <Calendar className="w-5 h-5" />
                  {data.primary_cta}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="tel:+18779457177">
                  <Phone className="w-5 h-5" />
                  {data.secondary_cta}
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 text-primary-foreground/50"
          >
            {["No obligation", "30-minute consultation", "Custom recommendations"].map((item, index) => (
              <motion.div 
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                <span className="text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTA;
