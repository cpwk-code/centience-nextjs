export interface BlogPost {
  id: number;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  content: string;
  author: string;
  date: string;
  metaTitle?: string;
  metaDescription?: string;
  externalUrl?: string;
}

export const blogPosts: BlogPost[] = [
  // ─── Mid-Year 2026 Technology Governance Gaps (July 2026) ─────────────────
  {
    id: 26,
    slug: "mid-year-2026-technology-governance-gaps-sec-finra-exams",
    category: "AI Governance",
    title: "Mid-Year 2026 Compliance Check: 6 Technology-Governance Gaps That Surface in SEC and FINRA Exams",
    excerpt: "Halfway through 2026, six technology-governance gaps are the ones most likely to surface in an SEC or FINRA examination. Here is what each one is, why examiners now expect evidence, and how RIAs and broker-dealers can close them before the request letter arrives.",
    image: "/assets/blog/centience-ai-governance-sec.png",
    author: "Orville Matias",
    date: "July 2026",
    metaTitle: "Mid-Year 2026 Compliance Check: 6 SEC & FINRA Technology-Governance Gaps | Centience",
    metaDescription: "The six technology-governance gaps most likely to surface in a 2026 SEC or FINRA exam — MFA, immutable archiving, current WSPs, shadow AI, tested backups, and continuous evidence — and how regulated firms can close them.",
    content: `
[STAT_CARDS]
June 3, 2026 | Reg S-P Deadline Passed | Smaller SEC-registered advisers are now in scope
6 Years | FINRA 17a-4 Core Retention | Records must be immutable and readily accessible
60 Days | Reg S-P Breach Notice | The clock starts at discovery of unauthorized access
5 Domains | What Exams Now Probe | Infrastructure, cybersecurity, data, AI, and supervision
[/STAT_CARDS]

We are halfway through 2026, and the pattern in this year's SEC and FINRA examinations is consistent: regulators are no longer satisfied with policies on paper. They want evidence that technology controls were active continuously — not just on the day of the review.

That shift matters because most firms manage compliance as an annual event. They assemble documentation before an exam, pass, and move on. But a control that lapses between reviews — MFA quietly disabled for a departing executive, an archiving connector that silently stopped capturing a messaging channel — leaves a gap that a point-in-time assessment will never catch, and that an examiner increasingly will.

Below are the six technology-governance gaps most likely to surface in a 2026 examination, mapped to the domains examiners now probe. If you cannot immediately answer "yes, and here is the evidence" for each, it is a gap worth closing before the request letter arrives.

## 1. MFA That Is Not Enforced for Everyone

Multi-factor authentication is the control examiners ask about first, because it maps directly to the amended [Reg S-P safeguards](/insights/reg-sp-june-3-2026-deadline-smaller-ria-compliance) and the GLBA Safeguards Rule. The common failure is not the absence of MFA — most firms have it. It is the exceptions: a service account, a shared mailbox, an executive who found it inconvenient, a vendor with standing access.

[CALLOUT:rule]
Reg S-P (as amended) requires firms to protect customer information with controls appropriate to the sensitivity of the data. If MFA is enforced for "most" users but not all, you cannot demonstrate that access to customer information was continuously controlled — and that is precisely the gap examiners document.
[/CALLOUT]

The fix is not a policy statement. It is a continuously monitored control that flags the moment an account falls out of MFA enforcement.

## 2. Business Communications That Are Not Archived Immutably

FINRA Rule 4511 and SEC Rule 17a-4 require firms to preserve business communications in a non-rewritable, non-erasable (WORM) format for the required retention period. Email is usually covered. What trips firms up in 2026 is everything else: Teams and Slack messages, collaboration tools, text messages, and the output of AI assistants that now sit inside those channels.

If a communication about firm business happens on a channel that can be edited or deleted after the fact, it does not satisfy 17a-4 — even if nothing was ever altered. Off-channel communications remain one of the most heavily penalized records failures in the industry.

## 3. Written Supervisory Procedures That Are Stale — or Untested

FINRA Rule 3110 requires written supervisory procedures (WSPs), and Rule 3120 requires annual testing of those supervisory controls. Two gaps recur: WSPs that have not been reviewed in more than twelve months, and firms that have never documented a 3120 test.

[CALLOUT:action]
Your WSPs should reflect the technology your firm actually uses today — including any AI tools. A WSP that does not mention how the firm governs AI is already behind the examiner's questions.
[/CALLOUT]

## 4. Shadow AI: The Tools You Have Not Inventoried

This is the fastest-growing exam topic, and the one firms are least prepared for. Staff are using AI tools — Copilot, ChatGPT, meeting-note assistants, research tools — often without the compliance team's knowledge. The [SEC's AI governance expectations](/insights/sec-ai-governance-requirements-investment-advisers-2026) and the NIST AI Risk Management Framework both start from the same requirement: you must know what AI is in use before you can govern it.

When an examiner asks for your inventory of AI tools that touch client data, "we do not have one" is not an acceptable answer. Neither is a list you assembled the week before. The expectation is a maintained inventory with a risk assessment and an approval decision for each tool.

## 5. Backups That Have Never Been Tested

FINRA Rule 4370 requires a business continuity plan, and the technical foundation of any BCP is a backup that actually restores. Many firms have backups running; far fewer have documented a successful recovery test. An untested backup is an assumption, not a control — and a ransomware event is the wrong time to discover it does not restore cleanly.

## 6. The Meta-Gap: No Continuous Evidence

The other five gaps share a root cause. Firms treat compliance as a document to produce rather than a state to maintain. When the exam request arrives, they scramble to assemble evidence for a point in time, with no way to show the control held over the preceding months.

[CALLOUT:key]
The question examiners are really asking is: "Can you prove this control was active continuously?" A firm that maintains timestamped evidence answers with a download. A firm that does not answers with a scramble — and the scramble itself signals a systemic gap.
[/CALLOUT]

This is the difference between a checklist and a governance program. Continuous [technology governance](/governance) treats infrastructure, cybersecurity, data, AI, and supervision as one accountable program with evidence assembled as controls run — so exam readiness is a standing condition, not a quarterly fire drill.

## How to See Where Your Firm Stands

You do not need to guess which of these six gaps applies to you. The Centience Governance Score is a free, five-minute self-assessment that scores your firm 0–100 across all five domains, benchmarks you against peer firms, and shows you exactly which gaps to close first — mapped to the SEC and FINRA rules each one touches.

[CTA_BUTTON:Get Your Free Governance Score|/assessments/governance-score]

[RELATED_SERVICE:Technology Governance|Managed infrastructure, cybersecurity, and AI governance delivered as one accountable, continuously evidenced program.|/governance]

For a deeper look at the records side of these obligations, see our guide to [data governance for financial services firms](/insights/data-governance-financial-services-finra-17a-4-sec-records-2026), or explore how Centience supports [financial services firms](/industries/financial-services) specifically.

[FAQ_ACCORDION]
What are examiners focused on in 2026? | Continuous evidence. The consistent theme in SEC and FINRA exams this year is a demand for proof that technology controls — MFA, archiving, retention, AI oversight — were active continuously between reviews, not just documented at a point in time.
Does Reg S-P apply to smaller RIAs now? | Yes. The compliance deadline for smaller SEC-registered investment advisers passed on June 3, 2026, so smaller firms are now expected to demonstrate the amended safeguards, incident response, and breach-notification requirements.
What is "shadow AI" and why do examiners care? | Shadow AI refers to AI tools employees use without the compliance team's knowledge or approval. Examiners care because ungoverned AI can expose client data and create records that are never captured. The expectation is a maintained, risk-assessed inventory of every AI tool that touches firm or client data.
How do I know which gaps apply to my firm? | Take the free Centience Governance Score. It scores your firm 0–100 across cybersecurity, data and records, supervision, infrastructure, and AI governance, benchmarks you against peers, and prioritizes the specific gaps to close before your next exam.
[/FAQ_ACCORDION]
`,
  },
  // ─── Reg S-P June 3 Deadline Post ─────────────────────────────────────────
  {
    id: 18,
    slug: "reg-sp-june-3-2026-deadline-smaller-ria-compliance",
    category: "AI Governance",
    title: "Reg S-P: The June 3, 2026 Deadline Has Passed — What Smaller RIAs Must Show Examiners Now",
    excerpt: "The June 3, 2026 Reg S-P compliance deadline for smaller SEC-registered investment advisers has passed. Here is exactly what the rule requires, where firms are most commonly falling short, and what examiners now expect to see documented.",
    image: "/assets/blog/centience-reg-sp-june-2026-deadline.png",
    author: "Orville Matias",
    date: "July 2026",
    metaTitle: "Reg S-P Compliance for Smaller RIAs: Post-Deadline Checklist | Centience",
    metaDescription: "The June 3, 2026 SEC Reg S-P deadline for smaller RIAs under $1.5B AUM has passed. Learn exactly what incident response, vendor oversight, and customer notification requirements examiners now expect to be in place.",
    content: `
[STAT_CARDS]
June 3 | Compliance Deadline | Smaller RIAs under $1.5B AUM
30 Days | Customer Notification | After discovering a qualifying breach
72 Hours | Vendor Notification | Service providers must notify the RIA
5 Years | Records Retention | Policies, incidents, and correspondence
[/STAT_CARDS]

The SEC's 2024 amendments to Regulation S-P created a two-tier compliance schedule. Larger registered investment advisers — those with $1.5 billion or more in regulatory assets under management — were required to comply by December 3, 2025. Smaller RIAs had until June 3, 2026.

That deadline has now passed.

If your firm has fewer than $1.5 billion in AUM and has not yet built a compliant Reg S-P program, you are already past the deadline — and this article covers exactly what the rule requires, where firms are most commonly falling short, and what examiners now expect to see documented.

[CALLOUT:Important]
The SEC Division of Examinations listed Reg S-P compliance as a 2026 examination priority. Examiners who reviewed larger firms under the December 2025 deadline are now conducting smaller firm exams with documented expectations. As of June 3, "do you have a Reg S-P incident response program?" has stopped being a question and started being a finding.
[/CALLOUT]

## What Changed: The 2024 Reg S-P Amendments

Regulation S-P has governed the treatment of nonpublic personal information at financial institutions since 2000. The SEC amended it for the first time in over 20 years on May 16, 2024. The amendments are not incremental — they fundamentally expand what the rule covers, what firms must build, and what they must do when something goes wrong.

The four core changes every smaller RIA must understand:

**1. Expanded Definition of Customer Information**

The original Regulation S-P protected the records and information of an RIA's direct customers. The amended rule replaces "customer records and information" with "customer information" — a materially broader term defined as any record containing nonpublic personal information about a customer of a financial institution that is in the RIA's possession, regardless of whether it pertains to the RIA's own clients or the clients of another financial institution.

In practical terms: if your firm receives nonpublic personal information about limited partners in a private fund, individuals referred through a placement agent, or clients of another firm in any capacity — that information is now covered by Reg S-P. This expansion brings many RIAs that advise solely private funds into the rule's scope for the first time.

**2. Mandatory Incident Response Program**

The amendments require RIAs to develop, implement, and maintain written policies and procedures for an incident response program reasonably designed to detect, respond to, and recover from unauthorized access to or use of customer information.

This is not a general cybersecurity policy. The incident response program must specifically address:
- Detection of unauthorized access to customer information
- Containment procedures
- Investigation and assessment protocols
- Recovery procedures
- Escalation and notification chains

A general IT security policy does not satisfy this requirement. The program must be written, specific, and tested.

**3. 30-Day Customer Notification Requirement**

When a breach occurs involving customer information that is reasonably likely to result in substantial harm or inconvenience to affected individuals, the RIA must notify affected or potentially affected clients as soon as practicable — and no later than 30 days after discovering the breach.

The 30-day clock starts at discovery, not at confirmation. Firms cannot extend the notification window by delaying their internal investigation.

The notification must include specific information about the incident and the steps clients should take to protect themselves. Firms must have pre-drafted notification templates in place before an incident occurs — writing them during an active incident is not a viable approach.

**4. Service Provider Oversight and 72-Hour Notification**

This is the amendment that creates the most operational complexity for smaller firms. RIAs must establish, maintain, and enforce written policies and procedures reasonably designed to ensure that service providers protect customer information in their possession and notify the RIA of breaches involving that information.

Specifically: service providers must agree in writing to notify the RIA as soon as practicable — but no later than 72 hours after discovering a breach involving customer information.

This requirement means RIAs must:
- Audit every service provider that has access to customer information
- Negotiate and execute contract amendments adding the 72-hour notification obligation
- Document those negotiations and the results

For smaller firms with multiple technology vendors, CRM platforms, cloud storage providers, custodians, and third-party administrators — this is a significant vendor management undertaking.

[CALLOUT:Warning]
Service providers do not automatically agree to 72-hour notification SLAs. Major technology vendors, custodians, and SaaS platforms have their own breach notification timelines built into standard contract terms — often 30, 60, or 90 days. Renegotiating these provisions takes time. Firms that have not started this process are already exposed and should prioritize it immediately.
[/CALLOUT]

## Who Qualifies as a Smaller Entity

The June 3, 2026 deadline applies to SEC-registered investment advisers with fewer than $1.5 billion in regulatory assets under management. This captures the majority of boutique RIAs, independent advisory firms, family offices, and mid-market asset managers.

The rule also now applies to RIAs that advise solely private funds — a category that was largely outside Reg S-P's scope under the prior definition of "customer records and information." If your firm manages a private fund and receives nonpublic personal information about fund investors from any source, the amended rule applies.

Exempt reporting advisers and unregistered investment advisers are generally not covered by Reg S-P — but may be subject to similar FTC privacy rules. If there is any uncertainty about whether your firm qualifies, confirm with counsel before June 3.

## What Must Be in Place by June 3

[TIMELINE]
Data Mapping | Identify every system, vendor, and process that touches customer information. You cannot build an incident response program around data you have not mapped.
Written Incident Response Program | Document detection, containment, investigation, recovery, escalation, and notification procedures specific to customer information breaches.
Customer Notification Templates | Draft pre-approved notification letters for affected clients. The 30-day clock starts at discovery — you cannot draft during an active incident.
Vendor Audit and Contract Review | Identify every service provider with access to customer information. Initiate contract amendments requiring 72-hour breach notification in writing.
Tabletop Exercise | Run a simulated breach scenario. Document the results. SEC examiners expect evidence of testing, not just a written plan.
Records Documentation | Ensure your recordkeeping system captures policies, incident responses, notification decisions, vendor oversight activities, and correspondence for five-year retention.
[/TIMELINE]

## The Examination Reality After June 3

The SEC Division of Examinations listed Reg S-P as an examination priority for fiscal year 2026. Examiners who conducted reviews of larger firms under the December 2025 deadline have established their baseline expectations. From June 3 onward, smaller firm examinations will include Reg S-P documentation requests as a standard component.

What examiners will ask for:

- Your written incident response program — dated, version-controlled, and current
- Evidence of a data mapping exercise identifying systems that contain customer information
- Vendor oversight policies and contract documentation showing 72-hour notification provisions
- Notification templates and procedures
- Evidence of testing — tabletop exercise notes, simulation results, or equivalent documentation
- Records retention policies and evidence of implementation

Firms that cannot produce this documentation on day one of an examination will face deficiency letters. Firms that experienced a breach and cannot demonstrate compliant response protocols face potential enforcement referrals.

## The Infrastructure Gap

Most smaller RIAs engage their compliance consultant or outside counsel to write the policies. The policies get written. The examination request arrives. And then the firm discovers the gap: the policies describe what should happen, but there is no evidence that the technical infrastructure to execute them is in place.

A Reg S-P incident response program requires:
- Endpoint monitoring capable of detecting unauthorized access to systems containing customer information
- Log retention sufficient to reconstruct what happened during an incident
- Access controls that limit who can reach customer information and generate an audit trail
- Vendor integrations that can receive 72-hour notifications and route them to the appropriate internal owner

You cannot demonstrate a compliant incident response without the underlying technical controls. The policy is the documentation. The infrastructure is the compliance.

Centience builds Reg S-P compliance programs on managed infrastructure. Your endpoint controls, log management, and access controls are active and documented before the examination request arrives. When the examiner asks for evidence, it exists in system logs — not just policy documents.

[CTA_BOX]
## The Reg S-P deadline has passed. Is your program examination-ready?

Centience delivers a Reg S-P readiness assessment and program build for smaller RIAs — documentation, technical controls, and vendor review assembled and ready before the examiner asks.

[CTA_BUTTON:Book Your Reg S-P Assessment|/assessments/governance-score]
[/CTA_BOX]
    `,
  },


  {
    id: 11,
    slug: "ai-governance-framework-hipaa-regulated-organizations",
    category: "AI Governance",
    title: "AI Governance Under HIPAA: What Regulated Healthcare Organizations Must Do Now",
    excerpt: "HIPAA's Privacy and Security Rules apply to AI tools handling protected health information. Here is what a defensible AI governance framework looks like for healthcare organizations operating under federal oversight.",
    image: "/assets/blog/centience-ai-governance-hipaa.png",
    author: "Orville Matias",
    date: "March 2026",
    metaTitle: "AI Governance Framework for HIPAA Compliance | Centience",
    metaDescription: "Learn how to build an AI governance framework that satisfies HIPAA Privacy and Security Rule requirements. Practical steps for healthcare organizations deploying AI tools.",
    content: `
AI tools are now embedded in clinical documentation, revenue cycle management, patient scheduling, and internal communications at healthcare organizations across the country. Most were deployed without a governance framework. That is the problem.

[STAT_CARDS]
$10,000 | Minimum HIPAA Penalty | Per violation, willful neglect
$50,000 | Maximum Per Violation | Per violation category per year
$1.9M | Average Healthcare Breach Cost | 2024 IBM Cost of Data Breach Report
5 Days | Assessment Turnaround | Centience AI Governance Assessment
[/STAT_CARDS]

HIPAA's Privacy Rule and Security Rule do not carve out an exception for artificial intelligence. If a tool touches, processes, transmits, or stores protected health information (PHI), it falls under HIPAA's obligations — regardless of whether the vendor calls it "AI," "automation," or "intelligent workflow."

Here is what a defensible AI governance program looks like for a HIPAA-regulated organization.

## Why AI Creates New HIPAA Exposure

Most healthcare organizations have existing policies for data access, breach notification, and vendor management. Those policies were written before generative AI existed. They do not account for the way AI tools ingest context, retain conversation history, train on user inputs by default, or expose PHI through prompt injection.

The specific exposures include:

**PHI ingestion through AI prompts.** Staff using tools like ChatGPT, Microsoft Copilot, or Google Gemini may inadvertently include patient names, dates of service, diagnosis codes, or account numbers in prompts. Without technical controls preventing this, every prompt becomes a potential breach event.

**Business Associate Agreements.** Under HIPAA, any vendor that creates, receives, maintains, or transmits PHI on your behalf is a Business Associate and requires a signed BAA. Many AI vendors — including major platforms — either do not offer HIPAA-compliant configurations or have BAA terms that shift liability in ways most compliance officers have not reviewed.

**Audit trail gaps.** The HIPAA Security Rule requires covered entities to implement audit controls — hardware, software, and procedural mechanisms that record and examine activity in systems containing PHI. Most AI tools generate no audit log accessible to the covered entity.

**Proposed 2025 HIPAA Security Rule Update.** HHS OCR has a proposed Security Rule modernization on the May 2026 agenda that includes explicit requirements for technology asset inventories and access controls. Organizations without an AI inventory today will be non-compliant under the proposed rule before it finalizes.

## The Four Pillars of an AI Governance Framework Under HIPAA

[TIMELINE]
AI Inventory | Discover every AI tool touching PHI — licensed, embedded, or employee-accessed. Classify by risk level.
BAA Audit | Verify executed Business Associate Agreements cover every AI vendor processing PHI. Remediate gaps immediately.
Technical Controls | Deploy DLP, endpoint policies, and approved tool lists enforced at the network level — not just in documentation.
Workforce Training | Train all workforce members on AI acceptable use and PHI handling. Document acknowledgment.
[/TIMELINE]

### 1. AI Inventory

You cannot govern what you cannot see. The first step is a complete discovery of every AI tool in use across the organization — including tools deployed by individual departments, embedded in third-party software, or accessed via personal devices.

[CALLOUT:Important]
OCR guidance since 2023 explicitly includes AI among technologies that must be addressed in the required Security Rule risk analysis. An AI inventory is not optional — it is the foundation of a defensible risk analysis.
[/CALLOUT]

Each tool in the inventory should be evaluated for:
- Whether it can access, process, or store PHI
- Whether a BAA exists with the vendor
- Whether the tool operates in a HIPAA-compliant configuration
- Who authorized deployment and when

Organizations that skip this step will discover exposure during an HHS OCR investigation, not before it.

### 2. Business Associate Agreement Audit

Every AI vendor that touches PHI requires a valid BAA. This is non-negotiable under 45 CFR §164.308(b).

A BAA audit for AI should cover:
- Which AI platforms currently have executed BAAs
- Whether those BAAs cover the specific AI features in use (enterprise AI agreements often have narrower scope than the tools employees actually use)
- Which platforms have no BAA at all and must be restricted immediately
- Renewal dates and termination clauses

Microsoft 365 Copilot, Google Workspace with Gemini, and several major EHR vendors now offer HIPAA-aligned AI configurations — but only under specific licensing tiers and only when BAAs are executed correctly.

### 3. Technical Controls

Governance without enforcement is just documentation. Technical controls operationalize your policies:

- **Endpoint policies** that block PHI from being submitted to non-approved AI platforms
- **Data loss prevention (DLP) rules** configured to detect and block PHI patterns (SSNs, MRNs, dates of service, diagnosis codes) from reaching external AI endpoints
- **Approved AI tool list** enforced at the network and device level, not just in a policy document
- **Session logging** for approved AI tools that creates the audit trail required under the Security Rule

### 4. Workforce Training and Policy

HIPAA requires covered entities to train all workforce members on policies and procedures. That obligation extends to AI usage.

Workforce training should address:
- What constitutes PHI and why it must not enter unapproved AI tools
- Which AI tools are approved, under what conditions, and with what restrictions
- How to report suspected PHI incidents involving AI tools
- Consequences of policy violation

A written AI Acceptable Use Policy specific to PHI should be documented, dated, and acknowledged by all workforce members. This document is one of the first things an OCR investigator will request.

## What OCR Looks for in an AI Governance Examination

HHS OCR investigations have increasingly focused on whether covered entities have conducted thorough risk analyses that account for new technologies. The 2013 HIPAA Omnibus Rule expanded this obligation, and OCR guidance since 2023 has explicitly included AI among technologies that must be addressed in the required Security Rule risk analysis.

The documentation OCR expects includes:
- A current, dated risk analysis that includes AI tools
- Policies and procedures addressing AI use and PHI
- Evidence of workforce training
- BAA inventory including AI vendors
- Remediation plans for identified gaps

Organizations without this documentation face penalties under 45 CFR §164.308(a)(1). Willful neglect violations carry a minimum civil penalty of $10,000 per violation with a maximum of $50,000 — per violation category, per year.

## The Centience Approach

Most governance programs fail not because policies are wrong, but because policies cannot be enforced. If you do not control the infrastructure, you cannot enforce the controls.

Centience builds AI governance programs on managed infrastructure. That means DLP rules are active on your endpoints, not just written in a policy. AI tool access is governed at the network level. Audit logs are assembled in advance, not reconstructed after an incident.

The starting point is an AI Governance Assessment that identifies every tool, maps PHI exposure, and delivers a prioritized roadmap before your next OCR examination.

[CTA_BOX]
## Is your organization ready for a HIPAA AI governance examination?

Schedule your AI Governance Assessment. Instant results — your score in minutes.

[CTA_BUTTON:Book Your AI Governance Assessment|/assessments/governance-score]
[/CTA_BOX]
    `,
  },
  {
    id: 12,
    slug: "ai-governance-framework-sec-registered-investment-advisers",
    category: "AI Governance",
    title: "AI Governance for SEC-Registered Investment Advisers: What the Examination Program Is Actually Looking For",
    excerpt: "The SEC's Division of Examinations has made AI governance a priority examination area. Here is a practitioner-level breakdown of what examiners look for and how registered investment advisers should structure their governance programs.",
    image: "/assets/blog/centience-ai-governance-sec.png",
    author: "Orville Matias",
    date: "April 2026",
    metaTitle: "AI Governance for SEC Registered Investment Advisers | Centience",
    metaDescription: "SEC examiners are reviewing AI governance at registered investment advisers. Learn what documentation, controls, and policies satisfy examination requirements.",
    content: `
The SEC's Division of Examinations included AI in its 2024 and 2025 examination priorities. The 2026 examination cycle continues that focus. For registered investment advisers (RIAs), this is not an abstract regulatory development. Examiners are actively reviewing AI governance programs — or the absence of them — during routine inspections.

[STAT_CARDS]
$225K | Delphia Penalty | SEC AI washing, March 2024
$175K | Global Predictions | SEC AI washing, March 2024
$1.6M | Rockwell Capital | Disgorgement + penalties
$8.2B | Total SEC Fines FY2024 | Record enforcement year
[/STAT_CARDS]

This article covers what the examination program is looking for, where RIAs are most exposed, and what a defensible AI governance structure looks like under existing securities law.

## The Regulatory Framework Is Already in Place

The SEC has not issued AI-specific regulations. It does not need to. The existing regulatory framework applies fully to AI:

**Investment Advisers Act of 1940.** Section 206 prohibits fraudulent or deceptive practices. The SEC's AI washing enforcement actions (Delphia, Global Predictions, Rockwell Capital) were brought under Section 206 and the Marketing Rule — not new AI regulations.

**Regulation S-P.** Governs the safeguarding of customer financial information. If AI tools process client data, Reg S-P applies. Examiners will ask whether client information is being submitted to AI platforms without appropriate safeguards.

**Books and Records Rules (Rule 204-2).** If AI tools generate or assist in creating client communications, investment recommendations, or research, those outputs may be required books and records. Most RIAs have not updated their recordkeeping policies to address AI-generated content.

**Marketing Rule (Rule 206(4)-1).** All AI-generated marketing content is subject to the same substantiation, fair and balanced presentation, and anti-testimonial requirements as human-generated content. This is the specific rule under which AI washing penalties were assessed.

## What SEC Examiners Are Reviewing

Based on SEC examination priority letters and enforcement actions through early 2026, examination staff are specifically reviewing:

**1. AI Representations vs. Reality**

The first AI washing cases established that examiners will verify whether firms actually use AI the way they claim. If your ADV, marketing materials, website, or client presentations describe AI-driven portfolio management, automated rebalancing, or AI-enhanced research — examiners will ask for technical documentation that the AI does what you say it does.

Firms that cannot substantiate their AI claims face Marketing Rule violations. The Delphia penalty was $225,000; Global Predictions paid $175,000. These were settled without admission of wrongdoing. Litigated cases carry substantially higher exposure.

**2. Written Supervisory Procedures Covering AI**

FINRA Rule 3110 (for broker-dealers) and the general supervisory framework for RIAs under the Advisers Act require firms to supervise all business activities of supervised persons. This obligation does not stop at AI-generated content or AI-assisted decision-making.

Examiners will ask whether your WSPs address:
- Who is authorized to use AI tools in client-facing work
- What review process exists for AI-generated communications before they are sent
- How AI-assisted investment recommendations are documented and supervised
- What disclosure obligations exist when AI influences advice given to clients

**3. AI Vendor Due Diligence**

If your firm uses third-party AI tools — including tools embedded in your portfolio management software, CRM, or communications platforms — you are responsible for governance of those tools. Examiners will ask what vendor due diligence you performed, whether you understand how client data is handled, and whether your contractual arrangements adequately protect client information.

**4. AI Inventory**

A recurring theme in SEC examination requests is a demand for an inventory of all technology systems in use. AI tools — whether licensed, subscribed, or embedded — must be in that inventory. Firms that cannot produce one face examination criticism even before substantive compliance issues are assessed.

## Where RIAs Are Most Exposed Right Now

**Shadow AI.** Employees using personal AI accounts (ChatGPT Plus, Claude Pro, Google One AI) to perform client-related work. These tools are outside the firm's supervisory framework, generate no recordable audit trail, and frequently involve submission of client information to third-party platforms without appropriate data handling agreements.

[CALLOUT:Warning]
Shadow AI is the highest-frequency undetected compliance gap in registered investment adviser firms today. Without infrastructure-level controls blocking unauthorized AI access, your WSPs are unenforceable against the tools employees use every day.
[/CALLOUT]

**Unapproved AI in client communications.** Advisers using AI to draft emails, letters, or reports to clients without disclosure or supervisory review. If those communications contain investment recommendations or performance information, they are subject to the Marketing Rule.

**AI in marketing without substantiation files.** Websites and marketing materials referencing AI capabilities without a contemporaneous record of the factual basis for those representations. This is the exact pattern that triggered the 2024 AI washing enforcement actions.

**Missing or outdated CCO policies.** Chief Compliance Officers who have not updated their compliance programs to address AI since 2023 have a documented gap. Examiners who identify it will cite it as a failure of the firm's compliance program under the Compliance Rule (Rule 206(4)-7).

## What a Defensible AI Governance Program Looks Like

A defensible AI governance program for an SEC-registered investment adviser has five components:

[TIMELINE]
AI Inventory | Document every AI tool in use — by employees and embedded vendors. Review quarterly.
AI Policy | Written policies: authorized tools, prohibited uses, client data handling, disclosure requirements, supervisory review.
Updated WSPs | Written Supervisory Procedures explicitly addressing AI tool usage and AI-assisted processes.
Marketing Review | Documented pre-approval workflow for AI-generated content with substantiation files for all capability claims.
Annual Review Documentation | Evidence AI governance is included in the Rule 206(4)-7 annual compliance program review.
[/TIMELINE] A documented, current list of every AI tool in use across the firm — by employees and by embedded vendors. Maintained as a living document, reviewed at least quarterly.

**AI Policy.** Written policies addressing authorized AI tools, prohibited uses, client data handling, disclosure requirements, and supervisory review of AI-generated content. Incorporated into the firm's overall compliance policies.

**Updated WSPs.** Written Supervisory Procedures that explicitly address AI tool usage, AI-generated communications review, and AI-assisted investment processes.

**Marketing Review Process.** A documented review workflow for any AI-generated marketing content, with substantiation files maintained for any AI-related capability claims.

**Annual Review Documentation.** Evidence that AI governance is included in the firm's annual compliance program review required under Rule 206(4)-7.

## Why Infrastructure Control Matters

Most compliance consultants can write the policies. What they cannot do is enforce them. A WSP that says employees must not use unapproved AI tools is unenforceable without technical controls that block access to unapproved platforms.

Centience builds AI governance programs on managed infrastructure. Your endpoints, network, and cloud environment are under our management — which means DLP rules blocking unauthorized AI access are technically active, not aspirational. When an examiner asks whether controls are in place, the answer is documented in system logs, not just policy documents.

[CTA_BOX]
## Is your RIA ready for an AI governance examination?

Schedule your AI Governance Assessment. We identify gaps before the examiner does.

[CTA_BUTTON:Book Your AI Governance Assessment|/assessments/governance-score]
[/CTA_BOX]
    `,
  },
  {
    id: 13,
    slug: "ai-governance-finra-member-firms-2026",
    category: "AI Governance",
    title: "FINRA's 2026 Regulatory Oversight Report and AI Governance: What Broker-Dealers Must Address",
    excerpt: "FINRA's 2026 Annual Regulatory Oversight Report added a dedicated Generative AI section for the first time. Here is what broker-dealers need to build into their governance programs in response.",
    image: "/assets/blog/centience-ai-governance-finra.png",
    author: "Orville Matias",
    date: "April 2026",
    metaTitle: "FINRA 2026 AI Governance Requirements for Broker-Dealers | Centience",
    metaDescription: "FINRA's 2026 Annual Regulatory Oversight Report includes new GenAI governance requirements. Learn what broker-dealers must implement to satisfy examination expectations.",
    content: `
FINRA's 2026 Annual Regulatory Oversight Report, published in December 2025, added a dedicated Generative AI section for the first time in the report's history. This is a significant signal. When FINRA creates a standalone section on a topic in the AROR, it becomes an examination priority across the member firm population.

[STAT_CARDS]
2026 | FINRA AROR | First dedicated GenAI section
Rule 3110 | Supervision | Applies to all AI activity
Rule 2210 | Communications | AI content same standard as human
Rule 4511 | Books & Records | AI outputs may be required records
[/STAT_CARDS]

This article breaks down what the 2026 AROR requires, what it means operationally for broker-dealers, and where the specific compliance gaps are most likely to appear during examinations.

## What FINRA's 2026 AROR Actually Says

The 2026 report specifies several expectations for broker-dealers deploying or considering GenAI tools:

**Governance and model risk frameworks.** FINRA expects firms to establish supervision, governance, or model risk management frameworks with clear policies and procedures for developing, implementing, using, and monitoring GenAI. Documentation must be maintained throughout the AI lifecycle — from evaluation to deployment to retirement.

**Controls for hallucinations, bias, and cybersecurity risks.** The report explicitly calls out AI hallucinations and bias as compliance risks that require active controls. Firms deploying AI in client-facing applications, research, or supervision must have mechanisms to detect and address AI outputs that are inaccurate or biased.

**Ongoing human oversight.** FINRA is unambiguous that human monitoring of AI model outputs is essential. This is not a transitional requirement pending better AI technology. It is a structural expectation — AI-assisted decisions and communications require human review before they affect customers.

**Agentic AI oversight.** The 2026 report specifically addresses autonomous AI agents as a novel oversight challenge. FINRA notes that agentic AI may require tracking of system actions and restrictions on system access. This is forward-looking language, but firms piloting or deploying AI agents that take autonomous actions on behalf of the firm or its customers need written frameworks now.

**Accurate AI-related disclosures.** FINRA reiterates the requirement — consistent with the SEC's AI washing enforcement actions — that descriptions of GenAI capabilities in customer communications and marketing materials must be accurate, balanced, and not overstated. The report specifically references the "AI washing charges brought by other regulators" as context.

## The Operational Implications for Broker-Dealers

FINRA's technology-neutral regulatory approach means existing rules apply to AI without modification. That has specific operational implications:

**FINRA Rule 3110 (Supervision).** Every use of AI in a business activity of the firm is subject to supervisory oversight. If a registered representative uses an AI tool to assist in drafting customer communications, that output must be reviewed under the same supervisory framework as communications written entirely by the representative. There is no AI exception to Rule 3110.

**FINRA Rule 2210 (Communications with the Public).** AI-generated marketing content, social media posts, newsletters, or customer-facing materials are subject to Rule 2210's requirements for fair, balanced, and not misleading content. AI tools that generate marketing content without a review process create Rule 2210 exposure.

**Books and Records (Rules 4511-4514).** If AI tools generate content that constitutes a business record — including customer communications, research, trade justifications, or compliance documentation — those records are subject to retention requirements. Most firms have not updated their recordkeeping policies to explicitly address AI-generated content.

**Vendor Management.** FINRA's rules apply whether firms use AI directly or through third-party vendors. If your order management system, CRM, or compliance surveillance platform has embedded AI features, your firm is responsible for governance of those features. Vendor agreements should address data handling, model transparency, audit trail availability, and the firm's ability to supervise AI-generated outputs.

## Where Examination Gaps Are Most Likely

Based on FINRA's stated priorities and the patterns emerging from early AI-related examinations, broker-dealers are most at risk in the following areas:

**No AI inventory.** FINRA examiners will ask for a list of AI tools in use across the firm. Firms that cannot produce one — including AI embedded in third-party tools — will face examination criticism before any substantive compliance question is reached.

**WSPs that predate GenAI.** If your Written Supervisory Procedures were last updated before 2024 and do not address GenAI, you have a documented compliance program gap. FINRA expects WSPs to be living documents updated as the firm's business and risk profile changes. AI adoption at the firm level triggers that update obligation.

[CALLOUT:Rule]
FINRA Rule 3110 is technology-neutral. There is no AI exception. Every AI tool used in the business activities of the firm — by any registered person — requires supervision under the same standards as any other business activity.
[/CALLOUT]

**Undisclosed AI use in customer communications.** Registered representatives using personal AI accounts to draft customer emails or proposals — with no supervisory review and no disclosure — creates simultaneous Rule 3110, Rule 2210, and potentially Rule 4511 exposure.

**AI in advertising with no substantiation.** Firms that reference AI capabilities in their advertising or customer materials without contemporaneous substantiation files are exposed to the same Marketing Rule violations that resulted in SEC AI washing enforcement actions against investment advisers.

**No training documentation.** FINRA expects firms to train personnel on the firm's AI governance policies. Firms without documented training programs will face criticism during examination for inadequate compliance culture around AI.

## Building a FINRA-Compliant AI Governance Program

A FINRA-compliant AI governance program for a broker-dealer has the following components:

An **AI inventory** documenting every tool in use, including embedded AI in third-party platforms, with classification by risk level and customer-facing designation.

**Updated WSPs** that address GenAI usage, supervision of AI-generated communications, review processes for AI-assisted customer interactions, and escalation procedures for AI-related incidents.

**Technical controls** enforcing the WSPs — including DLP rules blocking submission of customer data to unauthorized AI platforms and logging of AI tool usage by employees.

**Annual compliance review** documentation showing that AI governance was explicitly included in the firm's Rule 3110 supervisory review.

**Training records** showing all registered persons received training on the firm's AI usage policies and the applicable regulatory obligations.

Most firms can write the policies. The harder problem is enforcement — and enforcement requires infrastructure control.

[CTA_BOX]
## Does your broker-dealer have a FINRA-compliant AI governance program?

Schedule your AI Governance Assessment. We identify gaps before FINRA does.

[CTA_BUTTON:Book Your AI Governance Assessment|/assessments/governance-score]
[/CTA_BOX]
    `,
  },
  {
    id: 14,
    slug: "cybersecurity-governance-hipaa-healthcare-organizations",
    category: "Cybersecurity",
    title: "Cybersecurity Governance for HIPAA-Regulated Organizations: Beyond the Checklist",
    excerpt: "HIPAA's Security Rule requires more than annual risk assessments and a policies binder. Here is what a technically enforced cybersecurity governance program looks like for covered entities and business associates.",
    image: "/assets/blog/centience-cybersecurity-hipaa.png",
    author: "Orville Matias",
    date: "April 2026",
    metaTitle: "Cybersecurity Governance for HIPAA Compliance | Centience",
    metaDescription: "HIPAA Security Rule compliance requires technically enforced cybersecurity controls, not just documentation. Learn what a defensible cybersecurity governance program looks like for covered entities.",
    content: `
Healthcare organizations are among the most targeted by ransomware groups and data extortion actors in the United States. The combination of high-value PHI, aging infrastructure, and compliance programs that prioritize documentation over technical enforcement creates an attractive target profile.

[STAT_CARDS]
#1 | Most Targeted Sector | Healthcare leads all industries for ransomware
$10.9M | Avg. Healthcare Breach | 2024 IBM Cost of Data Breach Report
2003 | HIPAA Security Rule | Technical controls required since inception
2026 | Proposed Update | HHS OCR Security Rule modernization on agenda
[/STAT_CARDS]

The HIPAA Security Rule has required healthcare organizations to implement cybersecurity controls since 2003. The proposed 2025 Security Rule update — on the HHS OCR enforcement agenda for 2026 — would make those requirements significantly more prescriptive. What has not changed is the core problem: most healthcare organizations treat HIPAA cybersecurity compliance as a documentation exercise rather than a technical security program.

This article addresses what HIPAA's Security Rule actually requires from a technical controls standpoint, where the most common gaps occur, and what a defensible cybersecurity governance program looks like.

## What the HIPAA Security Rule Actually Requires

The Security Rule establishes three categories of safeguards for electronic PHI (ePHI): administrative, physical, and technical. Most compliance programs focus heavily on administrative safeguards (policies, training, risk analysis) and neglect the technical safeguard requirements that require actual implementation and ongoing management.

**Technical Safeguards (45 CFR §164.312)**

The technical safeguard requirements include:

*Access Controls.* Unique user identification for all users who access ePHI. Emergency access procedures. Automatic logoff. Encryption and decryption of ePHI. These are not aspirational standards — they are required specifications with documented implementation requirements.

*Audit Controls.* Hardware, software, and procedural mechanisms that record and examine activity in systems containing ePHI. This requirement is not satisfied by a system that logs activity — it requires that logs are examined. Organizations with no log review process are non-compliant with this requirement regardless of what their documentation says.

[CALLOUT:Important]
Generating audit logs is not enough. HIPAA requires that logs are examined. An organization with active logging but no documented log review process is non-compliant with 45 CFR §164.312(b) — and OCR investigators know to ask for both.
[/CALLOUT]

*Integrity Controls.* Mechanisms to authenticate ePHI and ensure it has not been improperly altered or destroyed. This includes file integrity monitoring in systems containing patient records.

*Transmission Security.* Encryption of ePHI transmitted over networks. This applies to email containing PHI, API calls between systems, cloud storage synchronization, and remote access to clinical systems.

**The Proposed 2025 Security Rule Update**

HHS OCR's proposed update — which was on the May 2026 regulatory agenda — includes several changes that would significantly strengthen technical requirements:

- Mandatory technology asset inventories with explicit coverage of AI tools
- Enhanced vulnerability scanning and penetration testing requirements with defined frequency
- Mandatory multi-factor authentication for all systems containing ePHI
- Specific requirements for network segmentation
- Enhanced incident response plan requirements with defined recovery time objectives

Organizations that are already operating to these standards have minimal exposure to the proposed update. Organizations that are not will face a compliance gap when the rule finalizes.

## Where Healthcare Organizations Are Most Exposed

**Unmanaged endpoints accessing ePHI.** Clinical staff accessing patient records from personal devices, unmanaged laptops, or shared workstations with no MDM (Mobile Device Management) enrollment. Each unmanaged device is a potential breach vector and an uncontrolled access point for ePHI.

**Legacy systems without patch management.** EHR platforms, medical devices, and clinical workstations running outdated operating systems or unpatched software. Many healthcare organizations have legacy clinical systems that cannot be updated without vendor certification — and the compensating controls for those systems (network segmentation, enhanced monitoring) are frequently absent.

**Insufficient audit log review.** Organizations that generate audit logs but have no process for reviewing them regularly. Security incidents detected through log review are stopped earlier, with lower breach impact, than incidents detected by patients, external parties, or ransomware deployment.

**Weak privileged access controls.** Shared administrative credentials for clinical systems and EHR platforms. Service accounts with excessive permissions. IT staff with standing privileged access to systems containing ePHI without just-in-time access controls.

**Third-party and vendor access.** EHR vendors, billing companies, medical device manufacturers, and IT support providers with ongoing access to ePHI systems. Vendor access that is not monitored, not time-limited, and not scoped to minimum necessary access is one of the most frequent breach vectors in healthcare.

**No incident response testing.** Organizations with written incident response plans that have never been tested. An untested IR plan is discovery documentation that shows you knew what to do but did not verify you could do it.

## What Technically Enforced Cybersecurity Governance Looks Like

The gap between a documented cybersecurity program and a technically enforced cybersecurity program is the gap between what your policies say and what your systems actually do.

A technically enforced cybersecurity governance program for a HIPAA-regulated organization includes:

**Managed endpoint security.** Every device accessing ePHI — workstations, laptops, tablets, mobile devices — under active management with EDR (Endpoint Detection and Response), enforced disk encryption, automatic patching, and MDM enrollment. Controls are active, not aspirational.

**Identity and access management.** Unique credentials for every user, MFA enforced on all systems containing ePHI, privileged access managed through a PAM (Privileged Access Management) platform, quarterly access reviews. No shared credentials, no standing privilege.

**Network segmentation.** Clinical systems containing ePHI on isolated network segments with firewall rules preventing lateral movement. Medical devices on separate VLANs. Remote access through VPN with MFA — not open RDP.

**Continuous monitoring.** Security event logs from all systems containing ePHI forwarded to a SIEM (Security Information and Event Management) platform with active monitoring and alerting. Anomalous access patterns, failed authentication attempts, and unusual data transfers generate alerts reviewed by security personnel.

**Vulnerability management.** Regular authenticated vulnerability scanning of all systems containing ePHI, with defined remediation SLAs based on severity. Critical vulnerabilities remediated within 15 days. High severity within 30 days. Evidence maintained for audit.

**Incident response with tested playbooks.** A written IR plan with specific procedures for ransomware, unauthorized access to ePHI, and vendor-related incidents — tested at least annually through a tabletop exercise with documented results.

## Why Governance Without Infrastructure Control Fails

Most healthcare organizations engage compliance consultants who deliver a risk analysis, update their policies, and leave. Twelve months later, the policies exist but the technical controls were never implemented, or were implemented once and never maintained.

Governance that is not built on managed infrastructure is advisory. It tells you what to do without the operational capacity to verify it is being done.

Centience builds cybersecurity governance programs on the infrastructure we manage. That means vulnerability scans run on schedule and evidence is collected automatically. Endpoint controls are active on every device we manage. Audit logs are reviewed and anomalies are escalated. When OCR requests documentation, it has already been assembled.

[CTA_BOX]
## Is your cybersecurity governance program technically enforced or just documented?

Schedule your AI Governance Assessment. We evaluate cybersecurity controls alongside AI governance.

[CTA_BUTTON:Book Your Assessment|/assessments/governance-score]
[/CTA_BOX]
    `,
  },
  {
    id: 15,
    slug: "cybersecurity-governance-sec-regulated-firms",
    category: "Cybersecurity",
    title: "Cybersecurity Governance for SEC-Regulated Firms: What the 2023 Rules Require and Where Most Firms Fall Short",
    excerpt: "The SEC's 2023 cybersecurity rules for public companies and the Division of Examinations' ongoing focus on registered advisers and broker-dealers mean cybersecurity governance is no longer optional for SEC-regulated organizations. Here is what the rules actually require.",
    image: "/assets/blog/centience-cybersecurity-sec.png",
    author: "Orville Matias",
    date: "April 2026",
    metaTitle: "Cybersecurity Governance for SEC Regulated Firms | Centience",
    metaDescription: "SEC cybersecurity rules require registered investment advisers and broker-dealers to have technically enforced cybersecurity programs. Learn what the rules require and where firms fall short.",
    content: `
The SEC's cybersecurity regulatory activity between 2023 and 2026 has been more significant than any prior period in the agency's history. For SEC-regulated organizations — registered investment advisers, broker-dealers, and public companies — cybersecurity is now a formal regulatory compliance obligation with specific documentation, disclosure, and incident response requirements.

[STAT_CARDS]
4 Days | 8-K Disclosure Deadline | Material incident after materiality determination
30 Days | Reg S-P Notification | Customer notice after covered incident
$8.2B | SEC Fines FY2024 | Record enforcement year
2024 | Reg S-P Amended | Enhanced customer data protection rules
[/STAT_CARDS]

This article covers the current regulatory framework, what examination staff are reviewing, and where SEC-regulated firms most frequently have compliance gaps in their cybersecurity governance programs.

## The Current Regulatory Framework

**SEC Cybersecurity Rules for Public Companies (2023)**

The SEC adopted new cybersecurity disclosure rules for public reporting companies in July 2023, effective December 2023. These rules require:

*Material incident disclosure.* Public companies must disclose material cybersecurity incidents on Form 8-K within four business days of determining an incident is material. The determination of materiality is the company's responsibility and must be made promptly.

*Annual disclosure of cybersecurity risk management.* Form 10-K must now include disclosures about the company's processes for identifying, assessing, and managing material cybersecurity risks, whether those processes are integrated into the company's overall risk management, and the role of the board and management in cybersecurity oversight.

*Board oversight disclosure.* Public companies must disclose the board's role in oversight of cybersecurity risk and whether any board member has cybersecurity expertise.

**SEC Examination Priorities for RIAs and Broker-Dealers**

The Division of Examinations' cybersecurity priorities for registered advisers and broker-dealers focus on:

- Identity and access management controls protecting client accounts and data
- The security of customer information under Reg S-P
- Cybersecurity incident response planning and testing
- Third-party and vendor cybersecurity risk management
- The security of client-facing portals and digital systems

The Division has consistently cited cybersecurity as an examination priority since 2015. The 2026 examination priorities continue this focus with specific attention to AI-related cybersecurity risks — including threat actors using AI to conduct more sophisticated phishing, social engineering, and credential attacks against financial services firms.

**Reg S-P Amendments (2024)**

The SEC adopted amendments to Regulation S-P in May 2024 that significantly strengthened customer information protection requirements for broker-dealers and investment advisers:

- Extended the safeguards rule to cover more categories of customer information
- Added an incident response program requirement with specific elements
- Required notification to affected customers within 30 days of discovering a covered incident
- Extended Reg S-P obligations to transfer agents

These amendments are not aspirational guidance. They are enforceable rules. Firms without compliant incident response programs face examination criticism and potential enforcement action.

## Where SEC-Regulated Firms Are Most Exposed

**Inadequate incident response programs.** The most common cybersecurity governance gap in SEC-regulated firms is an incident response plan that exists on paper but has never been tested and lacks the operational specificity required by the amended Reg S-P. Examiners will ask for the plan, ask when it was last tested, and ask for documentation of that test.

**No materiality assessment process.** For public companies subject to the 2023 cybersecurity rules, the absence of a documented process for making materiality determinations following a cybersecurity incident is an immediate disclosure control deficiency. Companies that experience an incident and cannot demonstrate a prompt, documented materiality assessment risk both late disclosure violations and potential securities fraud exposure.

**Third-party vendor gaps.** Most financial services cybersecurity incidents originate with third-party vendors — technology providers, cloud platforms, payroll processors, or service firms with access to the firm's systems. Examiners review vendor management programs for evidence of cybersecurity due diligence, contractual protections, and ongoing vendor monitoring.

**Insufficient access controls.** Shared credentials, dormant accounts with active access, former employees with system access, service accounts with excessive privileges. Access control deficiencies are among the most consistent examination findings across the financial services sector.

**No board-level cybersecurity reporting.** For public companies, the 2023 rules created formal board oversight disclosure obligations. For RIAs and broker-dealers, FINRA and SEC examination staff expect evidence that senior management and, for larger firms, the board is actively engaged in cybersecurity oversight — not merely informed after incidents occur.

## What a Defensible Cybersecurity Governance Program Requires

**Risk assessment with defined methodology.** An annual cybersecurity risk assessment using a recognized framework (NIST CSF, ISO 27001, or CIS Controls) with documented findings and remediation tracking. The assessment must be current — examiners will review the date and scope.

**Technically enforced access controls.** MFA on all systems, including email and client portals. Quarterly access reviews with documented results. Privileged account management. Automated deprovisioning for terminated employees. These controls must be active and verifiable — not just described in a policy.

**Incident response program with documented testing.** A written IR plan addressing the specific incident types relevant to the firm (ransomware, credential compromise, wire fraud, vendor breach) with annual tabletop exercise documentation and an escalation matrix that reaches senior management and the board where required.

**Vendor cybersecurity due diligence.** A documented process for evaluating the cybersecurity posture of vendors with access to firm systems or client data, including contract provisions requiring breach notification, security standards, and audit rights.

**Customer notification procedures.** Under the amended Reg S-P, firms must have documented procedures for identifying affected customers following a covered incident and notifying them within 30 days. This requires knowing what data each vendor and system holds about which customers — which requires a data inventory most firms have not built.

**Board and senior management reporting.** Regular cybersecurity reporting to senior management with documented board oversight for firms subject to the 2023 disclosure rules.

## The Enforcement Environment

The SEC collected $8.2 billion in financial remedies in fiscal year 2024 — the highest in agency history. Cybersecurity-related enforcement actions included penalties against SolarWinds and its CISO for cybersecurity disclosure fraud, R.R. Donnelley for inadequate cybersecurity controls and incident disclosure, and multiple broker-dealers for Reg S-P violations related to customer data protection.

The enforcement signal is clear: cybersecurity governance gaps that result in customer harm, inadequate disclosure, or demonstrable non-compliance with applicable rules will be pursued.

Centience builds cybersecurity governance programs for SEC-regulated organizations on managed infrastructure. Technical controls are active and verifiable. Documentation is assembled in advance of examinations. When the examiner asks for evidence, it exists.

[CTA_BOX]
## Is your cybersecurity governance program examination-ready?

Schedule your AI Governance Assessment — we evaluate cybersecurity governance alongside AI governance.

[CTA_BUTTON:Book Your Assessment|/assessments/governance-score]
[/CTA_BOX]
    `,
  },
  {
    id: 16,
    slug: "cybersecurity-governance-finra-member-firms",
    category: "Cybersecurity",
    title: "Cybersecurity Governance for FINRA Member Firms: What the 2026 Examination Program Expects",
    excerpt: "FINRA's 2026 Annual Regulatory Oversight Report outlines specific cybersecurity governance expectations for member firms. Here is a practitioner breakdown of what examiners look for and where most broker-dealers fall short.",
    image: "/assets/blog/centience-cybersecurity-finra.png",
    author: "Orville Matias",
    date: "April 2026",
    metaTitle: "Cybersecurity Governance for FINRA Member Firms 2026 | Centience",
    metaDescription: "FINRA's 2026 examination program includes specific cybersecurity governance expectations. Learn what broker-dealers must implement to satisfy examination requirements and avoid findings.",
    content: `
Cybersecurity has appeared in FINRA's Annual Regulatory Oversight Report every year since 2015. The 2026 report does not break that pattern — it expands expectations, adding AI-related cybersecurity risks and autonomous agent oversight to the existing framework.

[STAT_CARDS]
2015 | FINRA Cyber Priority | Every AROR since has included cybersecurity
Rule 4511 | Books & Records | Log data is a regulatory obligation
Rule 3110 | Supervision | All cybersecurity controls subject to oversight
Annual | IR Plan Testing | FINRA expects documented tabletop results
[/STAT_CARDS]

For FINRA member firms, cybersecurity is not a technology department concern. It is a compliance and supervision obligation. This article covers what the 2026 AROR requires, what examination staff will review, and what a FINRA-compliant cybersecurity governance program looks like.

## What the 2026 AROR Requires on Cybersecurity

The 2026 FINRA AROR identifies the following cybersecurity governance expectations:

**Identity and access management.** FINRA expects firms to enforce least-privilege access principles, require multi-factor authentication, and perform comprehensive access reviews covering both human and non-human accounts (service accounts, API keys, automated processes). This is not new guidance — it is a recurring AROR finding because most firms still have gaps.

**Risk assessments.** Firms should regularly reassess their technology risk profile as the business and systems evolve. FINRA expects this to be a living process, not an annual checkbox. Significant technology changes — new AI tools, cloud migrations, new vendor relationships — should trigger interim risk assessments.

**IT governance for AI and LLMs.** The 2026 AROR specifically calls out governance and model risk frameworks for AI and LLM development and use, with strong documentation and data management controls. Cybersecurity requirements for AI include data quality, integrity, retention, and security — reflecting that AI systems introduce cybersecurity risks distinct from traditional software.

**Configuration management.** Firms must maintain an inventory of desktops, laptops, applications, and servers configured to firm standards. This is a foundational requirement that examination staff consistently find incomplete — particularly for remote endpoints and cloud-hosted applications.

**Log management.** Capture and retain log data from relevant sources based on regulatory and business needs. The 2026 AROR specifies that log data is both a cybersecurity tool (for incident detection) and a regulatory obligation (for examination and books and records purposes).

**IT resiliency.** Test both firm and vendor controls to confirm that critical systems can maintain acceptable service levels during disruptions. This includes documented business continuity and disaster recovery testing with results — not just a written plan.

**Branch office procedures.** For firms with branch offices, limit branch-managed servers, confirm devices are fully inventoried, and ensure branch technology is under the same governance framework as the home office. Branch cybersecurity governance gaps are a consistent examination finding.

**Data backups.** Regular encrypted, off-network backups with tested restoration capabilities. Examiners will ask when backups were last tested — not just whether they exist.

## FINRA's Cybersecurity Enforcement Posture

FINRA cybersecurity enforcement actions result from either examination findings or breach incidents that reveal pre-existing governance failures. Common enforcement patterns include:

**Off-channel communications and recordkeeping.** While not exclusively a cybersecurity issue, the SEC and FINRA's enforcement focus on off-channel communications (WhatsApp, personal email, personal AI tools) reflects a broader concern about uncontrolled communications channels that create both compliance and cybersecurity risk. Firms with employees using personal devices for business communications without MDM enrollment and monitoring have both a recordkeeping problem and a cybersecurity problem.

**Inadequate identity controls leading to customer account takeovers.** FINRA examination findings consistently cite inadequate identity verification, insufficient MFA enrollment for customer accounts, and weak internal access controls as factors in customer harm events that result in enforcement referrals.

**Vendor incidents revealing inadequate due diligence.** When a vendor breach affects a FINRA member firm's customers, examiners review what due diligence the firm performed on the vendor's cybersecurity posture. Firms without documented vendor cybersecurity assessments face findings even when they were not the party that was breached.

## The Specific Gaps Most FINRA Member Firms Have

Based on FINRA AROR language and examination finding patterns, the most common cybersecurity governance gaps at member firms are:

**Incomplete asset inventories.** Firms cannot manage cybersecurity risk for systems they do not know exist. Undocumented endpoints, cloud applications subscribed by individual employees, and shadow IT represent unmanaged attack surface. FINRA examination staff will ask for a current asset inventory.

**MFA not fully deployed.** Most firms have MFA on email and VPN but have not extended it to internal applications, cloud storage, trading systems, and administrative portals. Examiners will ask specifically about MFA coverage — not just whether MFA policy exists.

**No formal vendor cybersecurity due diligence process.** Vendor relationships that were established without cybersecurity assessment and that continue without ongoing monitoring. For firms using SaaS trading platforms, cloud CRM systems, or third-party compliance tools, the absence of vendor security documentation creates examination exposure.

[CALLOUT:Warning]
When a vendor breach affects a FINRA member firm's customers, examiners review what due diligence the firm performed on the vendor's cybersecurity posture. Firms without documented vendor cybersecurity assessments face findings even when they were not the party that was breached.
[/CALLOUT]

**Access reviews not performed or not documented.** Quarterly access reviews are a standard expectation but are frequently not documented. Former employees with active accounts, over-privileged service accounts, and dormant user accounts with system access are consistent examination findings.

**IR plan not tested.** A written incident response plan with no evidence of testing is a documentation exercise, not a governance control. FINRA expects documented tabletop exercise results or simulation testing on at least an annual basis.

## Building a FINRA-Compliant Cybersecurity Governance Program

[TIMELINE]
Asset Inventory | Document all hardware, software, cloud apps, and non-human accounts. Maintain continuously, review quarterly.
MFA Deployment | Enforce MFA on all systems — email, VPN, trading platforms, CRM, compliance tools, admin portals. No undocumented exceptions.
Access Reviews | Quarterly reviews with documentation. Automated deprovisioning tied to HR termination workflows.
Risk Assessment | Annual assessment using a recognized framework with findings tracked to remediation for examination.
Vendor Due Diligence | Documented evaluation process for all vendors with system access. Include contractual security provisions and ongoing monitoring.
IR Plan Testing | Annual tabletop exercise documentation, escalation matrix, and playbooks for ransomware, credential compromise, account takeover, and vendor breach.
Log Management | Security event logs from all critical systems to a centralized platform with alert rules and documented review.
[/TIMELINE]

The gap between having these components documented and having them technically enforced is the operational gap that creates the most examination and breach exposure. Policies describe intent. Infrastructure determines reality.

**Log management and monitoring** — security event logs from all critical systems forwarded to a centralized platform with alert rules and documented review process.

The gap between having these components documented and having them technically enforced is the operational gap that creates the most examination and breach exposure. Policies describe intent. Infrastructure determines reality.

[CTA_BOX]
## Is your FINRA member firm's cybersecurity governance examination-ready?

Schedule your AI Governance Assessment. We evaluate cybersecurity and AI governance together.

[CTA_BUTTON:Book Your Assessment|/assessments/governance-score]
[/CTA_BOX]
    `,
  },
  {
    id: 17,
    slug: "sec-ai-washing-enforcement-actions-what-investment-firms-must-know",
    category: "AI Governance",
    title: "SEC AI Washing Enforcement: Every Action, Every Penalty, and What Investment Firms Must Do Now",
    excerpt: "The SEC has brought multiple AI washing enforcement actions since 2024, with penalties ranging from $175,000 to over $1.8 million. Here is a complete breakdown of every action, the specific violations cited, and what registered firms must do to avoid the same exposure.",
    image: "/assets/blog/centience-sec-ai-washing-enforcement.png",
    author: "Orville Matias",
    date: "April 2026",
    metaTitle: "SEC AI Washing Enforcement Actions | Complete Guide for Investment Firms",
    metaDescription: "Complete breakdown of every SEC AI washing enforcement action, penalties assessed, and violations cited. Learn what registered investment advisers and broker-dealers must do to avoid AI washing exposure.",
    content: `
The SEC has made AI washing one of its highest-profile enforcement priorities. Between February 2024 and April 2026, the Commission brought enforcement actions against multiple investment advisers and companies for making false or misleading statements about their use of artificial intelligence. The penalties have ranged from $175,000 to over $1.8 million per action.

[STAT_CARDS]
$225K | Delphia | SEC AI washing penalty, March 2024
$175K | Global Predictions | SEC AI washing penalty, March 2024
$1.8M+ | Rockwell Capital | Disgorgement + civil penalty
$42M | Nate Inc. | Capital raised on fabricated AI claims
[/STAT_CARDS]

Understanding exactly what triggered each enforcement action — and the specific regulatory provisions cited — is the most practical guide to what registered investment advisers and broker-dealers must document and control.

## The Enforcement Actions: A Complete Record

### Delphia (USA) Inc. — March 18, 2024
**Penalty:** $225,000 civil penalty plus censure and cease-and-desist order

**What Delphia claimed:** Delphia marketed itself to retail advisory clients as using AI and machine learning to analyze customer transaction data and social media activity to make investment decisions. Its marketing stated the firm used client data to "predict which companies and trends are about to make it big" through AI.

**What the SEC found:** Delphia was not using AI in the manner described. Its actual investment process did not use the client data or AI capabilities represented in its marketing materials. The statements were false and misleading.

**Violations cited:** Section 206(2) and Section 206(4) of the Investment Advisers Act (fraud); Rule 206(4)-1 (the Marketing Rule) for false and misleading statements in advertisements.

**Key takeaway:** The SEC's first explicit AI enforcement action established that AI capability claims in marketing materials — including website copy, pitch decks, and client presentations — must be substantiated. The fact that Delphia did not intend to defraud clients was irrelevant. Negligent misrepresentation under Section 206(2) does not require intent.

[CALLOUT:Penalty]
Section 206(2) of the Advisers Act does not require intent to defraud. Negligent misrepresentation is sufficient for enforcement. Every AI claim in your marketing materials is a potential Section 206(2) exposure if it cannot be substantiated.
[/CALLOUT]

---

### Global Predictions, Inc. — March 18, 2024
**Penalty:** $175,000 civil penalty plus censure and cease-and-desist order

**What Global Predictions claimed:** The firm marketed itself as the "first regulated AI financial advisor" and claimed to provide "expert AI-driven forecasts." Its marketing included claims about AI providing "accurate" predictions.

**What the SEC found:** The "first regulated AI financial advisor" claim was unsubstantiated. The AI forecast accuracy claims were misleading. The firm's disclosures did not adequately address the limitations of its AI models.

**Violations cited:** Section 206(2) and Section 206(4) of the Advisers Act; Rule 206(4)-1.

**Key takeaway:** Superlative AI claims ("first," "most advanced," "most accurate") require the same substantiation as any other advertising claim under the Marketing Rule. The absence of a competing firm with the same regulatory status does not make "first regulated AI advisor" accurate — the claim was found misleading in context.

---

### Rockwell Capital Management — February 2, 2024
**Penalty:** $1,602,089 in disgorgement and prejudgment interest (Rockwell Capital); $223,229 civil penalty (Brian Sewell, founder)

**What Rockwell claimed:** Rockwell raised $1.2 million for a cryptocurrency trading fund, representing to investors that the fund employed AI and machine learning technology for trading.

**What the SEC found:** The AI and machine learning technology did not exist. The fund was fraudulent. Sewell made false representations to investors about AI capabilities that were never implemented.

**Violations cited:** Securities Act fraud; Exchange Act fraud. This was a criminal fraud case, not merely a Marketing Rule violation.

**Key takeaway:** The most severe AI washing cases involve complete fabrication of AI capabilities to raise investor capital. These cases receive criminal referrals and carry disgorgement obligations that dwarf civil penalties.

---

### Presto Automation — January 14, 2025
**Penalty:** $100,000 civil penalty

**What Presto claimed:** Presto marketed its "Presto Voice" product as an AI-powered drive-through ordering system. Public statements represented the system as highly automated with AI handling customer orders.

**What the SEC found:** Presto made misleading public statements about Presto Voice's AI capabilities and the degree of automation in its operations. The reality of the product's AI capabilities did not match the public representations.

**Violations cited:** Securities Exchange Act Section 10(b) and Rule 10b-5 (antifraud provisions for public company disclosures).

**Key takeaway:** AI washing exposure extends beyond investment advisers to any public company making material statements about AI capabilities. For public companies, AI capability claims in earnings calls, press releases, and SEC filings are subject to the full securities antifraud framework.

---

### Nathan Saniger / Nate Inc. — April 2025
**Status:** Complaint filed; criminal charges by DOJ filed simultaneously

**What Nate claimed:** Saniger raised more than $42 million from investors by claiming Nate's shopping app used AI to autonomously complete online purchases. He represented automation rates above 90% to investors.

**What the SEC found:** Nearly all orders were manually completed by human workers in the Philippines and elsewhere. The claimed AI automation was essentially nonexistent. Saniger fabricated success metrics in investor communications.

**Violations cited:** Securities Act and Exchange Act antifraud provisions; wire fraud (DOJ charges).

**Key takeaway:** The scale of fundraising in AI washing cases has attracted parallel DOJ prosecution. AI washing that constitutes investor fraud is not exclusively an SEC matter — it can result in criminal charges independent of civil penalties.

---

## The Common Pattern Across All Actions

Every SEC AI washing enforcement action shares a common structure:

1. A firm makes specific, affirmative representations about its use of AI in marketing materials, public disclosures, or investor communications
2. The actual AI capabilities are either nonexistent, materially different from what was represented, or cannot be substantiated
3. The misrepresentation influences investor decisions, client relationships, or capital raising
4. Existing antifraud and marketing rule provisions apply — no AI-specific regulation is needed

The SEC's enforcement posture is settled: AI capability claims are treated identically to any other material representation about an investment adviser's business, investment process, or product capabilities.

## What Registered Firms Must Do Right Now

[TIMELINE]
Audit Every AI Claim | Review your website, ADV Part 2, pitch decks, client letters, and social media for any AI, ML, or algorithmic capability reference.
Build Substantiation Files | For each claim you keep: document what the AI does, what data it uses, its limitations, how it was tested, and who validated it.
Review Disclosures for Accuracy | Check for misleading implications — not just outright falsehoods. Global Predictions' "first regulated AI advisor" claim was misleading in context.
Update Marketing Review Workflow | AI-generated and AI-related content must go through pre-approval with a substantiation check specific to AI claims.
Train CCO and Marketing Team | Staff producing AI content must understand Marketing Rule substantiation requirements apply to AI capability claims identically to performance claims.
Document the Review Process | Even for claims you remove — documenting your review process demonstrates compliance culture that mitigates penalty exposure.
[/TIMELINE] Review your website, ADV Part 2, pitch decks, client letters, and social media for any reference to AI, machine learning, algorithmic processes, or "intelligent" capabilities. Every claim must have a contemporaneous substantiation file that documents the factual basis.

**Build substantiation files.** For each AI capability claim you intend to keep, document: what the AI actually does, what data it uses, what its limitations are, how it was tested, and who internally validated the capability description. This documentation is your defense in an examination or enforcement inquiry.

**Review disclosures for accuracy.** Global Predictions' "first regulated AI advisor" claim was misleading not because it was factually false in isolation but because it created a misleading impression in context. Review AI-related disclosures for misleading implications, not just outright falsehoods.

**Update your Marketing Rule review workflow.** Any AI-generated or AI-related marketing content should go through the same pre-approval workflow as all other advertising. That workflow must include a substantiation check specific to AI claims.

**Train your CCO and marketing team.** The Marketing Rule applies to all statements in all media. Staff producing AI-related content need to understand that the same substantiation requirements that apply to performance claims apply to AI capability claims.

**Document the review.** In every enforcement action, the absence of a documented review process was a factor in the examination finding. Documenting your substantiation process — even for claims you ultimately remove — demonstrates a compliance culture that mitigates penalty exposure.

[CTA_BOX]
## Does your firm have an AI governance program that protects against enforcement exposure?
Schedule your AI Governance Assessment. We identify gaps before the SEC does.
[CTA_BUTTON:Book Your AI Governance Assessment|/assessments/governance-score]
[/CTA_BOX]
    `,
  },
  {
    id: 19,
    slug: "shadow-ai-sec-disclosure-what-regulated-organizations-must-know",
    category: "AI Governance",
    title: "One Employee. One Unauthorized AI Tool. One SEC Filing. Shadow AI Is No Longer a Theoretical Risk.",
    excerpt: "On May 5, 2026, CB Financial Services filed the first-ever SEC Form 8-K triggered by shadow AI — not an external attack, not ransomware, but a single employee using an unauthorized AI tool to process non-public customer data. Here is what every regulated organization needs to understand.",
    image: "/assets/blog/centience-shadow-ai-sec-disclosure.png",
    author: "Orville Matias",
    date: "June 2026",
    metaTitle: "Shadow AI SEC Disclosure: What Regulated Organizations Must Know | Centience",
    metaDescription: "CB Financial Services filed the first SEC Form 8-K triggered by shadow AI in May 2026. Learn what shadow AI is, why policies fail to stop it, and what technically enforced AI governance looks like for financial services and healthcare organizations.",
    content: `
On May 5, 2026, a Pennsylvania-based regional bank made history — and not in a way anyone wants to.

Community Bank, a subsidiary of CB Financial Services, Inc., detected a cybersecurity incident. No hackers broke in. No ransomware encrypted the servers. No threat actor exploited a vulnerability. Bank operations continued without interruption. Customers could access their accounts. Payment systems functioned normally.

One employee used the wrong AI tool to do their job.

That single action — an employee processing non-public customer information through an unauthorized AI application — exposed names, Social Security numbers, and dates of birth. Six days later, CB Financial filed a Form 8-K under Item 1.05 with the SEC. According to Wilson Sonsini Goodrich & Rosati, it was the first-ever SEC cybersecurity disclosure triggered by shadow AI rather than an external attack.

> The phrase "unauthorized artificial intelligence" now appears in exactly one 8-K on record in the SEC's full-text filing database. For now.

## What Shadow AI Actually Is — And Why Your Policy Won't Stop It

Shadow AI is not a new category of malware. It is not a sophisticated nation-state attack. It is your compliance analyst pasting a client's financial summary into ChatGPT the night before a board presentation. It is your operations team using an AI tool embedded in a SaaS platform that quietly added AI features in a software update — features that were on by default, that nobody reviewed, and that are now processing your data under terms of service your legal team never evaluated.

It is ungoverned AI entering your organization through the front door, carried in by well-intentioned employees who are simply trying to get their work done faster.

[STAT_CARDS]
80%+ | Workers globally | Use unapproved AI tools at work (UpGuard, 2025)
23% | Financial services employees | Shared financial statements with unauthorized AI tools (BlackFog, 2026)
57% | Healthcare respondents | Encountered or used an unauthorized AI tool at their organization (Wolters Kluwer, 2025)
1 | SEC 8-K filings | Triggered by shadow AI — so far
[/STAT_CARDS]

The CB Financial filing is not an outlier. It is the first disclosure. It will not be the last.

## The Financial Stakes Are Quantifiable

IBM's 2025 Cost of a Data Breach Report introduced shadow AI as a formal, material breach factor for the first time, drawing from analysis of 600 organizations breached between March 2024 and February 2025. The findings are unambiguous:

> Shadow AI breaches carry an average cost of $4.63 million, compared to $3.96 million for standard breaches — a premium of $670,000 per incident, simply because the AI tool was unsanctioned.

In financial services, the average data breach already reaches $5.56 million per incident, placing the sector second among all industries by breach cost. Shadow AI incidents push that number higher.

In healthcare, the cost is worse. The average security breach in the healthcare industry totaled over $7.4 million in 2025 — the highest of any industry, for the 14th consecutive year. Healthcare organizations operating with only 35% visibility into their AI data flows are effectively flying blind while regulators and plaintiff attorneys are watching.

## The Regulatory Ratchet Is Tightening

The CB Financial filing revealed something C-suite executives across regulated industries should internalize immediately: the SEC's four-business-day disclosure clock under Item 1.05 starts at the materiality determination — not at the detection of the incident. CB Financial determined materiality on May 7 and filed on May 11. The trigger was not financial loss. The bank expressly stated the incident was not expected to have a material financial impact. The trigger was the volume and sensitivity of the exposed data.

**Data sensitivity alone can compel a public SEC filing. That is a new standard.**

For financial services organizations, the regulatory exposure does not stop there. Shadow AI incidents create layered exposure across the GLBA Safeguards Rule, FINRA supervisory requirements, state breach notification laws, NYDFS Part 500, and shareholder litigation risk if the board is seen to have failed in its oversight responsibilities. For broker-dealers and RIAs specifically, an undisclosed shadow AI incident touching client data is not just a technology problem — it is a supervision problem, and supervision failures carry personal liability for CCOs.

In healthcare, entering protected health information into an AI platform without a signed Business Associate Agreement is a direct HIPAA violation. Civil penalties reach $1.5 million per violation category per year. Consumer AI platforms are not designed for healthcare use and typically do not offer BAAs.

Regulators are not waiting for organizations to self-govern. The question is whether your firm will get ahead of this — or be the next filing.

## Why the Policy-First Approach Is Failing

Here is the hard truth: most organizations have responded to shadow AI with the tools they know — policies, training sessions, and awareness emails.

[STAT_CARDS]
83% | Organizations | Rely on training and awareness as their primary shadow AI response (IBM, 2025)
17% | Organizations | Have implemented technical controls to block unauthorized AI data transfers (IBM, 2025)
63% | Organizations | Lack any formal AI governance framework (ISACA, 2025)
86% | Organizations | Lack visibility into what AI tools are running in their environment
[/STAT_CARDS]

That is not governance. That is documentation. And documentation does not stop an employee from pasting client data into a free AI tool at 11 PM the night before a deadline.

The pattern is consistent across every documented shadow AI incident: the tool itself is rarely the only problem. The absence of technically enforced oversight is the problem.

**Policies create paper trails. Technical controls create actual barriers.**

## What Technically Enforced AI Governance Looks Like

Governing shadow AI in a regulated organization requires three things working together — visibility, control, and continuity.

**Visibility** means knowing what AI tools are actually running in your environment — not just the ones you approved. It means understanding what data is flowing to those tools, where it is going, and whether it is covered by your data retention, privacy, and regulatory obligations. At this moment, 86% of organizations lack that visibility.

**Control** means technical enforcement — not acceptable use policies, but systems that can detect, classify, and restrict unauthorized AI data transfers in real time. DLP that understands the context of AI interactions. Identity-aware controls that follow the employee even when they are using a personal account on a personal device.

**Continuity** means this is not a one-time audit or annual review. The AI landscape changes faster than any annual assessment can track. Governance that is not continuous is governance that is already out of date.

The organizations that will survive the next wave of regulatory scrutiny are not the ones with the most comprehensive AI policy document. They are the ones whose AI governance is technically enforced and continuously managed.

## The Bottom Line for C-Suite Leaders

If you are a CEO, COO, or CCO in financial services or healthcare, the CB Financial filing should matter to you personally — not as an abstract case study, but as a preview of what your organization's exposure looks like today.

The incident at Community Bank did not involve a sophisticated attacker. It did not require a systems breach. It required one employee, one unauthorized tool, and data sensitive enough that regulators considered it material.

KPMG's Q1 2026 AI Pulse Survey found that 44% of leaders cite cybersecurity and employee misuse as the hardest AI challenge they face through 2030. The regulatory expectations are only becoming more specific.

The question is not whether shadow AI is running inside your organization. Based on the data, it almost certainly is. The question is whether you have the visibility to know it, the technical controls to govern it, and the documentation to demonstrate to regulators that you took it seriously.

[CTA_BOX]
## Find Out Where You Stand in Minutes
Centience conducts a structured AI Governance Score for regulated organizations in financial services and healthcare. Clear exposure picture. Regulatory gap analysis. A technically enforced governance roadmap — not a policy template.
[CTA_BUTTON:Get Your Free Assessment|/assessments/governance-score]
[/CTA_BOX]

---

**Sources:**
- Wilson Sonsini Goodrich & Rosati — Shadow AI Triggers First SEC Form 8-K (May 2026)
- American Banker — A Bank Breaks Its Silence on Its Shadow AI Breach (June 2026)
- IBM Cost of a Data Breach Report 2025
- Wolters Kluwer — Shadow AI: A Hidden Risk to Healthcare (2025)
- Reco AI — State of Shadow AI Report (2025)
- UpGuard — State of Shadow AI Report (2025)
- BlackFog Research (2026)
- KPMG Q1 2026 AI Pulse Survey
- ISACA Research 2025
- Help Net Security — Financial Sector Cyber Threats Report (April 2026)
    `,
  },
  {
    id: 20,
    slug: "sec-ai-governance-requirements-investment-advisers-2026",
    category: "AI Governance",
    title: "SEC AI Governance Requirements: What Investment Advisers Must Have in 2026",
    excerpt: "The SEC has issued examination risk alerts, enforcement actions, and guidance that make AI governance a compliance requirement for registered investment advisers. This article covers exactly what the agency expects — and what a defensible program looks like.",
    image: "/assets/blog/centience-ai-governance-sec.png",
    author: "Orville Matias",
    date: "June 2026",
    metaTitle: "SEC AI Governance Requirements for Investment Advisers 2026 | Centience",
    metaDescription: "The SEC now expects registered investment advisers to have documented AI governance controls. Learn what the agency requires — supervision policies, records retention, disclosure obligations, and examination readiness.",
    content: `
[STAT_CARDS]
$200M+ | AI Washing Fines | Delphia and Global Predictions (2024)
2026 | Examination Priority | SEC lists AI governance in annual priorities
30 Days | Breach Notification | Under amended Reg S-P (effective June 2026)
5 Years | Records Retention | AI-related books and records under Rule 204-2
[/STAT_CARDS]

The Securities and Exchange Commission has spent the last two years making its expectations clear: if your firm uses artificial intelligence, you are responsible for governing it. That responsibility carries documentation requirements, supervision obligations, disclosure standards, and examination exposure that most registered investment advisers are not fully prepared for.

This article covers what the SEC has said, what it has done, and what a defensible AI governance program looks like for an RIA in 2026.

## The Regulatory Foundation: What Rules Apply to AI

No single SEC rule is titled "AI Governance." What exists instead is a framework of existing rules — adopted decades before AI was a mainstream business tool — that the SEC has made clear apply fully to how your firm uses AI today.

**Investment Advisers Act Rule 206(4)-7** requires every registered investment adviser to adopt and implement written policies and procedures reasonably designed to prevent violations of the Advisers Act. The SEC's position, articulated in multiple examination priority letters and risk alerts, is that AI use without governance controls is a failure of this requirement. If your firm uses AI to support investment decisions, client communications, compliance workflows, or any regulated activity — and you lack written policies governing that use — you have a Rule 206(4)-7 gap.

**Rule 204-2 (Books and Records)** requires advisers to maintain specific records for defined retention periods. The SEC staff has stated that AI-generated outputs, AI system prompts, and the records of AI-assisted decisions qualify as required records. If your firm is using AI to research securities, draft client communications, or support compliance functions, those interactions may be required records under Rule 204-2 — and must be preserved accordingly.

**Investment Advisers Act Section 206 (Anti-Fraud)** prohibits any adviser from employing any device, scheme, or artifice to defraud clients. In 2024, the SEC applied this provision directly to AI when it brought its first AI enforcement actions.

## The 2024 Enforcement Actions: AI Washing Is a Violation

In March 2024, the SEC settled charges against two investment advisers — Delphia (USA) Inc. and Global Predictions Inc. — in what the agency described as the first-ever AI washing cases.

[CALLOUT:Important]
The SEC's AI washing enforcement actions established a clear precedent: making false or misleading claims about your firm's AI capabilities is a securities law violation, not just a marketing problem. Advisers who overclaim AI sophistication in client materials or Form ADV disclosures face fraud exposure under Section 206.
[/CALLOUT]

**Delphia** claimed in marketing materials that it used client transaction data to train its AI, implying it had a proprietary data advantage that informed its investment process. The SEC found these claims were false — the firm did not use client data in its AI as described. Penalty: $225,000.

**Global Predictions** claimed to provide "expert AI-driven forecasts" and called itself "the first regulated AI financial adviser." The SEC found the firm made false and misleading statements about its AI capabilities and use of certain predictive models. Penalty: $175,000.

Both settlements required remediation of disclosures and policies. Neither firm's AI was sophisticated enough to justify the claims made — and the SEC treated that gap as fraud.

The implication for every RIA: your Form ADV disclosures, your marketing materials, your website, and your client communications must accurately describe how your firm uses AI — or doesn't use it. Overclaiming is a Section 206 problem. Undisclosing material AI use is also a problem.

## SEC Examination Priorities: AI Is on the List

The SEC Division of Examinations published its fiscal year 2026 examination priorities explicitly listing investment adviser AI governance as an area of focus. Specifically, examiners will look at:

- Whether advisers have adopted written policies governing AI use
- Whether those policies address supervision of AI-generated outputs
- Whether firms have appropriate disclosures in Form ADV regarding AI use
- Whether records requirements are being met for AI-assisted activities
- Whether compliance programs have been updated to account for AI-specific risks

[CALLOUT:Warning]
The 2026 examination priorities document reflects what experienced examiners will ask about on day one of a review. Firms that have not updated their compliance programs to address AI use will face deficiency letters. Firms that have made material representations about AI in their ADV without supporting infrastructure face enforcement referrals.
[/CALLOUT]

This is not a future concern. SEC examiners are currently visiting firms and asking about AI governance. If your CCO cannot answer basic questions about what AI tools your firm uses, what data flows through them, how outputs are reviewed, and how records are maintained — that is an examination finding in progress.

## What the SEC Expects: The Five Core Requirements

Based on published guidance, examination priorities, enforcement actions, and SEC staff statements, a defensible AI governance program for an RIA in 2026 addresses five areas:

**1. Written Policies and Procedures**

Your policies must identify every AI tool the firm uses in a business or compliance context. For each tool, the policy must address: who is authorized to use it, what data may be input, what types of decisions it may support, how outputs are reviewed before use, and what documentation is required. A general technology use policy that mentions AI in passing does not satisfy this requirement.

**2. Supervision of AI-Assisted Outputs**

AI tools do not absolve advisers of their supervisory obligations. If an employee uses AI to research a security recommendation, draft a client communication, or support a compliance determination — a supervisor must review the output before it is acted on. That review must be documented. The supervision framework must be written, assigned to specific roles, and tested.

**3. Accurate Disclosure in Form ADV**

Your Form ADV must accurately describe how your firm uses AI. If you use AI to support investment research, that should be disclosed. If you use AI in portfolio construction, that should be disclosed. If you market AI-driven capabilities, those capabilities must be what they appear to be. The SEC's AI washing enforcement actions established that inaccurate AI disclosures are a fraud risk, not just a marketing compliance issue.

**4. Records Retention for AI Interactions**

AI-generated outputs that support investment decisions or client communications are records under Rule 204-2. Your records management system must capture and retain those outputs — along with sufficient context to reconstruct the basis for the decision — for the applicable retention period (generally three years for most records, five years for certain records, with the first two years in an accessible location).

**5. Vendor Oversight for Third-Party AI**

Most RIAs are not building their own AI tools. They are using third-party platforms — portfolio management systems, CRM tools, research platforms — that have embedded AI features. Each of those vendors is a service provider who may be processing client data. Your vendor oversight policies must address AI-specific risks: what data is being processed by the vendor's AI, under what terms of service, and whether those terms are compatible with your regulatory obligations.

## The Disclosure Trap Most RIAs Miss

The most common AI governance failure for RIAs is not deliberate overclaiming. It is the gap between what the Form ADV says and what is actually happening in the firm.

If your ADV says your firm does not use AI — but your analysts are using ChatGPT, your CRM has an AI assistant enabled, or your compliance monitoring tool uses AI to flag anomalies — your ADV disclosure is inaccurate. That inaccuracy is a compliance failure.

[CALLOUT:Action]
The right first step for any RIA is a complete AI inventory: identify every tool in the firm's technology stack that uses artificial intelligence, document what data it processes and what decisions it supports, then compare that inventory against your current ADV disclosure. Close the gaps before the examiner does.
[/CALLOUT]

The SEC does not require advisers to avoid using AI. It requires advisers to govern their AI use and disclose it accurately. Firms that have done the inventory, written the policies, and updated their ADV are in a defensible position. Firms that have not are accumulating examination risk with every month that passes.

## What a Technically Enforced SEC AI Governance Program Looks Like

Written policies are necessary but not sufficient. The SEC expects evidence of implementation — not just documentation of intent. A defensible program has three layers working together:

**Governance layer**: Written policies, supervision procedures, disclosure review, and a compliance calendar that includes AI policy updates as regulatory guidance evolves.

**Technical layer**: Controls that enforce the policies — approved AI tool lists enforced at the network level, data loss prevention rules that prevent client data from reaching unauthorized AI platforms, audit logs that capture AI interactions for records purposes.

**Evidence layer**: Retained records that demonstrate the governance and technical controls are operating as described — examination-ready documentation that examiners can review in the first 24 hours of a visit.

Firms that rely solely on the governance layer — policies without technical enforcement — will struggle in examinations because they cannot demonstrate that employees are actually following the policies. The CB Financial Form 8-K filed in May 2026 is the clearest available illustration of what happens when policies exist but technical controls are absent: one employee, one unauthorized AI tool, one SEC disclosure.

[RELATED_SERVICE:AI Governance Program|Centience builds and operates SEC-ready AI governance programs for registered investment advisers — technically enforced, not just documented.|/governance]

[FAQ_ACCORDION]
What AI rules apply to SEC-registered investment advisers?|No single rule is titled "AI governance." The SEC applies existing rules — Rule 206(4)-7 (compliance policies), Rule 204-2 (books and records), and Section 206 (anti-fraud) — to AI use. The 2024 AI washing enforcement actions and 2026 examination priorities have made clear that AI governance is a compliance requirement, not optional.
Does my Form ADV need to disclose AI use?|Yes. If your firm uses AI in investment research, portfolio construction, client communication, or compliance functions, that use should be disclosed in Form ADV. The SEC's AI washing enforcement actions established that inaccurate AI disclosures — including overclaiming AI capabilities — are a fraud risk under Section 206.
Are AI-generated outputs books and records?|The SEC's position is that AI-generated outputs supporting investment decisions or client communications are records under Rule 204-2. They must be preserved for the applicable retention period with sufficient context to reconstruct the basis for the decision.
What is "AI washing" and why does it matter?|AI washing is making false or misleading claims about your firm's AI capabilities. The SEC charged Delphia and Global Predictions in 2024 for AI washing — claiming AI-driven capabilities that did not exist as described. Penalties were $225,000 and $175,000 respectively. The enforcement actions established AI washing as a Section 206 fraud violation.
What do SEC examiners ask about AI governance?|Based on 2026 examination priorities, examiners ask whether firms have written AI policies, whether those policies address supervision of outputs, whether ADV disclosures accurately reflect AI use, whether records requirements are being met, and whether vendor oversight addresses AI-specific risks.
[/FAQ_ACCORDION]
    `,
  },
  {
    id: 21,
    slug: "finra-books-and-records-ai-what-the-rule-requires",
    category: "AI Governance",
    title: "FINRA Books and Records: What the Rule Actually Requires When Your Firm Uses AI",
    excerpt: "FINRA Rule 4511 and SEC Rule 17a-4 predate AI by decades — but they apply fully to AI-generated communications and outputs today. Here is what broker-dealers and dually registered firms must understand about books and records obligations when employees use AI.",
    image: "/assets/blog/centience-ai-governance-finra.png",
    author: "Orville Matias",
    date: "June 2026",
    metaTitle: "FINRA Books and Records AI Requirements: What Broker-Dealers Must Know | Centience",
    metaDescription: "FINRA Rule 4511 and SEC Rule 17a-4 require broker-dealers to retain AI-generated communications and outputs as business records. Learn what must be captured, for how long, and what FINRA examiners will ask about.",
    content: `
[STAT_CARDS]
3 Years | Minimum Retention | Most FINRA books and records (first 2 years accessible)
6 Years | Extended Retention | Customer account records and certain correspondence
4511 | FINRA Rule | General books and records requirement for broker-dealers
17a-4 | SEC Rule | Electronic records standards — applies to AI outputs
[/STAT_CARDS]

Your compliance officer drafted the firm's AI policy. It prohibits using personal AI accounts for business communications and requires employees to use only approved tools. It has been reviewed by outside counsel and circulated to the team.

But here is the question FINRA examiners will ask: can you show me the records of what your AI tools are actually producing?

If the answer is no — if your firm lacks a technical mechanism to capture, archive, and retrieve AI-generated outputs — you have a books and records problem. The policy exists. The records do not.

## The Rule Hasn't Changed. The Technology Has.

FINRA Rule 4511 requires every member firm to make and preserve books and records as required under FINRA rules, the Exchange Act, and applicable SEC rules and regulations. The rule does not specify AI. It was written in an era when "business records" meant paper documents and email threads.

But records requirements follow the nature of the communication, not the medium that carries it. This principle was established when fax became standard, when email replaced fax, when instant messaging entered the office, and when mobile text messaging spread to every employee's pocket. FINRA and the SEC have issued billions of dollars in fines for firms that allowed business communications to migrate to new platforms without corresponding records controls.

AI-generated content is the next migration. And the same principle applies.

[CALLOUT:Rule]
FINRA Rule 4511(a): "Each member shall make and preserve books and records as required under the FINRA rules, the Exchange Act and the applicable Exchange Act rules." The SEC has confirmed that this obligation extends to digital communications across all platforms — including AI tools that generate content used in business contexts.
[/CALLOUT]

When an employee uses an AI tool to draft a client email — even if the employee edits the draft before sending — the AI output is part of the record of how that communication was prepared. When an AI tool is used to research a security recommendation, summarize regulatory requirements, or generate compliance documentation, those outputs are records of the firm's business processes.

## What Qualifies as a Record Under 17a-4

SEC Rule 17a-4 establishes the technical standards for electronic records at broker-dealers. It applies to records required to be preserved under Exchange Act Rule 17a-3, and it governs format, indexing, auditability, and accessibility requirements.

Under 17a-4, electronic records must be:

**Preserved in non-rewritable, non-erasable format.** AI outputs that are simply kept in a chat interface or AI platform log — accessible to the vendor, potentially subject to the vendor's deletion policies — do not meet this standard. Records must be preserved in a format that prevents alteration.

**Accessible and retrievable.** Records must be capable of being produced promptly in response to regulatory requests. If your AI interaction history lives in a vendor's interface and you cannot export it in an auditable format, you cannot produce it in an examination.

**Available for the required retention period.** General correspondence: three years, with the first two years in an accessible location. Customer account records: six years. Some records have longer retention requirements. Your AI records must meet the same standard as their paper and email equivalents.

**Auditable.** The system preserving the records must be capable of demonstrating that records have not been altered since they were created. Third-party AI platforms do not typically provide this guarantee as a standard feature.

## The Supervision Problem: FINRA Rule 3110

Books and records obligations do not exist in isolation. They intersect with FINRA Rule 3110, which requires broker-dealers to establish and maintain a system to supervise the activities of each registered representative and associated person.

When AI tools are used to draft communications, generate research, or support compliance functions, the supervision obligation extends to reviewing those AI-generated outputs before they are used. That review must be documented. A supervisor cannot approve a client communication drafted with AI assistance without a record of that review.

[CALLOUT:Warning]
FINRA's examination findings on digital communications supervision have been some of the most expensive in recent years. Morgan Stanley paid $200 million in 2022 for failures to preserve business communications across multiple platforms. JPMorgan paid $200 million the same year. These penalties were not for what the employees said — they were for the firm's failure to capture and preserve what was said. AI introduces the same risk through a different channel.
[/CALLOUT]

The supervision failure FINRA is most likely to find is not a firm that has prohibited AI use. It is a firm that has policies governing AI use but lacks technical controls to verify those policies are being followed — and therefore cannot demonstrate to an examiner that its supervision system is working.

## What FINRA Is Telling Firms About AI

FINRA has been specific in recent guidance about AI and books and records. The key positions firms must understand:

**AI-generated communications are communications.** If an AI tool drafts a message that is sent to a customer — whether edited or not — that is a customer communication subject to all applicable content standards, approval requirements, and records obligations. The fact that AI generated the first draft does not change the firm's responsibility for the final output.

**AI tools that assist in research create records.** If an employee uses AI to research a security, summarize a company's financials, or identify regulatory requirements, those AI outputs are records of the research process. FINRA has made clear that firms cannot claim to have conducted adequate research while lacking the records of how that research was actually conducted.

**Vendor contracts must address records obligations.** If your firm uses a third-party AI platform, your contract with that vendor must ensure that records can be captured and produced in compliance with 17a-4. Most standard AI vendor agreements do not include these provisions. Firms must negotiate them or choose platforms that support compliant records capture natively.

## The Practical Records Gap Most Firms Have

Here is the gap pattern FINRA examiners are finding at broker-dealers that have begun implementing AI tools:

The firm has an AI policy. The policy says employees must use only approved AI tools and must not input customer data into unauthorized platforms. The firm has identified a set of approved tools.

But the firm has not deployed any technical mechanism to capture what employees are doing with those approved tools. The AI interaction logs live in each employee's individual account on the AI platform. There is no centralized archive. There is no non-rewritable preservation. There is no ability to produce specific interactions in response to an examination request.

The policy exists. The records do not.

[CALLOUT:Action]
The gap between "we have an AI policy" and "we can produce AI records in an examination" is the exact gap FINRA examiners are targeting. Closing that gap requires a technical solution — an archive that captures AI interactions, preserves them in a compliant format, and makes them retrievable by account, date, and content.
[/CALLOUT]

## What a Compliant FINRA AI Records Program Requires

A books-and-records-compliant AI governance program for a broker-dealer has five technical components:

[TIMELINE]
AI Inventory | Identify every AI tool employees are using — approved and unapproved. Firms that do not know what tools are in use cannot build a compliant archive around them.
Approved Tool Selection | Choose AI tools that support records export in formats compatible with your 17a-4 archive. Not all AI platforms provide this capability.
Archive Integration | Configure your records management system to capture AI interactions in real time or at defined intervals. The archive must be non-rewritable and auditable.
Supervision Workflow | Build supervisor review checkpoints for AI-assisted communications. Document the review. Maintain the documentation in the archive.
Vendor Contract Review | Ensure every AI vendor's contract includes records access, breach notification, and data handling provisions compatible with your regulatory obligations.
[/TIMELINE]

Firms that have built this infrastructure are in a defensible position in examinations. Firms that have policies without infrastructure are accumulating records violations with each AI interaction that goes uncaptured.

## The Dually Registered Firm: Two Sets of Standards

Firms that are both broker-dealers (regulated by FINRA) and registered investment advisers (regulated by the SEC) face overlapping records requirements. Rule 17a-4 governs broker-dealer records. Rule 204-2 under the Investment Advisers Act governs adviser records. The standards are similar but not identical — and the intersection creates complexity for firms using AI across both business lines.

For dually registered firms, the more conservative standard generally applies. AI records must be preserved in a format that satisfies both 17a-4 and 204-2 requirements. The retention period is the longer of the two applicable periods. Supervision documentation must satisfy FINRA Rule 3110 for broker-dealer activities and the compliance program requirements of Rule 206(4)-7 for advisory activities.

[RELATED_SERVICE:AI Governance Program|Centience builds books-and-records-compliant AI governance programs for broker-dealers and dually registered firms — technically enforced, not just documented.|/governance]

[FAQ_ACCORDION]
Do FINRA books and records rules apply to AI tools?|Yes. FINRA Rule 4511 and SEC Rule 17a-4 apply to business records regardless of medium. AI-generated communications, research outputs, and compliance documentation qualify as records that must be preserved in compliant format and retained for required periods.
How long must broker-dealers retain AI-generated records?|General business correspondence must be retained for three years, with the first two years in an accessible location. Customer account records must be retained for six years. Some records have longer requirements. AI records must meet the same retention standards as their paper and email equivalents.
What does "non-rewritable, non-erasable" mean for AI records?|SEC Rule 17a-4 requires electronic records to be preserved in a format that cannot be altered after creation. AI interaction logs stored in a vendor's platform that the vendor controls do not satisfy this requirement. Records must be transferred to a compliant archive.
What are the largest fines for books and records failures?|Morgan Stanley and JPMorgan each paid $200 million in 2022 for failures to preserve business communications across digital platforms. FINRA and the SEC have treated records preservation as a high-priority enforcement area. AI introduces the same risk through a new channel.
What does FINRA expect firms to do about AI supervision?|Under Rule 3110, firms must supervise all business communications and activities, including those generated or assisted by AI. Supervisors must review AI-assisted communications before they are sent to customers, and that review must be documented and retained.
[/FAQ_ACCORDION]
    `,
  },
  {
    id: 22,
    slug: "hipaa-ai-compliance-healthcare-organizations-2026",
    category: "AI Governance",
    title: "HIPAA AI Compliance: What Healthcare Organizations Must Govern When Using AI in 2026",
    excerpt: "Entering protected health information into an AI tool without a signed Business Associate Agreement is a direct HIPAA violation. Most consumer AI platforms do not offer BAAs, do not meet the Security Rule's technical safeguard requirements, and are not designed for healthcare use. Here is what compliant AI governance looks like.",
    image: "/assets/blog/centience-ai-governance-hipaa.png",
    author: "Orville Matias",
    date: "June 2026",
    metaTitle: "HIPAA AI Compliance for Healthcare Organizations 2026 | Centience",
    metaDescription: "Using AI with protected health information without a Business Associate Agreement is a HIPAA violation. Learn what healthcare organizations must govern — BAAs, Security Rule safeguards, shadow AI risks, and OCR enforcement trends — to use AI compliantly.",
    content: `
[STAT_CARDS]
$7.4M | Average Healthcare Breach Cost | Highest of any industry, 14 consecutive years (IBM 2025)
$1.5M | Maximum Civil Penalty | Per violation category per year under HIPAA
57% | Healthcare Workers | Report encountering unauthorized AI tools at their organization (Wolters Kluwer 2025)
35% | AI Data Flow Visibility | Average healthcare organization visibility into AI data flows
[/STAT_CARDS]

Here is a scenario playing out at healthcare organizations across the country right now: a clinical administrator pastes a patient's discharge summary into ChatGPT to help draft a follow-up letter. A billing coordinator uses an AI tool to summarize insurance claim details. A physician asks an AI assistant to help draft clinical documentation.

In each case, protected health information has left the healthcare organization's environment and entered a third-party AI platform — without a signed Business Associate Agreement, without evaluation of the platform's security controls, and without any record of the disclosure.

Each instance is a potential HIPAA violation. Depending on the volume and the nature of the information disclosed, each instance carries civil penalty exposure up to $1.5 million per violation category per year.

## The Legal Foundation: Why AI and PHI Is a HIPAA Problem

The Health Insurance Portability and Accountability Act's Privacy Rule and Security Rule were written in an era before AI was a mainstream business tool. But they apply fully to how healthcare organizations handle protected health information today — regardless of the technology involved.

**The Business Associate Agreement requirement** is the most immediately relevant provision. Under HIPAA, any vendor or service provider that creates, receives, maintains, or transmits PHI on behalf of a covered entity is a "business associate" — and must sign a BAA before receiving any PHI.

[CALLOUT:Rule]
45 CFR § 164.502(e)(1): A covered entity may disclose PHI to a business associate only if the covered entity obtains satisfactory assurance, in the form of a written contract, that the business associate will appropriately safeguard the information. A Business Associate Agreement is not a nicety. It is a legal precondition for any PHI disclosure to a third-party service provider.
[/CALLOUT]

Consumer AI platforms — including the personal-use versions of ChatGPT, Claude, Gemini, and others — are not HIPAA business associates. They do not offer Business Associate Agreements as a standard feature. Their terms of service typically permit use of submitted data to improve their models, which is incompatible with HIPAA's use limitation requirements. Inputting PHI into these platforms is a direct HIPAA violation regardless of what the employee intended.

Some AI platforms offer HIPAA-aligned enterprise versions with BAAs available. Even where BAAs exist, the healthcare organization must evaluate whether the platform's security architecture satisfies the Security Rule's technical safeguard requirements before using it for PHI.

## What the Security Rule Requires for AI Systems Processing PHI

The HIPAA Security Rule requires covered entities and business associates to implement administrative, physical, and technical safeguards to protect electronic PHI. When AI systems process PHI, those systems must satisfy the Security Rule's requirements.

**Technical safeguards (45 CFR § 164.312)** are particularly relevant for AI:

**Access Controls** — Only authorized individuals may access systems that process PHI. AI tools used for PHI processing must implement role-based access controls, unique user identification, and automatic logoff provisions. Consumer AI platforms accessible with a free account and no identity verification do not satisfy this requirement.

**Audit Controls** — Organizations must implement hardware, software, and procedural mechanisms that record and examine activity in information systems that contain or use electronic PHI. AI systems must generate and retain audit logs of PHI access and processing. Most consumer AI platforms do not provide healthcare-grade audit logging.

**Integrity Controls** — Electronic PHI must be protected from improper alteration or destruction. AI systems processing PHI must implement controls to verify that data has not been improperly modified.

**Transmission Security** — When PHI is transmitted electronically, encryption is required. Data transmitted to AI APIs or platforms must be encrypted in transit, and the platform must implement appropriate encryption at rest.

**Risk Analysis** — Before deploying any AI system that processes PHI, the organization must conduct a risk analysis under 45 CFR § 164.308(a)(1). The risk analysis must identify threats and vulnerabilities specific to the AI system, assess the likelihood and impact of those risks, and document mitigation measures.

## Shadow AI in Healthcare: The Invisible Exposure

The most significant HIPAA AI compliance risk for most healthcare organizations is not the AI tools they have formally evaluated and deployed. It is the AI tools their employees are using without authorization.

The Wolters Kluwer 2025 Healthcare AI Readiness Report found that 57% of healthcare respondents had encountered or used an unauthorized AI tool at their organization. The IBM Cost of a Data Breach Report found that healthcare organizations have, on average, only 35% visibility into what AI tools are processing their data. The gap between what employees are doing with AI and what the organization knows about is the compliance gap.

[CALLOUT:Warning]
The CB Financial Form 8-K filed in May 2026 — the first SEC cybersecurity disclosure triggered by shadow AI rather than an external attack — is the most visible public illustration of the shadow AI risk. One employee, one unauthorized AI tool, one regulatory disclosure. Healthcare organizations face the same risk under HIPAA, where the consequences include OCR investigation, civil penalties, corrective action plans, and state attorney general actions.
[/CALLOUT]

The pattern is consistent: the unauthorized AI use happens at the level of individual employees trying to get their work done more efficiently. The breach is discovered after the fact — often through a vendor audit, a patient complaint, or an internal security review. By that point, the disclosure has occurred, the violation is complete, and the organization's options are limited to remediation and disclosure to OCR.

## OCR Enforcement in 2025–2026: What the Agency Is Prioritizing

The HHS Office for Civil Rights is the primary HIPAA enforcement agency. OCR's enforcement activity in recent years has focused heavily on areas where technical safeguards were absent or inadequate — the same category of failure that AI governance addresses.

Recent enforcement trends relevant to AI governance:

**Risk analysis failures** remain the most commonly cited HIPAA violation in OCR settlements. Organizations that deploy AI systems processing PHI without a documented risk analysis are accumulating the most common HIPAA enforcement risk.

**Impermissible disclosures** — the unauthorized disclosure of PHI to third parties — are a direct consequence of employees using consumer AI platforms. Each instance of a covered employee inputting PHI into an unauthorized AI tool is a potential impermissible disclosure under 45 CFR § 164.502.

**Lack of Business Associate Agreements** is specifically cited in enforcement actions where PHI was disclosed to vendors without a signed BAA. The absence of a BAA with an AI platform used to process PHI is a straightforward violation.

**Audit control failures** — the absence of audit logging for systems that access PHI — are increasingly relevant as AI systems process clinical data without generating the audit logs OCR expects to review in investigations.

## What HIPAA-Compliant AI Governance Requires

A HIPAA-compliant AI governance program for a healthcare organization has five components:

[TIMELINE]
AI Inventory | Identify every AI tool employees are using — across clinical, administrative, and operational functions. Include embedded AI features in existing software platforms that may have been enabled by default.
BAA Evaluation | For every AI tool that will process PHI, obtain a signed Business Associate Agreement before any PHI is transmitted. Verify that the BAA addresses HIPAA-required provisions, not just vendor-standard data processing terms.
Risk Analysis | Conduct a HIPAA Security Rule risk analysis for each AI system that will process PHI. Document threats, vulnerabilities, likelihood, impact, and mitigation measures. Update the risk analysis when AI systems change.
Technical Safeguards Review | Verify that each authorized AI platform implements required technical safeguards: access controls, audit logging, integrity controls, and transmission security. Document the evaluation.
Employee Training and Technical Controls | Train employees on HIPAA obligations when using AI and implement technical controls — approved tool lists enforced at the network level, DLP rules that prevent PHI from reaching unauthorized platforms — to enforce the policy.
[/TIMELINE]

## The BAA Landscape for Enterprise AI Platforms

Healthcare organizations frequently ask which AI platforms offer BAAs. The landscape has evolved significantly in the last 18 months:

**Microsoft Azure OpenAI Service** offers a BAA as part of the Microsoft Online Services BAA for eligible Enterprise customers. Organizations using Microsoft 365 Copilot in a healthcare context must ensure their BAA covers the specific services they are using.

**Google Cloud Healthcare API and Vertex AI** are covered under Google's BAA for healthcare customers. Standard Google Workspace AI features require evaluation of which specific features are covered.

**Amazon Web Services** offers a BAA covering eligible AWS services, including certain AI and machine learning services. The BAA must be specifically activated; it is not automatic.

**Anthropic, OpenAI, and others** — consumer-facing AI platforms from major AI developers do not uniformly offer BAAs. Enterprise agreements and healthcare-specific partnerships vary by vendor and are evolving. Verify current BAA availability directly with each vendor before any PHI processing.

[CALLOUT:Important]
A signed BAA is a necessary condition for HIPAA-compliant PHI processing by an AI platform — but it is not sufficient. The platform must also implement the technical safeguards the Security Rule requires. A BAA with a platform that lacks adequate access controls, audit logging, or encryption does not make your PHI processing compliant.
[/CALLOUT]

## The Telehealth and Remote Care Expansion

The expansion of telehealth and AI-assisted remote monitoring has created new categories of PHI processing that healthcare organizations must govern. AI tools used in telehealth platforms, remote patient monitoring, clinical documentation assistance, and care coordination software all process PHI — often at greater scale and with less visibility than traditional electronic health record systems.

The same principles apply: BAA required before PHI transmission, Security Rule safeguards required for PHI processing, risk analysis required before deployment, and audit logging required for PHI access. The telehealth context does not create HIPAA exceptions — it extends HIPAA obligations to a broader range of technology.

Organizations that deployed telehealth platforms rapidly during and after the COVID-19 pandemic often did so without full HIPAA compliance evaluation. AI features added to those platforms since deployment may not have been evaluated at all. A comprehensive AI inventory should include every telehealth platform in the organization's technology stack.

[RELATED_SERVICE:AI Governance Program|Centience builds HIPAA-compliant AI governance programs for healthcare organizations — BAA evaluation, risk analysis, technical safeguards, and audit-ready documentation.|/governance]

[FAQ_ACCORDION]
Is using ChatGPT with patient data a HIPAA violation?|Yes, in most cases. Consumer versions of ChatGPT and other consumer AI platforms are not HIPAA business associates and do not offer Business Associate Agreements. Inputting protected health information into these platforms is an impermissible disclosure under HIPAA's Privacy Rule. Enterprise versions of some AI platforms offer BAAs, but these must be specifically obtained and the platform must also satisfy the Security Rule's technical safeguard requirements.
What is a Business Associate Agreement and why does it matter for AI?|A Business Associate Agreement (BAA) is a required written contract between a covered entity and any vendor that creates, receives, maintains, or transmits PHI on the covered entity's behalf. Under 45 CFR § 164.502(e)(1), a covered entity cannot legally disclose PHI to a business associate without a signed BAA. Any AI platform that will process PHI is a business associate and requires a BAA before any PHI is transmitted.
What HIPAA penalties apply to AI-related violations?|HIPAA civil penalties range from $100 to $50,000 per violation, depending on culpability, with a maximum of $1.5 million per violation category per year. An impermissible disclosure of PHI to an unauthorized AI platform is a violation. If the disclosure affected multiple patients, each patient's information could be treated as a separate violation. State attorneys general can bring additional actions.
What is shadow AI and why is it a HIPAA risk?|Shadow AI is the use of AI tools by employees without organizational authorization or oversight. In healthcare, shadow AI typically means employees using consumer AI platforms to process patient information without the organization's knowledge. Because these platforms lack BAAs and do not meet Security Rule requirements, each instance of PHI processing through an unauthorized AI tool is a potential HIPAA violation.
How does HIPAA apply to AI features embedded in existing software?|Many software platforms used in healthcare — EHR systems, billing platforms, scheduling tools — have added AI features in recent years, often enabled by default. If these AI features process PHI, the covered entity must verify that its BAA with the vendor covers the AI features and that those features meet Security Rule requirements. Features enabled by default and not explicitly evaluated represent a common compliance gap.
[/FAQ_ACCORDION]
    `,
  },
  {
    id: 23,
    slug: "data-governance-financial-services-finra-17a-4-sec-records-2026",
    category: "Data Governance",
    title: "Data Governance for Financial Services Firms: FINRA 17a-4, SEC Records, and What Regulated Firms Must Control in 2026",
    excerpt: "Most financial firms have data. Few govern it. Data governance for regulated organizations means documented classification, retention aligned to FINRA 17a-4 and SEC Rule 17a-4, lineage that survives an examination, and access controls that prove your sensitive data posture — before a regulator asks.",
    image: "/assets/blog/centience-data-governance-financial-services.png",
    author: "Orville Matias",
    date: "June 2026",
    metaTitle: "Data Governance for Financial Services Firms: FINRA 17a-4 and SEC Records 2026 | Centience",
    metaDescription: "Financial firms must classify, retain, and control access to data under FINRA 17a-4, SEC Rule 17a-4, and Reg S-P. Learn what a defensible data governance program requires — and where most firms have gaps before an examination.",
    content: `
[STAT_CARDS]
$2.3B+ | FINRA/SEC Records Fines Since 2021 | Off-channel and records preservation failures
6 Years | FINRA 17a-4 Core Retention | Customer account records, most business correspondence
$1.9M | Average HIPAA Settlement | For healthcare financial organizations with dual obligations
2025 | SEC AI Data Governance Priority | Explicitly cited in FY2026 examination priorities
[/STAT_CARDS]

A broker-dealer that cannot produce a specific client communication from three years ago has a records problem. A registered investment adviser that cannot demonstrate who had access to client portfolio data has a data governance problem. In 2026, those are the same problem — and regulators are treating them that way.

Data governance for financial services firms is not an IT project. It is the operational infrastructure that makes your records defensible, your AI environment auditable, and your firm exam-ready before a regulator schedules a visit.

Most financial organizations have data scattered across dozens of systems — CRM, email, trading platforms, document management, AI tools, collaboration software. Most can retrieve records when asked. Few have continuous visibility into what data they hold, where it lives, who can access it, how long it must be retained, and what happens to it when it flows through AI tools.

That gap is what FINRA examiners, SEC staff, and state regulators are now documenting.

## The Records Retention Framework: What FINRA 17a-4 and SEC Rule 17a-4 Actually Require

FINRA Rule 4511 requires member firms to make and preserve books and records in accordance with SEC Rule 17a-4 under the Securities Exchange Act of 1934. Rule 17a-4 is one of the oldest and most technically specific records requirements in financial regulation — and it has become significantly more complex as records now exist across digital platforms, AI systems, and cloud environments.

The core retention requirements most firms know:

- **Three years**: General business records, most correspondence, account statements
- **Six years**: Customer account records, blotters and ledgers, order records
- **Life of the firm**: Articles of incorporation, stock certificates, partnership agreements

What many firms underestimate is how Rule 17a-4 governs the *format* of those records, not just the duration.

[CALLOUT:Rule]
SEC Rule 17a-4(f) requires that electronic records be preserved exclusively in a non-rewritable, non-erasable format — commonly called WORM storage (Write Once, Read Many). Records stored in formats that permit alteration or deletion after creation do not satisfy the rule, regardless of whether they were actually altered. A cloud file that can be edited fails the requirement. A shared drive with admin deletion rights fails the requirement. Email stored in a system where IT can delete individual messages fails the requirement.
[/CALLOUT]

The format requirement is where most firms have gaps they do not know about. Communications that exist on collaboration platforms, AI tools, messaging applications, and cloud storage that can be modified or deleted after creation are not in compliant preservation. They exist — but they do not satisfy 17a-4.

## Data Classification: The Foundation of Everything Else

Data governance starts with knowing what you have. That is not a philosophical point — it is a practical precondition for every other governance requirement.

A financial firm that cannot classify its data cannot:
- Apply the correct retention period to a record
- Identify which records are subject to 17a-4 versus other retention regimes
- Know which systems contain client PII subject to Reg S-P safeguards
- Determine which data must be excluded from AI processing
- Produce a complete response to an examination request

Data classification for financial services organizations typically operates across four tiers:

[TIMELINE]
Restricted | Client personally identifiable information, account numbers, Social Security numbers, tax identification numbers, healthcare information for dually regulated firms. Highest protection requirements. Subset of data governed by Reg S-P and applicable state privacy laws.
Confidential | Internal business strategy, M&A information, non-public market data, proprietary models, personnel records. Material non-public information in this tier requires the most rigorous access controls.
Internal Use Only | Internal communications, operational procedures, vendor contracts, non-sensitive employee records. Subject to standard retention requirements but not heightened protection.
Public | Publicly filed documents, marketing materials, regulatory filings, published research. Standard records management without heightened protection requirements.
[/TIMELINE]

The classification itself is not the governance. Classification is valuable only when it drives downstream decisions — retention periods applied to each tier, access controls enforced at the system level, and audit logging that tracks who accessed what and when.

Most firms have informal classification practices at best. Records are retained based on system defaults. Access is controlled by folder permissions set years ago. Sensitive data lives in systems that were never evaluated for their data governance posture.

## Reg S-P and the Client Data Obligation

Regulation S-P, the SEC's primary rule governing the privacy and security of customer financial information, has been significantly expanded. The 2024 amendments to Reg S-P introduced explicit incident response and notification requirements and strengthened the safeguards rule obligations for both broker-dealers and investment advisers.

The safeguards rule under Reg S-P requires covered firms to adopt written policies and procedures designed to protect customer records and information. In the 2024 amendment, "customer records and information" was clarified to extend to data in electronic form across all systems — including third-party service providers that handle customer data on the firm's behalf.

For financial firms, data governance is the operational mechanism that makes Reg S-P compliance real rather than nominal:

- **What customer data do you hold, and where?** You cannot safeguard data you have not inventoried.
- **Who has access to customer records?** Access control governance is a required component of any Reg S-P program.
- **How long are you retaining customer data?** Reg S-P does not set retention periods, but it requires that retention be documented and that data be disposed of securely when retention ends.
- **What happens if a third party processes customer data?** Vendor oversight for data handling is explicitly addressed in the 2024 amendments.

[CALLOUT:Warning]
The June 2026 Reg S-P compliance deadline — extended from an earlier date — required broker-dealers and investment advisers with more than $1.5 billion in assets to have incident response and notification programs fully operational. Firms at that threshold that have not yet formalized their data governance program are accumulating compliance debt on the safeguards rule and the expanded incident response requirements simultaneously.
[/CALLOUT]

## Data Lineage: Why AI Changes Everything

Data lineage — the documented record of where data came from, how it was transformed, and where it went — has historically been a concern for large financial institutions managing complex data pipelines. In 2026, it is a requirement for any firm using AI tools.

The reason is direct: when an AI tool produces an output that influences a business decision — a client communication draft, a research summary, a risk assessment — the firm must be able to demonstrate what data the AI consumed to produce that output. Without data lineage, you cannot answer the question regulators are now asking: *how did your AI arrive at this?*

FINRA's 2026 Annual Regulatory Oversight Report introduced a dedicated Generative AI section specifically addressing supervision of AI-generated communications. The SEC's FY2026 examination priorities explicitly flag AI technologies as a primary focus area. Both regulators expect firms to demonstrate that they understand what data their AI tools are processing.

[CALLOUT:Action]
Data lineage is the bridge between data governance and AI governance. A firm that has classified its data — knowing what is restricted, what is confidential, what is internal — can enforce rules about which data categories may flow into AI systems. Without classification and lineage, AI tools operate against a data environment the firm does not understand, creating both regulatory exposure and operational risk.
[/CALLOUT]

The practical data lineage requirement for financial firms using AI has three components:

**Input tracking** — which data was provided to an AI tool, from which system, and by whom. This requires either platform-level logging from the AI vendor or an archive that captures AI interactions at the point of submission.

**Output preservation** — the AI-generated output must be retained as a record, in a compliant format, for the applicable retention period. An AI-drafted client email is a client communication subject to 17a-4. The fact that AI generated the draft does not change the records obligation.

**Decision documentation** — for AI-assisted decisions that influence investment recommendations, credit decisions, or other regulated activities, the firm must document that a human reviewed and approved the AI output before it was acted upon. Supervision of AI-assisted decisions is a direct extension of FINRA Rule 3110.

## Off-Channel Communications: The Unresolved Gap for Most Firms

The $2.3 billion in FINRA and SEC fines since 2021 was driven primarily by one failure: broker-dealer employees conducting business on personal devices and communication platforms that were not captured, preserved, or reviewable. WhatsApp, personal email, Signal, personal LinkedIn — business communications that existed entirely outside the firm's records program.

That enforcement wave is not over. FINRA examination findings on digital communications supervision remain among the highest-priority areas in the 2026 examination cycle. And the communications gap has expanded.

AI-generated communications create a new category of off-channel risk. An employee who uses an AI tool to draft a client communication, then sends it from a personal device, has created a record in the AI platform's logs — a record the firm cannot access — and sent a communication from a channel the firm cannot supervise. Both failures are independent violations.

A data governance program that addresses off-channel communications requires:

- **Technical controls that capture business communications regardless of platform** — including AI-assisted drafts and communications sent through approved collaboration tools
- **Classification of communication types** — distinguishing business correspondence from internal communications for retention purposes
- **Archive integration** — real-time or near-real-time capture of communications into a compliant preservation system
- **Supervision workflow** — documented review of communications subject to supervision requirements, including AI-assisted content

Most firms have an archiver. Fewer have a classification framework that determines which communications belong in it. Almost none have extended that framework to cover AI-generated content.

## Access Control Governance: Who Can Touch What, and Why

Regulation S-P's safeguards rule, FINRA Rule 4370 (business continuity), and the general principle of least-privilege access all point to the same requirement: financial firms must control and document who has access to sensitive data.

Access control governance is not a one-time permission-setting exercise. It is an ongoing program that must:

- Maintain a current inventory of systems containing sensitive client data and internal confidential information
- Enforce role-based access controls aligned to data classification tiers
- Conduct periodic access reviews to remove permissions that are no longer necessary
- Log access to sensitive systems in a format that is auditable and retained for applicable periods
- Detect anomalous access patterns that may indicate insider threat or credential compromise
- Document access decisions and reviews in a format that can be produced in an examination

The access control failure pattern FINRA and SEC examiners find most often is not an employee with no authorization who gained access — it is employees with legacy access permissions that were never reviewed, former employees whose access was not terminated, and service accounts with excessive privileges that no one actively monitors.

[RELATED_SERVICE:Data Governance Program|Centience builds and maintains continuous data governance programs for regulated financial organizations — classification, retention aligned to FINRA 17a-4, access control governance, and AI data lineage.|/data-governance]

## What a Defensible Data Governance Program Looks Like

A financial firm that can demonstrate the following to a FINRA examiner or SEC staff is in a defensible data governance posture:

**Data inventory** — A documented inventory of data assets across all systems, including what type of data each system holds, which classification tier it belongs to, and who is responsible for it.

**Retention schedule** — A written retention schedule aligned to applicable regulatory requirements (17a-4, Reg S-P, state requirements) that is actually implemented in the firm's systems — not just documented in a policy binder.

**Access control documentation** — Evidence that access to sensitive systems is reviewed periodically, that access is revoked when no longer needed, and that access logs are retained.

**WORM-compliant preservation** — Records subject to Rule 17a-4 stored in non-rewritable, non-erasable formats with accessible backups for the first two years of a retention period.

**AI data lineage records** — For firms using AI tools, documentation of what data AI systems processed, in what form, and what records were generated as a result.

**Off-channel capture** — A technical mechanism that captures business communications — including AI-assisted content — into the compliance archive regardless of the originating platform.

The gap between most firms' current state and this posture is real but closeable. The firms that close it before an exam are the firms that spend the examination producing records rather than explaining their absence.

[RELATED_SERVICE:AI Governance Program|AI governance at Centience is built on the data governance foundation — because AI audit trails require data lineage, and data lineage requires classification and retention controls that are already in place.|/ai-governance]

[FAQ_ACCORDION]
What is FINRA Rule 17a-4 and what does it require for financial firms?|SEC Rule 17a-4 under the Securities Exchange Act of 1934 requires broker-dealers to preserve books and records in a non-rewritable, non-erasable format for prescribed periods. General business records must be retained for three years; customer account records for six years; some records for the life of the firm. FINRA Rule 4511 requires member firms to comply with Rule 17a-4. The rule applies to records in any medium, including electronic communications, AI-generated content, and records in cloud systems.
What is data governance for financial services firms?|Data governance for financial services is the set of policies, procedures, and technical controls that define what data the firm holds, how it is classified, who can access it, how long it must be retained, and how it flows through the firm's systems — including AI tools. It creates the documented data posture that regulators can review in an examination and that makes AI governance, cybersecurity, and records compliance defensible rather than aspirational.
How does Reg S-P relate to data governance?|Regulation S-P requires broker-dealers and investment advisers to adopt written policies and procedures to protect the privacy and security of customer financial information. The 2024 Reg S-P amendments strengthened the safeguards rule and added incident response and notification requirements. Data governance is the operational program that makes Reg S-P compliance real: it inventories customer data, controls access, enforces retention, and documents the firm's data posture for examination.
What is data lineage and why does it matter for AI governance?|Data lineage is the documented record of where data came from, how it was transformed, and where it went. For financial firms using AI tools, data lineage means knowing what data an AI system consumed to produce a given output — critical for demonstrating supervision of AI-assisted decisions and producing records of AI processing in response to regulatory examination. Without data lineage, a firm cannot demonstrate what data its AI tools processed or whether that processing was appropriate.
What are the largest FINRA and SEC fines for records failures?|FINRA and the SEC imposed more than $2.3 billion in fines on financial firms for off-channel communications and records preservation failures between 2021 and 2025. Morgan Stanley and JPMorgan each paid $200 million in 2022. Multiple additional settlements followed across broker-dealers of all sizes. The pattern in every case was the same: business communications conducted on platforms not captured by the firm's records program.
[/FAQ_ACCORDION]
    `,
  },
  {
    id: 24,
    slug: "data-governance-law-firms-aba-rule-1-6-client-confidentiality-ai-2026",
    category: "Data Governance",
    title: "Data Governance for Law Firms: ABA Rule 1.6, Client Confidentiality, and What AI Changes About Matter Data in 2026",
    excerpt: "Law firms hold some of the most sensitive data in existence — privileged communications, work product, client files — governed by professional responsibility rules that predate digital infrastructure. AI has exposed how few firms actually govern that data. Here is what a defensible law firm data governance program requires.",
    image: "/assets/blog/centience-data-governance-law-firms.png",
    author: "Orville Matias",
    date: "June 2026",
    metaTitle: "Data Governance for Law Firms: ABA Rule 1.6, Privilege, and AI in 2026 | Centience",
    metaDescription: "Law firms must govern client data under ABA Model Rule 1.6, matter-centric classification, and AI tools that process privileged information. Learn what defensible law firm data governance requires in 2026.",
    content: `
[STAT_CARDS]
73% | Law Firms Using AI Tools | Without formal data governance policy (Thomson Reuters 2025)
$3.5M | Average Cost of Law Firm Data Breach | Including regulatory and reputational consequences
Rule 1.6 | ABA Confidentiality Obligation | Applies to all client data regardless of technology used
48 States | Have Issued AI Ethics Guidance | Covering attorney use of AI with client information
[/STAT_CARDS]

Law firms are data custodians by profession. Every client engagement creates a data record — privileged communications, work product, confidential client information, financial data, sensitive business strategy. The professional responsibility rules that govern how attorneys handle that information have existed for decades. The data governance infrastructure to enforce those rules technically has not.

In 2026, the gap between the obligation and the infrastructure is closing — because it has to. AI tools have made the gap visible in a way that paper files and siloed email archives never did. When an attorney pastes a confidential client memo into an AI drafting tool, the question of where that data went, how long it was retained, and who can access it can no longer be answered by pointing to a filing cabinet.

Law firm data governance is not an IT compliance project. It is the technical layer that makes your professional responsibility obligations enforceable in a digital and AI-enabled environment.

## ABA Model Rule 1.6: The Foundation of Law Firm Data Governance

ABA Model Rule 1.6 prohibits attorneys from revealing information relating to the representation of a client without informed consent, except in narrowly defined circumstances. The rule applies to all information relating to representation — not just information marked confidential, not just attorney-client privileged communications, not just information the client specifically asked the attorney to protect.

Comment 18 to Rule 1.6, added in 2012 and expanded in subsequent guidance, addresses technology directly: lawyers must take reasonable precautions to prevent unauthorized access to client information when using technology. The test is reasonable precautions — which means the standard evolves as technology evolves.

[CALLOUT:Rule]
ABA Formal Opinion 477R (2017) addressed reasonable measures for communicating with clients using technology: attorneys must apply a fact-based analysis to determine the mode of communication appropriate for the sensitivity of the matter and apply appropriate safeguards. ABA Formal Opinion 512 (2023) extended this framework explicitly to generative AI — attorneys using AI tools with client information must understand what the tool does with that data, whether it is used for training, who can access it, and how to review AI outputs for accuracy before relying on them.
[/CALLOUT]

The practical implication is direct: an attorney who uses an AI tool to draft a brief, review a contract, or summarize deposition transcripts has a professional responsibility obligation to understand the data governance of that tool. Where does the client information go? Is it retained by the vendor? Is it used to train the model? Who at the vendor has access?

These are not rhetorical questions. They are the questions a state bar disciplinary proceeding or a legal malpractice claim will ask. A law firm data governance program gives attorneys documented, defensible answers.

## Matter-Centric Data Classification: The Structure Law Firms Need

General enterprise data classification — restricted, confidential, internal, public — provides the framework. Law firms require a classification structure that maps to the legal concepts that govern their data handling obligations.

[TIMELINE]
Privileged — Attorney-Client | Communications between attorney and client made for the purpose of seeking or providing legal advice. Protected from compelled disclosure in litigation. The highest-sensitivity classification in law firm data. AI tools that process privileged communications require the most rigorous vendor evaluation and data handling controls.
Work Product | Documents and tangible things prepared by or for an attorney in anticipation of litigation. Protected under FRCP 26(b)(3) and state equivalents. Opinion work product — an attorney's mental impressions, conclusions, opinions, and legal theories — receives near-absolute protection. Classification must distinguish fact work product from opinion work product for access control purposes.
Confidential — Client | Client information that is not privileged but is confidential under Rule 1.6 — business strategy, financial information, personal details, operational data. Broad category covering most non-communication matter data.
Internal — Firm | Administrative records, billing data, HR records, firm strategy. Subject to standard data governance requirements but not client-specific professional responsibility rules.
[/TIMELINE]

The classification must be applied at the matter level, not just the firm level. A document in a real estate transaction matter has different confidentiality and privilege implications than a superficially similar document in a litigation matter. Data governance for law firms must integrate with matter management — the classification of a record is determined by the matter it belongs to, not just the content of the document itself.

Most law firm document management systems have classification fields. Most are not consistently populated. A data governance program establishes the policy for classification, trains timekeepers and staff on application, and audits the classification of active matter data on a defined schedule.

## The AI Problem: What Happens When Privileged Data Enters an AI Tool

The state bar guidance that has emerged across 48 jurisdictions on attorney AI use converges on a common concern: attorneys are using AI tools with client information without understanding what those tools do with the data. The concern is not theoretical. It reflects what is actually happening in law firms right now.

The specific risks that state bar opinions have identified:

**Training data exposure.** Many consumer AI platforms, unless specifically configured otherwise, use submitted content to improve their models. A client memo submitted to a consumer AI tool may become part of the training data that improves responses for future users. That disclosure is a Rule 1.6 violation.

**Vendor employee access.** AI platform vendors typically retain the right to have employees review submitted content for safety, quality assurance, and abuse prevention. The contractual right of a vendor employee to review a privileged client communication is a potential waiver issue and a clear Rule 1.6 concern.

**Jurisdictional data storage.** Client data submitted to cloud-based AI tools is stored in data centers whose location and governing law may not be known to the attorney. Certain jurisdictions impose restrictions on data residency for specific types of sensitive information.

**Retention without consent.** AI platforms vary significantly in how long they retain submitted data. Data submitted for a draft brief may remain accessible in an AI platform's logs long after the engagement has ended and the matter file has been closed.

[CALLOUT:Warning]
The California State Bar AI Task Force's 2025 guidance specifically addressed privileged information: "Before using any AI tool that processes client information, an attorney must verify the vendor's data retention practices, training data policies, and employee access provisions. Use of a consumer AI tool that retains client information for model training without client consent is a disclosure prohibited by Rule 1.6." Twenty-three other state bars have issued substantially similar guidance.
[/CALLOUT]

A law firm data governance program that addresses AI must include a vendor evaluation framework specifically designed for the legal context — covering data retention, training data opt-out provisions, employee access controls, data residency, and contractual protections that go beyond standard enterprise vendor agreements.

## Client File Retention: The Obligation Most Firms Underestimate

Attorney retention obligations for client files are established by state bar rules, court rules, and engagement agreements — and they vary significantly by jurisdiction and matter type. What most law firms underestimate is how much client file retention has changed as client data has moved from physical files to digital systems distributed across document management, email, collaboration platforms, and now AI tools.

State bar requirements for client file retention typically range from five to ten years after matter closure, with some jurisdictions requiring permanent retention for certain matter types (estate planning documents, real property records, criminal defense files). The requirement is to retain the file — which in a digital environment means all matter-related documents, communications, and increasingly, AI-generated work product created during the engagement.

The practical data governance requirements for law firm retention:

**Matter closure process** — a defined process that identifies all data locations for a matter at closing, confirms the classification and retention period for each record type, and moves matter data into a retention-compliant archive.

**Email and communication capture** — attorney work email that discusses client matters is part of the client file. The current explosion of collaboration platform usage — Teams, Slack, client portal communications — expands the communications scope that must be retained.

**AI output preservation** — AI-generated drafts, AI-assisted research summaries, and AI-generated communications used in a matter are matter records subject to retention. The question of whether an AI output is a record has been answered by most state bars: if it was used in the representation, it is a record.

**Destruction protocols** — records must be destroyed at the end of the retention period in a manner that prevents reconstruction of client confidential information. Data governance must define destruction protocols for each data tier and document destruction for records with elevated privilege sensitivity.

## Access Control Governance: Privilege Is Not Enforced by Labeling

A document marked "PRIVILEGED AND CONFIDENTIAL" is only as protected as the access controls on the system where it lives. In most law firms, access control is managed through a combination of document management system permissions, email group access, and informal practices — applied at the timekeeper level but rarely reviewed or audited after initial setup.

The access control failures that generate the most significant data governance consequences in law firms:

**Cross-matter contamination.** Partners and associates with access to a client matter in document management systems may, by virtue of legacy permissions, have access to other client matters for which they have no work. The conflict of interest implications of unauthorized access to adverse party information are significant.

**Former employee access.** Attorney departures and staff turnover are common. Access revocation at departure is frequently handled inconsistently — particularly for cloud-based systems that were provisioned outside the IT department's visibility.

**Opposing counsel data access.** Electronic discovery exchanges create temporary data access arrangements that must be tracked, documented, and terminated when the matter closes. Data governance must include a protocol for managing matter-specific data sharing with external parties.

**AI vendor access.** As discussed above, vendor employees may have contractual access to data submitted to AI tools. This is not standard IT vendor access — it is a potential disclosure of privileged information that must be evaluated before the tool is deployed.

[CALLOUT:Action]
The access control review cycle for a law firm operating a data governance program should occur at minimum annually, and should be triggered by any attorney departure, matter closure, new AI tool deployment, or change in matter team composition. The review must be documented — not just performed. Documentation of access review is the evidence that demonstrates the firm took reasonable precautions under Rule 1.6.
[/CALLOUT]

## Data Lineage for Legal Work: AI Audit Trails in Litigation and Regulatory Context

The emergence of AI-generated legal work product creates a new dimension of data lineage obligation that law firms have not previously encountered. Two specific contexts where AI data lineage is now required:

**Litigation discovery.** Courts are beginning to address the discoverability of AI-generated work product and the metadata associated with AI tool use. A 2025 decision in the Southern District of New York required a law firm to disclose in a discovery response that certain documents had been drafted with AI assistance and to produce the AI interaction logs associated with those drafts on the grounds that they reflected the research methodology used. The holding is not universal, but it signals a direction. Law firms that cannot produce AI interaction logs because they were never captured are in a different position than firms that can produce them and assert work product protection.

**Regulatory investigations.** Law firms that represent clients in regulatory matters — securities enforcement, HIPAA investigations, antitrust reviews — may themselves become subjects of government information requests. A request for "all communications and documents relating to [matter]" that a firm cannot fully respond to because AI-generated content was not captured in the matter file is a compliance failure with both professional responsibility and regulatory implications.

Data lineage for law firms using AI means: capturing what data was submitted to an AI tool, what output was generated, whether the output was used in the matter, and what happened to both the input and the output after the interaction.

[RELATED_SERVICE:Data Governance Program|Centience builds matter-centric data governance programs for law firms — classification aligned to privilege and confidentiality obligations, AI vendor evaluation, retention aligned to bar rules, and access control governance.|/data-governance]

## What a Law Firm Data Governance Program Requires

A defensible law firm data governance program has six components:

**Matter-centric classification policy** — a written policy that defines privilege, work product, confidential, and internal classifications in terms of legal concepts, not just sensitivity levels, and establishes how classification applies to different record types within a matter.

**AI vendor evaluation framework** — a structured process for evaluating AI tools before deployment, covering data retention, training data practices, employee access provisions, data residency, and contractual protections. No AI tool that processes client information should be deployed without completing this evaluation.

**Retention schedule by matter type** — a retention schedule that maps state bar requirements, applicable court rules, and engagement agreement provisions to specific retention periods for different matter types and record categories.

**Access control governance** — periodic reviews of matter access permissions, a documented departure process that includes access revocation, and a protocol for managing external data sharing in litigation matters.

**AI output preservation** — a mechanism for capturing AI interaction logs and AI-generated work product as matter records, with retention aligned to the matter type's retention schedule.

**Destruction protocols** — documented processes for secure destruction of client records at retention expiration, with specific protocols for records in the privileged and work product classification tiers.

The firms that build this infrastructure do not do it because they expect to be audited — they do it because the alternative is operating an AI-enabled practice on a data governance foundation designed for paper files.

[RELATED_SERVICE:AI Governance Program|AI governance at Centience is built on the data governance foundation — AI tools that process privileged client information require more rigorous vendor evaluation and oversight than general enterprise AI deployment.|/ai-governance]

[FAQ_ACCORDION]
Does ABA Model Rule 1.6 apply to AI tools used in legal practice?|Yes. Rule 1.6 prohibits disclosure of information relating to the representation of a client. ABA Formal Opinion 512 (2023) directly addresses generative AI: attorneys must understand what an AI tool does with client information before using it, including whether the tool retains data, uses it for training, or permits vendor employee access. Use of a consumer AI tool that retains or uses client information without client consent may constitute an unauthorized disclosure under Rule 1.6.
What is attorney-client privilege and how does it affect data classification for law firms?|Attorney-client privilege protects confidential communications between attorney and client made for the purpose of seeking or providing legal advice from compelled disclosure in litigation. Law firm data governance must classify privileged communications separately from other confidential client information because privilege can be waived by disclosure to unauthorized parties — making access control for privileged data a professional responsibility obligation, not just a security practice.
How long must law firms retain client files?|Retention requirements vary by jurisdiction and matter type. Most state bars require retention of client files for a minimum of five to seven years after matter closure. Some jurisdictions require longer retention for certain matter types — estate planning, real property, criminal defense. Law firms with multi-jurisdiction practices must apply the most conservative applicable requirement or maintain jurisdiction-specific retention schedules.
What state bar guidance exists on AI and client confidentiality?|As of mid-2026, 48 state bars have issued formal guidance or ethics opinions addressing attorney use of AI tools with client information. The guidance consistently identifies three obligations: verify vendor data handling practices before using an AI tool with client information, do not use consumer AI tools that retain client data for model training without client consent, and review AI-generated outputs for accuracy before relying on them. California, New York, Florida, and Texas have issued the most detailed guidance.
What is work product doctrine and why does it require separate classification from privilege?|The work product doctrine (FRCP 26(b)(3)) protects documents and tangible things prepared by or for an attorney in anticipation of litigation from discovery by opposing parties. Opinion work product — an attorney's mental impressions, legal theories, and strategies — receives near-absolute protection. Work product is governed by a different legal framework than attorney-client privilege, can be waived differently, and applies in different circumstances. Law firm data classification that distinguishes privilege from work product enables access controls and retention policies to be calibrated to the correct legal standard for each record type.
[/FAQ_ACCORDION]
    `,
  },
  {
    id: 25,
    slug: "how-centience-builds-ai-governance-regulated-firms",
    category: "AI Governance",
    title: "How Centience Builds AI Governance for Regulated Firms",
    excerpt: "Most AI governance programs fail before they start. They begin with a policy document nobody can enforce. Seven modules. Built around visibility, ownership, supervision, evidence, and continuous control. We wrote down exactly how we build it.",
    image: "/assets/blog/centience-ai-governance-operating-model.png",
    author: "Centience AI",
    date: "June 2026",
    metaTitle: "How Centience Builds AI Governance for Regulated Firms | LinkedIn",
    metaDescription: "Most AI governance programs fail before they start — they begin with a policy document nobody can enforce. Centience's seven-module operating model behind our documented track record of successful outcomes across SEC, FINRA, and HIPAA engagements.",
    externalUrl: "https://www.linkedin.com/pulse/how-centience-builds-ai-governance-regulated-firms-centience-ai-jmgme",
    content: "",
  },
];

export function getSrc(image: any): string {
  if (typeof image === "string") return image;
  return image.src;
}
