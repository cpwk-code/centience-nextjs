export interface QuestionOption {
  label: string;
  points: number;
}

export interface Question {
  id: string;
  section: string;
  question: string;
  options: QuestionOption[];
}

export interface Section {
  name: string;
  maxPoints: number;
}

// Questions organized by sections with scoring
export const questions: Question[] = [
  // General IT Infrastructure (15 points max)
  {
    id: "it-1",
    section: "General IT Infrastructure",
    question: "How regularly is your IT infrastructure maintained and updated?",
    options: [
      { label: "Automated updates with regular maintenance schedules", points: 5 },
      { label: "Monthly manual updates and maintenance", points: 3 },
      { label: "Updates only when issues arise", points: 1 },
      { label: "No regular maintenance schedule", points: 0 },
    ],
  },
  {
    id: "it-2",
    section: "General IT Infrastructure",
    question: "What is your backup strategy?",
    options: [
      { label: "Automated daily backups with offsite/cloud storage and tested recovery", points: 5 },
      { label: "Regular backups but not tested for recovery", points: 3 },
      { label: "Occasional manual backups", points: 1 },
      { label: "No backup strategy in place", points: 0 },
    ],
  },
  {
    id: "it-3",
    section: "General IT Infrastructure",
    question: "How is your network monitored?",
    options: [
      { label: "24/7 monitoring with automated alerts and response", points: 5 },
      { label: "Business hours monitoring with basic alerting", points: 3 },
      { label: "Periodic manual checks", points: 1 },
      { label: "No network monitoring", points: 0 },
    ],
  },
  // Cybersecurity Practices (40 points max)
  {
    id: "cyber-1",
    section: "Cybersecurity Practices",
    question: "Is Multi-Factor Authentication (MFA) implemented?",
    options: [
      { label: "MFA for all users on all systems", points: 8 },
      { label: "MFA for privileged accounts only", points: 5 },
      { label: "MFA for some systems", points: 2 },
      { label: "No MFA implemented", points: 0 },
    ],
  },
  {
    id: "cyber-2",
    section: "Cybersecurity Practices",
    question: "What endpoint protection do you have in place?",
    options: [
      { label: "EDR/XDR with active threat hunting and response", points: 8 },
      { label: "Managed antivirus with regular updates", points: 5 },
      { label: "Basic antivirus software", points: 2 },
      { label: "No endpoint protection", points: 0 },
    ],
  },
  {
    id: "cyber-3",
    section: "Cybersecurity Practices",
    question: "How are access controls managed?",
    options: [
      { label: "Role-based access with regular audits and least privilege", points: 8 },
      { label: "Role-based access but infrequent reviews", points: 5 },
      { label: "Basic user accounts with no formal policies", points: 2 },
      { label: "Shared accounts or no access controls", points: 0 },
    ],
  },
  {
    id: "cyber-4",
    section: "Cybersecurity Practices",
    question: "Do you have an incident response plan?",
    options: [
      { label: "Documented plan with regular testing and trained team", points: 8 },
      { label: "Documented plan but not regularly tested", points: 5 },
      { label: "Informal response procedures", points: 2 },
      { label: "No incident response plan", points: 0 },
    ],
  },
  {
    id: "cyber-5",
    section: "Cybersecurity Practices",
    question: "How is vulnerability management handled?",
    options: [
      { label: "Regular scanning with prioritized patching and remediation", points: 8 },
      { label: "Periodic scans with ad-hoc patching", points: 5 },
      { label: "Only critical vulnerabilities addressed", points: 2 },
      { label: "No vulnerability management", points: 0 },
    ],
  },
  // Compliance & Regulatory Requirements (20 points max)
  {
    id: "comp-1",
    section: "Compliance & Regulatory Requirements",
    question: "Are you subject to industry compliance requirements (HIPAA, PCI-DSS, SOC2, etc.)?",
    options: [
      { label: "Fully compliant with regular audits and certifications", points: 10 },
      { label: "Working toward compliance with documented progress", points: 6 },
      { label: "Aware of requirements but not yet addressed", points: 3 },
      { label: "Not aware of applicable requirements", points: 0 },
    ],
  },
  {
    id: "comp-2",
    section: "Compliance & Regulatory Requirements",
    question: "How are security policies documented and maintained?",
    options: [
      { label: "Comprehensive policies regularly reviewed and updated", points: 10 },
      { label: "Basic policies exist but not regularly updated", points: 6 },
      { label: "Informal or incomplete policies", points: 3 },
      { label: "No documented security policies", points: 0 },
    ],
  },
  // Employee Awareness & Training (10 points max)
  {
    id: "train-1",
    section: "Employee Awareness & Training",
    question: "What security awareness training do employees receive?",
    options: [
      { label: "Regular training with phishing simulations and assessments", points: 5 },
      { label: "Annual security awareness training", points: 3 },
      { label: "Training only during onboarding", points: 1 },
      { label: "No security training provided", points: 0 },
    ],
  },
  {
    id: "train-2",
    section: "Employee Awareness & Training",
    question: "How are security incidents reported by employees?",
    options: [
      { label: "Clear reporting process with incentives and no-blame culture", points: 5 },
      { label: "Documented reporting process", points: 3 },
      { label: "Informal reporting to IT", points: 1 },
      { label: "No clear reporting process", points: 0 },
    ],
  },
  // Cloud & Remote Work Security (15 points max)
  {
    id: "cloud-1",
    section: "Cloud & Remote Work Security",
    question: "How is remote access secured?",
    options: [
      { label: "VPN/Zero Trust with MFA and device compliance checks", points: 5 },
      { label: "VPN with basic authentication", points: 3 },
      { label: "Remote desktop without additional security", points: 1 },
      { label: "No secure remote access solution", points: 0 },
    ],
  },
  {
    id: "cloud-2",
    section: "Cloud & Remote Work Security",
    question: "How are cloud services managed and secured?",
    options: [
      { label: "Centralized management with security policies and monitoring", points: 5 },
      { label: "Some cloud security controls in place", points: 3 },
      { label: "Basic cloud usage with default settings", points: 1 },
      { label: "No cloud security measures", points: 0 },
    ],
  },
  {
    id: "cloud-3",
    section: "Cloud & Remote Work Security",
    question: "Are company devices used for remote work secured?",
    options: [
      { label: "Managed devices with encryption, MDM, and remote wipe capability", points: 5 },
      { label: "Company devices with basic security software", points: 3 },
      { label: "Mix of company and personal devices", points: 1 },
      { label: "No device management for remote work", points: 0 },
    ],
  },
];

export const sections: Section[] = [
  { name: "General IT Infrastructure", maxPoints: 15 },
  { name: "Cybersecurity Practices", maxPoints: 40 },
  { name: "Compliance & Regulatory Requirements", maxPoints: 20 },
  { name: "Employee Awareness & Training", maxPoints: 10 },
  { name: "Cloud & Remote Work Security", maxPoints: 15 },
];

// Total maximum score
export const MAX_SCORE = sections.reduce((sum, section) => sum + section.maxPoints, 0);
