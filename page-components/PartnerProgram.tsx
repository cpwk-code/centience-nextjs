import Layout from "@/components/Layout";
import PartnerSection from "@/components/home/PartnerSection";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ArrowRight } from "lucide-react";

const PartnerProgramPage = () => (
  <Layout>
    <section className="section-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="container mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">Partners</p>
        <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-6">Partner Program</h1>
        <p className="text-lg opacity-80 leading-relaxed mb-8">
          Centience works with trusted advisors serving regulated organizations. Partners collaborate with Centience to provide technology governance programs for shared clients while generating recurring revenue opportunities.
        </p>
        <Button variant="cta" size="xl" asChild>
          <Link href="/contact">Become a Partner <ArrowRight size={18} /></Link>
        </Button>
      </div>
    </section>
    <PartnerSection />
  </Layout>
);

export default PartnerProgramPage;
