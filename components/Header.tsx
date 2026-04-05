"use client";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from "framer-motion";
import centienceLogoLight from "@/assets/centience-logo-light.png";
import centienceLogoDark from "@/assets/centience-logo-dark.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const pathname = usePathname() ?? '';

  const services = [
    { label: "Cybersecurity & Compliance", href: "/services/cybersecurity" },
    { label: "Fully Managed IT Services", href: "/services/managed-it-services" },
    { label: "Co-Managed IT Services", href: "/services/co-managed-it-services" },
    { label: "MSSP Cybersecurity", href: "/services/mssp-cybersecurity" },
    { label: "Disaster Recovery", href: "/services/disaster-recovery" },
    { label: "Cloud Solutions", href: "/services/cloud-solutions" },
    { label: "AI Integration", href: "/services/ai-integration" },
    { label: "AI Governance & Compliance", href: "/services/ai-compliance" },
    { label: "Communication Compliance", href: "/services/communication-compliance" },
    { label: "Governance, Risk & Compliance", href: "/services/grc" },
    { label: "24/7 Help Desk", href: "/services/help-desk" },
  ];

  const industries = [
    { label: "Accounting", href: "/industries/accounting" },
    { label: "Financial Services", href: "/industries/financial-services" },
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Legal", href: "/industries/legal" },
    { label: "Professional Services", href: "/industries/professional-services" },
    { label: "Non-Profit", href: "/industries/non-profit" },
  ];

  const resources = [
    { label: "Blogs", href: "/blogs" },
    { label: "AI Compliance Assessment", href: "/ai-compliance-assessment" },
    { label: "AI Readiness Assessment", href: "/ai-readiness-assessment" },
    { label: "Disaster Recovery Checklist", href: "/disaster-recovery-checklist" },
    { label: "HIPAA Compliance Checklist", href: "/hipaa-compliance-checklist" },
    { label: "Risk Assessment", href: "/free-risk-assessment" },
    { label: "Referral Program", href: "/referral" },
  ];

  const locations = [
    { label: "Boca Raton", href: "/locations/managed-it-services-boca-raton" },
    { label: "West Palm Beach", href: "/locations/managed-it-services-west-palm-beach" },
    { label: "Miami", href: "/locations/managed-it-services-miami" },
    { label: "Florida", href: "/locations/managed-it-services-florida" },
    { label: "New York", href: "/locations/managed-it-services-new-york" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src={centienceLogoDark.src} 
              alt="Centience" 
              className="h-14 sm:h-16 lg:h-[4.5rem] w-auto drop-shadow-md transition-transform duration-300 group-hover:scale-105"
              fetchPriority="high"
              width="180"
              height="72"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-6">
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-foreground/80 hover:text-foreground font-display text-base font-semibold tracking-normal transition-colors py-2">
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-xl shadow-xl overflow-hidden"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-gold/5 transition-colors border-b border-border/50 last:border-0"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button className="flex items-center gap-1 text-foreground/80 hover:text-foreground font-display text-base font-semibold tracking-normal transition-colors py-2">
                Industries
                <ChevronDown className={`w-4 h-4 transition-transform ${industriesOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {industriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-xl shadow-xl overflow-hidden"
                  >
                    {industries.map((industry) => (
                      <Link
                        key={industry.href}
                        href={industry.href}
                        className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-gold/5 transition-colors border-b border-border/50 last:border-0"
                      >
                        {industry.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button className="flex items-center gap-1 text-foreground/80 hover:text-foreground font-display text-base font-semibold tracking-normal transition-colors py-2">
                Resources
                <ChevronDown className={`w-4 h-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {resourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-xl shadow-xl overflow-hidden"
                  >
                    {resources.map((resource) => (
                      <Link
                        key={resource.href}
                        href={resource.href}
                        className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-gold/5 transition-colors border-b border-border/50 last:border-0"
                      >
                        {resource.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/about"
              className="text-foreground/80 hover:text-foreground font-display text-base font-semibold tracking-normal transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-foreground/80 hover:text-foreground font-display text-base font-semibold tracking-normal transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden xl:flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button variant="gold" size="default" className="shadow-gold" asChild>
                <Link href="/free-risk-assessment">Schedule Your Free Assessment</Link>
              </Button>
            </motion.div>
            <a
              href="tel:+18779457177"
              className="flex items-center gap-2 text-foreground/80 hover:text-foreground font-display text-base font-semibold tracking-normal transition-colors hover:underline underline-offset-4"
            >
              <Phone className="w-4 h-4" />
              877-945-7177
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto", maxHeight: "calc(100vh - 5rem)" }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden border-t border-border overflow-y-auto overscroll-contain"
            >
              <div className="flex flex-col py-4 bg-background">
                {/* Services Accordion */}
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-foreground font-display text-base font-semibold"
                >
                  Services
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pr-2 pb-2">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block text-muted-foreground hover:text-foreground font-display font-medium text-sm py-2.5 px-3 rounded-lg hover:bg-gold/5 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Industries Accordion */}
                <button
                  onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-foreground font-display text-base font-semibold"
                >
                  Industries
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${mobileIndustriesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileIndustriesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pr-2 pb-2">
                        {industries.map((industry) => (
                          <Link
                            key={industry.href}
                            href={industry.href}
                            className="block text-muted-foreground hover:text-foreground font-display font-medium text-sm py-2.5 px-3 rounded-lg hover:bg-gold/5 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {industry.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Resources Accordion */}
                <button
                  onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-foreground font-display text-base font-semibold"
                >
                  Resources
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileResourcesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pr-2 pb-2">
                        {resources.map((resource) => (
                          <Link
                            key={resource.href}
                            href={resource.href}
                            className="block text-muted-foreground hover:text-foreground font-display font-medium text-sm py-2.5 px-3 rounded-lg hover:bg-gold/5 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {resource.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Locations Accordion */}
                <button
                  onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-foreground font-display text-base font-semibold"
                >
                  Locations
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${mobileLocationsOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileLocationsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pr-2 pb-2">
                        {locations.map((location) => (
                          <Link
                            key={location.href}
                            href={location.href}
                            className="block text-muted-foreground hover:text-foreground font-display font-medium text-sm py-2.5 px-3 rounded-lg hover:bg-gold/5 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {location.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Link
                  href="/about"
                  className="px-4 py-3 text-foreground font-display text-base font-semibold hover:bg-gold/5 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="px-4 py-3 text-foreground font-display text-base font-semibold hover:bg-gold/5 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>

                {/* Mobile CTA */}
                <div className="px-4 py-4 space-y-3">
                  <Button variant="gold" size="default" className="w-full shadow-gold" asChild>
                    <Link href="/free-risk-assessment" onClick={() => setMobileMenuOpen(false)}>Schedule Your Free Assessment</Link>
                  </Button>
                  <a
                    href="tel:+18779457177"
                    className="flex items-center justify-center gap-2 text-foreground/80 hover:text-foreground font-display text-base font-semibold transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    877-945-7177
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
