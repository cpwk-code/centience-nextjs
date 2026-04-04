import { motion } from "framer-motion";

const FounderQuote = () => (
  <section className="py-20 lg:py-28 bg-muted">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="container mx-auto max-w-3xl text-center"
    >
      <div className="flex items-center gap-3 justify-center mb-8">
        <div className="gold-line" />
        <div className="gold-line" />
      </div>
      <blockquote className="text-xl md:text-2xl font-display font-medium text-primary leading-relaxed mb-6 italic">
        "After 20 years inside regulated organizations, I kept seeing the same problem: governance
        frameworks that couldn't be enforced because nobody controlled the technology. Centience was
        built to close that gap."
      </blockquote>
      <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">
        — Orville Matias, Founder & CEO, Centience
      </p>
    </motion.div>
  </section>
);

export default FounderQuote;
