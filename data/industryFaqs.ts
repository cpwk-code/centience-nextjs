// Single source of truth for industry FAQ content.
// Consumed by BOTH the visible <FAQSection> on the page AND the FAQPage
// JSON-LD in the route file — so the structured data always matches what
// is rendered on-page (required by Google's FAQ structured-data policy).

export interface FaqItem {
  question: string;
  answer: string;
}

export const healthcareFaqs: FaqItem[] = [
  {
    question: "What HIPAA requirements apply to AI tools in clinical settings?",
    answer:
      "AI tools that access, process, or transmit electronic protected health information (ePHI) are subject to HIPAA Security Rule requirements including technical safeguards (access controls, audit controls, integrity controls, transmission security), administrative safeguards (risk analysis, workforce training, business associate management), and physical safeguards. A HIPAA-compliant AI governance framework must include a risk assessment for each AI tool, Business Associate Agreements for AI vendors, and documented access controls.",
  },
  {
    question: "Are healthcare organizations required to assess AI vendor HIPAA compliance?",
    answer:
      "Yes. Any AI vendor that creates, receives, maintains, or transmits ePHI on behalf of a covered entity is a Business Associate and must sign a Business Associate Agreement (BAA). Healthcare organizations must also conduct vendor security assessments and ongoing monitoring of AI vendors with access to patient data. HIPAA civil penalty caps now exceed $2 million annually per violation category as of January 2026.",
  },
  {
    question: "What is a HIPAA technical safeguard for AI tools?",
    answer:
      "HIPAA technical safeguards for AI tools include: unique user identification and access controls limiting access to ePHI to authorized users only; audit controls that record and examine activity in systems containing ePHI; integrity controls ensuring ePHI is not improperly altered or destroyed; and transmission security protecting ePHI transmitted over electronic communications networks. AI tools must be governed within this framework, not operated outside it.",
  },
  {
    question: "How long does a HIPAA AI governance assessment take?",
    answer:
      "Centience HIPAA governance assessments typically complete within 5 business days. The assessment identifies technical safeguard gaps, evaluates AI tools touching patient data, reviews Business Associate Agreement coverage, and delivers a prioritized remediation roadmap. No commitment is required.",
  },
];

export const financialServicesFaqs: FaqItem[] = [
  {
    question: "What does FINRA expect in its 2026 AI governance examinations?",
    answer:
      "FINRA's 2026 Annual Regulatory Oversight Report introduced a dedicated Generative AI section requiring broker-dealers to assess regulatory compliance before deploying GenAI, establish supervision and governance frameworks, conduct robust testing for bias and hallucinations, monitor AI outputs continuously, and capture AI-enabled communications in books and records. Examiners will look for documented AI policies, evidence of human oversight, and vendor diligence records.",
  },
  {
    question: "How should broker-dealers prepare for SEC FY2026 cybersecurity examinations?",
    answer:
      "SEC FY2026 examination priorities explicitly flag cybersecurity governance, Regulation S-P compliance, identity theft prevention controls, vendor oversight, and incident response preparedness. Firms should have written cybersecurity policies, documented vendor risk assessments, an incident response plan, and audit-ready evidence of controls operating continuously — not just at the time of examination.",
  },
  {
    question: "What is required in a FINRA-compliant AI governance framework?",
    answer:
      "A FINRA-compliant AI governance framework must include: written policies for AI development, deployment, use, and monitoring; supervision procedures covering AI use cases and model risks; testing protocols for accuracy, bias, and hallucinations; ongoing human monitoring of model outputs; capture of AI-enabled communications in books and records; and vendor diligence for third-party AI tools. FINRA expects firms to apply existing supervisory rules to AI just as they apply to other technology.",
  },
  {
    question: "How long does a technology governance assessment take?",
    answer:
      "Centience governance assessments typically complete within 5 business days. The assessment covers infrastructure, cybersecurity posture, AI usage across the organization, and compliance readiness — and delivers a prioritized roadmap regardless of whether you engage further. No commitment is required.",
  },
];

/** Build FAQPage JSON-LD from a list of FAQ items. */
export function buildFaqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
