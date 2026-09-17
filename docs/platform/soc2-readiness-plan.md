# SOC 2 Readiness Plan — Centience

**Status:** The decision to pursue SOC 2 was made on 17 September 2026 (§8, decision 1). Scope, timing and tooling remain open.
**Written:** 15 September 2026 · **Updated:** 17 September 2026 with §4a, on what may be claimed publicly before a report exists.
**Companion:** `completeness-gap-list.md` — several items there are prerequisites here and are marked as such.

---

## 1. Why, stated honestly

Aatish at Strac pushed SOC 2 hard and said not pursuing it limits growth tenfold. He sells Strac Comply, so the advice carries a conflict and the Drata comparison he used is evidence about Drata's market rather than about this business.

The real argument is one already being lived.

**Centience is about to be vendor-DDQ'd repeatedly, by Drawbridge specifically.** Abide's clients — Tremblant, Perry Creek, Anthelion — each commission their own Drawbridge assessment of Abide. The moment Centience is the platform inside those firms, Centience is the vendor being assessed. NextReg is a CCO of record whose clients will ask. Merchant is targeting an IPO in roughly three years. Plural arrives through Lisa.

Two months have been spent watching exactly what that cycle costs, from Abide's side of it.

A SOC 2 Type II report is the single most reusable artifact in that market: it answers most of a vendor questionnaire once, for every requester. That is literally the promise on the vendor-due-diligence one-pager. Selling "answer the questionnaire once" while re-answering ours from scratch is a position that does not survive the first buyer who notices.

Two supporting reasons, neither decisive alone:

- The platform now holds materially more than in July — findings, approved baselines, AI usage per user, attestations, and read access into client M365 tenants. Constitution Rule 11 calls that concentration a custodial obligation, and a Type II report is how that obligation is demonstrated rather than asserted.
- `lib/vendors/soc2-reader.ts` already parses other vendors' SOC 2 reports. Requiring what we do not hold is a weak position to be caught in.

**Counter-argument worth keeping visible:** this is a real project competing for the same capacity four channels are waiting on, and accounts-per-governance-engineer is still unmeasured. SOC 2 does not generate revenue; it removes friction from revenue that already exists. If the choice is between the audit and serving the first Abide cohort well, serve the cohort.

---

## 2. What SOC 2 actually is

Worth stating because it is routinely misdescribed, and this audience will notice.

It is **not a certification**. There is no passing grade and no certificate. It is an **attestation report** issued by a licensed CPA firm, expressing an opinion on controls against the AICPA Trust Services Criteria. The deliverable is a report you hand to a buyer, not a badge.

**Type I** covers the *design* of controls at a point in time. **Type II** covers *operating effectiveness over a period*.

**Go Type II.** The entire Centience thesis is that a point-in-time assessment is not evidence a control operated — it is the argument made against Drawbridge, in the service-page FAQs, and in the one-pagers. Producing a Type I and presenting it as assurance would contradict the product in a way a compliance buyer would spot immediately.

A Type I is defensible only as an interim artifact while the Type II observation window runs, and only if described as exactly that.

---

## 3. Scope

**Security (Common Criteria)** is mandatory in every SOC 2.

**Add Confidentiality.** Centience holds client governance findings and control weaknesses — the category is directly on point, and its absence would be the first thing a reviewer asks about.

**Add Availability only if uptime commitments are being made contractually.** If the managed tiers promise availability, include it; if not, it adds scope for no sales benefit.

**Leave Privacy out** unless a client requires it. It carries the heaviest evidence burden of the five and the buyers in question are asking about security and confidentiality.

**Leave Processing Integrity out.** It is aimed at transaction processing and does not describe this system.

Each added category expands cost and evidence volume. Two categories is a defensible, complete-looking scope for a firm this size.

---

## 4. Timeline

The observation window is the long pole and it cannot be compressed by spending money.

| Phase | What happens | Duration |
|---|---|---|
| Readiness | Gap assessment, policies written, controls implemented, tooling selected | 6–10 weeks |
| Remediation | Close what the gap assessment found | 4–8 weeks, overlapping |
| **Observation window** | Controls operate and evidence accumulates | **3 months minimum** for a first Type II |
| Fieldwork | Auditor tests samples from the window | 3–5 weeks |
| Report | Issued | 2–4 weeks |

**Realistically 6–9 months from a standing start to a report in hand.** A first Type II commonly uses a 3-month window; subsequent reports move to 6 or 12 months for continuous coverage.

The practical consequence: if a report is wanted for the 2027 selling season, readiness starts now, not in January.

---

## 4a. What can be said on the website, and when

The stated reason for pursuing this is to put it on the website. §4 says a Type II report is realistically 6–9 months out, so the website question needs an answer for the interim — and getting that answer wrong costs more here than it would at most companies.

**Why the wording matters more for us than for others.** The entire product argument is that a claim without a record behind it is not evidence. A SOC 2 claim with no report is precisely the failure mode we sell against, made by us, on our own front page. The first sophisticated buyer asks for the report; if there is none, we have demonstrated the opposite of the pitch. And the audience knows exactly what the words mean — NextReg sits as CCO of record, Abide's clients commission Drawbridge assessments, and Plural's team reads vendor questionnaires for a living.

**Not available at any stage:**

- Any badge or seal. There is no SOC 2 badge, because there is no certification (§2).
- **"SOC 2 certified."** The thing does not exist and saying it marks us as not knowing the category.
- **"SOC 2 compliant."** Technically meaningless and read as a claim that a report exists.

**Available as each becomes true, in order:**

| Stage | Claim | When it becomes true |
|---|---|---|
| 0 | Say nothing | Now |
| 1 | "SOC 2 Type II readiness underway" | A gap assessment is actually commissioned — not when it is planned |
| 2 | **"SOC 2 Type II observation window in progress; report expected [quarter]"** | The window opens |
| 3 | "SOC 2 Type II report available under NDA" | The report is issued |

**The commercially important milestone is stage 2, not stage 3.** Most vendor questionnaires ask whether a SOC 2 is held with a yes / no / in-progress answer, and for a firm our size "in progress, report expected Q_" scores close to a yes — a reviewer can diarise a date. The benefit therefore arrives when the observation window *opens*, not when the report lands, which argues for opening the window as early as a defensible control set allows rather than polishing readiness first.

**Where it belongs when true:** the trust or security page, the vendor due-diligence one-pager, and the footer. Not a homepage badge — badges are what companies without reports use.

Until stage 1 is genuinely true, the honest and still useful thing to publish is what we already do: control testing, evidence retention, tenant segregation, encryption at rest, sub-processor list. That answers most of what a SOC 2 question is actually asking, and it can go up now.

---

## 5. What the auditor will ask for

Grouped by whether the platform already produces it. This is the part where being your own first customer pays.

### Already evidenced by the platform

- Control testing against a live environment, with timestamped results in `enforcement_results`
- Scheduled re-testing via `/api/cron/rescan` — directly relevant to operating-effectiveness sampling
- Access and MFA enforcement checks (EC-001, EC-003 and the identity set)
- Retention configuration testing
- Vendor register and third-party tracking, plus `soc2-reader` for sub-processor reports
- Attestation collection with external token signing
- Policy and WSP generation with version history
- Incident workflow including the Reg S-P clock
- Encryption at rest — `encryptForStorage` now fails closed in production

### Needs building, and already on the completeness list

- **Evidence export** — `completeness-gap-list.md` §5. The auditor will sample evidence; an export path makes that a retrieval rather than a screenshot exercise
- **Audit log breadth** — §6. Privileged action logging with actor, timestamp and target across the admin surface. CC6 and CC7 depend on it
- **Finding lifecycle with acceptance and expiry** — §1. Risk acceptance with a named owner and review date is a control the auditor will look for by name
- **Green test suite** — §6. Once change management is in scope, "tests pass" becomes an auditable assertion

### Needs building, not otherwise on the roadmap

- **Formal policy set** — information security, access control, change management, incident response, vendor management, business continuity and disaster recovery, SDLC, acceptable use, onboarding and offboarding
- **Annual risk assessment**, documented, with treatment decisions
- **Access reviews of our own systems** on a stated cadence, with records
- **Onboarding and offboarding checklists** with evidence per person
- **Security awareness training** with completion records
- **Background checks** on staff, or a documented decision not to and why
- **Change management evidence** — PR review and approval records. 81 merged pull requests is a strong existing trail; formalise the approval requirement
- **Vulnerability management** with a remediation SLA by severity
- **Backup and restore testing** with records of restores actually performed
- **Business continuity and disaster recovery plan**, tested at least annually
- **Penetration test** — commonly expected by both auditors and buyers; budget for one before fieldwork
- **Sub-processor register and DPAs** — Supabase, Vercel, Anthropic, Resend, HubSpot, Strac, and anything the adoption module reaches

---

## 6. The move worth making: be the first customer

Centience already tests controls, records findings with owner and citation, manages vendors, collects attestations and rescans on a schedule. That is a substantial share of what a compliance automation platform does.

Running Centience's own SOC 2 **on Centience** does four things at once:

1. Produces the audit evidence as a by-product of operating
2. Forces the multi-tenant, export and audit-log gaps into the open under real pressure rather than in a planning document
3. Yields the most credible case study available — *we passed SOC 2 Type II on our own platform* — which no competitor can answer cheaply
4. Serves Rule 9 directly: SOC 2 readiness becomes a governance domain that can be sold afterward, which is breadth rather than labour depth

**Two constraints that are not negotiable.**

**Rule 4 still binds.** The CPA firm is the independent assessor. The platform supplies evidence; it never attests. Nothing in any material may imply Centience audits itself.

**Raise the self-produced-evidence question with the auditor at selection, not during fieldwork.** An auditor may reasonably probe evidence generated by a tool the auditee builds and sells. It is manageable — auditors accept output from Vanta and Drata routinely — but the answer is easier to give in a scoping call than in a finding.

---

## 7. Build, buy, or self-host the tooling

Three options, and the honest comparison:

**Buy a compliance automation platform** (Vanta, Drata, Secureframe and similar). Fastest path, well-understood by auditors, integrations already built. Costs a recurring subscription and means paying for a category we claim to be in.

**Strac Comply.** Aatish is pushing it and there is an existing commercial relationship. He has an obvious interest in the recommendation, and it should be evaluated against the established platforms on evidence coverage and auditor familiarity rather than on the relationship.

**Use Centience.** Strategically the strongest and operationally the slowest, because the gaps in §5 have to be built first. The realistic answer is probably **both** — a bought platform for the corporate-IT evidence that Centience does not model, with Centience carrying the control testing and evidence it already produces. That is also an honest demonstration of the boundary the company argues for everywhere else: we govern technology, we are not the system of record for everything.

**Get two quotes** — an automation platform and a CPA firm — before committing to a number. I am not going to estimate a figure I cannot source, and both vary considerably by scope and firm.

---

## 8. Decisions needed before anything starts

| # | Decision | Owner |
|---|---|---|
| ~~1~~ | ~~Whether to pursue this at all~~ **DECIDED, 17 September 2026 — yes, pursue it, in order to state it on the website.** Residual: confirm Type II as the target, with Type I only as a described interim | Orville |
| 2 | Scope: Security + Confidentiality, and whether Availability is in | Orville |
| 3 | Observation window length and start date — which determines report availability | Orville |
| 4 | Tooling: bought platform, Centience, or both | Orville |
| 5 | Auditor selected, and the self-produced-evidence question raised in scoping | Orville |
| 6 | Whether this competes with the first Abide cohort for capacity, and which wins | Orville |
| 7 | Observation window **start** date, tracked separately from the report date — it is the milestone that unlocks the website claim and the questionnaire answer (§4a) | Orville |

Decision 6 is the real one. The rest are execution.

**Sequencing note following the 17 September decision.** Because the commercial benefit arrives when the observation window opens rather than when the report is issued (§4a), the readiness phase should be scoped to the minimum defensible control set and the window opened early, rather than extended until readiness is complete. Everything not ready at window open can be remediated during it; findings mid-window are normal and are described in the report, whereas a window that has not started cannot be described at all.

---

## 9. What I would actually do

Start readiness now and keep it narrow: **Security and Confidentiality, three-month window, a bought platform for corporate-IT evidence, Centience for control testing.**

Sequence the completeness items that are also SOC 2 prerequisites first — evidence export, audit log breadth, finding lifecycle — because they are needed for the product regardless, and doing them before the window opens means the audit evidence accumulates from day one instead of being reconstructed afterward.

Which is the argument this platform makes to every one of its own customers. It would be strange to be the one company that did not take it.
