import IndustryAssessment from "@/components/IndustryAssessment";

const questions = [
  { question: "Does your firm have a current cybersecurity and technology governance program at the firm level?", options: ["Yes", "No", "Partial"] },
  { question: "Has your firm completed technology governance assessments for portfolio companies within the past 12 months?", options: ["Yes", "No", "Unsure"] },
  { question: "Does your firm have visibility into the cybersecurity posture of all portfolio companies?", options: ["Yes", "No", "Partial"] },
  { question: "Has your firm assessed AI usage and governance gaps at portfolio companies?", options: ["Yes", "No", "Unsure"] },
  { question: "Does your firm have a standardized cybersecurity baseline that portfolio companies are expected to meet?", options: ["Yes", "No", "Unsure"] },
  { question: "Has your firm completed technology governance assessments as part of due diligence for recent acquisitions?", options: ["Yes", "No", "Partial"] },
  { question: "Does your firm prepare technology governance documentation for LP reporting or SEC examination?", options: ["Yes", "No", "Partial"] },
  { question: "Is multi-factor authentication enforced across the firm and required at portfolio companies?", options: ["Yes", "No", "Partial"] },
  { question: "Has any portfolio company experienced a significant cybersecurity incident in the past 3 years?", options: ["Yes", "No", "Unsure"] },
  { question: "Does your board receive technology governance reporting at least annually?", options: ["Yes", "No", "Unsure"] },
];

const PrivateEquityAssessment = () => (
  <IndustryAssessment
    headline="Private Equity Technology Governance Assessment"
    subCopy="Evaluate firm-level and portfolio-level technology governance posture in under 5 minutes."
    questions={questions}
    guideLabel="Download the PE Governance Guide"
    guideHref="/guides/centience-governance-program-guide.pdf"
  />
);

export default PrivateEquityAssessment;
