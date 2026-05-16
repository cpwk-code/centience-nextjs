"use client";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { motion } from "framer-motion";
import { ArrowRight, Users, Shield, Cpu, Building2, CheckCircle2, Handshake } from "lucide-react";

const models = [
  {
    label: "Model 1",
    title: "Governance Layer Over Internal IT",
    you: "An internal IT team managing day-to-day operations.",
    gap: "No structured governance layer — controls are not documented, evidence is not collected continuously, and audit readiness depends on scrambling before an exam. The technology is managed. The governance is not.",
    centience: "We implement the governance program on top of your existing infrastructure. Your internal IT team continues managing day-to-day operations. We own the governance layer — controls documentation, compliance tracking, AI oversight, security posture reporting, and audit-ready evidence collection.",
  },
  {
    label: "Model 2",
    title: "Implementation Arm for Security Leadership",
    you: "A CISO, vCISO, or outside security firm setting strategy and direction.",
    gap: "No operational arm to implement the controls, manage the infrastructure, and maintain day-to-day execution.",
    centience: "Your security leader sets the program. We implement it. We manage the infrastructure, deploy the controls, maintain continuous monitoring, and deliver the documentation and evidence your security leader needs to report to leadership and regulators.",
  },
  {
    label: "Model 3",
    title: "Partner Co-Delivery",
    you: "An outside firm — compliance consultant, fractional CISO, cybersecurity advisory firm, or technology partner — already engaged with the client.",
    gap: "The engagement needs an implementation and managed operations layer the outside firm doesn't provide.",
    centience: "We co-deliver with the referring partner. The partner retains the client relationship and advisory role. Centience handles implementation, managed infrastructure, security governance operations, and AI program management. The partner relationship is protected — always.",
  },
];

const whoWeWorkWith = [
  { icon: Shield, title: "CISOs and vCISOs", description: "We handle implementation and operational management so your security leader can focus on strategy and oversight." },
  { icon: Users, title: "CTOs and IT Leadership", description: "We implement technical controls that align with your organizational direction and integrate into your existing stack." },
  { icon: Building2, title: "Outside Security Firms", description: "We serve as the managed implementation and operations arm for firms that advise but don't operate day-to-day." },
  { icon: Cpu, title: "Compliance and Legal Counsel", description: "We ensure security posture and documentation maps directly to your regulatory obligations." },
];

const CoManagementPage = () => (
  <Layout>
    {/* Hero */}
    {/* Related Industries — Internal Linking */}
    <section className="py-16 bg-muted/50 border-t border-border">
      <div className="container mx-auto">
        <div className="max-w-4xl">
          <h2 className="text-xl font-display font-bold text-primary mb-2">Industries We Serve</h2>
          <p className="text-sm text-muted-foreground mb-8">Centience delivers continuous governance programs for regulated organizations across multiple industries.</p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <a href="/industries/financial-services" className="card-premium p-5 block hover:border-accent/50 transition-colors group">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight size={14} className="text-accent group-hover:translate-x-1 transition-transform" />
                <span className="font-semibold text-primary text-sm">Financial Services</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">Co-managed governance alongside existing compliance and IT teams.</p>
            </a>
            <a href="/industries/healthcare" className="card-premium p-5 block hover:border-accent/50 transition-colors group">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight size={14} className="text-accent group-hover:translate-x-1 transition-transform" />
                <span className="font-semibold text-primary text-sm">Healthcare</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">Co-managed governance for healthcare organizations with existing IT staff.</p>
            </a>
            <a href="/industries/law-firms" className="card-premium p-5 block hover:border-accent/50 transition-colors group">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight size={14} className="text-accent group-hover:translate-x-1 transition-transform" />
                <span className="font-semibold text-primary text-sm">Law Firms</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">Co-managed governance for firms with existing technology partners.</p>
            </a>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Related Programs:</span>
              <a href="/governance" className="text-accent hover:text-accent/80 transition-colors text-sm font-medium flex items-center gap-1">
                <ArrowRight size={12} /> Technology Governance Programs
              </a>
              <a href="/ai-governance" className="text-accent hover:text-accent/80 transition-colors text-sm font-medium flex items-center gap-1">
                <ArrowRight size={12} /> AI Governance Program
              </a>
              <a href="/cybersecurity" className="text-accent hover:text-accent/80 transition-colors text-sm font-medium flex items-center gap-1">
                <ArrowRight size={12} /> Cybersecurity Governance
              </a>
          </div>
        </div>
      </div>
    </section>

    <section className="section-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "var(--gradient-gold)" }} />
      <div className="container mx-auto relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">How We Work</p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-extrabold leading-[1.1] mb-6">
            We Work With Your Team — <span className="text-gradient-gold">Not Around It</span>
          </h1>
          <p className="text-lg leading-relaxed opacity-70 mb-4 max-w-2xl">
            Centience is built for co-management. Whether you have an internal IT team, an existing CISO or vCISO, a CTO driving strategy, or an outside firm already engaged — we implement, integrate, and manage the governance layer alongside the people and relationships already in place.
          </p>
          <p className="text-lg leading-relaxed opacity-70 mb-10 max-w-2xl">
            We don't arrive to replace your team. We arrive to make your governance program enforceable — and to operate it continuously, not deliver it once.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="cta" size="xl" asChild>
              <Link href="/ai-governance-risk-assessment">Book a Governance Assessment <ArrowRight size={16} /></Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link href="/partners">Partner With Us <ArrowRight size={16} /></Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Approach */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="gold-line" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Approach</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">Built Around Your Existing Structure</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Every organization arrives with a different team configuration. Some have internal IT but no governance layer. Some have a vCISO who sets strategy but no operational arm to execute. Some have an outside firm on compliance but nothing managing the infrastructure underneath it.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Centience maps your existing team first. Then we identify precisely where governance execution and oversight are missing — and plug in there. Nothing more, nothing displaced.
        </p>
      </div>
    </section>

    {/* Who We Work Alongside */}
    <section className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Collaboration</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">Who We Work Alongside</h2>
          <p className="text-muted-foreground leading-relaxed">Full co-management available. If your organization has partial security coverage and needs operational execution and governance enforcement for the rest — that's exactly where Centience operates.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {whoWeWorkWith.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="card-premium p-8">
              <div className="w-11 h-11 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-5">
                <item.icon size={20} />
              </div>
              <h3 className="font-display font-bold text-primary text-lg mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Three Models */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Engagement Models</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">Three Co-Management Models</h2>
          <p className="text-muted-foreground leading-relaxed">We structure every engagement around your existing team — not a fixed service package.</p>
        </div>
        <div className="space-y-8">
          {models.map((model, i) => (
            <motion.div key={model.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="card-premium p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-3">{model.label}</p>
              <h3 className="font-display font-bold text-primary text-xl mb-6">{model.title}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">You Have</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{model.you}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">The Gap</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{model.gap}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">Centience Plugs In</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{model.centience}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* AI Co-Management */}
    <section className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-line" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">AI Governance</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">AI Governance — Centience Takes Operational Accountability.</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For AI implementation, integration, and governance management, Centience takes the lead. AI governance in regulated environments requires a single accountable operator who understands both the regulatory requirements and the technical environment.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Your existing team — internal IT, vCISO, compliance counsel, outside firms — remains involved and informed. Centience owns the operational governance of AI. That accountability is what makes the program enforceable and defensible.
            </p>
          </div>
          <div className="card-premium p-8">
            <Cpu size={24} className="text-accent mb-5" />
            <h3 className="font-display font-bold text-primary text-lg mb-4">What AI Leadership Covers</h3>
            <ul className="space-y-3">
              {[
                "Discovery — identify all AI usage, sanctioned and unsanctioned",
                "Framework — build governance aligned to NIST AI RMF and regulatory requirements",
                "Implementation — deploy approved AI tools inside your governed infrastructure",
                "Integration — connect AI to your existing workflows and systems",
                "Day-to-day management — monitoring, enforcement, vendor evaluation, and reporting",
              ].map((item) => (
                <li key={item} className="text-sm text-muted-foreground flex items-start gap-3">
                  <CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Partner Reference */}
    <section className="py-20 lg:py-24 bg-background border-t border-border">
      <div className="container mx-auto max-w-3xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="gold-line" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">For Partners</p>
        </div>
        <h2 className="text-3xl font-display font-bold text-primary mb-5">Referring a Client? Here's How We Protect the Relationship.</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Centience is built to work alongside the partners who introduce us. We don't displace existing relationships — we extend them. When a partner refers a client into a co-managed engagement, the partner retains their advisory role and client relationship. Centience handles the implementation and ongoing governance operations layer — continuously managed, not delivered once.
        </p>
        <Button variant="outline" size="lg" asChild>
          <Link href="/partners">Learn More About the Partner Program <ArrowRight size={16} /></Link>
        </Button>
      </div>
    </section>

    {/* CTA */}
    <section className="section-navy py-20 lg:py-28">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-5">Let's Map Where Centience Fits In Your Structure. No Displacement. No Disruption.</h2>
        <p className="text-lg opacity-70 mb-10">Every co-management engagement starts with a governance assessment — including a mapping of your existing team and outside relationships. No displacement. No disruption. Just governance that works.</p>
        <Button variant="cta" size="xl" asChild>
          <Link href="/ai-governance-risk-assessment">Book Your Governance Assessment <ArrowRight size={16} /></Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default CoManagementPage;
