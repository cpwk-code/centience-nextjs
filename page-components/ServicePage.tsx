"use client";
'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Shield, Server, Cloud, Code, Lock, Headphones, ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const servicesData = {
  "cybersecurity": {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    subtitle: "Protect your business, safeguard your data, and pass every audit with confidence",
    description: "Our comprehensive cybersecurity and data protection services align your technology with SEC, FINRA, HIPAA, and NIST frameworks. We protect your critical data with enterprise-grade backup, disaster recovery, and business continuity solutions, ensuring you're always audit-ready and resilient.",
    features: [
      "Risk assessments and vulnerability scanning",
      "Security policy development and documentation",
      "Penetration testing and threat analysis",
      "Compliance gap analysis and remediation",
      "Security awareness training for staff",
      "24/7 security monitoring and incident response",
      "Automated backup and disaster recovery",
      "Business continuity planning",
      "Data encryption at rest and in transit",
      "Archiving and retention management",
    ],
    benefits: [
      { title: "99%+ Audit Success", desc: "Our clients pass every compliance audit" },
      { title: "99% Threat Reduction", desc: "Proactive patching prevents most breaches" },
      { title: "Zero Data Loss", desc: "Continuous backup and rapid recovery protection" },
      { title: "Real-time Protection", desc: "24/7 monitoring catches threats early" },
    ],
    gradient: "from-amber-500 to-orange-600",
  },
  "managed-it": {
    icon: Server,
    title: "Fully Managed IT",
    subtitle: "Focus on your business while we handle your technology",
    description: "Complete IT infrastructure management with proactive monitoring, maintenance, and support so you never have to worry about technology again.",
    features: [
      "24/7 proactive system monitoring",
      "Server and network management",
      "Desktop and laptop support",
      "Patch management and updates",
      "Vendor management and procurement",
      "Strategic IT planning and consulting",
    ],
    benefits: [
      { title: "99.9% Uptime", desc: "Industry-leading system reliability" },
      { title: "15min Response", desc: "Average help desk response time" },
      { title: "Predictable Costs", desc: "Fixed monthly IT spending" },
    ],
    gradient: "from-blue-500 to-indigo-600",
  },
  "cloud-solutions": {
    icon: Cloud,
    title: "Cloud Solutions",
    subtitle: "Secure, scalable cloud infrastructure built for compliance",
    description: "Migrate to the cloud with confidence. Our solutions are designed for regulated industries with security and compliance built-in.",
    features: [
      "Cloud migration planning and execution",
      "Hybrid cloud architecture design",
      "Microsoft 365 and Azure deployment",
      "Cloud security and access controls",
      "Hosted VoIP phone systems",
      "Virtual desktop infrastructure (VDI)",
    ],
    benefits: [
      { title: "40% Cost Savings", desc: "Reduce infrastructure spending" },
      { title: "Instant Scalability", desc: "Grow resources on demand" },
      { title: "Work Anywhere", desc: "Secure remote access for teams" },
    ],
    gradient: "from-cyan-500 to-blue-600",
  },
  "ai-compliance": {
    icon: Code,
    title: "AI Governance & Compliance",
    subtitle: "Use AI tools without breaking compliance while protecting company data",
    description: "Harness the power of AI while maintaining regulatory compliance. We implement secure data ownership, governance controls, and policy frameworks for safe innovation.",
    features: [
      "AI tool compliance assessment",
      "Data ownership and sovereignty controls",
      "AI governance policy development",
      "Secure AI integration architecture",
      "Vendor risk assessment for AI tools",
      "Audit trail and explainability documentation",
    ],
    benefits: [
      { title: "Safe Innovation", desc: "Adopt AI without compliance risk" },
      { title: "Data Control", desc: "Maintain ownership of your sensitive data" },
      { title: "Regulator Ready", desc: "Documentation that satisfies auditors" },
    ],
    gradient: "from-purple-500 to-pink-600",
  },
  "help-desk": {
    icon: Headphones,
    title: "24/7 Help Desk",
    subtitle: "Expert support whenever you need it",
    description: "Round-the-clock technical support with rapid response times. Our dedicated team is always ready to help your staff stay productive.",
    features: [
      "24/7/365 phone and email support",
      "Remote troubleshooting and fixes",
      "On-site support when needed",
      "User account management",
      "Software support and training",
      "Dedicated account management",
    ],
    benefits: [
      { title: "Always Available", desc: "Support 24 hours a day, 365 days" },
      { title: "Fast Resolution", desc: "Most issues resolved in under an hour" },
      { title: "Happy Users", desc: "98% satisfaction rating" },
    ],
    gradient: "from-rose-500 to-red-600",
  },
};

const ServicePage = () => {
  const params = useParams();
  const slug = params?.slug as string
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) {
    return <div>Service not found</div>;
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background">
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
              className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-8 shadow-lg`}
            >
              <Icon className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-primary-foreground mb-6"
            >
              {service.title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-primary-foreground/70 mb-8 max-w-2xl"
            >
              {service.subtitle}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Button variant="gold" size="lg" className="shadow-gold" asChild>
                <a href="https://compuwork.ai/get-started" target="_blank" rel="noopener noreferrer">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-6">
                What We <span className="text-gradient-gold">Deliver</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">{service.description}</p>
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid gap-6">
                {service.benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    whileHover={{ scale: 1.02 }}
                    className="bg-card border border-border rounded-2xl p-6 shadow-card"
                  >
                    <h3 className="text-2xl font-bold text-gradient-gold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.desc}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 mesh-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-primary-foreground mb-6">
              Ready to simplify your IT?
            </h2>
            <p className="text-xl text-primary-foreground/70 mb-8">
              Schedule a free Consultation and see how we can transform your technology operations.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button variant="gold" size="lg" className="shadow-gold" asChild>
                <Link href="/free-risk-assessment">
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
            <p className="text-primary-foreground/50 text-sm mt-6">No commitment required</p>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePage;