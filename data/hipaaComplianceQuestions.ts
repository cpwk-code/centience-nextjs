export interface ChecklistOption {
  label: string;
  points: number;
}

export interface ChecklistQuestion {
  id: string;
  section: string;
  question: string;
  options: ChecklistOption[];
}

export interface ChecklistSection {
  name: string;
  maxPoints: number;
}

// HIPAA and ePHI Compliance Checklist
// Based on HIPAA Security Rule (45 CFR Part 164, Subpart C)
// Aligned with HHS/OCR guidance, NIST CSF, and Security Rule requirements
export const questions: ChecklistQuestion[] = [
  // 1. General Requirements & Oversight (§164.306) - 25 points max
  {
    id: "gen-1",
    section: "General Requirements & Oversight",
    question: "Have you appointed a HIPAA Security Officer to develop, implement, and monitor safeguards?",
    options: [
      { label: "Dedicated Security Officer with documented responsibilities and ongoing oversight", points: 5 },
      { label: "Security responsibilities assigned but not a dedicated role", points: 3 },
      { label: "Informal security oversight without formal assignment", points: 1 },
      { label: "No Security Officer or formal security oversight", points: 0 },
    ],
  },
  {
    id: "gen-2",
    section: "General Requirements & Oversight",
    question: "Have you conducted and documented a thorough, accurate risk analysis of ePHI risks and vulnerabilities (confidentiality, integrity, availability)?",
    options: [
      { label: "Comprehensive risk analysis completed using HHS SRA Tool with regular updates", points: 5 },
      { label: "Risk analysis completed but not regularly updated", points: 3 },
      { label: "Informal risk awareness without formal documentation", points: 1 },
      { label: "No risk analysis conducted", points: 0 },
    ],
  },
  {
    id: "gen-3",
    section: "General Requirements & Oversight",
    question: "Do you implement risk management processes to reduce identified risks to reasonable and appropriate levels?",
    options: [
      { label: "Documented risk management plan with tracked remediation actions", points: 5 },
      { label: "Risk mitigation in place for major risks only", points: 3 },
      { label: "Ad-hoc risk mitigation without formal plan", points: 1 },
      { label: "No risk management processes", points: 0 },
    ],
  },
  {
    id: "gen-4",
    section: "General Requirements & Oversight",
    question: "Do you perform periodic technical and non-technical evaluations of safeguards (§164.308(a)(8))?",
    options: [
      { label: "Annual evaluations with documented findings and remediation", points: 5 },
      { label: "Evaluations performed but not on a regular schedule", points: 3 },
      { label: "Informal reviews without documentation", points: 1 },
      { label: "No periodic evaluations performed", points: 0 },
    ],
  },
  {
    id: "gen-5",
    section: "General Requirements & Oversight",
    question: "Do you maintain written policies, procedures, and documentation for all Security Rule requirements?",
    options: [
      { label: "Complete documentation retained for 6+ years with regular reviews", points: 5 },
      { label: "Most policies documented but some gaps exist", points: 3 },
      { label: "Limited documentation of security practices", points: 1 },
      { label: "No written policies or procedures", points: 0 },
    ],
  },

  // 2. Administrative Safeguards (§164.308) - 30 points max
  {
    id: "admin-1",
    section: "Administrative Safeguards",
    question: "Do you have a sanction policy for workforce violations and regularly review information system activity (logs/monitoring)?",
    options: [
      { label: "Documented sanction policy with regular log reviews and incident tracking", points: 5 },
      { label: "Sanction policy exists but log reviews are inconsistent", points: 3 },
      { label: "Informal disciplinary approach without regular monitoring", points: 1 },
      { label: "No sanction policy or activity monitoring", points: 0 },
    ],
  },
  {
    id: "admin-2",
    section: "Administrative Safeguards",
    question: "Do you have workforce security controls including authorization, supervision, and termination procedures?",
    options: [
      { label: "Comprehensive workforce clearance and termination procedures with access revocation", points: 5 },
      { label: "Basic authorization controls but termination process needs improvement", points: 3 },
      { label: "Informal workforce security practices", points: 1 },
      { label: "No formal workforce security controls", points: 0 },
    ],
  },
  {
    id: "admin-3",
    section: "Administrative Safeguards",
    question: "Do you have information access management with proper authorization and modification procedures?",
    options: [
      { label: "Role-based access control with documented authorization and modification procedures", points: 5 },
      { label: "Basic access controls but modification process not formalized", points: 3 },
      { label: "Informal access management practices", points: 1 },
      { label: "No formal access management procedures", points: 0 },
    ],
  },
  {
    id: "admin-4",
    section: "Administrative Safeguards",
    question: "Do you provide security awareness and training including protection from malicious software, login monitoring, and password management?",
    options: [
      { label: "Annual training program with documented completion and regular security reminders", points: 5 },
      { label: "Training provided but not regularly updated or tracked", points: 3 },
      { label: "Limited or informal security training", points: 1 },
      { label: "No security awareness training program", points: 0 },
    ],
  },
  {
    id: "admin-5",
    section: "Administrative Safeguards",
    question: "Do you have security incident procedures for response and reporting?",
    options: [
      { label: "Documented incident response plan with regular testing and breach notification integration", points: 5 },
      { label: "Basic incident procedures but not regularly tested", points: 3 },
      { label: "Informal incident handling approach", points: 1 },
      { label: "No security incident procedures", points: 0 },
    ],
  },
  {
    id: "admin-6",
    section: "Administrative Safeguards",
    question: "Do you have a contingency plan including data backup, disaster recovery, emergency mode operations, and testing procedures?",
    options: [
      { label: "Comprehensive contingency plan with regular testing and applications criticality analysis", points: 5 },
      { label: "Basic backup and recovery plan but not regularly tested", points: 3 },
      { label: "Limited contingency planning", points: 1 },
      { label: "No contingency plan in place", points: 0 },
    ],
  },

  // 3. Physical Safeguards (§164.310) - 20 points max
  {
    id: "phys-1",
    section: "Physical Safeguards",
    question: "Do you have facility access controls including contingency operations, security plan, access validation, and maintenance records?",
    options: [
      { label: "Comprehensive facility security with documented access controls and maintenance logs", points: 5 },
      { label: "Basic facility controls but some documentation gaps", points: 3 },
      { label: "Limited physical access controls", points: 1 },
      { label: "No formal facility access controls", points: 0 },
    ],
  },
  {
    id: "phys-2",
    section: "Physical Safeguards",
    question: "Do you have policies for proper workstation use and physical measures to restrict unauthorized access?",
    options: [
      { label: "Documented workstation policies with physical security measures (locks, screens, placement)", points: 5 },
      { label: "Basic workstation policies but physical security needs improvement", points: 3 },
      { label: "Informal workstation security practices", points: 1 },
      { label: "No workstation use or security policies", points: 0 },
    ],
  },
  {
    id: "phys-3",
    section: "Physical Safeguards",
    question: "Do you have device and media controls for disposal, re-use, accountability, and data backup before movement?",
    options: [
      { label: "Comprehensive media handling with sanitization procedures, tracking, and backup protocols", points: 5 },
      { label: "Basic disposal procedures but tracking and accountability need improvement", points: 3 },
      { label: "Limited device and media controls", points: 1 },
      { label: "No formal device and media controls", points: 0 },
    ],
  },
  {
    id: "phys-4",
    section: "Physical Safeguards",
    question: "Do you track hardware and electronic media movement with documented accountability?",
    options: [
      { label: "Complete asset inventory with movement tracking and accountability logs", points: 5 },
      { label: "Basic inventory but movement tracking is inconsistent", points: 3 },
      { label: "Limited asset tracking", points: 1 },
      { label: "No hardware or media tracking", points: 0 },
    ],
  },

  // 4. Technical Safeguards (§164.312) - 30 points max
  {
    id: "tech-1",
    section: "Technical Safeguards",
    question: "Do you implement access controls with unique user identification and emergency access procedures?",
    options: [
      { label: "Unique user IDs for all with documented emergency access and automatic logoff", points: 5 },
      { label: "Unique IDs in place but emergency procedures need formalization", points: 3 },
      { label: "Basic user identification without emergency procedures", points: 1 },
      { label: "No unique user identification or access controls", points: 0 },
    ],
  },
  {
    id: "tech-2",
    section: "Technical Safeguards",
    question: "Do you implement encryption and decryption for ePHI at rest and in transit?",
    options: [
      { label: "End-to-end encryption for all ePHI at rest and in transit (TLS 1.2+, AES-256)", points: 5 },
      { label: "Encryption in transit but at-rest encryption not fully implemented", points: 3 },
      { label: "Limited encryption implementation", points: 1 },
      { label: "No encryption for ePHI", points: 0 },
    ],
  },
  {
    id: "tech-3",
    section: "Technical Safeguards",
    question: "Do you have audit controls to record and examine activity in information systems containing ePHI?",
    options: [
      { label: "Comprehensive audit logging with regular review and 6+ year retention", points: 5 },
      { label: "Audit logging enabled but reviews are inconsistent", points: 3 },
      { label: "Limited logging without regular review", points: 1 },
      { label: "No audit controls or logging", points: 0 },
    ],
  },
  {
    id: "tech-4",
    section: "Technical Safeguards",
    question: "Do you have integrity controls including mechanisms to authenticate ePHI and protect against improper alteration?",
    options: [
      { label: "Data integrity controls with checksums, validation, and tamper detection", points: 5 },
      { label: "Basic integrity controls for some systems", points: 3 },
      { label: "Limited integrity protection", points: 1 },
      { label: "No integrity controls", points: 0 },
    ],
  },
  {
    id: "tech-5",
    section: "Technical Safeguards",
    question: "Do you implement transmission security controls to guard against unauthorized access during transmission?",
    options: [
      { label: "Secure transmission with TLS/encryption for all ePHI and endpoint verification", points: 5 },
      { label: "Encryption for most transmissions but some gaps exist", points: 3 },
      { label: "Limited transmission security", points: 1 },
      { label: "No transmission security controls", points: 0 },
    ],
  },
  {
    id: "tech-6",
    section: "Technical Safeguards",
    question: "Do you implement multi-factor authentication (MFA) for accessing systems containing ePHI?",
    options: [
      { label: "MFA required for all ePHI system access with phishing-resistant options", points: 5 },
      { label: "MFA implemented for some systems but not universally required", points: 3 },
      { label: "Basic password-only authentication with some MFA", points: 1 },
      { label: "No multi-factor authentication", points: 0 },
    ],
  },

  // 5. Organizational & Documentation Requirements (§164.314) - 20 points max
  {
    id: "org-1",
    section: "Organizational & Documentation",
    question: "Do you have Business Associate Agreements (BAAs) with all vendors that handle ePHI with Security Rule obligations?",
    options: [
      { label: "BAAs in place for all BAs with security requirements and breach reporting", points: 5 },
      { label: "BAAs with most vendors but some gaps in coverage", points: 3 },
      { label: "Limited BAA coverage", points: 1 },
      { label: "No BAAs or vendor security requirements", points: 0 },
    ],
  },
  {
    id: "org-2",
    section: "Organizational & Documentation",
    question: "Do you document implementation of recognized security practices (NIST, MFA, patching) for potential penalty mitigation?",
    options: [
      { label: "Documented alignment with NIST CSF and other recognized frameworks", points: 5 },
      { label: "Some security practices documented but framework alignment incomplete", points: 3 },
      { label: "Limited documentation of security practices", points: 1 },
      { label: "No documentation of recognized security practices", points: 0 },
    ],
  },
  {
    id: "org-3",
    section: "Organizational & Documentation",
    question: "Do you retain all HIPAA security documentation for at least 6 years and make it available for inspection?",
    options: [
      { label: "Complete documentation retention with organized access for audit/inspection", points: 5 },
      { label: "Most documentation retained but organization needs improvement", points: 3 },
      { label: "Inconsistent documentation retention", points: 1 },
      { label: "No formal documentation retention", points: 0 },
    ],
  },
  {
    id: "org-4",
    section: "Organizational & Documentation",
    question: "Do you perform periodic compliance evaluations after changes or at least annually?",
    options: [
      { label: "Annual compliance evaluations plus reviews after all changes/incidents", points: 5 },
      { label: "Periodic evaluations but not consistently after changes", points: 3 },
      { label: "Occasional evaluations without schedule", points: 1 },
      { label: "No compliance evaluations performed", points: 0 },
    ],
  },
];

export const sections: ChecklistSection[] = [
  { name: "General Requirements & Oversight", maxPoints: 25 },
  { name: "Administrative Safeguards", maxPoints: 30 },
  { name: "Physical Safeguards", maxPoints: 20 },
  { name: "Technical Safeguards", maxPoints: 30 },
  { name: "Organizational & Documentation", maxPoints: 20 },
];

// Total maximum score
export const MAX_SCORE = sections.reduce((sum, section) => sum + section.maxPoints, 0);

// Readiness level thresholds (out of 125 total)
export const getReadinessLevel = (score: number): "excellent" | "good" | "moderate" | "needs-improvement" => {
  const percentage = (score / MAX_SCORE) * 100;
  if (percentage >= 85) return "excellent";
  if (percentage >= 70) return "good";
  if (percentage >= 50) return "moderate";
  return "needs-improvement";
};
