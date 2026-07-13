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
      "Centience HIPAA governance assessments typically complete in minutes. The assessment identifies technical safeguard gaps, evaluates AI tools touching patient data, reviews Business Associate Agreement coverage, and delivers a prioritized remediation roadmap. No commitment is required.",
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
      "Centience governance assessments typically complete in minutes. The assessment covers infrastructure, cybersecurity posture, AI usage across the organization, and compliance readiness — and delivers a prioritized roadmap regardless of whether you engage further. No commitment is required.",
  },
];

export const lawFirmsFaqs: FaqItem[] = [
  {
    question: "What are a law firm's ethical duties when using AI on client matters?",
    answer:
      "ABA Model Rules 1.1 (competence), 1.6 (confidentiality), and 5.3 (supervision of nonlawyer assistance) require lawyers to understand the AI tools they use, protect client confidential information from disclosure to third-party AI systems, and supervise how AI handles matter data. A defensible AI governance program documents which tools are approved, what data they may touch, and how confidentiality is preserved.",
  },
  {
    question: "Can law firms use public AI tools like ChatGPT with client data?",
    answer:
      "Only with governance. Entering client confidential information into a public AI tool that may train on inputs can breach ABA Rule 1.6. Firms need a written AI use policy, approved tools with appropriate data protections and no-training terms, and technical controls that keep confidential matter data out of ungoverned tools.",
  },
  {
    question: "What do client security questionnaires and outside counsel guidelines now require?",
    answer:
      "Corporate clients increasingly require firms to demonstrate MFA, encryption, access controls, breach-notification procedures, vendor risk management, and AI governance. Firms that cannot produce evidence these controls operate continuously lose engagements or receive findings in client security reviews.",
  },
  {
    question: "How long does a law firm governance assessment take?",
    answer:
      "Centience governance assessments complete in minutes. You get a 0–100 score across security, confidentiality, records, and AI governance, a peer benchmark, and a prioritized roadmap — with no commitment required.",
  },
];

export const privateEquityFaqs: FaqItem[] = [
  {
    question: "How does SEC oversight apply to a PE firm's technology governance?",
    answer:
      "SEC-registered advisers, including private equity firms, are subject to Regulation S-P safeguards, books-and-records requirements, and examination priorities covering cybersecurity governance, vendor oversight, and incident response. AI used in diligence, valuation, or portfolio monitoring falls under the same governance expectations.",
  },
  {
    question: "Can a PE firm standardize governance across its portfolio companies?",
    answer:
      "Yes — and it is increasingly expected. Operating partners use a single governance framework to assess and uplift portfolio-company technology risk, standardize cyber controls, and produce board-level reporting. One master governance relationship can cover many portfolio companies.",
  },
  {
    question: "Why is technology governance a value-creation lever in private equity?",
    answer:
      "Governance gaps are diligence risks and post-close liabilities — a breach or exam finding at a portfolio company can impair value and complicate exit. Standardized, evidenced governance reduces risk, improves exit readiness, and can differentiate a firm in competitive processes.",
  },
  {
    question: "How long does a governance assessment take?",
    answer:
      "Centience governance assessments complete in minutes — scoring the firm (or a portfolio company) 0–100 across infrastructure, cybersecurity, data, and AI, with a prioritized roadmap and no commitment required.",
  },
];

export const accountingCpaFaqs: FaqItem[] = [
  {
    question: "What governance do accounting and CPA firms need when adopting AI?",
    answer:
      "Firms using AI in tax research, audit sampling, or document analysis must govern where client financial data flows, maintain confidentiality under the AICPA Code of Professional Conduct, protect taxpayer data under IRS safeguards (Publication 4557 and IRC Section 7216), and document AI oversight. Ungoverned AI adoption creates real professional-liability exposure.",
  },
  {
    question: "What are the IRS data-security requirements for firms handling taxpayer data?",
    answer:
      "IRS Publication 4557 and the FTC Safeguards Rule require a written information security plan, access controls, encryption, vendor management, and incident response for firms that handle taxpayer information. Many firms have the policies but cannot evidence that the controls operate continuously.",
  },
  {
    question: "Does AI use affect a firm's SOC 2 or client audits?",
    answer:
      "Yes. Clients and their auditors increasingly ask how firms govern the AI tools that touch their data. A documented AI inventory, access controls, and vendor diligence are becoming standard items in client security reviews and SOC 2 examinations.",
  },
  {
    question: "How long does a governance assessment take?",
    answer:
      "Centience governance assessments complete in minutes, scoring your firm 0–100 across security, records, supervision, infrastructure, and AI — with a prioritized roadmap and no commitment required.",
  },
];

export const nonProfitFaqs: FaqItem[] = [
  {
    question: "What technology governance do non-profits actually need?",
    answer:
      "Non-profits handling donor, beneficiary, or health data face many of the same obligations as regulated businesses — data protection, breach notification, and increasingly AI governance — often with fewer resources. A right-sized governance program protects donor trust and satisfies grantor and board requirements.",
  },
  {
    question: "Why do funders and boards ask about cybersecurity and AI now?",
    answer:
      "Grantmakers, insurers, and boards increasingly require evidence of basic controls — MFA, tested backups, access controls, and incident response — plus a policy for AI use with sensitive data. Non-profits that cannot demonstrate these controls risk funding and reputational harm after an incident.",
  },
  {
    question: "How can a resource-constrained non-profit govern AI use?",
    answer:
      "Start with an inventory of the AI tools in use, a simple written AI use policy, and controls that keep donor and beneficiary data out of ungoverned tools. A managed governance program supplies the oversight without requiring in-house security staff.",
  },
  {
    question: "How long does a governance assessment take?",
    answer:
      "Centience governance assessments complete in minutes — a 0–100 score across security, data, and AI governance with a prioritized, right-sized roadmap and no commitment required.",
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
