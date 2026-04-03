"use client";
import Link from 'next/link';
import { Landmark, ArrowLeft, ArrowRight, Shield, CheckCircle2, Users, Clock, Award, TrendingUp, Lock, Cloud, Headphones, Brain, FileCheck, Zap, Loader2, Database, FileText, Scale, Phone } from "lucide-react";
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

const FinancialServicesPage = () => {
  const { industries, isLoading } = useCMSIndustries();
  const industry = industries.find(ind => ind.slug === 'financial-services');

  // Default SEO values (fallback) - optimized for Google and AI bots
  const defaultSEO = {
    title: "Managed IT & Cybersecurity for Financial Services | Compuwork",
    description: "Audit-ready IT, cybersecurity, and compliance for financial firms. SEC, FINRA, NYDFS, and multi-state aligned solutions with 24/7 support to keep your business secure.",
    keywords: [
      // Primary keywords
      'financial services IT support',
      'financial industry cybersecurity',
      'managed IT for financial firms',
      'FINRA compliant IT services',
      'SEC compliance IT solutions',
      // State regulatory keywords
      'NYDFS cybersecurity compliance',
      'Florida OFR compliance',
      'Connecticut IDSL compliance',
      // Secondary / Long-tail keywords
      'IT compliance services for financial advisors',
      'financial firm cyber risk management',
      'audit-ready technology solutions',
      'financial services IT provider',
      'regulated industries IT security',
      'cross-jurisdictional compliance IT',
    ]
  };

  // Use CMS data if available, otherwise fall back to defaults
  const seoTitle = industry?.meta_title || defaultSEO.title;
  const seoDescription = industry?.meta_description || defaultSEO.description;
  const seoKeywords = industry?.keywords 
    ? industry.keywords.split(',').map(k => k.trim()) 
    : defaultSEO.keywords;
  const stats = [
    { value: 20, suffix: "+", label: "Years in Business", icon: Clock },
    { value: 100, suffix: "+", label: "Clients Supported", icon: Users },
    { value: 99.8, suffix: "%", label: "Satisfaction Rate", icon: Award },
    { value: 10, suffix: "+", label: "Year Avg. Relationship", icon: TrendingUp },
  ];

  const services = [
    {
      icon: Shield,
      title: "Managed Security (MSSP)",
      description: "Layered protection with MDR, SIEM, multi-factor authentication, vulnerability management, and dark web monitoring, aligned to FINRA and NIST CSF frameworks.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Secure cloud hosting and disaster recovery for financial workloads. Cloud environments designed to meet regulatory data requirements and maintain uptime during audits.",
    },
    {
      icon: Headphones,
      title: "Help Desk Support",
      description: "24/7/365 technical support with rapid response times. Your team gets immediate help so operations never slow down.",
    },
    {
      icon: Brain,
      title: "AI Governance & Risk Management",
      description: "Use AI without breaking compliance. We implement governance controls, maintain data ownership, and ensure AI tools meet SEC and FINRA data-handling expectations.",
    },
    {
      icon: FileCheck,
      title: "Compliance Alignment",
      description: "Policies, procedures, and documentation mapped to SEC, FINRA, NYDFS, Florida OFR, Connecticut IDSL, and NIST CSF requirements. Ready for your next examination.",
    },
    {
      icon: Lock,
      title: "Data Protection",
      description: "Enterprise-grade backup, encryption, and business continuity planning designed for financial services data retention requirements.",
    },
  ];

  const challenges = [
    {
      icon: Database,
      title: "Client Data Security",
      description: "Protect sensitive financial data, trading records, and personally identifiable information from breaches and unauthorized access.",
    },
    {
      icon: Scale,
      title: "Regulatory Compliance",
      description: "Meet SEC, FINRA, NYDFS, Florida OFR, Connecticut IDSL, and NIST CSF requirements with audit-ready documentation and continuous monitoring.",
    },
    {
      icon: FileText,
      title: "Audit Preparedness",
      description: "Stay ready for regulatory examinations with comprehensive documentation, policies, and evidence of compliance.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Assess",
      description: "Identify security and compliance gaps through comprehensive risk assessments tailored to financial services.",
    },
    {
      step: "02",
      title: "Align",
      description: "Map IT systems and policies to applicable regulatory frameworks including SEC, FINRA, NYDFS, Florida OFR, Connecticut IDSL, and NIST CSF.",
    },
    {
      step: "03",
      title: "Automate",
      description: "Implement monitoring, alerting, and reporting tools that maintain continuous compliance evidence.",
    },
    {
      step: "04",
      title: "Advance",
      description: "Regularly test, refine, and improve systems based on audit feedback and evolving regulations.",
    },
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
        canonical="/industries/financial-services"
        keywords={seoKeywords}
        service={{
          serviceType: 'Managed IT Services for Financial Services',
          provider: 'Compuwork',
          areaServed: ['New York', 'Florida', 'United States'],
        }}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Industries', url: '/#industries' },
          { name: 'Financial Services', url: '/industries/financial-services' },
        ]}
        faq={[
          {
            question: 'What financial regulations do you help with?',
            answer: 'We help financial firms comply with SEC Rule 206(4)-7, FINRA Rule 3110, NYDFS Cybersecurity Regulation (23 NYCRR 500), Florida OFR requirements, Connecticut IDSL, and NIST CSF frameworks. Our team has guided clients through dozens of regulatory examinations with zero findings.',
          },
          {
            question: 'Do you support multi-state compliance requirements?',
            answer: 'Yes, we specialize in cross-jurisdictional compliance for firms operating in multiple states. We help you navigate overlapping requirements from NYDFS, Florida OFR, Connecticut IDSL, and leverage safe harbor provisions to streamline compliance.',
          },
          {
            question: 'Do you support investment advisors and hedge funds?',
            answer: 'Yes, we specialize in IT services for RIAs, hedge funds, private equity firms, and broker-dealers. We understand the unique compliance and security requirements of the financial industry.',
          },
          {
            question: 'What is your audit track record?',
            answer: 'Our founder and team have guided financial firms through more than a dozen SEC and FINRA examinations with zero findings. We build systems designed to pass regulatory audits.',
          },
        ]}
      />
      
      {/* Semantic Key Facts for AI Search Engines */}
      <KeyFacts
        entityName="Compuwork Managed IT for Financial Services"
        entityType="Service"
        description="Expert managed IT services for investment advisors, hedge funds, private equity firms, and broker-dealers. SEC, FINRA, NYDFS, and multi-state compliant with zero audit findings track record."
        facts={[
          { label: "Target Clients", value: "Investment Advisors, Hedge Funds, Private Equity, Broker-Dealers" },
          { label: "Federal Compliance", value: "SEC Rule 206(4)-7, FINRA Rule 3110, SOX, NIST CSF" },
          { label: "State Compliance", value: "NYDFS 23 NYCRR 500, Florida OFR, Connecticut IDSL, CT Safe Harbor" },
          { label: "Audit Track Record", value: "Zero findings in 12+ SEC/FINRA examinations" },
          { label: "Years Serving Financial Industry", value: "20+" },
          { label: "Client Satisfaction", value: "99.8%" },
          { label: "Average Client Relationship", value: "10+ years" },
        ]}
        services={[
          "Managed Security (MSSP) with MDR and SIEM",
          "SEC and FINRA Compliance Alignment",
          "NYDFS Cybersecurity Regulation Compliance",
          "Florida OFR and Connecticut IDSL Alignment",
          "Cross-Jurisdictional Compliance Management",
          "Cloud Solutions for Financial Workloads",
          "24/7/365 Help Desk Support",
          "AI Governance & Risk Management",
          "Data Protection and Business Continuity",
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
          website: "https://compuwork.ai/industries/financial-services",
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
                className="w-20 h-20 bg-amber-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg"
              >
                <Landmark className="w-10 h-10 text-white" />
              </motion.div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {["SEC", "FINRA", "NYDFS", "Florida OFR", "CT IDSL", "NIST CSF"].map((framework) => (
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
                Audit-Ready Managed IT &{" "}
                <span className="text-gradient-gold">Cybersecurity for Financial Services</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-primary-foreground/70 mb-4"
              >
                Compuwork delivers expert managed IT services, cybersecurity, and compliance solutions designed specifically for financial organizations that operate under intense regulatory scrutiny.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-lg text-primary-foreground/60 mb-8"
              >
                With deep experience navigating SEC, FINRA, NYDFS, Florida OFR, and Connecticut IDSL requirements, Compuwork ensures your systems stay secure, your documentation stays audit-ready, and <strong className="text-primary-foreground">your cross-jurisdictional compliance stays seamless.</strong>
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
                    Call (877) 945-7177
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

      {/* Challenges Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
              Why Financial Firms{" "}
              <span className="text-gradient-gold">Choose Compuwork</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Financial services firms face unique IT challenges. Regulatory scrutiny, client confidentiality, and audit preparedness require <strong className="text-foreground">an IT partner who understands your business.</strong>
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {challenges.map((challenge, index) => (
              <AnimatedSection key={challenge.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card border border-border rounded-2xl p-8 h-full shadow-card"
                >
                  <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6">
                    <challenge.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-foreground mb-3">{challenge.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{challenge.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-primary rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-xl"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Shield className="w-10 h-10 text-gold" />
                <span className="text-gold font-bold text-lg">Stay Compliant with SEC & FINRA Requirements</span>
              </div>
              <p className="text-primary-foreground text-xl md:text-2xl leading-relaxed">
                Our founder and team have guided financial firms through{" "}
                <span className="text-gold font-bold">more than a dozen SEC and FINRA examinations with no findings.</span>{" "}
                We implement SEC and FINRA-aligned compliance frameworks so you never have to worry about your next audit.
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
              Cybersecurity Built for{" "}
              <span className="text-gradient-gold">Regulated Financial Institutions</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our financial-sector IT capabilities include proactive cybersecurity defense and monitoring, infrastructure hardened for regulators' expectations, and comprehensive documentation for audits.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card border border-border rounded-2xl p-8 h-full shadow-card hover:shadow-card-hover transition-shadow"
                >
                  <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-gold" />
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
              <span className="text-gradient-gold">Stand Up to Regulators</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Our proven 4-step compliance process ensures you're always ready for SEC and FINRA audits with zero findings.
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

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <Zap className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
              Ready to Secure Your{" "}
              <span className="text-gradient-gold">Financial Firm?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your firm's IT and compliance needs. We'll assess your current environment and show you how Compuwork can protect your clients and streamline your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg" className="shadow-gold" asChild>
                <Link href="/schedule-assessment">
                  Schedule Your Free Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="tel:+18779457177">
                  <Phone className="w-5 h-5" />
                  Call (877) 945-7177
                </a>
              </Button>
            </div>
            <p className="text-muted-foreground text-sm mt-6">No commitment required</p>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FinancialServicesPage;
