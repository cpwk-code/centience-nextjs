"use client";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { motion } from "framer-motion";
import { ArrowRight, Download, ClipboardCheck, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import LeadCaptureModal, { hasLeadCookie } from "@/components/LeadCaptureModal";

const guides = [
  {
    id: "ai-governance-guide",
    tag: "AI GOVERNANCE",
    title: "AI Governance Guide for Regulated Organizations",
    description: "A practical framework for governing AI tools under SEC, FINRA, and HIPAA requirements — including inventory, policy, controls, and monitoring.",
    file: "/guides/centience-ai-governance-guide.pdf",
  },
  {
    id: "cybersecurity-guide",
    tag: "CYBERSECURITY",
    title: "Cybersecurity Governance Guide for Regulated Organizations",
    description: "Technical controls, regulatory frameworks, and continuous monitoring requirements for cybersecurity governance in financial services, healthcare, and legal.",
    file: "/guides/centience-cybersecurity-governance-guide.pdf",
  },
  {
    id: "infrastructure-guide",
    tag: "INFRASTRUCTURE",
    title: "Infrastructure Governance Guide for Regulated Organizations",
    description: "How managed infrastructure is the foundation of every enforceable governance program — endpoints, networks, cloud, identity, and backup governance.",
    file: "/guides/centience-infrastructure-governance-guide.pdf",
  },
  {
    id: "governance-program-guide",
    tag: "GOVERNANCE PROGRAM",
    title: "Technology Governance Program Guide",
    description: "A complete overview of the Centience governance model — Assessment, Roadmap, and ongoing Program — built on managed infrastructure.",
    file: "/guides/centience-governance-program-guide.pdf",
  },
  {
    id: "compliance-readiness-guide",
    tag: "COMPLIANCE READINESS",
    title: "Compliance Readiness Guide for SEC, FINRA, and HIPAA Examinations",
    description: "What regulators are actually looking for in technology governance examinations — and how to be ready before the notice arrives.",
    file: "/guides/centience-compliance-readiness-guide.pdf",
  },
];

const assessments = [
  { title: "Financial Services Governance Assessment", href: "/assessments/financial-services" },
  { title: "Healthcare Governance Assessment", href: "/assessments/healthcare" },
  { title: "Law Firm Governance Assessment", href: "/assessments/law-firms" },
  { title: "Private Equity Governance Assessment", href: "/assessments/private-equity" },
  { title: "Accounting & CPA Governance Assessment", href: "/assessments/accounting-cpa" },
  { title: "Non-Profit Governance Assessment", href: "/assessments/non-profit" },
];

const InsightsPage = () => {
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [gateOpen, setGateOpen] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState<typeof guides[0] | null>(null);

  const handleGuideClick = (guide: typeof guides[0]) => {
    if (hasLeadCookie()) {
      window.open(guide.file, "_blank", "noopener,noreferrer");
    } else {
      setSelectedGuide(guide);
      setGateOpen(true);
    }
  };

  return (
    <Layout>
      {/* Lead Capture Modal */}
      <LeadCaptureModal
        open={gateOpen}
        onClose={() => setGateOpen(false)}
        type="guide"
        title={selectedGuide ? `${selectedGuide.title} — Download Now` : ""}
        guideHref={selectedGuide?.file}
      />

      {/* Hero */}
      <section className="section-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="flex items-center gap-3 justify-center mb-6">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Resources</p>
            <div className="gold-line" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-6">
            Governance Insights for Regulated Organizations
          </h1>
          <p className="text-lg opacity-70 leading-relaxed">
            Practical guides, checklists, and assessments for technology and AI governance in regulated industries. Written by practitioners — not policy advisors.
          </p>
        </div>
      </section>

      {/* Downloadable Guides */}
      <section id="guides" className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-line" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Guides</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">
              Downloadable Governance Guides
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Each guide is written for CCOs, CISOs, and GCs navigating technology governance obligations in regulated environments. No fluff. Practical content built on 20 years of technical operations inside regulated organizations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, i) => (
              <motion.div
                key={guide.title}
                id={guide.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-premium p-7 flex flex-col"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-3">
                  {guide.tag}
                </span>
                <h3 className="font-display font-bold text-primary text-base mb-3">{guide.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{guide.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-fit"
                  onClick={() => handleGuideClick(guide)}
                >
                  <Download size={14} className="mr-2" /> Download Guide
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Assessments */}
      <section id="assessments" className="py-24 lg:py-32 bg-muted">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-line" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Assessments</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">
              Governance Assessments by Industry
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Quick self-assessment tools identifying governance gaps specific to your regulatory environment. Each assessment takes under 5 minutes and delivers an immediate readiness score.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assessments.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-premium p-7 flex flex-col"
              >
                <ClipboardCheck size={24} className="text-accent mb-4" />
                <h3 className="font-display font-bold text-primary text-base mb-3">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  Takes under 5 minutes. Immediate results.
                </p>
                <Button variant="outline" size="sm" asChild className="w-fit">
                  <Link href={a.href}>
                    Start Assessment <ArrowRight size={14} className="ml-2" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto max-w-lg text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">
            Stay Current on Technology Governance Requirements
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Regulatory requirements evolve continuously. Subscribe for quarterly updates on SEC, FINRA, HIPAA, and AI governance developments affecting regulated organizations.
          </p>
          {newsletterSubmitted ? (
            <div className="py-8">
              <Mail size={40} className="text-accent mx-auto mb-4" />
              <h3 className="font-display font-semibold text-primary text-lg mb-2">You're subscribed!</h3>
              <p className="text-sm text-muted-foreground">We'll send quarterly governance updates. Never more.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setNewsletterSubmitted(true); }}
              className="space-y-4 text-left"
            >
              <div>
                <Label htmlFor="nl-name">Name</Label>
                <Input id="nl-name" required placeholder="Full name" />
              </div>
              <div>
                <Label htmlFor="nl-email">Email</Label>
                <Input id="nl-email" type="email" required placeholder="Work email" />
              </div>
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
              <Button variant="cta" size="lg" type="submit" className="w-full">
                Send Me Governance Updates
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

export default InsightsPage;
