"use client";
import { useState, useRef, useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Building2, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

declare global {
  interface Window {
    hcaptcha: {
      render: (container: string | HTMLElement, params: object) => string;
      getResponse: (widgetId?: string) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

const SERVICES = [
  "AI Governance",
  "Cybersecurity Governance",
  "Infrastructure Governance",
  "Technology Governance",
  "Co-Management",
  "Other",
];

const ContactPage = () => {
  const locations = [
    { name: "New York City", address: "1350 Ave of the Americas, Fl 3", state: "NY" },
    { name: "White Plains", address: "333 Mamaroneck Avenue #431", state: "NY" },
    { name: "Miami", address: "200 S. Biscayne Blvd.", state: "FL" },
    { name: "Palm Beach Gardens", address: "4440 PGA Boulevard, Suite 600", state: "FL" },
  ];

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    service: "",
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

    if (!form.service) {
      setErrorMsg("Please select a reason for contacting us.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, captchaToken }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      setForm({ firstName: "", lastName: "", email: "", phone: "", company: "", jobTitle: "", service: "", message: "" });
      window.hcaptcha?.reset(widgetIdRef.current ?? undefined);
      widgetIdRef.current = null;
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or call us directly.");
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "var(--gradient-gold)" }} />
        <div className="container mx-auto relative z-10 pt-32 pb-16 lg:pt-40 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="gold-line" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Contact Us</p>
              <div className="gold-line" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-extrabold leading-[1.1] mb-6">
              Have One of Our Experts{" "}
              <span className="text-gradient-gold">Contact You</span>
            </h1>
            <p className="text-lg leading-relaxed opacity-70 max-w-2xl mx-auto">
              Tell us a little bit about yourself, your business &amp; project and a specialist will reach out to discuss.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="py-8 bg-muted border-b border-border">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            <motion.a whileHover={{ scale: 1.05 }} href="mailto:info@centience.ai"
              className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <span className="font-medium">info@centience.ai</span>
            </motion.a>
            <motion.a whileHover={{ scale: 1.05 }} href="tel:+18779457177"
              className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <span className="font-medium">877.945.7177</span>
            </motion.a>
            <div className="flex items-center gap-3 text-foreground">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <span className="font-medium">24/7 Support Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="card-premium p-8 lg:p-10">
                <h2 className="text-2xl lg:text-3xl font-display font-bold text-primary mb-2">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>

                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center gap-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-primary">Message Received</h3>
                    <p className="text-muted-foreground max-w-sm">
                      Thank you for reaching out. A Centience specialist will contact you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-4 text-accent font-semibold hover:underline text-sm"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name row */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">First Name <span className="text-accent">*</span></label>
                        <input
                          name="firstName" value={form.firstName} onChange={handleChange} required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Last Name <span className="text-accent">*</span></label>
                        <input
                          name="lastName" value={form.lastName} onChange={handleChange} required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                          placeholder="Smith"
                        />
                      </div>
                    </div>

                    {/* Email + Phone */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Work Email <span className="text-accent">*</span></label>
                        <input
                          name="email" type="email" value={form.email} onChange={handleChange} required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
                        <input
                          name="phone" type="tel" value={form.phone} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    {/* Company + Job Title */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Company <span className="text-accent">*</span></label>
                        <input
                          name="company" value={form.company} onChange={handleChange} required
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                          placeholder="Acme Corp"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Job Title</label>
                        <input
                          name="jobTitle" value={form.jobTitle} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
                          placeholder="CTO"
                        />
                      </div>
                    </div>

                    {/* Reason for Contacting */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Reason for Contacting <span className="text-accent">*</span></label>
                      <select
                        name="service" value={form.service} onChange={handleChange} required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition appearance-none"
                      >
                        <option value="" disabled>Select a service…</option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                      <textarea
                        name="message" value={form.message} onChange={handleChange} rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition resize-none"
                        placeholder="Tell us about your project or challenge…"
                      />
                    </div>

                    {/* hCaptcha */}
                    <div>
                      <div ref={captchaRef} />
                    </div>

                    {/* Error */}
                    {errorMsg && (
                      <div className="flex items-center gap-2 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        {errorMsg}
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-4 px-8 rounded-lg font-display font-bold text-base transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      style={{ background: "var(--gradient-gold)", color: "#0d1b2e" }}
                    >
                      {status === "loading" ? (
                        <><Loader2 className="w-5 h-5 animate-spin" /> Sending…</>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <h3 className="text-xl font-display font-bold text-primary mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-accent" />
                  Our Offices
                </h3>
                <div className="space-y-4">
                  {locations.map((location, index) => (
                    <motion.div
                      key={location.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="card-premium p-5"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-primary mb-1">{location.name}</h4>
                          <p className="text-muted-foreground text-sm">{location.address}</p>
                          <p className="text-accent text-sm font-medium">{location.state}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Immediate Help */}
              <div className="section-navy rounded-2xl p-6">
                <h4 className="text-lg font-display font-bold mb-3">Need Immediate Help?</h4>
                <p className="opacity-70 text-sm mb-4">
                  Our 24/7 support team is ready to assist you with any urgent IT issues.
                </p>
                <a href="tel:+18779457177"
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:opacity-80 transition-opacity">
                  <Phone className="w-5 h-5" />
                  Call 877.945.7177
                </a>
              </div>

              {/* Why Partner */}
              <div className="card-premium p-6">
                <h4 className="font-display font-bold text-primary mb-4">Why Partner With Us?</h4>
                <ul className="space-y-3">
                  {["99%+ audit success rate", "20+ years of compliance expertise", "24/7 dedicated support", "100+ satisfied clients"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
