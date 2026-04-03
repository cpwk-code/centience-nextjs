"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Plus, X, GripVertical, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { CMSService } from "@/types/cms";

interface CMSServiceEditorProps {
  serviceId?: string;
  onSave?: () => void;
}

const CMSServiceEditor = ({ serviceId, onSave }: CMSServiceEditorProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [newFeature, setNewFeature] = useState("");

  const [formData, setFormData] = useState({
    slug: "",
    name: "",
    short_description: "",
    full_description: "",
    icon: "",
    features: [] as string[],
    order_index: 0,
    is_active: true,
    meta_title: "",
    meta_description: "",
    keywords: "",
  });

  useEffect(() => {
    if (serviceId) {
      fetchService();
    }
  }, [serviceId]);

  const fetchService = async () => {
    if (!serviceId) return;
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("cms_services")
        .select("*")
        .eq("id", serviceId)
        .single();

      if (error) throw error;

      const service = data as CMSService;
      setFormData({
        slug: service.slug,
        name: service.name,
        short_description: service.short_description,
        full_description: service.full_description || "",
        icon: service.icon || "",
        features: Array.isArray(service.features) ? service.features : [],
        order_index: service.order_index,
        is_active: service.is_active,
        meta_title: service.meta_title || "",
        meta_description: service.meta_description || "",
        keywords: service.keywords || "",
      });
    } catch (error) {
      console.error("Error fetching service:", error);
      toast.error("Failed to load service");
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

  const addFeature = () => {
    if (!newFeature.trim()) return;
    setFormData((prev) => ({
      ...prev,
      features: [...prev.features, newFeature.trim()],
    }));
    setNewFeature("");
  };

  const removeFeature = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index),
    }));
  };

  const handleSave = async () => {
    if (!formData.name || !formData.slug || !formData.short_description) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSaving(true);
    try {
      if (serviceId) {
        const { error } = await supabase
          .from("cms_services")
          .update(formData)
          .eq("id", serviceId);
        if (error) throw error;
        toast.success("Service updated");
      } else {
        const { error } = await supabase.from("cms_services").insert(formData);
        if (error) throw error;
        toast.success("Service created");
      }

      onSave?.();
      router.push("/admin/cms/services");
    } catch (error: any) {
      console.error("Error saving service:", error);
      toast.error(error.message || "Failed to save service");
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
        <Button variant="ghost" onClick={() => router.push("/admin/cms/services")}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Button>
        <Button variant="gold" onClick={handleSave} disabled={isSaving}>
          <Save className="w-4 h-4 mr-2" />
          Save Service
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Service Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  placeholder="Enter service name"
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
                  placeholder="Detailed description for the service page"
                  rows={8}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  value={newFeature}
                  onChange={(e) => setNewFeature(e.target.value)}
                  placeholder="Add a feature..."
                  onKeyPress={(e) => e.key === "Enter" && addFeature()}
                />
                <Button variant="outline" onClick={addFeature}>
                  <Plus className="w-4 h-4" />
                </Button>
              </div>

              {formData.features.length > 0 && (
                <div className="space-y-2">
                  {formData.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-muted/50 rounded-lg p-3"
                    >
                      <GripVertical className="w-4 h-4 text-muted-foreground" />
                      <span className="flex-1">{feature}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFeature(index)}
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
                  placeholder="e.g., Shield, Cloud, Server"
                />
                <p className="text-xs text-muted-foreground">
                  Lucide icon name
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5 text-gold" />
                SEO Settings
              </CardTitle>
              <CardDescription>
                Search engine optimization for this service page
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="meta_title">
                  Meta Title <span className="text-muted-foreground text-xs">(max 60 chars)</span>
                </Label>
                <Input
                  id="meta_title"
                  value={formData.meta_title}
                  onChange={(e) =>
                    setFormData({ ...formData, meta_title: e.target.value })
                  }
                  placeholder="Page title for search engines"
                  maxLength={60}
                />
                <p className="text-xs text-muted-foreground">
                  {formData.meta_title.length}/60 characters
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="meta_description">
                  Meta Description <span className="text-muted-foreground text-xs">(max 160 chars)</span>
                </Label>
                <Textarea
                  id="meta_description"
                  value={formData.meta_description}
                  onChange={(e) =>
                    setFormData({ ...formData, meta_description: e.target.value })
                  }
                  placeholder="Brief description for search results"
                  rows={3}
                  maxLength={160}
                />
                <p className="text-xs text-muted-foreground">
                  {formData.meta_description.length}/160 characters
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="keywords">Keywords</Label>
                <Input
                  id="keywords"
                  value={formData.keywords}
                  onChange={(e) =>
                    setFormData({ ...formData, keywords: e.target.value })
                  }
                  placeholder="keyword1, keyword2, keyword3"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CMSServiceEditor;
