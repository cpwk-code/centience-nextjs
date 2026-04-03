"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { ArrowRight, Tag } from "lucide-react";
import Link from 'next/link';
import { blogPosts, getSrc } from "@/data/blogPosts";
import SEO from "@/components/SEO";
import KeyFacts from "@/components/KeyFacts";

const BlogsPage = () => {
  // Extract unique categories and post titles for KeyFacts
  const categories = [...new Set(blogPosts.map(p => p.category))];
  const recentPosts = blogPosts.slice(0, 5).map(p => p.title);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="IT Security & Compliance Blog | Compuwork Insights"
        description="Expert insights on IT security, compliance, and technology strategies for financial services, law firms, and healthcare organizations. Stay informed on SEC, FINRA, HIPAA requirements."
        canonical="/blogs"
        keywords={[
          'IT security blog',
          'compliance insights',
          'cybersecurity articles',
          'HIPAA news',
          'SEC IT requirements',
          'managed IT insights',
        ]}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blogs' },
        ]}
      />
      
      {/* Semantic Key Facts for AI Search Engines */}
      <KeyFacts
        entityName="Compuwork Blog - IT Security & Compliance Insights"
        entityType="Blog"
        description="Expert insights on IT security, compliance, and technology strategies for financial services, law firms, and healthcare organizations. Articles cover SEC, FINRA, HIPAA requirements, cybersecurity best practices, and managed IT trends."
        facts={[
          { label: "Total Articles", value: `${blogPosts.length}+` },
          { label: "Categories", value: categories.join(", ") },
          { label: "Target Audience", value: "Financial Services, Healthcare, Legal, Professional Services" },
          { label: "Topics Covered", value: "Cybersecurity, Compliance, Managed IT, Cloud Security, HIPAA, SEC, FINRA" },
          { label: "Publisher", value: "Compuwork Team" },
        ]}
        services={recentPosts}
        contactInfo={{
          phone: "(877) 945-7177",
          email: "info@compuwork.ai",
          website: "https://compuwork.ai/blogs",
        }}
      />

      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 bg-gold/10 rounded-full px-5 py-2.5 mb-6"
            >
              <span className="text-gold font-semibold text-sm tracking-wide uppercase">
                Insights & Resources
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-foreground mb-6 leading-tight">
              Our <span className="text-gradient-gold">Blog</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Expert insights on IT security, compliance, and technology strategies for
              financial, legal, and healthcare organizations.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {["All", "Blog", "IT", "Cybersecurity", "Compliance"].map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 rounded-full font-medium text-sm transition-colors ${
                  category === "All"
                    ? "bg-gold text-primary"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-gold/50"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((blog, index) => (
              <AnimatedSection key={blog.id} delay={index * 0.1}>
                <motion.div whileHover={{ y: -8 }}>
                  <Link href={`/blog/${blog.slug}`}
                    className="block bg-card border border-border rounded-2xl overflow-hidden group h-full"
                  >
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={getSrc(blog.image)}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold/10 text-gold text-xs font-semibold rounded-full">
                          <Tag className="w-3 h-3" />
                          {blog.category}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-gold transition-colors">
                        {blog.title}
                      </h3>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {blog.excerpt}
                      </p>

                      <div className="flex items-center text-gold font-medium text-sm group-hover:gap-3 gap-2 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Stay Informed on IT Security & Compliance
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights on protecting your
              regulated business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-gold"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gold text-primary font-semibold rounded-lg hover:bg-gold-light transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogsPage;
