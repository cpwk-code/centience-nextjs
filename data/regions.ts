export interface RegionSection {
  heading: string;
  body: string[];
}

export interface RegionFaq {
  question: string;
  answer: string;
}

export interface Region {
  slug: string;
  /** Short label used in the eyebrow and breadcrumb */
  label: string;
  /** Full display name */
  name: string;
  addressLocality: string;
  addressRegion: string;
  latitude: number;
  longitude: number;
  /** Towns and neighbourhoods folded into this page, shown as served areas */
  alsoServing: string[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  intro: string;
  /** The regulatory fact that makes this region different from the others */
  hookEyebrow: string;
  hookHeading: string;
  hookBody: string[];
  sections: RegionSection[];
  faqs: RegionFaq[];
}

export const regions: Region[] = [
  // ─── New York ─────────────────────────────────────────────────────────────
  {
    slug: 'ai-governance-new-york',
    label: 'New York',
    name: 'New York City and the Tri-State Area',
    addressLocality: 'New York',
    addressRegion: 'NY',
    latitude: 40.7614,
    longitude: -73.9776,
    alsoServing: ['Manhattan', 'Westchester', 'White Plains', 'Long Island', 'Northern New Jersey'],
    metaTitle: 'AI Governance New York | NYDFS Part 500 & SEC Readiness | Centience',
    metaDescription:
      'Technology and AI governance for New York firms carrying both federal and NYDFS obligations. Part 500 certification evidence, SEC and FINRA recordkeeping, operated continuously.',
    keywords: [
      'AI governance New York',
      'NYDFS Part 500 compliance',
      'technology governance NYC',
      '23 NYCRR 500 cybersecurity program',
      'SEC FINRA compliance New York',
      'CISO certification New York',
      'cybersecurity governance Manhattan',
    ],
    h1: 'AI and Technology Governance for New York Firms Under Two Regulators',
    intro:
      'Most financial firms answer to one regulator for technology. Many New York firms answer to two. Centience builds and operates the governance program that satisfies both, and keeps the evidence current between examinations.',
    hookEyebrow: 'What makes New York different',
    hookHeading: 'NYDFS Part 500 sits on top of everything else',
    hookBody: [
      'If your firm holds a licence, registration or charter from the New York State Department of Financial Services — a bank, insurer, mortgage lender or servicer, money transmitter or virtual currency business — you are a Covered Entity under 23 NYCRR Part 500. That obligation runs alongside anything the SEC or FINRA already expects of you, and it is enforced separately.',
      'Part 500 is also more prescriptive than most federal expectations. The amended rule phased in through 1 November 2025, when the final requirements took effect: multi-factor authentication for any individual accessing any information system unless a documented exception with compensating controls is approved, and written procedures for creating and maintaining an asset inventory.',
      'The part that catches firms is the certification. Each year by 15 April, a Covered Entity files either a certification of material compliance or an acknowledgement of non-compliance with a remediation plan. It is signed by the highest-ranking executive and the CISO, and it must rest on documentation and data showing the controls actually operated — not on a policy binder assembled the week before.',
      'That is a personal signature on an operational claim. It is a very different exercise from an annual review, and it is the reason New York firms need governance that runs continuously rather than governance that is assembled on demand.',
    ],
    sections: [
      {
        heading: 'Where dual regulation actually bites',
        body: [
          'The overlap is rarely a clean subset. SEC and FINRA recordkeeping asks what you retained and whether you can produce it. Part 500 asks whether a specific control was in place, who approved the exceptions, and whether your CISO will sign that it operated. A firm can satisfy one and fail the other.',
          'AI makes the gap wider. An assistant introduced into a workflow creates records under Rule 17a-4 or Advisers Act Rule 204-2, and simultaneously becomes an information system that Part 500 expects to see in your asset inventory, behind MFA, and covered by your written program. Firms tend to solve one half and discover the other during certification season.',
        ],
      },
      {
        heading: 'What we operate for New York firms',
        body: [
          'A single governance program that produces evidence for both regimes: technology asset inventory maintained rather than reconstructed, access and MFA enforcement monitored continuously with exceptions documented and owned, retention aligned to the applicable federal rule, and AI tools inventoried and governed as the information systems they are.',
          'The output is a certification package your CISO can sign with a straight face — control-by-control evidence, dated, with the exceptions and compensating controls written down — plus the exam evidence your federal regulator asks for, drawn from the same underlying program instead of a second parallel effort.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does NYDFS Part 500 apply to my firm if I am an SEC-registered investment adviser in New York?',
        answer:
          'Not by itself. Part 500 applies to entities operating under a licence, registration or charter from NYDFS. SEC registration alone does not make a firm a Covered Entity. Many New York firms do hold a NYDFS licence alongside their federal registration, and it is worth confirming which of your entities are in scope rather than assuming either way.',
      },
      {
        question: 'When is the Part 500 certification due?',
        answer:
          'Annually by 15 April. The filing covers the prior calendar year and is signed by the highest-ranking executive and the CISO. A Covered Entity that cannot certify material compliance files an acknowledgement instead, together with a remediation plan.',
      },
      {
        question: 'What changed on 1 November 2025?',
        answer:
          'The final phase of the amended rule took effect: multi-factor authentication extended to any individual accessing any information system, unless a documented exception approved by the CISO is in place with reasonably equivalent compensating controls, and written procedures for creating and maintaining an asset inventory.',
      },
      {
        question: 'Do you work with firms outside New York City itself?',
        answer:
          'Yes. We serve Manhattan, Westchester, White Plains, Long Island and northern New Jersey. The regulatory picture is the same across the Tri-State area for firms holding New York licences.',
      },
    ],
  },

  // ─── Connecticut ──────────────────────────────────────────────────────────
  {
    slug: 'ai-governance-greenwich-ct',
    label: 'Connecticut',
    name: 'Greenwich, Stamford and Fairfield County',
    addressLocality: 'Greenwich',
    addressRegion: 'CT',
    latitude: 41.0262,
    longitude: -73.6282,
    alsoServing: ['Stamford', 'Westport', 'Darien', 'New Canaan', 'Norwalk'],
    metaTitle: 'AI Governance Greenwich & Stamford CT | Fund Manager Compliance | Centience',
    metaDescription:
      'Technology and AI governance for Connecticut fund managers and advisers. Connecticut safe-harbor-qualifying written programs, institutional due diligence readiness, operated continuously.',
    keywords: [
      'AI governance Greenwich CT',
      'technology governance Stamford',
      'hedge fund cybersecurity Connecticut',
      'Connecticut cybersecurity safe harbor',
      'Public Act 21-119',
      'fund manager compliance Fairfield County',
      'institutional due diligence questionnaire',
    ],
    h1: 'AI and Technology Governance for Connecticut Fund Managers',
    intro:
      'Fairfield County holds one of the densest concentrations of private fund managers anywhere. Their governance pressure comes less from routine examination than from two other directions: institutional allocators, and Connecticut law.',
    hookEyebrow: 'What makes Connecticut different',
    hookHeading: 'Connecticut rewards a written program with a legal shield',
    hookBody: [
      'Connecticut Public Act 21-119, effective 1 October 2021, made the state one of the first to offer a cybersecurity safe harbour. In a data breach action, Connecticut courts may not assess punitive damages against a defendant that created, maintained and complied with a written cybersecurity program containing administrative, technical and physical safeguards, where that program conforms to a recognised industry framework.',
      'The protection is real but bounded, and the boundaries matter. It covers punitive damages only — compensatory damages are untouched. It is unavailable where the failure to implement reasonable controls amounted to gross negligence or wilful or wanton conduct. And it turns on whether the program was actually maintained and complied with, not merely written.',
      'That is an unusually direct alignment between good governance and legal exposure. A framework-conformant program that you can show was operating is worth something concrete in Connecticut that it is not worth in most states.',
    ],
    sections: [
      {
        heading: 'The allocator is the other regulator',
        body: [
          'For a fund manager, the due diligence questionnaire often bites harder than an examination. Pensions, endowments and funds-of-funds now ask about AI usage, model governance, vendor and sub-processor exposure, and incident history — and they ask during fundraising, when the cost of a weak answer is measured in allocations rather than fines.',
          'These questions arrive with a deadline and no opportunity to build. A manager who has an inventory, a scoped policy, retained interaction records and evidence that controls operated answers in days. One who does not spends the diligence window building, and the allocator watches them do it.',
        ],
      },
      {
        heading: 'What we operate for Connecticut managers',
        body: [
          'A written cybersecurity program built to conform to a recognised framework — the qualifying condition under Public Act 21-119 — and then actually operated, with dated evidence that it was, because the safe harbour depends on compliance rather than authorship.',
          'Alongside it: an AI tool inventory covering research, drafting and analysis workflows, controls on what firm and investor data can reach those tools, retention aligned to Advisers Act Rule 204-2, and a standing diligence pack so the next allocator questionnaire is a retrieval exercise rather than a project.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What does the Connecticut safe harbour actually protect against?',
        answer:
          'Punitive damages in data breach litigation, and only those. Compensatory damages remain available to plaintiffs. The protection also does not apply where the failure to implement reasonable cybersecurity controls was the result of gross negligence or wilful or wanton conduct.',
      },
      {
        question: 'Which frameworks qualify?',
        answer:
          'The statute points to recognised industry frameworks rather than naming a single one, and allows the program to be scaled to the size and complexity of the business, the nature of its activities, and the sensitivity of the information held. Which framework fits is a judgement worth making deliberately, since the program has to be one you can operate continuously.',
      },
      {
        question: 'We are a fund manager, not a bank. Does any of this apply?',
        answer:
          'The safe harbour is not industry-specific — it turns on holding personal or restricted information and maintaining a conforming program. For fund managers the more immediate pressure is usually institutional due diligence, which asks many of the same questions without any statutory trigger at all.',
      },
      {
        question: 'Do you cover Stamford and the rest of Fairfield County?',
        answer:
          'Yes. Greenwich, Stamford, Westport, Darien, New Canaan and Norwalk. The Connecticut statutory picture is identical across the county.',
      },
    ],
  },

  // ─── South Florida ────────────────────────────────────────────────────────
  {
    slug: 'ai-governance-miami',
    label: 'South Florida',
    name: 'Miami, Fort Lauderdale and Palm Beach',
    addressLocality: 'Miami',
    addressRegion: 'FL',
    latitude: 25.7617,
    longitude: -80.1918,
    alsoServing: ['Fort Lauderdale', 'West Palm Beach', 'Boca Raton', 'Palm Beach Gardens', 'Coral Gables'],
    metaTitle: 'AI Governance Miami & South Florida | Relocated Fund Compliance | Centience',
    metaDescription:
      'Technology and AI governance for South Florida investment firms and healthcare organizations. Multi-state obligations, retained registrations, HIPAA, operated continuously.',
    keywords: [
      'AI governance Miami',
      'technology governance South Florida',
      'fund manager compliance Miami',
      'HIPAA IT governance Florida',
      'multi-state regulatory compliance',
      'Fort Lauderdale compliance',
      'Palm Beach investment adviser governance',
    ],
    h1: 'AI and Technology Governance for South Florida Firms',
    intro:
      'South Florida gained an unusual concentration of investment firms in a short period, most of which brought their prior obligations with them. Florida imposes no state cybersecurity regime comparable to New York or Connecticut — which is exactly why the picture here is easy to misread.',
    hookEyebrow: 'What makes South Florida different',
    hookHeading: 'Moving the office does not move the obligations',
    hookBody: [
      'A manager who relocated from New York or Connecticut is still an SEC registrant. Federal obligations are indifferent to geography: Advisers Act Rule 204-2, the Marketing Rule and Regulation S-P apply from Miami exactly as they applied from Midtown.',
      'The subtler issue is what the firm kept. Entities are often retained after a move — a New York licence, a subsidiary, a registration nobody revisited. Where a NYDFS licence remains in place, Part 500 remains in place with it, including the annual certification signed by the highest-ranking executive and the CISO. Firms are surprised by this more often than they should be.',
      'The honest position on Florida itself: there is no state analogue adding a second regulator here. What South Florida adds is a firm that has moved, may be operating across state lines, and often has not re-examined which obligations followed it.',
    ],
    sections: [
      {
        heading: 'The other South Florida industry',
        body: [
          'Alongside the funds sits a dense healthcare market — practices, provider groups and the vendors serving them, all handling protected health information under HIPAA. The Security Rule expectations are separate from anything in financial services, and the enforcement pattern has been consistent: risk analysis failures, then breach notification failures.',
          'AI arrived in these organisations the same way it arrived everywhere — inside scheduling, documentation and messaging tools already in use. The recordkeeping and safeguard questions follow it, and the answer for a provider group is different from the answer for an adviser.',
        ],
      },
      {
        heading: 'What we operate for South Florida organizations',
        body: [
          'First, an honest scope: which entities exist, which registrations and licences are live, and which regimes actually apply after the move. That question alone frequently changes what the program needs to cover.',
          'Then one program covering it: AI tool inventory and scoped policy, controls on the data reaching those tools, retention aligned to whichever rule genuinely governs the record, and evidence assembled continuously so a request letter or an allocator questionnaire is a retrieval exercise.',
        ],
      },
    ],
    faqs: [
      {
        question: 'We relocated from New York. Do we still have NYDFS obligations?',
        answer:
          'It depends on whether any entity still holds a NYDFS licence, registration or charter. Part 500 follows the licence, not the office. If a licensed entity was retained through the move, the obligation and its annual 15 April certification travel with it. This is worth confirming entity by entity rather than assuming the move settled it.',
      },
      {
        question: 'Does Florida have a state cybersecurity regulation for advisers?',
        answer:
          'Not one comparable to New York Part 500 or the Connecticut safe harbour. For most South Florida investment firms the binding obligations are federal — Advisers Act recordkeeping, the Marketing Rule and Regulation S-P — plus anything retained from a prior state of domicile.',
      },
      {
        question: 'Do you work with healthcare organizations as well as investment firms?',
        answer:
          'Yes. The HIPAA Security Rule expectations differ from financial services in what must be safeguarded and documented, and we scope those programs separately rather than reusing a financial services template.',
      },
      {
        question: 'Which areas do you cover?',
        answer:
          'Miami, Fort Lauderdale, West Palm Beach, Boca Raton, Palm Beach Gardens and Coral Gables.',
      },
    ],
  },
];

export function getRegion(slug: string): Region | undefined {
  return regions.find((r) => r.slug === slug);
}
