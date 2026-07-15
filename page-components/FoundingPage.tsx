"use client";

import { useState, useRef } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useHCaptchaSiteKey } from "@/hooks/useHCaptchaSiteKey";
import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle2, Lock, ShieldCheck, Users, Sparkles, Loader2, CheckCircle,
} from "lucide-react";

const perks = [
  { icon: Lock, title: "Founding price, locked", body: "A charter rate well below planned list pricing — locked in for years, even as list prices rise." },
  { icon: Users, title: "Direct founder access", body: "White-glove onboarding and a direct line to the team — you're not a ticket number." },
  { icon: Sparkles, title: "Shape the roadmap", body: "Founding customers help prioritize what we build next, and get first access to new modules as they ship." },
  { icon: ShieldCheck, title: "Launch guarantee", body: "A satisfaction guarantee through your first weeks post-launch. If it's not delivering, you're not stuck." },
];

const steps = [
  { n: "01", title: "Get your Governance Score", body: "Start with the free assessment — a 0–100 readiness score and your priority gaps mapped to the rules." },
  { n: "02", title: "See it on your environment", body: "A 30-minute working session — we connect a read-only view and turn your gaps into a live picture." },
  { n: "03", title: "Reserve your slot", body: "Lock your founding rate and reserve a September onboarding slot. Limited to the first 20 firms." },
  { n: "04", title: "Onboard at launch", body: "White-glove onboarding in September, so you're exam-ready with a standing evidence trail from day one." },
];

const FoundingPage = () => {
  const [form, setForm] = useState({
    fullName: "", email: "", company: "", phone: "", firmSize: "", framework: "", notes: "",
  });
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const captchaRef = useRef<HCaptcha>(null);
  const { siteKey, error: captchaError } = useHCaptchaSiteKey();
  const captchaReady = !!siteKey && !captchaError;

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (captchaReady && !captchaToken) { setError("Please complete the captcha."); return; }
    if (!form.fullName || !form.email || !form.company) { setError("Please fill in your name, email, and company."); return; }
    setSubmitting(true);
    const message =
      `FOUNDING CUSTOMER — reserve a September launch slot.\n` +
      `Firm size: ${form.firmSize || "—"} · Primary framework: ${form.framework || "—"}` +
      `${form.notes ? `\n\nNotes: ${form.notes}` : ""}`;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.fullName,
          email: form.email,
          company: form.company,
          phone: form.phone,
          service: "Founding Customer Program — Reserve Slot",
          message,
          referringPage: "/founding",
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call (877) 945-7177.");
      captchaRef.current?.resetCaptcha();
      setCaptchaToken(null);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "var(--gradient-gold)" }} />
        <div className="container mx-auto relative z-10 pt-32 pb-16 lg:pt-40 lg:pb-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="gold-line" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Founding Customer Program · Limited to 20 firms</p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.1rem] font-display font-extrabold leading-[1.1] mb-6">
              Be a founding customer of the Centience Platform
            </h1>
            <p className="text-lg leading-relaxed opacity-75 mb-5 max-w-2xl">
              We're onboarding a small charter group of regulated firms ahead of our September launch. Founding customers lock in charter pricing, help shape the roadmap, and get white-glove onboarding — with a launch guarantee that takes the risk off the table.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Button variant="cta" size="xl" asChild>
                <a href="#reserve">Reserve your slot <ArrowRight size={16} /></a>
              </Button>
              <Button variant="outline" size="xl" className="bg-white/5 text-white border-white/40 hover:bg-white/15 hover:text-white" asChild>
                <a href="/assessments/governance-score">Start with your free Governance Score</a>
              </Button>
            </div>
            <p className="text-sm opacity-50 mt-5">
              Or call <a href="tel:+18779457177" className="text-gold hover:text-gold/80 font-semibold">(877) 945-7177</a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4 leading-tight">What founding customers get</h2>
            <p className="text-muted-foreground leading-relaxed">A charter deal for firms who move early — real advantages, not a discount gimmick.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.45, delay: i * 0.05 }} className="card-premium p-7">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <p.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display font-bold text-primary text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4 leading-tight">How the program works</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div key={s.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.45, delay: i * 0.05 }} className="bg-card border border-border rounded-2xl p-6">
                <p className="text-3xl font-display font-extrabold text-gold/40 mb-3">{s.n}</p>
                <h3 className="font-display font-bold text-primary text-base mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reserve form */}
      <section id="reserve" className="py-20 lg:py-28 bg-background scroll-mt-20">
        <div className="container mx-auto max-w-2xl">
          <div className="card-premium p-8 lg:p-10">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-display font-bold text-primary mb-3">Your slot request is in, {form.fullName.split(" ")[0]}</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  We'll reach out within one business day to walk through your Governance Score and lock in your founding rate. Want it sooner? Call{" "}
                  <a href="tel:+18779457177" className="text-accent font-semibold">(877) 945-7177</a>.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-2">Reserve your founding slot</h2>
                <p className="text-muted-foreground mb-7">Tell us a bit about your firm and we'll set up your Governance Score and a working session. No payment now — this reserves your place in the charter cohort.</p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="f-name">Full Name <span className="text-gold">*</span></Label>
                      <Input id="f-name" required value={form.fullName} onChange={(e) => set("fullName", e.target.value)} placeholder="Jane Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="f-company">Company <span className="text-gold">*</span></Label>
                      <Input id="f-company" required value={form.company} onChange={(e) => set("company", e.target.value)} placeholder="Firm name" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="f-email">Work Email <span className="text-gold">*</span></Label>
                      <Input id="f-email" type="email" required value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="jane@firm.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="f-phone">Phone</Label>
                      <Input id="f-phone" type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="(555) 123-4567" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label>Firm size</Label>
                      <Select value={form.firmSize} onValueChange={(v) => set("firmSize", v)}>
                        <SelectTrigger><SelectValue placeholder="Select size" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Under 50">Under 50 employees</SelectItem>
                          <SelectItem value="50-200">50–200 employees</SelectItem>
                          <SelectItem value="200-500">200–500 employees</SelectItem>
                          <SelectItem value="500+">500+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Primary framework</Label>
                      <Select value={form.framework} onValueChange={(v) => set("framework", v)}>
                        <SelectTrigger><SelectValue placeholder="Select framework" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="SEC / FINRA">SEC / FINRA</SelectItem>
                          <SelectItem value="HIPAA">HIPAA</SelectItem>
                          <SelectItem value="Both">Both</SelectItem>
                          <SelectItem value="Other / Unsure">Other / Unsure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="f-notes">Anything we should know? <span className="text-muted-foreground font-normal text-xs">(optional)</span></Label>
                    <Textarea id="f-notes" value={form.notes} onChange={(e) => set("notes", e.target.value)} rows={3} placeholder="Upcoming exam, current tools, timing…" className="resize-none" />
                  </div>

                  {captchaReady && (
                    <div className="flex justify-center">
                      <HCaptcha sitekey={siteKey!} onVerify={setCaptchaToken} onExpire={() => setCaptchaToken(null)} ref={captchaRef} />
                    </div>
                  )}

                  {error && <p className="text-sm text-destructive text-center">{error}</p>}

                  <Button type="submit" variant="cta" size="xl" className="w-full" disabled={submitting}>
                    {submitting ? (<><Loader2 size={16} className="mr-2 animate-spin" /> Reserving…</>) : (<>Reserve my founding slot <ArrowRight size={16} /></>)}
                  </Button>
                  <ul className="grid sm:grid-cols-3 gap-2 pt-2">
                    {["No payment now", "Founding rate locked", "Launch guarantee"].map((b) => (
                      <li key={b} className="flex items-center gap-1.5 text-xs text-muted-foreground justify-center">
                        <CheckCircle2 size={14} className="text-accent shrink-0" /> {b}
                      </li>
                    ))}
                  </ul>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FoundingPage;
