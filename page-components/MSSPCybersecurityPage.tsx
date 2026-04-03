"use client";
import Link from 'next/link';
import { 
  ShieldCheck, 
  ArrowLeft, 
  CheckCircle2, 
  ArrowRight, 
  Lock, 
  Eye, 
  FileCheck, 
  AlertTriangle, 
  Server,
  Users,
  Headphones,
  Globe,
  Award,
  Clock,
  TrendingUp,
  Zap,
  Activity,
  ShieldAlert,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import GlowOrb from "@/components/GlowOrb";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import KeyFacts from "@/components/KeyFacts";

const msspServices = [
  {
    icon: Eye,
    title: "Security Operations Center (SOC)",
    description: "Our US-based SOC provides 24/7/365 monitoring, threat detection, and incident response with dedicated security analysts watching your environment.",
    features: ["24/7/365 threat monitoring", "Dedicated security analysts", "Real-time alerting & escalation", "Threat intelligence integration", "Monthly executive reports"],
  },
  {
    icon: ShieldAlert,
    title: "Managed SIEM",
    description: "Enterprise-grade Security Information and Event Management with log correlation, behavioral analysis, and automated threat detection.",
    features: ["Log aggregation & correlation", "Behavioral anomaly detection", "Custom detection rules", "Compliance log retention", "Automated threat hunting"],
  },
  {
    icon: Lock,
    title: "Managed Detection & Response (MDR)",
    description: "Advanced endpoint protection with 24/7 threat hunting, containment, and remediation by expert security analysts.",
    features: ["Endpoint detection & response", "24/7 threat hunting", "Automated containment", "Forensic investigation", "Remediation assistance"],
  },
  {
    icon: Globe,
    title: "Managed Firewall & Network Security",
    description: "Expert management of your firewall infrastructure with continuous monitoring, policy optimization, and threat prevention.",
    features: ["Firewall monitoring & management", "Intrusion detection/prevention", "Network segmentation", "VPN management", "Traffic analysis"],
  },
  {
    icon: FileCheck,
    title: "Vulnerability Management as a Service",
    description: "Continuous vulnerability scanning, prioritized remediation guidance, and patch management to close security gaps.",
    features: ["Continuous vulnerability scanning", "Risk-based prioritization", "Remediation tracking", "Patch management", "Quarterly penetration testing"],
  },
  {
    icon: Users,
    title: "Security Awareness & Phishing Defense",
    description: "Comprehensive training programs and simulated phishing campaigns to transform employees into your first line of defense.",
    features: ["Interactive training modules", "Simulated phishing campaigns", "Real-time reporting", "Compliance training", "Executive dashboards"],
  },
];

const whyMSSP = [
  {
    icon: Clock,
    title: "24/7/365 Protection",
    description: "Cyber threats don't take holidays. Our SOC operates around the clock to detect and respond to threats in real-time.",
  },
  {
    icon: TrendingUp,
    title: "Reduce Security Costs 40%+",
    description: "Get enterprise-grade security without the cost of building an in-house SOC. Predictable monthly pricing with no surprise costs.",
  },
  {
    icon: Award,
    title: "Expert Security Team",
    description: "Access certified security professionals (CISSP, CISM, CEH) who stay current with evolving threats and compliance requirements.",
  },
  {
    icon: Zap,
    title: "15-Minute Response SLA",
    description: "Critical threats receive immediate attention with guaranteed 15-minute response times for priority incidents.",
  },
];

const stats = [
  { value: "24/7", label: "SOC Monitoring" },
  { value: "15min", label: "Response SLA" },
  { value: "40%+", label: "Cost Reduction" },
  { value: "99.9%", label: "Threat Prevention" },
];

const industries = [
  { name: "Financial Services", description: "SEC, FINRA, and SOX compliance-ready security" },
  { name: "Healthcare", description: "HIPAA-compliant security monitoring and response" },
  { name: "Legal", description: "Client confidentiality and data protection" },
  { name: "Accounting", description: "IRS, AICPA, and SOC compliance security" },
  { name: "Manufacturing", description: "OT/IT security and supply chain protection" },
  { name: "Professional Services", description: "Client data security and business continuity" },
];

const MSSPCybersecurityPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="MSSP Cybersecurity Services | Managed Security Service Provider | Compuwork"
        description="Enterprise MSSP cybersecurity with 24/7 SOC, managed SIEM, MDR, and vulnerability management. Reduce security costs 40%+ with our managed security services."
        canonical="/services/mssp-cybersecurity"
        keywords={[
          'MSSP',
          'managed security service provider',
          'managed security services',
          'SOC as a service',
          'managed SIEM',
          'MDR managed detection response',
          '24/7 security monitoring',
          'cybersecurity outsourcing',
          'managed firewall services',
          'vulnerability management service',
        ]}
        service={{
          serviceType: 'MSSP Cybersecurity Services',
          provider: 'Compuwork',
          areaServed: ['New York', 'Florida', 'United States'],
        }}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/#services' },
          { name: 'MSSP Cybersecurity', url: '/services/mssp-cybersecurity' },
        ]}
      />
      
      {/* Semantic Key Facts for AI Search Engines */}
      <KeyFacts
        entityName="Compuwork MSSP Cybersecurity Services"
        entityType="Service"
        description="Managed Security Service Provider (MSSP) offering 24/7 SOC monitoring, managed SIEM, MDR, vulnerability management, and compliance-ready security for regulated industries. Reduce security costs 40%+ with enterprise-grade protection."
        facts={[
          { label: "SOC Monitoring", value: "24/7/365" },
          { label: "Incident Response SLA", value: "15 minutes" },
          { label: "Cost Reduction", value: "40%+" },
          { label: "Threat Prevention Rate", value: "99.9%" },
          { label: "Compliance Support", value: "SEC, FINRA, HIPAA, NIST, CMMC" },
        ]}
        services={[
          "Security Operations Center (SOC)",
          "Managed SIEM",
          "Managed Detection & Response (MDR)",
          "Managed Firewall & Network Security",
          "Vulnerability Management as a Service",
          "Security Awareness Training",
          "Penetration Testing",
          "Incident Response",
        ]}
        locations={[
          "New York, NY",
          "White Plains, NY",
          "Miami, FL",
          "Palm Beach Gardens, FL",
        ]}
        contactInfo={{
          phone: "(877) 945-7177",
          email: "info@compuwork.ai",
          website: "https://compuwork.ai/services/mssp-cybersecurity",
        }}
      />

      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 mesh-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <GlowOrb className="top-20 right-10" size="lg" color="gold" />
        <GlowOrb className="bottom-20 left-10" size="md" color="gold" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/#services" className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-gold mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
          
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg"
            >
              <ShieldCheck className="w-10 h-10 text-white" />
            </motion.div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {["24/7 SOC", "SIEM", "MDR", "Managed Firewall", "Vulnerability Mgmt"].map((service) => (
                <span key={service} className="bg-gold/20 text-gold text-sm font-semibold px-4 py-1.5 rounded-full border border-gold/30">
                  {service}
                </span>
              ))}
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-primary-foreground mb-6"
            >
              MSSP Cybersecurity: <span className="text-gradient-gold">Enterprise Security, Managed</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-primary-foreground/70 mb-4 max-w-2xl"
            >
              Get 24/7 security operations center protection without building your own SOC. Our MSSP services deliver enterprise-grade cybersecurity at a fraction of the cost.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-lg text-primary-foreground/60 mb-8 max-w-2xl"
            >
              <strong className="text-primary-foreground">Managed SIEM, MDR, and 24/7 threat monitoring</strong> with 15-minute response SLAs. Reduce security costs 40%+ while improving your security posture.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="gold" size="lg" className="shadow-gold" asChild>
                <Link href="/schedule-assessment">
                  Schedule Your Free Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="tel:+18779457177">
                  <Phone className="w-5 h-5" />
                  Call Us (877) 945-7177
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-gradient-gold mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why MSSP Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
              Why Choose a <span className="text-gradient-gold">Managed Security Provider</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Building an in-house SOC costs $1M+ annually. Our MSSP model gives you enterprise security at a predictable monthly cost.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyMSSP.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card border border-border rounded-2xl p-8 h-full shadow-card hover:shadow-card-hover transition-shadow"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-gold to-gold-light rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-navy" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* MSSP Services Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
              Complete MSSP <span className="text-gradient-gold">Security Stack</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From SOC monitoring to vulnerability management, we provide end-to-end managed security services.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {msspServices.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-card border border-border rounded-2xl p-8 h-full shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Protect Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
              Industries We <span className="text-gradient-gold">Protect</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Compliance-ready MSSP services tailored to your industry's unique regulatory requirements.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <AnimatedSection key={industry.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card border border-border rounded-xl p-6 shadow-card"
                >
                  <h3 className="text-lg font-bold text-gradient-gold mb-2">{industry.name}</h3>
                  <p className="text-muted-foreground text-sm">{industry.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
              How Our MSSP <span className="text-gradient-gold">Works</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Seamless onboarding to 24/7 protection in weeks, not months.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Security Assessment", description: "We evaluate your current security posture, identify gaps, and design your MSSP solution." },
              { step: "2", title: "Solution Design", description: "Custom security stack based on your industry, compliance needs, and risk profile." },
              { step: "3", title: "Deployment", description: "Non-disruptive deployment of monitoring agents, SIEM integration, and SOC connectivity." },
              { step: "4", title: "24/7 Protection", description: "Ongoing monitoring, threat detection, incident response, and continuous improvement." },
            ].map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-navy">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold font-display text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <Activity className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
              Ready for 24/7 <span className="text-gradient-gold">Security Protection</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Get a free MSSP assessment and discover how managed security can reduce your risk and costs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="xl" className="shadow-gold-lg" asChild>
                <Link href="/free-risk-assessment">
                  Get Your Free MSSP Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              No commitment required
            </p>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MSSPCybersecurityPage;
