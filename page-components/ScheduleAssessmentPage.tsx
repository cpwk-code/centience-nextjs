"use client";
import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useHCaptchaSiteKey } from "@/hooks/useHCaptchaSiteKey";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CalendarCheck, ArrowRight, Loader2 } from "lucide-react";

const CALENDLY_BASE =
  "https://calendly.com/orvillem-cpwk/free-risk-assessment?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=f5a623";

const ScheduleAssessmentPage = () => {
  const [form, setForm] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
  });
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [showCalendly, setShowCalendly] = useState(false);
  const [calendlyUrl, setCalendlyUrl] = useState("");
  const captchaRef = useRef<HCaptcha>(null);
  const { siteKey: hcaptchaSiteKey, error: captchaError } = useHCaptchaSiteKey();

  const handleChange = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      toast.error("Please complete the captcha verification.");
      return;
    }

    const params = new URLSearchParams({
      name: form.fullName,
      email: form.email,
      a1: form.phone,
      a2: form.company,
    });

    setCalendlyUrl(`${CALENDLY_BASE}?${params.toString()}`);
    setShowCalendly(true);
  };

  // Load Calendly widget script when embed is shown
  useEffect(() => {
    if (!showCalendly) return;
    const existing = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [showCalendly]);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Schedule Your Free Assessment | CompuWork"
        description="Book a complimentary IT risk assessment with our experts. Fill in your details and pick a time that works for you."
        keywords={["free IT assessment", "risk assessment", "schedule consultation", "managed IT"]}
        canonical="/schedule-assessment"
      />
      <Header />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
              <CalendarCheck className="w-8 h-8 text-gold" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-3">
            Schedule Your Free Assessment
          </h1>
          <p className="text-center text-muted-foreground mb-8 max-w-md mx-auto">
            Enter your details below and pick the best time for your complimentary risk assessment.
          </p>

          {!showCalendly ? (
            <div className="max-w-lg mx-auto bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="fullName">
                    Full Name <span className="text-gold">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    required
                    value={form.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    placeholder="John Smith"
                    className="bg-background border-border focus:border-gold"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">
                    Company <span className="text-gold">*</span>
                  </Label>
                  <Input
                    id="company"
                    required
                    value={form.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    placeholder="Acme Corp"
                    className="bg-background border-border focus:border-gold"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-gold">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="john@company.com"
                    className="bg-background border-border focus:border-gold"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">
                    Phone <span className="text-gold">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="(555) 123-4567"
                    className="bg-background border-border focus:border-gold"
                  />
                </div>

                {/* hCaptcha */}
                {hcaptchaSiteKey && !captchaError && (
                  <div className="flex justify-center">
                    <HCaptcha
                      sitekey={hcaptchaSiteKey}
                      onVerify={(token) => setCaptchaToken(token)}
                      onExpire={() => setCaptchaToken(null)}
                      ref={captchaRef}
                    />
                  </div>
                )}

                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  className="w-full shadow-gold mt-2"
                  disabled={!captchaToken}
                >
                  Continue to Schedule
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </form>
            </div>
          ) : (
            /* Calendly inline embed */
            <div className="max-w-3xl mx-auto">
              <div
                className="calendly-inline-widget"
                data-url={calendlyUrl}
                style={{ minWidth: "320px", height: "700px" }}
              />
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ScheduleAssessmentPage;
