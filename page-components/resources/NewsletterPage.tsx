"use client";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail } from "lucide-react";
import { useState } from "react";
import HCaptcha from "@/components/HCaptcha";
import { toast } from "sonner";

const NewsletterPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", industry: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) {
      toast.error("Please complete the captcha verification.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/newsletter-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error || "Failed to subscribe. Please try again.");
        return;
      }
      setSubmitted(true);
    } catch {
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="flex items-center gap-3 justify-center mb-6">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Newsletter</p>
            <div className="gold-line" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-6">
            Stay Current on Technology Governance Requirements
          </h1>
          <p className="text-lg opacity-70 leading-relaxed">
            Regulatory requirements evolve continuously. Subscribe for quarterly updates on SEC, FINRA, HIPAA, and AI governance developments affecting regulated organizations.
          </p>
        </div>
      </section>

      {/* Newsletter Form */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto max-w-lg">
          {submitted ? (
            <div className="py-8 text-center">
              <Mail size={40} className="text-accent mx-auto mb-4" />
              <h3 className="font-display font-semibold text-primary text-lg mb-2">You're subscribed!</h3>
              <p className="text-sm text-muted-foreground">We'll send quarterly governance updates. Never more.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <Label htmlFor="nl-name">Name</Label>
                <Input
                  id="nl-name"
                  required
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="nl-email">Email</Label>
                <Input
                  id="nl-email"
                  type="email"
                  required
                  placeholder="Work email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <Label>Industry</Label>
                <Select onValueChange={(val) => setForm({ ...form, industry: val })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Financial Services">Financial Services</SelectItem>
                    <SelectItem value="Healthcare">Healthcare</SelectItem>
                    <SelectItem value="Law Firms">Law Firms</SelectItem>
                    <SelectItem value="Private Equity">Private Equity</SelectItem>
                    <SelectItem value="Accounting & CPA">Accounting & CPA</SelectItem>
                    <SelectItem value="Non-Profit">Non-Profit</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/* hCaptcha */}
              <div className="flex justify-center">
                <HCaptcha
                  onVerify={(token) => setCaptchaToken(token)}
                  onExpire={() => setCaptchaToken("")}
                />
              </div>

              <Button
                variant="cta"
                size="lg"
                type="submit"
                className="w-full"
                disabled={!captchaToken || loading}
              >
                {loading ? "Subscribing..." : "Send Me Governance Updates"}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                We send quarterly updates. Never more.
              </p>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default NewsletterPage;
