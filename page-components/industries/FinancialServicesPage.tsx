"use client";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, FileText, Brain, Lock, BarChart3, Users } from "lucide-react";

const capabilities = [
  {
    icon: Shield,
    title: "Managed Infrastructure & Endpoints",
    items: [
      "Managed workstations, servers, and cloud environments",
      "Endpoint detection and response with continuous monitoring",
      "Access controls and privileged account management",
      "Network segmentation and security monitoring",
      "Patch management and vulnerability remediation",
      "Disaster recovery and business continuity governance",
    ],
  },
  {
    icon: FileText,
    title: "Communication Compliance",
    items: [
      "Electronic communication archiving for SEC Rule 17a-4 / FINRA Rule 4511",
      "Supervision workflows for email, messaging, and collaboration tools",
      "Mobile device communication capture and archiving",
      "eDiscovery-ready archive management",
      "Surveillance and lexicon monitoring",
      "Communication compliance reporting",
    ],
  },
  {
    icon: Lock,
    title: "Cybersecurity Governance",
    items: [
      "Security operations and threat monitoring",
      "Vulnerability management and penetration testing oversight",
      "Vendor and third-party risk evaluation",
      "Incident response governance and documentation",
      "NIST Cybersecurity Framework alignment",
      "Annual cybersecurity review documentation for regulators",
    ],
  },
  {
    icon: Brain,
    title: "AI Governance for Financial Services",
    items: [
      "AI usage discovery — identify every AI tool in use across the firm",
      "AI governance policy development aligned to SEC guidance",
      "Vendor AI risk evaluation for third-party AI platforms",
      "AI monitoring and usage controls",
      "Documentation of AI governance program for examination",
      "Ongoing AI regulatory readiness monitoring",
    ],
  },
  {
    icon: BarChart3,
    title: "Regulatory Compliance Documentation",
    items: [
      "Audit-ready evidence packages assembled continuously",
      "Controls mapping to SEC, FINRA, and state requirements",
      "Examination support and documentation coordination",
      "Written Information Security Policy (WISP) development and maintenance",
      "Annual review documentation and testing evidence",
      "Board and executive-level governance reporting",
    ],
  },
  {
    icon: Users,
    title: "GRC Program Management",
    items: [
      "Governance, Risk, and Compliance program oversight",
      "Risk assessment and controls evaluation",
      "Regulatory change monitoring",
      "Policy framework development and maintenance",
      "Compliance calendar management",
      "Third-party assessment coordination",
    ],
  },
];

const pressurePoints = [
  {
    title: "SEC AI Examination Priorities",
    body: "The SEC's FY2026 examination priorities explicitly flag AI technologies and automated investment tools as primary focus areas for broker-dealers and investment advisers. Firms using AI tools face obligations to disclose, monitor, and govern AI usage. Most firms have not yet inventoried what AI tools are in use across their organization.",
  },
  {
    title: "FINRA Generative AI Governance",
    body: "FINRA's 2026 Annual Regulatory Oversight Report introduced a dedicated Generative AI section for the first time — requiring documented governance over AI use cases, model risks, vendor oversight, and AI-enabled communications capture. Broker-dealers must demonstrate that technology controls are technically enforced, not just documented.",
  },
  {
    title: "Communication Compliance",
    body: "SEC Rule 17a-4 and FINRA Rule 4511 require firms to archive and supervise electronic communications. The expansion of communication channels — including messaging apps, collaboration tools, and AI-assisted communications — has made compliance significantly more complex.",
  },
];

const clientTypes = [
  "Registered Investment Advisers (RIAs)",
  "Broker-Dealers",
  "Hedge Funds and Private Fund Managers",
  "Family Offices",
  "Wealth Management Firms",
  "Financial Planning Practices",
];

const FinancialServicesPage = () => (
  <Layout>
    {/* Hero */}
    <section className="section-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "var(--gradient-gold)" }} />
      <div className="container mx-auto relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Financial Services</p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-extrabold leading-[1.1] mb-6">
            Examination Confidence Starts With <span className="text-gradient-gold">Governance That Is Actually Enforced.</span>
          </h1>
          <p className="text-lg leading-relaxed opacity-70 mb-4 max-w-2xl">
            Broker-dealers, RIAs, and wealth management firms operate under the most demanding regulatory technology requirements of any industry. SEC examinations, FINRA inspections, and state-level oversight all require demonstrable governance controls — not documentation that governance is planned.
          </p>
          <p className="text-lg leading-relaxed opacity-70 mb-10 max-w-2xl">
            Centience delivers governance programs that are technically enforced across your entire technology environment — managed infrastructure, cybersecurity oversight, AI governance, and communication compliance — as a single continuously operated program.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="cta" size="xl" asChild>
              <Link href="/ai-governance-risk-assessment">Book Your Financial Services Assessment <ArrowRight size={16} /></Link>
            </Button>
          </div>
          <p className="text-sm opacity-50 mt-5">
            Or call us directly:{" "}
            <a href="tel:+18779457177" className="text-gold hover:text-gold/80 transition-colors font-semibold">
              (877) 945-7177
            </a>
          </p>
        </motion.div>
      </div>
    </section>

    {/* Regulatory Reality */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">The Regulatory Reality</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">
            What Regulators Are Looking For — And Finding
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            SEC and FINRA examiners have expanded their technology governance scope significantly. Modern examinations look beyond cybersecurity policies to assess actual technical controls: how is data being accessed, how is AI being used, how are communications being archived, and what evidence exists that governance controls are operating.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Most financial services firms are technically compliant on paper but operationally exposed in practice. Policies exist. Enforcement often does not.
          </p>
          <p className="text-muted-foreground leading-relaxed font-semibold">
            Centience closes that gap — by managing the infrastructure where the controls must live.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pressurePoints.map((point, i) => (
            <motion.div key={point.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="card-premium p-8">
              <h3 className="font-display font-bold text-primary text-lg mb-4">{point.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{point.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Technical Capabilities */}
    <section className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Technical Capabilities</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">
            What Centience Manages Inside Financial Services Firms
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Centience operates the full technology stack for financial services clients — which means governance controls are technically enforced, not advisory.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div key={cap.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="card-premium p-8">
              <div className="w-11 h-11 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-5">
                <cap.icon size={20} />
              </div>
              <h3 className="font-display font-bold text-primary mb-4">{cap.title}</h3>
              <ul className="space-y-2">
                {cap.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Who We Serve */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">
            Financial Services Organizations We Serve
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {clientTypes.map((type) => (
            <div key={type} className="card-premium p-5 flex items-center gap-3">
              <CheckCircle2 size={18} className="text-accent shrink-0" />
              <span className="text-primary font-medium">{type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Examination Problem */}
    <section className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6 leading-tight">
            100% Audit Success Rate — Here's Why
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Financial services regulators do not give credit for governance that is planned. They assess governance that is operating. The difference between a successful examination and a deficiency finding is almost always evidence — documented, organized, and retrievable.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Centience operates the technology infrastructure inside our clients' organizations. That means we are collecting governance evidence continuously — not preparing it in response to an examination notice.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            When a FINRA examination begins or an SEC inquiry arrives, our clients do not scramble. The evidence package is already assembled. Controls are already documented. The technical record is already complete.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10 font-semibold">
            That operational posture is why Centience has maintained a 100% audit success rate across all client engagements.
          </p>

          <blockquote className="border-l-4 border-accent pl-6 py-4 bg-card rounded-r-lg">
            <p className="text-primary italic leading-relaxed mb-3">
              "Regulated firms need governance that is technically enforced — not written in a policy document filed in a drawer. When examiners arrive, the evidence has to already exist."
            </p>
            <cite className="text-sm text-muted-foreground not-italic font-semibold">— Orville Matias, Founder & CEO</cite>
          </blockquote>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-navy py-20 lg:py-28">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-5">
          FINRA and SEC examiners are expanding their technology governance scope. Is your firm ready?
        </h2>
        <p className="text-lg opacity-70 mb-8">
          Our financial services governance assessment identifies gaps across your infrastructure, cybersecurity posture, communication compliance, and AI environment — and delivers a prioritized roadmap before your next examination.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm">
          <span className="flex items-center gap-2 opacity-80"><CheckCircle2 size={16} className="text-accent" /> No commitment required</span>
          <span className="flex items-center gap-2 opacity-80"><CheckCircle2 size={16} className="text-accent" /> Results delivered within 5 business days</span>
          <span className="flex items-center gap-2 opacity-80"><CheckCircle2 size={16} className="text-accent" /> 100% audit success rate across all financial services engagements</span>
        </div>
        <Button variant="cta" size="xl" asChild>
          <Link href="/ai-governance-risk-assessment">Book Your Financial Services Assessment <ArrowRight size={16} /></Link>
        </Button>
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

export default FinancialServicesPage;
