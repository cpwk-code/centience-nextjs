"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Shield, CheckCircle, AlertTriangle, AlertCircle, XCircle, ArrowRight, ArrowLeft } from "lucide-react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import SEO from "@/components/SEO";
import { supabase } from "@/integrations/supabase/client";
import { useHCaptchaSiteKey } from "@/hooks/useHCaptchaSiteKey";
import { questions, sections, type Question } from "@/data/riskAssessmentQuestions";


// Contact info schema
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  company: z.string().trim().min(1, "Company is required").max(100, "Company must be less than 100 characters"),
  title: z.string().trim().min(1, "Title is required").max(100, "Title must be less than 100 characters"),
  email: z.string().trim().email("Valid email is required").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Valid phone number is required").max(20, "Phone must be less than 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;


interface ScoreResult {
  totalScore: number;
  maxScore: number;
  sectionScores: { name: string; score: number; maxPoints: number }[];
  riskLevel: "strong" | "moderate" | "elevated" | "critical";
}

const FreeRiskAssessmentPage = () => {
  const [step, setStep] = useState<"contact" | "assessment" | "results">("contact");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [contactData, setContactData] = useState<ContactFormData | null>(null);
  const [scoreResult, setScoreResult] = useState<ScoreResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStartTime] = useState<number>(Date.now());
  const [honeypot, setHoneypot] = useState<string>("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);
  const { siteKey: hcaptchaSiteKey, error: captchaError } = useHCaptchaSiteKey();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onCaptchaVerify = (token: string) => {
    setCaptchaToken(token);
  };

  const onCaptchaExpire = () => {
    setCaptchaToken(null);
  };

  const onContactSubmit = (data: ContactFormData) => {
    setContactData(data);
    setStep("assessment");
  };

  const handleAnswer = (questionId: string, points: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: points }));
  };

  const calculateScore = (): ScoreResult => {
    const sectionScores = sections.map((section) => {
      const sectionQuestions = questions.filter((q) => q.section === section.name);
      const score = sectionQuestions.reduce((acc, q) => acc + (answers[q.id] || 0), 0);
      return { name: section.name, score, maxPoints: section.maxPoints };
    });

    const totalScore = sectionScores.reduce((acc, s) => acc + s.score, 0);
    const maxScore = 100;

    let riskLevel: ScoreResult["riskLevel"];
    if (totalScore >= 90) riskLevel = "strong";
    else if (totalScore >= 70) riskLevel = "moderate";
    else if (totalScore >= 50) riskLevel = "elevated";
    else riskLevel = "critical";

    return { totalScore, maxScore, sectionScores, riskLevel };
  };

  const handleFinalSubmit = async () => {
    if (!contactData) return;
    
    if (!captchaToken) {
      toast.error("Please complete the captcha verification");
      return;
    }
    
    setIsSubmitting(true);
    const result = calculateScore();

    try {
      // Submit to edge function with security measures
      const { data, error } = await supabase.functions.invoke("submit-risk-assessment", {
        body: {
          name: contactData.name,
          company: contactData.company,
          title: contactData.title,
          email: contactData.email,
          phone: contactData.phone,
          answers,
          sectionScores: result.sectionScores,
          totalScore: result.totalScore,
          maxScore: result.maxScore,
          riskLevel: result.riskLevel,
          // Security fields
          website: honeypot, // Honeypot field
          formStartTime,
          submissionTime: Date.now(),
          captchaToken, // hCaptcha token
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

      if (data?.error) {
        toast.error(data.error);
        captchaRef.current?.resetCaptcha();
        setCaptchaToken(null);
        setIsSubmitting(false);
        return;
      }

      setScoreResult(result);
      toast.success("Assessment submitted successfully! Our team will contact you soon.");
      setStep("results");
    } catch (err) {
      console.error("Unexpected error:", err);
      toast.error("An unexpected error occurred. Please try again.");
      captchaRef.current?.resetCaptcha();
      setCaptchaToken(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const canProceed = answers[currentQuestion?.id] !== undefined;

  const getRiskLevelInfo = (level: ScoreResult["riskLevel"]) => {
    switch (level) {
      case "strong":
        return {
          icon: CheckCircle,
          color: "text-green-500",
          bgColor: "bg-green-500/10",
          borderColor: "border-green-500/30",
          title: "Strong Security Posture",
          description: "Your organization has mature security controls in place. Focus on maintaining and optimizing your current practices.",
        };
      case "moderate":
        return {
          icon: AlertTriangle,
          color: "text-yellow-500",
          bgColor: "bg-yellow-500/10",
          borderColor: "border-yellow-500/30",
          title: "Moderate Security Posture",
          description: "You have a solid foundation but there are gaps that should be prioritized. Consider addressing the identified weaknesses.",
        };
      case "elevated":
        return {
          icon: AlertCircle,
          color: "text-orange-500",
          bgColor: "bg-orange-500/10",
          borderColor: "border-orange-500/30",
          title: "Elevated Risk",
          description: "There are foundational security controls that need immediate attention. We recommend scheduling a consultation to address these gaps.",
        };
      case "critical":
        return {
          icon: XCircle,
          color: "text-red-500",
          bgColor: "bg-red-500/10",
          borderColor: "border-red-500/30",
          title: "Critical Risk",
          description: "Immediate remediation is required. Your organization is at significant risk. Please contact us immediately for urgent assistance.",
        };
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Free IT Security Risk Assessment | Cybersecurity Score"
        description="Take our free 15-question IT security risk assessment. Get a personalized cybersecurity score and recommendations for your financial, legal, or healthcare organization."
        canonical="/free-risk-assessment"
        keywords={[
          'IT risk assessment',
          'cybersecurity assessment',
          'security risk score',
          'free IT assessment',
          'compliance assessment',
          'IT security audit',
        ]}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Free Risk Assessment', url: '/free-risk-assessment' },
        ]}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full border border-gold/20 mb-6">
              <Shield className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold">Free Security Assessment</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Discover Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold">
                Cybersecurity Risk Level
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Complete this assessment to receive a personalized security score and recommendations from our experts.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Assessment Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Contact Form Step */}
            {step === "contact" && (
              <AnimatedSection>
                <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
                  <h2 className="text-2xl font-bold mb-6">Your Contact Information</h2>
                  <p className="text-muted-foreground mb-8">
                    Please provide your details so we can send you a detailed report and recommendations.
                  </p>

                  <form onSubmit={handleSubmit(onContactSubmit)} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="John Smith"
                          {...register("name")}
                          className={errors.name ? "border-destructive" : ""}
                        />
                        {errors.name && (
                          <p className="text-sm text-destructive">{errors.name.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name *</Label>
                        <Input
                          id="company"
                          placeholder="Acme Corp"
                          {...register("company")}
                          className={errors.company ? "border-destructive" : ""}
                        />
                        {errors.company && (
                          <p className="text-sm text-destructive">{errors.company.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="title">Job Title *</Label>
                      <Input
                        id="title"
                        placeholder="IT Director"
                        {...register("title")}
                        className={errors.title ? "border-destructive" : ""}
                      />
                      {errors.title && (
                        <p className="text-sm text-destructive">{errors.title.message}</p>
                      )}
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          {...register("email")}
                          className={errors.email ? "border-destructive" : ""}
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive">{errors.email.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                          {...register("phone")}
                          className={errors.phone ? "border-destructive" : ""}
                        />
                        {errors.phone && (
                          <p className="text-sm text-destructive">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Honeypot field - hidden from users, visible to bots */}
                    <div 
                      className="absolute -left-[9999px] opacity-0 pointer-events-none" 
                      aria-hidden="true"
                      tabIndex={-1}
                    >
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

                    <Button type="submit" variant="gold" size="lg" className="w-full">
                      Start Assessment
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </div>
              </AnimatedSection>
            )}

            {/* Assessment Questions Step */}
            {step === "assessment" && (
              <AnimatedSection>
                <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
                  {/* Progress */}
                  <div className="mb-8">
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
                      <span>{currentQuestion.section}</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>

                  {/* Question */}
                  <motion.div
                    key={currentQuestion.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-semibold mb-6">{currentQuestion.question}</h3>

                    <RadioGroup
                      value={answers[currentQuestion.id]?.toString()}
                      onValueChange={(value) => handleAnswer(currentQuestion.id, parseInt(value))}
                      className="space-y-3"
                    >
                      {currentQuestion.options.map((option, index) => (
                        <div
                          key={index}
                          className={`flex items-center space-x-3 p-4 rounded-lg border transition-all cursor-pointer hover:border-gold/50 ${
                            answers[currentQuestion.id] === option.points
                              ? "border-gold bg-gold/5"
                              : "border-border"
                          }`}
                          onClick={() => handleAnswer(currentQuestion.id, option.points)}
                        >
                          <RadioGroupItem value={option.points.toString()} id={`${currentQuestion.id}-${index}`} />
                          <Label
                            htmlFor={`${currentQuestion.id}-${index}`}
                            className="flex-1 cursor-pointer font-normal"
                          >
                            {option.label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </motion.div>

                  {/* hCaptcha - shown only on last question */}
                  {isLastQuestion && (
                    <div className="mt-6 flex flex-col items-center">
                      <p className="text-sm text-muted-foreground mb-3">
                        Please verify you're human before submitting:
                      </p>
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
                        <p className="text-sm text-muted-foreground">
                          Loading verification…
                        </p>
                      )}
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="flex justify-between mt-8">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
                      disabled={currentQuestionIndex === 0}
                    >
                      <ArrowLeft className="mr-2 w-4 h-4" />
                      Previous
                    </Button>

                    {isLastQuestion ? (
                      <Button
                        variant="gold"
                        onClick={handleFinalSubmit}
                        disabled={!canProceed || isSubmitting || !captchaToken}
                      >
                        {isSubmitting ? "Calculating..." : "Get My Score"}
                      </Button>
                    ) : (
                      <Button
                        variant="gold"
                        onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                        disabled={!canProceed}
                      >
                        Next
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            )}

            {/* Results Step */}
            {step === "results" && scoreResult && (
              <AnimatedSection>
                <div className="space-y-8">
                  {/* Overall Score */}
                  <div className="bg-card border border-border rounded-2xl p-8 shadow-xl text-center">
                    <h2 className="text-2xl font-bold mb-4">Your Security Score</h2>

                    <div className="relative inline-flex items-center justify-center w-48 h-48 mb-6">
                      <svg className="w-48 h-48 transform -rotate-90">
                        <circle
                          cx="96"
                          cy="96"
                          r="88"
                          stroke="currentColor"
                          strokeWidth="12"
                          fill="none"
                          className="text-muted/20"
                        />
                        <circle
                          cx="96"
                          cy="96"
                          r="88"
                          stroke="currentColor"
                          strokeWidth="12"
                          fill="none"
                          strokeDasharray={553}
                          strokeDashoffset={553 - (553 * scoreResult.totalScore) / 100}
                          className={
                            scoreResult.riskLevel === "strong"
                              ? "text-green-500"
                              : scoreResult.riskLevel === "moderate"
                              ? "text-yellow-500"
                              : scoreResult.riskLevel === "elevated"
                              ? "text-orange-500"
                              : "text-red-500"
                          }
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-5xl font-bold">{scoreResult.totalScore}</span>
                        <span className="text-muted-foreground">out of 100</span>
                      </div>
                    </div>

                    {(() => {
                      const info = getRiskLevelInfo(scoreResult.riskLevel);
                      const Icon = info.icon;
                      return (
                        <div className={`p-6 rounded-xl ${info.bgColor} border ${info.borderColor}`}>
                          <div className="flex items-center justify-center gap-2 mb-2">
                            <Icon className={`w-6 h-6 ${info.color}`} />
                            <h3 className={`text-xl font-semibold ${info.color}`}>{info.title}</h3>
                          </div>
                          <p className="text-muted-foreground">{info.description}</p>
                        </div>
                      );
                    })()}
                  </div>

                  {/* Section Breakdown */}
                  <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
                    <h3 className="text-xl font-semibold mb-6">Score Breakdown by Section</h3>
                    <div className="space-y-4">
                      {scoreResult.sectionScores.map((section) => {
                        const percentage = (section.score / section.maxPoints) * 100;
                        return (
                          <div key={section.name}>
                            <div className="flex justify-between text-sm mb-2">
                              <span className="font-medium">{section.name}</span>
                              <span className="text-muted-foreground">
                                {section.score} / {section.maxPoints} pts
                              </span>
                            </div>
                            <div className="h-3 bg-muted/20 rounded-full overflow-hidden">
                              <motion.div
                                className={`h-full rounded-full ${
                                  percentage >= 80
                                    ? "bg-green-500"
                                    : percentage >= 60
                                    ? "bg-yellow-500"
                                    : percentage >= 40
                                    ? "bg-orange-500"
                                    : "bg-red-500"
                                }`}
                                initial={{ width: 0 }}
                                animate={{ width: `${percentage}%` }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="bg-gradient-to-r from-gold/10 to-gold-light/10 border border-gold/20 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Ready to Improve Your Security?</h3>
                    <p className="text-muted-foreground mb-6">
                      Our experts will review your assessment and provide personalized recommendations.
                      {contactData && ` We'll contact you at ${contactData.email} within 24 hours.`}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button variant="gold" size="lg" asChild>
                        <a href="/contact">Schedule a Consultation</a>
                      </Button>
                      <Button variant="outline" size="lg" asChild>
                        <a href="tel:8779457177">Call Us</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FreeRiskAssessmentPage;
