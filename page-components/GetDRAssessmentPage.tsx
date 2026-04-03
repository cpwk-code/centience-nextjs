"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Mail, Phone, Clock, Shield, CheckCircle, Calendar, Database } from "lucide-react";
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

const GetDRAssessmentPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    company: "",
    businessType: "",
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
    "Recovery Time Analysis",
    "Data Protection Gap Review",
    "Business Impact Assessment",
    "Custom DR Strategy Roadmap",
  ];

  const businessTypes = [
    "Financial Services",
    "Healthcare",
    "Legal",
    "Accounting",
    "Professional Services",
    "Other",
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
          reason: `DR Assessment - ${formData.businessType || "General"}`,
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

      toast.success("Thank you! Redirecting you to schedule your DR assessment...");
      
      // Reset form
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        company: "",
        businessType: "",
        message: "",
      });
      setCaptchaToken(null);
      captchaRef.current?.resetCaptcha();

      // Redirect to booking link after a short delay
      setTimeout(() => {
        window.location.href = BOOKING_URL;
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
        title="Schedule DR Assessment | Disaster Recovery Planning | Compuwork"
        description="Schedule a free disaster recovery assessment. Get a comprehensive analysis of your backup systems, recovery time objectives, and business continuity strategy."
        canonical="/get-dr-assessment"
        keywords={[
          'disaster recovery assessment',
          'DR planning',
          'business continuity assessment',
          'backup analysis',
          'RTO RPO assessment',
          'disaster recovery consultation',
        ]}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Operational Resilience & Recovery', url: '/services/operational-resilience' },
          { name: 'Schedule DR Assessment', url: '/get-dr-assessment' },
        ]}
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-5 py-2.5 mb-6"
            >
              <Database className="w-4 h-4 text-blue-500" />
              <span className="text-blue-500 font-semibold text-sm tracking-wide uppercase">
                DR Assessment
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-foreground mb-6 leading-tight">
              Schedule Your{" "}
              <span className="text-gradient-gold">DR Assessment</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover your disaster recovery gaps and get a roadmap to protect your business from downtime and data loss.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="py-8 bg-primary/5">
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
                  Request Your DR Assessment
                </h2>
                <p className="text-muted-foreground mb-8">
                  Complete the form and we'll schedule a comprehensive disaster recovery review.
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
                    <Label htmlFor="businessType" className="text-foreground">
                      Industry
                    </Label>
                    <Select
                      value={formData.businessType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, businessType: value })
                      }
                    >
                      <SelectTrigger className="bg-background border-border focus:border-gold">
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        {businessTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Current Backup & Recovery Setup
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your current backup systems, recovery concerns, or business continuity goals..."
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
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Calendar className="w-5 h-5" />
                          Schedule DR Assessment
                        </span>
                      )}
                    </Button>
                  </motion.div>

                  <p className="text-center text-sm text-muted-foreground">
                    After submitting, you'll be redirected to schedule your assessment.
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

            {/* Benefits Sidebar */}
            <AnimatedSection direction="right" delay={0.2} className="lg:col-span-2">
              <div className="space-y-6">
                {/* What You'll Get */}
                <div className="bg-gradient-to-br from-blue-500/10 to-gold/5 border border-blue-500/20 rounded-3xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-500" />
                    What You'll Receive
                  </h3>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <motion.li
                        key={benefit}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Why DR Matters */}
                <div className="bg-card border border-border rounded-3xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Why DR Planning Matters
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <strong className="text-foreground">93%</strong> of companies without a DR plan who suffer a major data disaster are out of business within one year.
                    </p>
                    <p>
                      <strong className="text-foreground">Average downtime cost:</strong> $5,600 per minute for enterprise businesses.
                    </p>
                    <p>
                      Our DR assessment identifies vulnerabilities and creates a roadmap to ensure business continuity.
                    </p>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-card border border-border rounded-3xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Prefer to Talk?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Speak directly with a disaster recovery specialist.
                  </p>
                  <Button variant="outline" size="lg" className="w-full" asChild>
                    <a href="tel:8779457177">Call Us</a>
                  </Button>
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

export default GetDRAssessmentPage;
