"use client";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Tag, User, Calendar } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { blogPosts, getSrc } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";

// Only show Centience-authored posts (ids 11+)
const centiencePosts = blogPosts.filter((p) => p.id >= 11).reverse();

const categories = ["All", ...Array.from(new Set(centiencePosts.map((p) => p.category)))];

const InsightsArticlesPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? centiencePosts
      : centiencePosts.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="section-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold tracking-wide mb-6 uppercase">
              Insights
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-warm-white leading-tight mb-6">
              AI Governance &{" "}
              <span className="text-gradient-gold">Cybersecurity Articles</span>
            </h1>
            <p className="text-lg text-warm-white/70 max-w-2xl mx-auto leading-relaxed">
              Practitioner-level analysis on AI governance, cybersecurity, and regulatory compliance for SEC, FINRA, and HIPAA regulated organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border bg-background sticky top-16 z-10">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-gold text-white shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-24">No articles in this category yet.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:border-gold/30 transition-all duration-300"
                >
                  {/* Thumbnail */}
                  <Link href={`/insights/${post.slug}`} className="block overflow-hidden aspect-video bg-muted flex-shrink-0">
                    <img
                      src={getSrc(post.image)}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </Link>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    {/* Category + Date */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-gold/10 text-gold text-xs font-semibold rounded-full">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                    </div>

                    {/* Title */}
                    <Link href={`/insights/${post.slug}`}>
                      <h2 className="font-display font-bold text-primary text-base leading-snug mb-3 group-hover:text-gold transition-colors line-clamp-3">
                        {post.title}
                      </h2>
                    </Link>

                    {/* Excerpt */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Author + CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <User className="w-3 h-3" />
                        {post.author}
                      </span>
                      <Link
                        href={`/insights/${post.slug}`}
                        className="inline-flex items-center gap-1 text-gold text-sm font-semibold hover:gap-2 transition-all"
                      >
                        Read <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-muted border-t border-border">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4 leading-tight">
            Ready to build your governance program?
          </h2>
          <p className="text-muted-foreground mb-8">
            Start with an AI Governance Assessment. Results in 5 business days.
          </p>
          <Button variant="cta" size="lg" asChild>
            <Link href="/ai-governance-risk-assessment">
              Book Your Assessment <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default InsightsArticlesPage;
