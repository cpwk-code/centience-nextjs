"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Save, Loader2, Search, Globe, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCMSPageSEO } from "@/hooks/useCMS";
import { toast } from "sonner";

const pageLabels: Record<string, string> = {
  // Core Pages
  home: "Home Page",
  about: "About Page",
  contact: "Contact Page",
  services: "Services Page",
  industries: "Industries Page",
  blogs: "Blog Listing",
  // Assessments & Checklists
  "free-risk-assessment": "Risk Assessment",
  "hipaa-compliance-checklist": "HIPAA Checklist",
  "disaster-recovery-checklist": "DR Checklist",
  "ai-compliance-assessment": "AI Compliance",
  "ai-readiness-assessment": "AI Readiness",
  referral: "Referral Page",
  // Industry Pages
  "industry-financial-services": "Industry: Financial Services",
  "industry-legal": "Industry: Legal",
  "industry-healthcare": "Industry: Healthcare",
  "industry-professional-services": "Industry: Professional Services",
  "industry-non-profit": "Industry: Non-Profit",
  // Service Pages
  "service-cybersecurity": "Service: Cybersecurity",
  "service-fully-managed-it": "Service: Fully Managed IT",
  "service-cloud-solutions": "Service: Cloud Solutions",
  "service-disaster-recovery": "Service: Disaster Recovery",
  "service-ai-compliance": "Service: AI Compliance",
  "service-help-desk": "Service: Help Desk",
  "service-grc": "Service: GRC",
  // Location Pages
  "locations-boca-raton": "Boca Raton",
  "locations-west-palm-beach": "West Palm Beach",
  "locations-florida": "Florida",
  "locations-miami": "Miami",
  "locations-new-york": "New York",
  // Legal Pages
  "privacy-policy": "Privacy Policy",
  "terms-of-service": "Terms of Service",
};

const CMSSEOEditor = () => {
  const { seoList, isLoading, upsertSEO } = useCMSPageSEO();
  const [activePage, setActivePage] = useState<string>("home");
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [isSaving, setIsSaving] = useState(false);

  // Load SEO data into form when data changes
  useEffect(() => {
    if (seoList.length > 0) {
      const newFormData: Record<string, any> = {};
      seoList.forEach((item) => {
        newFormData[item.page_key] = {
          meta_title: item.meta_title || "",
          meta_description: item.meta_description || "",
          keywords: item.keywords || "",
          og_title: item.og_title || "",
          og_description: item.og_description || "",
          og_image_url: item.og_image_url || "",
          canonical_url: item.canonical_url || "",
          no_index: item.no_index || false,
        };
      });
      setFormData(newFormData);
    }
  }, [seoList]);

  const handleFieldChange = (pageKey: string, field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [pageKey]: {
        ...(prev[pageKey] || {}),
        [field]: value,
      },
    }));
  };

  const handleSave = async (pageKey: string) => {
    setIsSaving(true);
    try {
      await upsertSEO({
        page_key: pageKey,
        ...formData[pageKey],
      });
      toast.success(`SEO for ${pageLabels[pageKey] || pageKey} saved!`);
    } catch (error) {
      console.error("Error saving SEO:", error);
      toast.error("Failed to save SEO data");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-gold" />
      </div>
    );
  }

  const pages = Object.keys(pageLabels);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">SEO Settings</h2>
        <p className="text-muted-foreground">
          Manage meta titles, descriptions, and Open Graph data for each page
        </p>
      </div>

      <Tabs value={activePage} onValueChange={setActivePage}>
        <TabsList className="flex flex-wrap h-auto gap-1 bg-muted/50 p-1">
          {pages.map((key) => (
            <TabsTrigger key={key} value={key} className="text-xs px-3 py-1.5">
              {pageLabels[key]}
            </TabsTrigger>
          ))}
        </TabsList>

        {pages.map((pageKey) => (
          <TabsContent key={pageKey} value={pageKey} className="space-y-6 mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Meta Tags Card */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="w-5 h-5 text-gold" />
                    Search Engine Meta Tags
                  </CardTitle>
                  <CardDescription>
                    These appear in search engine results
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor={`${pageKey}-meta_title`}>
                      Meta Title <span className="text-muted-foreground text-xs">(max 60 chars)</span>
                    </Label>
                    <Input
                      id={`${pageKey}-meta_title`}
                      value={formData[pageKey]?.meta_title || ""}
                      onChange={(e) => handleFieldChange(pageKey, "meta_title", e.target.value)}
                      placeholder="Page title for search engines"
                      className="mt-1"
                      maxLength={60}
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      {(formData[pageKey]?.meta_title || "").length}/60 characters
                    </p>
                  </div>

                  <div>
                    <Label htmlFor={`${pageKey}-meta_description`}>
                      Meta Description <span className="text-muted-foreground text-xs">(max 160 chars)</span>
                    </Label>
                    <Textarea
                      id={`${pageKey}-meta_description`}
                      value={formData[pageKey]?.meta_description || ""}
                      onChange={(e) => handleFieldChange(pageKey, "meta_description", e.target.value)}
                      placeholder="Brief description for search results"
                      className="mt-1"
                      rows={3}
                      maxLength={160}
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      {(formData[pageKey]?.meta_description || "").length}/160 characters
                    </p>
                  </div>

                  <div>
                    <Label htmlFor={`${pageKey}-keywords`}>Keywords</Label>
                    <Input
                      id={`${pageKey}-keywords`}
                      value={formData[pageKey]?.keywords || ""}
                      onChange={(e) => handleFieldChange(pageKey, "keywords", e.target.value)}
                      placeholder="keyword1, keyword2, keyword3"
                      className="mt-1"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Open Graph Card */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-gold" />
                    Open Graph (Social Sharing)
                  </CardTitle>
                  <CardDescription>
                    How the page appears when shared on social media
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor={`${pageKey}-og_title`}>OG Title</Label>
                    <Input
                      id={`${pageKey}-og_title`}
                      value={formData[pageKey]?.og_title || ""}
                      onChange={(e) => handleFieldChange(pageKey, "og_title", e.target.value)}
                      placeholder="Title for social sharing"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor={`${pageKey}-og_description`}>OG Description</Label>
                    <Textarea
                      id={`${pageKey}-og_description`}
                      value={formData[pageKey]?.og_description || ""}
                      onChange={(e) => handleFieldChange(pageKey, "og_description", e.target.value)}
                      placeholder="Description for social sharing"
                      className="mt-1"
                      rows={2}
                    />
                  </div>

                  <div>
                    <Label htmlFor={`${pageKey}-og_image_url`}>OG Image URL</Label>
                    <Input
                      id={`${pageKey}-og_image_url`}
                      value={formData[pageKey]?.og_image_url || ""}
                      onChange={(e) => handleFieldChange(pageKey, "og_image_url", e.target.value)}
                      placeholder="https://example.com/image.jpg"
                      className="mt-1"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Advanced Settings Card */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-gold" />
                    Advanced Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor={`${pageKey}-canonical_url`}>Canonical URL</Label>
                    <Input
                      id={`${pageKey}-canonical_url`}
                      value={formData[pageKey]?.canonical_url || ""}
                      onChange={(e) => handleFieldChange(pageKey, "canonical_url", e.target.value)}
                      placeholder="https://cpwk.lovable.app/page"
                      className="mt-1"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor={`${pageKey}-no_index`}>No Index</Label>
                      <p className="text-xs text-muted-foreground">
                        Prevent search engines from indexing this page
                      </p>
                    </div>
                    <Switch
                      id={`${pageKey}-no_index`}
                      checked={formData[pageKey]?.no_index || false}
                      onCheckedChange={(checked) => handleFieldChange(pageKey, "no_index", checked)}
                    />
                  </div>
                </CardContent>
              </Card>

              <Button onClick={() => handleSave(pageKey)} disabled={isSaving} variant="gold">
                {isSaving ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Save className="w-4 h-4 mr-2" />
                )}
                Save SEO Settings
              </Button>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default CMSSEOEditor;
