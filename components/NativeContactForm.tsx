"use client";
import { useState, useRef } from "react";
import { toast } from "sonner";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { supabase } from "@/integrations/supabase/client";
import { useHCaptchaSiteKey } from "@/hooks/useHCaptchaSiteKey";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, CheckCircle, Loader2 } from "lucide-react";

const NativeContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    reason: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [formStartTime] = useState<number>(Date.now());
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const captchaRef = useRef<HCaptcha>(null);
  const { siteKey: hcaptchaSiteKey, error: captchaError } = useHCaptchaSiteKey();

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const onCaptchaVerify = (token: string) => setCaptchaToken(token);
  const onCaptchaExpire = () => setCaptchaToken(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      toast.error("Please complete the captcha verification.");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("submit-contact", {
        body: {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          reason: formData.reason,
          message: formData.message,
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

      setIsSubmitted(true);
      toast.success("Message sent successfully!");
    } catch (err) {
      console.error("Unexpected error:", err);
      toast.error("An unexpected error occurred. Please try again.");
      captchaRef.current?.resetCaptcha();
      setCaptchaToken(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-3">
          Message Sent Successfully!
        </h3>
        <p className="text-muted-foreground max-w-md">
          Thank you for reaching out. A specialist will contact you within 24 hours to discuss your needs.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot - hidden from users */}
      <div className="absolute opacity-0 pointer-events-none" aria-hidden="true" tabIndex={-1}>
        <input
          type="text"
          name="website"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="fullName">
            Full Name <span className="text-gold">*</span>
          </Label>
          <Input
            id="fullName"
            required
            value={formData.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            placeholder="John Smith"
            className="bg-background border-border focus:border-gold"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) => handleChange("company", e.target.value)}
            placeholder="Acme Corp"
            className="bg-background border-border focus:border-gold"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-gold">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
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
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            placeholder="(555) 123-4567"
            className="bg-background border-border focus:border-gold"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="reason">Reason for Contact</Label>
        <Select
          value={formData.reason}
          onValueChange={(value) => handleChange("reason", value)}
        >
          <SelectTrigger className="bg-background border-border focus:border-gold">
            <SelectValue placeholder="Select a reason..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Managed IT Services">Managed IT Services</SelectItem>
            <SelectItem value="Cybersecurity">Cybersecurity</SelectItem>
            <SelectItem value="Compliance & GRC">Compliance & GRC</SelectItem>
            <SelectItem value="Cloud Solutions">Cloud Solutions</SelectItem>
            <SelectItem value="Disaster Recovery">Disaster Recovery</SelectItem>
            <SelectItem value="AI Integration">AI Integration</SelectItem>
            <SelectItem value="Co-Managed IT">Co-Managed IT</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          placeholder="Tell us about your IT needs..."
          rows={4}
          className="bg-background border-border focus:border-gold resize-none"
        />
      </div>

      {/* hCaptcha */}
      {hcaptchaSiteKey && !captchaError && (
        <div className="flex justify-center">
          <HCaptcha
            sitekey={hcaptchaSiteKey}
            onVerify={onCaptchaVerify}
            onExpire={onCaptchaExpire}
            ref={captchaRef}
          />
        </div>
      )}

      <Button
        type="submit"
        variant="gold"
        size="lg"
        className="w-full shadow-gold"
        disabled={isSubmitting || !captchaToken}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
};

export default NativeContactForm;
