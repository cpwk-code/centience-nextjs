"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, CheckCircle, AlertTriangle, XCircle, ShieldCheck } from "lucide-react";
import LeadCaptureModal, { hasLeadCookie, trackAssessmentStart } from "@/components/LeadCaptureModal";
import type { LeadFormData } from "@/components/LeadCaptureModal";
import {
  computeScore,
  routeTier,
  getBenchmark,
  DOMAIN_LABELS,
  type ScoreQuestion,
  type ScoreAnswers,
  type FirmSize,
} from "@/lib/governanceScore";

interface Props {
  headline: string;
  subCopy: string;
  questions: ScoreQuestion[];
  industrySlug: string;
  guideLabel: string;
  guideHref: string;
}

const FIRM_SIZES: { value: FirmSize; label: string }[] = [
  { value: "small", label: "Under 50 employees" },
  { value: "mid", label: "50–150 employees" },
  { value: "large", label: "150+ employees" },
];

const bandStyles = {
  strong: { icon: CheckCircle, color: "text-emerald-500", bg: "bg-emerald-500/10 border-emerald-500/20", bar: "bg-emerald-500" },
  moderate: { icon: AlertTriangle, color: "text-yellow-500", bg: "bg-yellow-500/10 border-yellow-500/20", bar: "bg-yellow-500" },
  exposed: { icon: XCircle, color: "text-destructive", bg: "bg-destructive/10 border-destructive/20", bar: "bg-destructive" },
} as const;

function barColor(score: number): string {
  if (score >= 80) return "bg-emerald-500";
  if (score >= 60) return "bg-yellow-500";
  return "bg-destructive";
}

const GovernanceScoreAssessment = ({ headline, subCopy, questions, industrySlug, guideLabel, guideHref }: Props) => {
  const [firmSize, setFirmSize] = useState<FirmSize>("mid");
  const [answers, setAnswers] = useState<ScoreAnswers>(new Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [gateOpen, setGateOpen] = useState(false);
  const [gated, setGated] = useState(() => (typeof window !== "undefined" ? !hasLeadCookie() : true));
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");

  const setAnswer = (index: number, value: string) => {
    const next = [...answers];
    next[index] = value;
    setAnswers(next);
  };

  const allAnswered = answers.every((a) => a !== null);
  const result = computeScore(questions, answers);
  const routing = routeTier({ overall: result.overall, criticalGapCount: result.criticalGapCount, firmSize });
  const benchmark = getBenchmark(industrySlug);
  const style = bandStyles[result.band];

  const handleStartAssessment = async () => {
    if (gated) {
      setGateOpen(true);
    } else {
      const data = await trackAssessmentStart(headline);
      if (data) setLeadName(data.firstName);
    }
  };

  const handleGateSuccess = async (data: LeadFormData) => {
    setGated(false);
    setLeadName(data.firstName);
    setLeadEmail(data.email);
    try {
      await fetch("/api/assessment-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          company: data.company,
          jobTitle: data.jobTitle,
          industry: data.industry,
          phone: data.phone,
          assessmentType: headline,
        }),
      });
    } catch (err) {
      console.error("Assessment lead submission error (non-fatal):", err);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (leadEmail) {
      fetch("/api/assessment-results", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: leadEmail,
          firstName: leadName,
          assessmentType: headline,
          // legacy fields (kept for backward compatibility with the results email)
          score: result.overall,
          max: 100,
          resultSummary: result.bandLabel,
          // full Governance Score payload
          overall: result.overall,
          tier: routing.tier,
          domains: result.domains.map((d) => ({ domain: d.domain, label: d.label, score: d.score })),
          topGaps: result.gaps.slice(0, 3).map((g) => ({ question: g.question, regulation: g.regulation })),
        }),
      }).catch(console.error);
    }
  };

  const StyleIcon = style.icon;

  return (
    <Layout>
      <LeadCaptureModal
        open={gateOpen}
        onClose={() => setGateOpen(false)}
        type="assessment"
        title={headline}
        onSuccess={handleGateSuccess}
      />

      <section className="section-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold mb-6">{headline}</h1>
          <p className="text-lg opacity-70 leading-relaxed mb-6">{subCopy}</p>
          <p className="text-sm opacity-50 mb-4">Takes under 5 minutes · Instant 0–100 score with peer benchmark</p>
          <p className="text-sm opacity-50">
            Prefer to discuss? Call{" "}
            <a href="tel:+18779457177" className="text-gold font-semibold hover:text-gold/80 transition-colors">(877) 945-7177</a>
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto max-w-2xl">
          {gated && !showResults ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-display font-bold text-primary mb-4">Ready to get your Governance Score?</h2>
              <p className="text-muted-foreground mb-8">
                Enter your details to begin this {questions.length}-question assessment and receive your personalized
                0–100 score, per-domain breakdown, and peer benchmark.
              </p>
              <Button variant="cta" size="xl" onClick={handleStartAssessment}>
                Start My Assessment <ArrowRight size={16} />
              </Button>
            </div>
          ) : showResults ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              {/* Score headline */}
              <div className={`rounded-xl border p-8 mb-6 ${style.bg}`}>
                <StyleIcon size={44} className={`${style.color} mx-auto mb-3`} />
                <p className="text-center text-sm text-muted-foreground mb-1">
                  {leadName ? `${leadName}'s Governance Score` : "Your Governance Score"}
                </p>
                <p className={`text-center text-6xl font-display font-extrabold mb-2 ${style.color}`}>{result.overall}</p>
                <p className={`text-center text-lg font-semibold mb-2 ${style.color}`}>{result.bandLabel}</p>
                <p className="text-center text-sm text-muted-foreground">
                  Peer average for your industry: <strong>{benchmark.overall}</strong>{" "}
                  {result.overall >= benchmark.overall ? "· you're above peers" : "· you're below peers"}
                </p>
              </div>

              {/* Per-domain breakdown */}
              <div className="card-premium p-6 mb-6">
                <h3 className="text-sm font-bold text-accent mb-4">Breakdown by domain</h3>
                <div className="space-y-4">
                  {result.domains.map((d) => (
                    <div key={d.domain}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-foreground font-medium">{d.label}</span>
                        <span className="text-muted-foreground">
                          {d.score}
                          {benchmark.domains[d.domain] !== undefined && (
                            <span className="opacity-60"> · peer {benchmark.domains[d.domain]}</span>
                          )}
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className={`h-full rounded-full transition-all duration-500 ${barColor(d.score)}`} style={{ width: `${d.score}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top gaps */}
              {result.gaps.length > 0 && (
                <div className="card-premium p-6 mb-6">
                  <h3 className="text-sm font-bold text-accent mb-4">Your priority gaps</h3>
                  <ul className="space-y-4">
                    {result.gaps.slice(0, 4).map((g) => (
                      <li key={g.id} className="border-l-2 border-border pl-4">
                        <p className="text-foreground font-medium text-sm mb-1">
                          {g.critical && <span className="text-destructive font-bold">Critical · </span>}
                          {g.question}
                        </p>
                        {g.regulation && <p className="text-xs text-accent mb-0.5">{g.regulation}</p>}
                        {g.consequence && <p className="text-xs text-muted-foreground">{g.consequence}</p>}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Routed CTA */}
              <div className="text-center space-y-4">
                <div className="rounded-lg bg-muted/40 p-4 mb-2">
                  <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                    <ShieldCheck size={16} className="text-accent" />
                    {routing.reason}
                  </p>
                </div>
                <Button variant="cta" size="xl" asChild>
                  <Link href={routing.ctaHref}>
                    {routing.cta} <ArrowRight size={16} />
                  </Link>
                </Button>

                <div className="flex flex-col items-center gap-3 pt-4">
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Phone size={14} className="text-accent" />
                    Questions? Call us directly:{" "}
                    <a href="tel:+18779457177" className="text-accent font-semibold">(877) 945-7177</a>
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Mail size={14} className="text-accent" />
                    Or email: <a href="mailto:hello@centience.ai" className="text-accent font-semibold">hello@centience.ai</a>
                  </p>
                </div>

                <div className="pt-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={guideHref} target="_blank" rel="noopener noreferrer">
                      {guideLabel} <ArrowRight size={14} className="ml-2" />
                    </a>
                  </Button>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-4"
                  onClick={() => { setShowResults(false); setAnswers(new Array(questions.length).fill(null)); }}
                >
                  Retake Assessment
                </Button>
                <p className="text-[11px] text-muted-foreground/60 pt-2">
                  Peer benchmark shown is an industry seed estimate and updates as more firms complete the Score.
                </p>
              </div>
            </motion.div>
          ) : (
            <>
              {/* Firm size (needed for tier routing) */}
              <div className="card-premium p-6 mb-8">
                <p className="text-foreground font-medium mb-3">First — how large is your firm?</p>
                <div className="flex flex-wrap gap-3">
                  {FIRM_SIZES.map((f) => (
                    <button
                      key={f.value}
                      onClick={() => setFirmSize(f.value)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                        firmSize === f.value
                          ? "bg-accent text-accent-foreground border-accent"
                          : "bg-background border-border text-muted-foreground hover:border-accent/50"
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Progress */}
              <div className="mb-10">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>Progress</span>
                  <span>{answers.filter((a) => a !== null).length} / {questions.length}</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full transition-all duration-300"
                    style={{ width: `${(answers.filter((a) => a !== null).length / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Questions */}
              <div className="space-y-8">
                {questions.map((q, i) => (
                  <motion.div
                    key={q.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className="card-premium p-6"
                  >
                    <p className="text-sm font-bold text-accent mb-1">
                      Question {i + 1} of {questions.length} · {DOMAIN_LABELS[q.domain]}
                    </p>
                    <p className="text-foreground font-medium mb-4">{q.question}</p>
                    <div className="flex flex-col gap-3">
                      {q.options.map((opt) => (
                        <button
                          key={opt.label}
                          onClick={() => setAnswer(i, opt.label)}
                          className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium border transition-all ${
                            answers[i] === opt.label
                              ? "bg-accent text-accent-foreground border-accent"
                              : "bg-background border-border text-muted-foreground hover:border-accent/50"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 text-center">
                <Button variant="cta" size="xl" onClick={handleSubmit} disabled={!allAnswered}>
                  Get My Governance Score <ArrowRight size={16} />
                </Button>
                {!allAnswered && (
                  <p className="text-xs text-muted-foreground mt-3">Please answer all questions to see your score.</p>
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default GovernanceScoreAssessment;
