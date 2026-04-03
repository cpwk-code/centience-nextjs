"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Plus, X, GripVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { CMSIndustry } from "@/types/cms";

interface CMSIndustryEditorProps {
  industryId?: string;
  onSave?: () => void;
}

const CMSIndustryEditor = ({ industryId, onSave }: CMSIndustryEditorProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [newRegulation, setNewRegulation] = useState("");

  const [formData, setFormData] = useState({
    slug: "",
    name: "",
    short_description: "",
    full_description: "",
    icon: "",
    key_regulations: [] as string[],
    order_index: 0,
    is_active: true,
  });

  useEffect(() => {
    if (industryId) {
      fetchIndustry();
    }
  }, [industryId]);

  const fetchIndustry = async () => {
    if (!industryId) return;
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("cms_industries")
        .select("*")
        .eq("id", industryId)
        .single();

      if (error) throw error;

      const industry = data as CMSIndustry;
      setFormData({
        slug: industry.slug,
        name: industry.name,
        short_description: industry.short_description,
        full_description: industry.full_description || "",
        icon: industry.icon || "",
        key_regulations: Array.isArray(industry.key_regulations) ? industry.key_regulations : [],
        order_index: industry.order_index,
        is_active: industry.is_active,
      });
    } catch (error) {
      console.error("Error fetching industry:", error);
      toast.error("Failed to load industry");
    } finally {
      setIsLoading(false);
    }
  };

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  };

  const handleNameChange = (name: string) => {
    setFormData((prev) => ({
      ...prev,
      name,
      slug: prev.slug || generateSlug(name),
    }));
  };

  const addRegulation = () => {
    if (!newRegulation.trim()) return;
    setFormData((prev) => ({
      ...prev,
      key_regulations: [...prev.key_regulations, newRegulation.trim()],
    }));
    setNewRegulation("");
  };

  const removeRegulation = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      key_regulations: prev.key_regulations.filter((_, i) => i !== index),
    }));
  };

  const handleSave = async () => {
    if (!formData.name || !formData.slug || !formData.short_description) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSaving(true);
    try {
      if (industryId) {
        const { error } = await supabase
          .from("cms_industries")
          .update(formData)
          .eq("id", industryId);
        if (error) throw error;
        toast.success("Industry updated");
      } else {
        const { error } = await supabase.from("cms_industries").insert(formData);
        if (error) throw error;
        toast.success("Industry created");
      }

      onSave?.();
      router.push("/admin/cms/industries");
    } catch (error: any) {
      console.error("Error saving industry:", error);
      toast.error(error.message || "Failed to save industry");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin w-8 h-8 border-2 border-gold border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={() => router.push("/admin/cms/industries")}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Industries
        </Button>
        <Button variant="gold" onClick={handleSave} disabled={isSaving}>
          <Save className="w-4 h-4 mr-2" />
          Save Industry
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Industry Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  placeholder="Enter industry name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">Slug *</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) =>
                    setFormData({ ...formData, slug: e.target.value })
                  }
                  placeholder="url-friendly-slug"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="short_description">Short Description *</Label>
                <Textarea
                  id="short_description"
                  value={formData.short_description}
                  onChange={(e) =>
                    setFormData({ ...formData, short_description: e.target.value })
                  }
                  placeholder="Brief description for cards and listings"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="full_description">Full Description</Label>
                <Textarea
                  id="full_description"
                  value={formData.full_description}
                  onChange={(e) =>
                    setFormData({ ...formData, full_description: e.target.value })
                  }
                  placeholder="Detailed description for the industry page"
                  rows={8}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Regulations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  value={newRegulation}
                  onChange={(e) => setNewRegulation(e.target.value)}
                  placeholder="Add a regulation (e.g., HIPAA, SOC 2)..."
                  onKeyPress={(e) => e.key === "Enter" && addRegulation()}
                />
                <Button variant="outline" onClick={addRegulation}>
                  <Plus className="w-4 h-4" />
                </Button>
              </div>

              {formData.key_regulations.length > 0 && (
                <div className="space-y-2">
                  {formData.key_regulations.map((regulation, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-muted/50 rounded-lg p-3"
                    >
                      <GripVertical className="w-4 h-4 text-muted-foreground" />
                      <span className="flex-1">{regulation}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeRegulation(index)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="is_active">Active</Label>
                <Switch
                  id="is_active"
                  checked={formData.is_active}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, is_active: checked })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="order_index">Order Index</Label>
                <Input
                  id="order_index"
                  type="number"
                  value={formData.order_index}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      order_index: parseInt(e.target.value) || 0,
                    })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="icon">Icon Name</Label>
                <Input
                  id="icon"
                  value={formData.icon}
                  onChange={(e) =>
                    setFormData({ ...formData, icon: e.target.value })
                  }
                  placeholder="e.g., Building, Heart, Briefcase"
                />
                <p className="text-xs text-muted-foreground">
                  Lucide icon name
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CMSIndustryEditor;
