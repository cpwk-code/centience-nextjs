import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { motion } from "framer-motion";
import { ArrowRight, ClipboardCheck } from "lucide-react";

const assessments = [
  { title: "Financial Services Governance Assessment", href: "/assessments/financial-services" },
  { title: "Healthcare Governance Assessment", href: "/assessments/healthcare" },
  { title: "Law Firm Governance Assessment", href: "/assessments/law-firms" },
  { title: "Private Equity Governance Assessment", href: "/assessments/private-equity" },
  { title: "Accounting & CPA Governance Assessment", href: "/assessments/accounting-cpa" },
  { title: "Non-Profit Governance Assessment", href: "/assessments/non-profit" },
];

const AssessmentsPage = () => (
  <Layout>
    {/* Hero */}
    <section className="section-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="container mx-auto max-w-3xl text-center">
        <div className="flex items-center gap-3 justify-center mb-6">
          <div className="gold-line" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Assessments</p>
          <div className="gold-line" />
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-6">
          Governance Assessments by Industry
        </h1>
        <p className="text-lg opacity-70 leading-relaxed">
          Quick self-assessment tools identifying governance gaps specific to your regulatory environment. Each assessment takes under 5 minutes and delivers an immediate readiness score.
        </p>
      </div>
    </section>

    {/* Assessments Grid */}
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assessments.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-premium p-7 flex flex-col"
            >
              <ClipboardCheck size={24} className="text-accent mb-4" />
              <h3 className="font-display font-bold text-primary text-base mb-3">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                Takes under 5 minutes. Immediate results.
              </p>
              <Button variant="outline" size="sm" asChild className="w-fit">
                <Link href={a.href}>
                  Start Assessment <ArrowRight size={14} className="ml-2" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default AssessmentsPage;
