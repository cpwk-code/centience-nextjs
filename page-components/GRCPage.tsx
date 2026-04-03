"use client";
import Link from 'next/link';
import {
  Shield,
  ArrowLeft,
  CheckCircle2,
  ArrowRight,
  FileCheck,
  AlertTriangle,
  Users,
  Award,
  TrendingUp,
  BarChart3,
  ClipboardCheck,
  Scale,
  Phone,
  Target,
  Eye,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import GlowOrb from "@/components/GlowOrb";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import KeyFacts from "@/components/KeyFacts";

const grcPillars = [
  {
    icon: Users,
    title: "Governance",
    description:
      "We help you establish clear accountability, policies, and oversight mechanisms that align cybersecurity with your business strategy.",
    features: [
      "Security program development and maturity assessments",
      "Policy and standards creation",
      "Board-level reporting and executive dashboards",
      "Security steering committee design",
      "Third-party and vendor governance frameworks",
      "Security roadmap development",
    ],
  },
  {
    icon: Target,
    title: "Risk Management",
    description:
      "We identify, assess, and prioritize risks to your business — then build practical mitigation strategies that reduce exposure without slowing operations.",
    features: [
      "Enterprise risk assessments",
      "Cyber risk quantification",
      "Threat modeling",
      "Risk register development and management",
      "Business Impact Analysis (BIA)",
      "Control gap analysis",
      "Remediation planning and tracking",
    ],
  },
  {
    icon: Scale,
    title: "Compliance & Regulatory Alignment",
    description:
      "We help organizations meet industry and regulatory requirements while building sustainable compliance programs — not one-time audit efforts.",
    features: [
      "Readiness assessments",
      "Audit preparation and remediation",
      "Control implementation guidance",
      "Continuous compliance monitoring",
      "Documentation and evidence management",
    ],
  },
];

const frameworks = [
  { name: "NIST CSF", description: "National Institute of Standards and Technology Cybersecurity Framework" },
  { name: "ISO 27001", description: "International standard for information security management systems" },
  { name: "SOC 2", description: "Service Organization Control security, availability, and confidentiality" },
  { name: "HIPAA", description: "Health Insurance Portability and Accountability Act" },
  { name: "PCI-DSS", description: "Payment Card Industry Data Security Standard" },
  { name: "CMMC", description: "Cybersecurity Maturity Model Certification" },
  { name: "GDPR", description: "General Data Protection Regulation" },
  { name: "SEC / FINRA", description: "Securities and Exchange Commission & Financial Industry Regulatory Authority" },
];

const whyGRCMatters = [
  {
    icon: BarChart3,
    title: "Strategic Alignment",
    description: "Connect IT security objectives with executive leadership and business goals.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Risk Reduction",
    description: "Quantify and systematically reduce cyber risk across the organization.",
  },
  {
    icon: Award,
    title: "Improved Audit Outcomes",
    description: "Pass audits with confidence through comprehensive documentation and evidence management.",
  },
  {
    icon: ClipboardCheck,
    title: "Regulatory Confidence",
    description: "Stay ahead of evolving regulations with sustainable compliance programs.",
  },
];

const stats = [
  { value: "99%+", label: "Audit Success Rate" },
  { value: "8+", label: "Frameworks Supported" },
  { value: "100%", label: "Policy Coverage" },
  { value: "24/7", label: "Compliance Monitoring" },
];

const GRCPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Governance, Risk & Compliance (GRC) Services | Compuwork"
        description="Build audit-ready, governance-driven security programs. GRC services aligned with NIST, ISO 27001, SOC 2, HIPAA, PCI-DSS, CMMC, GDPR, and SEC/FINRA."
        canonical="/services/grc"
        keywords={[
          "governance risk compliance",
          "GRC services",
          "cybersecurity governance",
          "risk management services",
          "compliance program",
          "NIST CSF compliance",
          "ISO 27001",
          "SOC 2 readiness",
          "audit preparation",
          "security program development",
        ]}
        service={{
          serviceType: "Governance, Risk & Compliance (GRC) Services",
          provider: "Compuwork",
          areaServed: ["New York", "Florida", "United States"],
        }}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/#services" },
          { name: "Governance, Risk & Compliance", url: "/services/grc" },
        ]}
      />

      <KeyFacts
        entityName="Compuwork Governance, Risk & Compliance (GRC) Services"
        entityType="Service"
        description="Structured, business-aligned GRC solutions including governance frameworks, enterprise risk management, and regulatory compliance programs for NIST, ISO 27001, SOC 2, HIPAA, PCI-DSS, CMMC, GDPR, and SEC/FINRA."
        facts={[
          { label: "Audit Success Rate", value: "99%+" },
          { label: "Frameworks Supported", value: "NIST CSF, ISO 27001, SOC 2, HIPAA, PCI-DSS, CMMC, GDPR, SEC/FINRA" },
          { label: "Policy Coverage", value: "100%" },
          { label: "Compliance Monitoring", value: "24/7" },
        ]}
        services={[
          "Security Program Development",
          "Enterprise Risk Assessments",
          "Cyber Risk Quantification",
          "Compliance Readiness Assessments",
          "Audit Preparation & Remediation",
          "Policy & Standards Creation",
          "Board-Level Reporting",
          "Continuous Compliance Monitoring",
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
          website: "https://compuwork.ai/services/grc",
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
              className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg"
            >
              <Shield className="w-10 h-10 text-white" />
            </motion.div>

            <div className="flex flex-wrap gap-2 mb-6">
              {["NIST", "ISO 27001", "SOC 2", "HIPAA", "CMMC"].map((fw) => (
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
              Governance, Risk & <span className="text-gradient-gold">Compliance</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-primary-foreground/70 mb-4 max-w-2xl"
            >
              Strong cybersecurity starts with strong governance. We design scalable frameworks that reduce risk, improve visibility, and strengthen executive oversight.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-lg text-primary-foreground/60 mb-8 max-w-2xl"
            >
              We go beyond checklists — we build <strong className="text-primary-foreground">structured, defensible, and audit-ready security programs</strong> aligned with your business objectives and regulatory requirements.
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

      {/* Why GRC Matters */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
              Why GRC <span className="text-gradient-gold">Matters</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Without governance and structured risk management, cybersecurity becomes reactive. GRC ensures strategic alignment and measurable outcomes.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyGRCMatters.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card border border-border rounded-2xl p-8 h-full shadow-card hover:shadow-card-hover transition-shadow"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-gold to-gold-light rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-navy" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* GRC Pillars Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
              Governance, Risk & <span className="text-gradient-gold">Compliance Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Three pillars of a resilient, audit-ready security program.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8">
            {grcPillars.map((pillar, index) => (
              <AnimatedSection key={pillar.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-card border border-border rounded-2xl p-8 h-full shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                    <pillar.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-foreground mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground mb-6">{pillar.description}</p>
                  <ul className="space-y-2">
                    {pillar.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
              Frameworks & <span className="text-gradient-gold">Regulations We Support</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Sustainable compliance programs aligned with the standards your industry demands.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {frameworks.map((framework, index) => (
              <AnimatedSection key={framework.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card border border-border rounded-xl p-6 shadow-card h-full"
                >
                  <h3 className="text-lg font-bold text-gradient-gold mb-2">{framework.name}</h3>
                  <p className="text-muted-foreground text-sm">{framework.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <BookOpen className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
              Build a Resilient, <span className="text-gradient-gold">Audit-Ready</span> Organization
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Whether you're preparing for certification, responding to regulatory pressure, or building a mature security program from the ground up — let's build a governance-driven security program that protects your organization.
            </p>
            <div className="flex justify-center">
              <Button variant="gold" size="xl" className="shadow-gold-lg" asChild>
                <Link href="/free-risk-assessment">
                  Get Your Free Risk Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">No commitment required</p>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GRCPage;
