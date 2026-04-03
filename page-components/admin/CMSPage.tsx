"use client";
'use client';
import { useState } from "react";
import { useRouter, useParams, usePathname } from 'next/navigation';
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  LogOut,
  FileText,
  Briefcase,
  Building2,
  Layers,
  ChevronLeft,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

// CMS Components
import CMSBlogList from "@/components/admin/cms/CMSBlogList";
import CMSBlogEditor from "@/components/admin/cms/CMSBlogEditor";
import CMSServicesList from "@/components/admin/cms/CMSServicesList";
import CMSServiceEditor from "@/components/admin/cms/CMSServiceEditor";
import CMSIndustriesList from "@/components/admin/cms/CMSIndustriesList";
import CMSIndustryEditor from "@/components/admin/cms/CMSIndustryEditor";
import CMSPageContentEditor from "@/components/admin/cms/CMSPageContentEditor";
import CMSSEOEditor from "@/components/admin/cms/CMSSEOEditor";

type CMSSection = "blog" | "services" | "industries" | "pages" | "seo";

const CMSPage = () => {
  const router = useRouter();
  const pathname = usePathname() ?? '';
  const params = useParams();
  const id = params?.id as string
  const { user, signOut } = useAuth();

  // Determine active section and whether we're editing from URL
  const pathParts = pathname.split("/").filter(Boolean);
  const sectionFromPath = pathParts[2] as CMSSection | undefined;
  const isEditing = pathParts.length > 3;
  const isNew = pathParts[3] === "new";

  const [activeSection, setActiveSection] = useState<CMSSection>(sectionFromPath || "blog");

  const handleSignOut = async () => {
    await signOut();
    router.push("/admin/login");
  };

  const handleSectionChange = (section: CMSSection) => {
    setActiveSection(section);
    router.push(`/admin/cms/${section}`);
  };

  const sections = [
    { id: "blog" as CMSSection, label: "Blog Posts", icon: FileText },
    { id: "services" as CMSSection, label: "Services", icon: Briefcase },
    { id: "industries" as CMSSection, label: "Industries", icon: Building2 },
    { id: "pages" as CMSSection, label: "Page Content", icon: Layers },
    { id: "seo" as CMSSection, label: "SEO Settings", icon: Search },
  ];

  const renderContent = () => {
    const section = sectionFromPath || activeSection;

    switch (section) {
      case "blog":
        if (isEditing) {
          return <CMSBlogEditor postId={isNew ? undefined : id} />;
        }
        return <CMSBlogList />;

      case "services":
        if (isEditing) {
          return <CMSServiceEditor serviceId={isNew ? undefined : id} />;
        }
        return <CMSServicesList />;

      case "industries":
        if (isEditing) {
          return <CMSIndustryEditor industryId={isNew ? undefined : id} />;
        }
        return <CMSIndustriesList />;

      case "pages":
        return <CMSPageContentEditor />;

      case "seo":
        return <CMSSEOEditor />;

      default:
        return <CMSBlogList />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.push("/admin")}
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Dashboard
            </Button>
            <div className="h-6 w-px bg-border" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center">
                <LayoutDashboard className="w-4 h-4 text-gold" />
              </div>
              <span className="font-semibold">CMS</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-64 shrink-0">
            <nav className="space-y-1 sticky top-24">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  whileHover={{ x: 4 }}
                  onClick={() => handleSectionChange(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    (sectionFromPath || activeSection) === section.id
                      ? "bg-gold/10 text-gold border border-gold/30"
                      : "hover:bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <section.icon className="w-5 h-5" />
                  {section.label}
                </motion.button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">{renderContent()}</main>
        </div>
      </div>
    </div>
  );
};

export default CMSPage;
