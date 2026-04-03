"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Mail, Phone, Clock, Handshake, CheckCircle, Calendar, Shield, Users, Headphones, Puzzle } from "lucide-react";
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

const GetPartnershipOptionsPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    company: "",
    partnershipType: "",
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
    "Flexible partnership model",
    "24/7 help desk augmentation",
    "Specialized expertise access",
    "Custom service agreement",
  ];

  const partnershipTypes = [
    "Help Desk Augmentation",
    "Security Operations Support",
    "Infrastructure Management",
    "Project Support",
    "Strategic Advisory (vCIO)",
    "Full Co-Managed Partnership",
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
          reason: `Co-Managed IT Partnership: ${formData.partnershipType || "General Inquiry"}`,
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
        partnershipType: "",
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
        title="Discuss Partnership Options | Co-Managed IT | Compuwork"
        description="Explore co-managed IT partnership options with Compuwork. Augment your IT team with 24/7 support, specialized expertise, and flexible service agreements."
        canonical="/get-partnership-options"
        keywords={[
          'co-managed IT partnership',
          'IT staff augmentation',
          'IT team extension',
          'co-managed support options',
          'hybrid IT partnership',
          'IT collaboration',
        ]}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Governance MSP', url: '/services/governance-msp' },
          { name: 'Partnership Options', url: '/get-partnership-options' },
        ]}
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 bg-emerald-500/10 rounded-full px-5 py-2.5 mb-6"
            >
              <Handshake className="w-4 h-4 text-emerald-500" />
              <span className="text-emerald-500 font-semibold text-sm tracking-wide uppercase">
                Partnership Options
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-foreground mb-6 leading-tight">
              Discuss{" "}
              <span className="text-gradient-gold">Partnership Options</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore how our co-managed IT services can augment your team. We'll work with you to build a flexible partnership that fits your needs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="py-8 bg-emerald-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="mailto:info@compuwork.ai"
              className="flex items-center gap-3 text-foreground hover:text-emerald-500 transition-colors group"
            >
              <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                <Mail className="w-5 h-5 text-emerald-500" />
              </div>
              <span className="font-medium">info@compuwork.ai</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="tel:+18779457177"
              className="flex items-center gap-3 text-foreground hover:text-emerald-500 transition-colors group"
            >
              <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                <Phone className="w-5 h-5 text-emerald-500" />
              </div>
              <span className="font-medium">877.945.7177</span>
            </motion.a>

            <div className="flex items-center gap-3 text-foreground">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-emerald-500" />
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
                  Tell Us About Your IT Team
                </h2>
                <p className="text-muted-foreground mb-8">
                  Complete the form and we'll schedule a consultation to discuss partnership options.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-foreground">
                        Full Name <span className="text-emerald-500">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        placeholder="John Smith"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="bg-background border-border focus:border-emerald-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">
                        Phone <span className="text-emerald-500">*</span>
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
                        className="bg-background border-border focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email <span className="text-emerald-500">*</span>
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
                        className="bg-background border-border focus:border-emerald-500"
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
                        className="bg-background border-border focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="partnershipType" className="text-foreground">
                      What Type of Partnership Are You Interested In?
                    </Label>
                    <Select
                      value={formData.partnershipType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, partnershipType: value })
                      }
                    >
                      <SelectTrigger className="bg-background border-border focus:border-emerald-500">
                        <SelectValue placeholder="Select a partnership type" />
                      </SelectTrigger>
                      <SelectContent>
                        {partnershipTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Tell Us About Your Current IT Setup
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Describe your internal IT team, current challenges, or what support you're looking for..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="bg-background border-border focus:border-emerald-500 resize-none"
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
                          Discuss Partnership & Schedule Meeting
                        </span>
                      )}
                    </Button>
                  </motion.div>

                  <p className="text-center text-sm text-muted-foreground">
                    After submitting, you'll be redirected to schedule a meeting with our team.
                  </p>

                  <div className="flex justify-center gap-4 text-sm">
                    <a
                      href="/privacy-policy"
                      className="text-muted-foreground hover:text-emerald-500 transition-colors"
                    >
                      Privacy Policy
                    </a>
                    <span className="text-muted-foreground">|</span>
                    <a
                      href="/terms-of-service"
                      className="text-muted-foreground hover:text-emerald-500 transition-colors"
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
                <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-emerald-500/20 rounded-3xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Handshake className="w-5 h-5 text-emerald-500" />
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
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Partnership Options */}
                <div className="bg-card border border-border rounded-3xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Puzzle className="w-5 h-5 text-emerald-500" />
                    Partnership Options
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: "Help Desk Augmentation", icon: Headphones },
                      { name: "Security Operations", icon: Shield },
                      { name: "Project Support", icon: Puzzle },
                      { name: "Strategic Advisory", icon: Users },
                    ].map((option, index) => (
                      <motion.div
                        key={option.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 p-3 bg-background rounded-xl border border-border"
                      >
                        <option.icon className="w-5 h-5 text-emerald-500" />
                        <span className="text-foreground font-medium">{option.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Why Partner With Us */}
                <div className="bg-card border border-border rounded-3xl p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Users className="w-5 h-5 text-emerald-500" />
                    Why Partner With Us
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["20+ Years", "24/7 Support", "Flexible Terms", "No Lock-in", "Your Control"].map((badge) => (
                      <span
                        key={badge}
                        className="px-3 py-1.5 bg-emerald-500/10 text-emerald-500 text-sm font-medium rounded-full border border-emerald-500/20"
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

export default GetPartnershipOptionsPage;
