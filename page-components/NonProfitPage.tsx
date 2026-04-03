"use client";
import Link from 'next/link';
import { Heart, ArrowLeft, ArrowRight, Shield, CheckCircle2, Users, Clock, Award, TrendingUp, Lock, Cloud, Headphones, Brain, FileCheck, Zap, Database, FileText, Globe, HandHeart, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import CountUp from "@/components/CountUp";
import GlowOrb from "@/components/GlowOrb";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import KeyFacts from "@/components/KeyFacts";

const NonProfitPage = () => {
  const stats = [
    { value: 20, suffix: "+", label: "Years in Business", icon: Clock },
    { value: 100, suffix: "+", label: "Clients Supported", icon: Users },
    { value: 99.8, suffix: "%", label: "Satisfaction Rate", icon: Award },
    { value: 10, suffix: "+", label: "Year Avg. Relationship", icon: TrendingUp },
  ];

  const services = [
    {
      icon: Headphones,
      title: "Fully Managed IT Support",
      description: "We act as your dedicated IT department — helpdesk, remote support, on-site visits, device and network management, and vendor coordination for teams of 25 to 200 users.",
    },
    {
      icon: Shield,
      title: "Cybersecurity That Protects Donors & Data",
      description: "Layered protection including endpoint security, threat monitoring, email security, phishing defense, and staff security awareness training to safeguard sensitive donor and client data.",
    },
    {
      icon: Database,
      title: "Backup & Disaster Recovery",
      description: "Automated backups, rapid recovery solutions, business continuity planning, and compliance-ready retention so your mission never stops due to ransomware or hardware failure.",
    },
    {
      icon: Brain,
      title: "IT Strategy & Budget-Friendly Planning",
      description: "IT roadmaps built around your goals, scalable solutions for growing nonprofits, quarterly planning and reviews, and grant-friendly documentation support.",
    },
    {
      icon: Cloud,
      title: "Google Workspace & Cloud Collaboration",
      description: "Setup and migration to Google Workspace for Nonprofits, secure email and file sharing, user and permissions management, and support for remote staff and volunteers.",
    },
    {
      icon: Globe,
      title: "TechSoup & Nonprofit Licensing",
      description: "We help you access and implement discounted solutions through TechSoup.org — Microsoft 365 Nonprofit, Google Workspace eligibility, security tools, and cloud services.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Assess",
      description: "Identify security gaps, infrastructure needs, and compliance requirements through a comprehensive assessment tailored to nonprofit environments.",
    },
    {
      step: "02",
      title: "Align",
      description: "Map IT systems and policies to donor data protection standards, grant requirements, and industry best practices for mission-driven organizations.",
    },
    {
      step: "03",
      title: "Implement",
      description: "Deploy monitoring, security tools, cloud collaboration, and reporting systems that maintain compliance and protect your organization's data.",
    },
    {
      step: "04",
      title: "Grow",
      description: "Regularly review and improve systems as your nonprofit scales programs, adds staff, and modernizes infrastructure — all within budget.",
    },
  ];

  const challenges = [
    {
      icon: Lock,
      title: "Donor & Client Data Security",
      description: "Protect sensitive donor information, client records, and organizational data from breaches and unauthorized access with enterprise-grade security.",
    },
    {
      icon: FileText,
      title: "Limited Budget & Resources",
      description: "Get enterprise-level IT support without the overhead of a full internal IT team — predictable monthly pricing designed for nonprofit budgets.",
    },
    {
      icon: HandHeart,
      title: "Compliance & Funding Requirements",
      description: "Meet donor, grant, and regulatory requirements for data protection and reporting with documentation that satisfies auditors and funders.",
    },
  ];

  const nonprofitSystems = [
    "Donor management and CRM platforms",
    "Volunteer coordination systems",
    "Secure fundraising and payment tools",
    "Case management solutions",
    "Remote workforce technologies",
    "Compliance and reporting systems",
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Managed IT Services for Nonprofits | 25–200 Users | Compuwork"
        description="Secure, reliable IT support for nonprofit organizations with 25–200 users. Cybersecurity, Google Workspace, TechSoup support, and predictable pricing. Serving New York & Florida."
        canonical="/industries/non-profit"
        keywords={[
          'nonprofit IT support',
          'managed IT for nonprofits',
          'nonprofit cybersecurity',
          'Google Workspace for nonprofits',
          'TechSoup IT support',
          'nonprofit managed services',
          'nonprofit data protection',
          'IT services for nonprofits',
          'nonprofit technology solutions',
          'nonprofit IT budget planning',
        ]}
        service={{
          serviceType: 'Managed IT Services for Nonprofits',
          provider: 'Compuwork',
          areaServed: ['New York', 'Florida', 'United States'],
        }}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Industries', url: '/#industries' },
          { name: 'Non-Profit', url: '/industries/non-profit' },
        ]}
        faq={[
          {
            question: 'Do you help nonprofits access discounted software?',
            answer: 'Yes — we assist organizations with TechSoup, Microsoft 365 Nonprofit, and Google Workspace eligibility. We make sure you maximize every available nonprofit benefit while staying secure and compliant.',
          },
          {
            question: 'Can you support remote staff and volunteers?',
            answer: 'Absolutely. We secure and manage remote access, devices, and collaboration tools so your team stays connected and productive from anywhere.',
          },
          {
            question: 'Do you offer cybersecurity tailored for nonprofits?',
            answer: 'Yes. We protect donor, client, and organizational data with enterprise-grade security including endpoint protection, threat monitoring, email security, and staff security awareness training.',
          },
        ]}
      />

      <KeyFacts
        entityName="Compuwork Managed IT for Nonprofits"
        entityType="Service"
        description="Expert managed IT services for nonprofit organizations with 25–200 users. Cybersecurity, Google Workspace, TechSoup support, and predictable pricing."
        facts={[
          { label: "Target Clients", value: "Nonprofits with 25–200 Users, Mission-Driven Organizations, NGOs" },
          { label: "Key Capabilities", value: "TechSoup Partnership, Google Workspace for Nonprofits, Microsoft 365 Nonprofit" },
          { label: "Security Focus", value: "Donor Data Protection, Endpoint Security, Phishing Defense, Staff Training" },
          { label: "Years Serving Organizations", value: "20+" },
          { label: "Client Satisfaction", value: "99.8%" },
          { label: "Average Client Relationship", value: "10+ years" },
        ]}
        services={[
          "Fully Managed IT Support",
          "Cybersecurity & Donor Data Protection",
          "Backup & Disaster Recovery",
          "Google Workspace & Cloud Collaboration",
          "TechSoup & Nonprofit Licensing Support",
          "IT Strategy & Budget Planning",
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
          website: "https://compuwork.ai/industries/non-profit",
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
                className="w-20 h-20 bg-purple-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg"
              >
                <HandHeart className="w-10 h-10 text-white" />
              </motion.div>

              <div className="flex flex-wrap gap-2 mb-6">
                {["Donor Protection", "TechSoup", "Google Workspace", "Cybersecurity"].map((framework) => (
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
                IT Support Built for{" "}
                <span className="text-gradient-gold">Nonprofits</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-primary-foreground/70 mb-4"
              >
                Secure, reliable technology that helps you focus on your mission — not IT problems. Designed for organizations with 25 to 200 users.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-lg text-primary-foreground/60 mb-8"
              >
                Compuwork provides managed IT services designed specifically for nonprofit organizations that need dependable support, strong cybersecurity, and <strong className="text-primary-foreground">predictable costs — without the overhead of a full internal IT team.</strong>
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

      {/* Mission + Trust Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
              Your Mission Comes First.{" "}
              <span className="text-gradient-gold">We Handle the Technology.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Nonprofits face unique technology challenges — limited budgets, lean internal staff, high cybersecurity risks, compliance requirements, and increasing reliance on cloud collaboration. <strong className="text-foreground">Compuwork partners with nonprofit teams to deliver enterprise-grade IT support</strong> with the flexibility and care mission-driven organizations deserve.
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
                <HandHeart className="w-10 h-10 text-gold" />
                <span className="text-gold font-bold text-lg">Technology Should Empower Your Cause</span>
              </div>
              <p className="text-primary-foreground text-xl md:text-2xl leading-relaxed">
                With <span className="text-gold font-bold">20+ years supporting mission-driven organizations</span>, we understand that nonprofits need more than technical support — they need a partner invested in their success.
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
              Managed IT Services for{" "}
              <span className="text-gradient-gold">Nonprofits</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From helpdesk support to cybersecurity and cloud collaboration, we deliver the full spectrum of IT services nonprofits need to stay secure and mission-focused.
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

      {/* Systems We Deploy */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-6">
                Nonprofit Systems{" "}
                <span className="text-gradient-gold">We Commonly Implement</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Beyond IT support, Compuwork helps nonprofits deploy and manage the tools that keep operations running smoothly. Whether you're scaling your programs or modernizing outdated infrastructure, we ensure your technology supports your mission.
              </p>
              <div className="space-y-4">
                {nonprofitSystems.map((system, index) => (
                  <motion.div
                    key={system}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                    <span className="text-foreground">{system}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-6">
                Why Nonprofits{" "}
                <span className="text-gradient-gold">Choose Compuwork</span>
              </h2>
              <div className="space-y-4">
                {[
                  "Predictable monthly pricing",
                  "Fast, friendly support",
                  "Experience with nonprofit environments",
                  "Expertise in TechSoup & nonprofit licensing",
                  "Security-first approach",
                  "Solutions that scale with your organization",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
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
              Helping Nonprofits Stay{" "}
              <span className="text-gradient-gold">Secure, Connected & Mission-Focused</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Our proven 4-step process ensures your organization reduces downtime, improves cybersecurity, supports hybrid teams, and spends smarter through nonprofit technology discounts.
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
              Let's Strengthen Your Technology —{" "}
              <span className="text-gradient-gold">So You Can Strengthen Your Impact</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Whether you're supporting a small local nonprofit or a multi-site organization, Compuwork is ready to help. Schedule a free nonprofit IT assessment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg" className="shadow-gold" asChild>
                <Link href="/get-started">
                  Book a Consultation
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

export default NonProfitPage;
