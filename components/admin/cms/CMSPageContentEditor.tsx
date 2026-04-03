"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Save, Loader2, FileText, Type, AlignLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useCMSPageContent } from "@/hooks/useCMS";
import { toast } from "sonner";

interface PageSection {
  key: string;
  label: string;
  fields: {
    key: string;
    label: string;
    type: "text" | "textarea" | "list";
    placeholder?: string;
  }[];
}

const pageConfigs: Record<string, { label: string; sections: PageSection[] }> = {
  home: {
    label: "Home Page",
    sections: [
      {
        key: "hero",
        label: "Hero Section",
        fields: [
          { key: "badge", label: "Trust Badge Text", type: "text", placeholder: "Trusted by 100+ Financial & Healthcare Firms" },
          { key: "headline", label: "Main Headline", type: "text", placeholder: "Audit-Ready IT for" },
          { key: "headline_highlight", label: "Highlighted Text", type: "text", placeholder: "Regulated Industries" },
          { key: "subheadline", label: "Subheadline", type: "textarea", placeholder: "Stop dreading audits..." },
          { key: "primary_cta", label: "Primary CTA Text", type: "text", placeholder: "Get Your Free Risk Assessment" },
          { key: "secondary_cta", label: "Secondary CTA Text", type: "text", placeholder: "View Our Services" },
        ],
      },
      {
        key: "cta",
        label: "CTA Section",
        fields: [
          { key: "badge", label: "Badge Text", type: "text", placeholder: "Get Started Today" },
          { key: "headline", label: "Headline", type: "text", placeholder: "Ready to Simplify" },
          { key: "headline_highlight", label: "Highlighted Text", type: "text", placeholder: "Compliance" },
          { key: "description", label: "Description", type: "textarea", placeholder: "Schedule a free risk assessment..." },
          { key: "primary_cta", label: "Primary CTA Text", type: "text", placeholder: "Get Your Free Risk Assessment" },
          { key: "secondary_cta", label: "Secondary CTA Text", type: "text", placeholder: "Call Us (877) 945-7177" },
        ],
      },
    ],
  },
  about: {
    label: "About Page",
    sections: [
      {
        key: "main",
        label: "Main Content",
        fields: [
          { key: "badge", label: "Section Badge", type: "text", placeholder: "About Compuwork™" },
          { key: "headline", label: "Headline", type: "text", placeholder: "Over Two Decades of" },
          { key: "headline_highlight", label: "Highlighted Text", type: "text", placeholder: "Trust & Excellence" },
          { key: "paragraph1", label: "First Paragraph", type: "textarea", placeholder: "Founded in 2005 in New York City..." },
          { key: "paragraph2", label: "Second Paragraph", type: "textarea", placeholder: "Our clients stay because..." },
        ],
      },
      {
        key: "values",
        label: "Core Values",
        fields: [
          { key: "value1", label: "Value 1", type: "text", placeholder: "Proactive, not reactive IT management" },
          { key: "value2", label: "Value 2", type: "text", placeholder: "Clear reporting and full transparency" },
          { key: "value3", label: "Value 3", type: "text", placeholder: "Long-term partnerships over quick fixes" },
          { key: "value4", label: "Value 4", type: "text", placeholder: "Deep regulatory expertise" },
          { key: "value5", label: "Value 5", type: "text", placeholder: "Measurable, documented results" },
          { key: "value6", label: "Value 6", type: "text", placeholder: "Technology that stands up to regulators" },
        ],
      },
      {
        key: "stats",
        label: "Statistics",
        fields: [
          { key: "years_label", label: "Years Label", type: "text", placeholder: "Years in Business" },
          { key: "clients_label", label: "Clients Label", type: "text", placeholder: "Clients Served" },
          { key: "audit_label", label: "Audit Label", type: "text", placeholder: "Audit Success" },
          { key: "support_label", label: "Support Label", type: "text", placeholder: "Support Available" },
          { key: "location_text", label: "Location Text", type: "text", placeholder: "📍 Offices in NYC & South Florida" },
        ],
      },
    ],
  },
};

const CMSPageContentEditor = () => {
  const router = useRouter();
  const [activePage, setActivePage] = useState<string>("home");
  const [formData, setFormData] = useState<Record<string, Record<string, string>>>({});
  const [isSaving, setIsSaving] = useState(false);
  
  const { content, isLoading, upsertContent } = useCMSPageContent(activePage);

  // Load content into form when data changes
  useEffect(() => {
    if (content.length > 0) {
      const newFormData: Record<string, Record<string, string>> = {};
      content.forEach((item) => {
        if (typeof item.content === 'object' && item.content !== null) {
          newFormData[item.section_key] = item.content as Record<string, string>;
        }
      });
      setFormData(newFormData);
    }
  }, [content]);

  const handleFieldChange = (sectionKey: string, fieldKey: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [sectionKey]: {
        ...(prev[sectionKey] || {}),
        [fieldKey]: value,
      },
    }));
  };

  const handleSaveSection = async (sectionKey: string) => {
    setIsSaving(true);
    try {
      await upsertContent(sectionKey, formData[sectionKey] || {});
      toast.success(`${sectionKey} section saved successfully!`);
    } catch (error) {
      console.error("Error saving content:", error);
      toast.error("Failed to save content");
    } finally {
      setIsSaving(false);
    }
  };

  const handleSaveAll = async () => {
    setIsSaving(true);
    try {
      const pageConfig = pageConfigs[activePage];
      for (const section of pageConfig.sections) {
        if (formData[section.key]) {
          await upsertContent(section.key, formData[section.key]);
        }
      }
      toast.success("All sections saved successfully!");
    } catch (error) {
      console.error("Error saving content:", error);
      toast.error("Failed to save content");
    } finally {
      setIsSaving(false);
    }
  };

  const pageConfig = pageConfigs[activePage];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-gold" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Page Content Editor</h2>
          <p className="text-muted-foreground">
            Edit text content for different pages and sections
          </p>
        </div>
        <Button onClick={handleSaveAll} disabled={isSaving} variant="gold">
          {isSaving ? (
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <Save className="w-4 h-4 mr-2" />
          )}
          Save All Changes
        </Button>
      </div>

      {/* Page Tabs */}
      <Tabs value={activePage} onValueChange={setActivePage}>
        <TabsList className="grid w-full grid-cols-2 max-w-md">
          {Object.entries(pageConfigs).map(([key, config]) => (
            <TabsTrigger key={key} value={key} className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              {config.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(pageConfigs).map(([pageKey, config]) => (
          <TabsContent key={pageKey} value={pageKey} className="space-y-6 mt-6">
            {config.sections.map((section, sectionIndex) => (
              <motion.div
                key={section.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: sectionIndex * 0.1 }}
              >
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {section.key === "hero" || section.key === "cta" ? (
                          <Type className="w-5 h-5 text-gold" />
                        ) : (
                          <AlignLeft className="w-5 h-5 text-gold" />
                        )}
                        {section.label}
                      </CardTitle>
                      <CardDescription>
                        Edit the {section.label.toLowerCase()} content
                      </CardDescription>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleSaveSection(section.key)}
                      disabled={isSaving}
                    >
                      {isSaving ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Save className="w-4 h-4" />
                      )}
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      {section.fields.map((field) => (
                        <div
                          key={field.key}
                          className={field.type === "textarea" ? "sm:col-span-2" : ""}
                        >
                          <Label htmlFor={`${section.key}-${field.key}`}>
                            {field.label}
                          </Label>
                          {field.type === "textarea" ? (
                            <Textarea
                              id={`${section.key}-${field.key}`}
                              value={formData[section.key]?.[field.key] || ""}
                              onChange={(e) =>
                                handleFieldChange(section.key, field.key, e.target.value)
                              }
                              placeholder={field.placeholder}
                              rows={3}
                              className="mt-1"
                            />
                          ) : (
                            <Input
                              id={`${section.key}-${field.key}`}
                              value={formData[section.key]?.[field.key] || ""}
                              onChange={(e) =>
                                handleFieldChange(section.key, field.key, e.target.value)
                              }
                              placeholder={field.placeholder}
                              className="mt-1"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default CMSPageContentEditor;
