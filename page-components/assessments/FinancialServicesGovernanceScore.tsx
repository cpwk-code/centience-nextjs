"use client";

import GovernanceScoreAssessment from "@/page-components/GovernanceScoreAssessment";
import { financialServicesScoreQuestions } from "@/data/governanceScoreQuestions";

const FinancialServicesGovernanceScore = () => (
  <GovernanceScoreAssessment
    headline="Governance Score — Financial Services"
    subCopy="Get your firm's 0–100 technology & compliance governance score across cybersecurity, records, supervision, infrastructure, and AI — mapped to the SEC and FINRA rules examiners actually test."
    questions={financialServicesScoreQuestions}
    industrySlug="financial-services"
    guideLabel="Download the Financial Services Governance Guide"
    guideHref="/guides/centience-compliance-readiness-guide.pdf"
  />
);

export default FinancialServicesGovernanceScore;
