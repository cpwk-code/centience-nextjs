"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Mail, Phone, Clock, CheckCircle, Calendar, Brain, Shield, Zap, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState, useRef } from "react";
import { toast } from "sonner";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SEO from "@/components/SEO";
import { supabase } from "@/integrations/supabase/client";
import { useHCaptchaSiteKey } from "@/hooks/useHCaptchaSiteKey";

const BOOKING_URL = "https://outlook.office.com/bookwithme/user/d262028309eb4a55b36d34827efbd937@compuwork.ai/meetingtype/9TirZkyTl0S_U1MzWStHWw2?anonymous&ismsaljsauthenabled&ep=mlink";

const GetAIAssessmentPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    company: "",
    aiInterest: "",
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

  const benefits = [
    "AI Readiness Assessment",
    "Compliance Gap Analysis",
    "Data Governance Review",
    "Custom AI Implementation Roadmap",
  ];

  const aiOptions = [
    "Microsoft CoPilot Integration",
    "Google Gemini Deployment",
    "OpenAI ChatGPT Implementation",
    "xAI Grok Integration",
    "AI Governance & Risk Management",
    "Private/On-Premise AI",
    "Other AI Tools",
    "General AI Consultation",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      toast.error("Please complete the captcha verification.");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke("submit-contact", {
        body: {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          reason: formData.aiInterest || "AI Assessment Inquiry",
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
        toast.error("Failed to send message. Please try again.");
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

      toast.success("Thank you! Redirecting you to schedule your AI consultation...");
      
      // Reset form
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        company: "",
        aiInterest: "",
        message: "",
      });
      setCaptchaToken(null);
      captchaRef.current?.resetCaptcha();

      // Set access token and redirect to AI Readiness Assessment page
      sessionStorage.setItem("ai_readiness_access", "true");
      setTimeout(() => {
        window.location.href = "/ai-readiness-assessment";
      }, 1500);
    } catch (err) {
      console.error("Unexpected error:", err);
      toast.error("An unexpected error occurred. Please try again.");
      captchaRef.current?.resetCaptcha();
      setCaptchaToken(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Get AI Assessment | AI Readiness & Compliance Consultation | Compuwork"
        description="Discover how to implement AI safely and compliantly. Get a free AI readiness assessment including compliance gap analysis, data governance review, and custom implementation roadmap."
        canonical="/get-ai-assessment"
        keywords={[
          'AI readiness assessment',
          'AI compliance consultation',
          'Microsoft CoPilot integration',
          'Google Gemini deployment',
          'enterprise AI implementation',
          'AI governance assessment',
          'compliant AI solutions',
        ]}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Get AI Assessment', url: '/get-ai-assessment' },
        ]}
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 bg-violet-500/10 rounded-full px-5 py-2.5 mb-6"
            >
              <Brain className="w-4 h-4 text-violet-400" />
              <span className="text-violet-400 font-semibold text-sm tracking-wide uppercase">
                AI Assessment
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-foreground mb-6 leading-tight">
              Unlock AI{" "}
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                Without Breaking Compliance
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get a comprehensive AI readiness assessment. We'll evaluate your infrastructure, 
              identify compliance gaps, and create a roadmap for safe, secure AI implementation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="py-8 bg-violet-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="mailto:info@compuwork.ai"
              className="flex items-center gap-3 text-foreground hover:text-violet-400 transition-colors group"
            >
              <div className="w-12 h-12 bg-violet-500/10 rounded-full flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                <Mail className="w-5 h-5 text-violet-400" />
              </div>
              <span className="font-medium">info@compuwork.ai</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="tel:+18779457177"
              className="flex items-center gap-3 text-foreground hover:text-violet-400 transition-colors group"
            >
              <div className="w-12 h-12 bg-violet-500/10 rounded-full flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                <Phone className="w-5 h-5 text-violet-400" />
              </div>
              <span className="font-medium">877.945.7177</span>
            </motion.a>

            <div className="flex items-center gap-3 text-foreground">
              <div className="w-12 h-12 bg-violet-500/10 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-violet-400" />
              </div>
              <span className="font-medium">24/7 Support Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <AnimatedSection direction="left" className="lg:col-span-3">
              <div className="bg-card border border-border rounded-3xl p-8 lg:p-10">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                  Get AI Integration Readiness Assessment
                </h2>
                <p className="text-muted-foreground mb-8">
                  Tell us about your AI Readiness goals and we'll schedule a consultation with our experts.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-foreground">
                        Full Name <span className="text-violet-400">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        placeholder="John Smith"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="bg-background border-border focus:border-violet-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">
                        Phone <span className="text-violet-400">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="bg-background border-border focus:border-violet-400"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email <span className="text-violet-400">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="bg-background border-border focus:border-violet-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-foreground">
                        Company
                      </Label>
                      <Input
                        id="company"
                        placeholder="Your Company Name"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="bg-background border-border focus:border-violet-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="aiInterest" className="text-foreground">
                      What AI Solution Are You Interested In?
                    </Label>
                    <Select
                      value={formData.aiInterest}
                      onValueChange={(value) =>
                        setFormData({ ...formData, aiInterest: value })
                      }
                    >
                      <SelectTrigger className="bg-background border-border focus:border-violet-400">
                        <SelectValue placeholder="Select an AI solution" />
                      </SelectTrigger>
                      <SelectContent>
                        {aiOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Tell Us About Your AI Goals
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="What challenges are you looking to solve with AI? Any compliance requirements or concerns?"
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="bg-background border-border focus:border-violet-400 resize-none"
                    />
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

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 text-white shadow-lg"
                      disabled={isSubmitting || !captchaToken}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Calendar className="w-5 h-5" />
                          Get AI Assessment
                        </span>
                      )}
                    </Button>
                  </motion.div>

                  <p className="text-center text-sm text-muted-foreground">
                    After submitting, you'll be redirected to Assessment and schedule a meeting with our AI experts.
                  </p>

                  <div className="flex justify-center gap-4 text-sm">
                    <a
                      href="/privacy-policy"
                      className="text-muted-foreground hover:text-violet-400 transition-colors"
                    >
                      Privacy Policy
                    </a>
                    <span className="text-muted-foreground">|</span>
                    <a
                      href="/terms-of-service"
                      className="text-muted-foreground hover:text-violet-400 transition-colors"
                    >
                      Terms of Service
                    </a>
                  </div>
                </form>
              </div>
            </AnimatedSection>

            {/* Benefits Sidebar */}
            <AnimatedSection direction="right" delay={0.2} className="lg:col-span-2">
              <div className="space-y-6">
                {/* What You'll Get */}
                <div className="bg-gradient-to-br from-violet-500/10 to-indigo-500/5 border border-violet-500/20 rounded-3xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Brain className="w-5 h-5 text-violet-400" />
                    What You'll Get
                  </h3>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <motion.li
                        key={benefit}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* AI Platforms We Support */}
                <div className="bg-card border border-border rounded-3xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6">
                    AI Platforms We Deploy
                  </h3>
                  <div className="space-y-4">
                    {[
                      { name: "Microsoft CoPilot", desc: "M365 & Azure integration" },
                      { name: "Google Gemini", desc: "Workspace deployment" },
                      { name: "OpenAI ChatGPT", desc: "Enterprise implementation" },
                      { name: "Claude Co-Work", desc: "Anthropic AI collaboration" },
                      { name: "xAI Grok", desc: "Custom integration" },
                      { name: "Other AI Tools", desc: "Custom integration" },
                    ].map((platform, index) => (
                      <motion.div
                        key={platform.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-start gap-4"
                      >
                        <div className="w-10 h-10 bg-violet-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Zap className="w-5 h-5 text-violet-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{platform.name}</h4>
                          <p className="text-sm text-muted-foreground">{platform.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Compliance Focus */}
                <div className="bg-gradient-to-br from-primary/10 to-violet-500/5 border border-primary/20 rounded-3xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-gold" />
                    Compliance-First Approach
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    We ensure your AI implementation meets regulatory requirements:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["SEC", "FINRA", "HIPAA", "SOC 2", "NIST"].map((badge) => (
                      <span
                        key={badge}
                        className="px-3 py-1 bg-gold/10 text-gold text-sm font-medium rounded-full"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Contact */}
                <div className="bg-card border border-border rounded-3xl p-8 text-center">
                  <Lock className="w-8 h-8 text-violet-400 mx-auto mb-3" />
                  <p className="text-muted-foreground mb-4">
                    Your data stays yours. Secure AI, guaranteed.
                  </p>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="tel:+18779457177"
                    className="inline-flex items-center gap-2 text-violet-400 font-semibold text-lg hover:underline"
                  >
                    <Phone className="w-5 h-5" />
                    877.945.7177
                  </motion.a>
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

export default GetAIAssessmentPage;
