import DataGovernancePage from "@/page-components/DataGovernancePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Governance for Regulated Organizations | Centience",
  description: "Data classification, records retention, data lineage, and access control governance — continuously maintained for financial services, healthcare, and legal firms.",
};

export default function Page() {
  return <DataGovernancePage />;
}
