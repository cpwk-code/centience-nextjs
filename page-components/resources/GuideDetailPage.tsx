"use client";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import type { GuideData } from "@/data/guideContent";
import { GUIDES_LIST } from "@/data/guideContent";
import LeadCaptureModal, { hasLeadCookie, trackGuideDownload } from "@/components/LeadCaptureModal";

const GuideDetailPage = ({ guide }: { guide: GuideData }) => {
  const bodyKeys = guide.bodies ? Object.keys(guide.bodies) : [];
  const [activeBody, setActiveBody] = useState(bodyKeys[0] ?? "");
  const [gateOpen, setGateOpen] = useState(false);

  const current = guide.bodies?.[activeBody];
  const sections = current?.sections ?? guide.sections ?? [];
  const downloadFile = current?.file ?? guide.file;

  const handleDownload = () => {
    if (hasLeadCookie()) {
      trackGuideDownload(guide.title, guide.slug ?? null, downloadFile);
    } else {
      setGateOpen(true);
    }
  };

  const otherGuides = GUIDES_LIST.filter((g) => g.slug !== guide.slug);

  return (
    <Layout>
      <LeadCaptureModal
        open={gateOpen}
        onClose={() => setGateOpen(false)}
        type="guide"
        title={`${guide.title} — Download Now`}
        guideHref={downloadFile}
        guideSlug={guide.slug}
      />

      {/* Hero */}
      <section className="section-navy pt-32 pb-16 lg:pt-40 lg:pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "var(--gradient-gold)" }} />
        <div className="container mx-auto max-w-4xl relative z-10">
          <Link
            href="/resources/guides"
            className="inline-flex items-center gap-2 text-sm text-warm-white/60 hover:text-gold transition-colors mb-8"
          >
            <ArrowLeft size={15} /> All Governance Guides
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">{guide.label}</p>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-[2.9rem] font-display font-extrabold leading-[1.12] mb-6">
            {guide.title}
          </h1>
          <p className="text-lg opacity-70 leading-relaxed max-w-2xl mb-8">{guide.subtitle}</p>
          <Button variant="cta" size="lg" onClick={handleDownload}>
            Download the Full Guide (PDF) <Download size={15} className="ml-1" />
          </Button>
        </div>
      </section>

      {/* Body selector */}
      {bodyKeys.length > 0 && (
        <section className="bg-muted border-b border-border sticky top-14 z-30">
          <div className="container mx-auto max-w-4xl">
            {guide.tagline && (
              <p className="text-sm text-muted-foreground pt-6">{guide.tagline}</p>
            )}
            <div className="flex flex-wrap gap-2 py-5">
              {bodyKeys.map((key) => {
                const b = guide.bodies![key];
                const active = key === activeBody;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveBody(key)}
                    aria-pressed={active}
                    className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                      active
                        ? "bg-primary text-warm-white"
                        : "bg-background text-muted-foreground hover:text-primary border border-border"
                    }`}
                    title={b.fullName}
                  >
                    {b.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto max-w-4xl">
          {current && (
            <motion.p
              key={`intro-${activeBody}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="text-lg text-primary leading-relaxed border-l-4 border-gold pl-6 mb-14"
            >
              {current.intro}
            </motion.p>
          )}

          <div className="space-y-10">
            {sections.map((section, i) => (
              <motion.div
                key={`${activeBody}-${section.heading}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.2) }}
              >
                <h2 className="text-xl md:text-2xl font-display font-bold text-primary mb-4 leading-snug">
                  {section.heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{section.body}</p>
              </motion.div>
            ))}
          </div>

          {/* Download CTA */}
          <div className="mt-16 card-premium p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <p className="font-display font-bold text-primary text-lg mb-2">
                Get this guide as a formatted PDF.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Download the complete {current?.label ?? ""} edition to keep on file and share with your compliance, security, and leadership teams.
              </p>
            </div>
            <Button variant="cta" size="lg" onClick={handleDownload} className="shrink-0">
              Download Guide <Download size={15} className="ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Program CTA */}
      <section className="section-navy py-20">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="flex items-center gap-3 justify-center mb-6">
            <div className="gold-line" />
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">The Centience Governance Program</p>
            <div className="gold-line" />
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-5 leading-tight">
            A guide tells you what&rsquo;s required. The program makes it real — and keeps it that way.
          </h2>
          <p className="text-lg opacity-60 leading-relaxed mb-8 max-w-xl mx-auto">
            Centience builds and operates the governance program behind these requirements — continuously, with audit-ready evidence. Start with a Governance Readiness Review.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link href="/readiness">
              Request a Governance Readiness Review <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </section>

      {/* Other guides */}
      <section className="py-16 bg-muted border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-6">More Governance Guides</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {otherGuides.map((g) => (
              <Link
                key={g.slug}
                href={`/resources/guides/${g.slug}`}
                className="card-premium p-5 flex items-center justify-between group hover:border-gold/30 transition-colors"
              >
                <span className="font-semibold text-sm text-primary pr-4">{g.title}</span>
                <ArrowRight size={15} className="text-muted-foreground group-hover:text-gold transition-colors shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GuideDetailPage;
