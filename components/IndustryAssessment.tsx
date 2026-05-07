import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, CheckCircle, AlertTriangle, XCircle } from "lucide-react";
import LeadCaptureModal, { hasLeadCookie } from "@/components/LeadCaptureModal";
import type { LeadFormData } from "@/components/LeadCaptureModal";

export interface AssessmentQuestion {
  question: string;
  options: string[];
}

interface IndustryAssessmentProps {
  headline: string;
  subCopy: string;
  questions: AssessmentQuestion[];
  guideLabel: string;
  guideHref: string;
}

type Answer = string | null;

const IndustryAssessment = ({ headline, subCopy, questions, guideLabel, guideHref }: IndustryAssessmentProps) => {
  const [answers, setAnswers] = useState<Answer[]>(new Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [gateOpen, setGateOpen] = useState(false);
  const [gated, setGated] = useState(() => typeof window !== 'undefined' ? !hasLeadCookie() : true);
  const [leadName, setLeadName] = useState("");

  const setAnswer = (index: number, value: string) => {
    const next = [...answers];
    next[index] = value;
    setAnswers(next);
  };

  const calculateScore = () => {
    let total = 0;
    let applicable = 0;
    answers.forEach((a) => {
      if (a === "N/A") return;
      applicable++;
      if (a === "Yes") total += 1;
      else if (a === "Partial") total += 0.5;
    });
    if (applicable === 0) return { score: 0, max: 10 };
    return { score: total, max: applicable };
  };

  const handleSubmit = () => {
    setShowResults(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleStartAssessment = () => {
    if (gated) {
      setGateOpen(true);
    }
    // If not gated, assessment is already visible
  };

  const handleGateSuccess = async (data: LeadFormData) => {
    setGated(false);
    setLeadName(data.firstName);
    // Submit lead data to backend
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

  const allAnswered = answers.every((a) => a !== null);
  const { score, max } = calculateScore();
  const normalized = max > 0 ? (score / max) * 10 : 0;

  const getResult = () => {
    if (normalized >= 8) return {
      level: "green" as const,
      icon: CheckCircle,
      headline: "Strong Governance Posture",
      body: "Your organization has strong technology governance foundations. Schedule a governance review to identify any gaps and maintain your posture as regulatory requirements evolve.",
      cta: "Schedule a Governance Review",
    };
    if (normalized >= 5) return {
      level: "yellow" as const,
      icon: AlertTriangle,
      headline: "Moderate Risk — Governance Gaps Identified",
      body: "Your organization has governance foundations in place but meaningful gaps exist. These gaps create regulatory exposure that should be addressed through a structured governance program.",
      cta: "Book Your Governance Assessment",
    };
    return {
      level: "red" as const,
      icon: XCircle,
      headline: "Significant Governance Exposure",
      body: "Your organization has significant technology governance gaps that create material regulatory risk. An immediate governance assessment is recommended before your next examination or audit cycle.",
      cta: "Book Your Governance Assessment — Urgently",
    };
  };

  const result = getResult();
  const colorMap = { green: "text-emerald-500", yellow: "text-yellow-500", red: "text-destructive" };
  const bgMap = { green: "bg-emerald-500/10 border-emerald-500/20", yellow: "bg-yellow-500/10 border-yellow-500/20", red: "bg-destructive/10 border-destructive/20" };

  const progress = answers.filter((a) => a !== null).length / questions.length * 100;

  return (
    <Layout>
      {/* Assessment Gate Modal */}
      <LeadCaptureModal
        open={gateOpen}
        onClose={() => setGateOpen(false)}
        type="assessment"
        title={`${headline}`}
        onSuccess={handleGateSuccess}
      />

      <section className="section-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold mb-6">{headline}</h1>
          <p className="text-lg opacity-70 leading-relaxed mb-6">{subCopy}</p>
          <p className="text-sm opacity-50 mb-4">Takes under 5 minutes</p>
          <p className="text-sm opacity-50">
            Prefer to discuss? Call{" "}
            <a href="tel:+18779457177" className="text-gold font-semibold hover:text-gold/80 transition-colors">(877) 945-7177</a>
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto max-w-2xl">
          {/* If gated, show a CTA to start */}
          {gated && !showResults ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                Ready to assess your governance posture?
              </h2>
              <p className="text-muted-foreground mb-8">
                Enter your details to begin this 10-question assessment and receive your personalized governance readiness score.
              </p>
              <Button variant="cta" size="xl" onClick={handleStartAssessment}>
                Start My Assessment <ArrowRight size={16} />
              </Button>
            </div>
          ) : showResults ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className={`rounded-xl border p-8 mb-8 ${bgMap[result.level]}`}>
                <result.icon size={48} className={`${colorMap[result.level]} mx-auto mb-4`} />
                <h2 className={`text-2xl font-display font-bold mb-4 text-center ${colorMap[result.level]}`}>
                  {leadName ? `${leadName}'s Results: ` : ""}{result.headline}
                </h2>
                <p className="text-center text-muted-foreground mb-2">
                  Score: {score} / {max}
                </p>
                <p className="text-center text-muted-foreground leading-relaxed">{result.body}</p>
              </div>

              <div className="text-center space-y-4">
                <Button variant="cta" size="xl" asChild>
                  <Link href="/ai-governance-risk-assessment">
                    {result.cta} <ArrowRight size={16} />
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
                    Or email:{" "}
                    <a href="mailto:info@centience.ai" className="text-accent font-semibold">info@centience.ai</a>
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
              </div>
            </motion.div>
          ) : (
            <>
              {/* Progress bar */}
              <div className="mb-10">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>Progress</span>
                  <span>{answers.filter((a) => a !== null).length} / {questions.length}</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <div className="space-y-8">
                {questions.map((q, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="card-premium p-6"
                  >
                    <p className="text-sm font-bold text-accent mb-1">Question {i + 1} of {questions.length}</p>
                    <p className="text-foreground font-medium mb-4">{q.question}</p>
                    <div className="flex flex-wrap gap-3">
                      {q.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => setAnswer(i, opt)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                            answers[i] === opt
                              ? "bg-accent text-accent-foreground border-accent"
                              : "bg-background border-border text-muted-foreground hover:border-accent/50"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 text-center">
                <Button
                  variant="cta"
                  size="xl"
                  onClick={handleSubmit}
                  disabled={!allAnswered}
                >
                  Get Your Results <ArrowRight size={16} />
                </Button>
                {!allAnswered && (
                  <p className="text-xs text-muted-foreground mt-3">
                    Please answer all questions to see your results.
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default IndustryAssessment;
