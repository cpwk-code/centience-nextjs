export interface GuideSection {
  heading: string;
  body: string;
}

export interface RegulatoryBody {
  label: string;
  fullName: string;
  intro: string;
  sections: GuideSection[];
  file: string;
}

export interface GuideData {
  id: string;
  slug: string;
  label: string;
  title: string;
  subtitle: string;
  tagline?: string;
  hasBodySelector: boolean;
  bodies?: Record<string, RegulatoryBody>;
  sections?: GuideSection[];
  file: string;
}

export const GUIDE_CONTENT: Record<string, GuideData> = {
  ai_governance: {
    id: "ai_governance",
    slug: "ai-governance",
    label: "AI GOVERNANCE",
    title: "AI Governance Guide for Regulated Organizations",
    subtitle: "A practical framework for governing AI tools under SEC, FINRA, and HIPAA requirements.",
    tagline: "Select your regulated body below to see requirements tailored to your obligations.",
    hasBodySelector: true,
    file: "/guides/centience-ai-governance-guide-sec.pdf",
    bodies: {
      SEC: {
        label: "SEC",
        fullName: "Securities and Exchange Commission",
        file: "/guides/centience-ai-governance-guide-sec.pdf",
        intro: "SEC-regulated firms — investment advisers, broker-dealers, and public companies — face specific AI governance obligations under the Investment Advisers Act, Regulation S-P, and the SEC's 2023 AI/predictive analytics proposed rules. This guide covers what the SEC expects.",
        sections: [
          {
            heading: "1. Regulatory Landscape for AI Under SEC",
            body: `The SEC has signaled aggressive oversight of AI use in financial services. Key frameworks include:

• Investment Advisers Act §206: AI-driven recommendations may constitute investment advice subject to fiduciary duty.
• Proposed Rule on Predictive Data Analytics (August 2023): Would require advisers and broker-dealers to evaluate and neutralize conflicts of interest in AI/predictive models.
• Regulation S-P: Requires safeguarding client data used by AI systems.
• Regulation S-ID (Identity Theft Red Flags): AI authentication and fraud detection must meet program standards.
• Form ADV Disclosure: Firms must disclose AI use in investment decision-making and associated risks.

Risk signal: The SEC has already charged firms for AI-washing — claiming AI capabilities that don't exist. Your governance posture must be defensible, documented, and consistent with public disclosures.`,
          },
          {
            heading: "2. AI Inventory and Classification",
            body: `Every AI tool your firm uses must be catalogued before it can be governed. Build and maintain:

• AI Asset Register: Tool name, vendor, version, deployment date, use case, data inputs, decision outputs.
• Risk Classification: Classify each tool as Low / Medium / High based on: (a) whether it touches client assets or recommendations, (b) whether it processes regulated data (PII, financial records), (c) whether outputs are autonomous vs. human-reviewed.
• Vendor Due Diligence: For third-party AI, obtain vendor AI governance documentation, SOC 2 Type II, and data processing agreements.

SEC exam readiness: Examiners will ask for your AI inventory on Day 1. If you can't produce it, you're starting from a deficit.`,
          },
          {
            heading: "3. Conflict of Interest Analysis",
            body: `Under the proposed Predictive Data Analytics rule, firms must:

• Identify any AI model that could place firm interests ahead of client interests (e.g., models that optimize for fee revenue rather than suitability).
• Document the conflict analysis methodology.
• Implement neutralization measures — configuration changes, human override requirements, or model replacement.
• Maintain records of the analysis and remediation for examination.

This is the highest-stakes AI governance obligation currently facing SEC-registered advisers. Even if the rule is not finalized in its current form, the underlying fiduciary duty obligation is already enforceable.`,
          },
          {
            heading: "4. Recordkeeping for AI Systems",
            body: `SEC recordkeeping rules (Rules 17a-3, 17a-4, and adviser equivalents) apply to AI-generated outputs when those outputs constitute records:

• Communications: AI-drafted client communications are books and records.
• Trade Recommendations: If AI generates or influences trade recommendations, the basis for those recommendations is a required record.
• Surveillance Outputs: AI surveillance alerts, dispositions, and escalations must be retained.
• Audit Logs: Retain AI model version history, configuration changes, and retraining events.

Retention minimum: 3 years accessible / 6 years total for most broker-dealer records. Adviser records: 5 years.`,
          },
          {
            heading: "5. Supervision Framework",
            body: `Your written supervisory procedures (WSPs) must be updated to address AI:

• Designated AI Supervisor: Assign a named individual responsible for AI governance (often CCO or CTO).
• Review Cadence: Establish periodic review of AI outputs for accuracy, bias, and regulatory compliance.
• Escalation Path: Define what triggers human review of AI-generated outputs.
• Testing Protocol: Annual testing of AI systems for conflict of interest and suitability alignment.
• Change Management: Any material change to an AI system (new version, new data inputs, new use case) triggers a fresh governance review.`,
          },
          {
            heading: "6. Exam Preparation Checklist",
            body: `Before an SEC examination, confirm you can produce:

☐ Current AI asset inventory with risk classifications
☐ Written AI governance policy signed by senior management
☐ Conflict of interest analysis for each client-facing AI tool
☐ Updated WSPs referencing AI supervision
☐ Vendor agreements with AI/data governance provisions
☐ Records of AI training, configuration, and version changes
☐ Evidence of periodic AI review (testing results, meeting minutes)
☐ Disclosure documents (Form ADV, client agreements) reflecting AI use`,
          },
        ],
      },
      FINRA: {
        label: "FINRA",
        fullName: "Financial Industry Regulatory Authority",
        file: "/guides/centience-ai-governance-guide-finra.pdf",
        intro: "FINRA-regulated broker-dealers and associated persons must govern AI use under FINRA Rules 3110 (Supervision), 4370 (Business Continuity), 2010 (Standards of Commercial Honor), and evolving guidance from FINRA's AI task force. This guide covers what FINRA expects.",
        sections: [
          {
            heading: "1. Regulatory Landscape for AI Under FINRA",
            body: `FINRA's AI governance expectations are primarily channeled through existing rules rather than AI-specific regulations (though AI-specific guidance is emerging):

• Rule 3110 (Supervision): Firms must supervise all activities, including those conducted by or through AI systems.
• Rule 2010 (Standards of Commercial Honor): AI-driven outputs that harm customers violate just and equitable principles.
• Regulatory Notice 21-16: FINRA's initial guidance on AI/ML use in compliance and surveillance.
• FINRA Report on AI in the Securities Industry (2020): Foundational expectations for governance, explainability, and human oversight.
• Rule 4370 (BCP): AI systems with material operational dependencies must be included in business continuity planning.

Examination focus: FINRA has been asking about AI use in sales, surveillance, and order management in recent cycles. Examiners want to see governance frameworks, not just tools.`,
          },
          {
            heading: "2. Supervision of AI-Assisted Activities",
            body: `Rule 3110 requires that every activity be supervised by qualified personnel. For AI, this means:

• You cannot outsource supervision to an algorithm. A human principal must be responsible for reviewing and approving AI-driven outputs in regulated contexts.
• Written Supervisory Procedures must address: (a) which activities use AI, (b) how AI outputs are reviewed, (c) who is responsible, (d) escalation procedures.
• For AI used in suitability / recommendations: Human review is required before any AI-generated recommendation is delivered to a customer.
• For AI used in surveillance: Human review of alerts before regulatory reports are filed.

Red flag: Firms that let AI auto-close compliance alerts without human review are creating exam exposure under Rule 3110.`,
          },
          {
            heading: "3. Explainability and Model Transparency",
            body: `FINRA expects firms to understand their AI tools — not just deploy them:

• Explainability Standard: For any AI model that affects customers or regulatory obligations, the firm must be able to explain in plain language what the model does, what data it uses, and how it reaches outputs.
• Black-Box Risk: FINRA has specifically flagged "black-box" AI models as high-risk. Firms using opaque third-party AI should have contractual rights to explainability documentation.
• Model Validation: For high-stakes AI (credit decisions, suitability screening, surveillance), maintain model validation records including testing methodology, training data sources, and validation outcomes.
• Change Notification: Document and review any material changes to AI models.`,
          },
          {
            heading: "4. Customer Communication and AI Disclosure",
            body: `When AI is used in customer-facing contexts:

• Fair Disclosure: Customers must not be misled about whether they are interacting with a human or AI system.
• Suitability Obligations: AI-driven recommendations remain subject to Reg BI. The firm, not the AI, is responsible for the suitability determination.
• Communications Review: AI-drafted communications (emails, chatbot responses, reports) are subject to the same review requirements as human-authored communications.
• Recordkeeping: All AI-assisted customer communications must be retained per Rules 4511 and 4512.`,
          },
          {
            heading: "5. Vendor and Third-Party AI Governance",
            body: `Most firms use third-party AI. FINRA holds the firm responsible regardless:

• Vendor Selection: Document your due diligence process — governance documentation, SOC 2, regulatory compliance track record.
• Contractual Protections: Agreements must address: data security, breach notification, AI model change notice, termination rights.
• Ongoing Oversight: Annual review of vendor AI governance. Include AI vendors in your Third-Party Risk Management program.
• Business Continuity: For critical AI vendors, document contingency if the vendor becomes unavailable (Rule 4370).`,
          },
          {
            heading: "6. Exam Preparation Checklist",
            body: `Before a FINRA examination, confirm you can produce:

☐ AI inventory with use-case descriptions and risk classification
☐ Updated WSPs covering AI supervision across all affected activities
☐ Explainability documentation for customer-facing and surveillance AI
☐ Model validation records for high-stakes AI systems
☐ Vendor due diligence files including AI governance questionnaires
☐ Evidence of principal review of AI-generated outputs
☐ BCP documentation including AI system dependencies
☐ Customer communication samples demonstrating AI disclosure compliance`,
          },
        ],
      },
      HIPAA: {
        label: "HIPAA",
        fullName: "Health Insurance Portability and Accountability Act",
        file: "/guides/centience-ai-governance-guide-hipaa.pdf",
        intro: "HIPAA-covered entities and business associates using AI must govern those tools under the Privacy Rule, Security Rule, and Breach Notification Rule. The HHS Office for Civil Rights has issued AI-specific guidance and is actively investigating AI-related PHI breaches. This guide covers what HHS/OCR expects.",
        sections: [
          {
            heading: "1. Regulatory Landscape for AI Under HIPAA",
            body: `HIPAA does not have AI-specific rules, but existing rules apply fully to AI systems that touch Protected Health Information (PHI):

• Privacy Rule (45 CFR Part 164, Subpart E): Any AI that accesses, uses, or discloses PHI is subject to minimum necessary and permissible use requirements.
• Security Rule (45 CFR Part 164, Subpart C): AI systems that store, process, or transmit electronic PHI (ePHI) must implement administrative, physical, and technical safeguards.
• Breach Notification Rule: AI-related unauthorized access to PHI triggers breach notification obligations.
• HHS AI Guidance (2024): HHS has published guidance on responsible AI use in healthcare, emphasizing transparency, equity, and safety.
• State Law: Several states (California, New York) have AI-specific healthcare regulations that supplement HIPAA. Identify applicable state law in your jurisdiction.

OCR focus areas: In recent enforcement actions, OCR has cited AI vendors as business associates and held covered entities responsible for BA oversight failures.`,
          },
          {
            heading: "2. Business Associate Agreements for AI Vendors",
            body: `Every AI vendor that creates, receives, maintains, or transmits PHI on your behalf is a Business Associate:

• BAA Requirement: Execute a compliant BAA before any PHI flows to an AI vendor. No BAA = per-violation HIPAA exposure.
• BAA Must Cover: Permitted uses, prohibition on unauthorized disclosure, safeguards, breach reporting, subcontractor obligations, return/destruction of PHI.
• AI-Specific BAA Provisions: Address model training on PHI — many AI vendors use customer data to improve models. Your BAA must prohibit this unless you have explicit authorization.
• Annual Review: Confirm BAAs are current whenever a vendor updates their AI capabilities or data handling practices.`,
          },
          {
            heading: "3. Security Rule Compliance for AI Systems",
            body: `AI systems that touch ePHI must meet Security Rule requirements:

• Risk Analysis: Include AI systems in your annual Security Rule risk analysis. Assess threats and vulnerabilities specific to AI (model poisoning, data extraction, adversarial inputs).
• Access Controls: Implement role-based access for AI systems. Log all access to ePHI by AI systems.
• Audit Controls: Maintain AI system audit logs showing who accessed what PHI, when, and for what purpose.
• Encryption: ePHI processed by AI must be encrypted in transit and at rest.
• Contingency Planning: Include AI systems in your disaster recovery and business continuity plans.
• Minimum Necessary: Configure AI systems to access only the PHI required for the specific use case.`,
          },
          {
            heading: "4. AI and Clinical Decision Support",
            body: `AI used in clinical contexts carries additional obligations:

• Accuracy and Bias: AI clinical decision support tools must be validated for accuracy across patient populations. Biased outputs that result in discriminatory care may trigger both HIPAA and civil rights obligations.
• FDA Oversight: Some clinical AI tools are regulated medical devices under FDA's Software as a Medical Device (SaMD) framework. Confirm regulatory status with your legal team.
• Informed Consent: Depending on use case and jurisdiction, patients may have a right to know AI is being used in their care.
• Documentation: AI-assisted clinical decisions must be documented in the medical record with sufficient detail to support the clinical record's integrity.`,
          },
          {
            heading: "5. Breach Response for AI Incidents",
            body: `AI-specific incidents that may trigger HIPAA breach notification:

• Unauthorized Model Training: If a vendor used your PHI to train an AI model without authorization, this is an unauthorized disclosure — evaluate for breach.
• Data Extraction Attacks: AI systems may be targeted to extract PHI through adversarial prompting.
• Output Leakage: AI systems that output PHI in unexpected ways (e.g., chatbot revealing another patient's information) require incident investigation.
• Breach Timeline: 60-day notification requirement to HHS OCR and affected individuals. State laws may impose shorter timelines.

Response checklist: Contain → Assess (is PHI involved?) → Determine breach vs. non-breach → Notify if required → Document everything.`,
          },
          {
            heading: "6. Exam Preparation Checklist",
            body: `Before an OCR investigation or audit, confirm you can produce:

☐ Executed BAAs with all AI vendors that touch PHI
☐ Current Security Rule risk analysis including AI system risks
☐ AI asset inventory with PHI data flow documentation
☐ Access control and audit log evidence for AI systems
☐ AI-specific policies in your HIPAA Privacy and Security policies
☐ Evidence of workforce training on AI and HIPAA obligations
☐ Incident response records for any AI-related privacy events
☐ Vendor oversight documentation (annual reviews, questionnaires)`,
          },
        ],
      },
    },
  },

  cybersecurity: {
    id: "cybersecurity",
    slug: "cybersecurity",
    label: "CYBERSECURITY",
    title: "Cybersecurity Governance Guide for Regulated Organizations",
    subtitle: "Technical controls, regulatory frameworks, and continuous monitoring for cybersecurity governance — specific to your regulated body.",
    tagline: "Select your regulated body below to see cybersecurity requirements tailored to your obligations.",
    hasBodySelector: true,
    file: "/guides/centience-cybersecurity-governance-guide-sec.pdf",
    bodies: {
      SEC: {
        label: "SEC",
        fullName: "Securities and Exchange Commission",
        file: "/guides/centience-cybersecurity-governance-guide-sec.pdf",
        intro: "SEC cybersecurity obligations span Regulation S-P (2024 amendments), Regulation S-ID, and the 2023 Cybersecurity Disclosure Rules for public companies. This guide covers the technical controls, incident response requirements, and vendor risk standards that SEC examiners evaluate — and the evidence you need to produce when notice arrives.",
        sections: [
          { heading: "1. SEC Cybersecurity Regulatory Landscape", body: `SEC cybersecurity requirements have expanded significantly. Investment advisers and broker-dealers face overlapping obligations:

• Regulation S-P (amended 2024): Requires written policies to safeguard customer information. Incident notification to affected customers within 30 days of discovering a breach.
• Regulation S-ID: Identity theft red flags program required for broker-dealers and investment companies.
• Cybersecurity Risk Management Rules (2023): Public companies must disclose material cybersecurity incidents within 4 business days on Form 8-K and disclose risk management processes annually on Form 10-K.
• Proposed Investment Adviser Cybersecurity Rule: Would require written cybersecurity policies, annual risk assessments, incident reporting to SEC, and recordkeeping of cybersecurity events.
• SEC Enforcement: The SEC has brought enforcement actions for inadequate cybersecurity policies, failure to disclose breaches, and misrepresentation of security controls.` },
          { heading: "2. Required Technical Controls Under SEC", body: `SEC examiners evaluate whether cybersecurity policies are technically enforced. These controls must be documented and evidenced:

✓ Encryption of customer data at rest and in transit. Reg S-P requires safeguarding of customer records.
✓ MFA on all systems handling customer data, financial records, and trading systems.
✓ EDR/XDR on all endpoints with active monitoring and documented alert disposition.
✓ Network segmentation isolating trading systems and customer data environments.
✓ Access controls with quarterly reviews documented with evidence of review completion.
✓ Patch management with documented SLAs: critical patches within 72 hours, high within 30 days.` },
          { heading: "3. Incident Response Under SEC Requirements", body: `SEC incident response obligations are time-critical. Your IRP must be calibrated to meet these timelines:

• Materiality Determination: Public companies must determine whether a cybersecurity incident is material. This determination must be made promptly and documented.
• Form 8-K Disclosure: Material incidents must be disclosed within 4 business days of determining materiality.
• Reg S-P Customer Notification: Notify affected customers within 30 days of discovering unauthorized access to their information.
• Exam Documentation: Maintain incident logs with timeline, containment steps, root cause, and remediation. Examiners will request this on Day 1 of a cybersecurity-focused examination.
• Tabletop Exercises: Annual tabletop exercises specifically testing SEC notification timelines and materiality determination procedures.` },
          { heading: "4. Vendor and Third-Party Risk Under SEC", body: `SEC-regulated firms are responsible for cybersecurity failures at vendors that handle customer data:

• Vendor Inventory: Maintain a current inventory of all third parties with access to customer data or firm systems.
• Due Diligence: Require SOC 2 Type II annually for critical vendors. Security questionnaire before onboarding.
• Contractual Requirements: Data security obligations, breach notification within 24-48 hours, right to audit, and data return or destruction on termination.
• Ongoing Monitoring: Annual review of critical vendor security posture.
• Reg S-P Scope: Vendor access to customer records creates Reg S-P obligations. Your safeguard program must extend to cover vendor access.` },
          { heading: "5. Examination Documentation Requirements", body: `SEC cybersecurity examinations require production of specific documentation. Maintain examination-ready files for:

• Written cybersecurity policies and procedures: current, dated, and board or senior management approved.
• Most recent risk assessment results with identified gaps and remediation status.
• Evidence of technical control implementation: configuration screenshots, MDM compliance reports, patch status reports.
• Incident log for the past 3 years for all incidents regardless of severity.
• Vendor due diligence files: SOC 2 reports, questionnaires, and contracts with security provisions.
• Training records: completion logs with dates and topics, phishing simulation results.` },
          { heading: "6. SEC Cybersecurity Exam Readiness Checklist", body: `Before an SEC examination, confirm you can produce within 24 hours:

☐ Written cybersecurity policies signed by senior management dated within last 12 months
☐ Most recent cybersecurity risk assessment with remediation roadmap
☐ Evidence of technical controls: MFA reports, encryption configs, patch status
☐ Incident log for prior 3 years with timelines and remediation steps
☐ Vendor inventory with due diligence documentation
☐ Network diagram showing segmentation of customer data environments
☐ Access review records for systems handling customer data
☐ Annual penetration test or vulnerability assessment results` },
        ],
      },
      FINRA: {
        label: "FINRA",
        fullName: "Financial Industry Regulatory Authority",
        file: "/guides/centience-cybersecurity-governance-guide-finra.pdf",
        intro: "FINRA cybersecurity obligations flow through Rule 4370 (BCP), Rule 3110 (Supervision), and Regulatory Notices 15-09 and 21-18. This guide covers the specific controls, business continuity requirements, and electronic communications standards that FINRA examiners evaluate.",
        sections: [
          { heading: "1. FINRA Cybersecurity Regulatory Landscape", body: `FINRA cybersecurity obligations flow through multiple rules and guidance documents:

• FINRA Rule 4370 (Business Continuity): Requires written BCP covering cybersecurity incidents, data recovery, and alternative communications. Must be tested annually.
• FINRA Rule 3110 (Supervision): Cybersecurity controls are supervised activities. Written supervisory procedures must address cybersecurity.
• FINRA Cybersecurity Report (2015, updated): Establishes baseline expectations for governance, risk assessment, technical controls, incident response, and vendor management.
• Regulatory Notice 22-18: FINRA cybersecurity examination priorities including phishing, ransomware, account takeover, and vendor risk.
• FINRA Sweep Letters: FINRA regularly issues targeted cybersecurity sweeps. Recent sweeps have focused on remote access security, cloud security, and third-party risk.` },
          { heading: "2. Technical Controls Under FINRA", body: `FINRA cybersecurity framework emphasizes practicable controls proportionate to firm size and risk:

✓ Multi-factor authentication on all remote access, email, financial systems, and admin accounts. Explicitly cited in FINRA exam findings.
✓ EDR/XDR with 24/7 monitoring. FINRA has cited lack of endpoint detection as a deficiency in multiple exam cycles.
✓ Email security: advanced threat protection, DMARC, DKIM, SPF, and anti-phishing controls. Business email compromise is FINRA's top cited attack vector.
✓ Network segmentation isolating order management, trading, and customer account systems.
✓ Patch management with documented SLAs and compliance reporting.
✓ Data loss prevention for systems handling customer PII and financial data.` },
          { heading: "3. Incident Response Under FINRA", body: `FINRA incident response obligations require documented, tested procedures:

• Written Incident Response Plan: Must address detection, triage, containment, notification, recovery, and post-incident review. Must be integrated with Rule 4370 BCP.
• Notification Obligations: Prompt notification to FINRA for incidents involving customer harm, regulatory reporting failures, or operational disruption.
• Customer Notification: State breach notification laws apply with timelines varying from 30-72 hours depending on jurisdiction.
• Annual Testing: Tabletop exercise minimum annually. FINRA examiners will ask for the tabletop report and evidence of remediation of identified gaps.
• Documentation: Maintain a log of all cybersecurity incidents with date, nature, containment steps, root cause, and remediation.` },
          { heading: "4. Third-Party and Vendor Risk Under FINRA", body: `FINRA holds member firms responsible for vendor cybersecurity failures:

• Vendor Inventory: Current inventory of all vendors with access to firm systems or customer data, tiered by risk level.
• Due Diligence: Security questionnaire and SOC 2 Type II for critical vendors before onboarding and annually thereafter.
• Contractual Protections: Data security requirements, incident notification within 24-48 hours, right to audit, and data handling on termination.
• Cloud Vendors: FINRA has issued specific guidance on cloud security. Require cloud security posture documentation and shared responsibility clarity.
• Ongoing Oversight: Annual vendor review cycle. FINRA examiners will ask how you monitor vendor security between contract renewals.` },
          { heading: "5. Remote Work and Mobile Security Under FINRA", body: `FINRA has made remote work security a standing examination priority since 2020:

• Remote Access Security: All remote access through managed VPN with MFA. No unmanaged device access to firm systems.
• Home Network Risk: FINRA expects controls on the security of remote work environments including encrypted VPN, managed endpoint, and MFA at minimum.
• Mobile Device Management: MDM enrollment for all mobile devices accessing firm email, systems, or customer data. Remote wipe capability required.
• Electronic Communications: Remote workers must use firm-approved communications channels. Personal email and messaging apps for firm business violate recordkeeping rules.
• Supervision: Written supervisory procedures must specifically address how cybersecurity supervision is maintained for remote workers.` },
          { heading: "6. FINRA Cybersecurity Exam Readiness Checklist", body: `Before a FINRA examination, confirm you can produce:

☐ Written cybersecurity policies and WSPs covering all cybersecurity activities
☐ Annual cybersecurity risk assessment with findings and remediation status
☐ Evidence of MFA deployment across all required systems
☐ BCP including cybersecurity incident response compliant with Rule 4370
☐ Tabletop exercise report from prior 12 months with gap remediation evidence
☐ Vendor inventory and due diligence files for critical vendors
☐ Incident log for prior 2-3 years
☐ Remote access and mobile device management documentation` },
        ],
      },
      HIPAA: {
        label: "HIPAA",
        fullName: "Health Insurance Portability and Accountability Act",
        file: "/guides/centience-cybersecurity-governance-guide-hipaa.pdf",
        intro: "HIPAA Security Rule cybersecurity obligations (45 CFR Part 164, Subpart C) require covered entities and business associates to implement administrative, physical, and technical safeguards for ePHI. This guide covers the specific safeguards, risk analysis requirements, and audit log standards that HHS OCR evaluates in investigations.",
        sections: [
          { heading: "1. HIPAA Security Rule Framework", body: `The HIPAA Security Rule (45 CFR Part 164 Subpart C) establishes the cybersecurity baseline for all covered entities and business associates handling ePHI:

• Administrative Safeguards (164.308): Security management process, assigned security responsibility, workforce security, information access management, security awareness training, security incident procedures, contingency plan, evaluation, and BA contracts.
• Physical Safeguards (164.310): Facility access controls, workstation use and security, device and media controls.
• Technical Safeguards (164.312): Access controls, audit controls, integrity controls, authentication, and transmission security.
• Addressable vs. Required: Some specifications are required and must be implemented. Others are addressable and may use equivalent measures that must be documented. Addressable does not mean optional.
• OCR Enforcement: HHS OCR enforces HIPAA through investigation and civil money penalties. OCR has levied penalties exceeding $1 million for inadequate technical safeguards.` },
          { heading: "2. Required Technical Safeguards for ePHI", body: `The HIPAA Security Rule technical safeguards translate to specific cybersecurity controls that OCR examiners verify:

✓ Unique User Identification (Required): Every user must have a unique login. No shared accounts for systems accessing ePHI.
✓ Automatic Logoff (Addressable): Workstations accessing ePHI must auto-lock after defined inactivity period.
✓ Encryption of ePHI at Rest and in Transit (Addressable but effectively required): OCR consistently expects encryption. Unencrypted portable devices are the leading source of HIPAA enforcement actions.
✓ Audit Controls (Required): Implement hardware, software, or procedural mechanisms to record and examine activity in systems containing ePHI.
✓ Integrity Controls (Addressable): Implement mechanisms to authenticate ePHI and ensure it has not been altered or destroyed in an unauthorized manner.
✓ MFA for remote access to ePHI systems: Not explicitly required by HIPAA but expected by OCR given current threat landscape.` },
          { heading: "3. Security Risk Analysis as the Foundation", body: `The Security Risk Analysis is the single most important HIPAA Security Rule obligation. It is the first thing OCR requests in any investigation:

• Scope: The SRA must cover all ePHI where it is created, received, maintained, or transmitted including all systems, devices, locations, and business associates.
• Threat Identification: Identify all reasonably anticipated threats to ePHI confidentiality, integrity, and availability.
• Vulnerability Assessment: Identify vulnerabilities in your technical, physical, and administrative controls.
• Likelihood and Impact: Rate each identified risk by likelihood of occurrence and potential impact.
• Risk Register: Document all identified risks with current control status, residual risk rating, and remediation plan.
• Update Frequency: The SRA must be updated when there are changes to operations, technology, or environment, not just annually.` },
          { heading: "4. Incident Response Under HIPAA", body: `HIPAA requires a documented security incident response plan. The Breach Notification Rule adds time-critical notification obligations:

• Security Incident Procedures (Required): Written procedures for identifying, responding to, mitigating, and documenting security incidents.
• Breach Definition: Unauthorized acquisition, access, use, or disclosure of unsecured PHI that compromises security or privacy.
• Notification Timeline: 60 days from discovery to notify affected individuals, HHS OCR, and media if 500 or more individuals in a state are affected.
• OCR Reporting: All breaches affecting 500 or more individuals must notify OCR within 60 days. Smaller breaches are logged and reported annually by March 1.
• Low Probability Analysis: If a potential breach occurs, you may conduct a four-factor risk assessment to determine if notification is required. This analysis must be documented.` },
          { heading: "5. Business Associate Cybersecurity Obligations", body: `Business associates are directly liable under HIPAA. If your organization is a BA, the Security Rule applies to you as fully as to covered entities:

• Direct Liability: Since the HITECH Act, BAs are directly subject to HIPAA Security Rule. OCR can investigate and penalize BAs independent of the covered entity.
• Subcontractor BAs: If you share ePHI with a subcontractor, that subcontractor is also a BA and must have a BAA in place.
• BAA Requirements: Your BAA must include specific security obligations: implement appropriate safeguards, report incidents and breaches, and ensure subcontractors comply.
• Incident Reporting to Covered Entity: BAs must report security incidents and breaches to the covered entity without unreasonable delay.` },
          { heading: "6. HIPAA Cybersecurity Exam Readiness Checklist", body: `Before an OCR audit or investigation, confirm you can produce:

☐ Current Security Risk Analysis covering all ePHI environments
☐ Risk management plan with remediation status for identified risks
☐ Evidence of technical safeguards: encryption configs, access control logs, audit logs
☐ Security incident response policies and procedures
☐ Incident log for prior 6 years per HIPAA retention requirement
☐ Workforce security training records with dates and content
☐ BAAs with all vendors and subcontractors that access ePHI
☐ Contingency plan covering backup, disaster recovery, and emergency mode operations` },
        ],
      },
    },
  },

  infrastructure: {
    id: "infrastructure",
    slug: "infrastructure",
    label: "INFRASTRUCTURE",
    title: "Infrastructure Governance Guide for Regulated Organizations",
    subtitle: "How managed infrastructure enforces compliance obligations — endpoints, networks, cloud, identity, and backup governance specific to your regulated body.",
    tagline: "Select your regulated body below to see infrastructure requirements tailored to your obligations.",
    hasBodySelector: true,
    file: "/guides/centience-infrastructure-governance-guide-sec.pdf",
    bodies: {
      SEC: {
        label: "SEC",
        fullName: "Securities and Exchange Commission",
        file: "/guides/centience-infrastructure-governance-guide-sec.pdf",
        intro: "SEC examiners evaluate whether compliance controls are technically enforced — not just documented. This guide covers how managed infrastructure implements Regulation S-P safeguards, books-and-records WORM storage, MFA enforcement, and the technical evidence SEC examiners request on Day 1 of a technology examination.",
        sections: [
          { heading: "1. Why Infrastructure Governance Matters to the SEC", body: `The SEC does not regulate infrastructure directly, but infrastructure is how you prove every other governance obligation is real:

• Reg S-P requires safeguards for customer records. Unmanaged endpoints and unencrypted storage are direct violations.
• Reg S-ID requires detection and response capabilities. Unmonitored infrastructure cannot detect identity theft red flags.
• SEC examination findings consistently cite lack of technical enforcement of written policies as a deficiency.
• The examiner test: do your systems enforce your policies, or do your policies just describe your hope?` },
          { heading: "2. Endpoint and Device Governance Under SEC", body: `Endpoints that access customer data or financial systems must be enrolled, managed, and auditable:

✓ MDM/UEM enrollment for all endpoints. Unmanaged devices accessing customer records violate Reg S-P safeguard requirements.
✓ Full disk encryption enforced and verified. Encrypted endpoints are a safe harbor if a device is lost or stolen; unencrypted endpoints create breach disclosure obligations.
✓ EDR/XDR with centralized monitoring. Required to meet SEC expectation of active threat detection in customer data environments.
✓ Automated patch management with documented SLAs. Unpatched systems in customer data environments are a Reg S-P deficiency.
✓ Quarterly MDM compliance reports as evidence for SEC examination that endpoint governance controls are actively enforced.` },
          { heading: "3. Network Infrastructure Under SEC", body: `Network architecture must isolate customer data and support SEC audit requirements:

• Segmentation: Customer data environments must be logically isolated from general business networks. Flat network architectures in SEC-regulated environments are a significant exam risk.
• Trading System Isolation: Order management and trading systems require additional network controls isolated from general IT infrastructure.
• Firewall Management: Documented rulesets, quarterly review, and change management logging. SEC examiners have requested firewall rules as evidence of network controls.
• Remote Access: All remote access through MFA-enforced VPN or ZTNA. Log all remote sessions accessing customer data systems.
• DNS Filtering: Block access to known-malicious domains. Required for reasonable safeguard standard under Reg S-P.` },
          { heading: "4. Cloud and Data Infrastructure Under SEC", body: `Cloud services that store or process customer records create specific Reg S-P obligations:

• Cloud Inventory: Maintain a current inventory of all cloud services storing or processing customer records.
• Data Classification: Know where customer PII and financial records are stored across cloud environments.
• CSPM Deployment: Cloud security posture management tool to continuously detect and alert on misconfigurations in cloud environments storing customer data.
• No Public Buckets: S3, Azure Blob, or GCS buckets containing customer records must never be publicly accessible. This is a per-violation Reg S-P failure.
• Cloud Logging: CloudTrail, Azure Activity Logs, or equivalent retained and searchable. Required to meet SEC audit and recordkeeping obligations.` },
          { heading: "5. Identity Infrastructure Under SEC", body: `Access governance is a core SEC examination focus. The technical foundation is identity infrastructure:

• Single Identity Directory: All users provisioned through a single authoritative directory. Shadow accounts outside the directory are an access control deficiency.
• Privileged Access Management: Admin and privileged accounts must be managed through PAM with separate credentials, logged sessions, and just-in-time access.
• Access Reviews: Quarterly reviews for systems handling customer data, documented with evidence of review and remediation.
• Offboarding: Immediate account termination process for departing employees on the same day. Access after termination is a Reg S-P deficiency.
• Service Accounts: Inventory all service accounts with access to customer data. Rotate credentials on a defined schedule. Remove unused service accounts.` },
          { heading: "6. SEC Infrastructure Governance Checklist", body: `Infrastructure governance evidence for SEC examination readiness:

☐ MDM enrollment evidence for all endpoints accessing customer data
☐ Encryption compliance report for all endpoints and storage containing customer records
☐ Network segmentation diagram documenting customer data environment isolation
☐ Cloud inventory with data classification and public access verification
☐ Identity directory showing all active accounts with last login dates
☐ Privileged account inventory with PAM evidence
☐ Access review records quarterly for customer data systems
☐ Offboarding log with evidence of same-day access termination` },
        ],
      },
      FINRA: {
        label: "FINRA",
        fullName: "Financial Industry Regulatory Authority",
        file: "/guides/centience-infrastructure-governance-guide-finra.pdf",
        intro: "FINRA's supervision framework requires ongoing, documented oversight of all firm activities including technology. This guide covers how managed infrastructure supports Rule 3110 supervisory evidence generation, Rule 4370 BCP execution, communications archiving enforcement, and the technical evidence FINRA examiners request.",
        sections: [
          { heading: "1. Why Infrastructure Governance Matters to FINRA", body: `FINRA Rule 4370 and Rule 3110 both depend on managed infrastructure:

• Rule 4370 BCP: Business continuity planning requires knowing which systems are critical, how they fail, and how they recover. Unmanaged infrastructure cannot support a credible BCP.
• Rule 3110 Supervision: Electronic communications, order management, and supervisory reviews all happen on infrastructure. Gaps in infrastructure governance create supervision gaps.
• FINRA Cybersecurity Expectations: FINRA annual examination priorities consistently include infrastructure security including endpoint protection, remote access, and cloud governance.
• Evidence Standard: FINRA examiners expect evidence that infrastructure controls are enforced. MDM compliance reports, patch status dashboards, and access logs are examiner-requested documents.` },
          { heading: "2. Endpoint and Device Governance Under FINRA", body: `Broker-dealer endpoints must be managed to support supervision, recordkeeping, and business continuity obligations:

✓ MDM/UEM enrollment for all endpoints used for firm business. FINRA has cited unmanaged personal devices as supervision gaps.
✓ Electronic communications archiving configured at the device level to ensure all firm communications are captured regardless of application used.
✓ EDR/XDR with managed detection and response. Required to meet Rule 4370 incident detection requirements.
✓ Encryption on all endpoints and removable media to protect customer records in transit.
✓ Application controls to prevent installation of unauthorized communications applications that could bypass recordkeeping requirements.` },
          { heading: "3. Network Infrastructure Under FINRA", body: `Network infrastructure must support FINRA supervision and business continuity requirements:

• Segmentation: Order management and trading systems isolated from general office networks with network access logs for regulated systems.
• Firewall Management: Documented rulesets reviewed quarterly with change management log for all firewall changes.
• Remote Access: MFA-enforced VPN or ZTNA for all remote access with session logging. FINRA has specifically examined remote access security in recent cycles.
• Network Monitoring: IDS/IPS and SIEM ingesting network logs. Required to support the incident detection obligations under Rule 4370.
• Wireless Security: WPA3 or WPA2-Enterprise on corporate wireless with isolated guest network. Document wireless configuration for examination evidence.` },
          { heading: "4. Records Infrastructure Under FINRA", body: `FINRA rules 4511 and 4512 require electronic records to be maintained in specific format:

• WORM Compliance: Rule 17a-4 requires electronic records to be stored in a non-rewriteable non-erasable format. Your storage infrastructure must meet this requirement.
• Retention Periods: Books and records must be retained for defined periods. 6 years for most broker-dealer records with 3 years in an accessible location.
• Email and Communications Archiving: All electronic communications must be captured and archived. Infrastructure gaps create recordkeeping failures.
• Retrieval Capability: Archived records must be retrievable promptly within 24 hours for recent records. Test your retrieval capability before an examination requests records.
• Backup and Recovery: Rule 4370 requires ability to recover records in a business disruption. Backup infrastructure must be tested and documented.` },
          { heading: "5. Identity and Access Infrastructure Under FINRA", body: `Access governance is a FINRA examination priority. The technical foundation is identity infrastructure:

• Single Identity Directory: All users provisioned through a single directory. Shadow accounts create supervision gaps and recordkeeping failures.
• MFA Enforcement: MFA on all remote access, email, and financial systems. FINRA has cited missing MFA as a deficiency in multiple examination cycles.
• Access Reviews: Quarterly reviews for trading and financial systems with documentation of exception remediation.
• Terminated Employee Access: Immediate revocation on termination. Access after departure creates both supervision and cybersecurity risks.
• Privileged Access: Admin and privileged accounts logged and reviewed monthly with separate privileged credentials from standard user accounts.` },
          { heading: "6. FINRA Infrastructure Governance Checklist", body: `Infrastructure governance evidence for FINRA examination readiness:

☐ MDM enrollment evidence and compliance report for all firm endpoints
☐ Electronic communications archiving configuration documentation
☐ Network segmentation documentation for trading and order management systems
☐ WORM storage compliance evidence for required books and records
☐ Remote access logs and MFA enrollment evidence
☐ BCP documentation with infrastructure recovery procedures per Rule 4370
☐ Access review records quarterly for financial systems
☐ Terminated employee access termination log` },
        ],
      },
      HIPAA: {
        label: "HIPAA",
        fullName: "Health Insurance Portability and Accountability Act",
        file: "/guides/centience-infrastructure-governance-guide-hipaa.pdf",
        intro: "The HIPAA Security Rule requires covered entities and business associates to implement physical and technical safeguards for ePHI through managed infrastructure. This guide covers how managed infrastructure implements encryption, audit logging, access controls, and contingency planning — and creates the OCR evidence required in investigations and audits.",
        sections: [
          { heading: "1. HIPAA Physical and Technical Safeguards as Infrastructure Mandates", body: `HIPAA Security Rule Physical and Technical Safeguards are explicitly infrastructure requirements. They cannot be satisfied with policies alone:

• Physical Safeguards (164.310): Facility access controls for systems containing ePHI. Workstation use policies for proper function of workstations. Device and media controls for how hardware and electronic media are handled, moved, reused, and disposed.
• Technical Safeguards (164.312): Access controls including unique user identification, automatic logoff, and encryption. Audit controls and transmission security.
• OCR Enforcement Pattern: The most common HIPAA enforcement actions involve infrastructure failures including unencrypted laptops, unsecured servers, improperly disposed media, and unsecured remote access.` },
          { heading: "2. Endpoint and Device Governance Under HIPAA", body: `Every device that accesses, stores, or transmits ePHI must be governed under HIPAA physical and technical safeguards:

✓ Full disk encryption on all endpoints and portable media containing ePHI. Encrypted devices are a safe harbor under HIPAA breach rules. Unencrypted means mandatory breach reporting.
✓ MDM/UEM enrollment required to enforce encryption, screen lock, remote wipe, and application controls on all ePHI-accessing devices.
✓ Automatic screen lock after defined inactivity. OCR expects implementation or documented equivalent.
✓ Remote wipe capability for all mobile devices and laptops accessing ePHI. Required for device and media controls under 164.310.
✓ Secure disposal documentation with certificate of destruction for any hardware that previously stored ePHI.` },
          { heading: "3. Network Infrastructure Under HIPAA", body: `Network infrastructure must isolate ePHI systems and enforce transmission security:

• ePHI Network Segmentation: Systems storing or processing ePHI must be on isolated network segments. Clinical systems, EHR, and billing systems must not share segments with general office traffic.
• Encryption in Transit (Required): All ePHI transmitted over open networks must be encrypted including email, file transfers, and API communications involving patient data.
• Wireless Security: Wireless networks providing access to ePHI systems must use strong encryption. Document wireless security configuration.
• Firewall Controls: Documented inbound and outbound rules for ePHI network segments with quarterly rule review and logging of all access to ePHI systems.
• VPN for Remote Access: Remote access to ePHI systems must be through encrypted VPN with MFA. Unencrypted remote access to ePHI is a technical safeguard violation.` },
          { heading: "4. Backup and Contingency Infrastructure Under HIPAA", body: `HIPAA Contingency Plan standard (164.308(a)(7)) requires specific infrastructure capabilities:

• Data Backup Plan (Required): Establish and implement procedures to create and maintain exact retrievable copies of ePHI. Backup must be current with daily backup for active clinical environments.
• Disaster Recovery Plan (Required): Procedures to restore lost data. Must be tested with documented test results and RTO and RPO validation.
• Emergency Mode Operations Plan (Required): Procedures to continue critical business processes for protection of ePHI while operating in emergency mode.
• Testing and Revision (Addressable): Implement procedures for periodic testing and revision of contingency plans. OCR expects annual documented testing.
• Offsite Storage: Backup media must be stored at a separate location from primary systems. Cloud backup with geographic redundancy satisfies this if the vendor has a compliant BAA.` },
          { heading: "5. Identity and Access Infrastructure Under HIPAA", body: `HIPAA Access Control standard (164.312(a)) requires specific identity and access infrastructure:

• Unique User Identification (Required): Every user must have a unique identifier for accessing ePHI systems. Shared accounts are a required safeguard violation that OCR has penalized.
• Role-Based Access Control: Users should access only the minimum necessary ePHI for their job function. Configure RBAC in EHR and clinical systems with quarterly role assignment review.
• Audit Logging (Required): All access to ePHI systems must be logged including user ID, date, time, action, and data accessed. Logs must be retained for 6 years.
• MFA for Remote Access: Not explicitly required by HIPAA text but OCR has stated MFA is expected for remote ePHI access in the current threat environment.
• Termination Procedures: Same-day access revocation for terminated workforce members with documented evidence. Combined with MDM remote wipe for devices.` },
          { heading: "6. HIPAA Infrastructure Governance Checklist", body: `Infrastructure governance evidence for OCR examination readiness:

☐ Encryption evidence for all endpoints and storage containing ePHI
☐ MDM enrollment and compliance reports for all ePHI-accessing devices
☐ Network segmentation documentation for ePHI environments
☐ Contingency plan with backup test results and DR test results from prior 12 months
☐ Access control configuration evidence for ePHI systems
☐ Audit log samples demonstrating logging of ePHI system access
☐ Device disposal certificates for any retired hardware that stored ePHI
☐ Terminated workforce member access revocation evidence` },
        ],
      },
    },
  },

  tech_governance: {
    id: "tech_governance",
    slug: "governance-program",
    label: "GOVERNANCE PROGRAM",
    title: "Technology Governance Program Guide",
    subtitle: "The Centience governance model — Assessment, Roadmap, and Program — built around your specific regulatory obligations.",
    tagline: "Select your regulated body below to see governance program details tailored to your obligations.",
    hasBodySelector: true,
    file: "/guides/centience-governance-program-guide-sec.pdf",
    bodies: {
      SEC: {
        label: "SEC",
        fullName: "Securities and Exchange Commission",
        file: "/guides/centience-governance-program-guide-sec.pdf",
        intro: "SEC-registered firms face continuous governance obligations — not one-time assessments. The Centience model operates on a rolling calendar aligned to Rule 206(4)-7 annual compliance review, Regulation S-P ongoing safeguarding requirements, and the SEC's examination cycle. This guide covers how the Assessment, Roadmap, and Program phases translate specifically to SEC technology obligations.",
        sections: [
          { heading: "1. Why SEC-Registered Firms Need a Governance Program", body: `Rule 206(4)-7 annual compliance review, Regulation S-P ongoing monitoring, SEC examination priorities, and materiality determination for cybersecurity disclosure all require a functioning program — not a point-in-time document.

• Annual compliance review is not optional — it is a regulatory requirement for registered investment advisers.
• Regulation S-P safeguarding is continuous. Customer records must be protected at all times, not just during examinations.
• SEC examination priorities change annually. Your governance program must adapt to current priorities.
• Cybersecurity disclosure obligations require ongoing materiality monitoring — you cannot make materiality determinations without an active program.` },
          { heading: "2. Assessment Phase — SEC Focus Areas", body: `The assessment phase establishes your governance baseline against SEC-specific requirements:

• Regulation S-P Gap Analysis: Evaluate current safeguards against the 2024 amended requirements including 30-day customer notification.
• Books and Records Audit: Verify WORM compliance, retention periods, and accessibility of all required records.
• AI Governance Review: Inventory AI tools, assess conflict of interest risk, evaluate disclosure adequacy.
• Cybersecurity Control Validation: Test technical controls against current SEC examination standards.
• Vendor Risk Assessment: Review all third-party relationships with access to customer data.
• Policy Currency Review: Evaluate all written policies against current SEC rules and guidance.` },
          { heading: "3. Roadmap Phase — SEC Remediation Priorities", body: `The roadmap translates assessment findings into an executable remediation plan:

• Critical (30 days): Active regulatory violations, unaddressed prior examination findings, material disclosure gaps.
• High (90 days): Controls that would likely result in examination findings, significant policy gaps, vendor risk issues.
• Medium (180 days): Compliance gaps with indirect examination exposure, documentation deficiencies, process improvements.
• Low (Annual): Best-practice improvements, efficiency optimizations, emerging regulatory preparation.

Each remediation item includes SEC rule citation, current enforcement context, and specific implementation guidance.` },
          { heading: "4. Ongoing Program — SEC Examination Calendar", body: `The program phase maintains examination readiness continuously:

• Monthly: Security monitoring review, privileged access review, vendor incident review, policy exception log.
• Quarterly: Access review for customer data systems, governance dashboard for leadership, vendor due diligence refresh, penetration testing.
• Annually: Full governance assessment refresh, policy review and update cycle, incident response tabletop, BCP/DR test, regulatory change management review, Rule 206(4)-7 annual compliance review.` },
          { heading: "5. SEC Examination Support", body: `The governance program produces a standing evidence file that makes the standard SEC document request fulfillable within 24 hours:

• Standard Document Request Response: Pre-assembled evidence file with all commonly requested technology documents.
• Staff Preparation: Key personnel briefed on examination protocols and document preservation obligations.
• Examiner Coordination: Single point of contact designated, production log maintained for all documents provided.
• Post-Examination: Findings documented in risk register, remediation commitments tracked, follow-up examination preparation initiated.` },
          { heading: "6. SEC Governance Program Readiness Checklist", body: `Governance program evidence that demonstrates a continuously operational compliance program:

☐ Current governance assessment with findings and remediation status
☐ Active remediation roadmap with milestone tracking
☐ Monthly/quarterly governance activity logs demonstrating continuous operation
☐ Standing evidence file with all standard SEC document request items
☐ Annual compliance review documentation per Rule 206(4)-7
☐ Regulatory change management log showing program adaptation
☐ Board/leadership governance reporting history
☐ Staff training records including governance program orientation` },
        ],
      },
      FINRA: {
        label: "FINRA",
        fullName: "Financial Industry Regulatory Authority",
        file: "/guides/centience-governance-program-guide-finra.pdf",
        intro: "FINRA's supervision framework requires ongoing evidence of actual supervisory review — not just written procedures. The Centience model produces supervisory evidence continuously, aligned to Rule 3110 review requirements, Rule 4370 BCP obligations, and FINRA's annual examination priorities.",
        sections: [
          { heading: "1. Why FINRA-Registered Firms Need a Governance Program", body: `Rule 3110 requires documented evidence of supervision. Rule 4370 requires tested BCPs. Rule 3130 CEO certification requires a documented compliance basis. All three require a continuous program.

• WSPs without evidence of execution are a common FINRA finding. The program generates supervisory evidence automatically.
• BCP testing is explicitly required annually. The program maintains tested, current BCPs.
• CEO certification under Rule 3130 requires a compliance officer report on the adequacy of WSPs. The program provides the documentation basis.` },
          { heading: "2. Assessment Phase — FINRA Focus Areas", body: `The assessment phase evaluates your firm against FINRA-specific requirements:

• WSP Gap Analysis: Compare current WSPs against actual operations. Identify procedures that do not reflect reality.
• Supervisory Review Evidence Audit: Verify that every supervisory procedure has corresponding evidence of execution.
• Electronic Communications Coverage Verification: Confirm all firm communications channels are captured and archived.
• BCP Assessment: Evaluate BCP against FINRA Rule 4370 requirements including annual testing evidence.
• Vendor Risk Assessment: Review critical technology vendor due diligence documentation.
• Training Records Review: Verify compliance and cybersecurity training completion for all staff.` },
          { heading: "3. Roadmap Phase — FINRA Remediation Priorities", body: `The roadmap prioritizes findings using FINRA rule citations and recent examination finding patterns:

• Critical (30 days): WSP-practice gaps, unarchived communications channels, untested BCP, missing MFA on required systems.
• High (90 days): Incomplete supervisory review logs, vendor due diligence gaps, cybersecurity policy deficiencies.
• Medium (180 days): Training documentation improvements, access review formalization, incident response procedure updates.
• Low (Annual): Best-practice improvements, emerging guidance preparation, process efficiency.` },
          { heading: "4. Ongoing Program — FINRA Supervisory Calendar", body: `The program phase produces continuous supervisory evidence:

• Daily/Weekly: Supervisory review of communications, trade activity, and exception reports with documented review logs.
• Monthly: Cybersecurity monitoring review, access review for privileged accounts, vendor incident review.
• Quarterly: Access review for trading and financial systems, governance dashboard for leadership, vendor due diligence refresh.
• Annually: Full governance assessment refresh, WSP update cycle, BCP test per Rule 4370, incident response tabletop, Rule 3130 CEO certification preparation.` },
          { heading: "5. FINRA Examination Support", body: `The governance program keeps WSPs current, supervisory review logs production-ready, and technology documentation examination-grade at all times:

• WSP Currency: Technology changes trigger WSP updates before the change goes live — not after an examination finds the gap.
• Supervisory Evidence: Every supervisory procedure accompanied by review logs with no gaps.
• BCP Documentation: Tested annually with documented results ready for immediate production.
• Staff Preparation: Key personnel briefed on examination protocols consistent with written WSPs.` },
          { heading: "6. FINRA Governance Program Readiness Checklist", body: `Governance program evidence demonstrating a continuously operational supervisory program:

☐ Current WSPs reflecting actual operations for all technology-related activities
☐ Supervisory review logs with no gaps for prior 90 days minimum
☐ BCP tested within prior 12 months with Rule 4370 test results
☐ Electronic communications archiving coverage verification
☐ Active remediation roadmap with milestone tracking
☐ Monthly/quarterly governance activity logs
☐ Vendor due diligence files current for all critical technology vendors
☐ Rule 3130 CEO certification documentation` },
        ],
      },
      HIPAA: {
        label: "HIPAA",
        fullName: "Health Insurance Portability and Accountability Act",
        file: "/guides/centience-governance-program-guide-hipaa.pdf",
        intro: "HIPAA Security Rule compliance is a continuous obligation — not an annual certification. The Centience model maintains a living risk analysis, continuous workforce controls, and ongoing evidence of safeguard implementation specifically aligned to OCR audit protocol and enforcement priorities.",
        sections: [
          { heading: "1. Why Healthcare Organizations Need a Governance Program", body: `Risk analysis must be a living document. Training must be reinforced by technical controls. OCR enforcement finds the gap between documented policies and operational implementation — the governance program closes it.

• The Security Risk Analysis is the first document OCR requests. An outdated SRA is the most common HIPAA violation.
• Policies without evidence of implementation are insufficient. OCR evaluates whether safeguards are actually deployed.
• OCR considers the existence of a documented, continuous governance program as a mitigating factor in settlement negotiations.` },
          { heading: "2. Assessment Phase — HIPAA Focus Areas", body: `The assessment phase evaluates compliance against OCR audit protocol:

• Risk Analysis Evaluation: Is the current SRA comprehensive, covering all ePHI environments including cloud, mobile, and business associate systems?
• Technical Safeguards Audit: Verify encryption, access controls, audit logging, and transmission security across all ePHI systems.
• Business Associate Inventory Review: Complete inventory of all BAs with current BAA status verification.
• Workforce Controls Assessment: Training records, access authorization procedures, termination procedures.
• Contingency Planning Evaluation: Backup procedures, disaster recovery, emergency mode operations testing.` },
          { heading: "3. Roadmap Phase — HIPAA Remediation Priorities", body: `The roadmap uses the OCR four-factor risk framework and current enforcement action patterns:

• Critical (30 days): Missing or outdated SRA, unencrypted ePHI on portable devices, missing BAAs with active vendors, no incident response plan.
• High (90 days): Incomplete audit logging, access control gaps, workforce training deficiencies, contingency plan not tested.
• Medium (180 days): Policy documentation improvements, BAA updates to current Omnibus Rule standards, access review formalization.
• Low (Annual): Best-practice improvements, emerging guidance preparation, process efficiency.` },
          { heading: "4. Ongoing Program — HIPAA Compliance Calendar", body: `The program phase maintains continuous OCR readiness:

• Monthly: Audit log review for ePHI systems, access exception review, vendor incident monitoring, security awareness reinforcement.
• Quarterly: Access reviews for all ePHI systems, BAA inventory verification, governance dashboard for leadership.
• Annually: Full Security Risk Analysis refresh, policy review and update cycle, contingency plan testing (backup restore + DR test), workforce HIPAA training, vendor oversight review.` },
          { heading: "5. OCR Investigation Support", body: `The governance program produces a current risk analysis, complete BAA inventory, and 6-year evidence file — the primary documentation OCR requests in breach-triggered investigations:

• Breach Response Support: Immediate access to current SRA, BAA inventory, and incident log for breach assessment and notification decisions.
• OCR Document Production: Pre-assembled evidence file covering all standard OCR document requests.
• Corrective Action Plan Preparation: If OCR identifies violations, the existing governance program documentation demonstrates good faith compliance efforts.
• Resolution Agreement Negotiation: Documented governance program is a significant mitigating factor in settlement negotiations.` },
          { heading: "6. HIPAA Governance Program Readiness Checklist", body: `Governance program evidence demonstrating a continuously operational HIPAA compliance program:

☐ Current Security Risk Analysis updated within prior 12 months
☐ Risk management plan with documented remediation status
☐ All Security Rule required policies: current, signed, reflecting actual operations
☐ Workforce training records: annual completion logs for all workforce members
☐ BAA inventory: complete with executed current BAAs
☐ Technical safeguards evidence: encryption, access controls, audit logs
☐ Contingency plan test results from prior 12 months
☐ Monthly/quarterly governance activity logs demonstrating continuous operation` },
        ],
      },
    },
  },

  compliance_readiness: {
    id: "compliance_readiness",
    slug: "compliance-readiness",
    label: "COMPLIANCE READINESS",
    title: "Compliance Readiness Guide for Regulatory Examinations",
    subtitle: "What regulators are actually looking for in technology governance examinations — specific to SEC, FINRA, or HIPAA.",
    tagline: "Select your regulated body below to see examination readiness requirements tailored to your obligations.",
    hasBodySelector: true,
    file: "/guides/centience-compliance-readiness-guide-sec.pdf",
    bodies: {
      SEC: {
        label: "SEC",
        fullName: "Securities and Exchange Commission",
        file: "/guides/centience-compliance-readiness-guide-sec.pdf",
        intro: "SEC examinations begin with a document request. Your ability to respond completely and quickly sets the tone for the entire examination. This guide covers how SEC examinations are scheduled, what technology documents are consistently requested, what examiners actually evaluate beyond the documents, and the highest-risk areas in the current examination cycle — so you are ready before the notice arrives.",
        sections: [
          { heading: "1. How SEC Examinations Work", body: `Understanding SEC examination methodology is the foundation of exam preparation:

• Risk-based selection: Firms with complaints, material events, or flagged risk indicators are examined sooner and more intensively.
• Routine cycle: Most registrants are examined on a 3-7 year cycle depending on size and risk profile.
• Cause examinations: Triggered by complaints, breach notifications, whistleblower tips, or industry sweep topics.
• Division of Examinations annual priorities translate to technology examination focus areas.

The most common exam failure is the gap between policy and practice. Written policies describe controls that don't exist in operation. Examiners find this within hours.` },
          { heading: "2. Standard SEC Technology Document Requests", body: `Eight consistently requested technology documents:

• Information security policy: current, dated, and signed by senior management.
• Incident response plan: tested within prior 12 months with tabletop exercise results.
• Vendor list and agreements: inventory of all third parties with access to customer data with security provisions.
• Cybersecurity risk assessment: most recent, with identified gaps and remediation status.
• Penetration test results: most recent external penetration test or vulnerability assessment.
• MFA evidence: deployment reports showing MFA on all required systems.
• AI inventory: if applicable, all AI tools with use-case descriptions and governance documentation.
• Books and records compliance documentation: WORM storage verification and retention configuration.` },
          { heading: "3. What SEC Examiners Actually Evaluate", body: `The three tests beyond documents:

• Policy vs. Practice: Examiners interview staff to test whether written policies reflect actual operations. Inconsistency between written WSPs and staff descriptions of daily operations is the most common technology finding.
• Currency: Dated evidence is critical. Policies from 3+ years ago without update, risk assessments older than 12 months, and untested BCPs create immediate exam exposure.
• Technical Evidence: Examiners increasingly request technical artifacts — not just policy descriptions. MDM compliance reports, patch status dashboards, MFA enrollment reports, and access review logs are the evidence that policies are enforced.` },
          { heading: "4. High-Risk Areas in Current SEC Examinations", body: `Based on recent SEC examination findings and enforcement actions:

• AI governance: SEC is actively asking about AI use, governance frameworks, and conflict of interest analysis. Firms without an AI inventory are starting from a deficit.
• Reg S-P 2024 compliance gaps: The amended rule requires 30-day customer notification. Many firms have not updated their incident response procedures to meet this timeline.
• Cybersecurity incident disclosure: Public companies face the 4-business-day material incident disclosure requirement. Materiality determination procedures must be documented and tested.
• Vendor risk: SEC examinations consistently probe vendor oversight. Missing SOC 2 reports and vendor contracts without security provisions are common findings.
• Books and records format compliance: WORM storage requirements for electronic records. Non-compliant storage is a per-record violation.` },
          { heading: "5. The SEC Examination Evidence File", body: `Eight-document standing evidence file maintained continuously and producible within 24 hours:

☐ Written cybersecurity and technology policies: current, signed, version-controlled
☐ Most recent cybersecurity risk assessment with remediation status
☐ Incident response plan with most recent tabletop exercise results
☐ Vendor inventory with due diligence documentation for critical vendors
☐ Technical control evidence: MFA reports, encryption verification, patch status
☐ Access review records for customer data systems
☐ Training records: completion logs with dates and topics
☐ AI inventory and governance documentation (if applicable)` },
          { heading: "6. SEC Compliance Readiness Checklist", body: `Eight-point pre-examination checklist confirming all policies are current, all evidence is available, and all prior findings are remediated:

☐ All technology policies reviewed and signed within prior 12 months
☐ Cybersecurity risk assessment current with no unaddressed critical findings
☐ Incident response plan tested within prior 12 months
☐ All prior SEC examination findings fully remediated with documentation
☐ Vendor due diligence files current for all critical technology vendors
☐ Staff briefed on examination protocols and document preservation
☐ Standing evidence file assembled and verified complete
☐ Single examination point of contact designated with authority to produce documents` },
        ],
      },
      FINRA: {
        label: "FINRA",
        fullName: "Financial Industry Regulatory Authority",
        file: "/guides/centience-compliance-readiness-guide-finra.pdf",
        intro: "FINRA examinations begin with document requests and are followed by staff interviews that test whether documents reflect reality. This guide covers how FINRA examinations are scheduled, what technology documents are consistently requested, the three themes that define what examiners actually evaluate, and the highest-risk areas in the current examination cycle.",
        sections: [
          { heading: "1. How FINRA Examinations Work", body: `Understanding FINRA examination methodology:

• Risk-based scheduling: Firms with customer complaints, regulatory events, or significant changes are examined more frequently.
• Examination cycles vary by firm size and risk profile. Smaller firms may go 3-4 years between examinations; larger firms are examined more frequently.
• For-cause examinations triggered by specific events, complaints, or regulatory tips.
• Annual examination priorities published by FINRA define focus areas for the coming cycle.
• Document-first, interview-second methodology: FINRA requests documents, reviews them, then interviews staff to test consistency.
• Deficiency Letter: If the examination identifies deficiencies you receive a letter requiring written response within 30 days. Prior deficiencies not remediated escalate to formal disciplinary action.` },
          { heading: "2. Standard FINRA Technology Document Requests", body: `Six consistently requested technology document categories:

• Written Supervisory Procedures covering all technology-related activities including cybersecurity, electronic communications, remote access, social media, and business continuity.
• Evidence of supervisory review: WSPs must be accompanied by logs or records showing that supervision actually occurred as described.
• Business Continuity Plan compliant with Rule 4370, tested within prior 12 months, with test results on file.
• Electronic communications archiving documentation including which channels are captured, what is excluded, review procedures, and retention configuration.
• Cybersecurity program documentation including written policies, most recent risk assessment, and incident log.
• Vendor risk management documentation including inventory of critical technology vendors with due diligence files.` },
          { heading: "3. What FINRA Examiners Actually Evaluate", body: `Three consistent themes in FINRA technology examinations:

• WSP-Practice Gap: Written supervisory procedures that do not reflect actual operations. Examiners interview staff to test consistency between WSPs and what staff actually do. This is the most common FINRA technology finding.
• Supervision is Evidenced: Review logs with no gaps, approval records, escalation documentation. Every supervisory procedure must have corresponding evidence of execution.
• Controls are Tested: BCP testing per Rule 4370, penetration testing, archiving coverage testing. Untested controls are treated as unverified controls.` },
          { heading: "4. High-Risk Areas in Current FINRA Examinations", body: `Based on FINRA examination findings reports and enforcement actions:

• Electronic Communications: Unarchived communications channels including personal email, WhatsApp, and text messages used for firm business. FINRA has levied record-setting fines for communications recordkeeping failures.
• Business Continuity: BCPs that have not been updated or tested since they were written. Rule 4370 testing requirement is explicit and examiners request test results.
• Remote Access Security: Missing MFA on remote access and unmanaged personal devices accessing firm systems. FINRA has made remote security a standing examination priority.
• Third-Party Risk: Insufficient vendor due diligence, missing security provisions in technology contracts, and no ongoing vendor monitoring.
• WSP Currency: WSPs that have not been updated to reflect new technology, new business lines, or new regulatory guidance.` },
          { heading: "5. The FINRA Examination Evidence File", body: `Standing evidence file maintained continuously:

☐ Current WSPs for all technology-related activities
☐ 90-day supervisory review logs showing evidence of actual review
☐ BCP documentation with most recent test results per Rule 4370
☐ Electronic communications archiving coverage report
☐ Cybersecurity policies and most recent risk assessment
☐ Vendor inventory with due diligence files for critical vendors
☐ Incident log for prior 2-3 years
☐ Staff training completion records` },
          { heading: "6. FINRA Compliance Readiness Checklist", body: `Eight-point pre-examination checklist:

☐ Current WSPs for all technology-related activities including cybersecurity, electronic communications, remote access, and BCP
☐ Supervisory review logs with no gaps showing evidence of actual review as described in WSPs
☐ BCP tested within prior 12 months with Rule 4370 test results on file
☐ Electronic communications archiving evidence with all channels captured and retention configured correctly
☐ Cybersecurity program documentation including policies, risk assessment, and incident log
☐ Vendor due diligence files for all critical technology service providers
☐ MFA deployment evidence for remote access and financial systems
☐ Staff training records including cybersecurity and compliance training completion logs` },
        ],
      },
      HIPAA: {
        label: "HIPAA",
        fullName: "Health Insurance Portability and Accountability Act",
        file: "/guides/centience-compliance-readiness-guide-hipaa.pdf",
        intro: "Over 90% of OCR enforcement actions begin with a breach notification. The organizations that fare best in OCR investigations are those with a documented, continuous compliance program — not those that assembled documentation in response to the investigation notice. This guide covers how OCR audits and investigations work, what documents OCR consistently requests, what they actually evaluate, and the highest-risk findings in current enforcement actions.",
        sections: [
          { heading: "1. How OCR Audits and Investigations Work", body: `HHS Office for Civil Rights enforces HIPAA through several mechanisms:

• Complaint Investigations: Triggered by patient or employee complaints to OCR. The most common trigger for HIPAA enforcement. OCR investigates approximately 25,000 complaints per year.
• Breach Investigations: All breaches affecting 500 or more individuals trigger OCR investigation. Smaller breaches are investigated based on risk-based selection from the annual breach log.
• Compliance Reviews: OCR Phase 2 Audit Program conducts desk audits and on-site investigations selected based on risk criteria. Focus areas include risk analysis, risk management, and breach notification.
• Corrective Action Plans: If OCR finds HIPAA violations they may require a CAP with formal remediation commitments and OCR oversight for 1-3 years including monitoring and periodic reporting.
• Civil Money Penalties: OCR can impose penalties up to $1.9 million per violation category per calendar year for willful neglect.` },
          { heading: "2. OCR Audit Document Request — Technology Focus", body: `OCR Phase 2 Audit Protocol defines specific document requests. For technology governance these are the core requests:

• Security Risk Analysis: most recent, covering all ePHI environments, with identified risks and risk ratings.
• Risk Management Plan: documented plan to reduce identified risks to a reasonable level with implementation status.
• Security Policies and Procedures: all Security Rule required policies, current, dated, and signed.
• Workforce Training Records: Security and Privacy Rule training completion logs with dates and content covered.
• Technical Safeguards Evidence: encryption configurations, access control settings, and audit log configurations.
• Breach Notification Records: documentation of all breaches and reportable incidents, notification evidence, and low probability analysis where applicable.` },
          { heading: "3. OCR Examination Focus Areas — Technology", body: `Based on OCR enforcement actions and Resolution Agreements, the highest-risk technology governance areas:

• Security Risk Analysis: The SRA is the first document OCR requests. Outdated SRA, incomplete SRA missing ePHI environments, and no SRA at all are the three most common HIPAA violations OCR cites.
• Encryption: Unencrypted portable devices containing ePHI remain the single most common source of HIPAA enforcement. OCR has levied penalties exceeding $500,000 for single unencrypted laptop thefts.
• Business Associate Agreements: Missing BAAs with active vendors accessing ePHI, BAAs that predate the 2013 Omnibus Rule, and BAAs that do not cover the vendor's actual ePHI activities.
• Workforce Training: No documented annual HIPAA training, training records that do not identify what was covered or when, and new employee training gaps.
• Contingency Planning: No tested backup and recovery procedure, disaster recovery plan that has never been tested, and no documentation of contingency plan review and update.` },
          { heading: "4. Responding to OCR Investigations", body: `OCR investigations can be triggered by a complaint or breach notification. How you respond in the first 30 days significantly affects the outcome:

• Acknowledge within the requested timeframe: OCR sets a response deadline in the investigation notice. Missing this deadline is itself a compliance failure.
• Engage HIPAA counsel: for any OCR investigation, engage legal counsel experienced in HIPAA enforcement before submitting your first response.
• Produce completely and accurately: OCR will request specific documents. Produce everything requested. Do not redact non-privileged information.
• Demonstrate good faith remediation: OCR considers whether the organization is actively remediating identified deficiencies in settlement negotiations. Begin remediation before OCR requests it.
• Corrective Action Plan negotiation: if OCR identifies violations you will negotiate a CAP. The scope of monitoring and the settlement amount are both negotiable with experienced counsel.` },
          { heading: "5. Building OCR Examination-Ready Documentation", body: `The organizations that perform best in OCR investigations maintain documentation continuously:

• Current SRA: Updated within the past 12 months or after any material change to operations, technology, or environment. Scope covers all ePHI with no gaps.
• Policy Currency: All Security Rule required policies current, signed, and reflecting actual operations. No policies that have not been reviewed since implementation.
• Evidence of Operation: Policies must be accompanied by evidence of implementation including access logs, training records, backup test results, and audit log samples.
• Incident Documentation: Complete log of all security incidents including those determined not to be reportable breaches. The determination must be documented as your defense if OCR investigates.` },
          { heading: "6. HIPAA Compliance Readiness Checklist", body: `Before an OCR investigation or audit, confirm you can produce within 24 hours:

☐ Current Security Risk Analysis updated within prior 12 months with all ePHI environments covered
☐ Risk management plan with documented remediation status for all identified risks
☐ All Security Rule required policies: current, signed, and reflecting actual operations
☐ Workforce training records: annual completion logs with dates and content for all workforce members
☐ BAA inventory: complete list of all BAs with executed current BAAs
☐ Technical safeguards evidence: encryption configs, access control reports, and audit log samples
☐ Breach and incident log for all incidents for prior 6 years with disposition documentation
☐ Contingency plan test results: backup restore test and DR test from prior 12 months` },
        ],
      },
    },
  },
};

export const GUIDES_LIST = Object.values(GUIDE_CONTENT);
