"use client";
import IndustryAssessment from "@/components/IndustryAssessment";

const questions = [
  { question: "Has your organization completed a HIPAA Security Rule risk analysis within the past 12 months?", options: ["Yes", "No", "Unsure"] },
  { question: "Are access controls technically enforced for all systems containing electronic protected health information (ePHI)?", options: ["Yes", "No", "Partial"] },
  { question: "Does your organization have signed Business Associate Agreements with all vendors who access ePHI?", options: ["Yes", "No", "Unsure"] },
  { question: "Has your organization completed security assessments for Business Associates within the past 12 months?", options: ["Yes", "No", "Unsure"] },
  { question: "Does your organization have a documented inventory of all AI tools used in clinical or administrative functions?", options: ["Yes", "No", "Unsure"] },
  { question: "Is ePHI encrypted at rest and in transit across all systems?", options: ["Yes", "No", "Partial"] },
  { question: "Does your organization have a tested breach response procedure with documented HHS notification timelines?", options: ["Yes", "No", "Unsure"] },
  { question: "Are all endpoints containing ePHI enrolled in centralized management with endpoint protection?", options: ["Yes", "No", "Partial"] },
  { question: "Has your organization experienced a reportable breach in the past 3 years?", options: ["Yes", "No", "Unsure"] },
  { question: "Does your organization conduct documented HIPAA security awareness training at least annually?", options: ["Yes", "No", "Unsure"] },
];

const HealthcareAssessment = () => (
  <IndustryAssessment
    headline="Healthcare Technology Governance Assessment"
    subCopy="Evaluate your HIPAA technical safeguards, AI governance posture, and breach preparedness — in under 5 minutes."
    questions={questions}
    guideLabel="Download the Healthcare Governance Guide"
    guideHref="/guides/centience-cybersecurity-governance-guide.pdf"
  />
);

export default HealthcareAssessment;
