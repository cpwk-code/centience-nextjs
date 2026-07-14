"use client";
import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import ProblemSection from "@/components/home/ProblemSection";
import FounderQuote from "@/components/home/FounderQuote";
import FrameworkSection from "@/components/home/FrameworkSection";
import WhatYouGetSection from "@/components/home/WhatYouGetSection";
import DifferentiatorSection from "@/components/home/DifferentiatorSection";
import TechnicalFoundation from "@/components/home/TechnicalFoundation";
import CapabilitiesSection from "@/components/home/CapabilitiesSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import PlatformSection from "@/components/home/PlatformSection";
import LeadMagnetCTA from "@/components/home/LeadMagnetCTA";

const Index = () => (
  <Layout>
    <HeroSection />
    <TrustBar />
    <ProblemSection />
    <FounderQuote />
    <FrameworkSection />
    <WhatYouGetSection />
    <DifferentiatorSection />
    <TechnicalFoundation />
    <CapabilitiesSection />
    <PlatformSection />
    <IndustriesSection />
    <LeadMagnetCTA />
  </Layout>
);

export default Index;
