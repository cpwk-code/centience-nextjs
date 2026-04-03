"use client";
import Link from 'next/link';
import { ShieldCheck, ArrowLeft, CheckCircle2, ArrowRight, HardDrive, Clock, Server, FileCheck, AlertTriangle, RefreshCw, Lock, Building2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

const recoveryServices = [
  {
    icon: HardDrive,
    title: "Automated Backup Solutions",
    description: "Continuous, automated backups with multiple redundancy layers ensuring your data is always protected and recoverable.",
    features: ["Real-time data replication", "Incremental & full backups", "Offsite & cloud storage", "Encrypted backup archives", "Automated backup verification"],
  },
  {
    icon: RefreshCw,
    title: "Rapid Recovery",
    description: "Minimize downtime with rapid recovery solutions that get your business back online in minutes, not hours or days.",
    features: ["15-minute recovery time objective (RTO)", "Instant failover capabilities", "Bare-metal restoration", "Virtual machine recovery", "Application-level recovery"],
  },
  {
    icon: Building2,
    title: "Business Continuity Planning",
    description: "Comprehensive planning and documentation to keep your business running during any disruption or disaster scenario.",
    features: ["Business impact analysis", "Continuity plan development", "Crisis communication protocols", "Alternative site planning", "Annual plan testing & updates"],
  },
  {
    icon: FileCheck,
    title: "Compliance Documentation",
    description: "Maintain compliance with regulatory requirements through proper documentation, testing, and audit-ready reporting.",
    features: ["SEC & FINRA compliance", "HIPAA disaster recovery requirements", "Audit trail documentation", "Retention policy management", "Compliance gap remediation"],
  },
  {
    icon: Lock,
    title: "Cybersecurity Integration",
    description: "Disaster recovery that accounts for cyber threats with immutable backups and ransomware-resistant architectures.",
    features: ["Immutable backup copies", "Air-gapped storage options", "Ransomware recovery protocols", "Incident response integration", "Security event correlation"],
  },
  {
    icon: AlertTriangle,
    title: "Risk Assessment & Testing",
    description: "Regular testing and risk assessments ensure your recovery plans work when you need them most.",
    features: ["Quarterly DR testing", "Tabletop exercises", "Full failover simulations", "Recovery time validation", "Gap analysis & remediation"],
  },
];

const complianceFrameworks = [
  { name: "SEC Rule 17a-4", description: "Electronic records retention and backup requirements" },
  { name: "FINRA Rule 4370", description: "Business continuity planning obligations" },
  { name: "HIPAA § 164.308", description: "Contingency plan and disaster recovery requirements" },
  { name: "NIST SP 800-34", description: "Contingency planning guide for IT systems" },
  { name: "SOC 2 Type II", description: "Availability and processing integrity controls" },
  { name: "ISO 22301", description: "Business continuity management systems" },
];

const stats = [
  { value: "15min", label: "Recovery Time Objective" },
  { value: "99.99%", label: "Data Availability" },
  { value: "Zero", label: "Data Loss Guarantee" },
  { value: "99%", label: "Test Success Rate" },
];

const DisasterRecoveryPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Disaster Recovery & Business Continuity | Compuwork"
        description="15-minute recovery, 99.99% data availability and zero-loss backups. Compliance-ready DR planning for SEC, FINRA and HIPAA regulated organizations."
        canonical="/services/disaster-recovery"
        keywords={[
          'disaster recovery services',
          'business continuity planning',
          'data backup solutions',
          'ransomware recovery',
          'IT disaster recovery',
          'compliance disaster recovery',
          'SEC disaster recovery requirements',
          'HIPAA backup requirements',
          'FINRA business continuity',
          'rapid data recovery',
        ]}
        service={{
          serviceType: 'Disaster Recovery & Business Continuity',
          provider: 'Compuwork',
          areaServed: ['New York', 'Florida', 'United States'],
        }}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/#services' },
          { name: 'Disaster Recovery', url: '/services/disaster-recovery' },
        ]}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 mesh-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
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
              Compliance-Ready Disaster Recovery & <span className="text-gradient-gold">Business Continuity</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-primary-foreground/70 mb-4 max-w-2xl"
            >
              Compuwork delivers enterprise backup, rapid recovery, and business continuity solutions for organizations that cannot afford downtime or data loss.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-lg text-primary-foreground/60 mb-8 max-w-2xl"
            >
              With <strong className="text-primary-foreground">15-minute RTO, 99.99% data availability, and zero-loss backups</strong>, we ensure you meet SEC, FINRA, and HIPAA disaster recovery requirements.
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

      {/* Why It Matters Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-6">
                15-Minute RTO & <span className="text-gradient-gold">Zero Data Loss</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                For regulated industries, disaster recovery isn't optional. It's mandatory. SEC, FINRA, and HIPAA all require documented, tested plans that protect critical data and ensure business continuity.
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                Beyond compliance, a robust disaster recovery strategy protects your business from ransomware attacks, hardware failures, natural disasters, and human error, ensuring you can recover quickly and minimize costly downtime.
              </p>
              <div className="space-y-4">
                {[
                  "Meet SEC, FINRA, and HIPAA disaster recovery requirements",
                  "Protect against ransomware with immutable backups",
                  "Minimize downtime with rapid recovery capabilities",
                  "Maintain client trust with proven business continuity",
                  "Pass every audit with comprehensive documentation",
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
                    <div className="text-muted-foreground">Average ransomware recovery time without proper DR</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gradient-gold">60%</div>
                    <div className="text-muted-foreground">Of small businesses close within 6 months of a cyber attack</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Recovery Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
              Automated Backup & <span className="text-gradient-gold">Rapid Recovery Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Immutable backups, instant failover, and ransomware-resistant architectures that keep your business running.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recoveryServices.map((service, index) => (
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
              SEC, FINRA, HIPAA & <span className="text-gradient-gold">SOC 2 DR Requirements</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Documentation and testing that satisfy auditors and demonstrate regulatory compliance.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-6">
              Ready to Protect <span className="text-gradient-gold">Your Business?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Schedule a free disaster recovery assessment and see how we can help you meet compliance requirements while protecting your critical data.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" className="shadow-gold" asChild>
                <Link href="/get-dr-assessment">
                  Get Your Free Disaster Recovery Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/disaster-recovery-checklist">
                  Download Disaster Recovery Checklist
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

export default DisasterRecoveryPage;
