import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import { buildBreadcrumbSchema } from '@/lib/landingSchema';

export const metadata: Metadata = {
  title: "AI Governance Locations | Centience",
  description: "Continuous AI and technology governance for regulated organizations across New York, Connecticut, and South Florida.",
  alternates: {
    canonical: "https://centience.ai/locations",
  },
  openGraph: {
    title: "AI Governance Locations | Centience",
    description: "Continuous AI and technology governance for regulated organizations across New York, Connecticut, and South Florida.",
    url: "https://centience.ai/locations",
    type: 'website',
    siteName: 'Centience',
  },
};

const locations = [
  { slug: "ai-governance-new-york", city: "New York City", state: "NY", desc: "SEC, FINRA, HIPAA compliance for broker-dealers, RIAs, healthcare, and law firms." },
  { slug: "ai-governance-greenwich-ct", city: "Greenwich", state: "CT", desc: "Governance for hedge funds, family offices, and RIAs in Fairfield County." },
  { slug: "ai-governance-miami", city: "Miami", state: "FL", desc: "SEC, FINRA, HIPAA compliance for Brickell, Coral Gables, and South Florida." },
];

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '' },
  { name: 'Locations', path: '/locations' },
]);

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: locations.map((loc, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${loc.city}, ${loc.state}`,
    url: `https://centience.ai/locations/${loc.slug}`,
  })),
};

export default function LocationsPage() {
  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <section className="section-navy py-24 lg:py-32">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <MapPin size={16} className="text-gold" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Service Areas</p>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6">
              Serving Regulated Organizations Across New York, Connecticut, and South Florida
            </h1>
            <p className="text-lg opacity-80 leading-relaxed">
              Centience delivers continuous AI and technology governance programs for regulated organizations across the Tri-State area and South Florida.
            </p>
          </div>
        </div>
      </section>
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <Link key={loc.slug} href={`/locations/${loc.slug}`} className="card-premium p-6 block hover:border-accent/50 transition-colors group">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={14} className="text-accent" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{loc.state}</span>
                </div>
                <h2 className="font-display font-bold text-primary mb-2 group-hover:text-accent transition-colors">{loc.city}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{loc.desc}</p>
                <span className="text-accent text-sm font-medium flex items-center gap-1">Learn more <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
