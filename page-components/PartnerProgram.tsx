"use client";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { motion } from "framer-motion";
import {
  ArrowRight, Shield, Users, Building2, Cpu, Handshake,
  KeyRound, MessageSquare, Database, Laptop, Network, Bot, Siren, FileText,
} from "lucide-react";

/**
 * Partner page.
 *
 * Two editorial rules govern this page, both deliberate.
 *
 * 1. No referral rates, commission tiers or revenue-share language. Several
 *    partners are fiduciaries — one sits as CCO of record on client filings —
 *    and a published commission schedule turns a manageable disclosure into a
 *    public one. Commercial terms live in the partner agreement. The value
 *    proposition on this page is the platform and the boundary, not the money.
 *
 * 2. AI governance is one domain among several, not the headline. The platform
 *    covers identity, communications supervision, retention, device posture,
 *    third parties, incidents and policy generation. Leading with AI
 *    undersells the breadth and dates the page.
 *
 * 3. No partner is named on this page without its written consent. A named
 *    section was built and then removed for exactly that reason. These are
 *    regulated advisers whose own clients read this page, and describing what
 *    a firm owns is a statement about its scope that the firm itself should
 *    approve. Get the sign-off first, then add the section back.
 */

const problems = [
  {
    title: "The Same Questionnaire, Answered From Scratch",
    body: "Your client's investors hire an assessor. You assemble the evidence, answer the findings, write the management responses. Then the next client's investors hire the same assessor and it starts again — because nothing you produced the first time was ever a record.",
  },
  {
    title: "Findings That Close, Then Come Back",
    body: "A control gets fixed. Nobody re-tests it. Twelve months later it is on the report again, and there is no record of when it drifted or who changed it.",
  },
  {
    title: "“It's Been Remediated” With Nothing Behind It",
    body: "The gap between somebody saying a control is fixed and a re-test proving it is the gap between an assertion and evidence. Examiners and assessors know which one they are reading.",
  },
];

const domains = [
  { icon: KeyRound, title: "Identity and Access", body: "Multi-factor enforcement, conditional access, privileged accounts, and joiner-mover-leaver. Tested continuously, not attested once a year." },
  { icon: MessageSquare, title: "Communications Supervision", body: "Capture across email, Teams, chat and mobile. Retention by rule and category. Review workflow with attestation, and retrieval on demand." },
  { icon: Database, title: "Records and Retention", body: "Retention configuration tested against the obligation it exists to satisfy — rather than configured once and assumed to be holding." },
  { icon: Laptop, title: "Device and Infrastructure", body: "Encryption, patch state, MDM enrolment and backup verification, including whether a restore has actually been performed." },
  { icon: Network, title: "Third Parties and Vendors", body: "A live vendor register, sub-processor tracking, and counterparty SOC 2 reports read, diarised and flagged before they lapse." },
  { icon: Bot, title: "AI Adoption", body: "Which AI tools are in use, on whose accounts, and whether the interactions are retained. Reconciled against what the firm is actually paying for." },
  { icon: Siren, title: "Incident Response", body: "A worked incident process including the Regulation S-P notification clock, so a response is timed and documented rather than improvised." },
  { icon: FileText, title: "Policy and WSP Drafting", body: "Documents drafted from what the environment actually shows, so the policy and the configuration agree. Yours to review, amend and sign." },
];

const partnerTypes = [
  { icon: Cpu, title: "Compliance Consultants and CCOs of Record", description: "Your clients carry obligations that depend on technical controls you do not operate. Centience runs those controls and produces the evidence your programme relies on. You remain the compliance authority — we work to you." },
  { icon: Building2, title: "Cybersecurity and GRC Advisory Firms", description: "You deliver assessments and frameworks. We deliver the operations that make them enforceable, and the record that shows they held between assessments. Co-delivery — you stay in the engagement." },
  { icon: Shield, title: "vCISOs and Fractional CISOs", description: "You set the security programme. We implement and operate it, across the full control set rather than a single domain. Your client gets execution without you hiring a team to provide it." },
  { icon: Users, title: "MSPs and Technology Partners", description: "You manage the technology day to day. We govern it — testing, evidencing and reporting — in a co-managed model that leaves your service delivery in place and gives your regulated clients something you are not set up to produce." },
  { icon: Handshake, title: "Fractional CTOs and Technology Executives", description: "You set technology direction. We make sure the decisions behind it are documented, controlled and defensible when somebody asks — an investor, an examiner or an acquirer." },
];

const partnerBenefits = [
  {
    title: "A Seat on Every Account You Introduce",
    body: "Free and uncapped. See posture across your whole client book in one view, and answer a client's question without calling us first. Your access is never metered and never a line item — your visibility into your own clients is not something we intend to charge you for.",
  },
  {
    title: "Your Clients' Evidence, Retrievable",
    body: "Control results are timestamped as they are produced. The next due diligence questionnaire becomes a retrieval exercise instead of a project — for you as much as for your client.",
  },
  {
    title: "Delivery Capacity You Don't Have to Hire",
    body: "You design the programme. We operate it. No staff to recruit, no infrastructure to run, and no operational liability landing on your practice.",
  },
  {
    title: "Findings That Close and Stay Closed",
    body: "When a fix is claimed, the finding moves to awaiting verification — not to green. It turns green when a re-test says so, and it is watched afterwards for drift.",
  },
  {
    title: "Independence Kept Where It Belongs",
    body: "We verify and evidence the controls we operate. Where genuine independence is required, an independent assessor consumes our evidence rather than competing with it. We will not tell your client we are both the builder and the auditor.",
  },
  {
    title: "A Boundary Set in Writing",
    body: "Scope, our named role and the protection of your client relationship are defined in the partner agreement before the client engagement begins — not negotiated after it is underway.",
  },
];

const steps = [
  { num: "01", title: "Introduction", description: "You introduce Centience to a client with a governance gap. We run a scoped review of the current control posture. You stay in the room throughout." },
  { num: "02", title: "Findings", description: "The review produces a gap list — each item with a named owner and the obligation or policy clause behind it. You see it before the client does." },
  { num: "03", title: "Programme", description: "We operate the technical controls. You keep interpretation, the written supervisory procedures and the examination relationship. Your ongoing role is named in the proposal." },
  { num: "04", title: "Evidence", description: "Controls are re-tested on a schedule and the record accumulates. You keep visibility into the account for as long as the engagement runs." },
];

const PartnerProgramPage = () => (
  <Layout>
    {/* Hero */}
    <section className="section-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "var(--gradient-gold)" }} />
      <div className="container mx-auto relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Partner Program</p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-extrabold leading-[1.1] mb-6">
            We Operate the Technology.{" "}
            <span className="text-gradient-gold">You Keep the Program.</span>
          </h1>
          <p className="text-lg leading-relaxed opacity-70 mb-4 max-w-2xl">
            Centience works alongside compliance consultancies, chief compliance officers of record,
            cybersecurity advisers, fractional technology executives and MSPs serving regulated firms.
            We run the technical controls underneath your program and keep the evidence that they
            operated. Your interpretation, your procedures, your examination strategy and your client
            relationship stay where they are.
          </p>
          <p className="text-lg leading-relaxed opacity-70 mb-10 max-w-2xl">
            Most findings are not caused by a missing policy. They are caused by the gap between what a
            policy promises and what the environment actually enforces — and by nobody being able to
            show that a control operated over a period rather than on the day someone looked. Closing
            that gap is our work, not yours.
          </p>
          <div className="border-l-4 border-gold pl-5 py-2 mb-8 max-w-2xl">
            <p className="text-sm font-semibold opacity-90">
              We don&apos;t arrive to replace your relationship. We arrive to make your client&apos;s program enforceable.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button variant="cta" size="xl" asChild>
              <Link href="/contact">Become a Partner <ArrowRight size={16} /></Link>
            </Button>
            <Button variant="cta-outline" size="xl" asChild>
              <Link href="/contact">Request a Walkthrough</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* The problem partners bring us */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">What We Hear</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">
            You Can Design the Control. Proving It Operated Is a Different Job.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            These three patterns come up in almost every partner conversation. None of them is a policy
            problem, which is why none of them is solved by writing another document.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="card-premium p-8">
              <h3 className="font-display font-bold text-primary text-lg mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* The platform, in full */}
    <section className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">The Platform</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">
            One Engine Across the Whole Control Set
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Centience connects to your client&apos;s live environment and tests controls against it. Not a
            questionnaire, not a document repository, not a point-in-time score — a set of checks that
            run on a schedule against the systems the firm actually uses.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Every finding carries a named owner, the obligation or policy clause it comes from, and a
            timestamped record of when it was last verified. When a fix is claimed, the finding moves to
            awaiting verification — not to green. It turns green when a re-test says so.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain, i) => (
            <motion.div key={domain.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: (i % 4) * 0.08 }} className="card-premium p-7">
              <div className="w-11 h-11 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-5">
                <domain.icon size={20} />
              </div>
              <h3 className="font-display font-bold text-primary text-base mb-2">{domain.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{domain.body}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-10 max-w-3xl">
          A client engages one domain or all of them. Adding a domain later reuses the same connection
          and the same tenant knowledge, so breadth costs the client far less the second time than
          the first.
        </p>
      </div>
    </section>

    {/* Partner Types */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Who This Is Built For</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">Partner Types</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerTypes.map((partner, i) => (
            <motion.div key={partner.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="card-premium p-8">
              <div className="w-11 h-11 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-5">
                <partner.icon size={20} />
              </div>
              <h3 className="font-display font-bold text-primary text-lg mb-3">{partner.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{partner.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* What partners get */}
    <section className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">What Partners Get</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">
            Access, Evidence, and a Line You Can Point To
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerBenefits.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 3) * 0.1 }} className="card-premium p-8">
              <h3 className="font-display font-bold text-primary text-base mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-10 max-w-3xl">
          Commercial terms are set out in the Centience Partner Agreement. Where a partner&apos;s own
          regulatory obligations call for a particular arrangement or disclosure, we structure around
          it — tell us what you need and we will work to it.
        </p>
      </div>
    </section>

    {/* Process */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Process</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">How an Engagement Runs</h2>
          <p className="text-muted-foreground leading-relaxed">
            Every co-delivered engagement starts with a scoped review of the shared client. The review
            produces findings. The findings produce a program. You keep your advisory role throughout,
            and it is written into the proposal rather than assumed.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div key={step.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="card-premium p-8">
              <p className="text-3xl font-display font-bold text-accent/30 mb-4">{step.num}</p>
              <h3 className="font-display font-bold text-primary text-lg mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Commitment */}
    <section className="py-20 lg:py-24 bg-muted">
      <div className="container mx-auto max-w-3xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="gold-line" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Our Commitment</p>
        </div>
        <h2 className="text-3xl font-display font-bold text-primary mb-5">Your Client. Your Relationship. Protected.</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We will not use a co-delivered engagement to displace the partner who brought us in. We do not
          sell around you, position against you, or extend our scope into your advisory role. That is not
          a policy statement — it is how the program is structured, and it is in the agreement you sign.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          The same boundary applies to the client&apos;s existing IT provider. We govern the technology
          regardless of who operates it, and where a client authorises us to enforce a specific control
          domain, that authority is named in writing and reversible.
        </p>
      </div>
    </section>

    {/* CTA */}
    <section className="section-navy py-20 lg:py-28">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-5">See It Run Against a Real Environment.</h2>
        <p className="text-lg opacity-70 mb-10">
          The fastest way to judge this is to watch the engine test a live tenant and see what it finds.
          If you advise regulated firms with real governance gaps, that walkthrough is worth an hour.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="cta" size="xl" asChild>
            <Link href="/contact">Become a Partner <ArrowRight size={16} /></Link>
          </Button>
        </div>
        <p className="text-sm opacity-50 mt-5">
          Or call us directly:{" "}
          <a href="tel:+18779457177" className="text-gold hover:text-gold/80 transition-colors font-semibold">
            (877) 945-7177
          </a>
        </p>
      </div>
    </section>
  </Layout>
);

export default PartnerProgramPage;
