import type { LandingPageData } from "@/data/landingContent";

export const comparePages: Record<string, LandingPageData> = {
  "vciso-vs-governance-program": {
    slug: "vciso-vs-governance-program",
    eyebrow: "Comparison · vCISO vs. Governance Program",
    h1: "vCISO vs. a Continuous Governance Program: What Regulated Firms Actually Need",
    metaTitle: "vCISO vs. Continuous Governance Program | Centience",
    metaDescription:
      "A virtual CISO gives you a person; a continuous governance program gives you evidence. Compare the two for SEC, FINRA, and HIPAA-regulated firms and see which closes exam gaps.",
    keywords: [
      "vCISO vs governance program",
      "virtual CISO for RIA",
      "continuous compliance monitoring",
      "vCISO alternative",
      "governance program for regulated firms",
      "SEC FINRA compliance evidence",
      "do I need a vCISO",
      "outsourced compliance vs governance software",
    ],
    intro: [
      "When a regulated firm decides it needs more security and compliance maturity, the first idea on the table is usually a virtual CISO. It is a sensible instinct: bring in an experienced leader on a fractional basis to set strategy and answer to the board. But a vCISO and a continuous governance program solve different problems, and firms that confuse the two often end up paying for advice while still failing on evidence.",
      "This comparison lays out what each approach actually delivers, where they overlap, and why the firms that survive an SEC or FINRA exam cleanly tend to have both a person who owns the program and a system that proves it is running.",
    ],
    sections: [
      {
        heading: "What a vCISO gives you",
        body: [
          "A virtual CISO is a senior practitioner who takes ownership of your security and, often, compliance strategy on a part-time or fractional basis. They set direction, prioritize risk, sit in front of the board or an examiner, and make judgment calls that a tool cannot.",
          "That expertise is real and valuable. The limitation is bandwidth and continuity. A fractional leader is present a few days a month, and the day-to-day evidence that controls are operating — access reviews completed, vendors covered by agreements, communications archived, procedures tested — still has to be produced by someone, somewhere. A vCISO who spends their limited hours assembling that evidence by hand is expensive and fragile.",
        ],
        bullets: [
          "Senior judgment and strategy for security and compliance",
          "A named owner who can face the board and regulators",
          "Risk prioritization tailored to your firm",
          "Limited hours, so day-to-day evidence work competes with strategy",
        ],
      },
      {
        heading: "What a continuous governance program gives you",
        body: [
          "A continuous governance program is the system underneath the strategy. It monitors your controls on an ongoing basis, maps them to the specific rules your firm answers to, and keeps a timestamped evidence trail so that on any given day you can show an examiner that a control was operating, not just that a policy exists.",
          "It does not replace judgment. What it replaces is the scramble — the weeks before an exam spent reconstructing what happened, chasing screenshots, and hoping the documentation holds together. The program keeps that evidence standing so the firm is exam-ready continuously rather than periodically.",
        ],
        bullets: [
          "Ongoing monitoring of controls instead of point-in-time reviews",
          "Controls mapped to SEC, FINRA, and HIPAA obligations",
          "A standing, timestamped evidence trail for exams and audits",
          "Gaps surfaced continuously so they are closed before an examiner finds them",
        ],
      },
      {
        heading: "Which one does your firm need?",
        body: [
          "For most regulated firms the honest answer is not either/or. You need someone accountable for the program and a system that continuously proves it works. The mistake is buying only the person and assuming evidence takes care of itself, or buying only a tool and assuming it will make the hard calls.",
          "Centience is built to be the governance program layer: continuous monitoring, rule mapping, and evidence, whether your firm has an internal CISO, a fractional vCISO, or an existing MSP. It makes whoever owns your program far more effective by giving them a live picture instead of a once-a-year snapshot.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can a governance program replace a vCISO?",
        answer:
          "Not entirely. A governance program handles continuous monitoring, rule mapping, and evidence, but a firm still benefits from a named owner who exercises judgment and answers to the board and regulators. The program makes that person dramatically more effective; it does not remove the need for accountability.",
      },
      {
        question: "We already have a vCISO. Do we still need this?",
        answer:
          "Usually yes. A fractional leader has limited hours, and assembling day-to-day evidence by hand consumes them fast. A continuous governance program lets your vCISO spend their time on strategy and risk decisions while the system keeps the evidence trail standing.",
      },
      {
        question: "Does Centience work alongside our existing MSP or IT team?",
        answer:
          "Yes. Centience is the governance layer and does not require you to replace your MSP or internal IT. It monitors and evidences the controls those teams operate, so everyone is working from the same live picture of where the firm stands.",
      },
      {
        question: "How do we tell where we stand today?",
        answer:
          "Start with the free Governance Score. It gives you a 0 to 100 readiness score, a peer benchmark, and your priority gaps mapped to the rules that matter, so you can decide where a person versus a system will move the needle most.",
      },
    ],
    related: [
      { label: "Financial Services Governance", href: "/industries/financial-services" },
      { label: "Cybersecurity", href: "/cybersecurity" },
      { label: "AI Governance: Software vs. Managed", href: "/compare/ai-governance-software-vs-managed" },
    ],
    ctaHeading: "See what your program can already prove — and what it can't.",
  },

  "sec-exam-readiness-checklist": {
    slug: "sec-exam-readiness-checklist",
    eyebrow: "Guide · SEC Exam Readiness",
    h1: "SEC Exam Readiness Checklist for Investment Advisers",
    metaTitle: "SEC Exam Readiness Checklist for RIAs | Centience",
    metaDescription:
      "A practical SEC exam readiness checklist for RIAs: safeguards, books and records, marketing substantiation, supervision, and the evidence examiners actually ask for.",
    keywords: [
      "SEC exam readiness checklist",
      "RIA exam preparation",
      "SEC examination priorities",
      "investment adviser exam checklist",
      "SEC document request list",
      "RIA compliance evidence",
      "how to prepare for an SEC exam",
      "SEC exam gaps RIA",
    ],
    intro: [
      "An SEC examination rarely fails a firm on the existence of policies. It exposes the gap between what the policies say and what the firm can actually show happened. The advisers who come through cleanly are not the ones with the thickest manuals; they are the ones who can produce evidence quickly, consistently, and without a fire drill.",
      "This checklist walks through the areas examiners focus on most and the evidence you should be able to produce on short notice. Use it to find the gaps now, while you have time to close them, rather than during the document request window.",
    ],
    sections: [
      {
        heading: "The core areas examiners test",
        body: [
          "Exam scopes vary, but a recurring set of themes shows up across most reviews of investment advisers. Each one comes down to the same question: can you show it was operating, not just written down?",
        ],
        bullets: [
          "Safeguards and privacy: your Regulation S-P program, incident response, and breach notification readiness",
          "Books and records: complete, retained, and readily accessible records across every channel business happens on",
          "Marketing: substantiation for claims and the required conditions for testimonials, endorsements, and performance",
          "Supervision: written procedures that match how the firm actually operates and are tested, not just filed",
          "Technology and AI: governance over the tools that now touch client data and communications",
        ],
      },
      {
        heading: "The evidence you should be able to produce",
        body: [
          "When the document request arrives, the difference between a smooth exam and a painful one is whether this evidence already exists in a form you can hand over. If you would have to reconstruct it, that is a gap.",
        ],
        bullets: [
          "A current risk assessment and an incident response plan that has actually been exercised",
          "Proof that communications across email, chat, and collaboration tools are captured and immutably retained",
          "Substantiation files tied to each marketing claim and performance presentation",
          "Written supervisory procedures with owners, review dates, and evidence of testing",
          "An inventory of vendors and AI tools touching client data, each covered by an agreement and your program",
        ],
      },
      {
        heading: "Turning the checklist into a standing state",
        body: [
          "The trap with a checklist is that it describes a moment. You pass it in March and drift out of readiness by June. Regulated firms that stay ready treat these items as continuously monitored controls rather than a pre-exam project.",
          "Centience keeps each of these areas continuously evidenced: monitoring the controls, mapping them to the rules, and holding a timestamped trail so readiness is a standing state rather than a scramble. The free Governance Score runs this checklist against your firm in minutes and shows you exactly where the gaps are.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much notice do firms get before an SEC exam?",
        answer:
          "It varies, and notice can be short. That is exactly why readiness needs to be a standing state rather than something you assemble after the call. Firms that keep evidence current handle the document request window without a fire drill.",
      },
      {
        question: "What trips up advisers most often in exams?",
        answer:
          "Recurring themes include off-channel communications that were never captured, marketing claims with no retained substantiation, incident response plans that were never tested, and supervisory procedures that no longer match how the firm operates.",
      },
      {
        question: "Does this checklist cover the Marketing Rule and Reg S-P?",
        answer:
          "Yes. Marketing substantiation and Regulation S-P safeguards are both core exam areas covered here. Centience maintains dedicated readiness views for each, mapped to the specific conditions those rules impose.",
      },
      {
        question: "How do we know where we stand right now?",
        answer:
          "The free Governance Score runs this checklist against your firm and returns a 0 to 100 readiness score, a peer benchmark, and your priority gaps mapped to the rules, so you can prioritize the work that matters before an exam.",
      },
    ],
    related: [
      { label: "Regulation S-P Readiness", href: "/compliance/reg-s-p" },
      { label: "SEC Marketing Rule Readiness", href: "/compliance/sec-marketing-rule" },
      { label: "FINRA Supervision (Rule 3110)", href: "/compliance/finra-3110" },
    ],
    ctaHeading: "Run the checklist against your firm in minutes.",
  },

  "ai-governance-software-vs-managed": {
    slug: "ai-governance-software-vs-managed",
    eyebrow: "Comparison · AI Governance",
    h1: "AI Governance: Self-Serve Software vs. a Managed Program",
    metaTitle: "AI Governance Software vs. Managed Program | Centience",
    metaDescription:
      "Compare self-serve AI governance software against a managed governance program for regulated firms. See which actually keeps AI use compliant with SEC, FINRA, and HIPAA.",
    keywords: [
      "AI governance software vs managed",
      "AI governance for regulated firms",
      "AI compliance RIA",
      "managed AI governance program",
      "AI risk management financial services",
      "AI governance software comparison",
      "responsible AI compliance",
      "AI tool oversight SEC FINRA HIPAA",
    ],
    intro: [
      "Regulated firms are adopting AI tools faster than their compliance programs can absorb them. Staff use AI to draft marketing, summarize client conversations, research positions, and triage email — often before anyone has asked whether those tools touch client data, whether their outputs are substantiated, or whether their use is supervised. The result is a governance gap that examiners have started to probe.",
      "Two kinds of solutions promise to close it: self-serve AI governance software you configure and run yourself, and a managed governance program where the monitoring, rule mapping, and evidence are handled for you. This comparison explains the trade-off and where each fits.",
    ],
    sections: [
      {
        heading: "Self-serve AI governance software",
        body: [
          "Self-serve software gives you a platform to inventory AI tools, set policies, and track usage. For a firm with a mature internal compliance and security function and the time to operate it, this can work well. You keep full control and configure the system to your environment.",
          "The cost is operational. Someone has to own it: keep the tool inventory current, interpret how each AI use maps to SEC, FINRA, or HIPAA obligations, review the alerts, and assemble the evidence for an exam. In lean firms that person does not exist, and the software becomes a dashboard no one is accountable for.",
        ],
        bullets: [
          "Full control and configuration in your own hands",
          "Best fit for firms with a staffed compliance and security function",
          "Requires an internal owner for inventory, mapping, and evidence",
          "Risk of becoming an unwatched dashboard in lean firms",
        ],
      },
      {
        heading: "A managed governance program",
        body: [
          "A managed program treats AI governance as an outcome rather than a tool you operate. The monitoring runs continuously, AI use is mapped to the specific rules your firm answers to, and the evidence trail is maintained for you, so the deliverable is readiness rather than another screen to check.",
          "This is the better fit for firms that need the governance outcome without hiring a dedicated team to run software. It also scales judgment: the mapping from a given AI use to the rule that governs it is done by people who do this across many regulated firms, not left to an overstretched generalist.",
        ],
        bullets: [
          "Continuous monitoring and evidence delivered as an outcome",
          "AI use mapped to SEC, FINRA, and HIPAA obligations for you",
          "Best fit for firms without a dedicated compliance-tech team",
          "Judgment applied by specialists, not left to a generalist",
        ],
      },
      {
        heading: "How Centience approaches it",
        body: [
          "Centience delivers AI governance as a continuous program, not a tool you are left to run alone. It tracks the AI tools in use, whether each touches client data, whether its outputs move through review and substantiation, and whether its use is supervised — and it keeps the evidence trail an examiner would ask for.",
          "The free Governance Score is the fastest way to see your AI exposure. It shows where AI tools are outrunning your policies, where client data may be flowing into ungoverned systems, and where your supervision and substantiation workflows have gaps.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do regulators actually examine AI use?",
        answer:
          "Increasingly, yes. When AI touches client data, marketing claims, or supervised communications, its use falls within existing obligations like Regulation S-P, the Marketing Rule, supervision rules, and HIPAA. Examiners ask how the firm governs it, not whether it uses AI.",
      },
      {
        question: "Is software or a managed program better for a small firm?",
        answer:
          "For most small and lean firms, a managed program fits better because it delivers the governance outcome without requiring a dedicated internal owner to operate software day to day. Firms with a staffed compliance-technology function may prefer self-serve control.",
      },
      {
        question: "Can Centience govern AI tools we have already adopted?",
        answer:
          "Yes. Part of the work is surfacing the AI tools already in use, determining which touch client data, and bringing them under your policies, agreements, and supervision, with an evidence trail — rather than assuming the inventory is complete.",
      },
      {
        question: "Where should we start?",
        answer:
          "Start with the free Governance Score. It highlights your AI governance gaps alongside the rest of your program and returns a prioritized view of what to close first.",
      },
    ],
    related: [
      { label: "AI Governance", href: "/ai-governance" },
      { label: "SEC Marketing Rule Readiness", href: "/compliance/sec-marketing-rule" },
      { label: "vCISO vs. Governance Program", href: "/compare/vciso-vs-governance-program" },
    ],
    ctaHeading: "See where AI is outrunning your compliance program.",
  },
};
