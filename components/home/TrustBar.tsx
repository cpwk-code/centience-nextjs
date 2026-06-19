"use client";
import Link from "next/link";
import { BarChart3, Heart, Scale, TrendingUp, FileText, Users } from "lucide-react";
import { motion } from "framer-motion";

const industries = [
  { icon: BarChart3, label: "Financial Services", href: "/industries/financial-services" },
  { icon: Heart,     label: "Healthcare",         href: "/industries/healthcare" },
  { icon: Scale,     label: "Law Firms",           href: "/industries/law-firms" },
  { icon: TrendingUp,label: "Private Equity",      href: "/industries/private-equity" },
  { icon: FileText,  label: "Accounting & CPA",    href: "/industries/accounting-cpa" },
  { icon: Users,     label: "Non-Profits",          href: "/industries/non-profit" },
];

const TrustBar = () => (
  <section className="bg-muted border-y border-border py-6">
    <div className="container mx-auto">
      <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-0">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground shrink-0 sm:pr-8 sm:border-r sm:border-border">
          Built for regulated industries
        </p>
        <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:pl-8">
          {industries.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                href={item.href}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-background border border-border text-muted-foreground hover:text-foreground hover:border-accent/40 hover:bg-accent/5 transition-all duration-200"
              >
                <item.icon size={11} className="text-accent" />
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TrustBar;
