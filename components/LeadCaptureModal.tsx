import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X, Loader2 } from "lucide-react";
import HCaptcha from "@/components/HCaptcha";

const COOKIE_NAME = "centience_lead_captured";
const COOKIE_DAYS = 90;

function setCookie(name: string, value: string, days: number) {
  if (typeof document === 'undefined') return;
  const d = new Date();
  d.setTime(d.getTime() + days * 86400000);
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/;SameSite=Lax`;
}

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? match[1] : null;
}

export function hasLeadCookie(): boolean {
  return getCookie(COOKIE_NAME) === "1";
}

export type GateType = "guide" | "assessment";

interface LeadCaptureModalProps {
  open: boolean;
  onClose: () => void;
  type: GateType;
  /** Guide title or assessment industry name */
  title: string;
  /** For guide gates: the PDF URL to trigger download */
  guideHref?: string;
  /** For assessment gates: callback after form submit */
  onSuccess?: (data: LeadFormData) => void;
}

export interface LeadFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  industry: string;
  phone: string;
  orgSize?: string;
  regulatoryFramework?: string;
}

const LeadCaptureModal = ({
  open,
  onClose,
  type,
  title,
  guideHref,
  onSuccess,
}: LeadCaptureModalProps) => {
  const [form, setForm] = useState<LeadFormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    industry: "",
    phone: "",
    orgSize: "",
    regulatoryFramework: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");

  useEffect(() => {
    if (!open) {
      setLoading(false);
      setSuccess(false);
    }
  }, [open]);

  const set = (key: keyof LeadFormData, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const isGuide = type === "guide";

  const requiredFilled =
    form.firstName.trim() &&
    form.lastName.trim() &&
    form.email.trim() &&
    form.company.trim() &&
    form.jobTitle.trim() &&
    form.industry &&
    !!captchaToken &&
    (isGuide || (form.orgSize && form.regulatoryFramework));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!requiredFilled) return;
    setLoading(true);

    // Store lead data in localStorage for now (replace with DB later)
    const leads = JSON.parse(localStorage.getItem("centience_leads") || "[]");
    leads.push({
      ...form,
      type,
      title,
      timestamp: new Date().toISOString(),
      sourceUrl: window.location.href,
    });
    localStorage.setItem("centience_leads", JSON.stringify(leads));

    setCookie(COOKIE_NAME, "1", COOKIE_DAYS);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      if (isGuide && guideHref) {
        const a = document.createElement("a");
        a.href = guideHref;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.click();
      }

      onSuccess?.(form);

      setTimeout(() => onClose(), 3000);
    }, 1200);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "hsl(var(--navy))", opacity: 0.85 }}
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-card rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto z-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          {success ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              {isGuide ? (
                <>
                  <h3 className="font-display font-bold text-primary text-lg mb-2">
                    Your guide is downloading
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We'll send a copy to {form.email} as well.
                  </p>
                </>
              ) : (
                <>
                  <h3 className="font-display font-bold text-primary text-lg mb-2">
                    Let's get started, {form.firstName}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Your assessment is loading now.
                  </p>
                </>
              )}
            </div>
          ) : (
            <>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent mb-2">
                {isGuide ? "Get Your Free Guide" : "Start Your Assessment"}
              </p>
              <h2 className="font-display font-bold text-primary text-xl mb-2">
                {title}
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                {isGuide
                  ? "Enter your details to access this guide. We respect your privacy and will never sell your information."
                  : "This assessment takes under 5 minutes. Enter your details and we'll send you a personalized results report."}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="gate-fn">First Name *</Label>
                    <Input
                      id="gate-fn"
                      required
                      placeholder="First name"
                      value={form.firstName}
                      onChange={(e) => set("firstName", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="gate-ln">Last Name *</Label>
                    <Input
                      id="gate-ln"
                      required
                      placeholder="Last name"
                      value={form.lastName}
                      onChange={(e) => set("lastName", e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="gate-email">Work Email *</Label>
                  <Input
                    id="gate-email"
                    type="email"
                    required
                    placeholder="Work email"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="gate-company">Company Name *</Label>
                  <Input
                    id="gate-company"
                    required
                    placeholder="Company name"
                    value={form.company}
                    onChange={(e) => set("company", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="gate-title">Job Title *</Label>
                  <Input
                    id="gate-title"
                    required
                    placeholder="Job title"
                    value={form.jobTitle}
                    onChange={(e) => set("jobTitle", e.target.value)}
                  />
                </div>
                <div>
                  <Label>Industry *</Label>
                  <Select value={form.industry} onValueChange={(v) => set("industry", v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="financial">Financial Services</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="legal">Law Firm</SelectItem>
                      <SelectItem value="pe">Private Equity</SelectItem>
                      <SelectItem value="accounting">Accounting & CPA</SelectItem>
                      <SelectItem value="nonprofit">Non-Profit</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="gate-phone">
                    Phone Number{" "}
                    <span className="text-muted-foreground font-normal text-xs">
                      (Optional — for faster response)
                    </span>
                  </Label>
                  <Input
                    id="gate-phone"
                    placeholder="Phone number"
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                  />
                </div>

                {!isGuide && (
                  <>
                    <div>
                      <Label>Organization Size *</Label>
                      <Select value={form.orgSize} onValueChange={(v) => set("orgSize", v)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-50">Under 50 employees</SelectItem>
                          <SelectItem value="50-200">50–200 employees</SelectItem>
                          <SelectItem value="200-500">200–500 employees</SelectItem>
                          <SelectItem value="500-1000">500–1,000 employees</SelectItem>
                          <SelectItem value="1000+">Over 1,000 employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Primary Regulatory Framework *</Label>
                      <Select
                        value={form.regulatoryFramework}
                        onValueChange={(v) => set("regulatoryFramework", v)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select framework" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sec-finra">SEC / FINRA</SelectItem>
                          <SelectItem value="hipaa">HIPAA</SelectItem>
                          <SelectItem value="both">Both</SelectItem>
                          <SelectItem value="state">State regulations</SelectItem>
                          <SelectItem value="federal-grant">Federal grant requirements</SelectItem>
                          <SelectItem value="multiple">Multiple / Unsure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}

                {/* hCaptcha */}
                <div className="flex justify-center">
                  <HCaptcha
                    onVerify={(token) => setCaptchaToken(token)}
                    onExpire={() => setCaptchaToken("")}
                  />
                </div>

                <Button
                  variant="cta"
                  size="lg"
                  type="submit"
                  className="w-full"
                  disabled={!requiredFilled || loading}
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="mr-2 animate-spin" />
                      {isGuide ? "Preparing your guide..." : "Starting assessment..."}
                    </>
                  ) : isGuide ? (
                    "Download My Guide"
                  ) : (
                    "Start My Assessment"
                  )}
                </Button>

                <p className="text-[11px] text-muted-foreground text-center">
                  {isGuide
                    ? "By downloading, you agree to our Privacy Policy. We send governance updates quarterly — never spam."
                    : ""}
                </p>
                <p className="text-xs text-muted-foreground text-center">
                  <a href="tel:+18779457177" className="text-accent font-semibold">
                    (877) 945-7177
                  </a>
                  {" · "}
                  <a href="mailto:info@centience.ai" className="text-accent font-semibold">
                    info@centience.ai
                  </a>
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadCaptureModal;
