"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Brain, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  AlertTriangle,
  TrendingUp,
  Shield,
  Database,
  Users,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useState, useRef, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { toast } from "sonner";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import SEO from "@/components/SEO";
import { supabase } from "@/integrations/supabase/client";
import { useHCaptchaSiteKey } from "@/hooks/useHCaptchaSiteKey";
import {
  aiReadinessSections,
  calculateAIReadinessScore,
  getSectionScore,
} from "@/data/aiReadinessQuestions";

const BOOKING_URL = "https://outlook.office.com/bookwithme/user/d262028309eb4a55b36d34827efbd937@compuwork.ai/meetingtype/9TirZkyTl0S_U1MzWStHWw2?anonymous&ismsaljsauthenabled&ep=mlink";

const sectionIcons: Record<string, typeof Brain> = {
  "current-environment": Settings,
  "strategy-use-cases": TrendingUp,
  "data-security": Shield,
  "technical-infrastructure": Database,
  "organization-governance": Users,
};

const AIReadinessAssessmentPage = () => {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    title: "",
  });
  const [showResults, setShowResults] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStartTime] = useState<number>(Date.now());
  const [honeypot, setHoneypot] = useState<string>("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);
  const { siteKey: hcaptchaSiteKey, error: captchaError } = useHCaptchaSiteKey();

  // Check for access authorization
  useEffect(() => {
    const hasAccess = sessionStorage.getItem("ai_readiness_access");
    if (!hasAccess) {
      navigate("/get-ai-assessment", { replace: true });
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  const totalQuestions = aiReadinessSections.reduce(
    (sum, section) => sum + section.questions.length,
    0
  );
  const answeredQuestions = Object.keys(answers).length;
  const progress = (answeredQuestions / totalQuestions) * 100;

  const currentSection = aiReadinessSections[currentStep];
  const isLastSection = currentStep === aiReadinessSections.length - 1;
  const isContactStep = currentStep === aiReadinessSections.length;

  const isSectionComplete = () => {
    if (!currentSection) return true;
    return currentSection.questions.every((q) => answers[q.id] !== undefined);
  };

  const handleAnswerSelect = (questionId: string, score: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: score }));
  };

  const handleNext = () => {
    if (!isSectionComplete()) {
      toast.error("Please answer all questions before continuing.");
      return;
    }
    setCurrentStep((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(0, prev - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onCaptchaVerify = (token: string) => {
    setCaptchaToken(token);
  };

  const onCaptchaExpire = () => {
    setCaptchaToken(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      toast.error("Please complete the captcha verification.");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = calculateAIReadinessScore(answers);
      
      const { error } = await supabase.functions.invoke("submit-contact", {
        body: {
          fullName: contactInfo.name,
          email: contactInfo.email,
          phone: contactInfo.phone,
          company: contactInfo.company,
          reason: "AI Integration Readiness Assessment",
          message: `AI Readiness Score: ${result.totalScore}/${result.maxScore} (${result.percentage}%) - ${result.readinessLabel}. Title: ${contactInfo.title}`,
          website: honeypot,
          formStartTime,
          submissionTime: Date.now(),
          captchaToken,
          referringPage: window.location.pathname,
        },
      });

      if (error) {
        console.error("Submission error:", error);
        toast.error("Failed to submit assessment. Please try again.");
        captchaRef.current?.resetCaptcha();
        setCaptchaToken(null);
        setIsSubmitting(false);
        return;
      }

      setShowResults(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      
      // Redirect to booking link after showing results briefly
      setTimeout(() => {
        window.location.href = BOOKING_URL;
      }, 3000);
    } catch (err) {
      console.error("Unexpected error:", err);
      toast.error("An unexpected error occurred. Please try again.");
      captchaRef.current?.resetCaptcha();
      setCaptchaToken(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  const result = calculateAIReadinessScore(answers);

  const getReadinessColor = (level: string) => {
    switch (level) {
      case "high":
        return "text-green-500";
      case "good":
        return "text-gold";
      case "needs-work":
        return "text-red-500";
      default:
        return "text-muted-foreground";
    }
  };

  const getReadinessBg = (level: string) => {
    switch (level) {
      case "high":
        return "bg-green-500/10 border-green-500/30";
      case "good":
        return "bg-gold/10 border-gold/30";
      case "needs-work":
        return "bg-red-500/10 border-red-500/30";
      default:
        return "bg-muted";
    }
  };
  // Show nothing while checking authorization
  if (!isAuthorized) {
    return null;
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-background">
        <SEO
          title="AI Integration Readiness Results | Compuwork"
          description="View your AI integration readiness assessment results and get personalized recommendations."
          canonical="/ai-readiness-assessment"
        />
        <Header />

        <section className="pt-32 pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 ${getReadinessBg(result.readinessLevel)}`}
                >
                  {result.readinessLevel === "high" ? (
                    <CheckCircle className="w-12 h-12 text-green-500" />
                  ) : result.readinessLevel === "good" ? (
                    <TrendingUp className="w-12 h-12 text-gold" />
                  ) : (
                    <AlertTriangle className="w-12 h-12 text-red-500" />
                  )}
                </motion.div>

                <h1 className="text-4xl sm:text-5xl font-bold font-display text-foreground mb-4">
                  Your AI Readiness Score
                </h1>

                <div className={`text-6xl font-bold mb-2 ${getReadinessColor(result.readinessLevel)}`}>
                  {result.totalScore}/{result.maxScore}
                </div>
                <div className="text-2xl font-semibold text-foreground mb-2">
                  {result.readinessLabel}
                </div>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {result.readinessDescription}
                </p>
              </div>

              {/* Section Breakdown */}
              <div className="bg-card border border-border rounded-2xl p-8 mb-8">
                <h2 className="text-xl font-bold text-foreground mb-6">
                  Score Breakdown by Category
                </h2>
                <div className="space-y-6">
                  {aiReadinessSections.map((section) => {
                    const sectionResult = getSectionScore(section.id, answers);
                    const Icon = sectionIcons[section.id] || Brain;
                    return (
                      <div key={section.id}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <Icon className="w-5 h-5 text-gold" />
                            <span className="font-medium text-foreground">
                              {section.title}
                            </span>
                          </div>
                          <span className="text-muted-foreground">
                            {sectionResult.score}/{sectionResult.maxScore} ({sectionResult.percentage}%)
                          </span>
                        </div>
                        <Progress value={sectionResult.percentage} className="h-2" />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-violet-500/10 to-gold/5 border border-violet-500/20 rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Accelerate Your AI Journey?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Our AI integration experts can help you address gaps and implement secure, compliant AI solutions tailored to your organization.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="gold" size="lg" className="shadow-gold" asChild>
                    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                      Schedule Consultation
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="tel:8779457177">Call Us</a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AI Integration Readiness Assessment | Compuwork"
        description="Evaluate your organization's readiness for AI integration with Microsoft CoPilot, Google Gemini, and other enterprise AI platforms. Get a personalized readiness score."
        canonical="/ai-readiness-assessment"
        keywords={[
          "AI readiness assessment",
          "AI integration evaluation",
          "Microsoft CoPilot readiness",
          "Google Gemini assessment",
          "enterprise AI adoption",
          "AI governance assessment",
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "AI Integration", url: "/services/ai-integration" },
          { name: "AI Readiness Assessment", url: "/ai-readiness-assessment" },
        ]}
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 bg-violet-500/10 rounded-full px-5 py-2.5 mb-6"
            >
              <Brain className="w-4 h-4 text-violet-500" />
              <span className="text-violet-500 font-semibold text-sm tracking-wide uppercase">
                AI Readiness Assessment
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-foreground mb-6 leading-tight">
              Is Your Organization{" "}
              <span className="text-gradient-gold">AI Ready?</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Evaluate your readiness for Microsoft CoPilot, Google Gemini, and enterprise AI integration across 5 key dimensions.
            </p>

            {/* Progress */}
            <div className="max-w-md mx-auto">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Progress</span>
                <span>{answeredQuestions} of {totalQuestions} questions</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Assessment Content */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              {isContactStep ? (
                <motion.div
                  key="contact"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <div className="bg-card border border-border rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      Get Your Results
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      Enter your details to receive your AI readiness score and personalized recommendations.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name <span className="text-gold">*</span></Label>
                          <Input
                            id="name"
                            required
                            value={contactInfo.name}
                            onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                            placeholder="John Smith"
                            className="bg-background border-border focus:border-gold"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="title">Job Title</Label>
                          <Input
                            id="title"
                            value={contactInfo.title}
                            onChange={(e) => setContactInfo({ ...contactInfo, title: e.target.value })}
                            placeholder="IT Director"
                            className="bg-background border-border focus:border-gold"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email <span className="text-gold">*</span></Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={contactInfo.email}
                            onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                            placeholder="john@company.com"
                            className="bg-background border-border focus:border-gold"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone <span className="text-gold">*</span></Label>
                          <Input
                            id="phone"
                            type="tel"
                            required
                            value={contactInfo.phone}
                            onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                            placeholder="(555) 123-4567"
                            className="bg-background border-border focus:border-gold"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          value={contactInfo.company}
                          onChange={(e) => setContactInfo({ ...contactInfo, company: e.target.value })}
                          placeholder="Your Company Name"
                          className="bg-background border-border focus:border-gold"
                        />
                      </div>

                      {/* Honeypot */}
                      <div className="absolute -left-[9999px] opacity-0 pointer-events-none" aria-hidden="true" tabIndex={-1}>
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
                          <p className="text-sm text-muted-foreground">Loading verification…</p>
                        )}
                      </div>

                      <div className="flex gap-4">
                        <Button type="button" variant="outline" size="lg" onClick={handleBack}>
                          <ArrowLeft className="w-5 h-5" />
                          Back
                        </Button>
                        <Button
                          type="submit"
                          variant="gold"
                          size="lg"
                          className="flex-1 shadow-gold"
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
                              Get My Results
                              <ArrowRight className="w-5 h-5" />
                            </span>
                          )}
                        </Button>
                      </div>
                    </form>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={currentSection.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <div className="bg-card border border-border rounded-2xl p-8">
                    {/* Section Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center">
                        {(() => {
                          const Icon = sectionIcons[currentSection.id] || Brain;
                          return <Icon className="w-6 h-6 text-violet-500" />;
                        })()}
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">
                          Section {currentStep + 1} of {aiReadinessSections.length}
                        </div>
                        <h2 className="text-xl font-bold text-foreground">
                          {currentSection.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-8">
                      {currentSection.description}
                    </p>

                    {/* Questions */}
                    <div className="space-y-8">
                      {currentSection.questions.map((question, qIndex) => (
                        <div key={question.id}>
                          <h3 className="text-lg font-medium text-foreground mb-4">
                            {qIndex + 1}. {question.question}
                          </h3>
                          <div className="space-y-3">
                            {question.options.map((option) => (
                              <motion.button
                                key={option.label}
                                type="button"
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                onClick={() => handleAnswerSelect(question.id, option.score)}
                                className={`w-full text-left p-4 rounded-xl border transition-all ${
                                  answers[question.id] === option.score
                                    ? "border-violet-500 bg-violet-500/10"
                                    : "border-border bg-background hover:border-violet-500/50"
                                }`}
                              >
                                <div className="flex items-start gap-3">
                                  <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm ${
                                      answers[question.id] === option.score
                                        ? "bg-violet-500 text-white"
                                        : "bg-muted text-muted-foreground"
                                    }`}
                                  >
                                    {option.label}
                                  </div>
                                  <span className="text-foreground pt-1">
                                    {option.text}
                                  </span>
                                </div>
                              </motion.button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Navigation */}
                    <div className="flex gap-4 mt-8">
                      {currentStep > 0 && (
                        <Button type="button" variant="outline" size="lg" onClick={handleBack}>
                          <ArrowLeft className="w-5 h-5" />
                          Back
                        </Button>
                      )}
                      <Button
                        type="button"
                        variant="gold"
                        size="lg"
                        className="flex-1 shadow-gold"
                        onClick={handleNext}
                        disabled={!isSectionComplete()}
                      >
                        {isLastSection ? "Continue to Results" : "Next Section"}
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIReadinessAssessmentPage;
