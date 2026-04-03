"use client";
import { useState } from "react";
import bocaRatonTeamImage from "@/assets/locations/boca-raton-financial-district.jpg";
import Link from 'next/link';
import { motion } from "framer-motion";
import { 
  ArrowRight,
  Shield, 
  CheckCircle2, 
  Clock, 
  Users, 
  Award, 
  Lock, 
  Cloud, 
  Headphones, 
  Brain, 
  FileCheck, 
  Landmark,
  Building2,
  Briefcase,
  Calculator,
  MapPin,
  Phone,
  Mail,
  Star,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  Server,
  FileWarning,
  DollarSign,
  Wifi,
  ClipboardCheck,
  MessageSquare,
  ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import CountUp from "@/components/CountUp";
import GlowOrb from "@/components/GlowOrb";
import SEO from "@/components/SEO";
import KeyFacts from "@/components/KeyFacts";
import GoHighLevelForm from "@/components/GoHighLevelForm";

const BocaRatonPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const challenges = [
    { icon: Clock, title: "Slow or Inconsistent IT Support", description: "Disrupts trading, reporting, or client service when you need reliability most." },
    { icon: AlertTriangle, title: "Rising Cybersecurity Threats", description: "Ransomware, phishing, and insider risk targeting financial data." },
    { icon: FileWarning, title: "Regulatory Pressure", description: "SEC, FINRA, and state-level requirements demanding constant attention." },
    { icon: ClipboardCheck, title: "Audit Documentation Gaps", description: "Unclear documentation and controls during examinations." },
    { icon: DollarSign, title: "Unpredictable IT Costs", description: "Reactive fixes and emergency upgrades creating budget surprises." },
    { icon: Wifi, title: "Remote Workforce Risks", description: "Hybrid access increasing security and compliance exposure." },
    { icon: Cloud, title: "Cloud Governance Issues", description: "Platforms without clear data ownership or compliance alignment." },
  ];

  const services = [
    {
      icon: Server,
      title: "Managed & Co-Managed IT Services",
      description: "Complete management of your IT environment or structured co-managed support alongside your internal IT team. We handle monitoring, patching, asset management, documentation, and support, with financial compliance always in mind.",
    },
    {
      icon: Shield,
      title: "Managed Cybersecurity for Financial Services",
      description: "Security that goes beyond tools. We provide continuous monitoring, endpoint protection, email security, threat detection, and incident response aligned with SEC and FINRA expectations.",
    },
    {
      icon: Cloud,
      title: "Secure Cloud Solutions",
      description: "Cloud environments designed for confidentiality, traceability, and resilience. Whether public, private, or hybrid, we ensure your cloud infrastructure supports compliance, secure access, and operational efficiency.",
    },
    {
      icon: Headphones,
      title: "Financial-Focused Help Desk Support",
      description: "Responsive, U.S.-based support from technicians who understand financial systems, compliance sensitivity, and the urgency of client-facing operations.",
    },
    {
      icon: Brain,
      title: "AI & Cloud Compliance Integration",
      description: "Adopt AI-driven tools and advanced analytics without introducing regulatory risk. We implement governance, access controls, and documentation to ensure innovation remains defensible and compliant.",
    },
    {
      icon: FileCheck,
      title: "Compliance Alignment & Audit Readiness",
      description: "We align technology, policies, and documentation with financial regulatory frameworks and keep them current. When exams or audits arise, your firm is prepared, organized, and confident.",
    },
  ];

  const industries = [
    {
      icon: Landmark,
      title: "Investment Advisers & Wealth Management Firms",
      description: "Technology and documentation designed for SEC examinations, cybersecurity expectations, and client data protection.",
    },
    {
      icon: Building2,
      title: "Hedge Funds & Alternative Investment Managers",
      description: "Secure infrastructure for complex trading operations, investor reporting, and regulatory compliance.",
    },
    {
      icon: Briefcase,
      title: "Private Equity & Family Offices",
      description: "Secure, discreet IT environments that protect sensitive financial data and support complex workflows.",
    },
    {
      icon: Calculator,
      title: "Broker-Dealers & Registered Representatives",
      description: "Systems aligned with FINRA supervision, recordkeeping, and security requirements.",
    },
  ];

  const whyChooseUs = [
    "Deep experience supporting regulated financial organizations",
    "Strong understanding of SEC and FINRA technology expectations",
    "Predictable, flat monthly pricing with no surprise invoices",
    "Proactive management that prevents outages and security incidents",
    "Fully integrated IT, cybersecurity, cloud, and compliance support",
    "Clear documentation and audit-ready processes",
    "Relationship-first service model with responsive, human support",
  ];

  const onboardingSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We begin with a detailed conversation to understand your firm's structure, regulatory obligations, risk profile, and business goals.",
    },
    {
      step: "02",
      title: "Compliance-Aligned Technology Roadmap",
      description: "We design a clear IT and cybersecurity roadmap aligned to financial regulations, operational needs, and future growth.",
    },
    {
      step: "03",
      title: "Smooth, Secure Transition",
      description: "Our team manages onboarding, migrations, security controls, documentation, and staff onboarding with minimal disruption. From day one, your systems are secure, supported, and audit-ready.",
    },
  ];

  const testimonials = [
    {
      quote: "Compuwork has been an invaluable partner for our hedge fund. Their understanding of SEC requirements and proactive approach to security has given us complete confidence during examinations.",
      author: "Managing Partner",
      company: "Boca Raton Hedge Fund",
      rating: 5,
    },
    {
      quote: "The transition to Compuwork was seamless. Their team understands the unique pressures financial firms face and provides the responsive, knowledgeable support we need.",
      author: "Operations Director",
      company: "Boca Raton Investment Advisory",
      rating: 5,
    },
    {
      quote: "After years of inconsistent IT support, finding Compuwork was transformative. Their compliance-first approach means we never worry about audit readiness.",
      author: "Chief Compliance Officer",
      company: "Boca Raton Wealth Management Firm",
      rating: 5,
    },
  ];

  const trustLogos = [
    "SEC Compliant",
    "FINRA Aligned",
    "NIST CSF",
    "SOC 2",
    "HIPAA",
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Managed IT Services For Financial Firms in Boca Raton"
        description="Expert managed IT services in Boca Raton for hedge funds and financial firms. 24/7 support, SEC/FINRA compliance, and audit-ready cybersecurity."
        canonical="/locations/managed-it-services-for-financial-firms-boca-raton"
        keywords={[
          "managed IT services Boca Raton",
          "financial services IT Boca Raton",
          "hedge fund IT support",
          "SEC compliance IT Florida",
          "FINRA IT support Boca Raton",
          "cybersecurity financial firms Florida",
          "wealth management IT support",
          "investment adviser IT services",
          "Boca Raton IT provider",
          "audit-ready IT Boca Raton",
          "compliance IT services Florida"
        ]}
        service={{
          serviceType: "Managed IT Services for Financial Services",
          provider: "Compuwork",
          areaServed: ["Boca Raton", "Palm Beach County", "Delray Beach", "Deerfield Beach", "Florida"],
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: "Boca Raton", url: "/locations/managed-it-services-for-financial-firms-boca-raton" },
        ]}
        faq={[
          {
            question: "What does a managed IT provider do for financial firms?",
            answer: "A managed IT provider like Compuwork oversees daily IT operations, cybersecurity, system maintenance, documentation, and compliance alignment so your firm can focus on serving clients and meeting regulatory obligations.",
          },
          {
            question: "Do you support financial firms with internal IT teams?",
            answer: "Yes. Our co-managed IT services extend internal teams by handling monitoring, security, documentation, and complex compliance-related tasks without adding headcount.",
          },
          {
            question: "How quickly do you respond to critical issues?",
            answer: "Managed financial clients receive 24/7 emergency response. For critical issues, our team acts immediately and communicates clearly throughout resolution.",
          },
          {
            question: "Can you help with SEC or FINRA audits?",
            answer: "Absolutely. Audit readiness is a core strength. We organize documentation, identify gaps, implement controls, and guide your firm through exams with confidence and clarity.",
          },
        ]}
      />

      <KeyFacts
        entityName="Compuwork Managed IT for Financial Services in Boca Raton"
        entityType="LocalBusiness"
        description="Compliance-first managed IT services, cybersecurity, and audit-ready technology support for hedge funds, investment advisers, wealth management firms, and financial organizations across Boca Raton and South Florida."
        facts={[
          { label: "Service Area", value: "Boca Raton, Delray Beach, Deerfield Beach, Palm Beach County" },
          { label: "Industries Served", value: "Hedge Funds, Investment Advisers, Wealth Management, Broker-Dealers, Private Equity, Family Offices" },
          { label: "Compliance Expertise", value: "SEC, FINRA, NIST CSF, SOC 2" },
          { label: "Support Hours", value: "24/7/365" },
          { label: "Years of Experience", value: "20+" },
          { label: "Audit Track Record", value: "Zero findings in SEC/FINRA examinations" },
        ]}
        services={[
          "Managed & Co-Managed IT Services",
          "Managed Cybersecurity for Financial Services",
          "Secure Cloud Solutions",
          "Financial-Focused Help Desk Support",
          "AI & Cloud Compliance Integration",
          "Compliance Alignment & Audit Readiness",
        ]}
        locations={[
          "Boca Raton, FL",
          "Delray Beach, FL",
          "Deerfield Beach, FL",
          "Palm Beach County, FL",
        ]}
        contactInfo={{
          phone: "(877) 945-7177",
          email: "info@compuwork.ai",
          website: "https://compuwork.ai/locations/managed-it-services-for-financial-firms-boca-raton",
        }}
      />

      <Header />

      {/* Hero Section with Split Layout */}
      <section className="pt-24 pb-16 lg:pb-24 mesh-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <GlowOrb className="top-20 right-10" size="lg" color="gold" />
        <GlowOrb className="bottom-20 left-10" size="md" color="gold" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Side - Core Messaging */}
            <div className="pt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6"
              >
                <MapPin className="w-4 h-4 text-gold" />
                <span className="text-primary-foreground/80 text-sm font-medium">Boca Raton</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-display text-primary-foreground leading-tight mb-6"
              >
                Managed IT Services for{" "}
                <span className="text-gradient-gold">Financial Services Firms</span>{" "}
                in Boca Raton
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg sm:text-xl text-primary-foreground/70 mb-8 leading-relaxed"
              >
                Compliance-first IT, cybersecurity, and audit-ready technology support for hedge funds, investment advisers, wealth management firms, and financial organizations across Boca Raton and South Florida.
              </motion.p>

              {/* Quick-Win Bullet Points */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-4 mb-8"
              >
                {[
                  "24/7/365 Support for Financial Operations",
                  "Certified Security and Compliance Engineers",
                  "Strategic vCIO Guidance for SEC and FINRA-Regulated Firms",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-primary-foreground/90 font-medium">{item}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <Button variant="gold" size="lg" className="group animate-pulse-glow" asChild>
                    <Link href="/schedule-assessment">
                    Schedule Your Free Assessment
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link href="/services/cybersecurity">
                    View Our Services
                  </Link>
                </Button>
              </motion.div>

              {/* Phone CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-4"
              >
                <a href="tel:+18779457177" className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors">
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">(877) 945-7177</span>
                </a>
                <span className="text-primary-foreground/40">|</span>
                <a href="mailto:info@compuwork.ai" className="flex items-center gap-2 text-primary-foreground/70 hover:text-gold transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>info@compuwork.ai</span>
                </a>
              </motion.div>
            </div>

            {/* Right Side - Lead Capture Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-start justify-center lg:justify-end pt-8 lg:pt-16"
            >
              <div 
                className="bg-card rounded-xl overflow-hidden"
                style={{ 
                  maxWidth: "550px",
                  width: "100%",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
                  padding: "4px"
                }}
              >
                <GoHighLevelForm 
                  formId="xDXOZXFWrbEuQ89FdCGA"
                  formName="Location Page Contact Us Form"
                  height={610}
                  mobileHeight={710}
                  scrolling={false}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar Section - Right after Hero */}
      <section className="py-12 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-gold mb-1">
                <CountUp end={99} suffix="%+" />
              </div>
              <p className="text-muted-foreground text-xs sm:text-sm font-medium">Audit Success Rate</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-gold mb-1">
                <CountUp end={99} suffix="%" />
              </div>
              <p className="text-muted-foreground text-xs sm:text-sm font-medium">Threat Prevention</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-gold mb-1">
                24/7
              </div>
              <p className="text-muted-foreground text-xs sm:text-sm font-medium">Security Monitoring</p>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-gold mb-1">
                15min
              </div>
              <p className="text-muted-foreground text-xs sm:text-sm font-medium">Incident Response</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section - Image Left, Text Right */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile: Stacked layout with fixed aspect ratio */}
          <div className="flex flex-col lg:hidden gap-8">
            <AnimatedSection>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
                <img src={typeof bocaRatonTeamImage === "string" ? bocaRatonTeamImage : (bocaRatonTeamImage as any).src} 
                  alt="Managed IT support and cybersecurity services for financial firms in Boca Raton"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl font-bold font-display text-foreground mb-4">
                Your Long-Term IT & Compliance Partner for{" "}
                <span className="text-gradient-gold">Regulated Financial Firms</span>
              </h2>
              <p className="text-lg text-gold font-medium mb-6">
                Compliance-first IT, cybersecurity, and audit readiness for financial firms.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Compuwork delivers managed IT services for financial firms in Boca Raton, purpose-built for regulated financial environments. We support investment advisers, wealth management firms, broker-dealers, private equity offices, family offices, and financial services organizations throughout Boca Raton and greater Palm Beach County that require dependable technology, strong cybersecurity, and clear regulatory alignment.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                From offices near Mizner Park to financial firms operating across Palm Beach County, organizations trust Compuwork to keep systems secure, compliant, and operational without disruption. <strong className="text-foreground">In financial services, downtime, security gaps, and audit surprises are not acceptable risks. We design IT environments to prevent them.</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We do more than maintain systems. We become a long-term technology and compliance partner, helping your firm operate with confidence while meeting regulatory expectations.
              </p>
              <Button variant="gold" size="lg" className="shadow-gold" asChild>
                <Link href="/free-risk-assessment">
                  Get a Free Risk Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>

          {/* Desktop: Side-by-side with height-matched image */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-stretch">
            {/* Left Side - Image (height matches text container) */}
            <AnimatedSection className="h-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full">
                <img src={typeof bocaRatonTeamImage === "string" ? bocaRatonTeamImage : (bocaRatonTeamImage as any).src} 
                  alt="Managed IT support and cybersecurity services for financial firms in Boca Raton"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </AnimatedSection>

            {/* Right Side - Text Content */}
            <AnimatedSection delay={0.2} className="flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
                Your Long-Term IT & Compliance Partner for{" "}
                <span className="text-gradient-gold">Regulated Financial Firms</span>
              </h2>
              <p className="text-lg text-gold font-medium mb-6">
                Compliance-first IT, cybersecurity, and audit readiness for financial firms.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Compuwork delivers managed IT services for financial firms in Boca Raton, purpose-built for regulated financial environments. We support investment advisers, wealth management firms, broker-dealers, private equity offices, family offices, and financial services organizations throughout Boca Raton and greater Palm Beach County that require dependable technology, strong cybersecurity, and clear regulatory alignment.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                From offices near Mizner Park to financial firms operating across Palm Beach County, organizations trust Compuwork to keep systems secure, compliant, and operational without disruption. <strong className="text-foreground">In financial services, downtime, security gaps, and audit surprises are not acceptable risks. We design IT environments to prevent them.</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We do more than maintain systems. We become a long-term technology and compliance partner, helping your firm operate with confidence while meeting regulatory expectations.
              </p>
              <Button variant="gold" size="lg" className="shadow-gold" asChild>
                <Link href="/free-risk-assessment">
                  Get a Free Risk Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Compliance Frameworks Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
              SEC, FINRA, HIPAA &{" "}
              <span className="text-gradient-gold">NIST Compliance</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Security controls and documentation aligned with the frameworks regulators expect.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "SEC",
                description: "Securities and Exchange Commission cybersecurity requirements"
              },
              {
                title: "FINRA",
                description: "Financial Industry Regulatory Authority security standards"
              },
              {
                title: "HIPAA",
                description: "Health Insurance Portability and Accountability Act"
              },
              {
                title: "NIST CSF",
                description: "National Institute of Standards and Technology Cybersecurity Framework"
              },
              {
                title: "SOC 2",
                description: "Service Organization Control security, availability, and confidentiality"
              },
              {
                title: "SOX",
                description: "Sarbanes-Oxley Act IT controls and data integrity"
              }
            ].map((framework, index) => (
              <AnimatedSection key={framework.title} delay={index * 0.1}>
                <div className="bg-card border border-border rounded-xl p-6 h-full hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gold mb-2">{framework.title}</h3>
                  <p className="text-muted-foreground">{framework.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Challenges Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
              Technology Challenges Facing{" "}
              <span className="text-gradient-gold">Financial Firms</span> in Boca Raton
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Financial firms in Boca Raton operate under constant regulatory scrutiny while managing sensitive client data and complex workflows. As firms adopt cloud platforms, remote access, and digital client services, common challenges emerge.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {challenges.map((challenge, index) => (
              <AnimatedSection key={challenge.title} delay={index * 0.1}>
                <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-gold/30 transition-colors">
                  <challenge.icon className="w-8 h-8 text-gold mb-4" />
                  <h3 className="font-bold text-foreground mb-2">{challenge.title}</h3>
                  <p className="text-sm text-muted-foreground">{challenge.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4} className="text-center mt-10">
            <p className="text-lg text-foreground font-medium">
              If these challenges sound familiar, Compuwork helps turn IT from a liability into a controlled, well-documented, and audit-ready foundation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
              Managed IT Services Built for{" "}
              <span className="text-gradient-gold">Financial Firms</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our Managed IT Services for financial firms in Boca Raton are designed to support organizations that require strong security, documented controls, and consistent regulatory alignment.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card border border-border rounded-2xl p-8 h-full shadow-card hover:shadow-card-hover transition-all"
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

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
              Financial Organizations We Support in{" "}
              <span className="text-gradient-gold">Boca Raton</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Compuwork specializes in serving regulated financial organizations that require reliability, confidentiality, and audit-ready systems.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <AnimatedSection key={industry.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card border border-border rounded-2xl p-8 h-full shadow-card"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <industry.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-display text-foreground mb-2">{industry.title}</h3>
                      <p className="text-muted-foreground">{industry.description}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Compuwork */}
      <section className="py-20 mesh-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <GlowOrb className="top-1/3 right-10" size="lg" color="gold" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-primary-foreground mb-4">
              Why Financial Firms Choose{" "}
              <span className="text-gradient-gold">Compuwork</span> in Boca Raton
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <div className="glass-card p-8 rounded-2xl">
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <AnimatedSection key={index} delay={index * 0.1}>
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-primary-foreground/90 text-lg">{reason}</span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <p className="text-primary-foreground/70 text-lg">
                  We build long-term partnerships with financial firms that value{" "}
                  <strong className="text-primary-foreground">stability, accountability, and trust.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding Process */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
              Our Onboarding Process for{" "}
              <span className="text-gradient-gold">Financial Firms</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A controlled, documented transition that minimizes disruption and maximizes security from day one.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {onboardingSteps.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card border border-border rounded-2xl p-8 h-full shadow-card text-center relative"
                >
                  <div className="text-5xl font-bold text-gold/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold font-display text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                  {index < onboardingSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-8 h-8 text-gold/30" />
                    </div>
                  )}
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Local Proof Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Map */}
            <AnimatedSection>
              <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
                <iframe
                  title="Compuwork Boca Raton Service Area"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114376.71784974507!2d-80.1667!3d26.3683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8e3a0d0e4c379%3A0x7c2e8c8b7b8b8b8b!2sBoca%20Raton%2C%20FL!5e0!3m2!1sen!2sus!4v1706000000000!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-4 flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-gold" />
                <span className="text-sm">Serving Boca Raton, Delray Beach, Deerfield Beach, Palm Beach County & surrounding areas</span>
              </div>
            </AnimatedSection>

            {/* Testimonials */}
            <AnimatedSection delay={0.2}>
              <div className="mb-6">
                <h3 className="text-2xl font-bold font-display text-foreground mb-2">
                  What Our Clients Say
                </h3>
                <p className="text-muted-foreground">
                  Trusted by financial organizations across South Florida
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8 shadow-card relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                  ))}
                </div>
                <blockquote className="text-lg text-foreground mb-6 italic leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div>
                  <p className="font-semibold text-foreground">{testimonials[currentTestimonial].author}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].company}</p>
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-border">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-lg hover:bg-secondary transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5 text-muted-foreground" />
                  </button>
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentTestimonial ? "bg-gold" : "bg-muted-foreground/30"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-lg hover:bg-secondary transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="py-20 mesh-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <GlowOrb className="bottom-10 left-10" size="lg" color="gold" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-primary-foreground mb-6">
              Ready to Strengthen Your{" "}
              <span className="text-gradient-gold">Financial Firm's IT?</span>
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8">
              If your financial organization needs Managed IT Services in Boca Raton delivered by a partner who understands regulatory pressure, security risk, and long-term accountability, Compuwork is ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg" className="shadow-gold" asChild>
                <Link href="/contact">
                  Contact Us Today
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="tel:+18779457177">
                  <Phone className="w-5 h-5" />
                  (877) 945-7177
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

export default BocaRatonPage;
