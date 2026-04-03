"use client";
import Link from 'next/link';
import { 
  ArrowLeft, 
  ArrowRight, 
  Scale, 
  Shield, 
  CheckCircle2, 
  Lock, 
  Cloud, 
  Headphones, 
  FileCheck, 
  Clock,
  Users,
  Award,
  Database,
  Mail,
  Eye,
  Zap,
  FileText,
  Briefcase,
  Search,
  FolderLock,
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

const LegalPage = () => {
  const { industries, isLoading } = useCMSIndustries();
  const industry = industries.find(ind => ind.slug === 'legal');

  // Default SEO values (fallback)
  const defaultSEO = {
    title: "Managed IT & Cybersecurity for Law Firms | Compuwork",
    description: "Protect attorney-client privilege with secure IT services for law firms. eDiscovery support, encrypted communications, and 24/7 legal IT support from Compuwork.",
    keywords: [
      // Primary Keywords
      'law firm IT services',
      'legal technology support',
      'attorney-client privilege IT',
      'legal cybersecurity',
      'law firm managed IT',
      // Secondary / Long-Tail Keywords
      'eDiscovery IT support',
      'legal document management systems',
      'law firm data protection',
      'ABA technology compliance',
      'legal practice IT security',
      'encrypted legal communications',
      'state bar IT requirements',
      'law firm cloud solutions'
    ]
  };

  // Use CMS data if available, otherwise fall back to defaults
  const seoTitle = industry?.meta_title || defaultSEO.title;
  const seoDescription = industry?.meta_description || defaultSEO.description;
  const seoKeywords = industry?.keywords 
    ? industry.keywords.split(',').map(k => k.trim()) 
    : defaultSEO.keywords;
  const frameworks = ["ABA Guidelines", "State Bar Rules", "Client Confidentiality", "eDiscovery"];

  const stats = [
    { value: 20, suffix: "+", label: "Years Experience", icon: Clock },
    { value: 99, suffix: "%", label: "Threat Protection", icon: Shield },
    { value: 99.9, suffix: "%", label: "System Uptime", icon: Award },
    { value: 24, suffix: "/7", label: "Support Available", icon: Headphones },
  ];

  const services = [
    {
      icon: FolderLock,
      title: "Secure Document Management",
      description: "Encrypted storage with granular access controls protecting privileged attorney-client communications and sensitive case files"
    },
    {
      icon: Cloud,
      title: "Cloud Practice Solutions",
      description: "Secure cloud hosting for legal applications enabling remote work while maintaining client confidentiality requirements"
    },
    {
      icon: Mail,
      title: "Encrypted Communications",
      description: "End-to-end encryption for all email and messaging containing privileged client information"
    },
    {
      icon: Search,
      title: "eDiscovery Readiness",
      description: "Systems designed to support litigation holds, data preservation, and efficient electronic discovery processes"
    },
    {
      icon: Shield,
      title: "Cybersecurity & Compliance",
      description: "Multi-layered security protecting against data breaches with continuous monitoring and threat detection"
    },
    {
      icon: Headphones,
      title: "Legal IT Help Desk",
      description: "24/7 technical support from specialists who understand the unique demands of legal practice"
    },
  ];

  const process = [
    {
      step: "01",
      title: "Assess",
      description: "Comprehensive security assessment of your firm's IT infrastructure and data handling practices."
    },
    {
      step: "02",
      title: "Protect",
      description: "Implement encryption, access controls, and security measures tailored to legal industry requirements."
    },
    {
      step: "03",
      title: "Integrate",
      description: "Seamlessly connect practice management, billing, and document systems for maximum efficiency."
    },
    {
      step: "04",
      title: "Support",
      description: "Ongoing monitoring, maintenance, and 24/7 support to keep your practice running smoothly."
    },
  ];

  const technicalSafeguards = [
    {
      icon: FileCheck,
      title: "Privilege Protection",
      description: "Technical controls ensuring attorney-client privilege is maintained across all digital communications"
    },
    {
      icon: Eye,
      title: "Audit Trail & Logging",
      description: "Comprehensive tracking of document access and modifications for compliance and litigation support"
    },
    {
      icon: Lock,
      title: "Role-Based Access",
      description: "Granular permissions ensuring only authorized personnel can access sensitive case materials"
    },
    {
      icon: Database,
      title: "Data Encryption",
      description: "AES-256 encryption for data at rest and in transit protecting confidential client information"
    },
    {
      icon: UserCheck,
      title: "Conflict Checking",
      description: "Integrated systems to support thorough conflict of interest checks across matters and clients"
    },
    {
      icon: Shield,
      title: "Threat Monitoring",
      description: "Real-time detection of cyber threats targeting law firms including ransomware and phishing"
    },
  ];

  const benefits = [
    "Protect Attorney-Client Privilege",
    "Meet State Bar IT Requirements",
    "Secure Remote Work Capabilities",
    "eDiscovery & Litigation Support",
    "Practice Management Integration",
    "24/7 System Availability",
    "Reduce IT Management Burden",
    "Prevent Data Breaches"
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
        canonical="/industries/legal"
        keywords={seoKeywords}
        service={{
          serviceType: 'Managed IT Services for Law Firms',
          provider: 'Compuwork',
          areaServed: ['New York', 'Florida', 'United States'],
        }}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Industries', url: '/#industries' },
          { name: 'Legal', url: '/industries/legal' },
        ]}
        faq={[
          {
            question: 'How do you protect attorney-client privilege?',
            answer: 'We implement technical controls including end-to-end encryption, role-based access controls, comprehensive audit logging, and secure document management systems designed specifically to protect privileged communications.',
          },
          {
            question: 'Do you support eDiscovery requirements?',
            answer: 'Yes, our systems are designed to support litigation holds, data preservation, and efficient electronic discovery processes. We maintain comprehensive audit trails that support legal compliance requirements.',
          },
          {
            question: 'What legal industry compliance standards do you follow?',
            answer: 'We align with ABA technology guidelines, state bar ethics rules, and industry best practices for legal data security including encryption standards and access controls for privileged information.',
          },
        ]}
      />
      
      {/* Semantic Key Facts for AI Search Engines */}
      <KeyFacts
        entityName="Compuwork Legal IT Services"
        entityType="Service"
        description="Secure IT services for law firms protecting attorney-client privilege. Document management, eDiscovery support, encrypted communications, and 24/7 legal technology support."
        facts={[
          { label: "Target Clients", value: "Law Firms, Legal Practices, Solo Practitioners" },
          { label: "Compliance Focus", value: "ABA Guidelines, State Bar Rules, Client Confidentiality, eDiscovery" },
          { label: "Threat Protection", value: "99%" },
          { label: "System Uptime", value: "99.9%" },
          { label: "Support Availability", value: "24/7/365" },
          { label: "Years Serving Legal", value: "20+" },
        ]}
        services={[
          "Secure Document Management",
          "eDiscovery & Litigation Support",
          "Encrypted Communications",
          "Practice Management Integration",
          "24/7 Help Desk Support",
          "Cybersecurity & Data Protection",
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
          website: "https://compuwork.ai/industries/legal",
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
                className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg"
              >
                <Scale className="w-10 h-10 text-white" />
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
                Secure IT & Cybersecurity for{" "}
                <span className="text-gradient-gold">Law Firms</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-primary-foreground/70 mb-4"
              >
                Compuwork delivers expert managed IT services and cybersecurity solutions designed specifically for law firms that handle sensitive client information. With deep experience supporting legal practices of all sizes, Compuwork ensures your systems stay secure, your communications stay privileged, and your firm stays confident year-round.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-lg text-primary-foreground/60 mb-8"
              >
                From secure document management to eDiscovery readiness, <strong className="text-primary-foreground">we understand legal IT.</strong>
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
              Why Law Firms{" "}
              <span className="text-gradient-gold">Choose Compuwork</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              When client trust depends on data security, your IT partner must understand the unique demands of legal practice: <strong className="text-foreground">not just technology.</strong>
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-primary rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-xl"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <FileText className="w-10 h-10 text-gold" />
                <span className="text-gold font-bold text-lg">Legal IT Specialists</span>
              </div>
              <p className="text-primary-foreground text-xl md:text-2xl leading-relaxed">
                With decades of experience supporting law firms of all sizes, we deliver{" "}
                <span className="text-gold font-bold">secure document management, encrypted communications, and eDiscovery-ready infrastructure</span>{" "}
                that protects attorney-client privilege while enabling modern legal practice.
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
              <span className="text-gradient-gold">Legal Practices</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive managed IT services designed specifically for the security, compliance, and efficiency demands of law firms.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card border border-border rounded-2xl p-8 h-full shadow-card hover:shadow-card-hover transition-shadow"
                >
                  <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-blue-500" />
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
              Documentation & Governance for{" "}
              <span className="text-gradient-gold">Legal Compliance</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              A proven approach to securing law firm IT infrastructure while enabling efficient practice.
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
              <span className="text-gradient-gold">ABA & State Bar Requirements</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Protecting client confidentiality requires comprehensive security measures across all systems.
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
                Our legal IT services address the unique challenges law firms face: from protecting privileged communications to enabling secure remote work and efficient collaboration.
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
              Ready to Secure{" "}
              <span className="text-gradient-gold">Your Practice</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Schedule a free assessment with our legal IT specialists and discover how Compuwork can protect your firm's data and reputation.
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
                  Contact Us
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

export default LegalPage;
