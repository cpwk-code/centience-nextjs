'use client'

import Layout from "@/components/Layout";
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
import { Mail } from "lucide-react";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

const NewsletterPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [captcha, setCaptcha] = useState(false);

  return (
    <Layout>
      {/* Hero */}
      <section className="section-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="flex items-center gap-3 justify-center mb-6">
            <div className="gold-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Newsletter</p>
            <div className="gold-line" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-6">
            Stay Current on Technology Governance Requirements
          </h1>
          <p className="text-lg opacity-70 leading-relaxed">
            Regulatory requirements evolve continuously. Subscribe for quarterly updates on SEC, FINRA, HIPAA, and AI governance developments affecting regulated organizations.
          </p>
        </div>
      </section>

      {/* Newsletter Form */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto max-w-lg">
          {submitted ? (
            <div className="py-8 text-center">
              <Mail size={40} className="text-accent mx-auto mb-4" />
              <h3 className="font-display font-semibold text-primary text-lg mb-2">You're subscribed!</h3>
              <p className="text-sm text-muted-foreground">We'll send quarterly governance updates. Never more.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); if (!captcha) return; setSubmitted(true); }}
              className="space-y-4 text-left"
            >
              <div>
                <Label htmlFor="nl-name">Name</Label>
                <Input id="nl-name" required placeholder="Full name" />
              </div>
              <div>
                <Label htmlFor="nl-email">Email</Label>
                <Input id="nl-email" type="email" required placeholder="Work email" />
              </div>
              <div>
                <Label>Industry</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="financial">Financial Services</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="legal">Law Firms</SelectItem>
                    <SelectItem value="pe">Private Equity</SelectItem>
                    <SelectItem value="accounting">Accounting & CPA</SelectItem>
                    <SelectItem value="nonprofit">Non-Profit</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/* Captcha checkbox */}
              <div className="flex items-center gap-3 border border-border rounded-lg p-4 bg-muted/50">
                <Checkbox
                  id="nl-captcha"
                  checked={captcha}
                  onCheckedChange={(checked) => setCaptcha(!!checked)}
                />
                <Label htmlFor="nl-captcha" className="text-sm font-normal cursor-pointer select-none">
                  I am human
                </Label>
              </div>

              <Button variant="cta" size="lg" type="submit" className="w-full" disabled={!captcha}>
                Send Me Governance Updates
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                We send quarterly updates. Never more.
              </p>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default NewsletterPage;
