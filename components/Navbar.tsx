"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import centienceLogoLight from "@/assets/centience-logo-light.png";
import centienceLogoDark from "@/assets/centience-logo-dark.png";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  children?: DropdownItem[];
}

const navItems: NavItem[] = [
  {
    label: "Services",
    children: [
      { label: "AI Governance", href: "/ai-governance" },
      { label: "Cybersecurity Governance", href: "/cybersecurity" },
      { label: "Infrastructure Governance", href: "/infrastructure" },
      { label: "Technology Governance", href: "/governance" },
      { label: "Co-Management", href: "/co-management" },
    ],
  },
  {
    label: "Industries",
    children: [
      { label: "Accounting & CPA", href: "/industries/accounting-cpa" },
      { label: "Financial Services", href: "/industries/financial-services" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Law Firms", href: "/industries/law-firms" },
      { label: "Non-Profit", href: "/industries/non-profit" },
      { label: "Private Equity", href: "/industries/private-equity" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Partners", href: "/partners" },
  {
    label: "Resources",
    children: [
      { label: "Governance Guides", href: "/resources/guides" },
      { label: "Industry Assessments", href: "/resources/assessments" },
      { label: "Newsletter", href: "/resources/newsletter" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

const DropdownMenu = ({ item, scrolled }: { item: NavItem; scrolled: boolean }) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button
        className={`px-4 py-2 text-sm font-semibold transition-colors duration-200 rounded-lg flex items-center gap-1.5 ${
          scrolled
            ? "text-foreground/80 hover:text-foreground hover:bg-muted"
            : "text-warm-white/90 hover:text-warm-white hover:bg-warm-white/10"
        }`}
      >
        {item.label}
        <ChevronDown size={15} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 pt-2 z-50">
          <div className="bg-card border border-border rounded-xl shadow-lg py-2 min-w-[240px]">
            {item.children!.map((child) => (
              <Link
                key={child.label}
                href={child.href}
                className="block px-5 py-3 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-muted transition-colors"
                onClick={() => setOpen(false)}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [location]);

  const linkClasses = scrolled
    ? "text-foreground/80 hover:text-foreground hover:bg-muted"
    : "text-warm-white/90 hover:text-warm-white hover:bg-warm-white/10";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-xl shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 lg:h-36">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <img
            src={scrolled ? centienceLogoLight : centienceLogoDark}
            alt="Centience — AI & Technology Governance"
            className="h-16 sm:h-20 lg:h-28 w-auto transition-opacity duration-300"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-0.5">
          {navItems.map((item) =>
            item.children ? (
              <DropdownMenu key={item.label} item={item} scrolled={scrolled} />
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className={`px-3 py-2 text-sm font-semibold transition-colors duration-200 rounded-lg ${linkClasses}`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden xl:flex items-center gap-3 shrink-0">
          <a
            href="tel:+18779457177"
            className={`flex items-center gap-1.5 text-sm font-semibold whitespace-nowrap transition-colors ${
              scrolled ? "text-accent hover:text-accent/80" : "text-gold hover:text-gold/80"
            }`}
          >
            <Phone size={14} />
            (877) 945-7177
          </a>
          <span className={`text-xs ${scrolled ? "text-foreground/20" : "text-warm-white/20"}`}>|</span>
          <Button variant="cta-nav" size="sm" asChild className="whitespace-nowrap shrink-0">
            <Link href="/ai-governance-risk-assessment">Book Assessment</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="xl:hidden flex items-center gap-2">
          <a
            href="tel:+18779457177"
            className={`flex items-center gap-1.5 text-xs sm:text-sm font-bold whitespace-nowrap transition-colors ${
              scrolled ? "text-accent" : "text-gold"
            }`}
          >
            <Phone size={16} />
            <span>(877) 945-7177</span>
          </a>
          <button
            className={`p-2 ${scrolled ? "text-foreground" : "text-warm-white"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-card border-t border-border shadow-lg">
          <nav className="container mx-auto py-4 flex flex-col gap-0.5">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    className="w-full px-4 py-3 text-sm font-semibold text-foreground/80 hover:text-foreground hover:bg-muted rounded-lg transition-colors flex items-center justify-between"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="pl-4 pb-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-foreground/60 hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="px-4 py-3 text-sm font-semibold text-foreground/80 hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-3 px-4 space-y-3">
              <a
                href="tel:+18779457177"
                className="flex items-center justify-center gap-2 text-sm font-semibold text-accent"
              >
                <Phone size={15} />
                (877) 945-7177
              </a>
              <Button variant="cta" size="default" className="w-full" asChild>
                <Link href="/ai-governance-risk-assessment">Book Your Assessment</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
