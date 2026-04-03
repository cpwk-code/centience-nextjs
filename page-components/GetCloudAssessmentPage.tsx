"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Mail, Phone, Clock, Cloud, CheckCircle, Calendar, Shield, Zap, Server, Database } from "lucide-react";
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

const GetCloudAssessmentPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    company: "",
    cloudPlatform: "",
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
    "Cloud readiness assessment",
    "Migration cost analysis",
    "Security & compliance review",
    "Custom cloud architecture plan",
  ];

  const cloudPlatforms = [
    "Microsoft 365 & Azure",
    "Google Workspace",
    "Private Cloud Hosting",
    "Hybrid Cloud",
    "Cloud Backup & Recovery",
    "Not sure - need guidance",
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
          reason: `Cloud Assessment: ${formData.cloudPlatform || "General Inquiry"}`,
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

      toast.success("Thank you! Redirecting you to schedule a meeting...");
      
      // Reset form
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        company: "",
        cloudPlatform: "",
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
        title="Get Your Free Cloud Assessment | Compuwork"
        description="Schedule a free cloud assessment with Compuwork. Get expert guidance on Microsoft 365, Azure, Google Workspace, and private cloud solutions for your business."
        canonical="/get-cloud-assessment"
        keywords={[
          'cloud assessment',
          'Microsoft 365 assessment',
          'Azure migration assessment',
          'cloud migration consultation',
          'Google Workspace setup',
          'private cloud evaluation',
        ]}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Operational Resilience & Recovery', url: '/services/operational-resilience' },
          { name: 'Get Cloud Assessment', url: '/get-cloud-assessment' },
        ]}
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 bg-cyan-500/10 rounded-full px-5 py-2.5 mb-6"
            >
              <Cloud className="w-4 h-4 text-cyan-500" />
              <span className="text-cyan-500 font-semibold text-sm tracking-wide uppercase">
                Cloud Assessment
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-foreground mb-6 leading-tight">
              Get Your Free{" "}
              <span className="text-gradient-gold">Cloud Assessment</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover how cloud solutions can transform your business. Our experts will evaluate your infrastructure and provide a custom migration and optimization plan.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="py-8 bg-cyan-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="mailto:info@compuwork.ai"
              className="flex items-center gap-3 text-foreground hover:text-cyan-500 transition-colors group"
            >
              <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                <Mail className="w-5 h-5 text-cyan-500" />
              </div>
              <span className="font-medium">info@compuwork.ai</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="tel:+18779457177"
              className="flex items-center gap-3 text-foreground hover:text-cyan-500 transition-colors group"
            >
              <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                <Phone className="w-5 h-5 text-cyan-500" />
              </div>
              <span className="font-medium">877.945.7177</span>
            </motion.a>

            <div className="flex items-center gap-3 text-foreground">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-cyan-500" />
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
                  Tell Us About Your Cloud Needs
                </h2>
                <p className="text-muted-foreground mb-8">
                  Complete the form and we'll schedule a cloud assessment with our experts.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-foreground">
                        Full Name <span className="text-cyan-500">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        placeholder="John Smith"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="bg-background border-border focus:border-cyan-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">
                        Phone <span className="text-cyan-500">*</span>
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
                        className="bg-background border-border focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email <span className="text-cyan-500">*</span>
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
                        className="bg-background border-border focus:border-cyan-500"
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
                        className="bg-background border-border focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cloudPlatform" className="text-foreground">
                      Which Cloud Platform Are You Interested In?
                    </Label>
                    <Select
                      value={formData.cloudPlatform}
                      onValueChange={(value) =>
                        setFormData({ ...formData, cloudPlatform: value })
                      }
                    >
                      <SelectTrigger className="bg-background border-border focus:border-cyan-500">
                        <SelectValue placeholder="Select a platform" />
                      </SelectTrigger>
                      <SelectContent>
                        {cloudPlatforms.map((platform) => (
                          <SelectItem key={platform} value={platform}>
                            {platform}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Tell Us About Your Current Infrastructure
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Describe your current setup, pain points, or what you're hoping to achieve with cloud solutions..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="bg-background border-border focus:border-cyan-500 resize-none"
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
                          Get Cloud Assessment & Schedule Meeting
                        </span>
                      )}
                    </Button>
                  </motion.div>

                  <p className="text-center text-sm text-muted-foreground">
                    After submitting, you'll be redirected to schedule a meeting with our cloud experts.
                  </p>

                  <div className="flex justify-center gap-4 text-sm">
                    <a
                      href="/privacy-policy"
                      className="text-muted-foreground hover:text-cyan-500 transition-colors"
                    >
                      Privacy Policy
                    </a>
                    <span className="text-muted-foreground">|</span>
                    <a
                      href="/terms-of-service"
                      className="text-muted-foreground hover:text-cyan-500 transition-colors"
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
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/20 rounded-3xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Cloud className="w-5 h-5 text-cyan-500" />
                    What You'll Get
                  </h3>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <motion.li
                        key={benefit}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Cloud Platforms We Support */}
                <div className="bg-card border border-border rounded-3xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Server className="w-5 h-5 text-cyan-500" />
                    Platforms We Support
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: "Microsoft 365 & Azure", icon: Database },
                      { name: "Google Workspace", icon: Cloud },
                      { name: "Private Cloud Hosting", icon: Server },
                      { name: "Hybrid Solutions", icon: Zap },
                    ].map((platform, index) => (
                      <motion.div
                        key={platform.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 p-3 bg-background rounded-xl border border-border"
                      >
                        <platform.icon className="w-5 h-5 text-cyan-500" />
                        <span className="text-foreground font-medium">{platform.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Compliance Badges */}
                <div className="bg-card border border-border rounded-3xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-cyan-500" />
                    Compliance-First Approach
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["SOC 2", "HIPAA", "SEC", "FINRA", "99.9% SLA"].map((badge) => (
                      <span
                        key={badge}
                        className="px-3 py-1.5 bg-cyan-500/10 text-cyan-500 text-sm font-medium rounded-full border border-cyan-500/20"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
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

export default GetCloudAssessmentPage;
