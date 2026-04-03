import IndustryAssessment from "@/components/IndustryAssessment";

const questions = [
  { question: "Does your firm have a current Written Information Security Policy reviewed within the past 12 months?", options: ["Yes", "No", "Unsure"] },
  { question: "Are client matter access controls technically enforced — limiting access to authorized personnel only?", options: ["Yes", "No", "Partial"] },
  { question: "Has your firm completed a documented inventory of all AI tools used by attorneys and staff?", options: ["Yes", "No", "Unsure"] },
  { question: "Has your firm assessed the client confidentiality risk of AI tools used in legal work?", options: ["Yes", "No", "Unsure"] },
  { question: "Is multi-factor authentication enforced for all remote access and email?", options: ["Yes", "No", "Partial"] },
  { question: "Has your firm completed security assessments for all legal technology vendors with access to client data?", options: ["Yes", "No", "Unsure"] },
  { question: "Does your firm have a tested incident response plan with documented state bar notification procedures?", options: ["Yes", "No", "Unsure"] },
  { question: "Are all firm endpoints enrolled in centralized management with endpoint protection?", options: ["Yes", "No", "Partial"] },
  { question: "Has your firm experienced a security incident involving client data in the past 3 years?", options: ["Yes", "No", "Unsure"] },
  { question: "Has your firm assessed its technology governance posture against ABA Model Rules requirements?", options: ["Yes", "No", "Unsure"] },
];

const LawFirmsAssessment = () => (
  <IndustryAssessment
    headline="Law Firm Technology Governance Assessment"
    subCopy="Assess client data protection, legal AI governance, and cybersecurity posture in under 5 minutes."
    questions={questions}
    guideLabel="Download the Law Firm Governance Guide"
    guideHref="/guides/centience-governance-program-guide.pdf"
  />
);

export default LawFirmsAssessment;
