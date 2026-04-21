"use client";
import Link from 'next/link';
import { Phone, Mail, MapPin, Linkedin, Youtube } from "lucide-react";
import centienceLogoDark from "@/assets/centience-logo-dark.png";

const footerLinks = {
  Services: [
    { label: "AI Governance", href: "/ai-governance" },
    { label: "Cybersecurity", href: "/cybersecurity" },
    { label: "Infrastructure", href: "/infrastructure" },
    { label: "Technology Governance", href: "/governance" },
    { label: "Co-Management", href: "/co-management" },
  ],
  Industries: [
    { label: "Accounting & CPA", href: "/industries/accounting-cpa" },
    { label: "Financial Services", href: "/industries/financial-services" },
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Law Firms", href: "/industries/law-firms" },
    { label: "Non-Profit", href: "/industries/non-profit" },
    { label: "Private Equity", href: "/industries/private-equity" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Partners", href: "/partners" },
    { label: "Contact", href: "/contact" },
    { label: "Insights", href: "/insights" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/centience-ai/", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/@Centience", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="section-navy-flat">
      <div className="container mx-auto py-16 lg:py-20">
        {/* Gold accent line */}
        <div className="h-px w-full mb-16" style={{ background: "var(--gradient-gold)", opacity: 0.2 }} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <img src={centienceLogoDark} alt="Centience" className="h-28 sm:h-32 lg:h-40 w-auto object-contain" />
            </Link>
            <p className="text-sm text-warm-white/50 leading-relaxed mb-6 max-w-xs">
              Technology governance for regulated organizations — built on managed infrastructure, enforced through continuous oversight.
            </p>
            <div className="space-y-3 mb-6">
              <a href="mailto:info@centience.ai" className="flex items-center gap-2 text-sm text-warm-white/50 hover:text-gold transition-colors">
                <Mail size={14} /> info@centience.ai
              </a>
              <a href="tel:+18779457177" className="flex items-center gap-2 text-sm text-warm-white/50 hover:text-gold transition-colors">
                <Phone size={14} /> (877) 945-7177
              </a>
              <p className="flex items-center gap-2 text-sm text-warm-white/50">
                <MapPin size={14} /> New York · South Florida · Nationwide
              </p>
            </div>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-warm-white/5 flex items-center justify-center text-warm-white/40 hover:text-gold hover:bg-warm-white/10 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-white/30 mb-5">{category}</p>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="text-sm text-warm-white/50 hover:text-gold transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="h-px w-full mb-8" style={{ background: "var(--gradient-gold)", opacity: 0.1 }} />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-warm-white/30">© {new Date().getFullYear()} Centience. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-xs text-warm-white/30 hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-xs text-warm-white/30 hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
