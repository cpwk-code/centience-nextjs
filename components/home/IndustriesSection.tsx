import Link from "next/link";
import { Building2, Heart, Scale, Briefcase, Calculator, HandHeart, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const industries = [
  { icon: Calculator, title: "Accounting & CPA", description: "Financial data governance and AICPA readiness", href: "/industries/accounting-cpa" },
  { icon: Building2, title: "Financial Services", description: "SEC, FINRA, and state regulatory alignment", href: "/industries/financial-services" },
  { icon: Heart, title: "Healthcare", description: "HIPAA-compliant governance and AI oversight", href: "/industries/healthcare" },
  { icon: Scale, title: "Law Firms", description: "Client data protection and legal AI governance", href: "/industries/law-firms" },
  { icon: HandHeart, title: "Non-Profit", description: "Data governance and compliance for mission-driven organizations", href: "/industries/non-profit" },
  { icon: Briefcase, title: "Private Equity", description: "Portfolio-level governance and oversight", href: "/industries/private-equity" },
];

const IndustriesSection = () => (
  <section className="py-24 lg:py-32 bg-background">
    <div className="container mx-auto">
      <div className="max-w-2xl mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="gold-line" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Industries</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">
          Built for Regulated Industries
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link href={ind.href}
              className="card-premium p-7 block group h-full"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 rounded-lg bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                  <ind.icon size={20} />
                </div>
                <ArrowUpRight size={16} className="text-muted-foreground/0 group-hover:text-accent transition-all duration-300" />
              </div>
              <h3 className="font-display font-semibold text-primary mb-2">{ind.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{ind.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
