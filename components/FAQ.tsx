"use client";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What are managed IT services?",
    answer: "Managed IT services provide ongoing, proactive management of your technology environment instead of waiting for problems to happen. With managed IT services in USA, Compuwork monitors systems, secures data, supports users, and aligns IT decisions with business and compliance goals so technology works quietly and reliably in the background.",
  },
  {
    question: "How are Compuwork's managed IT services different from other providers?",
    answer: "Compuwork was built on long-term relationships, not volume or shortcuts. Our approach to managed IT services in USA focuses on accountability, documentation, and compliance-first thinking. We do what's needed to protect your business, not just what's listed in an SLA. Many of our clients have been with us for well over a decade.",
  },
  {
    question: "What types of businesses benefit most from managed IT services?",
    answer: "Our managed IT services are designed for regulated and compliance-driven organizations such as financial firms, law practices, healthcare providers, and professional services companies. If your business operates in the USA and needs reliable, well-documented IT support that stands up to audits, managed IT services are a strong fit.",
  },
  {
    question: "Do your managed IT services include cybersecurity?",
    answer: "Yes. Cybersecurity is fully integrated into our managed IT services in USA. This includes endpoint protection, monitoring, patch management, secure access controls, and incident response. Everything is documented and aligned with regulatory expectations, not treated as an add-on.",
  },
  {
    question: "How does Compuwork support compliance and audits?",
    answer: "Compliance is built into how we deliver managed IT services. We maintain clear documentation, standardized configurations, and continuous monitoring to support audit readiness. Whether you're preparing for HIPAA, financial, or client-driven audits, our managed IT services in USA help reduce stress and last-minute scrambling.",
  },
];

const FAQ = () => {
  // Generate FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="py-20 bg-muted/30">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-6">
            <span className="text-gold font-semibold text-sm tracking-wide uppercase">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-4">
            Frequently Asked{" "}
            <span className="text-gradient-gold">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Common questions about our managed IT services for regulated industries.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border/50 rounded-lg px-6 data-[state=open]:border-gold/30 transition-colors"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-gold hover:no-underline py-5 text-base sm:text-lg font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
