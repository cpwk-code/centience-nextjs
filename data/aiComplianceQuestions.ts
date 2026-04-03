export interface AIComplianceQuestion {
  id: string;
  section: string;
  question: string;
  options: {
    label: string;
    text: string;
    score: number;
  }[];
}

export interface AIComplianceSection {
  id: string;
  title: string;
  description: string;
  questions: AIComplianceQuestion[];
}

export const aiComplianceSections: AIComplianceSection[] = [
  {
    id: "current-environment",
    title: "Current Environment",
    description: "Assess your organization's existing technology infrastructure and AI tool usage.",
    questions: [
      {
        id: "q1",
        section: "current-environment",
        question: "What is your organization's primary productivity and collaboration platform?",
        options: [
          { label: "A", text: "Primarily on-premise (e.g., self-hosted servers, custom apps)", score: 1 },
          { label: "B", text: "Primarily Google Workspace", score: 2 },
          { label: "C", text: "Primarily Microsoft 365", score: 3 },
          { label: "D", text: "Hybrid with mature integration across platforms", score: 4 },
        ],
      },
      {
        id: "q2",
        section: "current-environment",
        question: "What licensing/edition level supports AI features and compliance needs?",
        options: [
          { label: "A", text: "Basic/free tier or legacy on-premise without modern compliance tools", score: 1 },
          { label: "B", text: "Standard/Business tier without AI add-ons or advanced governance", score: 2 },
          { label: "C", text: "E3/Business Premium or Business Plus (partial AI/compliance support)", score: 3 },
          { label: "D", text: "E5/Enterprise Plus with Copilot/Gemini enabled and Purview/Advanced labels", score: 4 },
        ],
      },
      {
        id: "q3",
        section: "current-environment",
        question: "Current AI tool usage and regulatory alignment?",
        options: [
          { label: "A", text: "No AI integrated; no regulatory assessment", score: 1 },
          { label: "B", text: "Basic/third-party AI in limited use without compliance review", score: 2 },
          { label: "C", text: "Native AI (Copilot/Gemini) in pilot with initial risk checks", score: 3 },
          { label: "D", text: "Governed, audited use of native/custom AI with SEC/FINRA/NIST alignment", score: 4 },
        ],
      },
    ],
  },
  {
    id: "strategy-use-cases",
    title: "Strategy and Use Cases",
    description: "Evaluate your AI strategy alignment with regulatory requirements.",
    questions: [
      {
        id: "q4",
        section: "strategy-use-cases",
        question: "Have you identified and prioritized AI use cases with regulatory impact?",
        options: [
          { label: "A", text: "No use cases defined", score: 1 },
          { label: "B", text: "Informal ideas without risk consideration", score: 2 },
          { label: "C", text: "Documented use cases with basic regulatory review", score: 3 },
          { label: "D", text: "Prioritized use cases with KPIs, executive alignment, and SEC/FINRA risk assessment", score: 4 },
        ],
      },
    ],
  },
  {
    id: "data-security",
    title: "Data and Security",
    description: "Assess your data quality, governance, and security controls for AI compliance.",
    questions: [
      {
        id: "q5",
        section: "data-security",
        question: "Data quality, accessibility, and governance for AI?",
        options: [
          { label: "A", text: "Scattered/unclean data; no governance", score: 1 },
          { label: "B", text: "Basic organization; limited semantic readiness", score: 2 },
          { label: "C", text: "Clean/accessible data with platform indexing", score: 3 },
          { label: "D", text: "High-quality, labeled, indexed data with NIST-aligned governance", score: 4 },
        ],
      },
      {
        id: "q6",
        section: "data-security",
        question: "Sensitivity labeling and DLP for AI data processing?",
        options: [
          { label: "A", text: "No formal labeling/policies", score: 1 },
          { label: "B", text: "Basic/inconsistent policies", score: 2 },
          { label: "C", text: "Labels/DLP applied in most areas", score: 3 },
          { label: "D", text: "Advanced automated classification, retention, and AI-specific DLP (Purview/Google)", score: 4 },
        ],
      },
      {
        id: "q7",
        section: "data-security",
        question: "Security/compliance controls addressing SEC/FINRA/NIST requirements?",
        options: [
          { label: "A", text: "Limited/no AI-specific controls", score: 1 },
          { label: "B", text: "Standard security; no AI risk focus", score: 2 },
          { label: "C", text: "Encryption/access restrictions; basic AI DLP", score: 3 },
          { label: "D", text: "Comprehensive (e.g., prompt auditing, data residency, bias testing, explainability per NIST)", score: 4 },
        ],
      },
    ],
  },
  {
    id: "technical-infrastructure",
    title: "Technical Infrastructure",
    description: "Evaluate your infrastructure readiness for AI workloads and compliance.",
    questions: [
      {
        id: "q8",
        section: "technical-infrastructure",
        question: "Infrastructure readiness for AI integration and compliance?",
        options: [
          { label: "A", text: "Legacy/no GPU for on-prem; limited APIs", score: 1 },
          { label: "B", text: "Cloud but bandwidth/API gaps", score: 2 },
          { label: "C", text: "Adequate compute/APIs enabled", score: 3 },
          { label: "D", text: "Fully ready (high-bandwidth, GPUs/local models, semantic indexing, audit logging)", score: 4 },
        ],
      },
    ],
  },
  {
    id: "ai-governance-nist",
    title: "AI Governance and NIST RMF Alignment",
    description: "Assess your AI governance framework and alignment with NIST Risk Management Framework.",
    questions: [
      {
        id: "q9",
        section: "ai-governance-nist",
        question: "Maturity of AI governance framework (e.g., NIST Govern function)?",
        options: [
          { label: "A", text: "No policies for ethical use/monitoring", score: 1 },
          { label: "B", text: "Basic guidelines drafted", score: 2 },
          { label: "C", text: "Policies cover responsible AI/risk management", score: 3 },
          { label: "D", text: "Mature framework with ongoing monitoring, explainability, ethics reviews, and executive oversight", score: 4 },
        ],
      },
      {
        id: "q10",
        section: "ai-governance-nist",
        question: "Risk mapping and measurement (NIST Map/Measure functions)?",
        options: [
          { label: "A", text: "No AI risks identified", score: 1 },
          { label: "B", text: "Informal risk discussions", score: 2 },
          { label: "C", text: "Documented risks with basic assessments", score: 3 },
          { label: "D", text: "Structured mapping/measuring of harms (bias, fairness, security) with testing protocols", score: 4 },
        ],
      },
      {
        id: "q11",
        section: "ai-governance-nist",
        question: "Risk management and mitigation (NIST Manage function)?",
        options: [
          { label: "A", text: "No mitigation processes", score: 1 },
          { label: "B", text: "Ad-hoc responses", score: 2 },
          { label: "C", text: "Prioritized mitigation with controls", score: 3 },
          { label: "D", text: "Continuous monitoring, human-in-loop, third-party risk management for AI", score: 4 },
        ],
      },
    ],
  },
  {
    id: "sec-finra-compliance",
    title: "SEC and FINRA-Specific Compliance",
    description: "Evaluate your compliance with SEC and FINRA AI-related requirements.",
    questions: [
      {
        id: "q12",
        section: "sec-finra-compliance",
        question: "Policies/procedures for supervising/monitoring AI use (FINRA Rule 3110, SEC priorities)?",
        options: [
          { label: "A", text: "No AI-specific supervision", score: 1 },
          { label: "B", text: "General policies; no AI coverage", score: 2 },
          { label: "C", text: "Basic monitoring of AI outputs", score: 3 },
          { label: "D", text: "Robust enterprise-level supervision, testing, and documentation of AI decisions", score: 4 },
        ],
      },
      {
        id: "q13",
        section: "sec-finra-compliance",
        question: "Controls to prevent 'AI washing' and ensure accurate representations (SEC enforcement focus)?",
        options: [
          { label: "A", text: "No review of AI claims", score: 1 },
          { label: "B", text: "Informal checks", score: 2 },
          { label: "C", text: "Marketing/comms reviewed for accuracy", score: 3 },
          { label: "D", text: "Formal substantiation of AI capabilities/risks in disclosures and client comms", score: 4 },
        ],
      },
      {
        id: "q14",
        section: "sec-finra-compliance",
        question: "Recordkeeping and auditability for AI interactions (SEC 17a-4, FINRA rules)?",
        options: [
          { label: "A", text: "No capture of AI prompts/responses", score: 1 },
          { label: "B", text: "Partial logging without immutability", score: 2 },
          { label: "C", text: "Logs captured; basic retention", score: 3 },
          { label: "D", text: "Immutable WORM storage, full audit trails for prompts/responses/metadata", score: 4 },
        ],
      },
      {
        id: "q15",
        section: "sec-finra-compliance",
        question: "Bias, fairness, and explainability measures for AI outputs (NIST/SEC/FINRA risks)?",
        options: [
          { label: "A", text: "No bias testing", score: 1 },
          { label: "B", text: "Limited awareness", score: 2 },
          { label: "C", text: "Basic testing for key use cases", score: 3 },
          { label: "D", text: "Regular bias audits, explainability tools, and fairness monitoring", score: 4 },
        ],
      },
    ],
  },
  {
    id: "organization-readiness",
    title: "Organization, Skills, and Overall Readiness",
    description: "Assess your team's readiness and vendor management for AI adoption.",
    questions: [
      {
        id: "q16",
        section: "organization-readiness",
        question: "Organizational readiness for AI adoption and compliance change?",
        options: [
          { label: "A", text: "Low awareness/skills; resistance expected", score: 1 },
          { label: "B", text: "Some awareness; no training", score: 2 },
          { label: "C", text: "Training plans/champions identified", score: 3 },
          { label: "D", text: "Strong skilling, leadership comms, and cultural openness with compliance focus", score: 4 },
        ],
      },
      {
        id: "q17",
        section: "organization-readiness",
        question: "Third-party AI/tool risk management (vendor oversight per SEC/FINRA/NIST)?",
        options: [
          { label: "A", text: "No vendor AI assessment", score: 1 },
          { label: "B", text: "Basic due diligence", score: 2 },
          { label: "C", text: "Contracts/controls for key vendors", score: 3 },
          { label: "D", text: "Comprehensive third-party risk framework including data provenance and model integrity", score: 4 },
        ],
      },
      {
        id: "q18",
        section: "organization-readiness",
        question: "Overall AI integration and compliance self-assessment?",
        options: [
          { label: "A", text: "Not ready – major gaps in foundations/compliance", score: 1 },
          { label: "B", text: "Partially ready – strong in some areas", score: 2 },
          { label: "C", text: "Moderately ready – can pilot with controls", score: 3 },
          { label: "D", text: "Highly ready – positioned for broad, secure, regulated rollout", score: 4 },
        ],
      },
    ],
  },
];

export const calculateAIComplianceScore = (answers: Record<string, number>) => {
  const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
  const maxScore = 72; // 18 questions × 4 points max
  const percentage = Math.round((totalScore / maxScore) * 100);

  let readinessLevel: "high" | "good" | "needs-work";
  let readinessLabel: string;
  let readinessDescription: string;

  if (totalScore >= 54) {
    readinessLevel = "high";
    readinessLabel = "Strong Readiness";
    readinessDescription = "Your organization is well-positioned for compliant AI scaling. You have robust governance, security controls, and regulatory alignment in place.";
  } else if (totalScore >= 36) {
    readinessLevel = "good";
    readinessLabel = "Good Foundation";
    readinessDescription = "You have a solid foundation for AI adoption. Address identified gaps in governance, recordkeeping, or compliance before broad rollout.";
  } else {
    readinessLevel = "needs-work";
    readinessLabel = "Significant Remediation Needed";
    readinessDescription = "Significant foundational work is needed, especially in compliance and risk areas. Prioritize governance, recordkeeping, and SEC/FINRA alignment before AI deployment.";
  }

  return {
    totalScore,
    maxScore,
    percentage,
    readinessLevel,
    readinessLabel,
    readinessDescription,
  };
};

export const getComplianceSectionScore = (
  sectionId: string,
  answers: Record<string, number>
) => {
  const section = aiComplianceSections.find((s) => s.id === sectionId);
  if (!section) return { score: 0, maxScore: 0, percentage: 0 };

  const questionIds = section.questions.map((q) => q.id);
  const score = questionIds.reduce((sum, id) => sum + (answers[id] || 0), 0);
  const maxScore = section.questions.length * 4;
  const percentage = Math.round((score / maxScore) * 100);

  return { score, maxScore, percentage };
};
