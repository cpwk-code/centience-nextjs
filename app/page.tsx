import type { Metadata } from 'next';
import { getCMSSEO, mergeSEO } from '@/lib/cms-seo';
import KeyFacts from '@/components/KeyFacts';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
import About from '@/components/About';
import CTA from '@/components/CTA';
import LocationsSection from '@/components/LocationsSection';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export async function generateMetadata(): Promise<Metadata> {
  // ── CMS Override: fetch from Supabase admin panel ──────────────────────
  const cms = await getCMSSEO('/');
  // ── Lovable defaults ──────────────────────────────────────────────────
  const base = mergeSEO({
    title: 'Managed IT & Cybersecurity for Financial Firms',
    description: 'Compliance-first managed IT & cybersecurity for finance, legal, and healthcare. 24/7 expert support in NY & FL. SEC, FINRA, HIPAA compliant. Contact us today!',
    canonical: '/',
    keywords: ['managed IT services USA', 'IT support financial services', 'HIPAA compliant IT', 'SEC FINRA IT compliance', 'law firm IT services', 'healthcare IT support', 'cybersecurity services', '24/7 IT support', 'CMMC compliance IT', 'SOC 2 compliant IT', 'financial services cybersecurity', 'legal IT compliance'],
  }, cms);
  return {
    ...base,
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://centience.ai/#organization",
  "name": "Centience",
  "legalName": "Centience LLC",
  "url": "https://centience.ai",
  "logo": {
    "@type": "ImageObject",
    "url": "https://centience.ai/favicon.png",
    "width": 512,
    "height": 512
  },
  "description": "Centience delivers compliance-first managed IT and cybersecurity services for financial services, legal, and healthcare organizations. Specializing in SEC, FINRA, HIPAA, SOC 2, and CMMC compliance.",
  "foundingDate": "2005",
  "telephone": "+1-800-CENTIENCE",
  "email": "info@centience.ai",
  "address": [
    {
      "@type": "PostalAddress",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "addressCountry": "US"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Boca Raton",
      "addressRegion": "FL",
      "addressCountry": "US"
    }
  ],
  "areaServed": [
    { "@type": "State", "name": "New York" },
    { "@type": "State", "name": "Florida" }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/centience",
    "https://centience.ai"
  ],
  "knowsAbout": [
    "Managed IT Services",
    "Cybersecurity",
    "SEC Compliance",
    "FINRA Compliance",
    "HIPAA Compliance",
    "SOC 2 Compliance",
    "CMMC Compliance",
    "Cloud Solutions",
    "Disaster Recovery",
    "IT Help Desk"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Centience IT Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Managed IT Services" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cybersecurity Services" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "GRC & Compliance Services" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cloud Solutions" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Disaster Recovery" } }
    ]
  }
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://centience.ai/#webpage",
  "name": "Centience – Managed IT & Cybersecurity for Finance, Legal & Healthcare",
  "description": "Centience offers compliance-focused managed IT and cybersecurity services for financial, legal, healthcare, and professional sectors, ensuring SEC, FINRA, HIPAA, SOC 2, and CMMC compliance with 24/7 support.",
  "url": "https://centience.ai",
  "isPartOf": { "@id": "https://centience.ai/#website" },
  "about": { "@id": "https://centience.ai/#organization" },
  "publisher": { "@id": "https://centience.ai/#organization" }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://centience.ai/#website",
  "name": "Centience",
  "url": "https://centience.ai",
  "publisher": { "@id": "https://centience.ai/#organization" },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://centience.ai/blog?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What industries does Centience specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Centience specializes in managed IT and cybersecurity services for financial services (hedge funds, RIAs, broker-dealers), legal firms, healthcare organizations, and professional services companies."
      }
    },
    {
      "@type": "Question",
      "name": "How does Centience ensure regulatory compliance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide compliance-first IT solutions tailored to meet SEC, FINRA, HIPAA, SOC 2, CMMC, and NYDFS requirements, including audit preparation, policy documentation, and continuous monitoring."
      }
    },
    {
      "@type": "Question",
      "name": "Is 24/7 IT support available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Centience offers 24/7/365 expert IT support to ensure your systems are secure and operational at all times, with rapid response times for critical issues."
      }
    },
    {
      "@type": "Question",
      "name": "Where are Centience's offices located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Centience has offices in New York and Florida (Boca Raton) to serve clients across the Northeast and Southeast United States."
      }
    },
    {
      "@type": "Question",
      "name": "What cybersecurity services does Centience provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer comprehensive cybersecurity services including 24/7 threat monitoring (MSSP/SOC), incident response, vulnerability management, dark web monitoring, multi-factor authentication, and risk management tailored to your industry's compliance needs."
      }
    }
  ]
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <KeyFacts
        entityName="Centience"
        entityType="ProfessionalService"
        description="Centience delivers compliance-first managed IT and cybersecurity services focused on financial, legal, and healthcare industries with expert 24/7 support."
        facts={[
      {
            "label": "Founded",
            "value": "2005"
      },
      {
            "label": "Compliance Specialties",
            "value": "SEC, FINRA, HIPAA, SOC 2, CMMC"
      },
      {
            "label": "Locations",
            "value": "New York, Florida"
      },
      {
            "label": "Support",
            "value": "24/7 IT and cybersecurity support"
      }
]}
        services={["Managed IT Services", "Cybersecurity Solutions", "Compliance Consulting", "24/7 IT Support"]}
        contactInfo={{
          phone: '+1-800-CENTIENCE',
          website: 'https://centience.ai',
        }}
      />
      <Header />
      <Hero />
      <Services />
      <Industries />
      <About />
      <CTA />
      <LocationsSection />
      <FAQ />
      <Footer />
    </div>
  );
}
