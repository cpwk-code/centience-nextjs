"use client";
'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Landmark, Scale, Heart, Building2, ArrowLeft, CheckCircle2, ArrowRight, Shield, Loader2, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { useCMSIndustries } from "@/hooks/useCMS";

// Icon mapping for CMS icon names
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Landmark,
  Scale,
  Heart,
  Building2,
  HandHeart,
};

// Default fallback data
const defaultIndustriesData: Record<string, {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  frameworks: string[];
  challenges: string[];
  solutions: { title: string; desc: string }[];
  color: string;
}> = {
  "financial-services": {
    icon: "Landmark",
    title: "Financial Services",
    subtitle: "Audit-ready IT for broker-dealers, RIAs, and investment firms",
    description: "We understand the unique regulatory challenges facing financial services firms. Our IT solutions are designed from the ground up to meet SEC, FINRA, and SOX requirements.",
    frameworks: ["SEC", "FINRA", "SOX", "SIPC"],
    challenges: [
      "SEC and FINRA examination readiness",
      "Books and records retention requirements",
      "Cybersecurity risk assessments",
      "Business continuity planning",
      "Vendor due diligence",
      "Email archiving and supervision",
    ],
    solutions: [
      { title: "Compliance Documentation", desc: "Policies and procedures that satisfy regulators" },
      { title: "Secure Communications", desc: "Encrypted email and messaging with archiving" },
      { title: "Audit Trail", desc: "Complete logging for regulatory review" },
    ],
    color: "bg-amber-500",
  },
  "legal": {
    icon: "Scale",
    title: "Legal",
    subtitle: "Protecting client confidentiality and privileged communications",
    description: "Law firms handle sensitive client information daily. We provide IT infrastructure that maintains attorney-client privilege while enabling modern, efficient practice.",
    frameworks: ["ABA Guidelines", "State Bar Rules", "Client Confidentiality"],
    challenges: [
      "Protecting privileged communications",
      "Secure client document management",
      "Remote work security",
      "eDiscovery readiness",
      "Conflict checking systems",
      "Time and billing integration",
    ],
    solutions: [
      { title: "Secure Document Management", desc: "Encrypted storage with access controls" },
      { title: "Client Portal", desc: "Secure file sharing with clients" },
      { title: "Practice Management", desc: "Integrated systems for efficiency" },
    ],
    color: "bg-blue-500",
  },
  "healthcare": {
    icon: "Heart",
    title: "Healthcare",
    subtitle: "HIPAA-compliant IT for medical practices and healthcare organizations",
    description: "Patient data protection is paramount. Our healthcare IT solutions ensure HIPAA compliance while enabling efficient care delivery and secure health information exchange.",
    frameworks: ["HIPAA", "HITECH", "PHI Protection", "Meaningful Use"],
    challenges: [
      "HIPAA compliance and documentation",
      "Protected health information security",
      "EHR/EMR system management",
      "Medical device integration",
      "Telehealth infrastructure",
      "Patient portal security",
    ],
    solutions: [
      { title: "HIPAA Compliance", desc: "Complete documentation and training" },
      { title: "Secure EHR Access", desc: "Protected access from any location" },
      { title: "Patient Communication", desc: "HIPAA-compliant messaging and portals" },
    ],
    color: "bg-rose-500",
  },
  "professional-services": {
    icon: "Building2",
    title: "Professional Services",
    subtitle: "Security-first IT for accounting firms and consultancies",
    description: "Professional service firms handle confidential client data and face increasing pressure to demonstrate security practices. We help you meet client expectations and industry standards.",
    frameworks: ["SOC 2", "NIST", "ISO 27001", "AICPA"],
    challenges: [
      "Client data protection",
      "SOC 2 compliance requirements",
      "Secure remote work enablement",
      "Multi-client environment security",
      "Tax season scalability",
      "Audit support and documentation",
    ],
    solutions: [
      { title: "SOC 2 Ready", desc: "Controls and documentation for certification" },
      { title: "Client Segregation", desc: "Secure multi-tenant environments" },
      { title: "Seasonal Scaling", desc: "Resources that flex with demand" },
    ],
    color: "bg-emerald-500",
  },
};

// Color mapping for industries
const colorMap: Record<string, string> = {
  "financial-services": "bg-amber-500",
  "legal": "bg-blue-500",
  "healthcare": "bg-rose-500",
  "professional-services": "bg-emerald-500",
  "non-profit": "bg-purple-500",
};

const IndustryPage = () => {
  const params = useParams();
  const slug = params?.slug as string
  const { industries: cmsIndustries, isLoading } = useCMSIndustries();

  // Find the CMS industry by slug
  const cmsIndustry = cmsIndustries?.find(ind => ind.slug === slug);
  
  // Get fallback data
  const fallbackData = slug ? defaultIndustriesData[slug] : null;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-gold" />
      </div>
    );
  }

  if (!cmsIndustry && !fallbackData) {
    return <div>Industry not found</div>;
  }

  // Parse key_regulations from CMS or use fallback
  const keyRegulations = cmsIndustry?.key_regulations as { frameworks?: string[]; challenges?: string[]; solutions?: { title: string; desc: string }[] } | null;

  // Build industry data from CMS with fallbacks
  const industry = {
    icon: cmsIndustry?.icon || fallbackData?.icon || "Building2",
    title: cmsIndustry?.name || fallbackData?.title || "Industry",
    subtitle: cmsIndustry?.short_description || fallbackData?.subtitle || "",
    description: cmsIndustry?.full_description || fallbackData?.description || "",
    frameworks: keyRegulations?.frameworks || fallbackData?.frameworks || [],
    challenges: keyRegulations?.challenges || fallbackData?.challenges || [],
    solutions: keyRegulations?.solutions || fallbackData?.solutions || [],
    color: colorMap[slug || ""] || fallbackData?.color || "bg-primary",
    // SEO fields from CMS
    metaTitle: cmsIndustry?.meta_title,
    metaDescription: cmsIndustry?.meta_description,
    keywords: cmsIndustry?.keywords,
  };

  const Icon = iconMap[industry.icon] || Building2;

  // Generate SEO-optimized content
  const seoTitle = industry.metaTitle || `${industry.title} IT Solutions & Compliance Services`;
  const seoDescription = industry.metaDescription || 
    `Expert managed IT services for ${industry.title.toLowerCase()} organizations. ${industry.frameworks.slice(0, 3).join(', ')} compliance, cybersecurity, and 24/7 support. Serving New York & Florida.`;
  
  // Parse keywords from CMS or generate defaults
  const seoKeywords = industry.keywords 
    ? industry.keywords.split(',').map(k => k.trim())
    : [
        `${industry.title.toLowerCase()} IT services`,
        `${industry.title.toLowerCase()} managed IT`,
        `${industry.title.toLowerCase()} cybersecurity`,
        `${industry.title.toLowerCase()} compliance`,
        ...industry.frameworks.map(f => `${f} compliance`),
        'IT support',
        'managed services',
        'New York IT services',
        'Florida IT services',
      ];

  // Generate FAQ schema from challenges and solutions
  const faqItems = [
    {
      question: `What IT challenges do ${industry.title.toLowerCase()} organizations face?`,
      answer: `${industry.title} organizations commonly face: ${industry.challenges.slice(0, 4).join(', ')}. Compuwork provides specialized IT solutions to address these challenges.`,
    },
    {
      question: `What compliance frameworks do you support for ${industry.title.toLowerCase()}?`,
      answer: `We provide comprehensive support for ${industry.frameworks.join(', ')} compliance, ensuring your organization meets all regulatory requirements.`,
    },
    {
      question: `How does Compuwork help ${industry.title.toLowerCase()} firms with cybersecurity?`,
      answer: `We offer ${industry.solutions.map(s => s.title.toLowerCase()).join(', ')} tailored specifically for ${industry.title.toLowerCase()} organizations, protecting sensitive data and ensuring business continuity.`,
    },
  ];

  // Breadcrumb data for SEO
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Industries', url: '/#industries' },
    { name: industry.title, url: `/industries/${slug}` },
  ];

  return (
    <div className="min-h-screen bg-background">
            
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 mesh-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/#industries" className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-gold mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Industries
          </Link>
          
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`w-20 h-20 ${industry.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg`}
            >
              <Icon className="w-10 h-10 text-white" />
            </motion.div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {industry.frameworks.map((framework) => (
                <span key={framework} className="bg-gold/20 text-gold text-sm font-semibold px-4 py-1.5 rounded-full border border-gold/30">
                  {framework}
                </span>
              ))}
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-primary-foreground mb-6"
            >
              {industry.title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-primary-foreground/70 mb-8 max-w-2xl"
            >
              {industry.subtitle}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Button variant="gold" size="lg" className="shadow-gold" asChild>
                <Link href="/contact">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection direction="left">
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-6">
                Industry <span className="text-gradient-gold">Challenges</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">{industry.description}</p>
              <div className="space-y-4">
                {industry.challenges.map((challenge, index) => (
                  <motion.div
                    key={challenge}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Shield className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                    <span className="text-foreground">{challenge}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-6">
                Our <span className="text-gradient-gold">Solutions</span>
              </h2>
              <div className="grid gap-6">
                {industry.solutions.map((solution) => (
                  <motion.div
                    key={solution.title}
                    whileHover={{ scale: 1.02 }}
                    className="bg-card border border-border rounded-2xl p-6 shadow-card"
                  >
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{solution.title}</h3>
                        <p className="text-muted-foreground">{solution.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustryPage;