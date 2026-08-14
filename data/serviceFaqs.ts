import type { FaqItem } from '@/data/industryFaqs';

/**
 * Question sets for the four programme pages.
 *
 * These are the questions that actually come up on calls, answered at the
 * length a compliance officer needs rather than the length a marketing page
 * usually gives. They also feed the FAQPage schema on each page, which is what
 * AI answer engines read.
 *
 * Every regulatory reference here is deliberately scoped. Where an obligation
 * depends on registration type, the answer says so instead of implying it
 * applies to everyone.
 */

export const infrastructureFaqs: FaqItem[] = [
  {
    question: 'Why does infrastructure sit underneath a governance programme rather than beside it?',
    answer:
      'Because most governance controls are enforced at the infrastructure layer. Access review, multi-factor authentication, encryption at rest, log retention and backup verification are all properties of how the environment is configured. A policy that promises them without control of the infrastructure is a description of someone else’s system. That is why we manage the environment rather than advising on it.',
  },
  {
    question: 'We already have an MSP. Does that mean the infrastructure layer is covered?',
    answer:
      'Operationally, usually yes. Evidentially, usually not. Most managed service agreements are written around uptime, response time and ticket resolution, none of which produce the artefacts an examiner asks for. The common gap is not that a control is missing but that nobody can show when it was applied, to which systems, and what the exceptions were. If your MSP can produce that, the layer is covered.',
  },
  {
    question: 'What infrastructure evidence do examiners actually ask for?',
    answer:
      'In practice: an inventory of systems holding regulated data, proof that access is provisioned and removed on a defined process, evidence that multi-factor authentication is enforced everywhere it is claimed with documented exceptions, backup restoration tested rather than merely scheduled, and log retention long enough to reconstruct an incident. The pattern is consistent — they ask for evidence the control operated over a period, not a screenshot from today.',
  },
  {
    question: 'How does this connect to AI?',
    answer:
      'An AI assistant inherits whatever the underlying environment allows. If a user can reach a folder they should not, so can the assistant acting for them, at machine speed and across everything at once. Most AI data exposure we see is not a novel AI problem; it is an existing permissions problem that AI made trivially easy to surface.',
  },
  {
    question: 'Do you replace our existing systems?',
    answer:
      'Rarely. Most environments do not need replacing so much as governing — configuration corrected, access rationalised, evidence collection made continuous. Where a component genuinely cannot support the controls a firm needs, we say so and scope the change deliberately rather than folding it into a migration nobody asked for.',
  },
];

export const cybersecurityFaqs: FaqItem[] = [
  {
    question: 'What is the difference between cybersecurity and cybersecurity governance?',
    answer:
      'Cybersecurity is the set of controls. Governance is the ability to show they were chosen deliberately, operated continuously, and reviewed when something changed. Firms rarely fail examinations because they lacked a tool. They fail because nobody can evidence that the tool was configured as the policy claimed, or that the exceptions were approved by someone with authority to approve them.',
  },
  {
    question: 'Our penetration test came back clean. Is that sufficient?',
    answer:
      'It is useful and it is a point in time. A penetration test tells you what an attacker could reach on the day it ran. It does not tell you whether access was reviewed the following quarter, whether the finding was remediated, or whether a control lapsed in between. Both matter; only one of them is a programme.',
  },
  {
    question: 'Which framework should we align to?',
    answer:
      'The answer depends on who examines you and what you have committed to elsewhere. NIST CSF is the common default for financial services and maps reasonably onto most examiner expectations. Firms with a NYDFS licence have prescriptive requirements under 23 NYCRR Part 500 regardless of framework choice. Healthcare organisations start from the HIPAA Security Rule. The framework matters less than picking one you can actually operate and evidence — an aspirational alignment is worse than a modest one you meet.',
  },
  {
    question: 'What happens when there is an incident?',
    answer:
      'The technical response is the part most firms have thought about. The part that determines the regulatory outcome is what you can show afterwards: when you knew, what you did, who decided, and whether notification obligations were met on the applicable clock. That record has to be produced as the incident unfolds, because it cannot be reconstructed convincingly later.',
  },
  {
    question: 'How does vendor risk fit into this?',
    answer:
      'Your obligations do not transfer to a vendor. If a provider handling your data is breached, the questions come to you — what diligence you performed, what the contract required, and what you did when you learned. That includes AI vendors and any sub-processor sitting behind a feature you enabled, which is the category firms most often have not inventoried.',
  },
];

export const governanceFaqs: FaqItem[] = [
  {
    question: 'What does "operated continuously" actually mean in practice?',
    answer:
      'It means the controls are monitored and the evidence is assembled as it is produced, rather than gathered before a review. Concretely: access changes captured when they happen, exceptions logged with an owner and an expiry, attestations collected on a schedule and compiled, and retention applied automatically rather than remembered. The test is whether producing twelve months of evidence is a retrieval exercise or a project.',
  },
  {
    question: 'How is this different from hiring a compliance consultant?',
    answer:
      'A consultant typically delivers an assessment or a framework and leaves your team to implement and operate it. We build the programme and then run it, including the technical controls underneath. Both models are legitimate; they solve different problems. The one that fits depends on whether your constraint is knowing what to do or having the capacity to do it continuously.',
  },
  {
    question: 'We are a small firm. Is a governance programme proportionate?',
    answer:
      'Scope should follow size, but the obligations largely do not. A twelve-person adviser has the same recordkeeping duties as a two-hundred-person one, with a fraction of the staff to meet them. The practical answer for smaller firms is a deliberately narrow programme that is genuinely operated — not a broad one that exists mainly on paper. A narrow programme you can evidence is more defensible than a comprehensive one you cannot.',
  },
  {
    question: 'How long before we are ready for an examination?',
    answer:
      'The controls and documentation can be in place in weeks. Evidence takes time by definition — demonstrating that a control operated over a period requires the period to elapse. Firms starting from nothing are usually in materially better shape within a quarter, and have a full evidentiary record after a year of operation.',
  },
  {
    question: 'What if we already have policies?',
    answer:
      'Most firms do, and they are usually the least of the problem. The gap is almost always between what the policy commits to and what the environment enforces — a policy promising quarterly access reviews with no record of one having occurred is worse than having no policy, because it creates an examinable obligation the firm has documented itself failing. We start by reconciling the two.',
  },
];

export const aiGovernanceFaqs: FaqItem[] = [
  {
    question: 'Are AI prompts really covered by recordkeeping rules?',
    answer:
      'The rules turn on the substance of a communication rather than the channel it travelled through, and there is no AI carve-out in them. Whether a specific interaction is a required record depends on your registration and what the interaction was about — a prompt analysing a client position is a different question from a prompt drafting an internal memo. The practical problem is that most firms cannot retrieve either, so the classification question never gets tested.',
  },
  {
    question: 'Does our data stay inside our Microsoft or Google tenant?',
    answer:
      'Sometimes, and it varies by product, edition and configuration. Some AI features route requests to model providers acting as sub-processors outside the tenant, which puts the interaction log on a third party’s retention schedule rather than yours. This is worth verifying for your specific licensing rather than assuming in either direction — the assumption is wrong roughly as often as it is right.',
  },
  {
    question: 'What is shadow AI and why does it matter more than it sounds?',
    answer:
      'Any AI tool in use without approval or visibility. It matters because you cannot retain, supervise or govern what you cannot see — business is being conducted on a channel outside every control the firm operates. It is also the most common finding, because staff adopt tools faster than committees approve them and consumer accounts leave no trace in the tenant.',
  },
  {
    question: 'Should our policy commit to monitoring all AI use?',
    answer:
      'Almost certainly not. Examiners write findings when a firm commits to a procedure and then does not follow it, so a policy promising comprehensive monitoring you cannot sustain creates an examinable obligation where none existed. Scope deliberately — name the approved tools, the captured channels and the retention period — then prove that narrower commitment completely.',
  },
  {
    question: 'Where should a firm with none of this in place start?',
    answer:
      'Inventory and attestation, before technology. Knowing which AI tools are actually in use, and having staff formally acknowledge a scoped policy, produces the two artefacts asked for first and can be completed in weeks. Retention and monitoring follow once you know what you are retaining and monitoring.',
  },
];

export const dataGovernanceFaqs: FaqItem[] = [
  {
    question: 'How long do we have to keep records?',
    answer:
      'It depends on the rule that governs the record, not on a single universal period. Broker-dealers work to SEC Rule 17a-4, which sets a core six-year period for many categories with the first two years readily accessible. Investment advisers work to Advisers Act Rule 204-2. Healthcare organisations have their own schedules under HIPAA. The common failure is applying one retention period to everything and discovering it was the wrong one for a category.',
  },
  {
    question: 'What does immutable retention actually require?',
    answer:
      'For broker-dealer electronic records, Rule 17a-4 permits either the traditional non-rewritable, non-erasable approach or the audit-trail alternative added in the 2022 amendments, which must allow the original record to be recreated if it is modified or deleted. Both are acceptable; what is not acceptable is storage a user can quietly alter with no way to detect it.',
  },
  {
    question: 'Do messaging and collaboration tools count?',
    answer:
      'If business is conducted on them, yes. Off-channel communications have been among the most heavily penalised recordkeeping failures in recent years, and the pattern is consistent — the firm archived email thoroughly and treated everything else as informal. Teams, Slack, text and the output of assistants embedded in those tools are all business communications when they carry firm business.',
  },
  {
    question: 'What is data lineage and why do examiners care?',
    answer:
      'Lineage is the record of where data came from, what transformed it and where it went. It matters because most difficult questions are lineage questions: which system produced this figure, who could reach this file, what did this model see. Without it, answering means reconstructing from memory, and reconstruction is exactly what an examiner is testing for.',
  },
  {
    question: 'Is classification worth the effort for a small firm?',
    answer:
      'A proportionate version is. You do not need an enterprise taxonomy — you need to know where regulated data lives, who can reach it, and how long it must be kept. That much is achievable quickly and is the foundation every other control depends on. Elaborate schemes that nobody maintains are worse than a simple one that stays current.',
  },
];
