"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import CountUp from "@/components/CountUp";
import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, Target, Heart, Shield, Building2, MapPin, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import SEO from "@/components/SEO";
import KeyFacts from "@/components/KeyFacts";
import orvillePhoto from "@/assets/orville-matias-about.jpeg";

const AboutPage = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We do what we say, and we document what we do. Trust is built through consistent, transparent action."
    },
    {
      icon: Target,
      title: "Accountability",
      description: "Every SLA, every response, every result: tracked, measured, and reported to ensure peak performance."
    },
    {
      icon: Award,
      title: "Expertise",
      description: "Our team combines decades of managed IT experience with deep knowledge of SEC, FINRA, HIPAA, and NIST."
    },
    {
      icon: Users,
      title: "Commitment",
      description: "We build long-term relationships, not ticket numbers. Most of our clients have been with us for over a decade."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We love what we do because it matters: protecting data, reputations, and livelihoods."
    }
  ];

  const stats = [
    { value: 100, suffix: "+", label: "Clients Supported", sublabel: "Across financial, legal, and healthcare sectors" },
    { value: 10, suffix: "+", label: "Avg. Relationship", sublabel: "Years of long-term partnerships" },
    { value: 99, suffix: "%+", label: "Client Satisfaction", sublabel: "Measured through retention & reviews" },
    { value: 20, suffix: "+", label: "Years in Business", sublabel: "Consistent results since 2005" }
  ];

  const locations = [
    { city: "New York City", address: "1350 Ave of the Americas, Fl 3", state: "NY" },
    { city: "White Plains", address: "333 Mamaroneck Avenue #431", state: "NY" },
    { city: "Miami", address: "200 S. Biscayne Blvd.", state: "FL" },
    { city: "Palm Beach Gardens", address: "4440 PGA Boulevard, Suite 600", state: "FL" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Compuwork | 20+ Years of Compliance-Focused IT"
        description="Since 2005, Compuwork has been the trusted IT partner for financial services, law firms, and healthcare organizations. Learn about our mission, leadership, and values."
        canonical="/about"
        keywords={[
          'about Compuwork',
          'IT company history',
          'compliance IT experts',
          'managed services provider',
          'Orville Matias',
          'IT leadership',
        ]}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'About', url: '/about' },
        ]}
      />
      
      {/* Semantic Key Facts for AI Search Engines */}
      <KeyFacts
        entityName="Compuwork"
        entityType="Organization"
        description="Compuwork is a managed IT services provider founded in 2005, specializing in compliance-focused technology solutions for regulated industries including financial services, healthcare, and legal."
        facts={[
          { label: "Founded", value: "2005" },
          { label: "Founder & CEO", value: "Orville Matias" },
          { label: "Years in Business", value: "20+" },
          { label: "Clients Supported", value: "100+" },
          { label: "Average Client Relationship", value: "10+ years" },
          { label: "Client Satisfaction Rate", value: "99%+" },
          { label: "Core Values", value: "Integrity, Accountability, Expertise, Commitment, Passion" },
        ]}
        services={[
          "Managed IT Services",
          "Cybersecurity & Compliance",
          "Cloud Solutions",
          "Disaster Recovery",
          "24/7 Help Desk",
        ]}
        locations={[
          "1350 Ave of the Americas, Fl 3, New York, NY",
          "333 Mamaroneck Avenue #431, White Plains, NY",
          "200 S. Biscayne Blvd., Miami, FL",
          "4440 PGA Boulevard, Suite 600, Palm Beach Gardens, FL",
        ]}
        contactInfo={{
          phone: "(877) 945-7177",
          email: "info@compuwork.ai",
          website: "https://compuwork.ai",
        }}
      />

      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 bg-gold/10 rounded-full px-5 py-2.5 mb-6"
            >
              <span className="text-gold font-semibold text-sm tracking-wide uppercase">About Compuwork</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-foreground mb-6 leading-tight">
              Building IT Systems That{" "}
              <span className="text-gradient-gold">Stand Up to Regulators</span>
              <br />and Stand by You
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Since 2005, Compuwork has been the trusted technology partner for compliance-driven organizations, 
              transforming IT from a source of risk into a foundation of confidence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To empower compliance-driven organizations with IT systems built for trust, documentation, and peace of mind.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We make technology transparent, predictable, and always aligned with your regulatory frameworks so you can lead confidently and sleep soundly. Whether you need day-to-day support or long-term strategic planning, our dedicated team ensures your IT environment remains efficient, secure, and audit-ready.
              </p>
              <div className="flex flex-wrap gap-3">
                {["SEC", "FINRA", "HIPAA", "NIST", "SOC 2"].map((framework) => (
                  <span key={framework} className="px-4 py-2 bg-gold/10 text-gold font-semibold rounded-full text-sm">
                    {framework}
                  </span>
                ))}
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.05 }}
                    className={`p-6 rounded-2xl text-center ${
                      index % 2 === 0 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-card border border-border'
                    }`}
                  >
                    <p className={`text-4xl lg:text-5xl font-bold mb-2 ${
                      index % 2 === 0 ? 'text-gold' : 'text-gradient-gold'
                    }`}>
                      <CountUp end={Math.round(stat.value)} suffix={stat.suffix} />
                    </p>
                    <p className={`font-semibold mb-1 ${
                      index % 2 === 0 ? 'text-primary-foreground' : 'text-foreground'
                    }`}>
                      {stat.label}
                    </p>
                    <p className={`text-sm ${
                      index % 2 === 0 ? 'text-primary-foreground/70' : 'text-muted-foreground'
                    }`}>
                      {stat.sublabel}
                    </p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
              
              <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-center p-8 lg:p-12">
                {/* Photo */}
                <div className="flex-shrink-0">
                  <div className="w-56 h-64 lg:w-64 lg:h-72 rounded-2xl overflow-hidden border-2 border-gold/20 shadow-lg">
                    <img src={typeof orvillePhoto === "string" ? orvillePhoto : (orvillePhoto as any).src}
                      alt="Orville Matias, Founder and CEO of Compuwork"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground">Orville Matias</h3>
                    <a 
                      href="https://www.linkedin.com/in/orville-matias-3b93393/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gold hover:text-gold-light transition-colors"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>
                  <p className="text-gold font-semibold mb-4 text-center">Founder & Chief Executive Officer</p>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    With over 23 years of experience in IT and cybersecurity, Orville founded Compuwork in 2005 with a vision to become the trusted technology partner for regulated industries. His expertise spans SEC, FINRA, HIPAA, and NIST compliance frameworks.
                  </p>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Orville also co-founded CyberGRID in 2020, a specialized firm focusing on regulatory compliance for financial firms. His philosophy centers on aligning technology infrastructure with organizational goals while ensuring security, efficiency, and regulatory compliance.
                  </p>
                  
                  <blockquote className="border-l-4 border-gold pl-4 italic text-foreground">
                    "We take the time to understand your unique objectives and align your technology infrastructure with your organizational goals. Trust us to keep your IT operations running smoothly so you can focus on driving your business forward."
                  </blockquote>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision we make and every service we deliver.
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-card border border-border rounded-2xl p-6 h-full"
                >
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
              Our Locations
            </h2>
            <p className="text-lg text-muted-foreground">
              Serving clients from strategic locations across the East Coast
            </p>
          </AnimatedSection>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <AnimatedSection key={location.city} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card border border-border rounded-xl p-6 text-center"
                >
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-bold text-foreground mb-1">{location.city}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{location.address}</p>
                  <p className="text-sm text-gold font-medium">{location.state}</p>
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
              Ready to Partner with Compuwork?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join 100+ compliance-driven organizations who trust us with their IT infrastructure.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button variant="gold" size="lg" className="shadow-gold" asChild>
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
