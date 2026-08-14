import Link from 'next/link';
import { CheckCircle2, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import type { Region } from '@/data/regions';

/**
 * One component behind every regional page.
 *
 * The nine city pages this replaced were roughly 440 words each and shared 78%
 * of their text, which is the shape Google's spam policy describes as doorway
 * pages. Driving each region from a single component forces the difference
 * between them to live in the content rather than in near-identical markup —
 * if a region has nothing distinct to say, that is now obvious when writing it.
 */
const RegionalGovernancePage = ({ region }: { region: Region }) => {
  const url = `https://centience.ai/locations/${region.slug}`;

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `Centience — ${region.label}`,
    url,
    telephone: '+18779457177',
    email: 'hello@centience.ai',
    address: {
      '@type': 'PostalAddress',
      addressLocality: region.addressLocality,
      addressRegion: region.addressRegion,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: region.latitude,
      longitude: region.longitude,
    },
    areaServed: [region.addressLocality, ...region.alsoServing].map((name) => ({
      '@type': 'Place',
      name,
    })),
    parentOrganization: { '@id': 'https://centience.ai/#organization' },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://centience.ai' },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://centience.ai/locations' },
      { '@type': 'ListItem', position: 3, name: region.label, item: url },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: region.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Layout>
        {/* Hero */}
        <section className="section-navy relative overflow-hidden py-24 lg:py-32">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-6">
                <MapPin size={16} className="text-gold" />
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">{region.name}</p>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6">
                {region.h1}
              </h1>
              <p className="text-lg opacity-80 leading-relaxed mb-8">{region.intro}</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="cta" size="lg" asChild>
                  <Link href="/assessments/governance-score">
                    Get Your Free Governance Score <ArrowRight size={16} />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/5 text-white border-white/40 hover:bg-white/15 hover:text-white"
                  asChild
                >
                  <a href="tel:+18779457177">(877) 945-7177</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* The regional hook — the reason this page exists separately */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="gold-line" />
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">{region.hookEyebrow}</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6 leading-tight">
                {region.hookHeading}
              </h2>
              {region.hookBody.map((p) => (
                <p key={p.slice(0, 40)} className="text-muted-foreground leading-relaxed mb-4">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Supporting sections */}
        {region.sections.map((s, i) => (
          <section key={s.heading} className={`py-20 lg:py-24 ${i % 2 === 0 ? 'bg-muted' : 'bg-background'}`}>
            <div className="container mx-auto">
              <div className="max-w-3xl">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-5 leading-tight">
                  {s.heading}
                </h2>
                {s.body.map((p) => (
                  <p key={p.slice(0, 40)} className="text-muted-foreground leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Areas served */}
        <section className="py-16 bg-background border-t border-border">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <h2 className="text-xl font-display font-semibold text-primary mb-5">Serving {region.name}</h2>
              <div className="flex flex-wrap gap-2">
                {[region.addressLocality, ...region.alsoServing].map((place) => (
                  <span
                    key={place}
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground bg-muted rounded-full px-3 py-1.5"
                  >
                    <CheckCircle2 size={13} className="text-accent" />
                    {place}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 lg:py-24 bg-muted">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-8 leading-tight">
                Questions we get from {region.label} firms
              </h2>
              <div className="space-y-4">
                {region.faqs.map((f) => (
                  <details key={f.question} className="group bg-background border border-border rounded-xl p-6">
                    <summary className="flex items-start gap-3 cursor-pointer list-none font-semibold text-primary">
                      <span className="text-accent shrink-0 mt-0.5 transition-transform duration-200 group-open:rotate-45 text-xl leading-none">
                        +
                      </span>
                      {f.question}
                    </summary>
                    <p className="text-muted-foreground leading-relaxed mt-4 pl-8">{f.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-navy py-20 lg:py-24">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-6">
                <ShieldCheck size={22} className="text-gold" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-5 leading-tight">
                Know where you stand before someone asks
              </h2>
              <p className="opacity-70 leading-relaxed mb-8 max-w-2xl">
                The Governance Score is a free five-minute self-assessment across cybersecurity, data and records,
                supervision, infrastructure and AI governance. You get a 0–100 result and see which areas need
                attention. No call required.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="cta" size="lg" asChild>
                  <Link href="/assessments/governance-score">
                    Get Your Free Governance Score <ArrowRight size={16} />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/5 text-white border-white/40 hover:bg-white/15 hover:text-white"
                  asChild
                >
                  <Link href="/contact">Talk to us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default RegionalGovernancePage;
