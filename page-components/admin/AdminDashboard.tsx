"use client";
'use client';
import { useState, useEffect, useCallback } from "react";
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
} from "lucide-react";
import { exportQuestionsToCSV } from "@/utils/exportQuestionsToCSV";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

type TabType = "contacts" | "referrals" | "assessments";

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

// Search functions for each table type
const searchContacts = (contact: ContactSubmission, query: string): boolean => {
  return (
    contact.full_name.toLowerCase().includes(query) ||
    contact.email.toLowerCase().includes(query) ||
    (contact.company?.toLowerCase().includes(query) ?? false) ||
    (contact.reason?.toLowerCase().includes(query) ?? false)
  );
};

const searchReferrals = (referral: ReferralSubmission, query: string): boolean => {
  return (
    referral.your_first_name.toLowerCase().includes(query) ||
    (referral.your_last_name?.toLowerCase().includes(query) ?? false) ||
    referral.your_email.toLowerCase().includes(query) ||
    referral.referral_first_name.toLowerCase().includes(query) ||
    referral.referral_last_name.toLowerCase().includes(query) ||
    referral.referral_email.toLowerCase().includes(query) ||
    (referral.referral_company?.toLowerCase().includes(query) ?? false)
  );
};

const searchAssessments = (assessment: RiskAssessment, query: string): boolean => {
  return (
    assessment.name.toLowerCase().includes(query) ||
    assessment.email.toLowerCase().includes(query) ||
    assessment.company.toLowerCase().includes(query) ||
    assessment.risk_level.toLowerCase().includes(query) ||
    assessment.title.toLowerCase().includes(query)
  );
};

const filterAssessmentsByRisk = (assessment: RiskAssessment, filter: string): boolean => {
  return assessment.risk_level === filter;
};

const filterAssessmentsByType = (assessment: RiskAssessment, filter: string): boolean => {
  return assessment.title === filter;
};

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

  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<{ id: string; type: TabType } | null>(null);

  // Pagination hooks for each table
  const contactsPagination = useTablePagination({
    data: contacts,
    searchFn: searchContacts,
    dateField: "created_at",
  });

  const referralsPagination = useTablePagination({
    data: referrals,
    searchFn: searchReferrals,
    dateField: "created_at",
  });

  const assessmentsPagination = useTablePagination({
    data: assessments,
    searchFn: searchAssessments,
    filterFn: filterAssessmentsByRisk,
    secondFilterFn: filterAssessmentsByType,
    dateField: "created_at",
  });

  const fetchData = async () => {
    try {
      const [contactsRes, referralsRes, assessmentsRes] = await Promise.all([
        fetch('/api/admin/submissions?type=contacts').then(r => r.json()),
        fetch('/api/admin/submissions?type=referrals').then(r => r.json()),
        fetch('/api/admin/submissions?type=assessments').then(r => r.json()),
      ]);

      if (contactsRes.data) setContacts(contactsRes.data);
      if (referralsRes.data) setReferrals(referralsRes.data);
      if (assessmentsRes.data) setAssessments(assessmentsRes.data);

      if (contactsRes.error) console.error('Contacts error:', contactsRes.error);
      if (referralsRes.error) console.error('Referrals error:', referralsRes.error);
      if (assessmentsRes.error) console.error('Assessments error:', assessmentsRes.error);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to load data");
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    fetchData();
  };

  const handleSignOut = async () => {
    await signOut();
    router.push("/admin/login");
  };

  const handleDelete = async () => {
    if (!itemToDelete) return;

    try {
      const res = await fetch(
        `/api/admin/submissions?type=${itemToDelete.type}&id=${itemToDelete.id}`,
        { method: 'DELETE' }
      );
      const result = await res.json();

      if (!res.ok || result.error) throw new Error(result.error || 'Delete failed');

      toast.success("Item deleted successfully");
      fetchData();
    } catch (error) {
      console.error("Error deleting:", error);
      toast.error("Failed to delete item");
    } finally {
      setDeleteDialogOpen(false);
      setItemToDelete(null);
    }
  };

  const getRiskBadgeColor = (level: string) => {
    switch (level) {
      case "strong":
        return "bg-green-500/20 text-green-500 border-green-500/30";
      case "moderate":
        return "bg-yellow-500/20 text-yellow-500 border-yellow-500/30";
      case "elevated":
        return "bg-orange-500/20 text-orange-500 border-orange-500/30";
      case "critical":
        return "bg-red-500/20 text-red-500 border-red-500/30";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const tabs = [
    { id: "contacts" as TabType, label: "Contacts", icon: Mail, count: contacts.length },
    { id: "referrals" as TabType, label: "Referrals", icon: Users, count: referrals.length },
    { id: "assessments" as TabType, label: "Assessments & Checklists", icon: FileText, count: assessments.length },
  ];

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
            <Button
              variant="gold"
              size="sm"
              onClick={() => router.push("/admin/cms/blog")}
            >
              <FileEdit className="w-4 h-4 mr-2" />
              CMS
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={exportQuestionsToCSV}
            >
              <Download className="w-4 h-4 mr-2" />
              Export Questions
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleRefresh}
              disabled={isRefreshing}
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`} />
              Refresh
            </Button>
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {tabs.map((tab) => (
            <motion.div key={tab.id} whileHover={{ scale: 1.02 }}>
              <Card
                className={`cursor-pointer transition-all ${
                  activeTab === tab.id
                    ? "border-gold bg-gold/5"
                    : "hover:border-gold/50"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {tab.label}
                  </CardTitle>
                  <tab.icon className="w-4 h-4 text-gold" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{tab.count}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Total submissions
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-border pb-4">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "gold" : "ghost"}
              size="sm"
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon className="w-4 h-4 mr-2" />
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Tables */}
        <Card>
          {activeTab === "contacts" && (
            <>
              <AdminTableFilters
                searchQuery={contactsPagination.searchQuery}
                onSearchChange={contactsPagination.setSearchQuery}
                searchPlaceholder="Search by name, email, company, or reason..."
                dateRange={contactsPagination.dateRange}
                onDateRangeChange={contactsPagination.setDateRange}
              />
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Reason</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {contactsPagination.paginatedData.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                          {contactsPagination.searchQuery || contactsPagination.dateRange.from || contactsPagination.dateRange.to
                            ? "No matching contact submissions"
                            : "No contact submissions yet"}
                        </TableCell>
                      </TableRow>
                    ) : (
                      contactsPagination.paginatedData.map((contact) => (
                        <TableRow key={contact.id}>
                          <TableCell className="font-medium">{contact.full_name}</TableCell>
                          <TableCell>{contact.email}</TableCell>
                          <TableCell>{contact.company || "-"}</TableCell>
                          <TableCell>{contact.reason || "-"}</TableCell>
                          <TableCell>{format(new Date(contact.created_at), "MMM d, yyyy")}</TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  Actions <ChevronDown className="w-4 h-4 ml-1" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem
                                  onClick={() => {
                                    setSelectedItem(contact);
                                    setViewDialogOpen(true);
                                  }}
                                >
                                  <Eye className="w-4 h-4 mr-2" />
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  className="text-destructive"
                                  onClick={() => {
                                    setItemToDelete({ id: contact.id, type: "contacts" });
                                    setDeleteDialogOpen(true);
                                  }}
                                >
                                  <Trash2 className="w-4 h-4 mr-2" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </CardContent>
              <AdminTablePagination
                currentPage={contactsPagination.currentPage}
                totalPages={contactsPagination.totalPages}
                pageSize={contactsPagination.pageSize}
                totalItems={contactsPagination.filteredData.length}
                onPageChange={contactsPagination.setCurrentPage}
                onPageSizeChange={contactsPagination.setPageSize}
              />
            </>
          )}

          {activeTab === "referrals" && (
            <>
              <AdminTableFilters
                searchQuery={referralsPagination.searchQuery}
                onSearchChange={referralsPagination.setSearchQuery}
                searchPlaceholder="Search by referrer or referral name, email, company..."
                dateRange={referralsPagination.dateRange}
                onDateRangeChange={referralsPagination.setDateRange}
              />
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Referrer</TableHead>
                      <TableHead>Referral</TableHead>
                      <TableHead>Referral Company</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {referralsPagination.paginatedData.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                          {referralsPagination.searchQuery || referralsPagination.dateRange.from || referralsPagination.dateRange.to
                            ? "No matching referral submissions"
                            : "No referral submissions yet"}
                        </TableCell>
                      </TableRow>
                    ) : (
                      referralsPagination.paginatedData.map((referral) => (
                        <TableRow key={referral.id}>
                          <TableCell className="font-medium">
                            {referral.your_first_name} {referral.your_last_name}
                          </TableCell>
                          <TableCell>
                            {referral.referral_first_name} {referral.referral_last_name}
                          </TableCell>
                          <TableCell>{referral.referral_company || "-"}</TableCell>
                          <TableCell>{format(new Date(referral.created_at), "MMM d, yyyy")}</TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  Actions <ChevronDown className="w-4 h-4 ml-1" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem
                                  onClick={() => {
                                    setSelectedItem(referral);
                                    setViewDialogOpen(true);
                                  }}
                                >
                                  <Eye className="w-4 h-4 mr-2" />
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  className="text-destructive"
                                  onClick={() => {
                                    setItemToDelete({ id: referral.id, type: "referrals" });
                                    setDeleteDialogOpen(true);
                                  }}
                                >
                                  <Trash2 className="w-4 h-4 mr-2" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </CardContent>
              <AdminTablePagination
                currentPage={referralsPagination.currentPage}
                totalPages={referralsPagination.totalPages}
                pageSize={referralsPagination.pageSize}
                totalItems={referralsPagination.filteredData.length}
                onPageChange={referralsPagination.setCurrentPage}
                onPageSizeChange={referralsPagination.setPageSize}
              />
            </>
          )}

          {activeTab === "assessments" && (
            <>
              <AdminTableFilters
                searchQuery={assessmentsPagination.searchQuery}
                onSearchChange={assessmentsPagination.setSearchQuery}
                searchPlaceholder="Search by name, email, company, type, or risk level..."
                filterValue={assessmentsPagination.filterValue}
                onFilterChange={assessmentsPagination.setFilterValue}
                filterOptions={riskLevelOptions}
                filterPlaceholder="Risk Level"
                secondFilterValue={assessmentsPagination.secondFilterValue}
                onSecondFilterChange={assessmentsPagination.setSecondFilterValue}
                secondFilterOptions={assessmentTypeOptions}
                secondFilterPlaceholder="Assessment Type"
                dateRange={assessmentsPagination.dateRange}
                onDateRangeChange={assessmentsPagination.setDateRange}
              />
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Score</TableHead>
                      <TableHead>Risk Level</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {assessmentsPagination.paginatedData.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                          {assessmentsPagination.searchQuery || assessmentsPagination.filterValue !== "all" || assessmentsPagination.secondFilterValue !== "all" || assessmentsPagination.dateRange.from || assessmentsPagination.dateRange.to
                            ? "No matching assessments or checklists"
                            : "No assessments or checklists yet"}
                        </TableCell>
                      </TableRow>
                    ) : (
                      assessmentsPagination.paginatedData.map((assessment) => (
                        <TableRow key={assessment.id}>
                          <TableCell className="font-medium">{assessment.name}</TableCell>
                          <TableCell>{assessment.company}</TableCell>
                          <TableCell>
                            <Badge variant="outline" className="text-xs">
                              {assessment.title}
                            </Badge>
                          </TableCell>
                          <TableCell>{assessment.total_score}/{assessment.max_score}</TableCell>
                          <TableCell>
                            <Badge className={getRiskBadgeColor(assessment.risk_level)}>
                              {assessment.risk_level}
                            </Badge>
                          </TableCell>
                          <TableCell>{format(new Date(assessment.created_at), "MMM d, yyyy")}</TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  Actions <ChevronDown className="w-4 h-4 ml-1" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem
                                  onClick={() => {
                                    setSelectedItem(assessment);
                                    setViewDialogOpen(true);
                                  }}
                                >
                                  <Eye className="w-4 h-4 mr-2" />
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  className="text-destructive"
                                  onClick={() => {
                                    setItemToDelete({ id: assessment.id, type: "assessments" });
                                    setDeleteDialogOpen(true);
                                  }}
                                >
                                  <Trash2 className="w-4 h-4 mr-2" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </CardContent>
              <AdminTablePagination
                currentPage={assessmentsPagination.currentPage}
                totalPages={assessmentsPagination.totalPages}
                pageSize={assessmentsPagination.pageSize}
                totalItems={assessmentsPagination.filteredData.length}
                onPageChange={assessmentsPagination.setCurrentPage}
                onPageSizeChange={assessmentsPagination.setPageSize}
              />
            </>
          )}
        </Card>
      </main>

      {/* View Dialog */}
      <Dialog open={viewDialogOpen} onOpenChange={setViewDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Submission Details</DialogTitle>
          </DialogHeader>
          {selectedItem && (
            <div className="space-y-4">
              {Object.entries(selectedItem).map(([key, value]) => {
                if (key === "id") return null;
                return (
                  <div key={key} className="grid grid-cols-3 gap-4">
                    <div className="font-medium text-muted-foreground capitalize">
                      {key.replace(/_/g, " ")}
                    </div>
                    <div className="col-span-2 break-words">
                      {typeof value === "object"
                        ? JSON.stringify(value, null, 2)
                        : value?.toString() || "-"}
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
            <DialogDescription>
              Are you sure you want to delete this submission? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminDashboard;
