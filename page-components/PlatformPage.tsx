"use client";

import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Activity,
  ShieldCheck,
  FileText,
  AlarmClock,
  ScanSearch,
  Network,
  Plug,
  Gauge,
  Radar,
  ClipboardList,
  Receipt,
  SlidersHorizontal,
} from "lucide-react";

/**
 * AI governance capabilities.
 *
 * Every claim here maps to something that actually executes in
 * `centience-platform` — discovery across three sources (EC-020), the
 * discovered-tool inventory, seat reconciliation in `lib/adoption`, and the
 * monitoring-scope rules. Two of these descriptions exist to state a design
 * decision rather than a feature, because both are the reason a compliance
 * buyer trusts the rest:
 *
 *  - Discovery reports "we could not look" separately from "we looked and
 *    found nothing". A clean result produced by a missing Graph scope would
 *    make a firm stop looking, which is worse than shipping no check at all.
 *  - Nothing is monitored unless the firm turns it on. A commitment to monitor
 *    is an examinable obligation, so it is granted, never assumed.
 *
 * Do not soften either one into a capability boast. They are the product.
 */
const aiGovernance = [
  {
    icon: Radar,
    title: "Shadow-AI discovery that degrades honestly",
    body: "Three independent signals — OAuth app consents, sign-in activity, and endpoint inventory — because each one alone gives a confident and wrong picture. If a connector or permission is missing, you are told the sweep could not run. You will never be shown a clean result that only means we could not look.",
  },
  {
    icon: ClipboardList,
    title: "AI tool inventory and approval",
    body: "Discovered tools land as unapproved, for triage. Once someone records a decision, re-scanning never overwrites it — so the inventory converges on your firm's judgment instead of quietly undoing it every time the check runs.",
  },
  {
    icon: Receipt,
    title: "Usage and spend, reconciled against what you pay for",
    body: "Adoption per user across API, chat, code and collaborative surfaces, reconciled against the seats you actually bought. It surfaces both problems at once: licenses nobody uses, and use on accounts you are not paying for.",
  },
  {
    icon: SlidersHorizontal,
    title: "A monitoring scope you grant, never one we assume",
    body: "Nothing is monitored by default, and enabling one capability never cascades into others. Firms get findings for committing to procedures they don't follow — so the scope you can sustain is the scope the platform operates.",
  },
];

const capabilities = [
  {
    icon: Activity,
    title: "Continuous control monitoring",
    body: "Connect Microsoft 365 or Google Workspace with a read-only app registration and the engine runs live checks against your environment — Secure Score, conditional access, MFA/2SV, and retention posture — then scores where you stand.",
  },
  {
    icon: ShieldCheck,
    title: "Evidence vault",
    body: "Every check result is timestamped and stored, building the standing evidence trail an examiner asks for. Upload and analyze supporting documents so proof lives in one place, not scattered across inboxes.",
  },
  {
    icon: FileText,
    title: "Policy & WSP generation",
    body: "Generate written supervisory procedures and governance policies tailored to your firm, and export them as branded, audit-ready PDFs.",
  },
  {
    icon: AlarmClock,
    title: "Incident & Reg S-P clock",
    body: "Log incidents and track them against the Regulation S-P 30-day notification window, so a breach response is governed and timed — not improvised.",
  },
  {
    icon: ScanSearch,
    title: "Data classification (DLP)",
    body: "A built-in classifier detects 27 types of sensitive data — SSNs, account numbers, PII/PHI — so you can find and govern client data before it leaks or lands in an ungoverned tool.",
  },
  {
    icon: Network,
    title: "Control mapping",
    body: "Controls map to the obligations that matter — SEC, FINRA, and HIPAA — and to NIST CSF, so you can show which rule each control satisfies.",
  },
];

const steps = [
  {
    n: "01",
    title: "Connect",
    body: "Link Microsoft 365 or Google Workspace in minutes with a read-only app registration. No agents to deploy, and it works alongside your existing IT team or MSP.",
  },
  {
    n: "02",
    title: "Discover",
    body: "The engine sweeps for AI tools already in use and runs its checks against your live environment, returning a 0–100 Governance Score with your priority gaps mapped to the rules.",
  },
  {
    n: "03",
    title: "Evidence",
    body: "Results are timestamped into the evidence vault. Generate policies, WSPs, and exam-ready reports from what the engine finds.",
  },
  {
    n: "04",
    title: "Stay ready",
    body: "Track your posture, run incident and Reg S-P workflows, and keep readiness a standing state instead of a pre-exam scramble.",
  },
];

const PlatformPage = () => (
  <Layout>
    {/* Hero */}
    <section className="section-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "var(--gradient-gold)" }} />
      <div className="container mx-auto relative z-10 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="gold-line" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">The Centience Platform</p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-extrabold leading-[1.08] mb-6">
              AI governance, and the control set underneath it
            </h1>
            <p className="text-lg leading-relaxed opacity-75 mb-5 max-w-xl">
              Your people adopted AI faster than any approval process could move. Centience finds the tools already in use, reconciles them against what you actually pay for, and governs them alongside access, records, and everything else an examiner asks about.
            </p>
            <p className="text-lg leading-relaxed opacity-75 mb-8 max-w-xl">
              We implement the AI too — and then govern what we implemented. It runs alongside your internal IT or existing MSP, without replacing either.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="cta" size="xl" asChild>
                <Link href="/contact">Book a demo <ArrowRight size={16} /></Link>
              </Button>
              <Button variant="outline" size="xl" className="bg-white/5 text-white border-white/40 hover:bg-white/15 hover:text-white" asChild>
                <Link href="/assessments/governance-score">See it first — free Governance Score</Link>
              </Button>
            </div>
            <p className="text-sm opacity-50 mt-5">
              Or call{" "}
              <a href="tel:+18779457177" className="text-gold hover:text-gold/80 transition-colors font-semibold">(877) 945-7177</a>
            </p>
          </motion.div>

          {/* Illustrative product graphic (stylized — not a screenshot) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="hidden lg:block"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-5">
                <p className="text-xs uppercase tracking-widest text-warm-white/50">Governance Score</p>
                <span className="text-[10px] font-semibold text-accent bg-accent/15 rounded-full px-2 py-0.5">Live</span>
              </div>
              <div className="flex items-center gap-5 mb-6">
                <div className="relative w-24 h-24 shrink-0">
                  <svg viewBox="0 0 100 100" className="w-24 h-24 -rotate-90">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="8" />
                    <circle cx="50" cy="50" r="42" fill="none" stroke="var(--gold)" strokeWidth="8" strokeLinecap="round" strokeDasharray="264" strokeDashoffset="66" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-display font-bold text-warm-white">75</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm w-full">
                  {[["Access & MFA", "92"], ["AI governance", "64"], ["Recordkeeping", "71"]].map(([label, val]) => (
                    <div key={label}>
                      <div className="flex justify-between text-warm-white/70 text-xs mb-1"><span>{label}</span><span>{val}</span></div>
                      <div className="h-1.5 rounded-full bg-white/10"><div className="h-1.5 rounded-full" style={{ width: `${val}%`, background: "var(--gradient-gold)" }} /></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[["Evidence items", "1,240"], ["Controls mapped", "SEC · FINRA · HIPAA"], ["AI tools found", "3 unapproved"], ["Reg S-P clock", "On track"]].map(([k, v]) => (
                  <div key={k} className="rounded-lg bg-white/[0.04] border border-white/10 px-3 py-2">
                    <p className="text-warm-white/45 text-[10px] uppercase tracking-wide">{k}</p>
                    <p className="text-warm-white/90 font-semibold">{v}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-center text-[11px] text-warm-white/35 mt-3">Illustrative — your dashboard reflects your live environment.</p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* AI governance */}
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">AI Governance</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">
            You can't govern the AI you can't see
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Most firms discover their AI exposure the same way: someone asks which tools are in use, and nobody can answer. The tools arrived on personal subscriptions, inside software the firm already trusted, or on accounts that don't carry the firm's domain — and none of it produced a log.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Centience starts by finding out, and is careful about the difference between a clean answer and no answer at all.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {aiGovernance.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="card-premium p-7"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <c.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display font-bold text-primary text-lg mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-8 max-w-3xl">
          Policies and the control map come from the same engine, so the AI policy you hand an examiner describes the environment the checks are actually testing.
        </p>
      </div>
    </section>

    {/* AI implementation */}
    <section className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-line" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">AI Implementation</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">
              We implement the AI, then govern what we implemented
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Governance is far easier when the deployment was built to be governed. Most firms inherit the opposite — tools adopted individually, with no central tenancy to connect to and no record of anything.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Centience deploys enterprise AI properly: firm-held tenancy rather than personal subscriptions, the connectors your people actually need into Microsoft 365 and your line-of-business systems, sensitive data redacted in real time before it reaches a model, and interactions captured into your own tenant on a retention period you choose.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You can also hand us an environment somebody else deployed. We'll find what's running first.
            </p>
          </div>
          <div className="space-y-4 lg:pt-16">
            {[
              { t: "Enterprise deployment", b: "Firm-held tenancy, SSO and group-based access, so approved tools sit inside the boundary your other controls already assume." },
              { t: "Connectors, scoped", b: "Integration with the systems your people work in, with access scoped per group rather than granted wholesale." },
              { t: "Redaction before submission", b: "Client PII and firm-defined sensitive categories removed in real time, before they reach a model — not audited afterwards." },
              { t: "Capture and retention you set", b: "Interactions retained in your own tenant. A 30-day auto-delete is as supported as a multi-year hold, and the choice is yours to make with counsel." },
              { t: "Rollout and enablement", b: "Training and usage review, so adoption is something the firm can evidence rather than guess at." },
            ].map((item, i) => (
              <motion.div
                key={item.t}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-3.5"
              >
                <CheckCircle2 size={18} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-display font-bold text-primary text-sm mb-1">{item.t}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.b}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Capabilities */}
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">The Wider Control Set</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4 leading-tight">
            AI is one domain. The engine covers the rest.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            An AI finding and an access finding are the same kind of object here — an owner, a citation, and a timestamped record of when it was last verified. One engine, one evidence trail.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="card-premium p-7"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <c.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display font-bold text-primary text-lg mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* How it works */}
    <section className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4 leading-tight">
            From connected to exam-ready
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            No agents, no rip-and-replace. Connect a read-only view of your environment and the engine does the rest.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <p className="text-3xl font-display font-extrabold text-gold/40 mb-3">{s.n}</p>
              <h3 className="font-display font-bold text-primary text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Who it's for */}
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card-premium p-8">
            <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
              <Plug className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-display font-bold text-primary text-xl mb-3">Run it yourself</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For firms with internal IT or an existing MSP. Centience becomes your governance layer — monitoring controls, mapping them to the rules, and keeping the evidence — without replacing anyone.
            </p>
            <ul className="space-y-2.5">
              {["Works with your existing IT / MSP", "Read-only connection to M365 or Google", "Own your governance program in-house"].map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2 size={17} className="text-accent mt-0.5 shrink-0" /><span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-premium p-8">
            <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
              <Gauge className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-display font-bold text-primary text-xl mb-3">Have us run it for you</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Prefer it fully managed? Centience operates the program end-to-end — the same platform, run by the team that has supported regulated firms through examinations for 20+ years.
            </p>
            <ul className="space-y-2.5">
              {["Fully managed governance program", "We operate the platform and the controls", "Continuous, evidence-based exam readiness"].map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2 size={17} className="text-accent mt-0.5 shrink-0" /><span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">
          Pricing scales with firm size and scope.{" "}
          <Link href="/contact" className="text-gold font-semibold hover:text-gold/80">Book a demo for a quote →</Link>
        </p>
      </div>
    </section>

    {/* Closing CTA */}
    <section className="py-20 lg:py-28 section-navy relative overflow-hidden">
      <div className="container mx-auto max-w-2xl text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-5 leading-tight">
          See the platform on your own environment
        </h2>
        <p className="text-lg opacity-70 mb-8">
          Book a 30-minute demo and we'll show you your Governance Score, your priority gaps, and the evidence trail — on your firm, not a canned example.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="cta" size="xl" asChild>
            <Link href="/contact">Book a demo <ArrowRight size={16} /></Link>
          </Button>
          <Button variant="outline" size="xl" className="bg-white/5 text-white border-white/40 hover:bg-white/15 hover:text-white" asChild>
            <Link href="/assessments/governance-score">Get your free Governance Score</Link>
          </Button>
        </div>
        <p className="text-sm opacity-50 mt-5">
          Or call{" "}
          <a href="tel:+18779457177" className="text-gold hover:text-gold/80 transition-colors font-semibold">(877) 945-7177</a>
        </p>
      </div>
    </section>
  </Layout>
);

export default PlatformPage;
