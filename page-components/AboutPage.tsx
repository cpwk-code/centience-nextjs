import Layout from "@/components/Layout";
import orvillePhoto from "@/assets/orville-matias.png";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { motion } from "framer-motion";
import {
  ArrowRight,
  Server,
  Shield,
  FileCheck,
  CheckCircle2,
  Linkedin,
  MapPin,
  Heart,
  Target,
  Award,
  Handshake,
  Gem,
} from "lucide-react";

const differentiators = [
  {
    title: "We Own the Infrastructure",
    description:
      "We manage the computers, networks, cloud environments, endpoints, and communication systems inside your organization. That operational ownership is what makes governance enforceable.",
  },
  {
    title: "We Enforce the Controls",
    description:
      "Policies mean nothing without enforcement. Because we operate the infrastructure, we can technically enforce security policies, access controls, and AI governance requirements — continuously.",
  },
  {
    title: "We Assemble the Evidence",
    description:
      "Audit readiness is not a project. It is a continuous operational state. We collect governance evidence daily so that when regulators ask, the answer is already documented.",
  },
];

const stats = [
  { value: "20+", label: "Years Operating in Regulated Industries" },
  { value: "1,000+", label: "Organizations Served Across Financial Services, Healthcare & Legal" },
  { value: "100%", label: "Audit Success Rate Across All Engagements" },
  { value: "10+", label: "Average Client Relationship in Years" },
];

const values = [
  {
    icon: Heart,
    title: "Integrity",
    description: "We document everything we do and stand behind it. When regulators ask, the evidence is there.",
  },
  {
    icon: Target,
    title: "Technical Accountability",
    description: "Governance claims must be technically verifiable. We operate the infrastructure — so we can prove every control.",
  },
  {
    icon: Award,
    title: "Deep Expertise",
    description: "Our team combines decades of managed IT operations with direct experience in SEC, FINRA, HIPAA, and NIST compliance.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description: "We do not close tickets. We build governance programs. Most of our client relationships span a decade or more.",
  },
  {
    icon: Gem,
    title: "Precision Over Volume",
    description: "We serve a focused set of regulated industries where we have deep expertise — not every market, not every sector.",
  },
];

const offices = [
  "1350 Ave of the Americas, Fl 3, New York, NY",
  "333 Mamaroneck Avenue #431, White Plains, NY",
  "200 S. Biscayne Blvd., Miami, FL",
  "4440 PGA Boulevard, Suite 600, Palm Beach Gardens, FL",
];

const founderExpertise = [
  "SEC and FINRA regulatory compliance",
  "HIPAA and healthcare governance",
  "NIST Cybersecurity Framework",
  "AI governance for regulated organizations",
  "Managed infrastructure",
  "Incident response and audit readiness",
  "Regulatory examination support",
];

const timeline = [
  { year: "2005", milestone: "Founded Compuwork — managed IT and cybersecurity for regulated industries" },
  { year: "2010", milestone: "Engaged at inception to architect OfficeSafe — HIPAA and PCI compliance platform for healthcare organizations nationwide" },
  { year: "2020", milestone: "Co-founded CyberGRID — specialized GRC advisory and cybersecurity compliance firm" },
  { year: "2022", milestone: "Expanded to South Florida, deepening presence in financial services and healthcare markets" },
  { year: "2024", milestone: "OfficeSafe / Bridge Compliance engagement concluded after nearly 14 years, including two years post-acquisition by Rectangle Health" },
  { year: "2026", milestone: "Founded Centience — AI and technology governance for regulated organizations. Centience.ai launched." },
];

const AboutPage = () => (
  <Layout>
    {/* Hero */}
    <section className="section-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "var(--gradient-gold)" }} />
      <div className="container mx-auto relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Our Story</p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-extrabold leading-[1.1] mb-6">
            Built From 20 Years Inside{" "}
            <span className="text-gradient-gold">Regulated Organizations</span>
          </h1>
          <p className="text-lg leading-relaxed opacity-70 mb-10 max-w-2xl">
            Centience is the evolution of two decades of hands-on technical work inside the most compliance-sensitive organizations in the country — financial services firms, healthcare organizations, and law firms that could not afford to get it wrong.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link href="/ai-governance-risk-assessment">
              Book Your Governance Assessment <ArrowRight size={16} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* Origin Story */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="gold-line" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">How We Got Here</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-8 leading-tight">
          We Didn't Plan to Build a Governance Firm. Our Clients Made It Necessary.
        </h2>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            In 2005, Orville Matias founded Compuwork — a managed IT services provider serving regulated
            industries across New York Metro. The business was built on a straightforward premise: regulated
            organizations need technology that is reliable, secure, and capable of standing up to regulatory scrutiny.
          </p>
          <p>
            Over the next two decades, Compuwork grew into a trusted technology partner for financial services
            firms, law practices, healthcare organizations, and accounting firms. The work was technical —
            managing infrastructure, securing networks, maintaining systems, keeping organizations running.
          </p>
          <p className="font-semibold text-primary">But something kept happening.</p>
          <p>
            Every engagement eventually surfaced a compliance obligation. A FINRA examination. A HIPAA audit.
            An SEC review. Clients would turn to Compuwork — not just for the technology — but for guidance on
            how to make it defensible.
          </p>
          <p className="font-semibold text-primary">In 2010, that pattern became a platform.</p>
          <p>
            Orville was engaged at inception to serve as the technical architect behind OfficeSafe — a HIPAA
            and PCI compliance platform purpose-built for healthcare organizations. He led all systems
            implementation, worked directly with the development team to build the platform, and delivered
            HIPAA compliance programs across thousands of healthcare practices nationwide. When OfficeSafe
            was acquired by Rectangle Health — where it became Bridge Compliance, now serving 5,000+
            healthcare practices — he was retained as Head of Systems Implementation for two years
            post-acquisition. That engagement ran for nearly 14 years.
          </p>
          <p>
            It confirmed what Compuwork had been demonstrating since 2005: regulated organizations didn't
            just need technology management. They needed governance — technically enforced, continuously
            monitored, and documented to withstand regulatory scrutiny.
          </p>
          <p>
            In 2020, Orville co-founded CyberGRID — a specialized GRC advisory firm focused entirely on the
            governance, risk, and compliance layer of technology operations. Built on the NIST Cybersecurity
            Framework, CyberGRID delivered structured cybersecurity and compliance programs for organizations
            in financial services, healthcare, professional services, and non-profit sectors.
          </p>
          <p className="font-semibold text-primary text-lg">
            In 2026, Centience was founded — bringing infrastructure operations and compliance governance
            together under one firm, purpose-built for the AI governance era.
          </p>
        </div>
      </div>
    </section>

    {/* Our Approach */}
    <section className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Our Approach</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">
            Governance Without Technical Control Is Just a Policy Document.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            There are firms that write governance frameworks. There are firms that conduct compliance
            assessments. There are firms that manage IT infrastructure.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Centience is the only firm that does all three — because effective governance requires control
            of the environment being governed.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            When Centience manages your infrastructure, your cybersecurity, and your AI environment,
            governance is not theoretical. Controls are technically enforced. Evidence is continuously
            collected. When regulators arrive, the documentation is already assembled.
          </p>
          <p className="text-muted-foreground leading-relaxed font-semibold text-primary">
            That is why Centience maintains a 100% audit success rate across all client engagements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {differentiators.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-premium p-8"
            >
              <div className="w-11 h-11 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-5">
                {i === 0 && <Server size={20} />}
                {i === 1 && <Shield size={20} />}
                {i === 2 && <FileCheck size={20} />}
              </div>
              <h3 className="font-display font-bold text-primary text-lg mb-3">{d.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Founder */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="gold-line" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Leadership</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1">
            <div className="rounded-xl overflow-hidden bg-muted aspect-[3/4] flex items-center justify-center mb-4">
              <img
                src={orvillePhoto}
                alt="Orville Matias — Founder & CEO, Centience"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-display font-bold text-primary text-xl">Orville Matias</h3>
            <p className="text-sm text-muted-foreground mb-3">Founder & Chief Executive Officer</p>
            <a
              href="https://www.linkedin.com/in/orville-matias-3b93393/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
            >
              <Linkedin size={16} /> Connect on LinkedIn
            </a>
          </div>
          <div className="lg:col-span-2 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Orville Matias has spent over 20 years building and operating technology infrastructure
              inside regulated industries. He founded Compuwork in 2005 with a focus on serving
              compliance-driven organizations across financial services, healthcare, and legal.
            </p>
            <p>
              In 2010, he was engaged at inception as the technical architect behind OfficeSafe — a HIPAA
              and PCI compliance platform for healthcare organizations nationwide. He led all systems
              implementation and technical program delivery, scaling the platform to thousands of healthcare
              practices before its acquisition by Rectangle Health, where it became Bridge Compliance. He
              remained Head of Systems Implementation for two years post-acquisition, completing a nearly
              14-year engagement that became the foundation of his compliance platform expertise.
            </p>
            <p>
              In 2020, he co-founded CyberGRID — a GRC advisory firm delivering structured cybersecurity
              and compliance programs for regulated industries built on the NIST Cybersecurity Framework.
            </p>
            <p>
              In 2026, he founded Centience — purpose-built to close the gap between technology operations
              and governance oversight across infrastructure, cybersecurity, and AI.
            </p>
            <p>
              He currently serves as Chief Compliance Officer in an advisory capacity at CloudLayer.ai — a
              cloud optimization and AI security firm — bringing an operator's perspective to the AI
              governance challenges Centience clients face daily.
            </p>
            <p>
              His approach has always been the same: governance has to be technically enforced, not
              theoretically documented. That conviction is the foundation of the Centience model.
            </p>
            <div>
              <h4 className="font-display font-bold text-primary text-base mb-3">Expertise spans:</h4>
              <ul className="space-y-2">
                {founderExpertise.map((item) => (
                  <li key={item} className="text-sm flex items-start gap-3">
                    <CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <blockquote className="border-l-2 border-accent pl-6 italic text-primary">
              "We built Centience because after 20 years of managing technology inside regulated
              organizations, we saw the same problem everywhere: firms were deploying technology faster
              than they could govern it. Governance has to be technically enforced — not written in a
              policy document and forgotten. That is what Centience is built to do."
              <span className="block mt-2 text-sm not-italic text-muted-foreground font-semibold">
                — Orville Matias, Founder & CEO, Centience
              </span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto max-w-3xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="gold-line" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Our Journey</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-12 leading-tight">
          Two Decades of Building Inside Regulated Organizations
        </h2>
        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-accent/20" />
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-5 relative"
              >
                <div className="w-4 h-4 rounded-full bg-accent shrink-0 mt-1 relative z-10" />
                <div>
                  <p className="text-sm font-bold text-accent mb-1">{item.year}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.milestone}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="section-navy py-20 lg:py-28">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center gap-3 justify-center mb-4">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">By The Numbers</p>
            <div className="gold-line" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight">
            Two Decades of Results
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-display font-bold text-gold">{stat.value}</p>
              <p className="text-sm opacity-60 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Core Values</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">
            The Principles Behind Every Engagement
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-premium p-7"
            >
              <div className="w-11 h-11 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
                <v.icon size={20} />
              </div>
              <h3 className="font-display font-bold text-primary text-base mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Locations */}
    <section className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Locations</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">
            New York Metro · South Florida · Nationwide
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Centience serves regulated organizations across New York Metro and South Florida — and delivers
            governance programs for organizations nationwide.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {offices.map((office) => (
            <div key={office} className="card-premium p-5 flex items-start gap-3">
              <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">{office}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Bottom CTA */}
    <section className="section-navy py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full border border-gold/5" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto text-center max-w-3xl relative z-10"
      >
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 leading-tight italic">
          "Regulators don't accept 'we're working on it.' Start with a governance assessment and know
          exactly where you stand."
        </h2>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm opacity-50 mb-10">
          <span>✓ No commitment required</span>
          <span>✓ Results delivered within 5 business days</span>
          <span>✓ 100% audit success rate across all client engagements</span>
        </div>
        <Button variant="cta" size="xl" asChild>
          <Link href="/ai-governance-risk-assessment">
            Book Your Governance Assessment <ArrowRight size={16} />
          </Link>
        </Button>
        <p className="text-sm opacity-50 mt-6">
          Or call us directly:{" "}
          <a href="tel:+18779457177" className="text-gold font-semibold hover:text-gold/80 transition-colors">(877) 945-7177</a>
        </p>
      </motion.div>
    </section>
  </Layout>
);

export default AboutPage;
