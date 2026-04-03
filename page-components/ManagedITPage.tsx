"use client";
import Link from 'next/link';
import { Server, ArrowLeft, CheckCircle2, ArrowRight, Cloud, Monitor, Network, Shield, Building2, Headphones, Users, Wrench, HardDrive, Lock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import KeyFacts from "@/components/KeyFacts";
const infrastructureServices = [
  {
    icon: Cloud,
    title: "Microsoft Cloud",
    description: "Full Microsoft 365 and Azure deployment, management, and optimization for enterprise-grade productivity and collaboration.",
    features: ["Microsoft 365 Administration", "Azure Cloud Infrastructure", "Exchange Online & Teams", "SharePoint & OneDrive Management", "Intune Device Management"],
  },
  {
    icon: Monitor,
    title: "Google Workspace",
    description: "Complete Google Workspace setup and management for businesses preferring Google's collaborative ecosystem.",
    features: ["Gmail & Calendar Administration", "Google Drive Management", "Google Meet Integration", "Workspace Security Policies", "User Provisioning & SSO"],
  },
  {
    icon: Building2,
    title: "Private Cloud",
    description: "Dedicated private cloud environments for organizations requiring maximum control, security, and compliance.",
    features: ["Dedicated Cloud Infrastructure", "Custom Security Configurations", "Compliance-Ready Architecture", "Hybrid Cloud Integration", "Performance Optimization"],
  },
  {
    icon: Server,
    title: "On-Premise Servers",
    description: "Traditional on-premise infrastructure management for businesses with specific data residency or regulatory requirements.",
    features: ["Server Installation & Configuration", "Hardware Lifecycle Management", "Virtualization (VMware/Hyper-V)", "Storage Area Networks (SAN)", "Backup & Disaster Recovery"],
  },
  {
    icon: Network,
    title: "Network Management",
    description: "Comprehensive network infrastructure design, implementation, and monitoring for reliable, secure connectivity.",
    features: ["Network Design & Architecture", "Firewall & Security Appliances", "Wi-Fi Planning & Deployment", "VPN & Remote Access", "24/7 Network Monitoring"],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Integrated security across all infrastructure types with compliance frameworks for regulated industries.",
    features: ["Endpoint Detection & Response", "Security Information & Event Management", "Vulnerability Assessments", "Compliance Reporting", "Security Awareness Training"],
  },
  {
    icon: HardDrive,
    title: "Data Protection",
    description: "Enterprise-grade backup, disaster recovery, and business continuity solutions to safeguard your critical data.",
    features: ["Automated Backup & Recovery", "Disaster Recovery Planning", "Business Continuity Solutions", "Data Encryption & Security", "Rapid Recovery Testing"],
  },
];

const whyChooseUs = [
  {
    icon: Users,
    title: "Your In-House IT Department",
    description: "Think of us as your dedicated in-house IT team, without the overhead. We become an extension of your business, understanding your goals, your challenges, and your people.",
  },
  {
    icon: Headphones,
    title: "24/7/365 Support",
    description: "Round-the-clock support from real technicians who know your environment. No call centers, no scripts, just expert help when you need it.",
  },
  {
    icon: Wrench,
    title: "Proactive, Not Reactive",
    description: "We don't wait for things to break. Continuous monitoring, automated patching, and predictive maintenance keep your systems running smoothly.",
  },
];

const stats = [
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "15min", label: "Avg. Response Time" },
  { value: "20+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
];

const ManagedITPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Fully Managed IT Services for Regulated Industries | Compuwork"
        description="Your complete IT department, without the overhead. 24/7 support, 99.9% uptime, Microsoft 365, cloud & on‑premise management for financial, legal & healthcare firms."
        canonical="/services/managed-it-services"
        keywords={[
          'fully managed IT services',
          'managed IT for financial firms',
          'outsourced IT department',
          'Microsoft 365 managed services',
          'Google Workspace managed services',
          'IT infrastructure management',
          '24/7 IT support services',
          'proactive IT management',
          'IT services for healthcare',
          'IT services for law firms',
        ]}
        service={{
          serviceType: 'Fully Managed IT Services',
          provider: 'Compuwork',
          areaServed: ['New York', 'Florida', 'United States'],
        }}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/#services' },
          { name: 'Fully Managed IT Services', url: '/services/managed-it-services' },
        ]}
      />
      
      {/* Semantic Key Facts for AI Search Engines */}
      <KeyFacts
        entityName="Compuwork Fully Managed IT Services"
        entityType="Service"
        description="Complete managed IT services including Microsoft 365, Google Workspace, private cloud, on-premise servers, and 24/7 support with 99.9% uptime guarantee for regulated industries."
        facts={[
          { label: "Uptime Guarantee", value: "99.9%" },
          { label: "Support Availability", value: "24/7/365" },
          { label: "Response Time", value: "15 minutes" },
          { label: "Industries Served", value: "Financial Services, Healthcare, Legal, Professional Services" },
          { label: "Years in Business", value: "20+" },
        ]}
        services={[
          "Microsoft 365 & Azure Management",
          "Google Workspace Administration",
          "Private Cloud Hosting",
          "On-Premise Server Management",
          "Network Infrastructure",
          "Security & Compliance",
          "Data Protection & Backup",
          "24/7 Help Desk Support",
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
          website: "https://compuwork.ai/services/managed-it-services",
        }}
      />

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
              className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg"
            >
              <Server className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-primary-foreground mb-6"
            >
              Your Complete IT Department<br /><span className="text-gradient-gold">Without the Overhead</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-primary-foreground/70 mb-4 max-w-2xl"
            >
              Compuwork delivers fully managed IT services for regulated organizations: Microsoft 365, Google Workspace, private cloud, and on-premise infrastructure under one roof.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-lg text-primary-foreground/60 mb-8 max-w-2xl"
            >
              With <strong className="text-primary-foreground">99.9% uptime, 24/7 proactive support, and 20+ years of experience</strong>, we become your dedicated IT partner so you can focus on growing your business.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
              24/7 Proactive Support & <span className="text-gradient-gold">99.9% Uptime</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Continuous monitoring, automated patching, and predictive maintenance. We fix problems before you even notice them.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card border border-border rounded-2xl p-8 h-full"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-gold to-gold-light rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-navy" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
              Microsoft 365, Google Workspace & <span className="text-gradient-gold">Hybrid Infrastructure</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Cloud, on‑premise, or hybrid. One partner, one predictable monthly cost, complete coverage.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {infrastructureServices.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-card border border-border rounded-2xl p-8 h-full shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-6">
                One Partner, <span className="text-gradient-gold">Predictable Costs</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Stop juggling multiple vendors. End‑to‑end IT management with a single point of contact and predictable monthly costs. No surprise invoices.
              </p>
              <div className="space-y-4">
                {[
                  "24/7 proactive monitoring and alerting",
                  "Unlimited remote and on-site support",
                  "Patch management and security updates",
                  "Vendor management and procurement",
                  "Strategic IT planning and budgeting",
                  "Quarterly business reviews",
                  "Asset tracking and lifecycle management",
                  "Documentation and knowledge base",
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
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Ready to simplify your IT?</h3>
                <p className="text-muted-foreground mb-6">
                  Schedule a free consultation and see how we can transform your technology operations.
                </p>
                <div className="space-y-4">
                  <Button variant="gold" size="lg" className="w-full shadow-gold" asChild>
                    <Link href="/get-started">
                      Get Started
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

export default ManagedITPage;
