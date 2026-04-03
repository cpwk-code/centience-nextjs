"use client";
import Link from 'next/link';
import { 
  ShieldCheck, ArrowLeft, CheckCircle2, ArrowRight, HardDrive, Clock, Server, FileCheck, 
  AlertTriangle, RefreshCw, Lock, Building2, Phone, Cloud, Monitor, Globe, Database, 
  Headphones, Zap, TrendingUp, Shield, Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import GlowOrb from "@/components/GlowOrb";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import KeyFacts from "@/components/KeyFacts";

const resilienceServices = [
  {
    icon: HardDrive,
    title: "Automated Backup & Recovery",
    description: "Continuous, automated backups with immutable storage and rapid failover ensuring your data is always protected and recoverable.",
    features: ["Real-time data replication", "15-minute recovery time objective (RTO)", "Immutable backup copies", "Bare-metal & VM restoration", "Automated backup verification"],
  },
  {
    icon: Building2,
    title: "Business Continuity Planning",
    description: "Comprehensive planning and documentation to keep your business running during cyber incidents, natural disasters, or supply chain disruptions.",
    features: ["Business impact analysis", "Crisis communication protocols", "Alternative site planning", "Annual plan testing & updates", "Tabletop exercises & simulations"],
  },
  {
    icon: Lock,
    title: "Cyber Incident Recovery",
    description: "Ransomware-resistant architectures and incident response integration to recover from cyber attacks with minimal business impact.",
    features: ["Ransomware recovery protocols", "Air-gapped storage options", "Incident response integration", "Security event correlation", "Post-incident forensics"],
  },
  {
    icon: Monitor,
    title: "Microsoft 365 & Azure",
    description: "Full Microsoft cloud deployment, management, and optimization for enterprise-grade productivity with built-in resilience.",
    features: ["Microsoft 365 Administration", "Azure Cloud Infrastructure", "Exchange Online & Teams", "Intune Device Management", "Geo-redundant deployment"],
  },
  {
    icon: Globe,
    title: "Google Workspace & Hybrid Cloud",
    description: "Complete cloud management for Google Workspace and hybrid environments with compliance-ready architecture.",
    features: ["Gmail & Calendar Administration", "Google Drive Management", "Hybrid Cloud Integration", "User Provisioning & SSO", "Workspace Security Policies"],
  },
  {
    icon: Server,
    title: "Private Cloud & Infrastructure",
    description: "Dedicated private cloud environments for organizations requiring maximum control, security, and regulatory compliance.",
    features: ["Dedicated Cloud Infrastructure", "Custom Security Configurations", "Compliance-Ready Architecture", "Performance Optimization", "99.9% Uptime SLA"],
  },
  {
    icon: Database,
    title: "Cloud Backup & Geo-Redundancy",
    description: "Enterprise-grade cloud backup with geographic redundancy to protect against regional outages and ensure data sovereignty.",
    features: ["Geographic redundancy", "Point-in-time recovery", "Compliance archiving", "Zero-downtime migration", "Cost optimization"],
  },
  {
    icon: Headphones,
    title: "Hosted VoIP & Communications",
    description: "Cloud-based phone systems and unified communications with built-in failover to keep your team connected during disruptions.",
    features: ["Cloud Phone Systems", "Video Conferencing", "Unified Communications", "Mobile Integration", "Call Recording & Analytics"],
  },
  {
    icon: FileCheck,
    title: "Regulatory Compliance & Documentation",
    description: "Audit-ready documentation and testing that satisfy SEC, FINRA, HIPAA, DORA, and NIST resilience requirements.",
    features: ["SEC cyber disclosure compliance", "FINRA Rule 4370 adherence", "HIPAA contingency planning", "DORA operational resilience", "NIST resilience frameworks"],
  },
];

const complianceFrameworks = [
  { name: "SEC Cyber Disclosure Rules", description: "Incident reporting and cyber risk management requirements" },
  { name: "FINRA Rule 4370", description: "Business continuity planning obligations for broker-dealers" },
  { name: "HIPAA § 164.308", description: "Contingency plan and disaster recovery requirements" },
  { name: "DORA (EU)", description: "Digital Operational Resilience Act for financial entities" },
  { name: "NIST SP 800-34", description: "Contingency planning guide for IT systems" },
  { name: "NIST CSF 2.0", description: "Recover function for resilience and restoration" },
  { name: "SOC 2 Type II", description: "Availability and processing integrity controls" },
  { name: "ISO 22301", description: "Business continuity management systems" },
];

const riskScenarios = [
  { icon: Shield, title: "Cyber Incidents", description: "Data breaches, network intrusions, and targeted attacks on critical infrastructure." },
  { icon: Lock, title: "Ransomware Attacks", description: "Encryption-based extortion that can shut down operations for weeks without proper resilience." },
  { icon: Activity, title: "AI System Failures", description: "Model drift, data pipeline failures, and AI-dependent process breakdowns." },
  { icon: FileCheck, title: "Regulatory Compliance", description: "SEC, FINRA, HIPAA, and DORA mandates requiring documented resilience capabilities." },
  { icon: AlertTriangle, title: "Supply Chain Disruptions", description: "Third-party vendor failures, SaaS outages, and cascading dependency risks." },
  { icon: Cloud, title: "Cloud Outages", description: "Regional cloud failures, misconfiguration events, and platform-level incidents." },
];

const stats = [
  { value: "15min", label: "Recovery Time Objective" },
  { value: "99.99%", label: "Data Availability" },
  { value: "99.9%", label: "Cloud Uptime SLA" },
  { value: "Zero", label: "Data Loss Guarantee" },
];

const OperationalResiliencePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Operational Resilience & Recovery | Cloud, DR & Business Continuity | Compuwork"
        description="Board-level operational resilience: cloud infrastructure, disaster recovery, and business continuity for cyber incidents, ransomware, AI failures, and regulatory compliance. SEC, FINRA, HIPAA, DORA ready."
        canonical="/services/operational-resilience"
        keywords={[
          'operational resilience',
          'disaster recovery services',
          'business continuity planning',
          'cloud solutions for business',
          'ransomware recovery',
          'cyber incident recovery',
          'DORA compliance',
          'SEC cyber disclosure',
          'NIST resilience framework',
          'cloud migration services',
          'Microsoft 365 managed services',
          'Azure cloud hosting',
          'private cloud compliance',
          'AI system failure recovery',
          'supply chain risk management',
        ]}
        service={{
          serviceType: 'Operational Resilience & Recovery',
          provider: 'Compuwork',
          areaServed: ['New York', 'Florida', 'United States'],
        }}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/#services' },
          { name: 'Operational Resilience & Recovery', url: '/services/operational-resilience' },
        ]}
      />
      
      <KeyFacts
        entityName="Compuwork Operational Resilience & Recovery"
        entityType="Service"
        description="Board-level operational resilience combining secure cloud infrastructure, disaster recovery, and business continuity for regulated organizations. Covers cyber incidents, ransomware, AI system failures, regulatory compliance, supply chain disruptions, and cloud outages."
        facts={[
          { label: "Recovery Time Objective", value: "15 minutes" },
          { label: "Data Availability", value: "99.99%" },
          { label: "Cloud Uptime SLA", value: "99.9%" },
          { label: "Cloud Platforms", value: "Microsoft Azure, Google Cloud, Private Cloud" },
          { label: "Compliance Frameworks", value: "SEC, FINRA, HIPAA, DORA, NIST, SOC 2, ISO 22301" },
          { label: "Support Availability", value: "24/7/365" },
        ]}
        services={[
          "Automated Backup & Rapid Recovery",
          "Business Continuity Planning",
          "Cyber Incident & Ransomware Recovery",
          "Microsoft 365 & Azure Deployment",
          "Google Workspace Management",
          "Private Cloud Hosting",
          "Cloud Backup & Geo-Redundancy",
          "Hosted VoIP & Communications",
          "Regulatory Compliance Documentation",
          "Zero-Downtime Cloud Migration",
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
          website: "https://compuwork.ai/services/operational-resilience",
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
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-primary-foreground mb-6"
            >
              Operational Resilience & <span className="text-gradient-gold">Recovery</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-primary-foreground/70 mb-4 max-w-2xl"
            >
              Compuwork delivers board-level operational resilience — combining secure cloud infrastructure, disaster recovery, and business continuity — so your organization can withstand and recover from any disruption.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-lg text-primary-foreground/60 mb-8 max-w-2xl"
            >
              From <strong className="text-primary-foreground">ransomware and cyber incidents</strong> to <strong className="text-primary-foreground">cloud outages and AI system failures</strong> — we ensure your organization meets SEC, FINRA, HIPAA, and DORA resilience mandates.
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

      {/* Risk Scenarios Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
              Board-Level <span className="text-gradient-gold">Risk Management</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Operational resilience isn't IT operations — it's enterprise risk management. We protect against the threats that keep boards and regulators up at night.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {riskScenarios.map((scenario, index) => (
              <AnimatedSection key={scenario.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-card border border-border rounded-2xl p-6 h-full shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                    <scenario.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{scenario.title}</h3>
                  <p className="text-muted-foreground text-sm">{scenario.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-6">
                15-Minute RTO & <span className="text-gradient-gold">Zero Data Loss</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Regulators are moving beyond traditional DR. SEC cyber disclosure rules, DORA, and NIST resilience frameworks now demand organizations demonstrate the ability to absorb, adapt to, and recover from disruptions — not just back up data.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                Our operational resilience approach combines cloud infrastructure, disaster recovery, and business continuity into a unified strategy that protects against ransomware, cloud outages, AI failures, and supply chain disruptions.
              </p>
              <div className="space-y-4">
                {[
                  "Meet SEC, FINRA, HIPAA, and DORA resilience requirements",
                  "Protect against ransomware with immutable, air-gapped backups",
                  "Maintain operations during cloud and infrastructure outages",
                  "Recover from AI system failures and data pipeline breakdowns",
                  "Pass every audit with comprehensive documentation",
                  "Reduce infrastructure costs by 40% with optimized cloud",
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Server className="w-8 h-8 text-gold" />
                  <h3 className="text-2xl font-bold text-foreground">The Cost of Downtime</h3>
                </div>
                <div className="space-y-6">
                  <div className="border-b border-border pb-4">
                    <div className="text-3xl font-bold text-gradient-gold">$5,600</div>
                    <div className="text-muted-foreground">Average cost per minute of IT downtime</div>
                  </div>
                  <div className="border-b border-border pb-4">
                    <div className="text-3xl font-bold text-gradient-gold">21 Days</div>
                    <div className="text-muted-foreground">Average ransomware recovery time without proper resilience</div>
                  </div>
                  <div className="border-b border-border pb-4">
                    <div className="text-3xl font-bold text-gradient-gold">60%</div>
                    <div className="text-muted-foreground">Of small businesses close within 6 months of a cyber attack</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gradient-gold">40%</div>
                    <div className="text-muted-foreground">Infrastructure cost reduction with optimized cloud</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Resilience Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
              Cloud, Recovery & <span className="text-gradient-gold">Resilience Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Secure cloud infrastructure, automated backup, rapid recovery, and compliance-ready business continuity — unified under one resilience strategy.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resilienceServices.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-card border border-border rounded-2xl p-8 h-full shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
              SEC, DORA, NIST & <span className="text-gradient-gold">Resilience Mandates</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Documentation and testing that satisfy auditors and demonstrate operational resilience compliance across global frameworks.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceFrameworks.map((framework, index) => (
              <AnimatedSection key={framework.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card border border-border rounded-xl p-6"
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-6">
              Ready to Build <span className="text-gradient-gold">Operational Resilience?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Schedule a free assessment and see how we can help you build board-level resilience across cloud infrastructure, disaster recovery, and business continuity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" className="shadow-gold" asChild>
                <Link href="/get-dr-assessment">
                  Get Your Free Resilience Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/disaster-recovery-checklist">
                  Download DR Checklist
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

export default OperationalResiliencePage;
