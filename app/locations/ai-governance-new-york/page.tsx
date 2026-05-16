import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: "AI Governance New York City | Centience — Continuous Technology Governance",
  description: "Continuous AI and technology governance for regulated organizations in New York City, Manhattan, and the Tri-State area. SEC, FINRA, and HIPAA compliance. Serving broker-dealers, RIAs, healthcare, law firms, and private equity.",
  keywords: ["AI governance New York", "technology governance NYC", "SEC FINRA compliance New York", "HIPAA compliance New York", "cybersecurity governance Manhattan", "managed IT governance New York City"],
  alternates: {
    canonical: "https://centience.ai/locations/ai-governance-new-york",
  },
  openGraph: {
    title: "AI Governance New York City | Centience — Continuous Technology Governance",
    description: "Continuous AI and technology governance for regulated organizations in New York City, Manhattan, and the Tri-State area. SEC, FINRA, and HIPAA compliance. Serving broker-dealers, RIAs, healthcare, law firms, and private equity.",
    url: "https://centience.ai/locations/ai-governance-new-york",
    type: 'website',
    siteName: 'Centience',
    images: [{ url: "https://centience.ai/og-image.png", width: 1200, height: 630, alt: "AI Governance New York City | Centience — Continuous Technology Governance" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Governance New York City | Centience — Continuous Technology Governance",
    description: "Continuous AI and technology governance for regulated organizations in New York City, Manhattan, and the Tri-State area. SEC, FINRA, and HIPAA compliance. Serving broker-dealers, RIAs, healthcare, law firms, and private equity.",
    images: ["https://centience.ai/og-image.png"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Centience \u2014 New York City",
  "url": "https://centience.ai/locations/ai-governance-new-york",
  "telephone": "+18779457177",
  "email": "hello@centience.ai",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "New York",
    "addressRegion": "NY",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.7614,
    "longitude": -73.9776
  },
  "serviceArea": [
    "Manhattan",
    "Midtown",
    "Financial District",
    "Westchester County",
    "White Plains NY",
    "Greenwich CT",
    "Stamford CT",
    "Westport CT",
    "Norwalk CT"
  ],
  "provider": {
    "@id": "https://centience.ai/#organization"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://centience.ai"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Locations",
      "item": "https://centience.ai/locations"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "New York City",
      "item": "https://centience.ai/locations/ai-governance-new-york"
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Layout>
        {/* Hero */}
        <section className="section-navy relative overflow-hidden py-24 lg:py-32">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-6">
                <MapPin size={16} className="text-gold" />
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">New York City, NY</p>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6">
                AI & Technology Governance for New York Regulated Organizations
              </h1>
              <p className="text-lg opacity-80 leading-relaxed mb-8">
                Centience delivers continuous AI and technology governance programs for broker-dealers, RIAs, healthcare organizations, law firms, and private equity firms in New York City and the Tri-State area.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="cta" size="lg" asChild>
                  <Link href="/ai-governance-risk-assessment">Schedule a Governance Assessment <ArrowRight size={16} /></Link>
                </Button>
                <Button variant="outline" size="lg" className="text-white border-white/40 hover:bg-white/10" asChild>
                  <a href="tel:+18779457177">(877) 945-7177</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6 leading-tight">
                  Continuous Governance — Not a One-Time Engagement
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Centience builds and operates continuous AI and technology governance programs for regulated organizations in New York City. We combine managed infrastructure, cybersecurity oversight, and AI governance into a single continuously enforced model.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Governance is not a project with an end date. It is an operational function that runs continuously — collecting evidence, enforcing controls, and maintaining the documentation regulators expect to find when they arrive.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our clients in New York have maintained a 100% audit success rate across all regulatory examinations. That result comes from governance that is technically enforced — not written in a policy document filed in a drawer.
                </p>
                <blockquote className="border-l-4 border-accent pl-6 py-3 bg-card rounded-r-lg">
                  <p className="text-primary italic text-sm leading-relaxed mb-2">
                    "Regulators are not asking whether you have an AI policy. They are asking whether your AI is governed. Those are not the same question."
                  </p>
                  <cite className="text-xs text-muted-foreground not-italic font-semibold">— Orville Matias, Founder & CEO</cite>
                </blockquote>
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-primary mb-4">Industries We Serve in New York</h3>
                <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 size={14} className="text-accent shrink-0" />Broker-Dealers & RIAs</li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 size={14} className="text-accent shrink-0" />Healthcare Organizations</li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 size={14} className="text-accent shrink-0" />Law Firms</li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 size={14} className="text-accent shrink-0" />Private Equity Firms</li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 size={14} className="text-accent shrink-0" />Accounting & CPA Firms</li>
                </ul>
                <h3 className="text-lg font-display font-bold text-primary mb-4">Regulatory Frameworks</h3>
                <div className="flex flex-wrap gap-2 mb-8">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">SEC</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">FINRA</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">HIPAA/OCR</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/20">NYDFS</span>
                </div>
                <h3 className="text-lg font-display font-bold text-primary mb-3">Service Area</h3>
                <div className="flex flex-wrap gap-2">
              <span className="text-sm text-muted-foreground">Manhattan</span>
              <span className="text-sm text-muted-foreground">Midtown</span>
              <span className="text-sm text-muted-foreground">Financial District</span>
              <span className="text-sm text-muted-foreground">Westchester County</span>
              <span className="text-sm text-muted-foreground">White Plains NY</span>
              <span className="text-sm text-muted-foreground">Greenwich CT</span>
              <span className="text-sm text-muted-foreground">Stamford CT</span>
              <span className="text-sm text-muted-foreground">Westport CT</span>
              <span className="text-sm text-muted-foreground">Norwalk CT</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Three Programs */}
        <section className="py-24 lg:py-32 bg-muted">
          <div className="container mx-auto">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-5 leading-tight">
                Three Governance Programs. One Continuously Enforced Model.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Centience delivers three interconnected governance programs that work together — each reinforcing the others.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/governance" className="card-premium p-6 block hover:border-accent/50 transition-colors group">
                <h3 className="font-display font-bold text-primary mb-2 group-hover:text-accent transition-colors">Technology Governance</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Continuous GRC — policies, controls, evidence collection, and examination readiness. Technically enforced, not just documented.</p>
              </Link>
              <Link href="/ai-governance" className="card-premium p-6 block hover:border-accent/50 transition-colors group">
                <h3 className="font-display font-bold text-primary mb-2 group-hover:text-accent transition-colors">AI Governance</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Continuous AI oversight — model monitoring, policy enforcement, vendor diligence, and audit-ready documentation for every AI tool in use.</p>
              </Link>
              <Link href="/cybersecurity" className="card-premium p-6 block hover:border-accent/50 transition-colors group">
                <h3 className="font-display font-bold text-primary mb-2 group-hover:text-accent transition-colors">Cybersecurity Governance</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Continuous cybersecurity oversight — vulnerability management, incident response, and examination-ready evidence that holds up under regulatory scrutiny.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-navy py-20 lg:py-28">
          <div className="container mx-auto text-center max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-5">
              Start With a Governance Assessment. No Commitment Required.
            </h2>
            <p className="text-lg opacity-70 mb-8">
              Our governance assessment identifies gaps across your infrastructure, cybersecurity posture, and AI environment — and delivers a prioritized roadmap within 5 business days.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm">
              <span className="flex items-center gap-2 opacity-80"><CheckCircle2 size={16} className="text-accent" /> No commitment required</span>
              <span className="flex items-center gap-2 opacity-80"><CheckCircle2 size={16} className="text-accent" /> Results within 5 business days</span>
              <span className="flex items-center gap-2 opacity-80"><CheckCircle2 size={16} className="text-accent" /> 100% audit success rate</span>
            </div>
            <Button variant="cta" size="xl" asChild>
              <Link href="/ai-governance-risk-assessment">Schedule Your Governance Assessment <ArrowRight size={16} /></Link>
            </Button>
            <p className="text-sm opacity-50 mt-5">
              Or call us directly:{" "}
              <a href="tel:+18779457177" className="text-gold hover:text-gold/80 transition-colors font-semibold">
                (877) 945-7177
              </a>
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
}
