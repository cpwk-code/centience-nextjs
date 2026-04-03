"use client";
import Link from 'next/link';
import { Calculator, ArrowLeft, ArrowRight, Shield, CheckCircle2, Users, Clock, Award, TrendingUp, Lock, Cloud, Headphones, Brain, FileCheck, Zap, Database, FileText, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import CountUp from "@/components/CountUp";
import GlowOrb from "@/components/GlowOrb";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import KeyFacts from "@/components/KeyFacts";

const AccountingPage = () => {
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
      description: "Layered protection with MDR, SIEM, multi-factor authentication, and vulnerability management, aligned to IRS, AICPA, and SOC compliance requirements.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Secure cloud hosting for accounting software like QuickBooks, Sage, and CCH. Disaster recovery designed for tax season uptime.",
    },
    {
      icon: Headphones,
      title: "Help Desk Support",
      description: "24/7/365 technical support with rapid response times. Your team gets immediate help, especially critical during busy season.",
    },
    {
      icon: Brain,
      title: "AI Governance & Risk Management",
      description: "Leverage AI tools for workflow automation while maintaining client data confidentiality and meeting AICPA professional standards.",
    },
    {
      icon: FileCheck,
      title: "Compliance Alignment",
      description: "Policies, procedures, and documentation mapped to IRS Circular 230, AICPA standards, SOC 2, and state board requirements.",
    },
    {
      icon: Lock,
      title: "Data Protection",
      description: "Enterprise-grade backup, encryption, and business continuity planning designed for sensitive financial and tax data.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Assess",
      description: "Identify security and compliance gaps through comprehensive assessments tailored to CPA and bookkeeping firms.",
    },
    {
      step: "02",
      title: "Align",
      description: "Map IT systems and policies to IRS, AICPA, and state board requirements plus industry best practices.",
    },
    {
      step: "03",
      title: "Automate",
      description: "Implement monitoring, alerting, and reporting tools that maintain continuous compliance and protect client data.",
    },
    {
      step: "04",
      title: "Advance",
      description: "Regularly test, refine, and improve systems based on evolving regulations and your firm's growth.",
    },
  ];

  const challenges = [
    {
      icon: Database,
      title: "Sensitive Client Data",
      description: "Protect Social Security numbers, financial records, and tax returns from breaches and unauthorized access.",
    },
    {
      icon: Clock,
      title: "Tax Season Uptime",
      description: "Zero tolerance for downtime during busy season when every minute counts for your firm and clients.",
    },
    {
      icon: FileText,
      title: "Regulatory Compliance",
      description: "Meet IRS Circular 230, AICPA professional standards, SOC requirements, and state board regulations.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Managed IT & Cybersecurity for CPA & Accounting Firms | Compuwork"
        description="Secure IT, cybersecurity, and compliance solutions for CPA firms and bookkeeping practices. IRS, AICPA, and SOC aligned with 24/7 support, especially during tax season."
        canonical="/industries/accounting"
        keywords={[
          'accounting firm IT support',
          'CPA firm cybersecurity',
          'managed IT for accountants',
          'bookkeeping firm IT services',
          'IRS compliant IT solutions',
          'AICPA compliance IT services',
          'SOC 2 compliance for accountants',
          'tax season IT support',
          'accounting firm data protection',
          'CPA firm managed services',
        ]}
        service={{
          serviceType: 'Managed IT Services for Accounting Firms',
          provider: 'Compuwork',
          areaServed: ['New York', 'Florida', 'United States'],
        }}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Industries', url: '/#industries' },
          { name: 'Accounting', url: '/industries/accounting' },
        ]}
        faq={[
          {
            question: 'What compliance frameworks do you support for accounting firms?',
            answer: 'We help CPA and bookkeeping firms comply with IRS Circular 230, AICPA professional standards, SOC 2 requirements, and state board regulations. Our team understands the unique data protection and confidentiality requirements of the accounting profession.',
          },
          {
            question: 'Do you provide support during tax season?',
            answer: 'Yes, we provide 24/7/365 support with priority response during busy season. We understand that downtime during tax season is not an option, and we staff accordingly to ensure your firm stays productive.',
          },
          {
            question: 'Can you support our accounting software?',
            answer: 'Absolutely. We support all major accounting platforms including QuickBooks, Sage, CCH, Thomson Reuters, Drake, Lacerte, and ProSeries. We can host these applications in secure cloud environments or manage them on-premise.',
          },
        ]}
      />
      
      {/* Semantic Key Facts for AI Search Engines */}
      <KeyFacts
        entityName="Compuwork Managed IT for Accounting Firms"
        entityType="Service"
        description="Expert managed IT services for CPA firms, bookkeeping practices, and accounting professionals. IRS, AICPA, and SOC compliant with 24/7 support during tax season."
        facts={[
          { label: "Target Clients", value: "CPA Firms, Bookkeeping Practices, Tax Preparers, Accounting Professionals" },
          { label: "Compliance Frameworks", value: "IRS Circular 230, AICPA Standards, SOC 2, State Board Requirements" },
          { label: "Software Supported", value: "QuickBooks, Sage, CCH, Thomson Reuters, Drake, Lacerte, ProSeries" },
          { label: "Years Serving Accounting Industry", value: "20+" },
          { label: "Client Satisfaction", value: "99.8%" },
          { label: "Average Client Relationship", value: "10+ years" },
        ]}
        services={[
          "Managed Security (MSSP) with MDR and SIEM",
          "IRS and AICPA Compliance Alignment",
          "Cloud Hosting for Accounting Software",
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
          website: "https://compuwork.ai/industries/accounting",
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
                <Calculator className="w-10 h-10 text-white" />
              </motion.div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {["IRS", "AICPA", "SOC 2", "State Boards"].map((framework) => (
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
                Secure IT & Compliance for{" "}
                <span className="text-gradient-gold">CPA & Bookkeeping Firms</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-primary-foreground/70 mb-4"
              >
                Compuwork delivers expert managed IT services, cybersecurity, and compliance solutions designed specifically for accounting professionals who handle sensitive client financial data.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-lg text-primary-foreground/60 mb-8"
              >
                With deep experience supporting CPA firms and bookkeeping practices, we ensure your systems stay secure, your client data stays protected, and <strong className="text-primary-foreground">your team stays productive, especially during tax season.</strong>
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

      {/* Challenges Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
              Why Accounting Firms{" "}
              <span className="text-gradient-gold">Choose Compuwork</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Accounting professionals face unique IT challenges. Client confidentiality, regulatory compliance, and seasonal demands require <strong className="text-foreground">an IT partner who understands your business.</strong>
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
                <span className="text-gold font-bold text-lg">Protect Your Clients & Your Reputation</span>
              </div>
              <p className="text-primary-foreground text-xl md:text-2xl leading-relaxed">
                With <span className="text-gold font-bold">20+ years supporting professional services firms</span>, we understand that your clients trust you with their most sensitive financial information. We help you maintain that trust with enterprise-grade security and compliance.
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
              <span className="text-gradient-gold">Accounting Professionals</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our accounting-sector IT capabilities include proactive cybersecurity, secure cloud hosting for your accounting software, and comprehensive support for busy season.
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
              Client Data Protection That{" "}
              <span className="text-gradient-gold">Meets Professional Standards</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Our proven 4-step process ensures your firm meets IRS, AICPA, and state board requirements while keeping client data secure.
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
              <span className="text-gradient-gold">Accounting Practice?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your firm's IT needs. We'll assess your current environment and show you how Compuwork can protect your clients and streamline your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg" className="shadow-gold" asChild>
                <Link href="/get-started">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="tel:+18779457177">
                  <Phone className="w-5 h-5" />
                  Call Us (877) 945-7177
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

export default AccountingPage;
