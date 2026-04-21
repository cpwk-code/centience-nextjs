"use client";
import IndustryAssessment from "@/components/IndustryAssessment";

const questions = [
  { question: "Does your organization have a current technology security policy reviewed within the past 12 months?", options: ["Yes", "No", "Unsure"] },
  { question: "Are donor financial records and payment data protected with appropriate access controls and encryption?", options: ["Yes", "No", "Partial"] },
  { question: "If your organization receives federal grants, have you assessed compliance with applicable cybersecurity requirements (e.g., NIST SP 800-171)?", options: ["Yes", "No", "N/A"] },
  { question: "Does your organization have a documented inventory of AI tools used in fundraising, programs, or administration?", options: ["Yes", "No", "Unsure"] },
  { question: "Are volunteer and contractor access controls documented and technically enforced?", options: ["Yes", "No", "Partial"] },
  { question: "Does your organization comply with PCI DSS requirements for payment card data?", options: ["Yes", "No", "Unsure"] },
  { question: "Has your organization completed security assessments for technology vendors handling donor or beneficiary data?", options: ["Yes", "No", "Unsure"] },
  { question: "Does your organization have a tested incident response plan with documented breach notification procedures?", options: ["Yes", "No", "Unsure"] },
  { question: "Does your board receive technology risk and governance reporting at least annually?", options: ["Yes", "No", "Unsure"] },
  { question: "Does your organization conduct security awareness training documented for all staff and volunteers at least annually?", options: ["Yes", "No", "Unsure"] },
];

const NonProfitAssessment = () => (
  <IndustryAssessment
    headline="Non-Profit Technology Governance Assessment"
    subCopy="Evaluate donor data protection, federal grant compliance, and AI governance posture in under 5 minutes."
    questions={questions}
    guideLabel="Download the Non-Profit Governance Guide"
    guideHref="/guides/centience-governance-program-guide.pdf"
  />
);

export default NonProfitAssessment;
