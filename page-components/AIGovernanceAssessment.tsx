'use client'

import { useState } from "react";
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
import { Search, BookOpen, Cog, FileText, ArrowRight, CheckCircle } from "lucide-react";
import HCaptcha from "@/components/HCaptcha";

const deliverables = [
  "AI usage discovery",
  "Governance gap analysis",
  "Infrastructure security evaluation",
  "Vendor AI risk review",
  "Regulatory exposure analysis",
  "Governance roadmap",
  "Executive summary for board and leadership reporting",
  "Regulatory readiness score by framework (SEC, FINRA, HIPAA)",
];

const processSteps = [
  { icon: Search, title: "Discovery Call", description: "30-minute call. We learn your regulatory environment, current AI usage, and key compliance obligations." },
  { icon: FileText, title: "Technology Review", description: "We audit current infrastructure, AI tools, vendor platforms, and security controls — remotely, no disruption to operations." },
  { icon: BookOpen, title: "Governance Analysis", description: "We map gaps between your current controls and specific regulatory requirements applicable to your organization." },
  { icon: Cog, title: "Executive Report", description: "Prioritized governance roadmap delivered within 5 business days. Board-ready format." },
];

const AIGovernanceAssessment = () => {
  const [submitted, setSubmitted] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) return;
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-6">
            SEC, FINRA, and HIPAA regulators are scrutinizing AI governance. Find your gaps before they do.
          </h1>
          <p className="text-lg opacity-80 leading-relaxed mb-8">
            Most firms deploying AI tools have no governance controls capable of satisfying regulators. Our assessment finds the gaps — and delivers a roadmap to fix them — in 5 business days.
          </p>
          <Button variant="cta" size="xl" asChild>
            <a href="#booking">Book Your Assessment <ArrowRight size={18} /></a>
          </Button>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-display font-bold text-primary mb-6">Why AI Usage Becomes Regulatory Exposure</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Organizations across regulated industries are deploying AI tools faster than governance frameworks can keep up.
            Our assessment identifies how AI technologies, vendor platforms, and infrastructure systems are being used across
            your organization and highlights potential compliance and security risks.
          </p>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-surface py-20 lg:py-28">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-display font-bold text-primary mb-4 text-center">What You'll Receive</h2>
          <p className="text-muted-foreground text-center mb-10">
            Every assessment delivers a complete governance gap analysis with a prioritized action roadmap.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {deliverables.map((d) => (
              <div key={d} className="flex items-center gap-3 bg-background border border-border rounded-lg p-4">
                <CheckCircle size={18} className="text-accent shrink-0" />
                <span className="text-sm font-medium text-foreground">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-display font-bold text-primary mb-10 text-center">Four-Step Process</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={step.title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
                  <step.icon size={20} />
                </div>
                <span className="text-xs font-bold text-accent">Step {i + 1}</span>
                <h3 className="font-display font-semibold text-primary mt-1 mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="section-surface py-16">
        <div className="container mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-6">Trusted by regulated industries</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-foreground">
            {["Financial Services", "Healthcare", "Law Firms", "Private Equity", "Accounting & CPA Firms", "Non-Profit"].map((industry) => (
              <span key={industry} className="px-4 py-2 rounded-lg border border-border bg-background">{industry}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-20 lg:py-28">
        <div className="container mx-auto max-w-lg">
          <h2 className="text-3xl font-display font-bold text-primary mb-4 text-center">
            Book Your Governance Assessment
          </h2>
          <p className="text-sm text-muted-foreground text-center mb-4">
            No commitment required. Assessment results delivered within 5 business days.
          </p>
          <p className="text-sm text-center mb-8">
            Prefer to speak with us first? Call{" "}
            <a href="tel:+18779457177" className="text-accent font-semibold hover:text-accent/80 transition-colors">
              (877) 945-7177
            </a>
          </p>
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle size={48} className="text-accent mx-auto mb-4" />
              <h3 className="font-display font-semibold text-primary text-xl mb-2">Thank you</h3>
              <p className="text-muted-foreground">We'll be in touch within one business day to schedule your assessment.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" required placeholder="Full name" />
                </div>
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" required placeholder="Job title" />
                </div>
              </div>
              <div>
                <Label htmlFor="company">Company</Label>
                <Input id="company" required placeholder="Company name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required placeholder="Work email" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label>Industry</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="financial">Financial Services</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="legal">Law Firms</SelectItem>
                      <SelectItem value="pe">Private Equity</SelectItem>
                      <SelectItem value="accounting">Accounting & CPA</SelectItem>
                      <SelectItem value="nonprofit">Non-Profit</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Company Size</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="50-200">50–200</SelectItem>
                      <SelectItem value="200-500">200–500</SelectItem>
                      <SelectItem value="500-1000">500–1,000</SelectItem>
                      <SelectItem value="1000+">1,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label>Primary Regulatory Framework</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select framework" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sec-finra">SEC/FINRA</SelectItem>
                    <SelectItem value="hipaa">HIPAA</SelectItem>
                    <SelectItem value="both">Both</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
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

              <Button variant="cta" size="lg" type="submit" className="w-full mt-4" disabled={!captchaToken}>
                Book My Governance Assessment <ArrowRight size={18} />
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-3">
                By submitting this form, you agree to our Privacy Policy. We never sell or share your information.
              </p>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default AIGovernanceAssessment;
