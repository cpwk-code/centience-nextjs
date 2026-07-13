/**
 * Centience Governance Score — Healthcare / HIPAA question set (Phase 2 ICP).
 *
 * Same engine and shape as the financial-services set (`lib/governanceScore.ts`),
 * with a HIPAA regulatory skin. ~18 questions across the 5 domains, mapped to the
 * HIPAA Security Rule, Privacy Rule, Breach Notification Rule, and HITECH.
 */

import type { ScoreQuestion } from "@/lib/governanceScore";

export const healthcareScoreQuestions: ScoreQuestion[] = [
  // ── Cybersecurity & Access ──────────────────────────────────────────────────
  {
    id: "hc-cyber-risk-analysis",
    domain: "cybersecurity",
    weight: 2,
    critical: true,
    regulation: "HIPAA Security Rule §164.308(a)(1) — Risk Analysis",
    gapConsequence: "A current security risk analysis is the #1 item OCR requests after a breach; its absence is the most-cited HIPAA violation.",
    question: "Has your organization completed a HIPAA security risk analysis within the past 12 months?",
    options: [
      { label: "Yes — completed and documented within 12 months", points: 3 },
      { label: "Completed but >12 months ago", points: 2 },
      { label: "Informal / partial", points: 1 },
      { label: "No / unsure", points: 0 },
    ],
  },
  {
    id: "hc-cyber-mfa",
    domain: "cybersecurity",
    weight: 2,
    critical: true,
    regulation: "HIPAA §164.312(a)(1) Access Control / §164.312(d) Authentication",
    gapConsequence: "Without enforced MFA you can't demonstrate access to ePHI is restricted to authorized users.",
    question: "Is multi-factor authentication enforced for all access to systems containing ePHI?",
    options: [
      { label: "Yes — enforced for all users", points: 3 },
      { label: "Most systems, some exceptions", points: 2 },
      { label: "Remote access only", points: 1 },
      { label: "No / unsure", points: 0 },
    ],
  },
  {
    id: "hc-cyber-edr",
    domain: "cybersecurity",
    weight: 1,
    regulation: "HIPAA §164.308(a)(5)(ii)(B) — Malicious Software Protection",
    gapConsequence: "Unmanaged endpoints with ePHI are the leading cause of reportable healthcare breaches.",
    question: "Are all devices accessing ePHI centrally managed with modern endpoint protection (EDR)?",
    options: [
      { label: "Yes — all managed with EDR", points: 3 },
      { label: "Most devices", points: 2 },
      { label: "Basic antivirus only", points: 1 },
      { label: "No / unsure", points: 0 },
    ],
  },
  {
    id: "hc-cyber-irp",
    domain: "cybersecurity",
    weight: 2,
    critical: true,
    regulation: "HIPAA §164.308(a)(6) — Security Incident Procedures",
    gapConsequence: "You must be able to detect, respond to, and document security incidents — and notify within 60 days of a breach.",
    question: "Do you have documented, tested security incident response and breach-notification procedures?",
    options: [
      { label: "Yes — documented and tested within 12 months", points: 3 },
      { label: "Documented but not tested", points: 2 },
      { label: "Informal", points: 1 },
      { label: "No / unsure", points: 0 },
    ],
  },

  // ── Data Protection & Records ────────────────────────────────────────────────
  {
    id: "hc-data-encryption",
    domain: "data_protection",
    weight: 2,
    critical: true,
    regulation: "HIPAA §164.312(a)(2)(iv) & §164.312(e)(2)(ii) — Encryption",
    gapConsequence: "Encryption is the breach safe-harbor: encrypted ePHI lost is not a reportable breach. Unencrypted ePHI is your biggest liability.",
    question: "Is ePHI encrypted both at rest and in transit across all systems?",
    options: [
      { label: "Yes — encrypted at rest and in transit everywhere", points: 3 },
      { label: "Mostly, some gaps", points: 2 },
      { label: "In transit only (or at rest only)", points: 1 },
      { label: "No / unsure", points: 0 },
    ],
  },
  {
    id: "hc-data-inventory",
    domain: "data_protection",
    weight: 1,
    regulation: "HIPAA Privacy Rule §164.514 / Security Rule",
    gapConsequence: "If you don't know where ePHI lives, you can't safeguard it or scope a breach.",
    question: "Can your organization identify and monitor everywhere ePHI is stored across its systems?",
    options: [
      { label: "Yes — continuous data discovery in place", points: 3 },
      { label: "Periodic manual review", points: 2 },
      { label: "Limited visibility", points: 1 },
      { label: "No / unsure", points: 0 },
    ],
  },
  {
    id: "hc-data-retention",
    domain: "data_protection",
    weight: 1,
    regulation: "HIPAA §164.316(b)(2) — 6-year documentation retention",
    gapConsequence: "HIPAA requires documentation be retained 6 years; short retention is a compliance gap.",
    question: "Are HIPAA policies, procedures, and required documentation retained for the mandated 6 years?",
    options: [
      { label: "Yes — enforced 6-year retention", points: 3 },
      { label: "Retained but not systematically", points: 2 },
      { label: "Inconsistent", points: 1 },
      { label: "No / unsure", points: 0 },
    ],
  },
  {
    id: "hc-data-disposal",
    domain: "data_protection",
    weight: 1,
    regulation: "HIPAA §164.310(d)(2) — Media Disposal",
    gapConsequence: "Improper disposal of devices/media containing ePHI is a recurring OCR enforcement action.",
    question: "Do you have a documented, enforced process for secure disposal of media and devices containing ePHI?",
    options: [
      { label: "Yes — documented and enforced", points: 3 },
      { label: "Informal process", points: 1 },
      { label: "No / unsure", points: 0 },
    ],
  },

  // ── Compliance & Governance ────────────────────────────────────────────────────
  {
    id: "hc-ops-baa",
    domain: "compliance_ops",
    weight: 2,
    critical: true,
    regulation: "HIPAA §164.308(b)(1) — Business Associate Agreements",
    gapConsequence: "Every vendor touching ePHI needs a signed BAA; a missing BAA is a standalone violation and shifts liability to you.",
    question: "Do you have signed Business Associate Agreements (BAAs) with every vendor that handles ePHI?",
    options: [
      { label: "Yes — all vendors under current BAAs", points: 3 },
      { label: "Most vendors", points: 2 },
      { label: "Some / unsure which", points: 1 },
      { label: "No / unsure", points: 0 },
    ],
  },
  {
    id: "hc-ops-policies",
    domain: "compliance_ops",
    weight: 1,
    regulation: "HIPAA §164.316 — Policies and Procedures",
    gapConsequence: "Written, current HIPAA policies are required and are among the first things an auditor reviews.",
    question: "Does your organization maintain written HIPAA policies and procedures, reviewed within the past year?",
    options: [
      { label: "Yes — current and reviewed within 12 months", points: 3 },
      { label: "Exist but stale (>12 months)", points: 2 },
      { label: "Incomplete", points: 1 },
      { label: "No / unsure", points: 0 },
    ],
  },
  {
    id: "hc-ops-training",
    domain: "compliance_ops",
    weight: 1,
    regulation: "HIPAA §164.308(a)(5) — Security Awareness Training",
    gapConsequence: "Workforce security training is mandatory and must be documented per employee.",
    question: "Do all workforce members complete documented HIPAA security awareness training at least annually?",
    options: [
      { label: "Yes — annual, tracked per employee", points: 3 },
      { label: "Done inconsistently", points: 1 },
      { label: "No / unsure", points: 0 },
    ],
  },
  {
    id: "hc-ops-evidence",
    domain: "compliance_ops",
    weight: 1,
    regulation: "OCR Audit / HIPAA compliance",
    gapConsequence: "In an OCR audit you must produce evidence of controls on demand — scrambling signals systemic gaps.",
    question: "Could you produce continuous evidence that HIPAA safeguards were active over the past 6 months, on demand?",
    options: [
      { label: "Yes — evidence maintained continuously", points: 3 },
      { label: "Partially — we'd assemble it", points: 1 },
      { label: "No — we'd scramble", points: 0 },
    ],
  },

  // ── Infrastructure & Resilience ────────────────────────────────────────────────
  {
    id: "hc-infra-contingency",
    domain: "infrastructure",
    weight: 2,
    critical: true,
    regulation: "HIPAA §164.308(a)(7) — Contingency Plan",
    gapConsequence: "A data backup plan, disaster recovery plan, and emergency-mode operations are explicitly required by the Security Rule.",
    question: "Do you have a tested contingency plan (data backup + disaster recovery + emergency operations)?",
    options: [
      { label: "Yes — documented and tested within 12 months", points: 3 },
      { label: "Backups exist but recovery not tested", points: 2 },
      { label: "Informal / partial", points: 1 },
      { label: "No / unsure", points: 0 },
    ],
  },
  {
    id: "hc-infra-maintenance",
    domain: "infrastructure",
    weight: 1,
    regulation: "HIPAA §164.308(a)(1)(ii)(B) — Risk Management",
    gapConsequence: "Unmanaged, unpatched infrastructure undermines every technical safeguard.",
    question: "How is your core IT infrastructure maintained, patched, and monitored?",
    options: [
      { label: "Proactively managed and monitored 24/7", points: 3 },
      { label: "Scheduled maintenance", points: 2 },
      { label: "Reactive only", points: 1 },
      { label: "No defined process / unsure", points: 0 },
    ],
  },
  {
    id: "hc-infra-audit-logs",
    domain: "infrastructure",
    weight: 1,
    regulation: "HIPAA §164.312(b) — Audit Controls",
    gapConsequence: "You must record and examine activity in systems with ePHI; no audit logging is a technical-safeguard failure.",
    question: "Do systems containing ePHI have audit logging enabled and reviewed?",
    options: [
      { label: "Yes — logged and reviewed regularly", points: 3 },
      { label: "Logged but rarely reviewed", points: 2 },
      { label: "Limited logging", points: 1 },
      { label: "No / unsure", points: 0 },
    ],
  },

  // ── AI Governance ────────────────────────────────────────────────────────────
  {
    id: "hc-ai-inventory",
    domain: "ai_governance",
    weight: 1,
    critical: true,
    regulation: "NIST AI RMF / HIPAA (PHI in AI tools)",
    gapConsequence: "AI tools (scribes, chatbots, coding assistants) that touch PHI without oversight are an emerging OCR concern and a BAA question.",
    question: "Do you maintain an inventory of AI tools that may process PHI, with risk assessments and BAAs where required?",
    options: [
      { label: "Yes — inventoried, risk-assessed, BAAs in place", points: 3 },
      { label: "Partial inventory", points: 2 },
      { label: "Aware but not tracked", points: 1 },
      { label: "No / unsure", points: 0 },
    ],
  },
  {
    id: "hc-ai-policy",
    domain: "ai_governance",
    weight: 1,
    regulation: "NIST AI RMF / HIPAA Privacy Rule",
    gapConsequence: "Without an AI use policy, staff may paste PHI into consumer AI tools with no BAA — an unauthorized disclosure.",
    question: "Do you have a documented policy governing how staff may use AI tools with patient data?",
    options: [
      { label: "Yes — documented, communicated, enforced", points: 3 },
      { label: "Draft / informal", points: 1 },
      { label: "No policy / unsure", points: 0 },
    ],
  },
];
