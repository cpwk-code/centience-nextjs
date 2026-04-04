'use client'

import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const continuityItems = [
  "Leadership and advisory team",
  "All active client engagements",
  "Services across Financial Services, Healthcare, Legal, and Non-Profit",
  "Your existing points of contact",
  "Compliance and audit methodologies",
  "Partner and vendor relationships",
];

const RebrandPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-6 font-['Plus_Jakarta_Sans']"
          >
            Brand Update
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 font-['Plus_Jakarta_Sans'] leading-tight"
          >
            Compuwork USA is now Centience.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto font-['DM_Sans']"
          >
            Same leadership. Same team. Same commitment to compliance outcomes in regulated industries. We've evolved our name to reflect the full scope of what we do.
          </motion.p>
        </div>
      </section>

      {/* Two Column Cards */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full border-border/50">
              <CardContent className="p-8">
                <span className="text-accent font-semibold text-sm uppercase tracking-wide font-['Plus_Jakarta_Sans']">
                  What Changed
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mt-3 mb-4 font-['Plus_Jakarta_Sans']">
                  A Name Built for What We Do
                </h2>
                <p className="text-muted-foreground font-['DM_Sans'] leading-relaxed">
                  Compuwork USA has been renamed Centience. Our domain is now centience.ai. All prior links and materials referencing Compuwork or compuwork.ai will continue to redirect here.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full border-border/50">
              <CardContent className="p-8">
                <span className="text-accent font-semibold text-sm uppercase tracking-wide font-['Plus_Jakarta_Sans']">
                  Why the Change
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mt-3 mb-4 font-['Plus_Jakarta_Sans']">
                  AI & Governance Is Our Core
                </h2>
                <p className="text-muted-foreground font-['DM_Sans'] leading-relaxed">
                  Our work has always centered on risk, compliance, and governance for regulated industries. Centience better reflects our focus on AI governance, cybersecurity, and technology compliance — where precision and intelligence meet.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* What Stays the Same */}
      <section className="py-16 md:py-20 bg-muted/50">
        <div className="max-w-3xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10 font-['Plus_Jakarta_Sans']"
          >
            What Stays Exactly the Same
          </motion.h2>
          <div className="space-y-4">
            {continuityItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-[hsl(160,100%,35%)] mt-0.5 shrink-0" />
                <span className="text-foreground font-['DM_Sans'] text-base md:text-lg">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4 font-['Plus_Jakarta_Sans']"
          >
            You're in the right place.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-primary-foreground/80 text-lg mb-8 font-['DM_Sans']"
          >
            Explore Centience and everything we're building for governance in regulated industries.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="cta" size="lg" asChild>
              <Link href="/">
                Go to centience.ai <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </Button>
            <Button variant="cta-outline" size="lg" asChild className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-6 bg-primary border-t border-primary-foreground/10">
        <p className="text-center text-primary-foreground/50 text-sm font-['DM_Sans']">
          © 2026 Centience (formerly Compuwork) · centience.ai
        </p>
      </section>
    </Layout>
  );
};

export default RebrandPage;
