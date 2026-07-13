"use client";

import GovernanceScoreAssessment from "@/page-components/GovernanceScoreAssessment";
import { healthcareScoreQuestions } from "@/data/healthcareScoreQuestions";

const HealthcareGovernanceScore = () => (
  <GovernanceScoreAssessment
    headline="Governance Score — Healthcare"
    subCopy="Get your organization's 0–100 HIPAA governance score across security, ePHI protection, compliance, infrastructure, and AI — mapped to the HIPAA Security, Privacy, and Breach Notification Rules."
    questions={healthcareScoreQuestions}
    industrySlug="healthcare"
    guideLabel="Download the HIPAA Governance Guide"
    guideHref="/guides/centience-compliance-readiness-guide-hipaa.pdf"
  />
);

export default HealthcareGovernanceScore;
