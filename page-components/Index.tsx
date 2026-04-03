import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import FrameworkSection from "@/components/home/FrameworkSection";
import TechnicalFoundation from "@/components/home/TechnicalFoundation";
import CapabilitiesSection from "@/components/home/CapabilitiesSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import FounderQuote from "@/components/home/FounderQuote";
import LeadMagnetCTA from "@/components/home/LeadMagnetCTA";

const Index = () => (
  <Layout>
    <HeroSection />
    <ProblemSection />
    <FrameworkSection />
    <TechnicalFoundation />
    <CapabilitiesSection />
    <IndustriesSection />
    <FounderQuote />
    <LeadMagnetCTA />
  </Layout>
);

export default Index;
