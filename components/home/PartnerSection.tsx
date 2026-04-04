"use client";
import { Users, ShieldCheck, Scale, Calculator } from "lucide-react";
import { motion } from "framer-motion";

const partners = [
  {
    icon: ShieldCheck,
    title: "Fractional CISOs",
    description: "Security leaders who need operational governance infrastructure for their clients.",
  },
  {
    icon: Scale,
    title: "Compliance & Regulatory Consultants",
    description: "Advisors ensuring clients meet regulatory requirements with enforceable governance controls.",
  },
  {
    icon: Users,
    title: "Data Privacy Attorneys",
    description: "Legal professionals requiring technology governance to support data privacy compliance.",
  },
  {
    icon: Calculator,
    title: "Accounting & Risk Firms",
    description: "Firms advising on risk management who need structured technology governance for their clients.",
  },
];

const PartnerSection = () => (
  <section className="py-24 lg:py-32 bg-background">
    <div className="container mx-auto">
      <div className="max-w-2xl mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="gold-line" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Partner Program</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">
          Built for Trusted Advisors
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Centience works with trusted advisors serving regulated organizations. Partners collaborate with Centience to provide technology governance programs for shared clients while generating recurring revenue opportunities.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {partners.map((partner, i) => (
          <motion.div
            key={partner.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card-premium p-7"
          >
            <div className="w-11 h-11 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-5">
              <partner.icon size={20} />
            </div>
            <h3 className="font-display font-semibold text-primary text-[15px] mb-2 leading-snug">{partner.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{partner.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnerSection;
