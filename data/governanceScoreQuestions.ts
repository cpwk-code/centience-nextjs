/**
 * Centience Governance Score — Financial Services question set (Phase 1 ICP).
 *
 * ~20 questions across 5 domains, weighted and mapped to the FINRA/SEC rules
 * they evidence. Feeds `lib/governanceScore.ts`. Other verticals (healthcare,
 * legal) follow this same shape with their own regulatory skin.
 *
 * Option ordering: best posture first (highest points). `critical: true` marks
 * controls whose failure is a material exam/enforcement risk (drives tier routing).
 */

import type { ScoreQuestion } from "@/lib/governanceScore";

export const financialServicesScoreQuestions: ScoreQuestion[] = [
  // ── Cybersecurity & Access ──────────────────────────────────────────────────
  {
    id: "cyber-mfa",
    domain: "cybersecurity",
    weight: 2,
    critical: true,
    regulation: "Reg S-P (amended) / GLBA Safeguards",
    gapConsequence: "Without enforced MFA you can't prove access to customer data was controlled — a common Reg S-P deficiency.",
    question: "Is multi-factor authentication (MFA) enforced for all users accessing firm systems and customer data?",
    options: [
      { label: "Yes — enforced for all users, no exceptions", points: 3 },
      { label: "Enforced for most, but some exclusions exist", points: 2 },
      { label: "Only for remote/VPN access", points: 1 },
      { label: "No / unsure", points: 0 },
    ],
  },
  {
    id: "cyber-edr",
    domain: "cybersecurity",
    weight: 1,
    regulation: "FINRA Notice 22-29 / Reg S-P",
    gapConsequence: "Unmanaged endpoints with no EDR are the top vector for a reportable breach.",
    question: "Are all endpoints (laptops, workstations, mobile) centrally managed with modern endpoint protection (EDR)?",
    options: [
      { label: "Yes — all devices managed with EDR and monitored", points: 3 },
      { label: "Most devices, some gaps", points: 2 },
      { label: "Basic antivirus only", points: 1 },
      { label: "No / unsure", points: 0 },
    ],
  },
  {
    id: "cyber-irp",
    domain: "cybersecurity",
    weight: 2,
    critical: true,
    regulation: "Reg S-P (amended) — Incident Response",
    gapConsequence: "Reg S-P now mandates a written IRP and 30-day customer notification — the absence of one is a standalone finding.",
    question: "Does your firm have a tested incident response plan with documented regulatory notification procedures?",
    options: [
      { label: "Yes — documented and tested within 12 months", points: 3 },
      { label: "Documented but not recently tested", points: 2 },
      { label: "Informal / undocumented", points: 1 },
      { label: "No / unsure", points: 0 },
    ],
  },
  {
    id: "cyber-vuln",
    domain: "cybersecurity",
    weight: 1,
    regulation: "FINRA Notice 22-29",
    gapConsequence: "Unpatched systems are both an exam finding and the most common breach root-cause.",
    question: "How are security patches and vulnerabilities managed across your systems?",
    options: [
      { label: "Automated patching with regular vulnerability scanning", points: 3 },
      { label: "Scheduled manual patching", points: 2 },
      { label: "Ad hoc, when issues arise", points: 1 },
      { label: "No defined process / unsure", points: 0 },
    ],
  },

  // ── Data Protection & Records ────────────────────────────────────────────────
  {
    id: "data-archiving",
    domain: "data_protection",
    weight: 2,
    critical: true,
    regulation: "SEC Rule 17a-4 / FINRA Rule 4511",
    gapConsequence: "Electronic comms must be captured in WORM/immutable form — a books-and-records failure is a near-automatic deficiency.",
    question: "Are electronic communications (email, Teams/Slack, messaging) archived immutably and supervised per 17a-4 / 4511?",
    options: [
      { label: "Yes — all channels archived immutably and supervised", points: 3 },
      { label: "Email only; other channels not covered", points: 2 },
      { label: "Retained but not immutable/supervised", points: 1 },
      { label: "No / unsure", points: 0 },
    ],
  },
  {
    id: "data-retention",
    domain: "data_protection",
    weight: 1,
    critical: true,
    regulation: "SEC Rule 17a-4 (6-year retention)",
    gapConsequence: "Records must be retained ≥6 years, first 2 readily accessible — short retention is a direct 17a-4 violation.",
    question: "Do your retention policies guarantee business records are kept for the required 6-year minimum?",
    options: [
      { label: "Yes — enforced retention policies ≥6 years", points: 3 },
      { label: "Retention configured but not verified/enforced", points: 2 },
      { label: "Shorter or inconsistent retention", points: 1 },
      { label: "No defined retention / unsure", points: 0 },
    ],
  },
  {
    id: "data-dlp",
    domain: "data_protection",
    weight: 1,
    regulation: "Reg S-P / GLBA Safeguards",
    gapConsequence: "No visibility into where SSNs/account numbers live means you can't safeguard or prove protection of customer data.",
    question: "Can your firm identify and monitor where sensitive customer data (SSNs, account numbers) resides across its systems?",
    options: [
      { label: "Yes — continuous data discovery/DLP in place", points: 3 },
      { label: "Periodic manual review", points: 2 },
      { label: "Limited / only when prompted", points: 1 },
      { label: "No / unsure", points: 0 },
    ],
  },
  {
    id: "data-encryption",
    domain: "data_protection",
    weight: 1,
    regulation: "Reg S-P (amended)",
    gapConsequence: "Unencrypted customer data at rest weakens breach-safe-harbor and is an examiner focus.",
    question: "Is customer data encrypted at rest across storage, email, and cloud repositories?",
    options: [
      { label: "Yes — encryption enforced everywhere", points: 3 },
      { label: "Most systems, some gaps", points: 2 },
      { label: "Only some systems", points: 1 },
      { label: "No / unsure", points: 0 },
    ],
  },

  // ── Compliance & Supervision ──────────────────────────────────────────────────
  {
    id: "ops-wsp",
    domain: "compliance_ops",
    weight: 2,
    critical: true,
    regulation: "FINRA Rule 3110 — Supervision",
    gapConsequence: "WSPs must exist and be reviewed annually; a stale or missing WSP is a foundational supervision failure.",
    question: "Does your firm have Written Supervisory Procedures (WSPs) covering technology, reviewed within the past 12 months?",
    options: [
      { label: "Yes — current and reviewed within 12 months", points: 3 },
      { label: "Exist but >12 months since review", points: 2 },
      { label: "Incomplete / partial coverage", points: 1 },
      { label: "No / unsure", points: 0 },
    ],
  },
  {
    id: "ops-3120",
    domain: "compliance_ops",
    weight: 1,
    regulation: "FINRA Rule 3120",
    gapConsequence: "Annual supervisory control testing is mandatory; skipping it is an independent violation.",
    question: "Does your firm complete annual supervisory control testing (Rule 3120) with documented results?",
    options: [
      { label: "Yes — completed annually and documented", points: 3 },
      { label: "Done inconsistently", points: 1 },
      { label: "No / unsure", points: 0 },
    ],
  },
  {
    id: "ops-vendor",
    domain: "compliance_ops",
    weight: 1,
    regulation: "FINRA Notice 22-29 — Third-Party Risk",
    gapConsequence: "Unvetted vendors with system/data access are a growing exam focus and a breach liability.",
    question: "Have you completed security due-diligence on all technology vendors with access to firm systems or client data?",
    options: [
      { label: "Yes — all critical vendors assessed, reviewed annually", points: 3 },
      { label: "Some vendors assessed", points: 2 },
      { label: "Informal / none documented", points: 1 },
      { label: "No / unsure", points: 0 },
    ],
  },
  {
    id: "ops-exam",
    domain: "compliance_ops",
    weight: 1,
    regulation: "SEC / FINRA Examination",
    gapConsequence: "If you can't produce evidence on demand, an exam becomes a fire drill with deficiency risk.",
    question: "Could your firm produce continuous evidence that key controls were active over the last 6 months, on demand?",
    options: [
      { label: "Yes — evidence maintained continuously", points: 3 },
      { label: "Partially — we'd have to assemble it", points: 1 },
      { label: "No — we'd scramble", points: 0 },
    ],
  },
  {
    id: "ops-board",
    domain: "compliance_ops",
    weight: 1,
    regulation: "SEC Cyber governance expectations",
    gapConsequence: "Examiners increasingly expect executive/board-level technology-risk oversight.",
    question: "Does your firm produce board or executive-level technology governance reporting at least annually?",
    options: [
      { label: "Yes — regular executive governance reporting", points: 3 },
      { label: "Occasional / informal", points: 1 },
      { label: "No / unsure", points: 0 },
    ],
  },

  // ── Infrastructure & Resilience ────────────────────────────────────────────────
  {
    id: "infra-backup",
    domain: "infrastructure",
    weight: 1,
    critical: true,
    regulation: "FINRA Rule 4370 — Business Continuity",
    gapConsequence: "Untested backups mean no recovery guarantee and a BCP deficiency.",
    question: "What is your backup and recovery posture?",
    options: [
      { label: "Automated daily backups, offsite, recovery tested", points: 3 },
      { label: "Regular backups but recovery not tested", points: 2 },
      { label: "Occasional/manual backups", points: 1 },
      { label: "No backup strategy / unsure", points: 0 },
    ],
  },
  {
    id: "infra-bcp",
    domain: "infrastructure",
    weight: 1,
    regulation: "FINRA Rule 4370",
    gapConsequence: "A written, tested BCP is required; its absence is a direct 4370 finding.",
    question: "Does your firm have a written business continuity plan (BCP) reviewed and tested within the past year?",
    options: [
      { label: "Yes — written and tested within 12 months", points: 3 },
      { label: "Written but not recently tested", points: 2 },
      { label: "Informal / outdated", points: 1 },
      { label: "No / unsure", points: 0 },
    ],
  },
  {
    id: "infra-maintenance",
    domain: "infrastructure",
    weight: 1,
    regulation: "General IT governance",
    gapConsequence: "Unmanaged infrastructure drift undermines every downstream control.",
    question: "How is your core IT infrastructure maintained and monitored?",
    options: [
      { label: "Proactively managed and monitored 24/7", points: 3 },
      { label: "Regular scheduled maintenance", points: 2 },
      { label: "Reactive — only when issues arise", points: 1 },
      { label: "No defined process / unsure", points: 0 },
    ],
  },

  // ── AI Governance ────────────────────────────────────────────────────────────
  {
    id: "ai-inventory",
    domain: "ai_governance",
    weight: 1,
    critical: true,
    regulation: "NIST AI RMF / SEC AI guidance",
    gapConsequence: "Un-inventoried AI tools ('shadow AI') are an emerging exam question with no good answer if you can't produce the list.",
    question: "Does your firm maintain an inventory of all AI tools in use (Copilot, ChatGPT, etc.) with risk assessments?",
    options: [
      { label: "Yes — inventoried, risk-assessed, and approved", points: 3 },
      { label: "Partial inventory", points: 2 },
      { label: "Aware of some tools, not tracked", points: 1 },
      { label: "No / unsure", points: 0 },
    ],
  },
  {
    id: "ai-policy",
    domain: "ai_governance",
    weight: 1,
    regulation: "NIST AI RMF / ISO 42001",
    gapConsequence: "No AI use policy means no defensible control over how staff feed client data into AI tools.",
    question: "Does your firm have a documented AI use policy governing how employees may use AI with firm/client data?",
    options: [
      { label: "Yes — documented policy, communicated and enforced", points: 3 },
      { label: "Draft / informal guidance", points: 1 },
      { label: "No policy / unsure", points: 0 },
    ],
  },
  {
    id: "ai-shadow",
    domain: "ai_governance",
    weight: 1,
    regulation: "Reg S-P / NIST AI RMF",
    gapConsequence: "Staff pasting client data into consumer AI tools is an unmonitored data-exfiltration path.",
    question: "Can your firm detect or control sensitive data being entered into external AI tools?",
    options: [
      { label: "Yes — monitored/controlled via DLP or proxy", points: 3 },
      { label: "Policy only, no technical control", points: 1 },
      { label: "No / unsure", points: 0 },
    ],
  },
];
