"use client";
'use client';
import { Mail, Phone, ArrowUpRight, Linkedin, Facebook, Youtube } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import logo from "@/assets/logo-white.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: "Cybersecurity & Compliance", href: "/services/cybersecurity" },
    { label: "Managed IT Services", href: "/services/managed-it-services" },
    { label: "Cloud Solutions", href: "/services/cloud-solutions" },
    { label: "Disaster Recovery", href: "/services/disaster-recovery" },
    { label: "AI Governance & Compliance", href: "/services/ai-compliance" },
    { label: "AI Integration", href: "/services/ai-integration" },
    { label: "Communication Compliance", href: "/services/communication-compliance" },
    { label: "GRC", href: "/services/grc" },
    { label: "24/7 Help Desk", href: "/services/help-desk" },
  ];

  const industries = [
    { label: "Financial Services", href: "/industries/financial-services" },
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Legal", href: "/industries/legal" },
    { label: "Professional Services", href: "/industries/professional-services" },
    { label: "Non-Profit", href: "/industries/non-profit" },
  ];

  const company = [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Blogs", href: "/blogs" },
    { label: "Risk Assessment", href: "/free-risk-assessment" },
    { label: "Referral Program", href: "/referral" },
  ];

  const locations = [
    { label: "West Palm Beach", href: "/locations/managed-it-services-west-palm-beach" },
    { label: "Boca Raton", href: "/locations/managed-it-services-boca-raton" },
    { label: "Florida", href: "/locations/managed-it-services-florida" },
    { label: "New York", href: "/locations/managed-it-services-new-york" },
    { label: "Miami", href: "/locations/managed-it-services-miami" },
  ];

  return (
    <footer id="contact" className="bg-primary py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src={logo.src} 
                alt="Compuwork" 
                className="h-14 sm:h-16 lg:h-[4.5rem] w-auto drop-shadow-md"
              />
            </Link>
            <p className="text-primary-foreground/60 mb-8 max-w-sm leading-relaxed">
              Audit-ready IT and Cybersecurity for Financial, Legal, Healthcare and Professional services organizations.
            </p>
            <div className="space-y-4 mb-6">
              <motion.a 
                whileHover={{ x: 5 }}
                href="mailto:info@compuwork.ai" 
                className="flex items-center gap-3 text-primary-foreground/60 hover:text-gold transition-colors group"
              >
                <Mail className="w-5 h-5" />
                <span>info@compuwork.ai</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
              <motion.a 
                whileHover={{ x: 5 }}
                href="tel:+18779457177" 
                className="flex items-center gap-3 text-primary-foreground/60 hover:text-gold transition-colors group"
              >
                <Phone className="w-5 h-5" />
                <span>(877) 945-7177</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            </div>
            
            {/* Social Media Links - Side by Side */}
            <div className="flex items-center gap-4">
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="https://www.linkedin.com/company/compuwork/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center text-primary-foreground/60 hover:text-gold hover:bg-gold/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="https://www.facebook.com/compuworknyc/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center text-primary-foreground/60 hover:text-gold hover:bg-gold/10 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="https://www.youtube.com/@Compuwork"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center text-primary-foreground/60 hover:text-gold hover:bg-gold/10 transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-primary-foreground font-semibold font-display mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-primary-foreground/60 hover:text-gold transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-primary-foreground font-semibold font-display mb-6">Industries</h4>
            <ul className="space-y-3">
              {industries.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-primary-foreground/60 hover:text-gold transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-primary-foreground font-semibold font-display mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-primary-foreground/60 hover:text-gold transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-primary-foreground font-semibold font-display mb-6">Locations</h4>
            <ul className="space-y-3">
              {locations.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-primary-foreground/60 hover:text-gold transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © 2026 Compuwork™. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-primary-foreground/40 hover:text-gold text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-primary-foreground/40 hover:text-gold text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
