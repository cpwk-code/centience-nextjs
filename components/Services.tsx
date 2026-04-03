"use client";
import { Shield, Server, Cloud, Code, Headphones, ShieldCheck, ArrowRight, LucideIcon } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { useCMSServices } from "@/hooks/useCMS";

import { Cpu } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Server,
  Cloud,
  Code,
  Headphones,
  ShieldCheck,
  Cpu,
};

const gradientMap: Record<string, string> = {
  "cybersecurity": "from-amber-500 to-orange-600",
  "governance-msp": "from-blue-500 to-indigo-600",
  "operational-resilience": "from-emerald-500 to-teal-600",
  "ai-compliance": "from-purple-500 to-pink-600",
  "ai-integration": "from-indigo-500 to-violet-600",
  "grc": "from-emerald-500 to-teal-600",
};

// Fallback data for when CMS is loading or empty
const fallbackServices = [
  {
    icon: "Shield",
    name: "Cybersecurity & Compliance",
    slug: "cybersecurity",
    short_description: "Risk assessments, vulnerability patching, and security policy alignment with SEC, FINRA, HIPAA, and NIST frameworks.",
  },
  {
    icon: "Code",
    name: "AI Governance & Risk Management",
    slug: "ai-compliance",
    short_description: "Use AI tools without breaking compliance. We implement secure data ownership and governance controls for safe innovation.",
  },
  {
    icon: "Cpu",
    name: "AI Integration",
    slug: "ai-integration",
    short_description: "Seamlessly integrate AI into Microsoft 365, Google Workspace, and on-premise environments for enhanced productivity.",
  },
  {
    icon: "Server",
    name: "Governance MSP",
    slug: "governance-msp",
    short_description: "Fully managed IT, co-managed augmentation, and 24/7 AI-powered help desk — one partner for all your IT needs.",
  },
  {
    icon: "ShieldCheck",
    name: "Operational Resilience & Recovery",
    slug: "operational-resilience",
    short_description: "Cloud infrastructure, disaster recovery, and business continuity unified to withstand cyber incidents, ransomware, and regulatory mandates.",
  },
  {
    icon: "ShieldCheck",
    name: "Governance, Risk & Compliance",
    slug: "grc",
    short_description: "Structured GRC services that build defensible, audit-ready security programs aligned with NIST, ISO 27001, SOC 2, HIPAA, and more.",
  },
];

interface ServicesProps {
  heading?: string;
  description?: string;
  compactHeading?: boolean;
}

const Services = ({ heading, description, compactHeading = false }: ServicesProps = {}) => {
  const { services: cmsServices, isLoading } = useCMSServices();
  
  // Use CMS data if available, otherwise fallback
  const services = cmsServices.length > 0 ? cmsServices : fallbackServices;

  return (
    <section id="services" className="pt-16 pb-32 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-gold/5 to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-primary/5 to-transparent opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gold/10 rounded-full px-5 py-2.5 mb-6"
          >
            <span className="text-gold font-semibold text-sm tracking-wide uppercase">Our Services</span>
          </motion.div>
          <h2 className={`${compactHeading ? 'text-3xl sm:text-4xl' : 'text-4xl sm:text-5xl lg:text-6xl'} font-bold font-display text-foreground mb-6 leading-tight`}>
            {heading || (
              <>Managed IT Services Built for <span className="text-gradient-gold">Compliance</span></>
            )}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {description || "We don't just manage your IT. We align it with the regulatory frameworks that matter to your business, ensuring every audit is a success."}
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon || "Shield"] || Shield;
            const gradient = gradientMap[service.slug] || "from-amber-500 to-orange-600";
            
            return (
              <AnimatedSection
                key={service.slug}
                delay={index * 0.1}
                direction="up"
              >
                <Link href={`/services/${service.slug}`} className="block h-full">
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="group relative bg-card border border-border rounded-3xl p-8 shadow-card h-full overflow-hidden"
                  >
                    {/* Hover Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold font-display text-foreground mb-3 group-hover:text-gold transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.short_description}
                    </p>
                    
                    {/* Learn More Link */}
                    <div className="flex items-center gap-2 text-gold font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>

                    {/* Border Glow Effect */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gold/20 transition-colors duration-300" />
                  </motion.div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
