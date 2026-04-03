'use client';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import About from "@/components/About";
import CTA from "@/components/CTA";
import LocationsSection from "@/components/LocationsSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import KeyFacts from "@/components/KeyFacts";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
            
      {/* Semantic Key Facts for AI Search Engines */}
      <KeyFacts
        entityName="Compuwork"
        entityType="ProfessionalService"
        description="Compuwork provides audit-ready managed IT services and cybersecurity solutions for financial services, legal, healthcare, and professional services organizations. Founded in 2005, we specialize in SEC, FINRA, HIPAA, and SOC 2 compliance."
        facts={[
          { label: "Founded", value: "2005" },
          { label: "Specialization", value: "Compliance-focused managed IT services" },
          { label: "Industries Served", value: "Financial Services, Healthcare, Legal, Professional Services" },
          { label: "Compliance Frameworks", value: "SEC, FINRA, HIPAA, HITECH, SOC 2, NIST CSF" },
          { label: "Support Availability", value: "24/7/365" },
          { label: "Client Satisfaction", value: "99%+" },
          { label: "Average Client Relationship", value: "10+ years" },
        ]}
        services={[
          "Cybersecurity & Compliance",
          "Fully Managed IT",
          "Cloud Solutions",
          "Disaster Recovery",
          "AI Governance & Compliance",
          "24/7 Help Desk Support",
        ]}
        locations={[
          "New York City, NY",
          "White Plains, NY",
          "Miami, FL",
          "Palm Beach Gardens, FL",
        ]}
        contactInfo={{
          phone: "(877) 945-7177",
          email: "info@compuwork.ai",
          website: "https://compuwork.ai",
        }}
      />

      <Header />
      <main>
        <Hero />
        <Services />
        <Industries />
        <About />
        <LocationsSection />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
