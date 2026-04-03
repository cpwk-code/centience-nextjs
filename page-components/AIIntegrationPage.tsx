"use client";
import Link from 'next/link';
import { 
  Cpu, 
  ArrowLeft, 
  CheckCircle2, 
  ArrowRight, 
  Cloud,
  Server,
  Mail,
  Calendar,
  FileSpreadsheet,
  MessageSquare,
  Database,
  Shield,
  Zap,
  Settings,
  Link2,
  Workflow,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import GlowOrb from "@/components/GlowOrb";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

const integrationPlatforms = [
  {
    icon: Cloud,
    title: "Microsoft 365 AI Integration",
    description: "Seamlessly integrate AI capabilities into your Microsoft 365 environment with Copilot, Azure OpenAI, and custom AI solutions.",
    features: [
      "Microsoft CoPilot deployment and configuration",
      "Azure OpenAI service integration",
      "Teams AI-powered workflows",
      "SharePoint intelligent document processing",
      "Outlook smart email assistance"
    ],
  },
  {
    icon: Mail,
    title: "Google Workspace AI Integration",
    description: "Leverage Google's AI capabilities across Gmail, Docs, Sheets, and Meet with enterprise-grade security controls.",
    features: [
      "Gemini for Workspace deployment",
      "Gmail smart compose and summarization",
      "Google Docs AI writing assistance",
      "Sheets AI-powered data analysis",
      "Meet transcription and summaries"
    ],
  },
  {
    icon: Server,
    title: "On-Premise AI Solutions",
    description: "Deploy AI capabilities within your own infrastructure for maximum data control and compliance with strict regulatory requirements.",
    features: [
      "Private AI model deployment",
      "Air-gapped environment support",
      "Local language model hosting",
      "Custom model fine-tuning",
      "Full data sovereignty"
    ],
  },
];

const integrationServices = [
  {
    icon: Link2,
    title: "API Integration",
    description: "Connect AI services to your existing business applications through secure, well-documented APIs.",
    features: ["REST API integration", "Webhook configuration", "OAuth authentication", "Rate limiting setup", "Error handling"],
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Automate repetitive tasks by integrating AI into your existing business processes and workflows.",
    features: ["Power Automate flows", "Zapier integrations", "Custom automation scripts", "Trigger-based actions", "Multi-step workflows"],
  },
  {
    icon: Database,
    title: "Data Pipeline Integration",
    description: "Connect AI tools to your data sources while maintaining security and compliance requirements.",
    features: ["Secure data connectors", "ETL pipeline setup", "Real-time data sync", "Data transformation", "Audit logging"],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Ensure all AI integrations meet your security policies and regulatory compliance requirements.",
    features: ["Access control setup", "Data encryption", "Compliance monitoring", "Security audits", "Policy enforcement"],
  },
  {
    icon: Settings,
    title: "Custom Configuration",
    description: "Tailor AI integrations to your specific business needs with custom prompts, models, and settings.",
    features: ["Custom prompt engineering", "Model selection guidance", "Parameter optimization", "Use case customization", "Performance tuning"],
  },
  {
    icon: MessageSquare,
    title: "Training & Support",
    description: "Comprehensive training and ongoing support to ensure your team gets the most from AI integrations.",
    features: ["User training sessions", "Admin documentation", "Best practices guides", "Ongoing support", "Quarterly reviews"],
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Boost Productivity",
    description: "Automate repetitive tasks and let your team focus on high-value work with AI-powered assistance.",
  },
  {
    icon: Shield,
    title: "Maintain Compliance",
    description: "All integrations designed with SEC, FINRA, and HIPAA requirements in mind from day one.",
  },
  {
    icon: Database,
    title: "Keep Data Secure",
    description: "Your data stays within your control with enterprise-grade security and data governance.",
  },
];

const stats = [
  { value: "40%", label: "Productivity Gain" },
  { value: "100%", label: "Data Control" },
  { value: "10+", label: "Platform Expertise" },
  { value: "24/7", label: "Support" },
];

const useCases = [
  { name: "Email Summarization", description: "AI-powered email summaries and smart responses in Outlook and Gmail" },
  { name: "Document Generation", description: "Automated document drafting and formatting in Word and Google Docs" },
  { name: "Data Analysis", description: "Intelligent insights from spreadsheets in Excel and Google Sheets" },
  { name: "Meeting Intelligence", description: "Transcription, summaries, and action items from Teams and Meet" },
  { name: "Knowledge Search", description: "AI-enhanced search across SharePoint, Drive, and on-premise repositories" },
  { name: "Process Automation", description: "Intelligent workflow automation with AI-powered decision making" },
];

const AIIntegrationPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI Integration for Microsoft 365, Google Workspace & On-Premise | Compuwork"
        description="Integrate AI capabilities into Microsoft 365, Google Workspace, and on-premise environments. Boost productivity while maintaining compliance and data security."
        canonical="/services/ai-integration"
        keywords={[
          'AI integration services',
          'Microsoft 365 AI',
          'Google Workspace AI',
          'on-premise AI',
          'CoPilot deployment',
          'Gemini for Workspace',
          'enterprise AI integration',
          'AI workflow automation',
          'secure AI deployment',
          'AI for business',
        ]}
        service={{
          serviceType: 'AI Integration Services',
          provider: 'Compuwork',
          areaServed: ['New York', 'Florida', 'United States'],
        }}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/#services' },
          { name: 'AI Integration', url: '/services/ai-integration' },
        ]}
        faq={[
          {
            question: 'Can you integrate AI into our existing Microsoft 365 environment?',
            answer: 'Yes, we specialize in deploying Microsoft CoPilot and Azure OpenAI services within your existing M365 environment, ensuring seamless integration with Teams, Outlook, SharePoint, and other Microsoft applications.',
          },
          {
            question: 'Do you support on-premise AI deployments for regulated industries?',
            answer: 'Absolutely. For organizations with strict data residency requirements, we deploy private AI models within your own infrastructure, giving you complete data sovereignty and control.',
          },
        ]}
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
              className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg"
            >
              <Cpu className="w-10 h-10 text-white" />
            </motion.div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {["Microsoft 365", "Google Workspace", "On-Premise"].map((tag) => (
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
              AI Integration for <span className="text-gradient-gold">Your Environment</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-primary-foreground/70 mb-4 max-w-2xl"
            >
              Seamlessly integrate AI capabilities into Microsoft 365, Google Workspace, and on-premise environments.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-lg text-primary-foreground/60 mb-8 max-w-2xl"
            >
              We deploy <strong className="text-primary-foreground">Microsoft CoPilot, Google Gemini, OpenAI ChatGPT, Claude Co-Work, xAI Grok</strong> and others including private AI models with your environment. We also implement enterprise-grade security, ensuring your team gets AI productivity without compromising compliance.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="gold" size="lg" className="shadow-gold" asChild>
                <Link href="/contact">
                  Speak to an AI Expert
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

      {/* Benefits Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
              AI That Works <span className="text-gradient-gold">Where You Work</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Integrate AI into your existing tools and workflows without disrupting your business operations.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((item, index) => (
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

      {/* Integration Platforms Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
              Platform <span className="text-gradient-gold">Integration Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Deep expertise across Microsoft, Google, and on-premise environments for seamless AI deployment.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {integrationPlatforms.map((platform, index) => (
              <AnimatedSection key={platform.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-card border border-border rounded-2xl p-8 h-full shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center mb-6">
                    <platform.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-foreground mb-3">{platform.title}</h3>
                  <p className="text-muted-foreground mb-6">{platform.description}</p>
                  <ul className="space-y-2">
                    {platform.features.map((feature) => (
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

      {/* Integration Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
              Comprehensive Integration <span className="text-gradient-gold">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              End-to-end support from initial assessment to ongoing optimization and support.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrationServices.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-card border border-border rounded-2xl p-8 h-full shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center mb-6">
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

      {/* Use Cases Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
              Real-World <span className="text-gradient-gold">Use Cases</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Practical AI applications that deliver immediate value to your team.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((item, index) => (
              <AnimatedSection key={item.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card border border-border rounded-xl p-6 shadow-card"
                >
                  <h3 className="text-lg font-bold text-gradient-gold mb-2">{item.name}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
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
            <Cpu className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
              Ready to Integrate AI <span className="text-gradient-gold">Into Your Workflow</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Schedule a free AI integration assessment and discover how to boost productivity while maintaining compliance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="xl" className="shadow-gold-lg" asChild>
                <Link href="/get-ai-assessment">
                  Get AI Readiness Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              No commitment required
            </p>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIIntegrationPage;
