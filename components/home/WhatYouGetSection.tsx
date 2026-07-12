"use client";
import { motion } from "framer-motion";
import {
  Brain, Shield, Database, Server, FileText, BarChart3,
  ClipboardList, AlertCircle, Package, Headphones, LayoutDashboard, Search,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const deliverables = [
  { icon: Brain,          label: "AI Use Inventory",                   desc: "Every AI tool in your environment — sanctioned, unsanctioned, and vendor-embedded." },
  { icon: ClipboardList,  label: "Approved / Prohibited AI Register",  desc: "A living register of permitted and prohibited tools with documented rationale." },
  { icon: FileText,       label: "Governance Policy Framework",        desc: "Policies aligned to your regulatory obligations — maintained as the environment changes." },
  { icon: Shield,         label: "Cybersecurity Control Map",          desc: "Controls mapped to SEC, FINRA, HIPAA, or NIST — with status and evidence." },
  { icon: AlertCircle,    label: "Vendor Risk Register",               desc: "Third-party AI and technology vendors assessed, documented, and monitored." },
  { icon: Database,       label: "Data & Access Control Review",       desc: "Classification, retention, lineage, and access documented across governed systems." },
  { icon: Package,        label: "Evidence Inventory",                 desc: "Audit-ready evidence assembled continuously — not reconstructed before an exam." },
  { icon: Search,         label: "Open Remediation Tracker",          desc: "Every identified gap tracked to closure with status, owner, and timeline." },
  { icon: BarChart3,      label: "Monthly Governance Status Report",  desc: "Program status, control changes, and open issues delivered every month." },
  { icon: FileText,       label: "Quarterly Executive Control Report", desc: "Board- and executive-level reporting on your governance posture and trajectory." },
  { icon: Server,         label: "Exam / Client / Insurer Evidence Package", desc: "Packaged evidence ready for regulatory examinations, investor DDQs, and cyber insurers." },
  { icon: Headphones,     label: "Operational IT Support",            desc: "Included because unsupported infrastructure creates governance gaps." },
  { icon: LayoutDashboard, label: "Governance Dashboard",             desc: "Your governance system of record — risks, controls, evidence, and reports in one place." },
];

const WhatYouGetSection = () => (
  <section className="py-24 lg:py-32 bg-background">
    <div className="container mx-auto">
      <div className="max-w-2xl mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="gold-line" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            The Centience Governance Program
          </p>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">
          What You Get Inside the Program
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          The Centience Governance Program is not a scope of work. It is a set of tangible, ongoing deliverables — maintained continuously so your organization can demonstrate governance at any moment.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16">
        {deliverables.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="card-premium p-6 flex flex-col gap-3"
          >
            <div className="w-9 h-9 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
              <item.icon size={17} />
            </div>
            <h3 className="font-display font-bold text-primary text-sm leading-snug">{item.label}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="border border-border/60 rounded-2xl bg-muted/40 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
        <div className="max-w-xl">
          <p className="font-display font-bold text-primary text-lg mb-2">
            One program. One accountable firm. Everything above — continuously maintained.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            After a free 5-day assessment, regulated firms bring Centience on to run the program continuously — it does not end at a report.
          </p>
        </div>
        <Button variant="cta" size="lg" asChild className="shrink-0">
          <Link href="/resources/assessments">
            Get the Free 5-Day Assessment <ArrowRight size={15} />
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export default WhatYouGetSection;
