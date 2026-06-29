"use client";
import { useState, useRef, useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Shield, FileCheck, BarChart3, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

declare global {
  interface Window {
    hcaptcha: {
      render: (container: string | HTMLElement, params: object) => string;
      getResponse: (widgetId?: string) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

const INDUSTRIES = [
  "Financial Services (Broker-Dealer / RIA)",
  "Financial Services (Investment Banking)",
  "Wealth Management",
  "Private Equity / Venture Capital",
  "Healthcare / Medical Practice",
  "Law Firm",
  "Accounting / CPA Firm",
  "Non-Profit",
  "Other Regulated Organization",
];

const whatToExpect = [
  {
    icon: Clock,
    title: "Results within 5 business days",
    desc: "You receive a prioritized gap map across infrastructure, cybersecurity, AI usage, vendor risk, and compliance readiness — delivered in writing.",
  },
  {
    icon: Shield,
    title: "Covers your full environment",
    desc: "Infrastructure, cybersecurity controls, AI tool inventory, third-party vendor risk, and regulatory alignment — assessed together, not in silos.",
  },
  {
    icon: FileCheck,
    title: "Evidence-first methodology",
    desc: "The review is structured around what regulators, insurers, and auditors actually ask for — not a checklist of general best practices.",
  },
  {
    icon: BarChart3,
    title: "Program enrollment recommendation",
    desc: "Following the review, we provide a clear recommendation on program enrollment — including scope, timeline, and what the program covers for your organization.",
  },
];

const ReadinessPage = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    industry: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const captchaRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    const renderCaptcha = () => {
      if (captchaRef.current && window.hcaptcha && widgetIdRef.current === null) {
        widgetIdRef.current = window.hcaptcha.render(captchaRef.current, {
          sitekey: "192c995a-cf56-4420-9c18-d6c8353845e8",
          theme: "light",
        });
      }
    };
    if (window.hcaptcha) {
      renderCaptcha();
    } else {
      const interval = setInterval(() => {
        if (window.hcaptcha) {
          clearInterval(interval);
          renderCaptcha();
        }
      }, 300);
      return () => clearInterval(interval);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    const captchaToken = window.hcaptcha?.getResponse(widgetIdRef.current ?? undefined);
    if (!captchaToken) {
      setErrorMsg("Please complete the captcha verification.");
      return;
    }
    if (!form.industry) {
      setErrorMsg("Please select your industry.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          service: `Governance Readiness Review — ${form.industry}`,
          captchaToken,
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      setForm({ firstName: "", lastName: "", email: "", phone: "", company: "", jobTitle: "", industry: "", message: "" });
      window.hcaptcha?.reset(widgetIdRef.current ?? undefined);
      widgetIdRef.current = null;
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or call us directly at (877) 945-7177.");
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(hsl(var(--warm-white)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--warm-white)) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "var(--gradient-gold)" }} />
        <div className="container mx-auto relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="gold-line" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">The Centience Governance Program</p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-extrabold leading-[1.1] mb-6">
              Request a{" "}
              <span className="text-gradient-gold">Governance Readiness Review.</span>
            </h1>
            <p className="text-lg leading-relaxed opacity-70 mb-4 max-w-2xl">
              The Governance Readiness Review is the first step in the Centience Governance Program. It evaluates your organization's current posture across infrastructure, cybersecurity, AI usage, vendor risk, and compliance readiness — and delivers a clear picture of where you stand before enrollment begins.
            </p>
            <p className="text-sm leading-relaxed opacity-50 font-semibold uppercase tracking-wider">
              Available for qualified regulated organizations. Results within 5 business days.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-16 bg-muted border-b border-border">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatToExpect.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                  <item.icon size={18} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-primary text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-start">

            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="gold-line" />
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Request Your Review</p>
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-8 leading-tight">
                Tell us about your organization
              </h2>

              {status === "success" ? (
                <div className="card-premium p-10 text-center">
                  <div className="w-14 h-14 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="font-display font-bold text-primary text-xl mb-3">Request received.</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-md mx-auto mb-6">
                    A member of the Centience team will reach out within one business day to confirm your Governance Readiness Review and schedule the intake conversation. Results are delivered within 5 business days.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Questions in the meantime?{" "}
                    <a href="tel:+18779457177" className="text-accent hover:text-accent/80 font-semibold transition-colors">
                      (877) 945-7177
                    </a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-1.5">First name *</label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={form.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition"
                        placeholder="First name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-1.5">Last name *</label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={form.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition"
                        placeholder="Last name"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-1.5">Work email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition"
                        placeholder="you@yourfirm.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-1.5">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition"
                        placeholder="(xxx) xxx-xxxx"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-1.5">Organization name *</label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={form.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition"
                        placeholder="Your firm name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-1.5">Your title *</label>
                      <input
                        type="text"
                        name="jobTitle"
                        required
                        value={form.jobTitle}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition"
                        placeholder="CEO, COO, CCO, etc."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">Industry *</label>
                    <select
                      name="industry"
                      required
                      value={form.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition"
                    >
                      <option value="">Select your industry</option>
                      {INDUSTRIES.map((ind) => (
                        <option key={ind} value={ind}>{ind}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">What&rsquo;s driving your inquiry? <span className="text-muted-foreground font-normal">(optional)</span></label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition resize-none"
                      placeholder="Upcoming exam, new AI deployment, regulatory inquiry, general gap assessment..."
                    />
                  </div>

                  <div ref={captchaRef} className="h-captcha" />

                  {errorMsg && (
                    <div className="flex items-start gap-2 text-sm text-destructive">
                      <AlertCircle size={15} className="shrink-0 mt-0.5" />
                      {errorMsg}
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="cta"
                    size="xl"
                    disabled={status === "loading"}
                    className="w-full sm:w-auto"
                  >
                    {status === "loading" ? (
                      <><Loader2 size={16} className="animate-spin" /> Submitting…</>
                    ) : (
                      <>Request My Governance Readiness Review <ArrowRight size={16} /></>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    By submitting, you agree to our{" "}
                    <Link href="/privacy-policy" className="text-accent hover:text-accent/80 transition-colors">Privacy Policy</Link>{" "}
                    and{" "}
                    <Link href="/terms-of-service" className="text-accent hover:text-accent/80 transition-colors">Terms of Service</Link>.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="card-premium p-8">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-5">What the review covers</p>
                <ul className="space-y-3">
                  {[
                    "Infrastructure posture and resilience gaps",
                    "Cybersecurity control coverage and gaps",
                    "AI tool inventory and governance gaps",
                    "Vendor and third-party risk posture",
                    "Compliance readiness against your regulatory environment",
                    "Evidence gaps — what is missing before an exam",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 size={14} className="text-accent shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary rounded-2xl p-8 text-warm-white">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold mb-4">Prefer to call?</p>
                <p className="text-2xl font-display font-bold mb-2">
                  <a href="tel:+18779457177" className="hover:text-gold transition-colors">(877) 945-7177</a>
                </p>
                <p className="text-sm opacity-60 leading-relaxed mb-4">
                  Available Monday–Friday, 9am–6pm EST. After-hours support available for active program clients.
                </p>
                <p className="text-sm opacity-60">
                  Or email:{" "}
                  <a href="mailto:hello@centience.ai" className="text-gold hover:text-gold/80 transition-colors font-semibold">
                    hello@centience.ai
                  </a>
                </p>
              </div>

              <div className="card-premium p-6 border-l-4 border-gold">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">Enrollment follows the review</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The Governance Readiness Review is the first step in the Centience Governance Program. Following the review, qualified organizations receive a program enrollment recommendation — including scope, structure, and timeline.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ReadinessPage;
