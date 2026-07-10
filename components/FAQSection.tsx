"use client";
import { motion } from "framer-motion";
import type { FaqItem } from "@/data/industryFaqs";

interface FAQSectionProps {
  items: FaqItem[];
  eyebrow?: string;
  heading?: string;
}

/**
 * Visible, accessible FAQ section. Renders the same Q&A content that the
 * page's FAQPage JSON-LD describes, satisfying Google's requirement that
 * structured-data FAQ content be present on the page. Uses native
 * <details>/<summary> so answers are real, crawlable text (not hidden).
 */
const FAQSection = ({ items, eyebrow = "FAQ", heading = "Frequently Asked Questions" }: FAQSectionProps) => {
  if (!items?.length) return null;

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">{eyebrow}</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary leading-tight">
            {heading}
          </h2>
        </div>

        <div className="space-y-4">
          {items.map((item, i) => (
            <motion.details
              key={item.question}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group card-premium p-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-start justify-between gap-4 cursor-pointer list-none font-display font-bold text-primary text-lg">
                <span>{item.question}</span>
                <span className="text-accent shrink-0 mt-1 transition-transform duration-200 group-open:rotate-45 text-2xl leading-none">+</span>
              </summary>
              <p className="text-muted-foreground leading-relaxed mt-4">{item.answer}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
