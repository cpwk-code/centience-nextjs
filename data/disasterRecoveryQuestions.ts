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

// Questions based on Disaster Recovery Planning Checklist
// Aligned with FINRA Rule 4370, HIPAA Security Rule, NIST, ISO 22301
export const questions: ChecklistQuestion[] = [
  // 1. Planning and Risk Assessment (25 points max)
  {
    id: "plan-1",
    section: "Planning & Risk Assessment",
    question: "Have you conducted a Business Impact Analysis (BIA) to identify critical processes, data, and applications?",
    options: [
      { label: "Comprehensive BIA completed with regular updates and stakeholder involvement", points: 5 },
      { label: "Basic BIA completed but not regularly updated", points: 3 },
      { label: "Partial identification of critical systems only", points: 1 },
      { label: "No BIA or critical system identification", points: 0 },
    ],
  },
  {
    id: "plan-2",
    section: "Planning & Risk Assessment",
    question: "Have you assessed risks including natural disasters, cyberattacks, power outages, and pandemics?",
    options: [
      { label: "Comprehensive risk assessment with likelihood/impact analysis for all scenarios", points: 5 },
      { label: "Risk assessment completed for major threats only", points: 3 },
      { label: "Informal risk awareness without documentation", points: 1 },
      { label: "No formal risk assessment conducted", points: 0 },
    ],
  },
  {
    id: "plan-3",
    section: "Planning & Risk Assessment",
    question: "Have you defined Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO) for critical systems?",
    options: [
      { label: "Documented RTO/RPO for all critical systems with regular testing", points: 5 },
      { label: "RTO/RPO defined for key systems but not tested", points: 3 },
      { label: "Informal recovery targets without documentation", points: 1 },
      { label: "No RTO/RPO defined", points: 0 },
    ],
  },
  {
    id: "plan-4",
    section: "Planning & Risk Assessment",
    question: "Have you identified alternate locations (physical/virtual) and remote work capabilities?",
    options: [
      { label: "Multiple failover sites with tested remote work infrastructure", points: 5 },
      { label: "One alternate location with basic remote capabilities", points: 3 },
      { label: "Remote work possible but no formal alternate site", points: 1 },
      { label: "No alternate locations or remote capabilities", points: 0 },
    ],
  },
  {
    id: "plan-5",
    section: "Planning & Risk Assessment",
    question: "Are DR team roles, responsibilities, and contact lists documented with backups?",
    options: [
      { label: "Complete team roster with roles, backup contacts, and regular updates", points: 5 },
      { label: "Team roles defined but contact lists not regularly updated", points: 3 },
      { label: "Informal team assignments without documentation", points: 1 },
      { label: "No DR team or roles assigned", points: 0 },
    ],
  },

  // 2. Backup and Data Protection (25 points max)
  {
    id: "backup-1",
    section: "Backup & Data Protection",
    question: "Do you implement automated, encrypted backups following the 3-2-1 rule (3 copies, 2 media types, 1 offsite)?",
    options: [
      { label: "Full 3-2-1 strategy with encryption and automation", points: 5 },
      { label: "Automated backups with offsite storage but not all criteria met", points: 3 },
      { label: "Basic backups without encryption or offsite storage", points: 1 },
      { label: "No systematic backup strategy", points: 0 },
    ],
  },
  {
    id: "backup-2",
    section: "Backup & Data Protection",
    question: "Are backups geographically separated and immutable where possible (air-gapped or WORM)?",
    options: [
      { label: "Geographically separated with immutable/air-gapped copies", points: 5 },
      { label: "Geographically separated but not immutable", points: 3 },
      { label: "Same location with some separation", points: 1 },
      { label: "No geographic separation or immutability", points: 0 },
    ],
  },
  {
    id: "backup-3",
    section: "Backup & Data Protection",
    question: "Is backup frequency and retention aligned with regulatory requirements (SEC 17a-4, HIPAA, etc.)?",
    options: [
      { label: "Documented backup schedule meeting all regulatory retention requirements", points: 5 },
      { label: "Regular backups with some compliance gaps", points: 3 },
      { label: "Inconsistent backup schedule", points: 1 },
      { label: "No defined backup frequency or retention policy", points: 0 },
    ],
  },
  {
    id: "backup-4",
    section: "Backup & Data Protection",
    question: "How often do you test backup restoration to verify recoverability and RPO compliance?",
    options: [
      { label: "Quarterly restoration tests with documented results", points: 5 },
      { label: "Annual restoration testing", points: 3 },
      { label: "Occasional testing without documentation", points: 1 },
      { label: "Never tested backup restoration", points: 0 },
    ],
  },
  {
    id: "backup-5",
    section: "Backup & Data Protection",
    question: "Are physical documents protected with offsite storage and digitization?",
    options: [
      { label: "Complete digitization with secure offsite storage for originals", points: 5 },
      { label: "Partial digitization with some offsite storage", points: 3 },
      { label: "On-site storage only with limited digitization", points: 1 },
      { label: "No protection for physical documents", points: 0 },
    ],
  },

  // 3. Infrastructure and Systems Recovery (20 points max)
  {
    id: "infra-1",
    section: "Infrastructure & Systems Recovery",
    question: "Have you mapped all mission-critical systems and their dependencies?",
    options: [
      { label: "Complete system mapping with dependencies and recovery priority", points: 5 },
      { label: "Major systems documented but dependencies not fully mapped", points: 3 },
      { label: "Informal knowledge of critical systems", points: 1 },
      { label: "No system mapping or documentation", points: 0 },
    ],
  },
  {
    id: "infra-2",
    section: "Infrastructure & Systems Recovery",
    question: "Do you have documented recovery procedures for each critical system?",
    options: [
      { label: "Step-by-step recovery procedures for all critical systems with assigned owners", points: 5 },
      { label: "Recovery procedures for some systems", points: 3 },
      { label: "Informal recovery knowledge without documentation", points: 1 },
      { label: "No documented recovery procedures", points: 0 },
    ],
  },
  {
    id: "infra-3",
    section: "Infrastructure & Systems Recovery",
    question: "Can you recover infrastructure in order of business priority?",
    options: [
      { label: "Prioritized recovery sequence tested and documented", points: 5 },
      { label: "Priority defined but not tested", points: 3 },
      { label: "Informal priority understanding", points: 1 },
      { label: "No defined recovery priority", points: 0 },
    ],
  },
  {
    id: "infra-4",
    section: "Infrastructure & Systems Recovery",
    question: "Do you have failover capabilities for mission-critical applications?",
    options: [
      { label: "Automated failover with regular testing", points: 5 },
      { label: "Manual failover procedures in place", points: 3 },
      { label: "Limited failover for some systems only", points: 1 },
      { label: "No failover capabilities", points: 0 },
    ],
  },

  // 4. Communication and Notification (15 points max)
  {
    id: "comm-1",
    section: "Communication & Notification",
    question: "Do you have an internal/external communication plan with chain of command and templates?",
    options: [
      { label: "Comprehensive plan with templates, escalation paths, and regular updates", points: 5 },
      { label: "Basic communication plan without templates", points: 3 },
      { label: "Informal communication understanding", points: 1 },
      { label: "No communication plan", points: 0 },
    ],
  },
  {
    id: "comm-2",
    section: "Communication & Notification",
    question: "Are emergency contacts designated with primary and secondary backups?",
    options: [
      { label: "Complete contact list with backups, tested regularly", points: 5 },
      { label: "Contact list exists but not regularly verified", points: 3 },
      { label: "Informal contact knowledge", points: 1 },
      { label: "No emergency contact list", points: 0 },
    ],
  },
  {
    id: "comm-3",
    section: "Communication & Notification",
    question: "Do you have prepared notifications for clients and regulators?",
    options: [
      { label: "Pre-drafted notifications for all stakeholders including regulators", points: 5 },
      { label: "Templates for client notifications only", points: 3 },
      { label: "Ad-hoc notification approach", points: 1 },
      { label: "No prepared notifications", points: 0 },
    ],
  },

  // 5. Regulatory Compliance (20 points max)
  {
    id: "reg-1",
    section: "Regulatory Compliance",
    question: "Is your DR plan documented with rationale for any inapplicable elements (per FINRA Rule 4370)?",
    options: [
      { label: "Fully documented with exceptions explained and approved", points: 5 },
      { label: "Documented but exceptions not formally addressed", points: 3 },
      { label: "Partial documentation", points: 1 },
      { label: "No documentation", points: 0 },
    ],
  },
  {
    id: "reg-2",
    section: "Regulatory Compliance",
    question: "Do you maintain audit trails, data immutability, and prompt access to client assets/data?",
    options: [
      { label: "Complete audit trails with immutability and tested access procedures", points: 5 },
      { label: "Audit trails in place but immutability not guaranteed", points: 3 },
      { label: "Basic logging without formal audit trails", points: 1 },
      { label: "No audit trails or immutability controls", points: 0 },
    ],
  },
  {
    id: "reg-3",
    section: "Regulatory Compliance",
    question: "Is regulatory reporting continuity ensured during a disaster?",
    options: [
      { label: "Procedures in place for continued regulatory reporting from alternate sites", points: 5 },
      { label: "Manual workarounds identified for reporting", points: 3 },
      { label: "Reporting may be delayed during disaster", points: 1 },
      { label: "No plan for regulatory reporting continuity", points: 0 },
    ],
  },
  {
    id: "reg-4",
    section: "Regulatory Compliance",
    question: "Do you protect privileged/client information and ensure deadline compliance during disasters?",
    options: [
      { label: "Comprehensive data protection with deadline tracking and escalation", points: 5 },
      { label: "Basic protection with some deadline awareness", points: 3 },
      { label: "Ad-hoc approach to data protection", points: 1 },
      { label: "No specific protections in place", points: 0 },
    ],
  },

  // 6. Testing, Training, and Maintenance (20 points max)
  {
    id: "test-1",
    section: "Testing, Training & Maintenance",
    question: "How frequently do you conduct DR tests/drills (tabletop, walkthrough, full simulation)?",
    options: [
      { label: "Annual or more frequent with multiple test types", points: 5 },
      { label: "Annual testing with limited scope", points: 3 },
      { label: "Occasional or ad-hoc testing", points: 1 },
      { label: "No DR testing conducted", points: 0 },
    ],
  },
  {
    id: "test-2",
    section: "Testing, Training & Maintenance",
    question: "Are staff trained on their DR roles, procedures, and emergency operations?",
    options: [
      { label: "Regular training with documented competency and refreshers", points: 5 },
      { label: "Initial training provided without refreshers", points: 3 },
      { label: "Informal orientation only", points: 1 },
      { label: "No staff training on DR", points: 0 },
    ],
  },
  {
    id: "test-3",
    section: "Testing, Training & Maintenance",
    question: "Do you document test results, issues, lessons learned, and remediation actions?",
    options: [
      { label: "Comprehensive documentation with tracked remediation", points: 5 },
      { label: "Basic test results documented", points: 3 },
      { label: "Informal notes without formal tracking", points: 1 },
      { label: "No documentation of test results", points: 0 },
    ],
  },
  {
    id: "test-4",
    section: "Testing, Training & Maintenance",
    question: "How often is the DR plan reviewed and updated (after tests, incidents, or system changes)?",
    options: [
      { label: "Annual review plus updates after all tests/incidents/changes", points: 5 },
      { label: "Annual review only", points: 3 },
      { label: "Occasional updates when remembered", points: 1 },
      { label: "Plan not regularly reviewed or updated", points: 0 },
    ],
  },
];

export const sections: ChecklistSection[] = [
  { name: "Planning & Risk Assessment", maxPoints: 25 },
  { name: "Backup & Data Protection", maxPoints: 25 },
  { name: "Infrastructure & Systems Recovery", maxPoints: 20 },
  { name: "Communication & Notification", maxPoints: 15 },
  { name: "Regulatory Compliance", maxPoints: 20 },
  { name: "Testing, Training & Maintenance", maxPoints: 20 },
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
