"use client";
'use client';
import SEO from "@/components/SEO";
import { useParams } from 'next/navigation';
import Link from "next/link";
import { ArrowLeft, User, Tag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { blogPosts, firmImages, getSrc } from "@/data/blogPosts";
import KeyFacts from "@/components/KeyFacts";
import BlogFAQAccordion from "@/components/BlogFAQAccordion";
import BlogAuthorCard from "@/components/BlogAuthorCard";

const BlogPostPage = ({ slug: slugProp }: { slug?: string }) => {
  const params = useParams();
  const slug = slugProp || (params?.slug as string);
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Button variant="gold" asChild>
            <Link href="/insights">Back to Insights</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  // Get related posts (3 most recent, excluding current post)
  // Related posts: Centience posts only (id >= 11), same category first
  const centiencePosts = blogPosts.filter((p) => p.id >= 11 && p.id !== post.id);
  const relatedPosts = [
    ...centiencePosts.filter((p) => p.category === post.category),
    ...centiencePosts.filter((p) => p.category !== post.category),
  ].slice(0, 3);

  // Extract key topics from title and excerpt for KeyFacts
  const extractKeyTopics = () => {
    const topics: string[] = [];
    const text = `${post.title} ${post.excerpt}`.toLowerCase();
    
    if (text.includes('sec') || text.includes('finra')) topics.push('SEC/FINRA Compliance');
    if (text.includes('hipaa')) topics.push('HIPAA Compliance');
    if (text.includes('cybersecurity') || text.includes('security')) topics.push('Cybersecurity');
    if (text.includes('managed it')) topics.push('Managed IT Services');
    if (text.includes('cloud')) topics.push('Cloud Solutions');
    if (text.includes('financial')) topics.push('Financial Services');
    if (text.includes('healthcare') || text.includes('medical')) topics.push('Healthcare IT');
    if (text.includes('legal') || text.includes('law firm')) topics.push('Legal IT');
    if (text.includes('ai') || text.includes('artificial intelligence')) topics.push('AI Governance');
    if (text.includes('disaster recovery') || text.includes('backup')) topics.push('Disaster Recovery');
    
    return topics.length > 0 ? topics : [post.category];
  };

  // Use custom meta title/description if available, otherwise fall back to defaults
  const seoTitle = post.metaTitle || post.title;
  const seoDescription = post.metaDescription || post.excerpt;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonical={`/insights/${post.slug}`}
        type="article"
        image={getSrc(post.image)}
        keywords={[
          post.category.toLowerCase(),
          'IT security',
          'compliance',
          'cybersecurity insights',
        ]}
        article={{
          author: post.author,
          section: post.category,
          publishedTime: (() => {
            // Convert "Month YYYY" format to ISO 8601 date string
            const months: Record<string, string> = {
              'January': '01', 'February': '02', 'March': '03', 'April': '04',
              'May': '05', 'June': '06', 'July': '07', 'August': '08',
              'September': '09', 'October': '10', 'November': '11', 'December': '12'
            };
            const parts = post.date.split(' ');
            if (parts.length === 2 && months[parts[0]]) {
              return `${parts[1]}-${months[parts[0]]}-01T00:00:00Z`;
            }
            return undefined;
          })(),
        }}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/insights' },
          { name: post.title, url: `/insights/${post.slug}` },
        ]}
        faq={(() => {
          // Extract FAQ items from [FAQ_ACCORDION] tags in blog content
          const faqRegex = /\[FAQ_ACCORDION\]([\s\S]*?)\[\/FAQ_ACCORDION\]/g;
          const allFaqItems: Array<{ question: string; answer: string }> = [];
          let match;
          while ((match = faqRegex.exec(post.content)) !== null) {
            match[1].trim().split('\n').filter(l => l.trim()).forEach(line => {
              const [question, ...answerParts] = line.split('|');
              if (question && answerParts.length) {
                allFaqItems.push({ question: question.trim(), answer: answerParts.join('|').trim() });
              }
            });
          }
          return allFaqItems.length > 0 ? allFaqItems : undefined;
        })()}
      />
      
      {/* Semantic Key Facts for AI Search Engines */}
      <KeyFacts
        entityName={post.title}
        entityType="Article"
        description={post.excerpt}
        facts={[
          { label: "Author", value: post.author },
          { label: "Category", value: post.category },
          { label: "Topics", value: extractKeyTopics().join(", ") },
          { label: "Publisher", value: "Centience" },
          { label: "Target Audience", value: "IT Professionals, Compliance Officers, Business Leaders" },
        ]}
        services={extractKeyTopics()}
        contactInfo={{
          phone: "(877) 945-7177",
          email: "info@centience.ai",
          website: `https://centience.ai/insights/${post.slug}`,
        }}
      />

      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>

          <AnimatedSection className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold/10 text-gold text-sm font-semibold rounded-full">
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8">{post.excerpt}</p>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-gold" />
              </div>
              <span className="text-foreground font-medium">{post.author}</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <img
                src={getSrc(post.image)}
                alt={post.slug === 'top-6-managed-it-providers-west-palm-beach-financial-services'
                  ? 'an image showing Compuwork IT specialists providing managed IT services for financial firms in West Palm Beach, ensuring audit-ready compliance and cybersecurity.'
                  : post.slug === 'top-managed-it-firms-in-west-palm-beach-for-wealth-management-firms' 
                  ? 'Top Managed IT Firms in West Palm Beach for Wealth Management Firms - Skyline view of West Palm Beach with Compuwork logo.'
                   : post.slug === 'managed-it-services-in-boca-raton-for-hedge-funds'
                   ? 'Top 5 Managed IT Providers in Boca Raton for Hedge Funds – Professional financial analysis and technology support for Florida investment firms.'
                  : post.slug === 'disaster-recovery-financial-firms'
                  ? 'Compuwork guide on disaster recovery for financial firms, featuring icons for cloud security and data protection over a server room background.'
                   : post.slug === 'it-compliance-services-florida'
                   ? 'a professional working in one of the best Managed IT Services in USA explaining about IT compliance Services in Florida'
                   : post.slug === 'top-5-cybersecurity-companies-in-florida'
                   ? 'Digital padlock on a circuit board representing the top 5 cybersecurity companies in Florida'
                   : post.slug === 'managed-it-providers-miami-private-equity-firms'
                   ? 'Person in a suit holding a spiral notebook labeled Equity Financing, featuring the title: Top 4 Managed IT Providers in Miami for Private Equity Firms.'
                   : post.slug === 'top-managed-it-providers-florida-private-equity-firms'
                   ? 'Top Managed IT Providers in Florida for Private Equity Firms – Compliance-first cybersecurity and governance-ready IT services.'
                   : post.title}
                className="w-full aspect-video object-cover rounded-2xl shadow-xl"
                loading="lazy"
                decoding="async"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <article className="max-w-4xl mx-auto prose prose-lg prose-slate dark:prose-invert prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-gold hover:prose-a:text-gold-light prose-li:text-muted-foreground">
              {(() => {
                // Extract FAQ accordion sections and render them as React components
                const faqRegex = /\[FAQ_ACCORDION\]([\s\S]*?)\[\/FAQ_ACCORDION\]/g;
                const parts: { type: 'html' | 'faq'; content: string }[] = [];
                let lastIndex = 0;
                let faqMatch;
                const rawContent = post.content;

                while ((faqMatch = faqRegex.exec(rawContent)) !== null) {
                  if (faqMatch.index > lastIndex) {
                    parts.push({ type: 'html', content: rawContent.slice(lastIndex, faqMatch.index) });
                  }
                  parts.push({ type: 'faq', content: faqMatch[1] });
                  lastIndex = faqMatch.index + faqMatch[0].length;
                }
                if (lastIndex < rawContent.length) {
                  parts.push({ type: 'html', content: rawContent.slice(lastIndex) });
                }

                const processHtml = (text: string) => text
                  .replace(/\[TOC\]([\s\S]*?)\[\/TOC\]/g, (_match, tocContent) => {
                    const items = tocContent.trim().split('\n').filter((line: string) => line.trim().startsWith('-'));
                    let tocHtml = '<nav class="my-10 relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card via-card to-primary/5 shadow-lg" aria-label="Table of Contents" itemscope itemtype="http://schema.org/SiteNavigationElement">';
                    tocHtml += '<div class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold via-gold/60 to-transparent rounded-l-2xl"></div>';
                    tocHtml += '<div class="p-7 pl-8">';
                    tocHtml += '<p class="text-xl font-bold text-foreground mb-5 flex items-center gap-3"><span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gold/10 text-gold text-sm">📋</span>Table of Contents</p>';
                    tocHtml += '<ul class="space-y-3 list-none ml-0 pl-0">';
                    items.forEach((item: string, idx: number) => {
                      const linkMatch = item.match(/\[([^\]]+)\]\(([^)]+)\)/);
                      if (linkMatch) {
                        tocHtml += `<li class="ml-0 pl-0 flex items-start gap-3 group"><span class="inline-flex items-center justify-center min-w-[24px] h-6 rounded-full bg-gold/10 text-gold text-xs font-bold mt-0.5">${idx + 1}</span><a href="${linkMatch[2]}" class="text-muted-foreground hover:text-gold no-underline hover:no-underline transition-colors duration-200 text-[15px] leading-relaxed">${linkMatch[1]}</a></li>`;
                      }
                    });
                    tocHtml += '</ul></div></nav>';
                    return tocHtml;
                  })
                  .replace(/\[FIRM_IMAGE:(.*?)\]/g, (_match, firmKey) => {
                    const firmData = firmImages[firmKey.trim()];
                    if (firmData) {
                      return `<div class="my-8 flex justify-center"><img src="${getSrc(firmData.src)}" alt="${firmData.alt}" class="w-full max-h-[400px] object-cover object-top rounded-xl shadow-lg border border-border" loading="lazy" /></div>`;
                    }
                    return '';
                  })
                  .replace(/\[COMPARISON_TABLE\]([\s\S]*?)\[\/COMPARISON_TABLE\]/g, (_match, tableContent) => {
                    const lines = tableContent.trim().split('\n').filter((line: string) => line.trim());
                    if (lines.length < 2) return '';
                    const headerCells = lines[0].split('|').filter((cell: string) => cell.trim()).map((cell: string) => cell.trim());
                    const dataRows = lines.slice(2);
                    let tableHtml = '<div class="my-10 overflow-x-auto"><table class="w-full text-sm border-collapse border border-border rounded-lg overflow-hidden">';
                    tableHtml += '<thead class="bg-primary/10"><tr>';
                    headerCells.forEach((cell: string) => {
                      tableHtml += `<th class="px-4 py-3 text-left font-semibold text-foreground border-b border-border whitespace-nowrap">${cell}</th>`;
                    });
                    tableHtml += '</tr></thead><tbody>';
                    dataRows.forEach((row: string, index: number) => {
                      const cells = row.split('|').filter((cell: string) => cell.trim()).map((cell: string) => cell.trim());
                      const bgClass = index % 2 === 0 ? 'bg-card' : 'bg-muted/30';
                      const isCompuwork = cells[0]?.toLowerCase().includes('compuwork');
                      const rowClass = isCompuwork ? 'bg-gold/10 font-medium' : bgClass;
                      tableHtml += `<tr class="${rowClass}">`;
                      cells.forEach((cell: string, cellIndex: number) => {
                        const cellClass = cellIndex === 0 ? 'font-medium text-foreground' : 'text-muted-foreground';
                        tableHtml += `<td class="px-4 py-3 border-b border-border ${cellClass}">${cell}</td>`;
                      });
                      tableHtml += '</tr>';
                    });
                    tableHtml += '</tbody></table></div>';
                    return tableHtml;
                  })
                  .replace(/^## (.*$)/gim, (_m: string, heading: string) => {
                    const id = heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                    return `<h2 id="${id}" class="text-2xl font-bold mt-10 mb-4 scroll-mt-24">${heading}</h2>`;
                  })
                  .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-8 mb-3">$1</h3>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-gold hover:text-gold-light underline">$1</a>')
                  .replace(/^- (.*$)/gim, '<li class="ml-4">$1</li>')
                  .replace(/^(\d+)\. (.*$)/gim, '<li class="ml-4"><strong>$1.</strong> $2</li>')
                  .replace(/\[CTA_BOX\]([\s\S]*?)\[\/CTA_BOX\]/g, '<div style="max-width:48rem;margin:2.5rem auto;padding:2rem;background:linear-gradient(135deg,#fffbeb,#fef3c7);border-radius:1rem;box-shadow:0 4px 20px rgba(0,0,0,0.08);text-align:center;border:1px solid rgba(245,158,11,0.3);">$1</div>')
                  .replace(/\[CTA_BUTTON:(.*?)\|(.*?)\]/g, '<a href="$2" style="display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:12px 28px;background:linear-gradient(to right,#f97316,#f59e0b);color:#ffffff;font-weight:600;border-radius:9999px;box-shadow:0 4px 15px rgba(249,115,22,0.4);text-decoration:none;font-size:1rem;transition:all 0.3s ease;">$1</a>')
                  .replace(/\[PRO_TIP\]([\s\S]*?)\[\/PRO_TIP\]/g, '<div class="my-8 p-6 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-xl"><p class="text-sm font-bold text-blue-700 dark:text-blue-400 mb-2 uppercase tracking-wide">💡 Pro Tip</p><div class="text-muted-foreground">$1</div></div>')
                  .replace(/\[CALLOUT:(.*?)\]([\s\S]*?)\[\/CALLOUT\]/g, (_m: string, label: string, body: string) => {
                    const icons: Record<string,string> = { warning: '⚠️', key: '🔑', important: '📌', rule: '⚖️', stat: '📊', penalty: '🚨', action: '✅' };
                    const icon = icons[label.toLowerCase()] || '📌';
                    return `<div class="my-8 p-6 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 rounded-r-xl"><p class="text-sm font-bold text-amber-700 dark:text-amber-400 mb-2 uppercase tracking-wide">${icon} ${label}</p><div class="text-muted-foreground">${body.trim()}</div></div>`;
                  })
                  .replace(/\[STAT_CARDS\]([\s\S]*?)\[\/STAT_CARDS\]/g, (_m: string, content: string) => {
                    const cards = content.trim().split('\n').filter((l: string) => l.includes('|'));
                    const cardHtml = cards.map((card: string) => {
                      const [stat, label, sub] = card.split('|').map((s: string) => s.trim());
                      return `<div class="p-5 bg-card border border-border rounded-2xl text-center shadow-sm"><p class="text-3xl font-bold text-gold mb-1">${stat}</p><p class="font-semibold text-foreground text-sm mb-1">${label}</p>${sub ? `<p class="text-xs text-muted-foreground">${sub}</p>` : ''}</div>`;
                    }).join('');
                    return `<div class="my-10 grid grid-cols-2 md:grid-cols-4 gap-4 not-prose">${cardHtml}</div>`;
                  })
                  .replace(/\[TIMELINE\]([\s\S]*?)\[\/TIMELINE\]/g, (_m: string, content: string) => {
                    const steps = content.trim().split('\n').filter((l: string) => l.includes('|'));
                    const total = steps.length;
                    const stepHtml = steps.map((step: string, idx: number) => {
                      const [title, desc] = step.split('|').map((s: string) => s.trim());
                      const connector = idx < total - 1 ? '<div class="w-0.5 bg-border flex-1 my-1 min-h-[1.5rem]"></div>' : '';
                      return `<div class="flex gap-4"><div class="flex flex-col items-center"><div class="w-8 h-8 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center text-gold font-bold text-sm flex-shrink-0">${idx + 1}</div>${connector}</div><div class="pb-6"><p class="font-semibold text-foreground mb-1">${title}</p><p class="text-sm text-muted-foreground">${desc}</p></div></div>`;
                    }).join('');
                    return `<div class="my-10 p-6 bg-card border border-border rounded-2xl not-prose"><div class="space-y-0">${stepHtml}</div></div>`;
                  })
                  .replace(/\[RELATED_SERVICE:(.*?)\|(.*?)\|(.*?)\]/g, '<div class="my-8 p-5 bg-gold/5 border border-gold/20 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"><div><p class="font-bold text-foreground mb-1">🔗 Related Service: $1</p><p class="text-sm text-muted-foreground mb-0">$2</p></div><a href="$3" class="inline-flex items-center gap-1 px-4 py-2 bg-gold/10 text-gold font-semibold rounded-lg hover:bg-gold/20 transition-colors no-underline text-sm whitespace-nowrap">Learn More →</a></div>')
                  .replace(/\[YOUTUBE:(.*?)\|(.*?)\]/g, '<div class="my-10"><div class="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-border"><iframe src="$1" title="$2" class="absolute inset-0 w-full h-full" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div></div>')
                  .replace(/\n\n/g, '</p><p class="mb-4">')
                  .replace(/^(?!<[hlu])/gim, '<p class="mb-4">');

                // Find the index of the first FAQ part to insert author card before it
                const faqIndex = parts.findIndex(p => p.type === 'faq');
                const authorCardIndex = faqIndex !== -1 ? faqIndex : parts.length;

                return parts.map((part, i) => {
                  const elements: React.ReactNode[] = [];
                  if (i === authorCardIndex) {
                    elements.push(<BlogAuthorCard key="author-card" />);
                  }
                  if (part.type === 'faq') {
                    const faqItems = part.content.trim().split('\n').filter(l => l.trim()).map(line => {
                      const [question, ...answerParts] = line.split('|');
                      return { question: question.trim(), answer: answerParts.join('|').trim() };
                    });
                    elements.push(<BlogFAQAccordion key={`faq-${i}`} items={faqItems} />);
                  } else {
                    elements.push(<div key={`html-${i}`} dangerouslySetInnerHTML={{ __html: processHtml(part.content) }} />);
                  }
                  // If no FAQ exists and this is the last part, add author card after content
                  if (faqIndex === -1 && i === parts.length - 1) {
                    elements.push(<BlogAuthorCard key="author-card" />);
                  }
                  return elements;
                });
              })()}
            </article>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-primary-foreground mb-4">
              Ready to Build a Defensible Governance Program?
            </h2>
            <p className="text-primary-foreground/70 mb-8">
              Centience delivers AI and technology governance built on managed infrastructure — enforceable, not just documented.
            </p>
            <Button variant="gold" size="lg" className="shadow-gold" asChild>
              <Link href="/ai-governance-risk-assessment">
                Book Your AI Governance Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold font-display text-foreground">
                Related <span className="text-gradient-gold">Articles</span>
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <AnimatedSection key={relatedPost.id} delay={index * 0.1}>
                  <motion.div whileHover={{ y: -8 }}>
                    <Link
                      href={`/insights/${relatedPost.slug}`}
                      className="block bg-card border border-border rounded-2xl overflow-hidden group h-full"
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={getSrc(relatedPost.image)}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-gold transition-colors">
                          {relatedPost.title}
                        </h3>
                        <div className="flex items-center text-gold font-medium text-sm">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogPostPage;
