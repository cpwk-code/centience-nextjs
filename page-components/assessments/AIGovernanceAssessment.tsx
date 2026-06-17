"use client";
import IndustryAssessment from "@/components/IndustryAssessment";

const questions = [
  { question: "Does your organization have a documented AI use policy that governs which AI tools employees are permitted to use?", options: ["Yes", "No", "In Progress"] },
  { question: "Has your organization completed an inventory of all AI tools currently in use — including shadow AI and employee-adopted tools?", options: ["Yes", "No", "Partial"] },
  { question: "Is there a defined vetting process for evaluating new AI vendors before adoption, including data handling and security review?", options: ["Yes", "No", "Partial"] },
  { question: "Has your organization mapped current AI usage against a recognized framework such as NIST AI RMF or ISO 42001?", options: ["Yes", "No", "Unsure"] },
  { question: "Are AI systems monitored on an ongoing basis for performance degradation, output drift, or unexpected behavior?", options: ["Yes", "No", "Partial"] },
  { question: "Has your organization assessed AI tools for regulatory compliance exposure under applicable frameworks (SEC, FINRA, HIPAA, or other)?", options: ["Yes", "No", "Unsure"] },
  { question: "Is there board or executive-level reporting on AI adoption, AI risk, and AI governance at least annually?", options: ["Yes", "No", "Unsure"] },
  { question: "Do contracts with AI vendors include data processing agreements, confidentiality protections, and security requirements?", options: ["Yes", "No", "Partial"] },
  { question: "Does your organization have an AI incident response plan that addresses AI failures, data exposure, or regulatory notification?", options: ["Yes", "No", "In Progress"] },
  { question: "Have employees received training on acceptable AI use, AI-related risks, and your organization's AI governance policies?", options: ["Yes", "No", "Partial"] },
];

const AIGovernanceAssessment = () => (
  <IndustryAssessment
    headline="AI Governance Readiness Assessment"
    subCopy="Identify gaps in your AI governance program across policy, risk management, vendor oversight, and regulatory alignment — in under 5 minutes."
    questions={questions}
    guideLabel="Download the AI Governance Guide"
    guideHref="/guides/centience-compliance-readiness-guide.pdf"
  />
);

export default AIGovernanceAssessment;
