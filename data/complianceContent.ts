import type { LandingPageData } from "@/data/landingContent";

export const complianceContent: Record<string, LandingPageData> = {
  "reg-s-p": {
    slug: "reg-s-p",
    eyebrow: "SEC · Regulation S-P",
    h1: "Regulation S-P Readiness: Safeguards and Breach Response",
    metaTitle: "Regulation S-P Readiness Guide | Centience",
    metaDescription: "Understand the amended SEC Regulation S-P: customer-information safeguards, a written incident response program, and breach notification. See where firms fall short.",
    keywords: ["Regulation S-P compliance", "SEC safeguards rule", "Regulation S-P incident response program", "Reg S-P breach notification 30 days", "customer information safeguards RIA", "broker-dealer data protection rule", "Regulation S-P amendments deadline", "SEC customer data privacy requirements"],
    intro: [
      "Regulation S-P is the SEC rule that governs how investment advisers and broker-dealers protect the nonpublic personal information of their customers. The recent amendments modernized the rule for a world of cloud vendors, remote work, and AI tools, adding a formal incident response requirement and a customer notification obligation when sensitive data is compromised.",
      "For chief compliance officers and CISOs, the practical challenge is no longer writing a privacy policy. It is proving, on any given day, that safeguards actually work, that a breach would trigger the right response, and that customers would be notified within the required window. This page explains what the rule asks for and how to keep your program continuously evidenced rather than scrambling before an exam.",
    ],
    sections: [
      {
        heading: "What the rule requires",
        body: [
          "At its core, Regulation S-P requires covered firms to adopt written policies and procedures reasonably designed to safeguard customer records and information. The amendments sharpen this into concrete program elements, moving the rule from a general standard toward specific, documentable obligations.",
          "The amendments require a written incident response program and, when unauthorized access to sensitive customer information is reasonably likely to cause substantial harm, notification to affected individuals as soon as practicable and generally within 30 days. Covered firms include SEC-registered investment advisers, broker-dealers, investment companies, and transfer agents. Smaller firms were given additional time to comply, and that later compliance deadline has now passed, so the full requirements apply across firm sizes.",
        ],
        bullets: [
          "A written safeguards program protecting customer records and information",
          "A written incident response program to detect, respond to, and recover from unauthorized access",
          "Customer notification, generally within 30 days, when sensitive data is likely to cause substantial harm",
          "Oversight of service providers that receive customer information",
          "Applies to RIAs, broker-dealers, investment companies, and transfer agents",
        ],
      },
      {
        heading: "Where firms fall short",
        body: [
          "The most common gap is a policy that exists on paper but is never tested. Firms describe an incident response process without ever running a tabletop exercise, so no one knows whether the 30-day notification clock could actually be met under pressure.",
          "The other recurring weakness is the vendor and technology blind spot. Customer information increasingly flows through cloud platforms, marketing tools, and AI services that were never mapped to the safeguards program. When data lives in systems compliance cannot see, firms cannot demonstrate control of it.",
        ],
        bullets: [
          "Incident response plans that are documented but never exercised",
          "No clear inventory of where sensitive customer information actually lives",
          "Service providers and AI tools handling customer data outside the safeguards program",
          "Notification workflows that have not been timed against the 30-day expectation",
        ],
      },
      {
        heading: "How Centience helps",
        body: [
          "Centience gives regulated firms continuous governance over the safeguards and incident response controls Regulation S-P expects. Instead of an annual policy review, it monitors your controls on an ongoing basis and keeps a timestamped evidence trail so you can show an examiner not just what your policy says, but that it was operating.",
          "The free Governance Score maps your current safeguards, incident response readiness, and vendor oversight against what the rule expects in a few minutes, and shows you the specific gaps to close so your program stays exam-ready and continuously evidenced.",
        ],
      },
    ],
    faqs: [
      { question: "Who has to comply with Regulation S-P?", answer: "The rule covers SEC-registered investment advisers, broker-dealers, investment companies, and transfer agents. The amendments apply across firm sizes; the later compliance deadline that gave smaller firms extra time has now passed." },
      { question: "What is the breach notification requirement?", answer: "When unauthorized access to sensitive customer information is reasonably likely to result in substantial harm or inconvenience, covered firms must notify affected individuals as soon as practicable and generally no later than 30 days after becoming aware of the incident." },
      { question: "Do we need a separate incident response program?", answer: "Yes. The amendments require a written incident response program as part of your safeguards policies, designed to detect, respond to, and recover from unauthorized access to or use of customer information. A policy that is never tested is a common exam finding." },
      { question: "How does the rule apply to AI tools and cloud vendors?", answer: "Any service provider or AI tool that receives customer information falls within the scope of your safeguards and oversight obligations. Firms should map where customer data flows and confirm those providers are covered by their program and contractual protections." },
    ],
    related: [
      { label: "Financial Services Governance", href: "/industries/financial-services" },
      { label: "Cybersecurity", href: "/cybersecurity" },
      { label: "Rule 17a-4 Recordkeeping", href: "/compliance/finra-17a-4" },
    ],
  },
  "finra-17a-4": {
    slug: "finra-17a-4",
    eyebrow: "SEC · Rule 17a-4 / FINRA 4511",
    h1: "Books and Records Readiness: WORM Retention and Comms",
    metaTitle: "Rule 17a-4 & FINRA 4511 Readiness | Centience",
    metaDescription: "Understand SEC Rule 17a-4 and FINRA Rule 4511: immutable electronic recordkeeping, six-year retention, and business communications across email, Teams, and Slack.",
    keywords: ["SEC Rule 17a-4 compliance", "FINRA Rule 4511 recordkeeping", "WORM storage requirement", "broker-dealer books and records retention", "six year record retention rule", "off-channel communications compliance", "Teams Slack archiving FINRA", "immutable electronic records SEC"],
    intro: [
      "SEC Rule 17a-4 and FINRA Rule 4511 govern how broker-dealers preserve their books and records. Together they require that many records be kept for defined periods, in a format that cannot be altered or deleted, and produced promptly when a regulator asks. These are among the most heavily examined obligations in the industry.",
      "The hard part today is not storage capacity. It is scope. Business now happens across email, chat platforms, collaboration tools, and mobile messaging, and regulators expect firms to capture and preserve those communications the same way they preserve email. This page explains the retention and format rules and how to keep your recordkeeping continuously evidenced.",
    ],
    sections: [
      {
        heading: "What the rule requires",
        body: [
          "Rule 17a-4 sets out how long broker-dealers must retain specified records and in what condition. Records covered by the rule must generally be preserved for a defined period, with the earliest portion of that period kept readily accessible so the firm can retrieve records quickly on request. FINRA Rule 4511 layers on that member firms must make and preserve books and records as required and, where FINRA does not specify a period, retain them for at least six years.",
          "A defining feature is the format requirement. Electronic records must be preserved in a non-rewriteable, non-erasable condition, commonly described as WORM (write once, read many) or an equivalent audit-trail approach that prevents alteration or deletion. The core retention benchmark most firms work to is six years, with the first two years readily accessible.",
        ],
        bullets: [
          "Records preserved in a non-rewriteable, non-erasable (WORM) or equivalent immutable format",
          "Six-year retention as the common benchmark, with the first two years readily accessible",
          "Complete, unaltered records producible promptly on regulatory request",
          "Coverage of business communications regardless of the channel they occur on",
        ],
      },
      {
        heading: "Where firms fall short",
        body: [
          "Off-channel communications are the defining recordkeeping risk of the moment. When employees discuss business on personal messaging apps, or on Teams and Slack channels that are not captured, those records fall outside the firm's preservation system and cannot be produced. This has been a repeated and costly enforcement theme.",
          "The second gap is treating archiving as a one-time setup. Firms deploy new collaboration and AI tools without confirming that the content they generate is captured in an immutable, retrievable form, and only discover the gap when an examiner asks for records the system never collected.",
        ],
        bullets: [
          "Off-channel business communications on personal or uncaptured apps",
          "New platforms like Teams and Slack rolled out without archiving in place",
          "Archives that retain content but are not genuinely immutable or WORM-equivalent",
          "Slow or incomplete production because records are not readily accessible",
        ],
      },
      {
        heading: "How Centience helps",
        body: [
          "Centience helps firms treat recordkeeping as a continuously monitored control rather than an assumption. It tracks which communication channels and tools are in use, whether each is mapped to an immutable retention system, and whether your retention and accessibility posture matches what the rules expect, keeping a standing evidence trail for exams.",
          "The free Governance Score is the fastest way to see where you stand. It highlights unarchived channels, off-channel exposure, and retention gaps, so you can close them and keep your books and records exam-ready and continuously evidenced.",
        ],
      },
    ],
    faqs: [
      { question: "How long do broker-dealers have to keep records?", answer: "It depends on the record type, but six years is the common benchmark, with the first two years kept readily accessible. FINRA Rule 4511 requires at least six years where no other retention period is specified." },
      { question: "What does WORM mean and is it required?", answer: "WORM stands for write once, read many. Rule 17a-4 requires electronic records to be preserved in a non-rewriteable, non-erasable condition, and the rule also permits an equivalent audit-trail approach that reliably prevents alteration or deletion of records." },
      { question: "Do chat and collaboration tools count as business records?", answer: "Yes. If business is conducted over Teams, Slack, text messages, or similar channels, those communications are business records and must be captured and preserved on the same terms as email. Failure to capture off-channel communications has been a major enforcement focus." },
      { question: "What is off-channel communication risk?", answer: "It is the risk that employees conduct firm business on messaging platforms that are not captured by the firm's archiving system, leaving records that cannot be preserved or produced. Regulators have penalized firms significantly for these recordkeeping failures." },
    ],
    related: [
      { label: "Financial Services Governance", href: "/industries/financial-services" },
      { label: "Data Governance", href: "/data-governance" },
      { label: "FINRA Supervision (Rule 3110)", href: "/compliance/finra-3110" },
    ],
  },
  "finra-3110": {
    slug: "finra-3110",
    eyebrow: "FINRA · Rule 3110 & 3120",
    h1: "Supervision Readiness: WSPs That Stay Current",
    metaTitle: "FINRA Rule 3110 Supervision Readiness | Centience",
    metaDescription: "Understand FINRA Rule 3110 and 3120: a supervisory system, written supervisory procedures, and annual control testing that must cover technology and AI.",
    keywords: ["FINRA Rule 3110 supervision", "written supervisory procedures WSP", "FINRA Rule 3120 testing", "supervisory system compliance", "annual supervisory control report", "WSP AI technology coverage", "broker-dealer supervision requirements", "FINRA supervision exam readiness"],
    intro: [
      "FINRA Rule 3110 requires every member firm to establish and maintain a supervisory system, including written supervisory procedures, reasonably designed to achieve compliance with applicable rules. It is the backbone obligation that ties every other requirement together: if a firm cannot supervise an activity, it has a Rule 3110 problem regardless of the underlying rule.",
      "For compliance officers, the recurring difficulty is keeping written supervisory procedures current with how the firm actually operates. As firms adopt new technology and AI tools faster than their procedures are updated, examiners increasingly find a gap between what the WSPs describe and what the business does. This page explains the supervision requirements and how to keep them continuously evidenced.",
    ],
    sections: [
      {
        heading: "What the rule requires",
        body: [
          "Rule 3110 requires a supervisory system with designated supervisors, assigned responsibilities, and written supervisory procedures (WSPs) that describe how the firm supervises its business and personnel. The WSPs must be tailored to the firm's actual activities, kept current, and reasonably designed to achieve compliance, not a generic template.",
          "Rule 3120 complements this by requiring a system of supervisory control policies and procedures, including testing and verification of the firm's supervisory procedures, summarized in an annual report to senior management. Together the rules expect not just that procedures exist, but that the firm periodically tests whether they work and updates them when they do not, including as technology and AI change how the business runs.",
        ],
        bullets: [
          "A supervisory system with designated supervisors and clear responsibilities",
          "Written supervisory procedures tailored to the firm's actual business and kept current",
          "Rule 3120 supervisory control testing and verification of those procedures",
          "An annual supervisory-control report to senior management",
          "Coverage of newer activities, including technology and AI tools",
        ],
      },
      {
        heading: "Where firms fall short",
        body: [
          "The classic finding is stale WSPs. Procedures are written once, adopted from a template, and never revised to reflect new products, new channels, or new tools, so they no longer describe how the firm actually supervises. An examiner comparing the WSPs to real practice quickly sees the mismatch.",
          "The second gap is a missing link between the technology the firm uses and the procedures that are supposed to govern it. When staff adopt AI tools for research, drafting, or client interaction, firms often have no supervisory procedure covering their use, no record of who approved them, and no annual test of whether those controls function.",
        ],
        bullets: [
          "WSPs that lag behind current products, channels, and tools",
          "No supervisory procedures addressing AI or new technology use",
          "Rule 3120 testing treated as a formality rather than a real control check",
          "Supervisory responsibilities assigned on paper but not exercised in practice",
        ],
      },
      {
        heading: "How Centience helps",
        body: [
          "Centience keeps supervision continuously governed by tracking whether your written supervisory procedures reflect the technology and activities actually in use, and whether your supervisory controls are being tested rather than assumed. It maintains an evidence trail that connects each procedure to its owner, its last review, and its testing, which is exactly what a supervision review looks for.",
          "Begin with the free Governance Score. It shows where your WSPs may be out of date, where AI and technology use is outrunning your procedures, and where your Rule 3120 testing needs strengthening, so your supervisory program stays exam-ready and continuously evidenced.",
        ],
      },
    ],
    faqs: [
      { question: "What are written supervisory procedures under Rule 3110?", answer: "WSPs are the firm's documented procedures describing how it supervises its business and personnel to achieve compliance with applicable rules. They must be tailored to the firm's actual activities and kept current, not adopted as a static template." },
      { question: "How is Rule 3120 different from Rule 3110?", answer: "Rule 3110 requires the supervisory system and written procedures. Rule 3120 requires a system of supervisory control policies that tests and verifies those procedures and produces an annual report to senior management on the results." },
      { question: "Do our WSPs need to address AI and new technology?", answer: "If your firm uses AI or new technology in its business, your supervisory procedures should reasonably address that use. A supervisory system that ignores tools employees actually rely on is difficult to defend as reasonably designed." },
      { question: "How often should supervisory procedures be reviewed?", answer: "There is no single fixed frequency for every element, but procedures must be kept current, and Rule 3120 contemplates at least annual testing and reporting. Many firms review WSPs at least annually and whenever the business or rules change materially." },
    ],
    related: [
      { label: "Financial Services Governance", href: "/industries/financial-services" },
      { label: "AI Governance", href: "/ai-governance" },
      { label: "Books & Records (17a-4)", href: "/compliance/finra-17a-4" },
    ],
  },
  "sec-marketing-rule": {
    slug: "sec-marketing-rule",
    eyebrow: "SEC · Marketing Rule 206(4)-1",
    h1: "Marketing Rule Readiness: Substantiation and Evidence",
    metaTitle: "SEC Marketing Rule Readiness | Centience",
    metaDescription: "Understand the SEC Marketing Rule (206(4)-1): substantiation of claims, testimonial and endorsement conditions, performance advertising, and ad recordkeeping.",
    keywords: ["SEC Marketing Rule compliance", "Rule 206(4)-1 advertising", "adviser advertising substantiation", "testimonials endorsements SEC rule", "performance advertising requirements", "marketing rule recordkeeping", "AI generated marketing compliance", "RIA advertising rule readiness"],
    intro: [
      "The SEC Marketing Rule, Rule 206(4)-1 under the Investment Advisers Act, governs how registered investment advisers advertise. It replaced the older advertising and cash solicitation rules with a single, principles-based framework covering everything from testimonials and endorsements to performance presentations, and it applies to a broad range of communications aimed at prospective and current clients.",
      "For compliance officers, the rule's central discipline is simple to state and hard to sustain: a firm must be able to substantiate the claims it makes and keep records proving what it said and when. As advisers turn to AI to generate marketing copy at scale, that substantiation burden grows. This page explains the rule and how to keep your advertising continuously evidenced.",
    ],
    sections: [
      {
        heading: "What the rule requires",
        body: [
          "The rule prohibits false or misleading advertising and requires advisers to have a reasonable basis for believing they can substantiate material statements of fact. It sets specific conditions for testimonials and endorsements, including required disclosures about whether the person is a client and whether compensation was paid, and it imposes detailed requirements on how performance may be presented.",
          "Performance advertising carries some of the most exacting conditions, including presentation standards designed to prevent cherry-picking and misleading time periods. Underpinning all of it is a recordkeeping obligation: advisers must retain copies of their advertisements and the records supporting the claims and performance figures they contain.",
        ],
        bullets: [
          "No false or misleading statements in advertisements",
          "A reasonable basis to substantiate material factual claims",
          "Specific disclosure conditions for testimonials and endorsements",
          "Detailed presentation standards for performance advertising",
          "Retention of advertisements and the records that support their claims",
        ],
      },
      {
        heading: "Where firms fall short",
        body: [
          "The most common weakness is claims without a documented basis. Marketing describes results, capabilities, or comparisons that sound reasonable but were never tied to evidence the firm can produce, so when an examiner asks for substantiation there is nothing to show.",
          "AI-generated marketing content sharpens this risk. When copy is produced by an AI tool, it can introduce claims, statistics, or performance framing that no one substantiated and that may not even be accurate. Without a review and substantiation workflow and a record of what was published, firms lose track of what they actually claimed and why.",
        ],
        bullets: [
          "Marketing claims with no retained substantiation",
          "AI-generated copy introducing unverified claims or figures",
          "Testimonials and endorsements missing required disclosures",
          "Performance presentations that cannot be reproduced from underlying records",
          "No reliable archive of what was published and when",
        ],
      },
      {
        heading: "How Centience helps",
        body: [
          "Centience brings continuous governance to advertising by tracking that marketing content, including AI-generated content, moves through review and substantiation before it goes out, and by maintaining the evidence trail the rule expects: what was claimed, what supports it, and the record of the advertisement itself.",
          "Start with the free Governance Score. It surfaces where your marketing lacks a substantiation or review workflow, where AI content raises governance questions, and where your ad recordkeeping falls short, so your advertising stays exam-ready and continuously evidenced.",
        ],
      },
    ],
    faqs: [
      { question: "What counts as an advertisement under the Marketing Rule?", answer: "The rule defines advertisement broadly to capture most communications an adviser uses to offer its services to prospective clients or investors, as well as certain compensated endorsements. Because the definition is broad, firms should assume a wide range of marketing communications is in scope." },
      { question: "What does substantiation mean here?", answer: "Advisers must have a reasonable basis for believing they can substantiate material statements of fact in an advertisement. In practice that means keeping the supporting evidence for claims so it can be produced if the SEC requests it." },
      { question: "Are testimonials and endorsements allowed?", answer: "Yes, subject to conditions. The rule permits them only with required disclosures, including whether the person giving it is a client and whether compensation was provided, along with oversight and other conditions set out in the rule." },
      { question: "How does the rule apply to AI-generated marketing content?", answer: "The rule applies to the content regardless of how it was created. AI-generated copy raises heightened governance and substantiation questions because it can introduce claims no one verified, so firms should review and substantiate it and keep records just as they would for any advertisement." },
    ],
    related: [
      { label: "Financial Services Governance", href: "/industries/financial-services" },
      { label: "AI Governance", href: "/ai-governance" },
      { label: "Regulation S-P", href: "/compliance/reg-s-p" },
    ],
  },
  "hipaa-security-rule": {
    slug: "hipaa-security-rule",
    eyebrow: "HHS · HIPAA Security Rule",
    h1: "HIPAA Security Rule Readiness: Safeguards for ePHI",
    metaTitle: "HIPAA Security Rule Readiness | Centience",
    metaDescription: "Understand the HIPAA Security Rule: administrative, physical, and technical safeguards for ePHI, required risk analysis, access controls, and business associate agreements.",
    keywords: ["HIPAA Security Rule compliance", "ePHI safeguards requirements", "HIPAA risk analysis requirement", "administrative physical technical safeguards", "business associate agreement HIPAA", "HIPAA encryption access controls", "AI PHI HIPAA compliance", "HIPAA Security Rule audit readiness"],
    intro: [
      "The HIPAA Security Rule sets national standards for protecting electronic protected health information, or ePHI. It applies to covered entities such as health plans and providers, and to the business associates that handle ePHI on their behalf. Rather than prescribe specific products, it requires a program of administrative, physical, and technical safeguards appropriate to each organization.",
      "For compliance officers and CISOs, the rule's demands are ongoing rather than one-time: a current risk analysis, controls that match the risks it identifies, and evidence that safeguards actually operate. As AI tools begin to touch clinical and patient data, the question of whether ePHI is properly governed becomes more urgent. This page explains the requirements and how to keep them continuously evidenced.",
    ],
    sections: [
      {
        heading: "What the rule requires",
        body: [
          "The Security Rule is organized into three categories of safeguards. Administrative safeguards cover the policies, workforce training, and risk management that run the program. Physical safeguards protect the facilities and devices where ePHI lives. Technical safeguards cover the technology controls, including access controls, audit controls, and mechanisms to protect data in transit and at rest.",
          "Two elements anchor the rule. A required, ongoing risk analysis identifies threats and vulnerabilities to ePHI and drives the choice of controls. And whenever a business associate handles ePHI, a business associate agreement must be in place, extending the safeguard obligations down the chain. Encryption and access and audit controls are central technical expectations for demonstrating protection.",
        ],
        bullets: [
          "Administrative safeguards: risk analysis, risk management, workforce training",
          "Physical safeguards: facility and device protections for ePHI",
          "Technical safeguards: access controls, audit controls, transmission security",
          "A current, ongoing risk analysis driving control decisions",
          "Encryption of ePHI where appropriate, and business associate agreements with vendors",
        ],
      },
      {
        heading: "Where firms fall short",
        body: [
          "The single most cited HIPAA weakness is the risk analysis. Organizations either never complete a thorough one, or they do it once and never update it, so their safeguards are no longer matched to the risks they actually face. Enforcement repeatedly turns on this gap.",
          "The other growing weakness is untracked vendors and tools that touch ePHI. New cloud services and AI tools are adopted without a business associate agreement, without confirming access and audit controls, and without appearing in the risk analysis. When PHI flows into systems no one governs, the organization cannot demonstrate control of it.",
        ],
        bullets: [
          "Risk analysis that is missing, incomplete, or years out of date",
          "AI tools processing PHI without safeguards or a business associate agreement",
          "Weak access controls and no meaningful audit logging of ePHI access",
          "ePHI left unencrypted where encryption would be appropriate",
          "Vendors handling ePHI outside any documented agreement or oversight",
        ],
      },
      {
        heading: "How Centience helps",
        body: [
          "Centience applies continuous governance to ePHI safeguards by tracking whether your risk analysis is current, whether access and audit controls are in place, and whether every tool and vendor touching PHI, including AI services, is covered by an agreement and by your safeguards program. It keeps the evidence trail that demonstrates controls are operating, not just documented.",
          "Start with the free Governance Score. It shows where your risk analysis, technical safeguards, and business associate coverage have gaps, and where AI tools raise PHI governance questions, so your Security Rule program stays audit-ready and continuously evidenced.",
        ],
      },
    ],
    faqs: [
      { question: "Who must comply with the HIPAA Security Rule?", answer: "Covered entities such as health plans, healthcare clearinghouses, and most providers, along with the business associates that create, receive, maintain, or transmit ePHI on their behalf. Business associates are directly responsible for meeting applicable Security Rule requirements." },
      { question: "Is a risk analysis actually required?", answer: "Yes. Conducting an accurate and thorough risk analysis of the potential risks and vulnerabilities to ePHI is a foundational requirement, and it is expected to be kept current rather than performed once. It is one of the most common areas of enforcement findings." },
      { question: "Is encryption mandatory under the rule?", answer: "The rule treats encryption as an addressable specification, which means an organization must assess whether it is reasonable and appropriate and, if so, implement it, or document why an equivalent alternative is used. In practice, encryption of ePHI is widely expected." },
      { question: "What about AI tools that process patient data?", answer: "Any tool or vendor that handles ePHI, including AI services, falls within your safeguard and oversight obligations and generally requires a business associate agreement. Firms should confirm access and audit controls and include these tools in their risk analysis before PHI flows into them." },
    ],
    related: [
      { label: "Healthcare Governance", href: "/industries/healthcare" },
      { label: "Cybersecurity", href: "/cybersecurity" },
      { label: "Healthcare Governance Score", href: "/assessments/governance-score-healthcare" },
    ],
  },
};
