"use client";
import { CheckCircle2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import CountUp from "./CountUp";
import { motion } from "framer-motion";
import { useCMSPageContent } from "@/hooks/useCMS";

const defaultMain = {
  badge: "About Compuwork™",
  headline: "Over Two Decades of",
  headline_highlight: "Trust & Excellence",
  paragraph1: "Founded in 2005 in New York City, Compuwork™ was built on a simple premise: regulated businesses deserve an IT partner who truly understands their compliance needs.",
  paragraph2: "Our clients stay because we deliver what we promise: proactive support, clear reporting, and IT that truly stands up to regulators and stands by you.",
};

const defaultValues = [
  "Proactive, not reactive IT management",
  "Clear reporting and full transparency",
  "Long-term partnerships over quick fixes",
  "Deep regulatory expertise",
  "Measurable, documented results",
  "Technology that stands up to regulators",
];

const defaultStats = {
  years_label: "Years in Business",
  clients_label: "Clients Served",
  audit_label: "Audit Success",
  support_label: "Support Available",
  location_text: "📍 Offices in NYC & South Florida",
};

const About = () => {
  const { content, isLoading } = useCMSPageContent("about");
  
  // Find section contents
  const mainContent = content.find(c => c.section_key === "main");
  const valuesContent = content.find(c => c.section_key === "values");
  const statsContent = content.find(c => c.section_key === "stats");
  
  const mainData = mainContent?.content as Record<string, string> | undefined;
  const valuesData = valuesContent?.content as Record<string, string> | undefined;
  const statsData = statsContent?.content as Record<string, string> | undefined;
  
  // Merge CMS data with defaults
  const main = {
    badge: mainData?.badge || defaultMain.badge,
    headline: mainData?.headline || defaultMain.headline,
    headline_highlight: mainData?.headline_highlight || defaultMain.headline_highlight,
    paragraph1: mainData?.paragraph1 || defaultMain.paragraph1,
    paragraph2: mainData?.paragraph2 || defaultMain.paragraph2,
  };
  
  // Build values array from CMS or defaults
  const values = valuesData 
    ? [
        valuesData.value1 || defaultValues[0],
        valuesData.value2 || defaultValues[1],
        valuesData.value3 || defaultValues[2],
        valuesData.value4 || defaultValues[3],
        valuesData.value5 || defaultValues[4],
        valuesData.value6 || defaultValues[5],
      ].filter(Boolean)
    : defaultValues;
  
  const stats = {
    years_label: statsData?.years_label || defaultStats.years_label,
    clients_label: statsData?.clients_label || defaultStats.clients_label,
    audit_label: statsData?.audit_label || defaultStats.audit_label,
    support_label: statsData?.support_label || defaultStats.support_label,
    location_text: statsData?.location_text || defaultStats.location_text,
  };

  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-gradient-radial from-gold/5 to-transparent opacity-30 -translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <AnimatedSection direction="left">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-gold/10 rounded-full px-5 py-2.5 mb-6"
            >
              <span className="text-gold font-semibold text-sm tracking-wide uppercase">{main.badge}</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-foreground mb-8 leading-tight">
              {main.headline}{" "}
              <span className="text-gradient-gold">{main.headline_highlight}</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              {main.paragraph1}
            </p>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              {main.paragraph2}
            </p>

            {/* Values List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div 
                  key={value} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-foreground font-medium">{value}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right Content - Stats */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  className="bg-primary rounded-3xl p-8 text-center shadow-xl"
                >
                  <p className="text-5xl lg:text-6xl font-bold text-gold mb-2">
                    <CountUp end={20} suffix="+" />
                  </p>
                  <p className="text-primary-foreground/80 font-medium">{stats.years_label}</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className="bg-card border border-border rounded-3xl p-8 text-center shadow-card"
                >
                  <p className="text-5xl lg:text-6xl font-bold text-gradient-gold mb-2">
                    <CountUp end={100} suffix="+" />
                  </p>
                  <p className="text-muted-foreground font-medium">{stats.clients_label}</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className="bg-card border border-border rounded-3xl p-8 text-center shadow-card"
                >
                  <p className="text-5xl lg:text-6xl font-bold text-gradient-gold mb-2">
                    <CountUp end={99} suffix="%+" />
                  </p>
                  <p className="text-muted-foreground font-medium">{stats.audit_label}</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  className="bg-gold-gradient rounded-3xl p-8 text-center shadow-gold-lg"
                >
                  <p className="text-5xl lg:text-6xl font-bold text-primary mb-2">24/7</p>
                  <p className="text-primary/80 font-medium">{stats.support_label}</p>
                </motion.div>
              </div>

              {/* NYC Badge */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-card border border-border rounded-full px-8 py-4 shadow-lg"
              >
                <p className="text-foreground font-semibold text-sm">{stats.location_text}</p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
