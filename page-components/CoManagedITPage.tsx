"use client";
import Link from 'next/link';
import { Users, ArrowLeft, CheckCircle2, ArrowRight, Handshake, Shield, Headphones, Clock, TrendingUp, Zap, Target, Puzzle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import KeyFacts from "@/components/KeyFacts";

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

const benefits = [
  {
    icon: Users,
    title: "Extend Your Team",
    description: "Add capacity and expertise without the overhead of hiring full-time staff. We work alongside your IT team, not instead of them.",
  },
  {
    icon: Clock,
    title: "24/7 Coverage",
    description: "Provide round-the-clock support to your organization without burning out your internal team or paying overtime.",
  },
  {
    icon: Handshake,
    title: "Flexible Partnership",
    description: "Choose the services you need. Scale up or down as your requirements change. No rigid contracts or all-or-nothing packages.",
  },
];

const stats = [
  { value: "50%", label: "Reduced IT Burden" },
  { value: "24/7", label: "Extended Coverage" },
  { value: "100%", label: "Your Control" },
  { value: "20+", label: "Years Experience" },
];

const CoManagedITPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Co-Managed IT Services | Partner with Your IT Team | Compuwork"
        description="Augment your internal IT team with Compuwork's co-managed IT services. Get 24/7 support, specialized expertise, and flexible partnership. You stay in control."
        canonical="/services/co-managed-it-services"
        keywords={[
          'co-managed IT services',
          'IT staff augmentation',
          'co-managed support',
          'hybrid IT support',
          'IT team extension',
          'co-managed help desk',
          'IT partnership',
          'augmented IT services',
          'shared IT management',
          'co-managed security',
        ]}
        service={{
          serviceType: 'Co-Managed IT Services',
          provider: 'Compuwork',
          areaServed: ['New York', 'Florida', 'United States'],
        }}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/#services' },
          { name: 'Co-Managed IT Services', url: '/services/co-managed-it-services' },
        ]}
      />
      
      {/* Semantic Key Facts for AI Search Engines */}
      <KeyFacts
        entityName="Compuwork Co-Managed IT Services"
        entityType="Service"
        description="Co-managed IT services that augment your internal IT team with 24/7 support, specialized expertise, and flexible partnership options for regulated industries."
        facts={[
          { label: "Service Model", value: "Collaborative Partnership" },
          { label: "Support Availability", value: "24/7/365" },
          { label: "Flexibility", value: "Scale Up or Down Anytime" },
          { label: "Industries Served", value: "Financial Services, Healthcare, Legal, Professional Services" },
          { label: "Years in Business", value: "20+" },
        ]}
        services={[
          "Help Desk Augmentation",
          "Security Operations Support",
          "Infrastructure Management",
          "Project Support",
          "Specialized Expertise Access",
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
          website: "https://compuwork.ai/services/co-managed-it-services",
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
              className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg"
            >
              <Handshake className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-primary-foreground mb-6"
            >
              Your IT Team, <span className="text-gradient-gold">Supercharged</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-primary-foreground/70 mb-4 max-w-2xl"
            >
              Co-Managed IT gives your internal team the backup they need: 24/7 help desk, specialized expertise, and strategic support, all while you stay in control.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-lg text-primary-foreground/60 mb-8 max-w-2xl"
            >
              <strong className="text-primary-foreground">Flexible partnership</strong> that scales with your needs. We work alongside your IT staff, filling gaps and extending capabilities without replacing your team.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="gold" size="lg" className="shadow-gold" asChild>
                <Link href="/get-partnership-options">
                  Discuss Partnership Options
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
              The Best of <span className="text-gradient-gold">Both Worlds</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Keep your internal IT knowledge and control while gaining access to enterprise-level resources and 24/7 support.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((item, index) => (
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

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
              Choose the Support <span className="text-gradient-gold">You Need</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Pick and choose services à la carte. Scale up during busy periods, scale down when you don't need us. True flexibility.
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

      {/* How It Works Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-6">
                How <span className="text-gradient-gold">Co-Managed IT</span> Works
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We integrate seamlessly with your existing IT team and tools. You decide what you want to handle internally and what you want us to take off your plate.
              </p>
              <div className="space-y-4">
                {[
                  "We use your existing ticketing system or provide ours",
                  "Your team escalates to us, or we handle first-line support",
                  "Shared documentation and knowledge base",
                  "Regular sync meetings to stay aligned",
                  "Clear escalation paths and SLAs",
                  "Transparent reporting on all activities",
                  "No hidden fees. Pay for what you use",
                  "Month-to-month flexibility",
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
                  Schedule a free Consultation and see how we can transform your technology operations.
                </p>
                <div className="space-y-4">
                  <Button variant="gold" size="lg" className="w-full shadow-gold" asChild>
                    <Link href="/get-partnership-options">
                      Discuss Partnership Options
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
                <Link href="/get-partnership-options">
                  Discuss Partnership Options
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

export default CoManagedITPage;
