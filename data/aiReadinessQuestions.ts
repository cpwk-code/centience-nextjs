export interface AIReadinessQuestion {
  id: string;
  section: string;
  question: string;
  options: {
    label: string;
    text: string;
    score: number;
  }[];
}

export interface AIReadinessSection {
  id: string;
  title: string;
  description: string;
  questions: AIReadinessQuestion[];
}

export const aiReadinessSections: AIReadinessSection[] = [
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
          { label: "A", text: "Primarily on-premise (e.g., self-hosted Exchange, SharePoint Server, custom apps)", score: 1 },
          { label: "B", text: "Primarily Google Workspace", score: 2 },
          { label: "C", text: "Primarily Microsoft 365", score: 3 },
          { label: "D", text: "Hybrid (multiple platforms actively used with integration in place)", score: 4 },
        ],
      },
      {
        id: "q2",
        section: "current-environment",
        question: "What licensing/edition level supports AI features?",
        options: [
          { label: "A", text: "Basic/free tier or legacy on-premise without modern API support", score: 1 },
          { label: "B", text: "Google Workspace Business Standard or equivalent; no Gemini add-on", score: 2 },
          { label: "C", text: "Microsoft 365 E3/Business Premium or Google Workspace Business Plus (partial AI support)", score: 3 },
          { label: "D", text: "Microsoft 365 E5/CoPilot license or Google Workspace Enterprise Plus with Gemini enabled", score: 4 },
        ],
      },
      {
        id: "q3",
        section: "current-environment",
        question: "Current AI tool usage in the environment?",
        options: [
          { label: "A", text: "No AI tools integrated or piloted yet", score: 1 },
          { label: "B", text: "Basic/third-party AI add-ons in limited use (e.g., experimental)", score: 2 },
          { label: "C", text: "Native AI features (CoPilot/Gemini) in pilot or select teams", score: 3 },
          { label: "D", text: "Widespread, governed use of native AI + custom integrations", score: 4 },
        ],
      },
    ],
  },
  {
    id: "strategy-use-cases",
    title: "Strategy and Use Cases",
    description: "Evaluate your AI strategy alignment and prioritized use cases.",
    questions: [
      {
        id: "q4",
        section: "strategy-use-cases",
        question: "Have you identified and prioritized AI use cases?",
        options: [
          { label: "A", text: "No use cases defined yet", score: 1 },
          { label: "B", text: "A few informal ideas discussed", score: 2 },
          { label: "C", text: "Specific use cases documented for key teams (e.g., email summarization, data analysis)", score: 3 },
          { label: "D", text: "Prioritized, approved use cases with business KPIs and executive alignment", score: 4 },
        ],
      },
      {
        id: "q5",
        section: "strategy-use-cases",
        question: "Level of strategic alignment and planning for AI adoption?",
        options: [
          { label: "A", text: "No formal plan or executive sponsorship", score: 1 },
          { label: "B", text: "High-level interest but no detailed roadmap", score: 2 },
          { label: "C", text: "Adoption plan exists with communication and training outlined", score: 3 },
          { label: "D", text: "Detailed roadmap, change management, and success metrics in place", score: 4 },
        ],
      },
    ],
  },
  {
    id: "data-security",
    title: "Data and Security",
    description: "Assess your data quality, governance, and security controls for AI.",
    questions: [
      {
        id: "q6",
        section: "data-security",
        question: "How would you describe your data quality and accessibility for AI?",
        options: [
          { label: "A", text: "Data is scattered, unclean, or poorly organized", score: 1 },
          { label: "B", text: "Basic organization exists but limited semantic/search readiness", score: 2 },
          { label: "C", text: "Data is mostly clean and accessible via platform search/indexing", score: 3 },
          { label: "D", text: "High-quality, labeled, semantically indexed data with strong governance", score: 4 },
        ],
      },
      {
        id: "q7",
        section: "data-security",
        question: "Data governance and classification maturity?",
        options: [
          { label: "A", text: "No formal sensitivity labeling or policies", score: 1 },
          { label: "B", text: "Basic policies exist but inconsistent application", score: 2 },
          { label: "C", text: "Sensitivity labels and DLP rules applied in most areas", score: 3 },
          { label: "D", text: "Advanced governance (e.g., Purview labels, Google labels, automated classification, retention policies)", score: 4 },
        ],
      },
      {
        id: "q8",
        section: "data-security",
        question: "Security and compliance controls for AI data processing?",
        options: [
          { label: "A", text: "Limited or no AI-specific controls (e.g., no audit for AI prompts)", score: 1 },
          { label: "B", text: "Standard security in place but no AI risk assessment", score: 2 },
          { label: "C", text: "Controls address key risks (e.g., encryption, access restrictions, basic AI DLP)", score: 3 },
          { label: "D", text: "Comprehensive (GDPR/HIPAA-ready, AI prompt auditing, data residency enforcement)", score: 4 },
        ],
      },
    ],
  },
  {
    id: "technical-infrastructure",
    title: "Technical Infrastructure",
    description: "Evaluate your infrastructure readiness for AI workloads.",
    questions: [
      {
        id: "q9",
        section: "technical-infrastructure",
        question: "Infrastructure readiness for AI workloads/integration?",
        options: [
          { label: "A", text: "On-premise legacy hardware with no GPU/compute for local AI", score: 1 },
          { label: "B", text: "Cloud platform but limited bandwidth/API readiness", score: 2 },
          { label: "C", text: "Adequate compute (e.g., M365/GWS APIs enabled, some on-prem scaling)", score: 3 },
          { label: "D", text: "Fully ready (e.g., high-bandwidth, GPUs for local models, semantic indexing, MLOps if custom)", score: 4 },
        ],
      },
    ],
  },
  {
    id: "organization-governance",
    title: "Organization, Skills, and Governance",
    description: "Assess your team's readiness and governance framework for AI adoption.",
    questions: [
      {
        id: "q10",
        section: "organization-governance",
        question: "Organizational and user readiness for AI change?",
        options: [
          { label: "A", text: "Low awareness/skills; resistance expected", score: 1 },
          { label: "B", text: "Some awareness but no structured training", score: 2 },
          { label: "C", text: "Training plans and champions identified", score: 3 },
          { label: "D", text: "Strong cultural openness, skilling programs, and leadership communication", score: 4 },
        ],
      },
      {
        id: "q11",
        section: "organization-governance",
        question: "AI governance framework maturity?",
        options: [
          { label: "A", text: "No policies for ethical use, transparency, or monitoring", score: 1 },
          { label: "B", text: "Basic guidelines drafted", score: 2 },
          { label: "C", text: "Policies cover responsible AI, limitations disclosure, and risk management", score: 3 },
          { label: "D", text: "Mature framework with ongoing model monitoring, explainability, and ethics reviews", score: 4 },
        ],
      },
      {
        id: "q12",
        section: "organization-governance",
        question: "Overall readiness self-assessment?",
        options: [
          { label: "A", text: "Not ready – major foundational gaps exist", score: 1 },
          { label: "B", text: "Partially ready – some areas strong, others need work", score: 2 },
          { label: "C", text: "Moderately ready – can start small pilots now", score: 3 },
          { label: "D", text: "Highly ready – positioned for broad, secure, and effective rollout", score: 4 },
        ],
      },
    ],
  },
];

export const calculateAIReadinessScore = (answers: Record<string, number>) => {
  const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
  const maxScore = 48; // 12 questions × 4 points max
  const percentage = Math.round((totalScore / maxScore) * 100);

  let readinessLevel: "high" | "good" | "needs-work";
  let readinessLabel: string;
  let readinessDescription: string;

  if (totalScore >= 36) {
    readinessLevel = "high";
    readinessLabel = "Strong Readiness";
    readinessDescription = "Your organization is well-positioned for AI integration. Proceed with confidence on broad, secure, and effective AI rollout.";
  } else if (totalScore >= 24) {
    readinessLevel = "good";
    readinessLabel = "Good Foundation";
    readinessDescription = "You have a solid foundation for AI adoption. Target the identified gaps before scaling your AI initiatives.";
  } else {
    readinessLevel = "needs-work";
    readinessLabel = "Remediation Needed";
    readinessDescription = "Significant foundational work is needed before AI integration. Focus on addressing infrastructure, governance, and data readiness gaps.";
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

export const getSectionScore = (
  sectionId: string,
  answers: Record<string, number>
) => {
  const section = aiReadinessSections.find((s) => s.id === sectionId);
  if (!section) return { score: 0, maxScore: 0, percentage: 0 };

  const questionIds = section.questions.map((q) => q.id);
  const score = questionIds.reduce((sum, id) => sum + (answers[id] || 0), 0);
  const maxScore = section.questions.length * 4;
  const percentage = Math.round((score / maxScore) * 100);

  return { score, maxScore, percentage };
};
