"use client";
import Link from 'next/link';
import { 
  Shield, 
  ArrowLeft, 
  CheckCircle2, 
  ArrowRight, 
  Lock, 
  Eye, 
  FileCheck, 
  AlertTriangle, 
  Database,
  Users,
  Building2,
  Briefcase,
  Scale,
  MessageSquare,
  Mail,
  MessageCircle,
  Smartphone,
  Hash,
  TrendingUp,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import GlowOrb from "@/components/GlowOrb";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import KeyFacts from "@/components/KeyFacts";

const complianceServices = [
  {
    icon: Database,
    title: "Communication Archiving and Retention",
    description: "We design and manage systems that automatically archive written communications across approved platforms, aligned with regulatory retention requirements.",
  },
  {
    icon: Shield,
    title: "Mobile Device Management and Security",
    description: "We implement and manage MDM solutions that enforce secure communication, policy controls, and archiving on business-managed mobile devices.",
  },
  {
    icon: Lock,
    title: "Approved Channel Governance",
    description: "We help define which communication tools are permitted, restricted, or monitored to meet compliance standards and regulatory expectations.",
  },
  {
    icon: FileCheck,
    title: "Policy Alignment and Documentation",
    description: "Technology configurations are aligned with written policies to ensure clarity, consistency, and audit readiness.",
  },
  {
    icon: Eye,
    title: "Ongoing Compliance Oversight",
    description: "Communication compliance is not a one-time setup. We provide continuous management, adjustments, and support as regulations, platforms, and business needs evolve.",
  },
];

const communicationTools = [
  {
    icon: Mail,
    title: "Email",
    description: "Business email communications across all platforms",
  },
  {
    icon: MessageCircle,
    title: "Chat Platforms",
    description: "Internal and external chat conversations",
  },
  {
    icon: Smartphone,
    title: "Text Messages",
    description: "SMS and MMS business communications",
  },
  {
    icon: MessageSquare,
    title: "Apple Messages",
    description: "iMessage and Apple Business Chat",
  },
  {
    icon: Hash,
    title: "Slack",
    description: "Workspace channels and direct messages",
  },
  {
    icon: Users,
    title: "Microsoft Teams",
    description: "Team chats, channels, and meetings",
  },
];

const stats = [
  { value: "100%", label: "Automated Archiving" },
  { value: "SEC/FINRA", label: "Regulatory Alignment" },
  { value: "Tamper-Proof", label: "Data Integrity" },
  { value: "Instant", label: "Audit Retrieval" },
];

const targetIndustries = [
  {
    icon: Building2,
    title: "Financial Services",
    description: "RIAs, broker-dealers, and fund managers subject to SEC and FINRA recordkeeping rules.",
  },
  {
    icon: TrendingUp,
    title: "Investment Firms",
    description: "Private equity, hedge funds, and asset managers with investor communication requirements.",
  },
  {
    icon: Scale,
    title: "Legal Practices",
    description: "Law firms handling sensitive client communications and litigation hold requirements.",
  },
  {
    icon: Briefcase,
    title: "Regulated Businesses",
    description: "Healthcare, insurance, and other organizations with formal retention obligations.",
  },
];

const clientBenefits = [
  "Practical solutions that work with how your teams already operate",
  "Clear documentation and policy language that auditors understand",
  "Ongoing management so compliance keeps pace with regulatory changes",
  "Direct access to experienced engineers and compliance professionals",
  "Transparent, fixed-cost service models without hidden fees",
];

const ComplianceCommunicationPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Communication Compliance Services | Compuwork"
        description="Ensure your firm meets strict regulatory requirements with Compuwork's communication compliance services. We provide secure compliance across the USA. Book now!"
        canonical="/services/communication-compliance"
        keywords={[
          'communication compliance',
          'communication archiving',
          'email archiving',
          'regulatory compliance',
          'SEC communication requirements',
          'FINRA communication compliance',
          'message retention',
          'business communication governance',
        ]}
        service={{
          serviceType: 'Communication Compliance Services',
          provider: 'Compuwork',
          areaServed: ['New York', 'Florida', 'United States'],
        }}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/#services' },
          { name: 'Communication Compliance', url: '/services/communication-compliance' },
        ]}
        faq={[
          {
            question: 'What is communication compliance?',
            answer: 'Communication compliance refers to the policies, systems, and controls used to capture, archive, secure, and retrieve business communications in regulated environments. This includes email, chat platforms, text messages, and collaboration tools. The goal is to ensure communications are retained according to regulatory requirements and are accessible during audits, examinations, or legal reviews.',
          },
          {
            question: 'Why is communication archiving required for regulated organizations?',
            answer: 'In regulated industries, anything written is considered a business record. Regulators expect organizations to maintain complete and accurate records of business communications. Archiving helps ensure records are preserved, protected from tampering, and retrievable when requested.',
          },
          {
            question: 'Can communication compliance be enforced without disrupting daily workflows?',
            answer: 'Yes. When implemented correctly, communication compliance runs in the background. Users communicate as they normally would, while systems automatically capture, retain, and secure records. This reduces friction and improves consistency across the organization.',
          },
          {
            question: 'How does Compuwork approach communication compliance?',
            answer: 'Compuwork focuses on practical, real-world compliance. We design systems that align technology, policy, and user behavior. Our approach emphasizes automation, documentation, and ongoing management rather than one-time implementations or theoretical frameworks.',
          },
        ]}
      />
      
      {/* Semantic Key Facts for AI Search Engines */}
      <KeyFacts
        entityName="Compuwork Communication Compliance Services"
        entityType="Service"
        description="Enterprise communication compliance services with built-in archiving for regulated organizations. Includes email archiving, message retention, mobile device management, and communication governance for SEC, FINRA, and HIPAA compliance."
        facts={[
          { label: "Automated Archiving", value: "100%" },
          { label: "Regulatory Alignment", value: "SEC/FINRA" },
          { label: "Data Integrity", value: "Tamper-Proof" },
          { label: "Audit Retrieval", value: "Instant" },
          { label: "Compliance Frameworks", value: "SEC, FINRA, HIPAA" },
        ]}
        services={[
          "Communication Archiving and Retention",
          "Mobile Device Management",
          "Approved Channel Governance",
          "Policy Alignment and Documentation",
          "Ongoing Compliance Oversight",
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
          website: "https://compuwork.ai/services/communication-compliance",
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
              className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg"
            >
              <MessageSquare className="w-10 h-10 text-white" />
            </motion.div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {["SEC", "FINRA", "HIPAA", "SOX"].map((fw) => (
                <span key={fw} className="bg-gold/20 text-gold text-sm font-semibold px-4 py-1.5 rounded-full border border-gold/30">
                  {fw}
                </span>
              ))}
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-primary-foreground mb-6"
            >
              Communication <span className="text-gradient-gold">Compliance</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-primary-foreground/70 mb-4 max-w-2xl"
            >
              In regulated industries, compliance extends beyond systems and cybersecurity. Every email, chat message, and text can be considered a business record.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-lg text-primary-foreground/60 mb-8 max-w-2xl"
            >
              Compuwork helps organizations across the USA design communication environments that meet regulatory requirements while reducing user friction and compliance risk.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="gold" size="lg" className="shadow-gold" asChild>
                <Link href="/contact">
                  Speak to a Compliance Expert
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

      {/* Why Communication Compliance Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
              Why Communication Compliance Is a <span className="text-gradient-gold">Growing Focus</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              One of the biggest areas that finance and other regulated industries must address is communication archiving.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {communicationTools.map((tool, index) => (
              <AnimatedSection key={tool.title} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-card border border-border rounded-xl p-6 h-full shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-gold/10 to-gold/20 border border-gold/20 rounded-lg flex items-center justify-center mb-4">
                    <tool.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-lg font-semibold font-display text-foreground mb-2">{tool.title}</h3>
                  <p className="text-sm text-muted-foreground">{tool.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              All of these communications are expected to be archived, secured, and retrievable. This requires more than basic email retention. It requires the right standards, security controls, and mobile device management in place.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Communication Compliance Solutions Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
              Compuwork's Communication <span className="text-gradient-gold">Compliance Solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Communication compliance is delivered as part of Compuwork's managed compliance and cybersecurity services. We focus on practical systems that align technology, policy, and real-world usage.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceServices.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-card border border-border rounded-2xl p-8 h-full shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Who Communication Compliance Is For Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
              Communication Compliance <span className="text-gradient-gold">Is For</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {targetIndustries.map((industry, index) => (
              <AnimatedSection key={industry.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card border border-border rounded-2xl p-8 h-full shadow-card hover:shadow-card-hover transition-shadow"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-gold to-gold-light rounded-xl flex items-center justify-center mb-6">
                    <industry.icon className="w-7 h-7 text-navy" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-foreground mb-3">{industry.title}</h3>
                  <p className="text-muted-foreground">{industry.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center">
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              If your organization is required to retain and produce communications, automation and consistency are essential.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Organizations Choose Compuwork Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
              Why Organizations <span className="text-gradient-gold">Choose Compuwork</span>
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="mb-12">
              <p className="text-muted-foreground text-lg mb-8">
                Since 2005, Compuwork has provided managed IT and compliance services to regulated businesses across financial services, healthcare, legal, and professional services. Our clients choose us because we combine technical expertise with a practical understanding of how regulated organizations operate.
              </p>
              
              <ul className="space-y-4">
                {clientBenefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection className="text-center">
              <p className="text-foreground text-lg font-medium">
                Communication compliance works best when it is built into how your business operates, not added as an afterthought.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <AlertTriangle className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
              Ready for Your Next <span className="text-gradient-gold">Audit</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Schedule a free security assessment and discover how we can help you achieve and maintain compliance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="xl" className="shadow-gold-lg" asChild>
                <Link href="/free-risk-assessment">
                  Get Your Free Risk Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              No commitment required
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  What is communication compliance?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  Communication compliance refers to the policies, systems, and controls used to capture, archive, secure, and retrieve business communications in regulated environments. This includes email, chat platforms, text messages, and collaboration tools. The goal is to ensure communications are retained according to regulatory requirements and are accessible during audits, examinations, or legal reviews.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  Why is communication archiving required for regulated organizations?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  In regulated industries, anything written is considered a business record. Regulators expect organizations to maintain complete and accurate records of business communications. Archiving helps ensure records are preserved, protected from tampering, and retrievable when requested.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  Can communication compliance be enforced without disrupting daily workflows?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  Yes. When implemented correctly, communication compliance runs in the background. Users communicate as they normally would, while systems automatically capture, retain, and secure records. This reduces friction and improves consistency across the organization.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  How does Compuwork approach communication compliance?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  Compuwork focuses on practical, real-world compliance. We design systems that align technology, policy, and user behavior. Our approach emphasizes automation, documentation, and ongoing management rather than one-time implementations or theoretical frameworks.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComplianceCommunicationPage;
