"use client";
import Link from 'next/link';
import { 
  Cloud, 
  ArrowLeft, 
  CheckCircle2, 
  ArrowRight, 
  Server, 
  Lock, 
  Globe,
  Zap,
  Shield,
  Users,
  Headphones,
  Monitor,
  Database,
  Award,
  TrendingUp,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import GlowOrb from "@/components/GlowOrb";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import KeyFacts from "@/components/KeyFacts";
const cloudServices = [
  {
    icon: Monitor,
    title: "Microsoft 365 & Azure",
    description: "Full Microsoft cloud deployment, management, and optimization for enterprise-grade productivity and collaboration.",
    features: ["Microsoft 365 Administration", "Azure Cloud Infrastructure", "Exchange Online & Teams", "SharePoint & OneDrive", "Intune Device Management"],
  },
  {
    icon: Globe,
    title: "Google Workspace",
    description: "Complete Google Workspace setup and management for businesses preferring Google's collaborative ecosystem.",
    features: ["Gmail & Calendar Administration", "Google Drive Management", "Google Meet Integration", "Workspace Security Policies", "User Provisioning & SSO"],
  },
  {
    icon: Server,
    title: "Private Cloud Hosting",
    description: "Dedicated private cloud environments for organizations requiring maximum control, security, and compliance.",
    features: ["Dedicated Cloud Infrastructure", "Custom Security Configurations", "Compliance-Ready Architecture", "Hybrid Cloud Integration", "Performance Optimization"],
  },
  {
    icon: Database,
    title: "Cloud Backup & Recovery",
    description: "Enterprise-grade cloud backup and disaster recovery to protect your critical data and ensure business continuity.",
    features: ["Automated Cloud Backups", "Rapid Recovery Options", "Geographic Redundancy", "Point-in-Time Recovery", "Compliance Archiving"],
  },
  {
    icon: Lock,
    title: "Cloud Security",
    description: "Comprehensive cloud security with access controls, encryption, and continuous monitoring for regulated industries.",
    features: ["Identity & Access Management", "Multi-Factor Authentication", "Data Encryption", "Security Monitoring", "Compliance Controls"],
  },
  {
    icon: Headphones,
    title: "Hosted VoIP & Communications",
    description: "Cloud-based phone systems and unified communications that work from anywhere with enterprise features.",
    features: ["Cloud Phone Systems", "Video Conferencing", "Unified Communications", "Mobile Integration", "Call Recording & Analytics"],
  },
];

const whyCloud = [
  {
    icon: TrendingUp,
    title: "40% Cost Savings",
    description: "Reduce infrastructure spending by eliminating hardware costs, maintenance, and energy expenses.",
  },
  {
    icon: Zap,
    title: "Instant Scalability",
    description: "Scale resources up or down on demand, perfect for growing businesses and seasonal workloads.",
  },
  {
    icon: Globe,
    title: "Work From Anywhere",
    description: "Enable secure remote access for your team with cloud-based applications and virtual desktops.",
  },
];

const stats = [
  { value: "40%", label: "Cost Reduction" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24/7", label: "Support" },
  { value: "100%", label: "Compliance Ready" },
];

const CloudSolutionsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Managed Cloud Solutions for Business | Compuwork"
        description="Secure cloud migration, Microsoft 365, Azure & private cloud hosting for regulated industries. 99.9% uptime with 24/7 support to keep your business connected and compliant."
        canonical="/services/cloud-solutions"
        keywords={[
          'cloud solutions for business',
          'managed cloud services',
          'cloud migration services',
          'Microsoft 365 managed services',
          'Azure cloud hosting',
          'Google Workspace management',
          'private cloud for financial services',
          'secure cloud infrastructure',
          'cloud compliance solutions',
          'hybrid cloud management',
        ]}
        service={{
          serviceType: 'Cloud Solutions',
          provider: 'Compuwork',
          areaServed: ['New York', 'Florida', 'United States'],
        }}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/#services' },
          { name: 'Cloud Solutions', url: '/services/cloud-solutions' },
        ]}
      />
      
      {/* Semantic Key Facts for AI Search Engines */}
      <KeyFacts
        entityName="Compuwork Cloud Solutions"
        entityType="Service"
        description="Secure cloud solutions for regulated industries including Microsoft 365, Azure, Google Workspace, private cloud hosting, and cloud backup with 99.9% uptime SLA."
        facts={[
          { label: "Uptime SLA", value: "99.9%" },
          { label: "Cloud Platforms", value: "Microsoft Azure, Google Cloud, Private Cloud" },
          { label: "Productivity Suites", value: "Microsoft 365, Google Workspace" },
          { label: "Industries Served", value: "Financial Services, Healthcare, Legal" },
          { label: "Support Availability", value: "24/7/365" },
        ]}
        services={[
          "Microsoft 365 & Azure Deployment",
          "Google Workspace Management",
          "Private Cloud Hosting",
          "Cloud Backup & Recovery",
          "Cloud Security & Compliance",
          "Cloud Migration Services",
          "Hybrid Cloud Integration",
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
          website: "https://compuwork.ai/services/cloud-solutions",
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
              className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg"
            >
              <Cloud className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-primary-foreground mb-6"
            >
              Secure Cloud Solutions for <span className="text-gradient-gold">Regulated Industries</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-primary-foreground/70 mb-4 max-w-2xl"
            >
              Compuwork delivers managed cloud solutions, including Microsoft 365, Azure, Google Workspace, and private cloud hosting, designed for organizations that demand security, uptime, and regulatory compliance.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-lg text-primary-foreground/60 mb-8 max-w-2xl"
            >
              With <strong className="text-primary-foreground">99.9% uptime</strong> and 24/7 expert support, we handle your cloud infrastructure so you can focus on what matters most: your clients and your business.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="gold" size="lg" className="shadow-gold" asChild>
                <Link href="/get-cloud-assessment">
                  Get Cloud Assessment
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

      {/* Why Cloud Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
              Why Regulated Firms Choose <span className="text-gradient-gold">Cloud</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Reduce costs, scale on demand, and enable secure remote work with compliant cloud infrastructure.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {whyCloud.map((item, index) => (
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

      {/* Cloud Services Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
              Microsoft 365, Azure & <span className="text-gradient-gold">Private Cloud Hosting</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Fully managed cloud platforms with built-in compliance controls and 24/7 monitoring.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-card border border-border rounded-2xl p-8 h-full shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
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

      {/* What's Included Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
                Zero-Downtime Cloud <span className="text-gradient-gold">Migration</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We plan, execute, and manage your cloud migration with zero data loss and minimal disruption, ensuring compliance every step of the way.
              </p>
              <div className="space-y-4">
                {[
                  "Cloud readiness assessment",
                  "Migration planning and execution",
                  "Data migration with zero downtime",
                  "Security and compliance configuration",
                  "User training and adoption support",
                  "Ongoing management and optimization",
                  "24/7 monitoring and support",
                  "Cost optimization and reporting",
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-card">
                <h3 className="text-2xl font-bold font-display text-foreground mb-6">Ready to move to the cloud?</h3>
                <p className="text-muted-foreground mb-6">
                  Schedule a free cloud assessment and see how we can transform your infrastructure while reducing costs.
                </p>
                <div className="space-y-4">
                  <Button variant="gold" size="lg" className="w-full shadow-gold" asChild>
                    <Link href="/get-cloud-assessment">
                      Get Your Free Cloud Assessment
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <p className="text-sm text-center text-muted-foreground">
                    No commitment required
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CloudSolutionsPage;
