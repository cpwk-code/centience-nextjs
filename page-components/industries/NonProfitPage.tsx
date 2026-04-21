import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, Brain, Lock, FileText, Server, Users } from "lucide-react";

const pressurePoints = [
  { title: "Donor Data Protection", body: "Non-profits collect and store donor financial information, giving histories, and personal data. A data breach affecting donor records creates immediate reputational damage — and potential regulatory liability under state data protection laws." },
  { title: "Federal Grant Cybersecurity Requirements", body: "Federal grant recipients are subject to cybersecurity requirements that have expanded significantly. NIST SP 800-171 compliance is required for organizations handling Controlled Unclassified Information. Many non-profits receiving federal funding are out of compliance without knowing it." },
  { title: "AI Adoption Without Governance", body: "Non-profits are adopting AI tools for fundraising, program delivery, communications, and administrative functions — often without governance frameworks assessing data privacy risk, accuracy bias, or funder compliance obligations." },
  { title: "Board Accountability and Fiduciary Obligations", body: "Non-profit boards carry fiduciary responsibility for organizational risk management — including technology risk. Without documented governance programs, boards cannot demonstrate that they are meeting their oversight obligations." },
];

const capabilities = [
  { icon: Shield, title: "Donor and Beneficiary Data Governance", items: ["Donor database access controls and role-based permissions", "Payment card data governance and PCI compliance support", "Beneficiary data protection controls", "Data retention and destruction governance", "Secure donor portal governance", "Data sharing governance for program partners"] },
  { icon: Brain, title: "AI Governance for Non-Profits", items: ["AI usage discovery across fundraising, program, and administrative functions", "Data privacy risk assessment for AI tools", "AI governance framework aligned to funder and regulatory requirements", "Vendor AI risk evaluation for non-profit technology platforms", "AI usage policies for staff and volunteers", "Ongoing AI monitoring and documentation"] },
  { icon: Lock, title: "Cybersecurity Governance", items: ["Security monitoring scaled for non-profit environments", "Email security and phishing defense", "Ransomware protection and response governance", "Endpoint security for staff and remote workers", "Volunteer access controls and credential management", "Vulnerability management across all systems"] },
  { icon: FileText, title: "Federal Grant Compliance", items: ["NIST SP 800-171 gap assessment for federal grant recipients", "Cybersecurity requirements documentation for grant compliance", "System Security Plan development", "Annual compliance review and documentation", "Subrecipient oversight governance", "Grant-specific technology requirement tracking"] },
  { icon: Server, title: "Infrastructure Governance", items: ["Managed infrastructure scaled for non-profit budgets", "Cloud environment governance and cost optimization", "Remote work security for distributed teams", "Backup and disaster recovery governance", "Program continuity planning", "24/7 infrastructure monitoring and response"] },
  { icon: Users, title: "Governance Documentation for Boards and Funders", items: ["Technology governance policy framework", "Board-ready governance reporting", "Funder-required security documentation", "Annual risk assessment documentation", "Incident response plan development", "Audit-ready evidence package assembly"] },
];

const clientTypes = ["Human Services Organizations", "Health and Behavioral Health Non-Profits", "Education and Youth-Serving Organizations", "Arts and Cultural Organizations", "Faith-Based Organizations", "Foundations and Grantmaking Organizations", "Federal Grant Recipients"];

const NonProfitPage = () => (
  <Layout>
    <section className="section-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "var(--gradient-gold)" }} />
      <div className="container mx-auto relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6"><div className="gold-line" /><p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Non-Profit</p></div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-extrabold leading-[1.1] mb-6">
            Technology Governance That Protects <span className="text-gradient-gold">Donor Data, Program Operations, and Mission Integrity</span>
          </h1>
          <p className="text-lg leading-relaxed opacity-70 mb-10 max-w-2xl">
            Non-profit organizations handle sensitive donor information, beneficiary data, and grant-related financial records — all of which carry governance obligations that many organizations underestimate. Board accountability, funder requirements, and state charitable solicitation regulations create a compliance environment that demands organized, technically enforced governance. Centience delivers governance programs scaled for non-profits — protecting mission integrity without overwhelming operational capacity.
          </p>
          <Button variant="cta" size="xl" asChild><Link href="/ai-governance-risk-assessment">Book Your Non-Profit Governance Assessment <ArrowRight size={16} /></Link></Button>
        </motion.div>
      </div>
    </section>

    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4"><div className="gold-line" /><p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">The Challenge</p></div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5">Why Technology Governance Matters More Than Non-Profits Realize</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Non-profit organizations often believe that their governance obligations are lower than those of for-profit regulated entities. That assumption is incorrect — and it leaves organizations exposed.</p>
          <p className="text-muted-foreground leading-relaxed">Non-profits handle donor financial data subject to PCI compliance. They hold beneficiary information that may be subject to HIPAA if health services are involved. Federal grant recipients face specific cybersecurity requirements from agencies like HHS, DOJ, and NSF. And state charitable registration requirements increasingly include data protection obligations.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {pressurePoints.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="card-premium p-8">
              <h3 className="font-display font-bold text-primary text-lg mb-4">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4"><div className="gold-line" /><p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Technical Capabilities</p></div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5">What Centience Manages Inside Non-Profit Organizations</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div key={cap.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="card-premium p-8">
              <div className="w-11 h-11 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-5"><cap.icon size={20} /></div>
              <h3 className="font-display font-bold text-primary mb-4">{cap.title}</h3>
              <ul className="space-y-2">{cap.items.map((item) => (<li key={item} className="text-sm text-muted-foreground flex items-start gap-2"><CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />{item}</li>))}</ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-10">Non-Profit Organizations We Serve</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {clientTypes.map((t) => (<div key={t} className="card-premium p-5 flex items-center gap-3"><CheckCircle2 size={18} className="text-accent shrink-0" /><span className="text-primary font-medium">{t}</span></div>))}
        </div>
      </div>
    </section>

    <section className="section-navy py-20 lg:py-28">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-5">Donor trust is your most valuable asset. Is your technology governance protecting it?</h2>
        <p className="text-lg opacity-70 mb-8">Our non-profit governance assessment identifies donor data exposure, federal grant compliance gaps, and AI governance vulnerabilities — and delivers a prioritized roadmap scaled to your organization's capacity and budget.</p>
        <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm">
          <span className="flex items-center gap-2 opacity-80"><CheckCircle2 size={16} className="text-accent" /> No commitment required</span>
          <span className="flex items-center gap-2 opacity-80"><CheckCircle2 size={16} className="text-accent" /> Results delivered within 5 business days</span>
          <span className="flex items-center gap-2 opacity-80"><CheckCircle2 size={16} className="text-accent" /> Governance programs scaled for non-profit organizations</span>
        </div>
        <Button variant="cta" size="xl" asChild><Link href="/ai-governance-risk-assessment">Book Your Non-Profit Governance Assessment <ArrowRight size={16} /></Link></Button>
      </div>
    </section>
  </Layout>
);

export default NonProfitPage;
