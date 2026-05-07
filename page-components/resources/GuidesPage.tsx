"use client";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useState } from "react";
import { GUIDES_LIST } from "@/data/guideContent";
import LeadCaptureModal, { hasLeadCookie } from "@/components/LeadCaptureModal";

const GuidesPage = () => {
  const [gateOpen, setGateOpen] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState<typeof GUIDES_LIST[0] | null>(null);

  const handleDownload = (guide: typeof GUIDES_LIST[0]) => {
    if (hasLeadCookie()) {
      window.open(guide.file, "_blank", "noopener,noreferrer");
    } else {
      setSelectedGuide(guide);
      setGateOpen(true);
    }
  };

  return (
    <Layout>
      <LeadCaptureModal
        open={gateOpen}
        onClose={() => setGateOpen(false)}
        type="guide"
        title={selectedGuide ? `${selectedGuide.title} — Download Now` : ""}
        guideHref={selectedGuide?.file}
        guideSlug={selectedGuide?.slug}
      />

      {/* Hero */}
      <section className="section-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="flex items-center gap-3 justify-center mb-6">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Guides</p>
            <div className="gold-line" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-6">
            Downloadable Governance Guides
          </h1>
          <p className="text-lg opacity-70 leading-relaxed">
            Each guide is written for CCOs, CISOs, and GCs navigating technology governance obligations in regulated environments. No fluff. Practical content built on 20 years of technical operations inside regulated organizations.
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GUIDES_LIST.map((guide, i) => (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-premium p-7 flex flex-col"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-3">
                  {guide.label}
                </span>
                <h3 className="font-display font-bold text-primary text-base mb-3">{guide.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{guide.subtitle}</p>

                {guide.hasBodySelector && (
                  <div className="flex gap-1.5 mb-4">
                    {["SEC", "FINRA", "HIPAA"].map((b) => (
                      <span
                        key={b}
                        className="text-[10px] font-bold tracking-wider bg-muted text-primary px-2 py-0.5 rounded"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex gap-2 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDownload(guide)}
                    className="flex-1"
                  >
                    Download Guide <Download size={14} className="ml-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GuidesPage;
