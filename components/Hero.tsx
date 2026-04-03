"use client";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2, ArrowRight, Sparkles, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { lazy, Suspense, useEffect, useState } from "react";
import CountUp from "./CountUp";
import { useCMSPageContent } from "@/hooks/useCMS";

// Lazy load heavy visual effects — they are NOT part of LCP
const ParticleBackground = lazy(() => import("./ParticleBackground"));
const GlowOrb = lazy(() => import("./GlowOrb"));
const FloatingCard = lazy(() => import("./FloatingCard"));

const defaultContent = {
  badge: "Trusted by 100+ Financial & Healthcare Firms",
  headline: "AI Security, Cybersecurity, & Technology Governance",
  headline_highlight: "Audit Ready Services for Regulated Industries",
  subheadline: "Stop dreading audits. We align your technology, policies, and documentation with SEC, FINRA, NIST, HIPAA, and other frameworks so your next audit feels like a formality, not a fire drill.",
  primary_cta: "Schedule Your Free Assessment",
  secondary_cta: "View Our Services",
};

const Hero = () => {
  const { content, isLoading } = useCMSPageContent("home");
  const [showEffects, setShowEffects] = useState(false);

  // Defer heavy visual effects until after first paint
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setShowEffects(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);
  
  // Find hero section content
  const heroContent = content.find(c => c.section_key === "hero");
  const cmsData = heroContent?.content as Record<string, string> | undefined;
  
  // Merge CMS data with defaults
  const data = {
    badge: cmsData?.badge || defaultContent.badge,
    headline: cmsData?.headline || defaultContent.headline,
    headline_highlight: cmsData?.headline_highlight || defaultContent.headline_highlight,
    subheadline: cmsData?.subheadline || defaultContent.subheadline,
    primary_cta: cmsData?.primary_cta || defaultContent.primary_cta,
    secondary_cta: cmsData?.secondary_cta || defaultContent.secondary_cta,
  };

  const trustBadges = [
    "SEC/FINRA Compliant",
    "HIPAA Certified",
    "NIST CSF Aligned",
  ];

  return (
    <section className="relative min-h-[70vh] mesh-gradient overflow-hidden pt-20">
      {/* Deferred visual effects — loaded AFTER LCP */}
      {showEffects && (
        <Suspense fallback={null}>
          <ParticleBackground />
          <GlowOrb className="top-20 right-10" size="lg" color="gold" />
          <GlowOrb className="bottom-40 left-10" size="md" color="gold" />
          <GlowOrb className="top-1/2 left-1/3" size="xl" color="navy" />
        </Suspense>
      )}

      {/* Animated Grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Noise Texture */}
      <div className="absolute inset-0 noise pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(70vh-5rem)] py-8 lg:py-0 gap-8">
          {/* Left Content — This IS the LCP element */}
          <div className="flex-1 max-w-2xl">
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 glass-card px-5 py-2.5 mb-8"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-primary-foreground/90 text-sm font-medium">
                {data.badge}
              </span>
            </motion.div>

            {/* SEO H1 - visually hidden for accessibility/SEO */}
            <h1 className="sr-only">Managed IT Services in USA</h1>

            {/* Visual Headline — PRIMARY LCP TARGET */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-display text-primary-foreground leading-[1.2] mb-6">
              {data.headline}
              <br />
              <span className="text-gradient-shine">{data.headline_highlight}</span>
            </h2>

            {/* AI Compliance Subheadline */}
            <p className="text-lg sm:text-xl text-gold font-semibold mb-4 max-w-xl">
              Compuwork secures your AI implementations while ensuring regulatory compliance.
            </p>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-primary-foreground/70 mb-8 leading-relaxed max-w-xl">
              {data.subheadline}
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              {trustBadges.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 glass-card px-4 py-2 border-glow"
                >
                  <CheckCircle2 className="w-4 h-4 text-gold" />
                  <span className="text-primary-foreground/90 text-sm font-medium">
                    {badge}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="lg" className="group animate-pulse-glow" asChild>
                <Link href="/schedule-assessment">
                  Schedule Your Free Assessment
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="hero" size="lg" asChild>
                <a href="tel:+18779457177">
                  <Phone className="w-5 h-5" />
                  Call Us (877) 945-7177
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Stats Card (deferred animations) */}
          <div className="flex-1 max-w-lg w-full">
            <div className="relative">
              {/* Main Stats Card */}
              {showEffects ? (
                <Suspense fallback={<StatsCardContent />}>
                  <FloatingCard intensity="gentle" delay={0}>
                    <StatsCardContent />
                  </FloatingCard>
                </Suspense>
              ) : (
                <StatsCardContent />
              )}

              {/* Floating Badge */}
              {showEffects && (
                <Suspense fallback={null}>
                  <FloatingCard intensity="moderate" delay={1}>
                    <div className="absolute -bottom-4 -right-4 glass-card px-3 py-2 border border-gold/20">
                      <div className="flex items-center gap-1.5">
                        <Shield className="w-3 h-3 text-gold" />
                        <p className="text-primary-foreground/80 font-semibold text-xs tracking-wide uppercase">Enterprise Grade Security</p>
                      </div>
                    </div>
                  </FloatingCard>

                  <FloatingCard intensity="gentle" delay={2}>
                    <div className="absolute -top-4 -left-4 glass-card px-4 py-2 border border-gold/30">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-gold" />
                        <span className="text-primary-foreground text-xs font-medium">Trusted Since 2005</span>
                      </div>
                    </div>
                  </FloatingCard>
                </Suspense>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

/** Static stats card — renders immediately without motion wrappers */
const StatsCardContent = () => (
  <div className="glass-card p-8 shadow-2xl relative overflow-hidden border border-gold/20">
    <div className="absolute inset-0 animate-shimmer opacity-20" />
    
    <div className="flex items-center gap-3 mb-8 relative z-10">
      <div className="w-10 h-10 bg-gold-gradient rounded-lg flex items-center justify-center shadow-gold">
        <Shield className="w-5 h-5 text-primary" />
      </div>
      <h3 className="text-primary-foreground font-bold text-xl">
        Why Firms Choose Us
      </h3>
    </div>
    
    <div className="space-y-5 relative z-10">
      {[
        { end: 99, suffix: "%+", title: "Audit Success Rate", desc: "Across all clients audit" },
        { end: 20, suffix: "+", title: "Years of Excellence", desc: "Serving NYC, CT & South Florida" },
        { end: 0, suffix: "", title: "Avg. Response Time", desc: "24/7/365 expert support", label: "15m" },
        { end: 99, suffix: "%", title: "Threats Prevented", desc: "Proactive patching & monitoring" },
      ].map((stat, i) => (
        <div key={i} className="group flex items-center gap-4 p-4 rounded-xl bg-primary/30 hover:bg-primary/40 transition-all duration-300 border border-white/5">
          <div className="w-16 h-16 bg-gold-gradient rounded-xl flex items-center justify-center flex-shrink-0 shadow-gold group-hover:scale-110 transition-transform duration-300">
            <span className="text-primary font-bold text-xl">
              {stat.label || <CountUp end={stat.end} suffix={stat.suffix} />}
            </span>
          </div>
          <div>
            <p className="text-primary-foreground font-bold text-lg">{stat.title}</p>
            <p className="text-primary-foreground/60 text-sm">{stat.desc}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-6 pt-6 border-t border-white/10 relative z-10">
      <div className="flex items-center justify-between">
        <span className="text-primary-foreground/70 text-sm">Join 100+ firms</span>
        <div className="flex -space-x-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-8 h-8 rounded-full bg-gold-gradient border-2 border-primary flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-primary" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
