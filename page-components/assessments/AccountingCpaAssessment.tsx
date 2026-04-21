"use client";
import IndustryAssessment from "@/components/IndustryAssessment";

const questions = [
  { question: "Does your firm have a current Written Information Security Policy reviewed within the past 12 months?", options: ["Yes", "No", "Unsure"] },
  { question: "Are client file access controls technically enforced — limiting access by engagement and role?", options: ["Yes", "No", "Partial"] },
  { question: "Does your firm comply with the FTC Safeguards Rule requirements under Gramm-Leach-Bliley?", options: ["Yes", "No", "Unsure"] },
  { question: "Has your firm completed a documented inventory of AI tools used in tax, audit, or advisory work?", options: ["Yes", "No", "Unsure"] },
  { question: "Has your firm assessed the professional liability and independence risk of AI tools in attest engagements?", options: ["Yes", "No", "Unsure"] },
  { question: "Has your firm completed security assessments for all cloud-based accounting and practice management platforms?", options: ["Yes", "No", "Partial"] },
  { question: "Is multi-factor authentication enforced for all staff accessing client data remotely?", options: ["Yes", "No", "Partial"] },
  { question: "Does your firm have a tested incident response plan with documented client notification procedures?", options: ["Yes", "No", "Unsure"] },
  { question: "Has your firm experienced a security incident involving client financial data in the past 3 years?", options: ["Yes", "No", "Unsure"] },
  { question: "Does your firm conduct security awareness training documented for all staff at least annually?", options: ["Yes", "No", "Unsure"] },
];

const AccountingCpaAssessment = () => (
  <IndustryAssessment
    headline="Accounting & CPA Firm Technology Governance Assessment"
    subCopy="Evaluate client data protection, AI governance in practice, and regulatory readiness in under 5 minutes."
    questions={questions}
    guideLabel="Download the Accounting Firm Governance Guide"
    guideHref="/guides/centience-compliance-readiness-guide.pdf"
  />
);

export default AccountingCpaAssessment;
