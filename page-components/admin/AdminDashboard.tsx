"use client";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";
import { format } from "date-fns";
import {
  Shield,
  Mail,
  Users,
  FileText,
  LogOut,
  Trash2,
  Eye,
  ChevronDown,
  LayoutDashboard,
  Loader2,
  RefreshCw,
  FileEdit,
  Download,
  BookOpen,
  Newspaper,
} from "lucide-react";
import { exportQuestionsToCSV } from "@/utils/exportQuestionsToCSV";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";
import AdminTableFilters from "@/components/admin/AdminTableFilters";
import AdminTablePagination from "@/components/admin/AdminTablePagination";
import { useTablePagination } from "@/hooks/useTablePagination";

type TabType = "contacts" | "referrals" | "assessments" | "guide_leads" | "newsletter";

interface ContactSubmission {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  company: string | null;
  reason: string | null;
  message: string | null;
  referring_page: string | null;
  created_at: string;
}

interface ReferralSubmission {
  id: string;
  your_first_name: string;
  your_last_name: string | null;
  your_company: string;
  your_email: string;
  your_phone: string;
  referral_first_name: string;
  referral_last_name: string;
  referral_email: string;
  referral_phone: string;
  referral_company: string | null;
  message: string | null;
  consent_marketing: boolean | null;
  referring_page: string | null;
  created_at: string;
}

interface RiskAssessment {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  title: string;
  total_score: number;
  max_score: number;
  risk_level: string;
  section_scores: any;
  answers: any;
  referring_page: string | null;
  created_at: string;
}

interface GuideLead {
  id: string;
  full_name: string;
  email: string;
  company: string;
  job_title: string | null;
  industry: string | null;
  phone: string | null;
  guide_title: string | null;
  guide_slug: string | null;
  created_at: string;
}

interface NewsletterSubscriber {
  id: string;
  name: string;
  email: string;
  industry: string | null;
  created_at: string;
}

// Search functions
const searchContacts = (c: ContactSubmission, q: string) =>
  c.full_name.toLowerCase().includes(q) ||
  c.email.toLowerCase().includes(q) ||
  (c.company?.toLowerCase().includes(q) ?? false) ||
  (c.reason?.toLowerCase().includes(q) ?? false);

const searchReferrals = (r: ReferralSubmission, q: string) =>
  r.your_first_name.toLowerCase().includes(q) ||
  (r.your_last_name?.toLowerCase().includes(q) ?? false) ||
  r.your_email.toLowerCase().includes(q) ||
  r.referral_first_name.toLowerCase().includes(q) ||
  r.referral_last_name.toLowerCase().includes(q) ||
  r.referral_email.toLowerCase().includes(q) ||
  (r.referral_company?.toLowerCase().includes(q) ?? false);

const searchAssessments = (a: RiskAssessment, q: string) =>
  a.name.toLowerCase().includes(q) ||
  a.email.toLowerCase().includes(q) ||
  a.company.toLowerCase().includes(q) ||
  a.risk_level.toLowerCase().includes(q) ||
  a.title.toLowerCase().includes(q);

const searchGuideLeads = (g: GuideLead, q: string) =>
  g.full_name.toLowerCase().includes(q) ||
  g.email.toLowerCase().includes(q) ||
  g.company.toLowerCase().includes(q) ||
  (g.guide_title?.toLowerCase().includes(q) ?? false) ||
  (g.industry?.toLowerCase().includes(q) ?? false);

const searchNewsletter = (n: NewsletterSubscriber, q: string) =>
  n.name.toLowerCase().includes(q) ||
  n.email.toLowerCase().includes(q) ||
  (n.industry?.toLowerCase().includes(q) ?? false);

const filterAssessmentsByRisk = (a: RiskAssessment, f: string) => a.risk_level === f;
const filterAssessmentsByType = (a: RiskAssessment, f: string) => a.title === f;

const riskLevelOptions = [
  { value: "strong", label: "Strong" },
  { value: "moderate", label: "Moderate" },
  { value: "elevated", label: "Elevated" },
  { value: "critical", label: "Critical" },
];

const assessmentTypeOptions = [
  { value: "Risk Assessment", label: "Risk Assessment" },
  { value: "AI Readiness Assessment", label: "AI Readiness" },
  { value: "AI Integration Compliance Assessment", label: "AI Compliance" },
  { value: "HIPAA Compliance Checklist", label: "HIPAA Checklist" },
  { value: "Disaster Recovery Checklist", label: "DR Checklist" },
];

const AdminDashboard = () => {
  const router = useRouter();
  const { user, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState<TabType>("contacts");
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [referrals, setReferrals] = useState<ReferralSubmission[]>([]);
  const [assessments, setAssessments] = useState<RiskAssessment[]>([]);
  const [guideLeads, setGuideLeads] = useState<GuideLead[]>([]);
  const [newsletter, setNewsletter] = useState<NewsletterSubscriber[]>([]);

  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<{ id: string; type: TabType } | null>(null);

  const contactsPagination = useTablePagination({ data: contacts, searchFn: searchContacts, dateField: "created_at" });
  const referralsPagination = useTablePagination({ data: referrals, searchFn: searchReferrals, dateField: "created_at" });
  const assessmentsPagination = useTablePagination({ data: assessments, searchFn: searchAssessments, filterFn: filterAssessmentsByRisk, secondFilterFn: filterAssessmentsByType, dateField: "created_at" });
  const guideLeadsPagination = useTablePagination({ data: guideLeads, searchFn: searchGuideLeads, dateField: "created_at" });
  const newsletterPagination = useTablePagination({ data: newsletter, searchFn: searchNewsletter, dateField: "created_at" });

  const fetchData = async () => {
    try {
      const [contactsRes, referralsRes, assessmentsRes, guideLeadsRes, newsletterRes] = await Promise.all([
        fetch('/api/admin/submissions?type=contacts').then(r => r.json()),
        fetch('/api/admin/submissions?type=referrals').then(r => r.json()),
        fetch('/api/admin/submissions?type=assessments').then(r => r.json()),
        fetch('/api/admin/submissions?type=guide_leads').then(r => r.json()),
        fetch('/api/admin/submissions?type=newsletter').then(r => r.json()),
      ]);
      if (contactsRes.data) setContacts(contactsRes.data);
      if (referralsRes.data) setReferrals(referralsRes.data);
      if (assessmentsRes.data) setAssessments(assessmentsRes.data);
      if (guideLeadsRes.data) setGuideLeads(guideLeadsRes.data);
      if (newsletterRes.data) setNewsletter(newsletterRes.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to load data");
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => { fetchData(); }, []);

  const handleRefresh = () => { setIsRefreshing(true); fetchData(); };

  const handleSignOut = async () => { await signOut(); router.push("/admin/login"); };

  const handleDelete = async () => {
    if (!itemToDelete) return;
    try {
      const res = await fetch(`/api/admin/submissions?type=${itemToDelete.type}&id=${itemToDelete.id}`, { method: 'DELETE' });
      const result = await res.json();
      if (!res.ok || result.error) throw new Error(result.error || 'Delete failed');
      toast.success("Item deleted successfully");
      fetchData();
    } catch (error) {
      toast.error("Failed to delete item");
    } finally {
      setDeleteDialogOpen(false);
      setItemToDelete(null);
    }
  };

  const getRiskBadgeColor = (level: string) => {
    switch (level) {
      case "strong": return "bg-green-500/20 text-green-500 border-green-500/30";
      case "moderate": return "bg-yellow-500/20 text-yellow-500 border-yellow-500/30";
      case "elevated": return "bg-orange-500/20 text-orange-500 border-orange-500/30";
      case "critical": return "bg-red-500/20 text-red-500 border-red-500/30";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const tabs = [
    { id: "contacts" as TabType, label: "Contacts", icon: Mail, count: contacts.length },
    { id: "referrals" as TabType, label: "Referrals", icon: Users, count: referrals.length },
    { id: "assessments" as TabType, label: "Assessments", icon: FileText, count: assessments.length },
    { id: "guide_leads" as TabType, label: "Guide Downloads", icon: BookOpen, count: guideLeads.length },
    { id: "newsletter" as TabType, label: "Newsletter", icon: Newspaper, count: newsletter.length },
  ];

  const actionCell = (item: any, type: TabType) => (
    <TableCell className="text-right">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm">Actions <ChevronDown className="w-4 h-4 ml-1" /></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => { setSelectedItem(item); setViewDialogOpen(true); }}>
            <Eye className="w-4 h-4 mr-2" /> View Details
          </DropdownMenuItem>
          <DropdownMenuItem className="text-destructive" onClick={() => { setItemToDelete({ id: item.id, type }); setDeleteDialogOpen(true); }}>
            <Trash2 className="w-4 h-4 mr-2" /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </TableCell>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-gold" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h1 className="font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-xs text-muted-foreground">{user?.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="gold" size="sm" onClick={() => router.push("/admin/cms/blog")}>
              <FileEdit className="w-4 h-4 mr-2" /> CMS
            </Button>
            <Button variant="outline" size="sm" onClick={exportQuestionsToCSV}>
              <Download className="w-4 h-4 mr-2" /> Export Questions
            </Button>
            <Button variant="outline" size="sm" onClick={handleRefresh} disabled={isRefreshing}>
              <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`} />
              Refresh
            </Button>
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" /> Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {tabs.map((tab) => (
            <motion.div key={tab.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Card className="cursor-pointer hover:border-gold/50 transition-colors" onClick={() => setActiveTab(tab.id)}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <tab.icon className="w-4 h-4 text-gold" />
                    <span className="text-xs text-muted-foreground">{tab.label}</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">{tab.count}</p>
                  <p className="text-xs text-muted-foreground">submissions</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 border-b border-border pb-4">
          {tabs.map((tab) => (
            <Button key={tab.id} variant={activeTab === tab.id ? "gold" : "ghost"} size="sm" onClick={() => setActiveTab(tab.id)}>
              <tab.icon className="w-4 h-4 mr-2" />
              {tab.label}
              {tab.count > 0 && <Badge variant="outline" className="ml-2 text-xs">{tab.count}</Badge>}
            </Button>
          ))}
        </div>

        {/* Tables */}
        <Card>
          {/* Contacts */}
          {activeTab === "contacts" && (
            <>
              <AdminTableFilters searchQuery={contactsPagination.searchQuery} onSearchChange={contactsPagination.setSearchQuery} searchPlaceholder="Search by name, email, company, or reason..." dateRange={contactsPagination.dateRange} onDateRangeChange={contactsPagination.setDateRange} />
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead><TableHead>Email</TableHead><TableHead>Company</TableHead><TableHead>Reason</TableHead><TableHead>Date</TableHead><TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {contactsPagination.paginatedData.length === 0 ? (
                      <TableRow><TableCell colSpan={6} className="text-center py-8 text-muted-foreground">No contact submissions yet</TableCell></TableRow>
                    ) : contactsPagination.paginatedData.map((c) => (
                      <TableRow key={c.id}>
                        <TableCell className="font-medium">{c.full_name}</TableCell>
                        <TableCell>{c.email}</TableCell>
                        <TableCell>{c.company || "-"}</TableCell>
                        <TableCell>{c.reason || "-"}</TableCell>
                        <TableCell>{format(new Date(c.created_at), "MMM d, yyyy")}</TableCell>
                        {actionCell(c, "contacts")}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <AdminTablePagination currentPage={contactsPagination.currentPage} totalPages={contactsPagination.totalPages} pageSize={contactsPagination.pageSize} totalItems={contactsPagination.filteredData.length} onPageChange={contactsPagination.setCurrentPage} onPageSizeChange={contactsPagination.setPageSize} />
            </>
          )}

          {/* Referrals */}
          {activeTab === "referrals" && (
            <>
              <AdminTableFilters searchQuery={referralsPagination.searchQuery} onSearchChange={referralsPagination.setSearchQuery} searchPlaceholder="Search by name, email, or company..." dateRange={referralsPagination.dateRange} onDateRangeChange={referralsPagination.setDateRange} />
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>From</TableHead><TableHead>Company</TableHead><TableHead>Referral</TableHead><TableHead>Referral Company</TableHead><TableHead>Date</TableHead><TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {referralsPagination.paginatedData.length === 0 ? (
                      <TableRow><TableCell colSpan={6} className="text-center py-8 text-muted-foreground">No referrals yet</TableCell></TableRow>
                    ) : referralsPagination.paginatedData.map((r) => (
                      <TableRow key={r.id}>
                        <TableCell className="font-medium">{r.your_first_name} {r.your_last_name}</TableCell>
                        <TableCell>{r.your_company}</TableCell>
                        <TableCell>{r.referral_first_name} {r.referral_last_name}</TableCell>
                        <TableCell>{r.referral_company || "-"}</TableCell>
                        <TableCell>{format(new Date(r.created_at), "MMM d, yyyy")}</TableCell>
                        {actionCell(r, "referrals")}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <AdminTablePagination currentPage={referralsPagination.currentPage} totalPages={referralsPagination.totalPages} pageSize={referralsPagination.pageSize} totalItems={referralsPagination.filteredData.length} onPageChange={referralsPagination.setCurrentPage} onPageSizeChange={referralsPagination.setPageSize} />
            </>
          )}

          {/* Assessments */}
          {activeTab === "assessments" && (
            <>
              <AdminTableFilters searchQuery={assessmentsPagination.searchQuery} onSearchChange={assessmentsPagination.setSearchQuery} searchPlaceholder="Search by name, email, company, type, or risk level..." filterValue={assessmentsPagination.filterValue} onFilterChange={assessmentsPagination.setFilterValue} filterOptions={riskLevelOptions} filterPlaceholder="Risk Level" secondFilterValue={assessmentsPagination.secondFilterValue} onSecondFilterChange={assessmentsPagination.setSecondFilterValue} secondFilterOptions={assessmentTypeOptions} secondFilterPlaceholder="Assessment Type" dateRange={assessmentsPagination.dateRange} onDateRangeChange={assessmentsPagination.setDateRange} />
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead><TableHead>Company</TableHead><TableHead>Type</TableHead><TableHead>Score</TableHead><TableHead>Risk Level</TableHead><TableHead>Date</TableHead><TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {assessmentsPagination.paginatedData.length === 0 ? (
                      <TableRow><TableCell colSpan={7} className="text-center py-8 text-muted-foreground">No assessments yet</TableCell></TableRow>
                    ) : assessmentsPagination.paginatedData.map((a) => (
                      <TableRow key={a.id}>
                        <TableCell className="font-medium">{a.name}</TableCell>
                        <TableCell>{a.company}</TableCell>
                        <TableCell><Badge variant="outline" className="text-xs">{a.title}</Badge></TableCell>
                        <TableCell>{a.total_score}/{a.max_score}</TableCell>
                        <TableCell><Badge className={getRiskBadgeColor(a.risk_level)}>{a.risk_level}</Badge></TableCell>
                        <TableCell>{format(new Date(a.created_at), "MMM d, yyyy")}</TableCell>
                        {actionCell(a, "assessments")}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <AdminTablePagination currentPage={assessmentsPagination.currentPage} totalPages={assessmentsPagination.totalPages} pageSize={assessmentsPagination.pageSize} totalItems={assessmentsPagination.filteredData.length} onPageChange={assessmentsPagination.setCurrentPage} onPageSizeChange={assessmentsPagination.setPageSize} />
            </>
          )}

          {/* Guide Downloads */}
          {activeTab === "guide_leads" && (
            <>
              <AdminTableFilters searchQuery={guideLeadsPagination.searchQuery} onSearchChange={guideLeadsPagination.setSearchQuery} searchPlaceholder="Search by name, email, company, or guide..." dateRange={guideLeadsPagination.dateRange} onDateRangeChange={guideLeadsPagination.setDateRange} />
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead><TableHead>Email</TableHead><TableHead>Company</TableHead><TableHead>Guide Downloaded</TableHead><TableHead>Industry</TableHead><TableHead>Date</TableHead><TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {guideLeadsPagination.paginatedData.length === 0 ? (
                      <TableRow><TableCell colSpan={7} className="text-center py-8 text-muted-foreground">No guide downloads yet</TableCell></TableRow>
                    ) : guideLeadsPagination.paginatedData.map((g) => (
                      <TableRow key={g.id}>
                        <TableCell className="font-medium">{g.full_name}</TableCell>
                        <TableCell>{g.email}</TableCell>
                        <TableCell>{g.company}</TableCell>
                        <TableCell><Badge variant="outline" className="text-xs">{g.guide_title || g.guide_slug || "-"}</Badge></TableCell>
                        <TableCell>{g.industry || "-"}</TableCell>
                        <TableCell>{format(new Date(g.created_at), "MMM d, yyyy")}</TableCell>
                        {actionCell(g, "guide_leads")}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <AdminTablePagination currentPage={guideLeadsPagination.currentPage} totalPages={guideLeadsPagination.totalPages} pageSize={guideLeadsPagination.pageSize} totalItems={guideLeadsPagination.filteredData.length} onPageChange={guideLeadsPagination.setCurrentPage} onPageSizeChange={guideLeadsPagination.setPageSize} />
            </>
          )}

          {/* Newsletter */}
          {activeTab === "newsletter" && (
            <>
              <AdminTableFilters searchQuery={newsletterPagination.searchQuery} onSearchChange={newsletterPagination.setSearchQuery} searchPlaceholder="Search by name, email, or industry..." dateRange={newsletterPagination.dateRange} onDateRangeChange={newsletterPagination.setDateRange} />
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead><TableHead>Email</TableHead><TableHead>Industry</TableHead><TableHead>Date</TableHead><TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {newsletterPagination.paginatedData.length === 0 ? (
                      <TableRow><TableCell colSpan={5} className="text-center py-8 text-muted-foreground">No newsletter subscribers yet</TableCell></TableRow>
                    ) : newsletterPagination.paginatedData.map((n) => (
                      <TableRow key={n.id}>
                        <TableCell className="font-medium">{n.name}</TableCell>
                        <TableCell>{n.email}</TableCell>
                        <TableCell>{n.industry || "-"}</TableCell>
                        <TableCell>{format(new Date(n.created_at), "MMM d, yyyy")}</TableCell>
                        {actionCell(n, "newsletter")}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <AdminTablePagination currentPage={newsletterPagination.currentPage} totalPages={newsletterPagination.totalPages} pageSize={newsletterPagination.pageSize} totalItems={newsletterPagination.filteredData.length} onPageChange={newsletterPagination.setCurrentPage} onPageSizeChange={newsletterPagination.setPageSize} />
            </>
          )}
        </Card>
      </main>

      {/* View Dialog */}
      <Dialog open={viewDialogOpen} onOpenChange={setViewDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader><DialogTitle>Submission Details</DialogTitle></DialogHeader>
          {selectedItem && (
            <div className="space-y-4">
              {Object.entries(selectedItem).map(([key, value]) => {
                if (key === "id") return null;
                return (
                  <div key={key} className="grid grid-cols-3 gap-4">
                    <div className="font-medium text-muted-foreground capitalize">{key.replace(/_/g, " ")}</div>
                    <div className="col-span-2 break-words">
                      {typeof value === "object" ? JSON.stringify(value, null, 2) : value?.toString() || "-"}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Submission</DialogTitle>
            <DialogDescription>Are you sure you want to delete this submission? This action cannot be undone.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
            <Button variant="destructive" onClick={handleDelete}>Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminDashboard;
