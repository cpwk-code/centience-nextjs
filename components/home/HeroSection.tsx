import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Server, Lock, Database, Brain, Shield, Users } from "lucide-react";

const stats = [
  { value: "20+", label: "Years Operating Governance Programs" },
  { value: "1,000+", label: "Organizations Served" },
  { value: "100%", label: "Documented Track Record Across SEC, FINRA & HIPAA Reviews" },
  { value: "10+", label: "Year Average Client Relationship" },
];

const HeroSection = () => (
  <section className="section-navy relative overflow-hidden w-full">
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `linear-gradient(hsl(var(--warm-white)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--warm-white)) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }}
    />

    <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "var(--gradient-gold)" }} />

    <div className="container mx-auto relative z-10 pt-24 pb-16 lg:pt-40 lg:pb-32">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              The Centience Governance Program
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-display font-extrabold leading-[1.1] mb-6">
            Your AI &amp; Technology Governance Program —{" "}
            <span className="text-gradient-gold">Built, Run, and Evidenced Continuously.</span>
          </h1>

          <p className="text-lg leading-relaxed mb-3 opacity-70">
            Centience builds and operates the governance program for regulated organizations — covering AI tools, cybersecurity controls, vendors, infrastructure, support operations, and evidence requirements. One continuously operated program with enforcement, reporting, and audit-ready evidence included.
          </p>

          <p className="text-sm leading-relaxed mb-10 opacity-50 font-semibold uppercase tracking-wider">
            Not a vendor engagement. An ongoing governance program that regulated firms enroll in.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-6 w-full">
            <Button variant="cta" size="xl" asChild className="w-full sm:w-auto">
              <Link href="/readiness">
                Request a Governance Readiness Review <ArrowRight size={16} />
              </Link>
            </Button>
            <Button variant="cta-outline" size="xl" asChild className="w-full sm:w-auto">
              <Link href="/governance">See What the Program Includes</Link>
            </Button>
          </div>

          <p className="text-sm opacity-50 mb-14">
            Questions? Call us directly:{" "}
            <a href="tel:+18779457177" className="text-gold hover:text-gold/80 transition-colors font-semibold">
              (877) 945-7177
            </a>
          </p>

          <div className="grid grid-cols-4 gap-4 pt-8 border-t border-border/10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-display font-bold text-gold">{stat.value}</p>
                <p className="text-xs text-warm-white/50 mt-1 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:block lg:pt-[52px]"
        >
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Server, title: "Infrastructure Governance", desc: "Managed infrastructure with technically enforced governance controls", href: "/infrastructure" },
              { icon: Lock, title: "Cybersecurity Governance", desc: "Continuous security posture, vendor risk, and incident readiness", href: "/cybersecurity" },
              { icon: Database, title: "Data Governance", desc: "Classification, retention, lineage, and access controls — continuously maintained", href: "/data-governance" },
              { icon: Brain, title: "AI Governance", desc: "Policy, oversight, and ongoing monitoring for regulated AI adoption", href: "/ai-governance" },
              { icon: Shield, title: "Technology Governance", desc: "Integrated GRC across infrastructure, cybersecurity, data, and AI — one accountable firm", href: "/governance" },
              { icon: Users, title: "Program Enrollment", desc: "Works with your existing IT team, vCISO, or compliance counsel — Centience is the accountable governance operator", href: "/co-management" },
            ].map((item, i) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-xl border border-border/10 bg-primary/30 backdrop-blur-sm p-8 hover:border-gold/20 hover:bg-primary/40 transition-colors duration-300 block"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <item.icon size={24} className="text-gold mb-4" />
                <h3 className="font-display font-bold text-base mb-2">{item.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
