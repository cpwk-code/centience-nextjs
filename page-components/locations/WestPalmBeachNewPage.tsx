"use client";
import { useState } from "react";
import floridaImage from "@/assets/locations/florida-it-team.jpg";
import Link from 'next/link';
import { motion } from "framer-motion";
import { 
  ArrowRight,
  Shield, 
  CheckCircle2, 
  Clock, 
  Landmark,
  Briefcase,
  Heart,
  Scale,
  MapPin,
  Phone,
  Mail,
  Star,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  FileWarning,
  DollarSign,
  Wifi,
  Cloud,
  ArrowUpRight,
  Map,
  Building2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import Services from "@/components/Services";
import CountUp from "@/components/CountUp";
import GlowOrb from "@/components/GlowOrb";
import SEO from "@/components/SEO";
import KeyFacts from "@/components/KeyFacts";
import GoHighLevelForm from "@/components/GoHighLevelForm";

const WestPalmBeachNewPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const challenges = [
    { icon: Clock, title: "Slow or Inconsistent IT Support", description: "Delays in resolving issues disrupt daily operations and productivity." },
    { icon: AlertTriangle, title: "Rising Cybersecurity Threats", description: "Ransomware, phishing, and data exposure risks continue to escalate for businesses." },
    { icon: FileWarning, title: "Compliance Pressure", description: "HIPAA, SEC, FINRA, and state-level requirements demand constant attention and documentation." },
    { icon: DollarSign, title: "Unpredictable IT Costs", description: "Reactive fixes and emergency upgrades lead to unplanned expenses and budget overruns." },
    { icon: Wifi, title: "Remote/Hybrid Work Challenges", description: "Security and access controls strain under distributed workforce models." },
    { icon: Cloud, title: "Cloud Complexity", description: "Unclear ownership, governance, and compliance risks across cloud environments." },
  ];

  const industries = [
    {
      icon: Landmark,
      title: "Financial Services",
      description: "SEC, FINRA & NFA compliance",
      link: "/industries/financial-services",
    },
    {
      icon: Heart,
      title: "Healthcare & Life Sciences",
      description: "HIPAA-compliant IT solutions",
      link: "/industries/healthcare",
    },
    {
      icon: Scale,
      title: "Legal",
      description: "Confidential client data protection",
      link: "/industries/legal",
    },
    {
      icon: Building2,
      title: "Non-Profit & Professional Services",
      description: "Cost-effective, mission-focused IT",
      link: "/industries/professional-services",
    },
  ];

  const locationsWeServe = [
    { name: "Florida", link: "/locations/managed-it-services-florida" },
    { name: "New York", link: "/locations/managed-it-services-new-york" },
    { name: "Miami", link: "/locations/managed-it-services-miami" },
    { name: "Boca Raton", link: "/locations/managed-it-services-boca-raton" },
    { name: "West Palm Beach", link: "/locations/managed-it-services-west-palm-beach" },
  ];

  const whyChooseUs = [
    { title: "Local expertise", description: "Strong understanding of West Palm Beach's business climate and regulatory environment" },
    { title: "Built for regulated organizations", description: "Not generic IT support, but compliance-first solutions" },
    { title: "Scalable services", description: "That grow with your business from 10 to 300+ employees" },
    { title: "Flat, predictable pricing", description: "No surprise invoices or hidden costs" },
    { title: "Proactive management", description: "Prevents downtime and security issues before they occur" },
    { title: "Human-centered support", description: "Clear communication and fast response times" },
  ];

  const onboardingSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We start with a conversation to understand your business goals, current IT environment, and regulatory requirements.",
    },
    {
      step: "02",
      title: "Customized Technology Roadmap",
      description: "We design a clear, compliance-aligned IT roadmap tailored to your organization's needs and growth plans.",
    },
    {
      step: "03",
      title: "Smooth Transition",
      description: "Our team manages onboarding, migrations, backups, security controls, and staff training with minimal disruption. From day one, your systems are secure, documented, and supported.",
    },
  ];

  const testimonials = [
    {
      quote: "Compuwork has been an invaluable partner for our firm. Their understanding of SEC requirements and proactive approach to security has given us complete confidence during examinations.",
      author: "Managing Partner",
      company: "West Palm Beach Financial Firm",
      rating: 5,
    },
    {
      quote: "The transition to Compuwork was seamless. Their team understands the unique pressures regulated businesses face and provides the responsive, knowledgeable support we need.",
      author: "Operations Director",
      company: "Palm Beach County Healthcare Practice",
      rating: 5,
    },
    {
      quote: "After years of inconsistent IT support, finding Compuwork was transformative. Their compliance-first approach means we never worry about audit readiness.",
      author: "Chief Compliance Officer",
      company: "West Palm Beach Legal Firm",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "What does a managed IT services provider do?",
      answer: "A managed IT provider like Compuwork handles daily IT operations, including help desk support, network management, cybersecurity, system maintenance, backups, and compliance oversight so your team can focus on running the business.",
    },
    {
      question: "Do you support businesses with internal IT teams?",
      answer: "Yes. Our co-managed IT services are designed to support internal teams by handling monitoring, security, documentation, and complex issues without adding headcount.",
    },
    {
      question: "How quickly do you respond to critical issues?",
      answer: "Managed clients receive 24/7 emergency response. For urgent matters, our team acts immediately and communicates clearly throughout resolution.",
    },
    {
      question: "Can you help prepare for audits or regulatory exams?",
      answer: "Absolutely. Audit readiness is a core strength. We organize documentation, identify gaps, implement controls, and guide your team through the process with confidence.",
    },
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
        title="Managed IT Services in West Palm Beach | Compuwork"
        description="Compuwork provides expert managed IT services in West Palm Beach, specializing in cybersecurity and compliance for regulated financial organizations."
        canonical="/locations/managed-it-services-west-palm-beach"
        keywords={[
          "managed IT services West Palm Beach",
          "West Palm Beach IT support",
          "cybersecurity West Palm Beach",
          "SEC compliance IT West Palm Beach",
          "HIPAA IT services West Palm Beach",
          "West Palm Beach MSP",
          "IT support Palm Beach County",
          "financial services IT West Palm Beach",
          "healthcare IT West Palm Beach",
          "law firm IT West Palm Beach"
        ]}
        service={{
          serviceType: "Managed IT Services",
          provider: "Compuwork",
          areaServed: ["West Palm Beach", "Palm Beach County", "Palm Beach Gardens", "Jupiter", "Lake Worth"],
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: "West Palm Beach", url: "/locations/managed-it-services-west-palm-beach" },
        ]}
        faq={faqs}
      />

      <KeyFacts
        entityName="Compuwork Managed IT Services in West Palm Beach"
        entityType="LocalBusiness"
        description="Managed IT and cybersecurity services for small and mid-sized regulated organizations in West Palm Beach. We support financial firms, healthcare practices, law offices, and professional services across Palm Beach County."
        facts={[
          { label: "Service Area", value: "West Palm Beach, Palm Beach Gardens, Jupiter, Lake Worth, Palm Beach County" },
          { label: "Industries Served", value: "Finance, Healthcare, Legal, Non-Profit, Professional Services" },
          { label: "Compliance Expertise", value: "SEC, FINRA, HIPAA, NIST CSF, SOC 2, NFA" },
          { label: "Support Hours", value: "24/7/365" },
          { label: "Years of Experience", value: "20+" },
        ]}
        services={[
          "Managed & Co-Managed IT Services",
          "Managed Security Services Provider (MSSP)",
          "Cloud Solutions",
          "Help Desk Support",
          "AI Governance & Risk Management",
          "Compliance Alignment Services",
        ]}
        locations={[
          "West Palm Beach, FL",
          "Palm Beach Gardens, FL",
          "Jupiter, FL",
          "Lake Worth, FL",
          "Palm Beach County, FL",
        ]}
        contactInfo={{
          phone: "(877) 945-7177",
          email: "info@compuwork.ai",
          website: "https://compuwork.ai/locations/managed-it-services-west-palm-beach",
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
                <span className="text-primary-foreground/80 text-sm font-medium">West Palm Beach</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-display text-primary-foreground leading-tight mb-6"
              >
                Managed IT Services in{" "}
                <span className="text-gradient-gold">West Palm Beach</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg sm:text-xl text-primary-foreground/70 mb-8 leading-relaxed"
              >
                Your local partner for managed IT, cybersecurity, and compliance. From financial firms along Clematis Street to healthcare practices across Palm Beach County, we support organizations that cannot afford downtime, security gaps, or audit surprises.
              </motion.p>

              {/* Quick-Win Bullet Points */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-4 mb-8"
              >
                {[
                  "24/7/365 Support Across Palm Beach County",
                  "SEC, FINRA & HIPAA Compliance Experts",
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

      {/* Stats Bar Section */}
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
          {/* Mobile: Stacked layout */}
          <div className="flex flex-col lg:hidden gap-8">
            <AnimatedSection>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
                <img src={typeof floridaImage === "string" ? floridaImage : (floridaImage as any).src} 
                  alt="Professional IT consulting team providing Managed IT services in West Palm Beach for a corporate client"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl font-bold font-display text-foreground mb-4">
                Your Local Partner For{" "}
                <span className="text-gradient-gold">Managed IT, Cybersecurity, And Compliance</span>
              </h2>
              <p className="text-lg text-gold font-medium mb-6">
                Managed IT services in West Palm Beach built for regulated organisations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Compuwork delivers managed IT services in West Palm Beach designed for small and mid-sized regulated organisations that need reliability, security, and clear compliance alignment. From financial firms along Clematis Street to healthcare practices, law firms, and professional services across Palm Beach County, we support organisations that cannot afford downtime, security gaps, or audit surprises.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We do more than fix problems. <strong className="text-foreground">We become your long-term technology partner, helping you stay secure, compliant, and operational while your business grows.</strong>
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
          <div className="hidden lg:grid lg:grid-cols-2 gap-16">
            {/* Image column - uses relative container to match text height */}
            <div className="relative">
              <AnimatedSection className="sticky top-0">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full">
                  <img src={typeof floridaImage === "string" ? floridaImage : (floridaImage as any).src} 
                    alt="Professional IT consulting team providing Managed IT services in West Palm Beach for a corporate client"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                  {/* Invisible spacer that matches text column height */}
                  <div className="invisible">
                    <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">
                      Your Local Partner For Managed IT, Cybersecurity, And Compliance
                    </h2>
                    <p className="text-lg font-medium mb-6">
                      Managed IT services in West Palm Beach built for regulated organisations.
                    </p>
                    <p className="text-lg leading-relaxed mb-6">
                      Compuwork delivers managed IT services in West Palm Beach designed for small and mid-sized regulated organisations that need reliability, security, and clear compliance alignment. From financial firms along Clematis Street to healthcare practices, law firms, and professional services across Palm Beach County, we support organisations that cannot afford downtime, security gaps, or audit surprises.
                    </p>
                    <p className="text-lg leading-relaxed mb-6">
                      We do more than fix problems. We become your long-term technology partner, helping you stay secure, compliant, and operational while your business grows.
                    </p>
                    <div className="h-12"></div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
                Your Local Partner For{" "}
                <span className="text-gradient-gold">Managed IT, Cybersecurity, And Compliance</span>
              </h2>
              <p className="text-lg text-gold font-medium mb-6">
                Managed IT services in West Palm Beach built for regulated organisations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Compuwork delivers managed IT services in West Palm Beach designed for small and mid-sized regulated organisations that need reliability, security, and clear compliance alignment. From financial firms along Clematis Street to healthcare practices, law firms, and professional services across Palm Beach County, we support organisations that cannot afford downtime, security gaps, or audit surprises.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We do more than fix problems. <strong className="text-foreground">We become your long-term technology partner, helping you stay secure, compliant, and operational while your business grows.</strong>
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

      {/* Technology Challenges Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
              Technology Challenges Facing{" "}
              <span className="text-gradient-gold">West Palm Beach Businesses</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Organisations in West Palm Beach operate in a fast-paced, highly regulated environment. As teams grow and adopt cloud and remote work models, common challenges begin to surface.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              If any of these feel familiar, Compuwork helps turn IT from a constant concern into a stable, well-managed foundation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Services Section - Matching Home Page */}
      <Services />

      {/* Industries Section - 2x2 Card Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
              Industries We Support In{" "}
              <span className="text-gradient-gold">West Palm Beach</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              West Palm Beach is home to a diverse mix of regulated industries. Compuwork specializes in supporting organisations that require strong security, reliable uptime, and audit-ready documentation.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <AnimatedSection key={industry.title} delay={index * 0.1}>
                <Link href={industry.link}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-card border border-border rounded-2xl p-8 h-full shadow-card hover:shadow-card-hover hover:border-gold/30 transition-all group"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                        <industry.icon className="w-7 h-7 text-gold" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-display text-foreground group-hover:text-gold transition-colors">{industry.title}</h3>
                        <p className="text-muted-foreground text-sm">{industry.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gold font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Compuwork */}
      <section className="py-24 mesh-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <GlowOrb className="top-1/3 right-10" size="lg" color="gold" />
        <GlowOrb className="bottom-1/4 left-20" size="md" color="gold" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-primary-foreground mb-4">
              Why West Palm Beach Businesses Choose{" "}
              <span className="text-gradient-gold">Compuwork</span>
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 sm:p-10 lg:p-12 rounded-3xl border border-white/10"
            >
              <div className="space-y-6">
                {whyChooseUs.map((reason, index) => (
                  <AnimatedSection key={index} delay={index * 0.08}>
                    <div className="flex items-start gap-4 group">
                      <div className="w-7 h-7 rounded-full border-2 border-gold flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-gold/20 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-gold" />
                      </div>
                      <p className="text-primary-foreground/90 text-base sm:text-lg leading-relaxed">
                        <strong className="text-primary-foreground font-semibold">{reason.title}</strong>
                        {reason.description && (
                          <span className="text-primary-foreground/70">: {reason.description}</span>
                        )}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
              
              <div className="mt-10 pt-8 border-t border-white/10 text-center">
                <p className="text-primary-foreground/70 text-lg leading-relaxed">
                  We build long-term partnerships, not short-term fixes.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Onboarding Process */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
              Our{" "}
              <span className="text-gradient-gold">Onboarding Process</span>
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

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
              What Our <span className="text-gradient-gold">Clients Say</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Trusted by regulated organizations across West Palm Beach
            </p>
          </AnimatedSection>

          <div className="max-w-2xl mx-auto">
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
          </div>
        </div>
      </section>

      {/* Locations We Serve Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Map */}
            <AnimatedSection>
              <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
                <iframe
                  title="Compuwork Service Coverage Area - West Palm Beach"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114250.13824825!2d-80.16!3d26.7153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d5d8f9f3d4e1%3A0x8a7a63f7c9e7a4f6!2sWest%20Palm%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1706000000000!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-4 flex items-center gap-2 text-muted-foreground">
                <Map className="w-4 h-4 text-gold" />
                <span className="text-sm">Serving West Palm Beach and Palm Beach County</span>
              </div>
            </AnimatedSection>

            {/* Locations Grid */}
            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl font-bold font-display text-foreground mb-6">
                Locations We <span className="text-gradient-gold">Serve</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From Florida to New York, we provide on-site and remote IT support to businesses across the United States.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {locationsWeServe.map((location, index) => (
                  <motion.div
                    key={location.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {location.link !== "#" ? (
                      <Link href={location.link}
                        className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-gold/30 hover:shadow-md transition-all group"
                      >
                        <MapPin className="w-5 h-5 text-gold" />
                        <span className="font-medium text-foreground group-hover:text-gold transition-colors">{location.name}</span>
                        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-gold ml-auto transition-colors" />
                      </Link>
                    ) : (
                      <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl">
                        <MapPin className="w-5 h-5 text-gold" />
                        <span className="font-medium text-foreground">{location.name}</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-bold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
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
              Ready to <span className="text-gradient-gold">Get Started?</span>
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8">
              If your organization needs Managed IT Services in West Palm Beach delivered by a partner who prioritizes relationships, compliance, and long-term results, Compuwork is ready to help.
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

export default WestPalmBeachNewPage;
