"use client";
import Link from 'next/link';
import { 
  Headphones, 
  ArrowLeft, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Users,
  Phone,
  Mail,
  MessageSquare,
  Wrench,
  Award,
  Zap,
  Monitor,
  UserCheck,
  Brain
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import GlowOrb from "@/components/GlowOrb";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

const supportServices = [
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
    icon: MessageSquare,
    title: "Software Support & Training",
    description: "Help your team get the most from their tools with application support and user training.",
    features: ["Application troubleshooting", "How-to guidance", "User training sessions", "Software updates", "Feature optimization"],
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
    icon: Clock,
    title: "15-Minute Response",
    description: "Average response time for support requests. AI-powered triage ensures your issue reaches the right expert instantly.",
  },
  {
    icon: Award,
    title: "98% Satisfaction Rate",
    description: "Our clients consistently rate our support team excellent because we combine human expertise with AI efficiency to solve problems faster.",
  },
  {
    icon: Users,
    title: "Dedicated Team + AI",
    description: "Technicians who know your business backed by AI automation that handles routine tasks so experts focus on what matters most.",
  },
];

const stats = [
  { value: "24/7", label: "Availability" },
  { value: "15min", label: "Avg. Response" },
  { value: "98%", label: "Satisfaction" },
  { value: "<1hr", label: "Resolution Time" },
];

const HelpDeskPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="24/7 IT Help Desk & Technical Support | Compuwork"
        description="15-minute response, 98% satisfaction and unlimited support requests. Real technicians (not call centers) available 24/7/365 for your team."
        canonical="/services/help-desk"
        keywords={[
          '24/7 IT help desk',
          'IT technical support',
          'remote IT support services',
          'managed IT helpdesk',
          'dedicated IT support team',
          'unlimited IT support',
          'business IT support',
          'IT support for financial firms',
          'IT help desk outsourcing',
          'fast IT response time',
        ]}
        service={{
          serviceType: '24/7 IT Help Desk Support',
          provider: 'Compuwork',
          areaServed: ['New York', 'Florida', 'United States'],
        }}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/#services' },
          { name: 'Help Desk', url: '/services/help-desk' },
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
              className="w-20 h-20 bg-gradient-to-br from-rose-500 to-red-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg"
            >
              <Headphones className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-primary-foreground mb-6"
            >
              24/7 IT Help Desk <span className="text-gradient-gold">Powered by AI Automation</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-primary-foreground/70 mb-4 max-w-2xl"
            >
              Compuwork combines real technicians who know your environment with AI-driven automation to deliver faster resolutions and smarter support — not call centers or scripts.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-lg text-primary-foreground/60 mb-8 max-w-2xl"
            >
              We leverage <strong className="text-primary-foreground">AI automation to maximize efficiency</strong> — intelligent ticket routing, predictive issue detection, and automated workflows — so your team gets faster answers with 98% satisfaction and sub-1-hour resolution.
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
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
              Dedicated Technicians Who Know <span className="text-gradient-gold">Your Business</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Your team works with the same experts every time. No rotating strangers, no learning curves.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
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

      {/* Support Services Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
              Phone, Remote & <span className="text-gradient-gold">On-Site Support</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Multiple channels to reach us: 24/7 phone, email ticketing, and on-site visits when remote can't cut it.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportServices.map((service, index) => (
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
                Unlimited Requests, <span className="text-gradient-gold">No Per-Incident Fees</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Predictable monthly costs with no surprise invoices. Call as often as you need without watching the meter.
              </p>
              <div className="space-y-4">
                {[
                  "Direct access to expert technicians",
                  "AI-automated ticket routing & triage",
                  "Predictive issue detection",
                  "Technicians who know your systems",
                  "Unlimited support requests",
                  "No per-incident or per-minute fees",
                  "Priority escalation when needed",
                  "AI-driven proactive issue prevention",
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
                <h3 className="text-2xl font-bold font-display text-foreground mb-6">Need IT support?</h3>
                <p className="text-muted-foreground mb-6">
                  Schedule a consultation and see how our help desk can keep your team productive 24/7.
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
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <Zap className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
              Ready for <span className="text-gradient-gold">Real Support</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Stop struggling with unresponsive IT support. Get a team that actually solves problems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="xl" className="shadow-gold-lg" asChild>
                <Link href="/get-started">
                  Get Started
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

      <Footer />
    </div>
  );
};

export default HelpDeskPage;
