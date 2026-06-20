"use client";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Database, FileText, Lock, Eye, Archive, MessageSquare, Shield, Brain } from "lucide-react";

const capabilities = [
  {
    icon: Eye,
    title: "Data Classification & Inventory",
    description: "Identify and classify every data type across your environment — PHI, PII, financial records, privileged communications, and AI-generated content. You cannot govern data you cannot see, and regulators expect you to know exactly what you hold.",
  },
  {
    icon: Archive,
    title: "Records Retention Management",
    description: "Implement and enforce retention schedules aligned to FINRA Rule 17a-4 (6-year minimum), HIPAA's 6-year retention requirement, SEC books-and-records rules, and state-specific obligations. Automated destruction after retention periods expire.",
  },
  {
    icon: Database,
    title: "Data Lineage & AI Audit Trails",
    description: "Track what data flows into AI tools and what comes out — building the audit trail regulators are beginning to require. When an examiner asks what your AI model consumed, you have an answer ready.",
  },
  {
    icon: Lock,
    title: "Access Control Governance",
    description: "Define and enforce role-based access controls with continuous monitoring and audit logs. Every access event is documented. Every privilege escalation is reviewed. Your access posture is defensible before an examiner pulls the log.",
  },
  {
    icon: MessageSquare,
    title: "Off-Channel Communications Capture",
    description: "Capture and retain business communications across text, WhatsApp, personal email, and collaboration tools. FINRA and SEC have levied over $2.3 billion in fines since 2021 for off-channel communication failures — this is no longer optional.",
  },
  {
    icon: FileText,
    title: "Data Privacy & Consent Management",
    description: "Operationalize CCPA, state privacy law, and HIPAA minimum-necessary requirements. Maintain documented consent records, honor data subject requests, and demonstrate privacy-by-design practices to regulators and clients.",
  },
];

const frameworks = [
  "FINRA Rule 17a-4 — Electronic records retention",
  "SEC Books and Records Rules (15c3-3, 17a-3/4)",
  "HIPAA Privacy & Security Rules — PHI data governance",
  "NIST Privacy Framework",
  "NIST AI RMF — AI data governance requirements",
  "CCPA / State Privacy Law compliance",
  "ISO/IEC 27001 — Information security data controls",
  "NY DFS Part 500 — Data retention and access requirements",
];

const advantages = [
  "Know exactly what data you hold, where it lives, and who can access it — before a regulator asks",
  "Maintain retention schedules automatically — no scramble before an exam or litigation hold",
  "Build the AI audit trail that SEC, FINRA, and HIPAA examiners are beginning to require",
  "Demonstrate data lineage for every AI tool your organization uses",
  "Capture off-channel communications across all platforms, not just email",
  "Reduce breach impact — governed data classification limits exposure when incidents occur",
];

const regulatoryStats = [
  { stat: "$2.3B+", label: "FINRA and SEC fines for off-channel communications failures since 2021" },
  { stat: "6 years", label: "Minimum FINRA 17a-4 retention requirement for broker-dealer records" },
  { stat: "2025", label: "SEC began requiring AI data governance disclosures in examination letters" },
  { stat: "$1.9M", label: "Average HIPAA settlement cost when PHI data governance failures are found" },
];

const DataGovernancePage = () => (
  <Layout>
    {/* Hero */}
    <section className="section-navy relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--warm-white)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--warm-white)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "var(--gradient-gold)" }} />

      <div className="container mx-auto relative z-10 pt-24 pb-16 lg:pt-40 lg:pb-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Data Governance — Classification, Retention & Lineage
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-display font-extrabold leading-[1.1] mb-6">
            Data Governance for{" "}
            <span className="text-gradient-gold">Regulated Organizations.</span>
          </h1>

          <p className="text-lg leading-relaxed mb-4 opacity-70">
            Regulators don't just examine your technology — they examine your data. What you hold, where it lives, how long you keep it, who can access it, and what your AI tools do with it. Data governance is the control layer that makes every other governance program defensible.
          </p>
          <p className="text-sm leading-relaxed mb-10 opacity-50 font-semibold uppercase tracking-wider">
            Classification. Retention. Lineage. Access. Continuously maintained.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-6">
            <Button variant="cta" size="xl" asChild className="w-full sm:w-auto">
              <Link href="/resources/assessments">
                Start Free Assessment <ArrowRight size={16} />
              </Link>
            </Button>
            <Button variant="cta-outline" size="xl" asChild className="w-full sm:w-auto">
              <Link href="/contact">Talk to a Data Governance Specialist</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Regulatory Stakes */}
    <section className="py-16 bg-background border-b border-border">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">The Regulatory Reality</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4 leading-tight">
            Data Governance Failures Have a Price Tag
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            SEC, FINRA, and HIPAA enforcement around data governance — records retention, access controls, off-channel communications, and AI data practices — is accelerating. The firms being examined are not outliers.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {regulatoryStats.map((item) => (
            <div key={item.stat} className="card-premium p-6">
              <p className="text-2xl font-display font-bold text-gold mb-2">{item.stat}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Capabilities */}
    <section className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Capabilities</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">
            What Data Governance Covers
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Data governance is not a one-time audit. It is a continuous operational function — classification maintained as new data enters, retention enforced automatically, access reviewed on an ongoing basis, and AI data trails built in real time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-premium p-8"
            >
              <div className="w-11 h-11 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-5">
                <cap.icon size={20} />
              </div>
              <h3 className="font-display font-bold text-primary text-[15px] mb-3 leading-snug">{cap.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* The Data-AI Connection */}
    <section className="section-navy py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--warm-white)) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-line" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Data + AI</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-5 leading-tight">
              Data Governance Is the Foundation of AI Governance.
            </h2>
            <p className="opacity-70 leading-relaxed mb-4">
              Every AI tool your organization uses consumes data. That data may include PHI, client financial records, privileged communications, or confidential business information. Without data governance, you cannot answer the questions regulators are now asking about AI.
            </p>
            <p className="opacity-70 leading-relaxed mb-8">
              Centience builds the data governance layer first — classification, retention, lineage, and access controls — so that when AI governance overlays it, the foundation is already there. The result is an AI program that can demonstrate, document, and defend every data decision it makes.
            </p>
            <Button variant="cta-outline" size="lg" asChild>
              <Link href="/ai-governance">
                See AI Governance <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
          <div className="space-y-4">
            {advantages.map((adv, i) => (
              <div key={i} className="flex items-start gap-4 rounded-xl border border-border/10 bg-primary/20 p-5">
                <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-gold text-xs font-bold">{i + 1}</span>
                </div>
                <p className="text-sm opacity-70 leading-relaxed">{adv}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Frameworks */}
    <section className="py-24 bg-background">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Regulatory Alignment</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4 leading-tight">
            Frameworks We Align To
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Data governance programs at Centience are built around the frameworks and regulations your examiners will reference.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl">
          {frameworks.map((fw) => (
            <div key={fw} className="card-premium p-4 flex items-start gap-3">
              <Shield size={14} className="text-accent mt-0.5 shrink-0" />
              <p className="text-sm text-muted-foreground leading-relaxed">{fw}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Related Industries */}
    <section className="py-16 bg-muted/50 border-t border-border">
      <div className="container mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-xl font-display font-bold text-primary mb-2">Industries We Serve</h2>
          <p className="text-sm text-muted-foreground mb-8">Centience delivers data governance programs for regulated organizations with the most demanding data obligations.</p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <a href="/industries/financial-services" className="card-premium p-5 block hover:border-accent/50 transition-colors group">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight size={14} className="text-accent group-hover:translate-x-1 transition-transform" />
                <span className="font-semibold text-primary text-sm">Financial Services</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">FINRA 17a-4, SEC books and records, off-channel communications, and AI data trail requirements.</p>
            </a>
            <a href="/industries/healthcare" className="card-premium p-5 block hover:border-accent/50 transition-colors group">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight size={14} className="text-accent group-hover:translate-x-1 transition-transform" />
                <span className="font-semibold text-primary text-sm">Healthcare</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">PHI classification, HIPAA minimum necessary, breach notification readiness, and AI clinical data governance.</p>
            </a>
            <a href="/industries/law-firms" className="card-premium p-5 block hover:border-accent/50 transition-colors group">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight size={14} className="text-accent group-hover:translate-x-1 transition-transform" />
                <span className="font-semibold text-primary text-sm">Law Firms</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">Privilege protection, matter data classification, e-discovery readiness, and AI research tool governance.</p>
            </a>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Related Programs:</span>
            <a href="/ai-governance" className="text-accent hover:text-accent/80 transition-colors text-sm font-medium flex items-center gap-1">
              <ArrowRight size={12} /> AI Governance
            </a>
            <a href="/cybersecurity" className="text-accent hover:text-accent/80 transition-colors text-sm font-medium flex items-center gap-1">
              <ArrowRight size={12} /> Cybersecurity Governance
            </a>
            <a href="/infrastructure" className="text-accent hover:text-accent/80 transition-colors text-sm font-medium flex items-center gap-1">
              <ArrowRight size={12} /> Infrastructure Governance
            </a>
            <a href="/governance" className="text-accent hover:text-accent/80 transition-colors text-sm font-medium flex items-center gap-1">
              <ArrowRight size={12} /> Technology Governance Programs
            </a>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default DataGovernancePage;
