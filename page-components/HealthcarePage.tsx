"use client";
import Link from 'next/link';
import { 
  ArrowLeft, 
  ArrowRight, 
  Heart, 
  Shield, 
  CheckCircle2, 
  Lock, 
  Server, 
  Cloud, 
  Headphones, 
  FileCheck, 
  Activity,
  AlertTriangle,
  Database,
  Mail,
  RefreshCw,
  Eye,
  Clock,
  Users,
  Award,
  TrendingUp,
  Zap,
  Stethoscope,
  Loader2,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import CountUp from "@/components/CountUp";
import GlowOrb from "@/components/GlowOrb";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import KeyFacts from "@/components/KeyFacts";
import { useCMSIndustries } from "@/hooks/useCMS";

const HealthcarePage = () => {
  const { industries, isLoading } = useCMSIndustries();
  const industry = industries.find(ind => ind.slug === 'healthcare');

  // Default SEO values (fallback)
  const defaultSEO = {
    title: "HIPAA Compliant IT Services for Healthcare | Compuwork",
    description: "Secure, HIPAA-compliant IT and cybersecurity for medical and dental practices. Protect ePHI, pass HHS audits, and keep systems running 24/7 with Compuwork.",
    keywords: [
      // Primary Keywords
      'HIPAA compliant IT services',
      'healthcare IT support',
      'medical practice IT',
      'dental IT services',
      'healthcare cybersecurity',
      // Secondary / Long-Tail Keywords
      'HIPAA security risk assessment',
      'ePHI protection services',
      'HITECH compliance IT',
      'HHS audit preparation',
      'healthcare data security',
      'medical office IT management',
      'EHR EMR IT support',
      'healthcare cloud solutions'
    ]
  };

  // Use CMS data if available, otherwise fall back to defaults
  const seoTitle = industry?.meta_title || defaultSEO.title;
  const seoDescription = industry?.meta_description || defaultSEO.description;
  const seoKeywords = industry?.keywords 
    ? industry.keywords.split(',').map(k => k.trim()) 
    : defaultSEO.keywords;
  const frameworks = ["HIPAA", "HITECH", "PHI Protection", "HHS Compliance"];

  const stats = [
    { value: 20, suffix: "+", label: "Years Experience", icon: Clock },
    { value: 99, suffix: "%", label: "HIPAA Compliant", icon: Shield },
    { value: 99.9, suffix: "%", label: "System Uptime", icon: Activity },
    { value: 24, suffix: "/7", label: "Support Available", icon: Headphones },
  ];

  const services = [
    {
      icon: AlertTriangle,
      title: "Disaster Recovery",
      description: "Comprehensive data backups and recovery plans that ensure business continuity and protect patient data"
    },
    {
      icon: RefreshCw,
      title: "Software Updates",
      description: "Proactive patch management to keep all systems secure and compliant with the latest security standards"
    },
    {
      icon: Shield,
      title: "Firewall Management",
      description: "Enterprise-grade firewall installation and ongoing management to protect your network perimeter"
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "Secure, HIPAA-compliant cloud solutions that enable flexible access while maintaining data protection"
    },
    {
      icon: Mail,
      title: "Email Encryption",
      description: "End-to-end encryption for all email communications containing protected health information"
    },
    {
      icon: Headphones,
      title: "Helpdesk & On-Site Support",
      description: "24/7 technical support with rapid response times to keep your practice running smoothly"
    },
  ];

  const process = [
    {
      step: "01",
      title: "Assess",
      description: "Comprehensive HIPAA security risk assessment to identify vulnerabilities in your systems and workflows."
    },
    {
      step: "02",
      title: "Secure",
      description: "Implement technical safeguards including encryption, access controls, and audit logging."
    },
    {
      step: "03",
      title: "Monitor",
      description: "Continuous monitoring and threat detection to identify potential breaches before they impact patient care."
    },
    {
      step: "04",
      title: "Document",
      description: "Maintain comprehensive compliance documentation ready for HHS audits and HIPAA examinations."
    },
  ];

  const technicalSafeguards = [
    {
      icon: FileCheck,
      title: "HIPAA Compliance Checklist",
      description: "Clear understanding of what your healthcare practice needs to stay ahead of regulatory requirements"
    },
    {
      icon: Eye,
      title: "Risk Assessments",
      description: "Regular evaluations that identify vulnerabilities in your systems and procedures to demonstrate compliance during audits"
    },
    {
      icon: Lock,
      title: "Access Control",
      description: "Technical controls ensuring only authorized team members can access protected health information"
    },
    {
      icon: Database,
      title: "Data Encryption",
      description: "Enhanced protection for ePHI at rest and in transit, including secure file sharing capabilities"
    },
    {
      icon: Activity,
      title: "Audit Logs",
      description: "Comprehensive tracking that maintains compliance documentation in a consistent manner"
    },
    {
      icon: Shield,
      title: "Continuous Monitoring",
      description: "Proactive oversight detecting potential data breaches and cyber threats before they impact patient care"
    },
  ];

  const benefits = [
    "Meet Current HIPAA Regulations",
    "Provide Frequent Reports of Our Processes",
    "Disaster Recovery & Business Continuity",
    "Compliance with Government Regulations",
    "Ensure Applications are Operational 24/7",
    "Increase Security and Protection",
    "Reduce Overall Time Spent on IT",
    "Prevent System Failures"
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-gold" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonical="/industries/healthcare"
        keywords={seoKeywords}
        service={{
          serviceType: 'HIPAA Compliant IT Services',
          provider: 'Compuwork',
          areaServed: ['New York', 'Florida', 'United States'],
        }}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Industries', url: '/#industries' },
          { name: 'Healthcare', url: '/industries/healthcare' },
        ]}
        faq={[
          {
            question: 'What is HIPAA-compliant IT?',
            answer: 'HIPAA-compliant IT encompasses the technical safeguards required to protect electronic Protected Health Information (ePHI), including encryption, access controls, audit logs, and backup procedures mandated by the HIPAA Security Rule.',
          },
          {
            question: 'Do you support medical and dental practices?',
            answer: 'Yes, we specialize in IT services for medical practices, dental offices, clinics, and healthcare organizations of all sizes. We understand the unique compliance and operational requirements of healthcare.',
          },
          {
            question: 'How do you help with HHS audits?',
            answer: 'We maintain comprehensive compliance documentation, conduct regular security risk assessments, and implement technical safeguards that satisfy HHS audit requirements for covered entities and business associates.',
          },
        ]}
      />
      
      {/* Semantic Key Facts for AI Search Engines */}
      <KeyFacts
        entityName="Compuwork Healthcare IT Services"
        entityType="Service"
        description="HIPAA-compliant managed IT services for healthcare providers, medical practices, dental offices, and clinics. Protect ePHI, ensure HHS compliance, and maintain 24/7 system availability."
        facts={[
          { label: "Target Clients", value: "Medical Practices, Dental Offices, Clinics, Healthcare Organizations" },
          { label: "Compliance Frameworks", value: "HIPAA, HITECH, PHI Protection, HHS Requirements" },
          { label: "System Uptime", value: "99.9%" },
          { label: "Support Availability", value: "24/7/365" },
          { label: "Years Serving Healthcare", value: "20+" },
          { label: "HIPAA Compliance Rate", value: "99%" },
        ]}
        services={[
          "HIPAA Compliance & Documentation",
          "ePHI Protection & Encryption",
          "Disaster Recovery & Business Continuity",
          "24/7 Help Desk Support",
          "EHR/EMR System Support",
          "Security Monitoring & Threat Detection",
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
          website: "https://compuwork.ai/industries/healthcare",
        }}
      />

      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 mesh-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <GlowOrb className="top-20 right-10" size="lg" color="gold" />
        <GlowOrb className="bottom-20 left-10" size="md" color="gold" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/#industries" className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-gold mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Industries
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-20 h-20 bg-rose-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg"
              >
                <Heart className="w-10 h-10 text-white" />
              </motion.div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {frameworks.map((framework) => (
                  <span key={framework} className="bg-gold/20 text-gold text-sm font-semibold px-4 py-1.5 rounded-full border border-gold/30">
                    {framework}
                  </span>
                ))}
              </div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-primary-foreground mb-6 leading-tight"
              >
                HIPAA-Compliant IT & Cybersecurity for{" "}
                <span className="text-gradient-gold">Healthcare</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-primary-foreground/70 mb-4"
              >
                Compuwork delivers expert managed IT services and cybersecurity solutions designed specifically for healthcare organizations operating under strict regulatory oversight. With deep experience supporting HIPAA-regulated practices, Compuwork ensures your systems stay secure, your documentation stays audit-ready, and your team stays confident year-round.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-lg text-primary-foreground/60 mb-8"
              >
                From safeguarding ePHI to passing HHS audits, <strong className="text-primary-foreground">we make compliance effortless.</strong>
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
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

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-6 text-center"
                >
                  <stat.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                  <p className="text-3xl font-bold text-primary-foreground mb-1">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-primary-foreground/60 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
              Why Healthcare Providers{" "}
              <span className="text-gradient-gold">Choose Compuwork</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              When patient safety depends on data security, your IT partner must understand healthcare's unique challenges: <strong className="text-foreground">not just technology.</strong>
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-primary rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-xl"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Stethoscope className="w-10 h-10 text-gold" />
                <span className="text-gold font-bold text-lg">Healthcare IT Specialists</span>
              </div>
              <p className="text-primary-foreground text-xl md:text-2xl leading-relaxed">
                With over a decade of experience supporting medical and dental practices, we deliver{" "}
                <span className="text-gold font-bold">comprehensive data security, disaster recovery, and continuous monitoring</span>{" "}
                built specifically for covered entities and business associates.
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
              Cybersecurity Built for{" "}
              <span className="text-gradient-gold">Regulated Healthcare</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We help medical and dental practices slash the cost of buying and managing technology, from strategy and planning to full outsourced management.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card border border-border rounded-2xl p-8 h-full shadow-card hover:shadow-card-hover transition-shadow"
                >
                  <div className="w-14 h-14 bg-rose-500/10 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 mesh-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <GlowOrb className="top-1/2 left-1/4 -translate-y-1/2" size="xl" color="gold" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-primary-foreground mb-6">
              Documentation & Governance That{" "}
              <span className="text-gradient-gold">Stand Up to HHS Audits</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              A systematic approach to data protection that addresses every aspect of HIPAA requirements.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.15}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-8 text-center h-full"
                >
                  <div className="text-5xl font-bold text-gold/30 mb-4">{item.step}</div>
                  <h3 className="text-2xl font-bold font-display text-primary-foreground mb-4">{item.title}</h3>
                  <p className="text-primary-foreground/70">{item.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Safeguards Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider mb-4 block">Technical Safeguards</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
              Stay Compliant with{" "}
              <span className="text-gradient-gold">HIPAA & HITECH Requirements</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Maintaining HIPAA compliance requires more than basic security standards. We implement all required safeguards.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSafeguards.map((safeguard, index) => (
              <AnimatedSection key={safeguard.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card border border-border rounded-2xl p-6 h-full shadow-card hover:shadow-card-hover transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <safeguard.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-display text-foreground mb-2">{safeguard.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{safeguard.description}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider mb-4 block">What You Get</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
                24/7 IT Support That Minimizes{" "}
                <span className="text-gradient-gold">Risk and Downtime</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our HIPAA-compliant IT services address the unique challenges healthcare providers face: from safeguarding ePHI to meeting Security Rule and Privacy Rule requirements.
              </p>
              <Button variant="gold" size="lg" className="shadow-gold" asChild>
                <Link href="/free-risk-assessment">
                  Get Your Free Risk Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-3 bg-card border border-border rounded-xl p-4 shadow-card"
                  >
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <Zap className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
              Ready to Achieve{" "}
              <span className="text-gradient-gold">HIPAA Compliance</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our healthcare IT specialists and get a comprehensive assessment of your compliance posture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" className="shadow-gold-lg" asChild>
                <Link href="/get-started">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/contact">
                  Download HIPAA Guide
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HealthcarePage;
