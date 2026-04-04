"use client";
import { Mail, Phone, ArrowUpRight, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/centience-logo-dark.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: "AI Governance", href: "/ai-governance" },
    { label: "Cybersecurity Governance", href: "/cybersecurity" },
    { label: "Infrastructure Governance", href: "/infrastructure" },
    { label: "Technology Governance", href: "/governance" },
    { label: "Co-Management", href: "/co-management" },
  ];

  const industries = [
    { label: "Accounting & CPA", href: "/industries/accounting-cpa" },
    { label: "Financial Services", href: "/industries/financial-services" },
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Law Firms", href: "/industries/law-firms" },
    { label: "Non-Profit", href: "/industries/non-profit" },
    { label: "Private Equity", href: "/industries/private-equity" },
  ];

  const company = [
    { label: "About", href: "/about" },
    { label: "Partners", href: "/partners" },
    { label: "Contact", href: "/contact" },
    { label: "Insights", href: "/insights" },
  ];

  const resources = [
    { label: "Governance Guides", href: "/resources/guides" },
    { label: "Industry Assessments", href: "/resources/assessments" },
    { label: "Newsletter", href: "/resources/newsletter" },
    { label: "AI Governance Assessment", href: "/ai-governance-risk-assessment" },
  ];

  return (
    <footer className="bg-primary py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Image
                  src={logo.src}
                  alt="Centience — AI & Technology Governance"
                  className="h-14 sm:h-16 lg:h-[4.5rem] w-auto drop-shadow-md"
                />
              </motion.div>
            </Link>
            <p className="text-primary-foreground/60 mb-8 max-w-sm leading-relaxed">
              Technology governance for regulated organizations — built on managed infrastructure, enforced through continuous oversight.
            </p>
            <div className="space-y-4 mb-6">
              <motion.a
                whileHover={{ x: 5 }}
                href="mailto:info@centience.ai"
                className="flex items-center gap-3 text-primary-foreground/60 hover:text-gold transition-colors group"
              >
                <Mail className="w-5 h-5" />
                <span>info@centience.ai</span>
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
            <p className="text-primary-foreground/40 text-sm mb-6">New York · South Florida · Nationwide</p>
            <div className="flex items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.linkedin.com/company/centience-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center text-primary-foreground/60 hover:text-gold hover:bg-gold/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.youtube.com/@Centience"
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

          {/* Resources */}
          <div>
            <h4 className="text-primary-foreground font-semibold font-display mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((link) => (
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
            © {currentYear} Centience. All rights reserved.
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
