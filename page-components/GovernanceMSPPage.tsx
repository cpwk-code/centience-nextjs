"use client";
import Link from 'next/link';
import {
  Server,
  ArrowLeft,
  CheckCircle2,
  ArrowRight,
  Cloud,
  Monitor,
  Network,
  Shield,
  Building2,
  Headphones,
  Users,
  Wrench,
  HardDrive,
  Lock,
  Phone,
  Clock,
  Award,
  Handshake,
  Zap,
  Target,
  Puzzle,
  TrendingUp,
  Mail,
  MessageSquare,
  UserCheck,
  Brain,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import GlowOrb from "@/components/GlowOrb";
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

const coManagedServices = [
  {
    icon: Headphones,
    title: "Help Desk Augmentation",
    description: "Extend your IT team's capacity with our 24/7 help desk support, handling overflow tickets and after-hours requests.",
    features: ["24/7/365 Tier 1-2 Support", "Ticket Overflow Management", "After-Hours Coverage", "Remote Troubleshooting", "Escalation Procedures"],
  },
  {
    icon: Shield,
    title: "Security Operations",
    description: "Add enterprise-grade security expertise to your team without the cost of a dedicated security staff.",
    features: ["Security Monitoring & Alerting", "Vulnerability Assessments", "Incident Response Support", "Compliance Assistance", "Security Awareness Training"],
  },
  {
    icon: TrendingUp,
    title: "Infrastructure Management",
    description: "Let us handle the routine infrastructure tasks so your team can focus on strategic initiatives.",
    features: ["Server Monitoring & Maintenance", "Patch Management", "Backup Verification", "Performance Optimization", "Capacity Planning"],
  },
  {
    icon: Puzzle,
    title: "Project Support",
    description: "Get extra hands for migrations, deployments, and special projects without long-term commitments.",
    features: ["Cloud Migrations", "System Deployments", "Network Upgrades", "Application Rollouts", "Documentation Projects"],
  },
  {
    icon: Target,
    title: "Specialized Expertise",
    description: "Access specialized skills your team may lack: cybersecurity, compliance, cloud architecture, and more.",
    features: ["Cybersecurity Consulting", "Compliance Expertise", "Cloud Architecture", "Microsoft 365 Specialists", "Network Engineering"],
  },
  {
    icon: Zap,
    title: "Strategic Advisory",
    description: "Get a virtual CIO/CTO perspective to help guide your technology roadmap and investments.",
    features: ["Technology Roadmapping", "Budget Planning", "Vendor Evaluation", "Risk Assessments", "Quarterly Business Reviews"],
  },
];

const helpDeskServices = [
  {
    icon: Phone,
    title: "24/7 Phone Support",
    description: "Round-the-clock phone support with real technicians who know your environment. No call centers or scripts.",
    features: ["Direct technician access", "15-minute average response", "After-hours support", "Emergency escalation", "Call-back guarantee"],
  },
  {
    icon: Mail,
    title: "Email & Ticket Support",
    description: "Submit requests anytime via email or our ticketing portal with guaranteed response times and tracking.",
    features: ["Email-to-ticket automation", "Priority-based routing", "Status tracking portal", "SLA monitoring", "Ticket history access"],
  },
  {
    icon: Monitor,
    title: "Remote Troubleshooting",
    description: "Fast resolution through secure remote access. Most issues resolved without waiting for an on-site visit.",
    features: ["Secure remote access", "Screen sharing support", "Same-session fixes", "Multi-platform support", "Session recording"],
  },
  {
    icon: Wrench,
    title: "On-Site Support",
    description: "When remote can't cut it, our technicians come to you for hands-on support and hardware issues.",
    features: ["Scheduled visits", "Emergency dispatches", "Hardware troubleshooting", "Network infrastructure", "New equipment setup"],
  },
  {
    icon: UserCheck,
    title: "User Account Management",
    description: "Complete user lifecycle management from onboarding to offboarding with security best practices.",
    features: ["New user provisioning", "Access management", "Password resets", "Permission changes", "Secure offboarding"],
  },
  {
    icon: Brain,
    title: "AI-Powered Automation",
    description: "Our help desk leverages AI to automate routine tasks, route tickets intelligently, and detect issues before they impact your team.",
    features: ["Intelligent ticket routing", "Predictive issue detection", "Automated workflows", "Smart knowledge base", "Proactive alerting"],
  },
];

const whyChooseUs = [
  {
    icon: Users,
    title: "Your In-House IT Department",
    description: "Think of us as your dedicated in-house IT team, without the overhead. We become an extension of your business.",
  },
  {
    icon: Clock,
    title: "15-Minute Response SLA",
    description: "Average response time for support requests. AI-powered triage ensures your issue reaches the right expert instantly.",
  },
  {
    icon: Handshake,
    title: "Fully Managed or Co-Managed",
    description: "Choose full outsourcing or augment your existing team. Flexible partnership that scales with your needs.",
  },
  {
    icon: Award,
    title: "98% Client Satisfaction",
    description: "Our clients consistently rate our team excellent because we combine human expertise with AI-driven efficiency.",
  },
];

const stats = [
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "15min", label: "Avg. Response Time" },
  { value: "24/7", label: "Support Availability" },
  { value: "98%", label: "Client Satisfaction" },
];

const GovernanceMSPPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Governance MSP | Managed & Co-Managed IT with 24/7 Help Desk | Compuwork"
        description="Governance MSP: fully managed IT, co-managed IT augmentation, and 24/7 AI-powered help desk for regulated organizations. 99.9% uptime, 15-min response, Microsoft 365, Google Workspace, and hybrid infrastructure."
        canonical="/services/governance-msp"
        keywords={[
          'governance MSP',
          'managed service provider',
          'fully managed IT services',
          'co-managed IT services',
          '24/7 IT help desk',
          'IT support financial services',
          'Microsoft 365 managed services',
          'outsourced IT department',
          'IT staff augmentation',
          'managed IT for healthcare',
          'managed IT for law firms',
          'proactive IT management',
        ]}
        service={{
          serviceType: 'Governance MSP Services',
          provider: 'Compuwork',
          areaServed: ['New York', 'Florida', 'United States'],
        }}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/#services' },
          { name: 'Governance MSP', url: '/services/governance-msp' },
        ]}
      />

      <KeyFacts
        entityName="Compuwork Governance MSP"
        entityType="Service"
        description="Governance MSP combining fully managed IT, co-managed IT augmentation, and 24/7 AI-powered help desk for regulated industries. Includes Microsoft 365, Google Workspace, private cloud, on-premise servers, and complete infrastructure management with 99.9% uptime."
        facts={[
          { label: "Uptime Guarantee", value: "99.9%" },
          { label: "Support Availability", value: "24/7/365" },
          { label: "Response Time", value: "15 minutes" },
          { label: "Client Satisfaction", value: "98%" },
          { label: "Industries Served", value: "Financial Services, Healthcare, Legal, Professional Services" },
          { label: "Years in Business", value: "20+" },
        ]}
        services={[
          "Fully Managed IT Services",
          "Co-Managed IT Augmentation",
          "24/7 AI-Powered Help Desk",
          "Microsoft 365 & Azure Management",
          "Google Workspace Administration",
          "Private Cloud Hosting",
          "On-Premise Server Management",
          "Network Infrastructure",
          "Security & Compliance",
          "Data Protection & Backup",
          "Strategic Advisory (vCIO/vCTO)",
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
          website: "https://compuwork.ai/services/governance-msp",
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
              className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg"
            >
              <Server className="w-10 h-10 text-white" />
            </motion.div>

            <div className="flex flex-wrap gap-2 mb-6">
              {["Fully Managed", "Co-Managed", "24/7 Help Desk", "vCIO/vCTO"].map((tag) => (
                <span key={tag} className="bg-gold/20 text-gold text-sm font-semibold px-4 py-1.5 rounded-full border border-gold/30">
                  {tag}
                </span>
              ))}
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-primary-foreground mb-6"
            >
              Governance MSP: <span className="text-gradient-gold">Your Complete IT Partner</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-primary-foreground/70 mb-4 max-w-2xl"
            >
              Whether you need a full IT department or want to augment your existing team, Compuwork delivers managed IT, co-managed support, and 24/7 AI-powered help desk under one roof.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-lg text-primary-foreground/60 mb-8 max-w-2xl"
            >
              With <strong className="text-primary-foreground">99.9% uptime, 15-minute response SLAs, and 20+ years of experience</strong>, we become your dedicated IT partner so you can focus on growing your business.
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

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
              Managed or Co-Managed — <span className="text-gradient-gold">You Decide</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Full outsourcing, team augmentation, or anything in between. One partner, predictable costs, complete flexibility.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
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

      {/* Infrastructure Services — Fully Managed */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
              Microsoft 365, Google Workspace & <span className="text-gradient-gold">Hybrid Infrastructure</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Cloud, on-premise, or hybrid. One partner, one predictable monthly cost, complete coverage.
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

      {/* Co-Managed IT Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
              Co-Managed IT: <span className="text-gradient-gold">Augment Your Team</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Already have an IT team? We fill the gaps — 24/7 coverage, specialized expertise, and project support while you stay in control.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coManagedServices.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-card border border-border rounded-2xl p-8 h-full shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
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

      {/* 24/7 Help Desk Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
              24/7 Help Desk <span className="text-gradient-gold">Powered by AI</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real technicians who know your environment, backed by AI automation for faster resolutions and smarter support.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {helpDeskServices.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-card border border-border rounded-2xl p-8 h-full shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
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
                One Partner, <span className="text-gradient-gold">Predictable Costs</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Stop juggling multiple vendors. End-to-end IT management with a single point of contact and predictable monthly costs. No surprise invoices.
              </p>
              <div className="space-y-4">
                {[
                  "24/7 proactive monitoring and alerting",
                  "Unlimited remote and on-site support",
                  "AI-automated ticket routing & triage",
                  "Patch management and security updates",
                  "Vendor management and procurement",
                  "Strategic IT planning and budgeting (vCIO)",
                  "Quarterly business reviews",
                  "Asset tracking and lifecycle management",
                  "Flexible: fully managed or co-managed",
                  "Month-to-month flexibility, no rigid contracts",
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
                <h3 className="text-2xl font-bold font-display text-foreground mb-6">Ready to simplify your IT?</h3>
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

      {/* CTA Section */}
      <section className="py-24 mesh-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-primary-foreground mb-6">
              Ready to simplify your IT?
            </h2>
            <p className="text-xl text-primary-foreground/70 mb-8">
              Whether you need a full IT department or just extra hands, we've got you covered.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button variant="gold" size="lg" className="shadow-gold" asChild>
                <Link href="/schedule-assessment">
                  Schedule Your Free Assessment
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

export default GovernanceMSPPage;
