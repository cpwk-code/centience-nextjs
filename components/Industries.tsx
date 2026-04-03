"use client";
import { Landmark, Scale, Heart, Building2, ArrowRight, LucideIcon, HandHeart } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { useCMSIndustries } from "@/hooks/useCMS";

const iconMap: Record<string, LucideIcon> = {
  Landmark,
  Scale,
  Heart,
  Building2,
  HandHeart,
};

const colorMap: Record<string, string> = {
  "financial-services": "bg-amber-500",
  "legal": "bg-blue-500",
  "healthcare": "bg-rose-500",
  "professional-services": "bg-emerald-500",
  "non-profit": "bg-purple-500",
};

// Fallback data for when CMS is loading or empty
const fallbackIndustries = [
  {
    icon: "Landmark",
    name: "Financial Services",
    slug: "financial-services",
    key_regulations: ["SEC", "FINRA", "SOX"],
    short_description: "Broker-dealers, RIAs, hedge funds, and private equity firms trust us to maintain audit-ready systems.",
  },
  {
    icon: "Scale",
    name: "Legal",
    slug: "legal",
    key_regulations: ["ABA", "State Bar", "Client Confidentiality"],
    short_description: "Law firms rely on us for secure document management and privileged communication protection.",
  },
  {
    icon: "Heart",
    name: "Healthcare",
    slug: "healthcare",
    key_regulations: ["HIPAA", "HITECH", "PHI Protection"],
    short_description: "Medical practices and healthcare organizations depend on us for HIPAA-compliant IT infrastructure.",
  },
  {
    icon: "Building2",
    name: "Professional Services",
    slug: "professional-services",
    key_regulations: ["SOC 2", "NIST", "ISO 27001"],
    short_description: "Accounting firms and consultancies partner with us for security-first technology management.",
  },
  {
    icon: "HandHeart",
    name: "Non-Profit",
    slug: "non-profit",
    key_regulations: ["Donor Protection", "TechSoup", "Cybersecurity"],
    short_description: "Nonprofits with 25–200 users trust us for secure, reliable IT that lets them focus on their mission.",
  },
];

const Industries = () => {
  const { industries: cmsIndustries, isLoading } = useCMSIndustries();
  
  // Use CMS data if available, otherwise fallback
  const industries = cmsIndustries.length > 0 ? cmsIndustries : fallbackIndustries;

  return (
    <section id="industries" className="py-32 mesh-gradient relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 noise pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass-card px-5 py-2.5 mb-6"
          >
            <span className="text-gold font-semibold text-sm tracking-wide uppercase">Industries We Serve</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-primary-foreground mb-6 leading-tight">
            Experts in{" "}
            <span className="text-gradient-gold">Regulated Industries</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            We specialize in industries where compliance isn't optional. It's essential. 
            Our deep regulatory knowledge sets us apart.
          </p>
        </AnimatedSection>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {industries.map((industry, index) => {
            const IconComponent = iconMap[industry.icon || "Building2"] || Building2;
            const color = colorMap[industry.slug] || "bg-amber-500";
            const regulations = Array.isArray(industry.key_regulations) 
              ? industry.key_regulations as string[]
              : [];
            
            return (
              <AnimatedSection
                key={industry.slug}
                delay={index * 0.15}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <Link href={`/industries/${industry.slug}`} className="block h-full">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="group relative glass-card p-8 rounded-3xl overflow-hidden cursor-pointer h-full"
                  >
                    {/* Background Glow on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 flex-1">
                        <motion.div 
                          whileHover={{ rotate: 5, scale: 1.1 }}
                          className={`w-16 h-16 sm:w-20 sm:h-20 ${color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                        >
                          <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                        </motion.div>
                        <div className="flex-1 flex flex-col">
                          <h3 className="text-xl sm:text-2xl font-bold font-display text-primary-foreground mb-3 group-hover:text-gold transition-colors">
                            {industry.name}
                          </h3>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {regulations.map((framework) => (
                              <span
                                key={framework}
                                className="bg-gold/20 text-gold text-xs font-semibold px-3 py-1.5 rounded-full border border-gold/30"
                              >
                                {framework}
                              </span>
                            ))}
                          </div>
                          <p className="text-primary-foreground/70 leading-relaxed mb-4 flex-1">
                            {industry.short_description}
                          </p>
                          
                          {/* Learn More */}
                          <div className="flex items-center gap-2 text-gold font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-auto">
                            <span>Learn How We Help</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Industries;
