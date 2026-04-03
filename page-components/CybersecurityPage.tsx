"use client";
import Link from 'next/link';
import { 
  Shield, 
  ArrowLeft, 
  CheckCircle2, 
  ArrowRight, 
  Lock, 
  Eye, 
  FileCheck, 
  AlertTriangle, 
  Database,
  Users,
  Headphones,
  Wrench,
  Award,
  Clock,
  TrendingUp,
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

const securityServices = [
  {
    icon: Eye,
    title: "24/7 Security Operations Center (SOC)",
    description: "Our US-based SOC provides round-the-clock monitoring with SIEM to detect and respond to threats in real-time, with dedicated security analysts watching your environment.",
    features: ["24/7/365 threat monitoring", "Dedicated security analysts", "Real-time alerting & escalation", "Security event correlation", "Monthly executive reports"],
  },
  {
    icon: Shield,
    title: "Managed Detection & Response (MDR)",
    description: "Advanced endpoint protection with 24/7 threat hunting, containment, and remediation by expert security analysts.",
    features: ["Endpoint detection & response", "Behavioral threat analysis", "Automated threat containment", "Forensic investigation", "Threat intelligence feeds"],
  },
  {
    icon: Lock,
    title: "Vulnerability Management",
    description: "Continuous vulnerability scanning, prioritized remediation guidance, and patch management to close security gaps before attackers exploit them.",
    features: ["Continuous vulnerability scanning", "Risk-based prioritization", "Patch management", "Configuration audits", "Quarterly penetration testing"],
  },
  {
    icon: FileCheck,
    title: "Compliance Documentation",
    description: "Comprehensive policies, procedures, and documentation aligned with SEC, FINRA, HIPAA, and other regulatory frameworks.",
    features: ["Policy development", "Procedure documentation", "Audit preparation", "Gap analysis", "Remediation tracking"],
  },
  {
    icon: Database,
    title: "Data Protection & Network Security",
    description: "Enterprise-grade encryption, firewall management, intrusion prevention, and data loss prevention to safeguard your most sensitive information.",
    features: ["Firewall monitoring & management", "Intrusion detection/prevention", "Data encryption at rest & in transit", "Data loss prevention", "Network segmentation"],
  },
  {
    icon: Users,
    title: "Security Awareness & Phishing Defense",
    description: "Comprehensive training programs and simulated phishing campaigns to transform employees into your first line of defense.",
    features: ["Interactive training modules", "Simulated phishing campaigns", "Compliance training", "Progress tracking", "Quarterly assessments"],
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: "99%+ Audit Success Rate",
    description: "Our clients consistently pass SEC, FINRA, and HIPAA audits with zero findings thanks to our comprehensive compliance approach.",
  },
  {
    icon: TrendingUp,
    title: "Reduce Security Costs 40%+",
    description: "Get enterprise-grade security without building an in-house SOC. Predictable monthly pricing with no surprise costs.",
  },
  {
    icon: Wrench,
    title: "Proactive, Not Reactive",
    description: "We identify and address vulnerabilities before attackers can exploit them, keeping you ahead of emerging threats.",
  },
  {
    icon: Clock,
    title: "15-Minute Response SLA",
    description: "Critical threats receive immediate attention with guaranteed 15-minute response times for priority incidents.",
  },
];

const stats = [
  { value: "99%+", label: "Audit Success Rate" },
  { value: "99%", label: "Threat Prevention" },
  { value: "24/7", label: "Security Monitoring" },
  { value: "15min", label: "Incident Response" },
];

const complianceFrameworks = [
  { name: "SEC", description: "Securities and Exchange Commission cybersecurity requirements" },
  { name: "FINRA", description: "Financial Industry Regulatory Authority security standards" },
  { name: "HIPAA", description: "Health Insurance Portability and Accountability Act" },
  { name: "NIST CSF", description: "National Institute of Standards and Technology Cybersecurity Framework" },
  { name: "SOC 2", description: "Service Organization Control security, availability, and confidentiality" },
  { name: "SOX", description: "Sarbanes-Oxley Act IT controls and data integrity" },
];

const CybersecurityPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Cybersecurity & Compliance for Regulated Industries | Compuwork"
        description="Audit-ready cybersecurity with 99%+ success rate. 24/7 SIEM monitoring, MDR, vulnerability management and compliance documentation for SEC, FINRA and HIPAA."
        canonical="/services/cybersecurity"
        keywords={[
          'cybersecurity for financial services',
          'compliance cybersecurity',
          'SEC cybersecurity requirements',
          'FINRA security compliance',
          'HIPAA security services',
          'SIEM monitoring services',
          'MDR managed detection response',
          'vulnerability management services',
          'cybersecurity audit preparation',
          'regulated industry security',
          'MSSP managed security service provider',
          'SOC as a service',
          '24/7 security monitoring',
          'managed firewall services',
        ]}
        service={{
          serviceType: 'Cybersecurity & Compliance Services',
          provider: 'Compuwork',
          areaServed: ['New York', 'Florida', 'United States'],
        }}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/#services' },
          { name: 'Cybersecurity', url: '/services/cybersecurity' },
        ]}
      />
      
      {/* Semantic Key Facts for AI Search Engines */}
      <KeyFacts
        entityName="Compuwork Cybersecurity & Compliance Services"
        entityType="Service"
        description="Enterprise cybersecurity services with 99%+ audit success rate. Includes 24/7 security monitoring, managed detection and response (MDR), vulnerability management, and compliance documentation for SEC, FINRA, HIPAA, and NIST frameworks."
        facts={[
          { label: "Audit Success Rate", value: "99%+" },
          { label: "Threat Prevention Rate", value: "99%" },
          { label: "Security Monitoring", value: "24/7/365" },
          { label: "Incident Response Time", value: "15 minutes" },
          { label: "Compliance Frameworks", value: "SEC, FINRA, HIPAA, NIST CSF, SOC 2, SOX" },
        ]}
        services={[
          "Security Operations Center (SOC)",
          "24/7 Security Monitoring (SIEM)",
          "Managed Detection & Response (MDR)",
          "Vulnerability Management",
          "Managed Firewall & Network Security",
          "Compliance Documentation",
          "Data Protection & Encryption",
          "Security Awareness Training",
          "Penetration Testing",
          "Phishing Simulations",
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
          website: "https://compuwork.ai/services/cybersecurity",
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
              className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg"
            >
              <Shield className="w-10 h-10 text-white" />
            </motion.div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {["SEC", "FINRA", "HIPAA", "NIST", "SOC 2"].map((framework) => (
                <span key={framework} className="bg-gold/20 text-gold text-sm font-semibold px-4 py-1.5 rounded-full border border-gold/30">
                  {framework}
                </span>
              ))}
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-primary-foreground mb-6"
            >
              Audit-Ready Cybersecurity for <span className="text-gradient-gold">Regulated Industries</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-primary-foreground/70 mb-4 max-w-2xl"
            >
              Compuwork delivers enterprise-grade cybersecurity and compliance services designed for organizations under intense regulatory scrutiny.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-lg text-primary-foreground/60 mb-8 max-w-2xl"
            >
              With <strong className="text-primary-foreground">24/7 SIEM monitoring, MDR, and proactive vulnerability management</strong>, we ensure you pass every SEC, FINRA, and HIPAA audit with confidence.
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

      {/* Why Choose Us Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
              99%+ Audit Success & <span className="text-gradient-gold">24/7 Threat Prevention</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Proactive security that stops threats before they impact your business, and documentation that satisfies regulators.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
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

      {/* Security Services Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
              SIEM, MDR & <span className="text-gradient-gold">Vulnerability Management</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Layered security controls that detect, respond to, and remediate threats before they become breaches.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-card border border-border rounded-2xl p-8 h-full shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
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

      {/* Compliance Frameworks Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
              SEC, FINRA, HIPAA & <span className="text-gradient-gold">NIST Compliance</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Security controls and documentation aligned with the frameworks regulators expect.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceFrameworks.map((framework, index) => (
              <AnimatedSection key={framework.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card border border-border rounded-xl p-6 shadow-card h-full"
                >
                  <h3 className="text-lg font-bold text-gradient-gold mb-2">{framework.name}</h3>
                  <p className="text-muted-foreground text-sm">{framework.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <AlertTriangle className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
              Ready for Your Next <span className="text-gradient-gold">Audit</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Schedule a free security assessment and discover how we can help you achieve and maintain compliance.
            </p>
            <div className="flex justify-center">
              <Button variant="gold" size="xl" className="shadow-gold-lg" asChild>
                <Link href="/free-risk-assessment">
                  Get Your Free Risk Assessment
                  <ArrowRight className="w-5 h-5" />
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

export default CybersecurityPage;
