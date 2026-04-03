"use client";
import Link from 'next/link';
import { 
  ArrowLeft, 
  ArrowRight, 
  Building2, 
  Shield, 
  CheckCircle2, 
  Lock, 
  Cloud, 
  Headphones, 
  FileCheck, 
  Clock,
  Award,
  Database,
  Eye,
  Zap,
  Users,
  TrendingUp,
  BarChart3,
  RefreshCw,
  Server,
  UserCheck,
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

const ProfessionalServicesPage = () => {
  const { industries, isLoading } = useCMSIndustries();
  const industry = industries.find(ind => ind.slug === 'professional-services');

  // Default SEO values (fallback)
  const defaultSEO = {
    title: "Managed IT & Cybersecurity for Professional Services | Compuwork",
    description: "Audit‑ready IT, cybersecurity, and SOC 2 compliance for accounting firms and consultancies. Secure client data and scale for busy seasons with Compuwork.",
    keywords: [
      // Primary Keywords
      'professional services IT support',
      'accounting firm IT services',
      'consulting firm cybersecurity',
      'SOC 2 compliant IT',
      'CPA firm IT management',
      // Secondary / Long-Tail Keywords
      'SOC 2 Type II certification IT',
      'NIST compliance IT services',
      'professional firm data security',
      'accounting practice technology',
      'client data protection IT',
      'tax season IT scaling',
      'audit-ready IT infrastructure',
      'professional services cloud solutions'
    ]
  };

  // Use CMS data if available, otherwise fall back to defaults
  const seoTitle = industry?.meta_title || defaultSEO.title;
  const seoDescription = industry?.meta_description || defaultSEO.description;
  const seoKeywords = industry?.keywords 
    ? industry.keywords.split(',').map(k => k.trim()) 
    : defaultSEO.keywords;
  const frameworks = ["SOC 2", "NIST", "ISO 27001", "AICPA"];

  const stats = [
    { value: 20, suffix: "+", label: "Years Experience", icon: Clock },
    { value: 99, suffix: "%", label: "Threat Protection", icon: Shield },
    { value: 99.9, suffix: "%", label: "System Uptime", icon: Award },
    { value: 24, suffix: "/7", label: "Support Available", icon: Headphones },
  ];

  const services = [
    {
      icon: Shield,
      title: "Cybersecurity Compliance",
      description: "Controls, documentation, and ongoing monitoring to achieve and maintain SOC 2 Type II certification"
    },
    {
      icon: Cloud,
      title: "Secure Cloud Solutions",
      description: "Cloud infrastructure designed for multi-client environments with proper data segregation and access controls"
    },
    {
      icon: Database,
      title: "Client Data Protection",
      description: "Enterprise-grade encryption and backup solutions protecting sensitive client financial and business data"
    },
    {
      icon: RefreshCw,
      title: "Seasonal Scaling",
      description: "IT resources that flex with demand during busy seasons like tax time without compromising security"
    },
    {
      icon: Server,
      title: "Practice Management",
      description: "Integrated systems connecting your accounting, project management, and client portal tools securely"
    },
    {
      icon: Headphones,
      title: "Priority IT Support",
      description: "24/7 help desk with rapid response times to keep your team productive and clients satisfied"
    },
  ];

  const process = [
    {
      step: "01",
      title: "Assess",
      description: "Comprehensive security assessment identifying gaps in your current IT infrastructure and compliance posture."
    },
    {
      step: "02",
      title: "Design",
      description: "Custom IT architecture designed to meet SOC 2 requirements and client security expectations."
    },
    {
      step: "03",
      title: "Implement",
      description: "Deploy secure systems with proper controls, monitoring, and documentation for audit readiness."
    },
    {
      step: "04",
      title: "Manage",
      description: "Ongoing monitoring, maintenance, and support ensuring continuous compliance and optimal performance."
    },
  ];

  const technicalSafeguards = [
    {
      icon: FileCheck,
      title: "Audit Documentation",
      description: "Comprehensive policies, procedures, and evidence collection ready for SOC 2 and client audits"
    },
    {
      icon: Eye,
      title: "Continuous Monitoring",
      description: "24/7 security monitoring with real-time alerts for suspicious activity and potential threats"
    },
    {
      icon: Lock,
      title: "Client Segregation",
      description: "Secure multi-tenant architecture ensuring complete separation of client data and environments"
    },
    {
      icon: Database,
      title: "Data Encryption",
      description: "AES-256 encryption for data at rest and in transit protecting all confidential information"
    },
    {
      icon: UserCheck,
      title: "Access Management",
      description: "Role-based access controls with multi-factor authentication and privileged access monitoring"
    },
    {
      icon: BarChart3,
      title: "Compliance Reporting",
      description: "Regular security reports demonstrating ongoing compliance to clients and auditors"
    },
  ];

  const benefits = [
    "Achieve SOC 2 Certification",
    "Meet Client Security Requirements",
    "Scale for Busy Seasons",
    "Secure Remote Work",
    "Protect Client Data",
    "Pass Client Audits",
    "Reduce IT Management Time",
    "24/7 System Availability"
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
        canonical="/industries/professional-services"
        keywords={seoKeywords}
        service={{
          serviceType: 'IT Services for Professional Services',
          provider: 'Compuwork',
          areaServed: ['New York', 'Florida', 'United States'],
        }}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Industries', url: '/#industries' },
          { name: 'Professional Services', url: '/industries/professional-services' },
        ]}
        faq={[
          {
            question: 'What is SOC 2 compliance?',
            answer: 'SOC 2 is a security framework that demonstrates your organization meets strict data security standards. We help professional firms achieve and maintain SOC 2 Type II certification through proper controls, documentation, and ongoing monitoring.',
          },
          {
            question: 'Do you support accounting and consulting firms?',
            answer: 'Yes, we specialize in IT services for accounting firms, CPA practices, consulting companies, and professional service organizations. We understand the unique compliance, security, and scalability requirements of these industries.',
          },
          {
            question: 'How do you handle busy season scaling?',
            answer: 'Our infrastructure is designed to scale with your demand during peak periods like tax season, ensuring your team has the IT resources they need without compromising security or compliance.',
          },
        ]}
      />
      
      {/* Semantic Key Facts for AI Search Engines */}
      <KeyFacts
        entityName="Compuwork Professional Services IT"
        entityType="Service"
        description="Managed IT services for accounting firms, consulting companies, and professional services. SOC 2 certification support, secure remote work, and 24/7 IT support."
        facts={[
          { label: "Target Clients", value: "Accounting Firms, Consulting Companies, Professional Services" },
          { label: "Compliance Focus", value: "SOC 2, NIST, ISO 27001, AICPA" },
          { label: "Threat Protection", value: "99%" },
          { label: "System Uptime", value: "99.9%" },
          { label: "Support Availability", value: "24/7/365" },
          { label: "Years Experience", value: "20+" },
        ]}
        services={[
          "Cybersecurity Compliance Support",
          "Secure Cloud Solutions",
          "Client Data Protection",
          "Seasonal IT Scaling",
          "Practice Management Integration",
          "24/7 Help Desk Support",
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
          website: "https://compuwork.ai/industries/professional-services",
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
                className="w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg"
              >
                <Building2 className="w-10 h-10 text-white" />
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
                Audit‑Ready IT & Cybersecurity for{" "}
                <span className="text-gradient-gold">Professional Services</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-primary-foreground/70 mb-4"
              >
                Compuwork delivers expert managed IT services and cybersecurity solutions designed specifically for professional service organizations that clients trust with sensitive data. With deep experience supporting SOC 2‑aligned firms, Compuwork ensures your systems stay secure, your documentation stays audit‑ready, and your team stays confident year‑round.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-lg text-primary-foreground/60 mb-8"
              >
                From cybersecurity compliance to seasonal scaling, <strong className="text-primary-foreground">we help you meet client expectations.</strong>
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
              Why Professional Firms{" "}
              <span className="text-gradient-gold">Choose Compuwork</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              When clients demand proof of your security practices, your IT partner must deliver audit-ready infrastructure, <strong className="text-foreground">not just technology support.</strong>
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-primary rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-xl"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <TrendingUp className="w-10 h-10 text-gold" />
                <span className="text-gold font-bold text-lg">Your IT Department</span>
              </div>
              <p className="text-primary-foreground text-xl md:text-2xl leading-relaxed">
                We act as your{" "}
                <span className="text-gold font-bold">in-house IT department</span>, delivering comprehensive technology management, cybersecurity compliance support, and 24/7 monitoring so you can focus on serving your clients.
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
              <span className="text-gradient-gold">Client‑Facing Firms</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive managed IT services designed for the unique security, compliance, and scalability needs of professional service firms.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card border border-border rounded-2xl p-8 h-full shadow-card hover:shadow-card-hover transition-shadow"
                >
                  <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-emerald-500" />
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
              <span className="text-gradient-gold">Stand Up to Client Audits</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              A proven approach to achieving cybersecurity compliance and meeting client security requirements.
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
              <span className="text-gradient-gold">SOC 2 & NIST Requirements</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive security controls designed to protect client data and satisfy audit requirements.
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
                Our managed IT services address the unique challenges professional service firms face: from protecting client data to scaling for busy seasons.
              </p>
              <Button variant="gold" size="lg" className="shadow-gold" asChild>
                <Link href="/contact">
                  Get Your Free Assessment
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
              Ready to Secure{" "}
              <span className="text-gradient-gold">Your Practice</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Schedule a free assessment and discover how Compuwork can transform your IT infrastructure into a competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" className="shadow-gold-lg" asChild>
                <Link href="/get-started">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="tel:+18779457177">
                  Call Us
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProfessionalServicesPage;
