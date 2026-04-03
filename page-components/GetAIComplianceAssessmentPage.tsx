"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Mail, Phone, Clock, CheckCircle, Calendar, Shield, Scale, FileCheck, Lock } from "lucide-react";
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

const GetAIComplianceAssessmentPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    company: "",
    complianceFocus: "",
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
    "SEC/FINRA Compliance Gap Analysis",
    "NIST AI Risk Framework Alignment",
    "Data Governance & DLP Review",
    "Custom Compliance Roadmap",
  ];

  const complianceOptions = [
    "SEC AI Compliance",
    "FINRA Rule Alignment",
    "NIST RMF Implementation",
    "AI Recordkeeping & Audit",
    "Data Governance & DLP",
    "AI Bias & Explainability",
    "Third-Party AI Risk",
    "General AI Compliance Consultation",
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
          reason: formData.complianceFocus || "AI Compliance Assessment Inquiry",
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

      toast.success("Thank you! Redirecting you to the AI Compliance Assessment...");
      
      // Reset form
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        company: "",
        complianceFocus: "",
        message: "",
      });
      setCaptchaToken(null);
      captchaRef.current?.resetCaptcha();

      // Set access token and redirect to AI Compliance Assessment page
      sessionStorage.setItem("ai_compliance_access", "true");
      setTimeout(() => {
        window.location.href = "/ai-compliance-assessment";
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
        title="Get AI Compliance Assessment | SEC, FINRA & NIST Compliance | Compuwork"
        description="Evaluate your AI integration compliance readiness for SEC, FINRA, and NIST requirements. Get a free compliance assessment with gap analysis and a custom roadmap."
        canonical="/get-ai-compliance-assessment"
        keywords={[
          'AI compliance assessment',
          'SEC AI compliance',
          'FINRA AI requirements',
          'NIST AI framework',
          'AI regulatory compliance',
          'AI governance assessment',
          'compliant AI solutions',
        ]}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Get AI Compliance Assessment', url: '/get-ai-compliance-assessment' },
        ]}
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 bg-gold/10 rounded-full px-5 py-2.5 mb-6"
            >
              <Shield className="w-4 h-4 text-gold" />
              <span className="text-gold font-semibold text-sm tracking-wide uppercase">
                AI Compliance Assessment
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-foreground mb-6 leading-tight">
              Ensure Your AI Is{" "}
              <span className="text-gradient-gold">
                SEC, FINRA & NIST Compliant
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get a comprehensive AI compliance assessment. We'll evaluate your governance, 
              identify regulatory gaps, and create a roadmap for compliant AI implementation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="py-8 bg-gold/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="mailto:info@compuwork.ai"
              className="flex items-center gap-3 text-foreground hover:text-gold transition-colors group"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <Mail className="w-5 h-5 text-gold" />
              </div>
              <span className="font-medium">info@compuwork.ai</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="tel:+18779457177"
              className="flex items-center gap-3 text-foreground hover:text-gold transition-colors group"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <span className="font-medium">877.945.7177</span>
            </motion.a>

            <div className="flex items-center gap-3 text-foreground">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-gold" />
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
                  Get AI Integration Compliance Assessment
                </h2>
                <p className="text-muted-foreground mb-8">
                  Tell us about your compliance needs and we'll schedule a consultation with our experts.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-foreground">
                        Full Name <span className="text-gold">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        placeholder="John Smith"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="bg-background border-border focus:border-gold"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">
                        Phone <span className="text-gold">*</span>
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
                        className="bg-background border-border focus:border-gold"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email <span className="text-gold">*</span>
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
                        className="bg-background border-border focus:border-gold"
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
                        className="bg-background border-border focus:border-gold"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="complianceFocus" className="text-foreground">
                      What Compliance Area Are You Focused On?
                    </Label>
                    <Select
                      value={formData.complianceFocus}
                      onValueChange={(value) =>
                        setFormData({ ...formData, complianceFocus: value })
                      }
                    >
                      <SelectTrigger className="bg-background border-border focus:border-gold">
                        <SelectValue placeholder="Select a compliance focus" />
                      </SelectTrigger>
                      <SelectContent>
                        {complianceOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Tell Us About Your Compliance Needs
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="What compliance challenges are you facing with AI? Any specific regulatory requirements or concerns?"
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="bg-background border-border focus:border-gold resize-none"
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
                      variant="gold"
                      className="w-full shadow-gold"
                      disabled={isSubmitting || !captchaToken}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                          />
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Calendar className="w-5 h-5" />
                          Get Compliance Assessment
                        </span>
                      )}
                    </Button>
                  </motion.div>

                  <p className="text-center text-sm text-muted-foreground">
                    After submitting, you'll be redirected to the Assessment and schedule a meeting with our compliance experts.
                  </p>

                  <div className="flex justify-center gap-4 text-sm">
                    <a
                      href="/privacy-policy"
                      className="text-muted-foreground hover:text-gold transition-colors"
                    >
                      Privacy Policy
                    </a>
                    <span className="text-muted-foreground">|</span>
                    <a
                      href="/terms-of-service"
                      className="text-muted-foreground hover:text-gold transition-colors"
                    >
                      Terms of Service
                    </a>
                  </div>
                </form>
              </div>
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection direction="right" className="lg:col-span-2 space-y-8">
              {/* What You'll Get */}
              <div className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 rounded-3xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <FileCheck className="w-6 h-6 text-gold" />
                  What You'll Get
                </h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={benefit}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Compliance Focus Areas */}
              <div className="bg-card border border-border rounded-3xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Scale className="w-6 h-6 text-gold" />
                  Compliance Focus Areas
                </h3>
                <div className="space-y-4">
                  {[
                    { name: "SEC Compliance", desc: "AI supervision & disclosures" },
                    { name: "FINRA Alignment", desc: "Rule 3110 & recordkeeping" },
                    { name: "NIST RMF", desc: "AI risk management framework" },
                    { name: "Data Governance", desc: "DLP & sensitivity labeling" },
                    { name: "Audit & Explainability", desc: "Bias testing & documentation" },
                  ].map((area, index) => (
                    <motion.div
                      key={area.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-background rounded-xl"
                    >
                      <div className="w-2 h-2 bg-gold rounded-full" />
                      <div>
                        <span className="font-medium text-foreground">
                          {area.name}
                        </span>
                        <p className="text-sm text-muted-foreground">
                          {area.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-card border border-border rounded-3xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Lock className="w-6 h-6 text-gold" />
                  Why Choose Compuwork
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <span className="text-foreground font-medium">20+ Years</span> serving 
                    regulated financial services firms
                  </p>
                  <p>
                    <span className="text-foreground font-medium">SEC/FINRA Expertise</span> with 
                    deep understanding of regulatory requirements
                  </p>
                  <p>
                    <span className="text-foreground font-medium">NIST Aligned</span> implementation 
                    following AI Risk Management Framework
                  </p>
                </div>
              </div>

              {/* Quick Contact CTA */}
              <div className="bg-gradient-to-br from-gold/20 to-amber-500/10 border border-gold/30 rounded-3xl p-8 text-center">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Need Immediate Help?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Call us directly to speak with a compliance expert
                </p>
                <motion.a
                  href="tel:+18779457177"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-gold/90 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  877.945.7177
                </motion.a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetAIComplianceAssessmentPage;
