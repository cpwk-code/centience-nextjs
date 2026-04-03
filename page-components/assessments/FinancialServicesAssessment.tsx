import IndustryAssessment from "@/components/IndustryAssessment";

const questions = [
  { question: "Does your firm have a current Written Information Security Policy (WISP) reviewed within the past 12 months?", options: ["Yes", "No", "Unsure"] },
  { question: "Has your firm completed a cybersecurity risk assessment within the past 12 months?", options: ["Yes", "No", "Unsure"] },
  { question: "Is multi-factor authentication (MFA) enforced for all remote access and critical systems?", options: ["Yes", "No", "Partial"] },
  { question: "Does your firm have a documented inventory of all AI tools used by employees?", options: ["Yes", "No", "Unsure"] },
  { question: "Are electronic communications (email, messaging, collaboration tools) archived and supervised in compliance with SEC Rule 17a-4 or FINRA Rule 4511?", options: ["Yes", "No", "Partial"] },
  { question: "Has your firm completed security assessments for all technology vendors with access to firm systems or client data?", options: ["Yes", "No", "Partial"] },
  { question: "Does your firm have a tested incident response plan with documented regulatory notification procedures?", options: ["Yes", "No", "Unsure"] },
  { question: "Are all firm endpoints (workstations, laptops, mobile devices) enrolled in centralized management with endpoint protection?", options: ["Yes", "No", "Partial"] },
  { question: "Has your firm received a deficiency finding related to technology or cybersecurity in the past 3 years?", options: ["Yes", "No", "Unsure"] },
  { question: "Does your firm have board or executive-level technology governance reporting at least annually?", options: ["Yes", "No", "Unsure"] },
];

const FinancialServicesAssessment = () => (
  <IndustryAssessment
    headline="Financial Services Technology Governance Assessment"
    subCopy="Identify technology governance gaps across your infrastructure, cybersecurity, communication compliance, and AI environment — in under 5 minutes."
    questions={questions}
    guideLabel="Download the Financial Services Governance Guide"
    guideHref="/guides/centience-compliance-readiness-guide.pdf"
  />
);

export default FinancialServicesAssessment;
