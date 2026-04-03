"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { 
  Gift, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Send, 
  DollarSign,
  Handshake,
  MessageSquare,
  Shield,
  Clock,
  Building2,
  TrendingUp,
  HeadphonesIcon,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState, useRef } from "react";
import { toast } from "sonner";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SEO from "@/components/SEO";
import { supabase } from "@/integrations/supabase/client";
import { useHCaptchaSiteKey } from "@/hooks/useHCaptchaSiteKey";

const ReferralPage = () => {
  const [formData, setFormData] = useState({
    yourFirstName: "",
    yourLastName: "",
    yourCompany: "",
    yourPhone: "",
    yourEmail: "",
    referralFirstName: "",
    referralLastName: "",
    referralEmail: "",
    referralPhone: "",
    referralCompany: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStartTime] = useState<number>(Date.now());
  const [honeypot, setHoneypot] = useState<string>("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);
  const { siteKey: hcaptchaSiteKey, error: captchaError } = useHCaptchaSiteKey();

  const onCaptchaVerify = (token: string) => {
    setCaptchaToken(token);
  };

  const onCaptchaExpire = () => {
    setCaptchaToken(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      toast.error("Please complete the captcha verification.");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke("submit-referral", {
        body: {
          yourFirstName: formData.yourFirstName,
          yourLastName: formData.yourLastName,
          yourCompany: formData.yourCompany,
          yourPhone: formData.yourPhone,
          yourEmail: formData.yourEmail,
          referralFirstName: formData.referralFirstName,
          referralLastName: formData.referralLastName,
          referralEmail: formData.referralEmail,
          referralPhone: formData.referralPhone,
          referralCompany: formData.referralCompany,
          message: formData.message,
          // Security fields
          website: honeypot,
          formStartTime,
          submissionTime: Date.now(),
          captchaToken,
          referringPage: window.location.pathname,
        },
      });

      if (error) {
        console.error("Submission error:", error);
        toast.error("Failed to submit referral. Please try again.");
        captchaRef.current?.resetCaptcha();
        setCaptchaToken(null);
        setIsSubmitting(false);
        return;
      }

      if (data?.error) {
        toast.error(data.error);
        captchaRef.current?.resetCaptcha();
        setCaptchaToken(null);
        setIsSubmitting(false);
        return;
      }

      toast.success("Thank you! Your referral has been submitted. We'll be in touch soon.");
      setFormData({
        yourFirstName: "",
        yourLastName: "",
        yourCompany: "",
        yourPhone: "",
        yourEmail: "",
        referralFirstName: "",
        referralLastName: "",
        referralEmail: "",
        referralPhone: "",
        referralCompany: "",
        message: "",
      });
      setCaptchaToken(null);
      captchaRef.current?.resetCaptcha();
    } catch (err) {
      console.error("Unexpected error:", err);
      toast.error("An unexpected error occurred. Please try again.");
      captchaRef.current?.resetCaptcha();
      setCaptchaToken(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: DollarSign,
      title: "25% Reward",
      description: "Earn 25% of the first month's revenue when your referral becomes a managed client.",
    },
    {
      icon: Handshake,
      title: "Relationship-Driven",
      description: "We treat every referral like family, building long-term partnerships, not just transactions.",
    },
    {
      icon: Shield,
      title: "Compliance Ready",
      description: "Your referral gets SEC, FINRA, HIPAA, and NIST compliance expertise from day one.",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Round-the-clock dedicated support ensuring their business never experiences downtime.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Submit Referral",
      description: "Fill out the form with your referral's contact information. We'll handle the rest.",
    },
    {
      step: "02",
      title: "Consultation",
      description: "Our team reaches out to understand their business goals, current setup, and compliance needs.",
    },
    {
      step: "03",
      title: "Custom Roadmap",
      description: "We design a tailored IT roadmap aligned with their specific requirements and industry standards.",
    },
    {
      step: "04",
      title: "You Get Rewarded",
      description: "Once they sign on as a managed client, you receive your 25% referral reward.",
    },
  ];

  const whyRefer = [
    { icon: Building2, text: "Local NYC & Florida expertise" },
    { icon: TrendingUp, text: "Scalable for 10-300+ employees" },
    { icon: DollarSign, text: "Transparent flat-rate pricing" },
    { icon: Shield, text: "Proactive security management" },
    { icon: Users, text: "Comprehensive coverage under one roof" },
    { icon: HeadphonesIcon, text: "Human-centered support culture" },
  ];

  const faqs = [
    {
      question: "How does the referral reward work?",
      answer: "When your referral becomes a Compuwork™ managed client, you receive 25% of their first month's revenue as a thank-you. It's straightforward, no complicated tiers or hidden conditions.",
    },
    {
      question: "What types of businesses can I refer?",
      answer: "We specialize in compliance-driven industries including financial services (broker-dealers, RIAs), legal firms, healthcare organizations, and professional services. Businesses with 10-300 employees are ideal.",
    },
    {
      question: "How long does the process take?",
      answer: "After you submit a referral, we typically reach out within 1 business day. The sales cycle varies based on the prospect's needs, but we keep you informed every step of the way.",
    },
    {
      question: "Can I refer multiple businesses?",
      answer: "Absolutely! There's no limit to how many referrals you can submit. Each successful referral earns you 25% of that client's first month revenue.",
    },
    {
      question: "What makes Compuwork™ different from other MSPs?",
      answer: "We focus exclusively on regulated industries, bringing 20+ years of compliance expertise. Our 99%+ audit success rate, 10+ year average client relationships, and 24/7 dedicated support set us apart.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="IT Referral Program | Earn 25% Commission | Compuwork"
        description="Earn 25% of the first month's revenue for every successful IT referral. No limits on referrals. Partner with Compuwork's trusted managed IT services."
        canonical="/referral"
        keywords={[
          'IT referral program',
          'MSP referral',
          'IT partner program',
          'managed services referral',
          'IT commission program',
        ]}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Referral Program', url: '/referral' },
        ]}
        faq={faqs}
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-2xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 bg-gold/10 rounded-full px-5 py-2.5 mb-6"
            >
              <Gift className="w-4 h-4 text-gold" />
              <span className="text-gold font-semibold text-sm tracking-wide uppercase">
                Referral Program
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-foreground mb-6 leading-tight">
              Refer a Business,{" "}
              <span className="text-gradient-gold">Earn 25%</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Many of our strongest client relationships began with a simple introduction. 
              A referral is the biggest compliment we can receive, and we never take it lightly.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-4 bg-card border border-gold/30 rounded-2xl px-8 py-4"
            >
              <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-gold" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Your Reward</p>
                <p className="text-2xl font-bold text-foreground">
                  25% of First Month's Revenue
                </p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-card border border-border rounded-2xl p-6 h-full text-center"
                >
                  <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <AnimatedSection direction="left" className="lg:col-span-3">
              <div className="bg-card border border-border rounded-3xl p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-2">
                  <MessageSquare className="w-6 h-6 text-gold" />
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                    Submit Your Referral
                  </h2>
                </div>
                <p className="text-muted-foreground mb-8">
                  We're on <span className="text-gold font-semibold">IT</span>. Fill in the required information and we'll reach out personally.
                </p>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Your Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-gold" />
                      Your Information
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="yourFirstName">First Name <span className="text-gold">*</span></Label>
                        <Input
                          id="yourFirstName"
                          required
                          value={formData.yourFirstName}
                          onChange={(e) => setFormData({ ...formData, yourFirstName: e.target.value })}
                          className="bg-background border-border focus:border-gold"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="yourLastName">Last Name</Label>
                        <Input
                          id="yourLastName"
                          value={formData.yourLastName}
                          onChange={(e) => setFormData({ ...formData, yourLastName: e.target.value })}
                          className="bg-background border-border focus:border-gold"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="yourCompany">Company Name <span className="text-gold">*</span></Label>
                        <Input
                          id="yourCompany"
                          required
                          value={formData.yourCompany}
                          onChange={(e) => setFormData({ ...formData, yourCompany: e.target.value })}
                          className="bg-background border-border focus:border-gold"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="yourPhone">Phone Number <span className="text-gold">*</span></Label>
                        <Input
                          id="yourPhone"
                          type="tel"
                          required
                          value={formData.yourPhone}
                          onChange={(e) => setFormData({ ...formData, yourPhone: e.target.value })}
                          className="bg-background border-border focus:border-gold"
                        />
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <Label htmlFor="yourEmail">Email <span className="text-gold">*</span></Label>
                        <Input
                          id="yourEmail"
                          type="email"
                          required
                          value={formData.yourEmail}
                          onChange={(e) => setFormData({ ...formData, yourEmail: e.target.value })}
                          className="bg-background border-border focus:border-gold"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Referral Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Gift className="w-5 h-5 text-gold" />
                      Referral Information
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="referralFirstName">First Name <span className="text-gold">*</span></Label>
                        <Input
                          id="referralFirstName"
                          required
                          value={formData.referralFirstName}
                          onChange={(e) => setFormData({ ...formData, referralFirstName: e.target.value })}
                          className="bg-background border-border focus:border-gold"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="referralLastName">Last Name <span className="text-gold">*</span></Label>
                        <Input
                          id="referralLastName"
                          required
                          value={formData.referralLastName}
                          onChange={(e) => setFormData({ ...formData, referralLastName: e.target.value })}
                          className="bg-background border-border focus:border-gold"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="referralEmail">Email <span className="text-gold">*</span></Label>
                        <Input
                          id="referralEmail"
                          type="email"
                          required
                          value={formData.referralEmail}
                          onChange={(e) => setFormData({ ...formData, referralEmail: e.target.value })}
                          className="bg-background border-border focus:border-gold"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="referralPhone">Phone Number <span className="text-gold">*</span></Label>
                        <Input
                          id="referralPhone"
                          type="tel"
                          required
                          value={formData.referralPhone}
                          onChange={(e) => setFormData({ ...formData, referralPhone: e.target.value })}
                          className="bg-background border-border focus:border-gold"
                        />
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <Label htmlFor="referralCompany">Company Name</Label>
                        <Input
                          id="referralCompany"
                          value={formData.referralCompany}
                          onChange={(e) => setFormData({ ...formData, referralCompany: e.target.value })}
                          className="bg-background border-border focus:border-gold"
                        />
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <Label htmlFor="message">Message Details</Label>
                        <Textarea
                          id="message"
                          rows={4}
                          placeholder="Tell us about the business you're referring..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="bg-background border-border focus:border-gold resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Honeypot field - hidden from users */}
                  <div 
                    className="absolute -left-[9999px] opacity-0 pointer-events-none" 
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <Label htmlFor="website">Website (leave blank)</Label>
                    <Input
                      id="website"
                      name="website"
                      type="text"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      autoComplete="off"
                      tabIndex={-1}
                    />
                  </div>

                  {/* hCaptcha */}
                  <div className="flex flex-col items-center">
                    {captchaError ? (
                      <p className="text-sm text-destructive">
                        Captcha is unavailable right now. Please refresh and try again.
                      </p>
                    ) : hcaptchaSiteKey ? (
                      <HCaptcha
                        ref={captchaRef}
                        sitekey={hcaptchaSiteKey}
                        onVerify={onCaptchaVerify}
                        onExpire={onCaptchaExpire}
                        theme="dark"
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        Loading verification…
                      </p>
                    )}
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      variant="gold"
                      size="lg"
                      className="w-full shadow-gold"
                      disabled={isSubmitting || !captchaToken}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full"
                          />
                          Submitting...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          Submit Referral
                        </span>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </div>
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection direction="right" delay={0.2} className="lg:col-span-2">
              <div className="space-y-6">
                {/* Why Refer Card */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Why Refer Compuwork™?
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    We take pride in delivering steady, accountable, relationship-driven IT. 
                    When you introduce us to an organization, you're helping them solve real challenges.
                  </p>
                  <ul className="space-y-3">
                    {whyRefer.map((item) => (
                      <li key={item.text} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-4 h-4 text-gold" />
                        </div>
                        <span className="text-sm text-foreground">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-primary rounded-2xl p-6 text-primary-foreground"
                >
                  <h4 className="text-lg font-bold mb-4">Why Clients Stay</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-gold">10+</p>
                      <p className="text-xs text-primary-foreground/70">Year Avg. Relationship</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-gold">99%</p>
                      <p className="text-xs text-primary-foreground/70">Audit Success Rate</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-gold">100+</p>
                      <p className="text-xs text-primary-foreground/70">Clients Supported</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-gold">24/7</p>
                      <p className="text-xs text-primary-foreground/70">Dedicated Support</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple process that rewards you for helping businesses find reliable IT support.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative bg-card border border-border rounded-2xl p-6 h-full"
                >
                  <div className="absolute -top-4 left-6 bg-gold text-primary font-bold text-sm px-3 py-1 rounded-full">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mt-4 mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-gold/50" />
                    </div>
                  )}
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about our referral program.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-gold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Make a Referral?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              If someone in your network could use a partner who brings clarity, reliability, 
              and compliance-first thinking to their IT, we'd be glad to talk.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="gold"
                size="lg"
                className="shadow-gold"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Submit a Referral
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReferralPage;
