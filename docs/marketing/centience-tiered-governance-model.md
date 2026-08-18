# Centience Tiered Governance Model — Working Document

**Status:** Working draft. Open questions are marked **[OPEN]** and should be resolved before anything is quoted or built.
**Owner:** Orville Matias
**Started:** August 2026 · **Reconciled** against *What Centience Should Be* (strategy memo, August 2026)
**Governing documents, in order:** `centience-constitution.md` → *What Centience Should Be* (the $50M ARR strategy memo) → this document.
Where they disagree, **the higher document wins.** This one carries operating detail beneath both.
**Companion docs:** `centience-platform-standalone-review.md` (July 2026 code review) · `centience-2028-growth-plan.md` · `HANDOFF.md`

**What this is:** the operating detail for selling platform-plus-professional governance, the Abide channel that prompted it, and the product and commercial work it implies. It is not a plan of record — the pricing section is deliberately unfinished pending facts we do not have.

**Decisions recorded so far:** remediation delivered by Compuwork under a Centience contract, and willingness in principle to hold platform write scopes — both in §10.1, both with their consequences worked through in §10.

**Reconciliation note (August 2026).** Two things in earlier drafts of this document were wrong and have been corrected against the memo. Managed IT is no longer a Centience tier — it is a separate Compuwork purchase (§3.2). And the account-type flag needs four values rather than two, because the do-not-compete-with-your-channel rule applies to MSP partners as much as to compliance partners (§6.2, §7). A new §9 replaces the old capacity section with the memo's ARR-per-governance-engineer framing and the arithmetic it implies.

---

## 1. Where this came from

Two things converged.

**Drawbridge shows up constantly in Abide's client base.** Compuwork and Centience have spent years implementing the technology those clients need to pass Drawbridge assessments.

**Pete at Abide said they want to stop referring business to Drawbridge.** Orville proposed Centience's platform instead. Abide is interested.

That makes an existing referral relationship available for substitution, with a partner who already has the clients and the trust.

---

## 2. Read on Drawbridge

Sourced from their public site and press, August 2026.

| | |
|---|---|
| Founded | 2018 |
| Long Ridge Equity Partners | minority investment, March 2021 |
| Francisco Partners | growth investment, September 2022; Long Ridge retained equity |
| Scale | 300+ alternative investment funds, $800B+ AUM |
| Positioning | *"Pure Cyber. No Distractions."* |

**Their own words:** *"Unlike traditional MSPs or IT providers, Drawbridge is 100% focused on cybersecurity."*

**What they sell:** cyber assessment, analysis, scoring, peer benchmarking, remediation *planning*, reporting, regulatory readiness, PE portfolio analytics and company tracking, vulnerability scanning, cloud assessment, vendor risk assessment, AI Risk Intelligence. Plus training, policy authoring, penetration testing, tabletop exercises.

**What they explicitly do not do:** manage client infrastructure, endpoints, identity, or backups.

**No published partner or referral program.** Cuts both ways — nothing to slot into, but no incumbent occupying the position either.

### 2.1 The structural opening

Drawbridge scores and writes the finding. Somebody else has to cure it. For years that somebody has been us, without being in their referral flow.

Pete's motivation is almost certainly not that the assessment is bad. It is that the assessment happens, the client gets a report and a bill, and the gaps persist into the next exam cycle — while Abide still owns the relationship friction. **Abide does not want a better assessment. They want the problem to go away.** That is the loop we close and Drawbridge has publicly committed to not closing.

Sell that, not a feature comparison.

### 2.2 Where Drawbridge is structurally stronger

Their moat is not the software. It is that **they are an independent third party with 300 funds behind the benchmark.**

If we implement the controls *and* produce the score, that is a self-assessment. An LP asking "who independently assessed you?" or an examiner testing governance may discount a score from the firm that built the thing being scored.

**Implications, and these are firm:**
- Do not promise peer benchmarking. Benchmarking against a handful of clients is not a benchmark, and overclaiming here is the fastest way to lose Abide rather than win them.
- Do not fight for the third-party-attestation slot. If a client's LPs want independent attestation, that is a separate engagement with somebody else.
- Position as: **Centience operates and evidences.** Independence is not our claim.

### 2.3 The one place they encroach

**AI Risk Intelligence.** Their own solutions page files it under assessment, alongside Cyber Scoring and Vendor Risk — not under implementation. So the shape holds: they score AI risk, somebody still has to inventory shadow AI, set retention, and operate controls.

The risk is not that they take the work. It is that they take **the narrative**, because they are in the room with 300 funds and their sales conversation now contains the phrase "AI governance."

---

## 3. The model

### 3.1 Copy the thing that makes Drawbridge's pricing work

Drawbridge sells platform access **bundled with a cybersecurity compliance professional** who explains what is wrong and follows up until it is either cured or formally marked deficient.

They do not sell software. They sell a person with a dashboard behind them. That is why they can charge what they charge, and why self-serve governance tools struggle. **A named human is in every tier. This is not negotiable in the design.**

### 3.2 Two Centience offers — and managed IT is not one of them

**Corrected against the memo, §4.** An earlier draft here had a third tier, "Managed Governance," in which Centience took over the whole stack. That was wrong, and the memo's position is stronger.

| Offer | What Centience does | Who operates IT | Commercial role |
|---|---|---|---|
| **Governance** | Platform + named governance engineer; testing, findings, ownership, evidence, exceptions, reporting | Client IT or existing MSP | Core recurring Centience product |
| **Governance + Enforcement** | The above, plus authority to implement defined control domains | Client IT or existing MSP **remains in place** | Higher-value Centience expansion |
| *Managed IT* | *Not a Centience offer* | Compuwork | **Separate Compuwork purchase** |

**Why this matters more than it looks.** If Centience culminates in becoming the customer's MSP, then Centience is an MSP lead-generation motion wearing a platform costume, and it cannot be sold to the ~1,300 organisations the $50M shape requires — because most of them will never fire their incumbent. Centience has to be commercially viable when Compuwork never wins the account.

It also makes Governance + Enforcement the genuinely differentiated product: the customer keeps their MSP, and Centience governs and enforces specific technical domains. That is a cleaner category than "another assessment" and a more scalable identity than "eventually replace your MSP."

The customer's existing IT or MSP keeps support and overall operations in both offers. We are not asking anyone to rip out an incumbent, ever — not as a first purchase and not at renewal under the Centience brand.

### 3.3 Why land-and-expand is the right shape

- **It removes the biggest objection in MSP displacement.** Nobody fires an incumbent MSP as a first transaction. By not asking, we get in at low friction.
- **It matches what the platform already is.** One-user-one-org, per-tenant M365 credentials, self-serve onboarding. The product is built for "customer logs into their own org," not "Centience operates from a console." We would be selling what exists.
- **It makes the expansion case itself.** The dashboard documents what the incumbent is not doing. We do not argue for the takeover; the evidence trail argues it.
- **It collapses the Phase B problem.** If the client's own IT can be a user, then Ninja / Halo / Keeper / Dropsuite sitting on Centience-owned accounts stops being a gap — gate them as managed-only (small) rather than refactoring to per-org credentials (large).

### 3.4 The sharp edge

**We are handing the incumbent MSP a scoreboard of their own failures.**

Two outcomes. They quietly fix the findings themselves — we did free consulting and lost both the add-on and the expansion case. Or, more likely from a threatened incumbent, they attack the tool's credibility to the client: *"these findings aren't applicable, Centience is drumming up work."*

**The Constitution's Rule 8 gives a better answer than this defensive one.** Citation stops an incumbent dismissing a finding, but Rule 8 goes further: a *good* MSP should be able to use Centience **to prove their own responsibilities are being met.** That flips the incentive from adversarial to aligned — the scoreboard becomes their evidence rather than only their indictment.

Product consequence worth building: an operator-facing view showing what they have **cured and kept verified**, not only what is outstanding. A competent MSP then has a reason to want Centience in the account, and the ones who fight it are self-selecting.

Citation still matters, for the incumbents who are not good. They win the argument if findings read as opinion; they cannot touch it if every finding cites the obligation and the client's own policy:

> MFA not enforced on 12 accounts · Advisers Act 204-2 · your WSP §4.2

**This makes citation-per-finding a hard product requirement, not a nice-to-have.** See §6.

---

## 4. The four-party responsibility model

Responsibility needs named roles for the firm itself, their IT or MSP, the compliance consultant (Abide), and Centience.

**Note the fifth ecosystem role.** The memo's boundary table (§2) also names an **independent assessor**, who owns attestation and independent review where required. That party does not own findings — so finding ownership stays four-valued plus accepted-risk — but it exists in the ecosystem and it is the role Centience explicitly must not claim (§2.2, and the memo's §10: never "a self-declared independent assessor of controls it implemented"). Where independence is required, that assessor **consumes** Centience evidence rather than competing with it. That is a distribution channel, not a lost sale.

The consequence: **some findings can never be cured by anyone we are selling to.** "Annual supervisory review not documented" is a CCO task. "Staff attestation not collected" belongs to the firm. Those are not IT gaps and not ours — but they sit red on the dashboard, and a Governance client's IT will reasonably say "half of this isn't mine."

**Required:** owner field with at least four values, and dashboard filtering by owner.

Without it, Governance clients experience the product as a list of complaints rather than a work plan, and the renewal conversation starts from defence. With it, the upgrade sells itself honestly:

> Of these 40 findings, 12 are yours, 8 are Abide's, 20 need someone with write access to your tenant — that's the enforcement add-on.

---

## 5. Pricing

### 5.1 Two facts needed first — **[OPEN]**

**What Drawbridge actually charges**, by firm size. **What Abide was earning on those referrals.**

Pete has both. Abide has referred to Drawbridge for years, so he knows the price points and his own referral economics. One conversation.

Do not set a base fee before we have this. Half of Drawbridge leaves money on the table and signals budget option; double loses the substitution argument. **No invented anchors in this document.**

### 5.2 Recommended structure

Not three flat prices — a base plus two defined expansions.

**Base — platform access plus the named professional.** Recurring, priced by firm profile. This is the line that competes with Drawbridge, and **it must be profitable standalone**, because a real share of clients will never upgrade. If it is a loss-leader we are running a services business with a software cost centre.

**Enforcement — a defined add-on, priced by scope.** Not hourly. Hourly caps margin at labour cost, invites line-item haggling, and punishes efficiency. Price as "we own these control domains," with a scope statement.

**Full management — standard MSP pricing on top,** per seat or per device, as Compuwork already sells.

Advantage: the base is never renegotiated as the account expands. We add lines rather than redoing the deal, which avoids a discount conversation every time we grow.

### 5.3 Who this is priced for

Per the memo (§5), the beachhead is **alternative investment managers and investment advisers, roughly 10–150 employees** — hedge funds, PE firms, RIAs, and family offices where the governance profile fits. Not "regulated industries," which is the long-term market and would create framework sprawl if attempted at launch.

Three reasons this is the right first market, and the third is why the Abide conversation matters: the buyer is **already educated by Drawbridge** so we are not funding category creation, Compuwork has real implementation experience in these environments, and Abide is a trusted distribution path into exactly this population.

Expansion only once delivery is repeatable: investment management → accounting / legal / insurance → additional regulated verticals.

### 5.3a The expansion ladder is domains, not labour

**Constitution, Rule 9:** ACV growth should come from governance breadth before labour depth — additional domains (cyber, AI, data, infrastructure, third-party, resilience) rather than more remediation hours.

That reorders what earlier drafts here assumed. The ladder is **not** Governance → Enforcement. It is:

> one domain → additional domains → enforcement where explicitly authorised

Enforcement is a capability layered on top, not the next rung. Two consequences:

- Pricing should be **per governed domain**, with enforcement as a separate authorisation per domain rather than an account-level upsell.
- The memo's illustrative book splits 600 Governance / 600 Governance + Enforcement. Under Rule 9 the more useful cut is **by domain count**, since that is the lever we intend to pull. Flagged rather than changed here, as that table belongs to the memo.

Domain expansion is also the answer to §9's margin problem: a second domain on an existing account reuses the connection, the tenant knowledge and the relationship. That is close to pure leverage, which is exactly what Rule 10 asks for.

### 5.4 Scaling variable

**Headcount band × registration type.** Not AUM.

AUM is what alts firms are used to quoting, but it swings, it is awkward for accounting and law clients, and it does not track our cost. Our cost is driven by how many accounts and endpoints need review and how many rule sets we evidence against. A 12-person RIA and a 200-person dual registrant are genuinely different amounts of work, and registration type determines whether we are evidencing 204-2, 17a-4, or both.

Also easier to defend in negotiation — the client can see what drives it.

### 5.5 Abide channel economics — **[OPEN]**

- Percentage of first-year revenue on **services**, consistent with the Jeneca structure.
- **No perpetual revenue share on the platform base.** That is the software margin the 2028 plan rests on.
- Floor is set by whatever Drawbridge was paying them — see §5.1.

### 5.6 What must be bounded in the Governance offer

**Argument is the unbounded cost.** An incumbent IT team that disputes every finding will consume the governance engineer's time without limit, and Governance has the thinnest margin.

Define what is included — quarterly review, monthly triage, a stated number of hours — and what is billable beyond it.

---

## 6. Product requirements this model creates

### 6.1 Blocking before any client sees the app

**De-mock `/connectors`.** As of the July review the page displayed fabricated "connected" states with fake sync timestamps for AWS, Salesforce, Strac and others; only M365 had a live connect form. Under this model that is shown to **paying regulated clients**, not just demo prospects. A false status representation in a compliance product, from the vendor hired to detect exactly that, is not a cosmetic bug. Wire real per-org status from `connector_credentials`; expose the Google connect UI (backend exists).

**Set `CREDENTIAL_ENCRYPTION_KEY` in Vercel** and backfill-encrypt anything stored plaintext. The July review found the key unset, meaning client M365 credentials may be at rest in plaintext. Same failure mode as the hCaptcha fail-open fixed in centience-nextjs #33 — a security control silently disabled by a missing env var. **Non-negotiable before one client tenant connects.** Orville to confirm; not visible from a coding session.

**Rewrite remediation copy for a customer audience.** Findings currently read like *"Log into Dropsuite and investigate the failed backup job"* — written for a Centience technician. If the customer and their IT are reading the dashboard, they see instructions addressed to someone else, referencing tooling they cannot access. It reads as our internal ticket queue and exposes our operational stack to every client. Branch on managed vs. standalone.

### 6.2 The feature family that makes this model work

All three are the same thing: **findings become a governed, attributed work queue.** Build this and the model works; skip it and it backfires by month three.

**Assignable owner per finding** — firm / client IT or MSP / compliance consultant / Centience, plus accepted-risk. Today failing checks sync to HaloPSA as *Centience* tickets, which assumes we own every fix.

**Citation on every finding** — the rule and the client's own policy clause. This is what an incumbent MSP cannot argue with. See §3.4.

**Exception workflow with named owner and expiry date.** Two purposes.

*Liability:* we are giving a regulated firm a durable, timestamped record of which controls were failing and when. While actively remediating, that is the best evidence artifact they could own. But a client who sits on a red finding for eighteen months has a discoverable record of knowing and not curing — we would have built the thing an examiner most wants to find. A deliberate acceptance with rationale and review date looks like governance; a red light with no decision record looks like neglect. Same facts.

*Channel:* it lets an incumbent MSP formally push back on a finding in a way that gets recorded rather than argued — their disagreement becomes part of the evidence trail with their name on it.

**Account-type flag — four values, not two.** An earlier draft scoped this as Abide-referred versus direct. The memo generalises it correctly: **direct, compliance-partner, MSP-partner, Compuwork-linked**, each with different role boundaries. The rule about not competing with the party who brought you the account applies to MSP partners just as much as to compliance firms — an MSP will only let Centience govern underneath it if Centience visibly is not trying to replace it. Convention is not enough here; conventions erode the first time somebody is short of quota.

### 6.3 Framing the first login

Day one a client sees a wall of red. That is the pitch and the risk on one screen — some will panic, some will conclude we are manufacturing work. Needs explicit baseline-versus-target framing, and a split between in-scope for the engagement and informational.

### 6.4 Deprioritised

**Multi-tenant operator console** (the XL item in the July punch list). Earlier assessment was that a channel deal made this urgent. **That was over-weighted.** If the customer's login is for visibility and Centience works through its own tooling, plus the existing MCP server and per-org API keys for programmatic access, staff do not need to be inside a customer org. It is a convenience for our team, not a gate on the Abide cohort. Revisit at scale.

### 6.5 Platform state as of July 2026 — **[OPEN: verify, one month stale]**

**Real:** enforcement engine with live Graph calls (Secure Score, Conditional Access, Security Defaults, Purview retention) and live Dropsuite calls, results persisted and timestamped · DLP classifier, 27 entity types, unit-tested · WSP generation and PDF exports · incident and Reg S-P 30-day clock · evidence vault · MCP server with per-org API-key auth · API-key management · team invites · self-serve onboarding · per-org RLS on 14 tables · 31 tests passing.

**Partial or stubbed:** only 9 of 13 enforcement checks execute (EC-002 Teams archiving, EC-006 six-year S3 retention, EC-008 annual supervisory testing, EC-009 encryption at rest are metadata only) · `/cloud` and `/alerts` are mock · `ai_governance` table has no migration · no scheduled re-scanning, checks are on-demand only · no billing.

**"Continuous monitoring" is not literally true yet.** Scope the pitch to what runs.

---

## 7. Channel conflict — the item most likely to kill this

**Two things we would sell overlap directly with what Abide sells.**

The platform generates WSPs and policies — a compliance consultancy's billable work. And "a cybersecurity compliance professional who explains what's wrong" is, in an Abide account, *Abide's role*.

Walk into an Abide-referred client with policy generation and a compliance advisor and we have competed with the firm that referred us. The referrals stop quietly and nobody tells us why.

### The fix is role definition

**In Abide accounts, our named person is a governance engineer, not a compliance consultant.** They translate a control finding into a technical task, drive it to closure, produce the evidence. Abide owns regulatory interpretation, the WSP, and the exam relationship. Platform policy generation is positioned as *drafts for Abide to review*, or switched off in those accounts.

**In direct accounts,** sell the full compliance-professional role — no partner to displace.

Enforced by the account-type flag in §6.2.

### Compuwork is the obvious attack

We are positioning as a neutral governance layer while owning a competing MSP. A sharp incumbent will say so in the first meeting.

Do not hide the structure. Disclose it and make it a credibility point:

> Yes, we also run managed services. That's exactly why every finding cites the rule rather than our judgment — verify any of them independently.

Disclosure disarms it. Being caught not disclosing it does not.

---

## 8. Contract and legal

**Duty-to-remediate boundary, in writing, before the first Governance client.** If the platform flagged a deficiency, the client's MSP was supposed to fix it, nobody did, and there is an incident — we are the party holding timestamped proof that everyone knew, and we will be in discovery. Platform access is assessment and evidence, **not an obligation to cure**; remediation responsibility sits with whoever holds it. Cheap now, expensive later.

**Abide referral-fee conflict — [OPEN].** If Abide is a compliance consultancy serving RIAs, compensation for vendor referrals may be a conflict their clients must be told about. Same shape as the AICPA independence problem on CPA referrals. Raise it with Pete before money moves — better from us than from someone's examiner.

---

## 9. The economics that decide whether this reaches $50M

Every offer includes a human. Commercially useful, economically dangerous — the memo (§8) names the metric to obsess over as **ARR per governance engineer**, with a design target of **$1M+**.

### 9.1 What the memo's own numbers imply

The illustrative mature book is 1,300 accounts at $50M. Against a $1M-per-engineer target:

| | |
|---|---|
| Governance engineers at maturity | **~50** |
| Average accounts per engineer | **~26** |

Twenty-six is just above the top of the 15–25 range estimated in conversation. **The plan is reachable, but with no margin.**

### 9.2 The structural trap inside it

**Governance + Enforcement pays roughly 1.8× more but must not consume 1.8× more governance-engineer time.**

If enforcement work lands on the same senior person who runs the testing and assembles the evidence, it will consume more — and the ratio degrades exactly where the ACV improves. The arithmetic is unforgiving:

- $45K ACV × 12 accounts per engineer = **$540K per engineer** — well under target, despite a healthy-looking ACV
- $45K ACV × 22 accounts per engineer = **$990K per engineer** — on target

The difference between those two rows is not pricing. It is who does the fixing.

### 9.3 The delivery-model decision this forces

**The governance engineer must not be the one doing the remediation.** They specify the fix, assign it, and verify it. Execution routes to Compuwork's technician pool at a lower cost basis.

Get this right and Enforcement's higher ACV flows through to ARR-per-governance-engineer. Get it wrong and Enforcement revenue is absorbed by senior labour, and Centience becomes a consulting firm with good software — the memo's §8 warning, arriving through the delivery model rather than through pricing.

This is decidable now, and it should be decided **before the first Abide accounts are staffed**, because how those accounts get delivered will become the template whether or not anyone chooses it deliberately.

**Decided — see §10.1.** Compuwork technicians execute; Centience holds the contract.

### 9.4 What to measure — **[OPEN]**

Per the memo's §12, by tier:
- Accounts per governance engineer at Governance, sustained without service degradation
- Accounts per governance engineer at Governance + Enforcement, **with enforcement labour excluded** — that exclusion is the whole point of §9.3
- Hours per account per year at each, split into judgment work versus repetitive evidence work. The second number is the automation backlog.

**Intake pace follows this number, not the size of Pete's book.** A twenty-client cohort is most of one engineer's capacity at Governance if 26 holds, and more than one if it does not.

---

## 10. Enforcement architecture — how the software holds a fix in place

### 10.1 Decisions recorded

**Remediation delivery sits with Compuwork. The contract stays with Centience.** Resolves open question 8.

Compuwork technicians execute; the governance engineer specifies, assigns and verifies. This is what makes the §9.2 arithmetic work — Enforcement's higher ACV flows through to ARR-per-governance-engineer instead of being absorbed by senior labour.

The distinction matters and is easy to lose: **delivered by Compuwork, not bought from Compuwork.** If the client purchases remediation from Compuwork directly, we have reintroduced the dependency the memo forbids in §2 — Centience must not depend on who operates the environment — and Enforcement silently becomes available only to the Compuwork base. One vendor, one scope statement, one invoice, from Centience.

**Clients who will not have Compuwork in their environment:** their own accountable operator executes against Centience's written specification. See §10.1a — under Constitution Rule 2 this is the default rather than a fallback, and it is why Enforcement does not cap out at the existing managed base.

**Write scopes: yes, in principle, sequenced.** We are willing to ask non-Compuwork clients for write access rather than restricting Enforcement to Compuwork's existing admin access indefinitely — but only under the constraints in §10.4, and only after §10.5 is satisfied.

> **Provenance note.** This second decision was confirmed as a one-word "yes" to a question that also asked whether to write up this section. Recorded here so it is visible and correctable rather than buried. If the intent was Compuwork-access-only enforcement, §10.4 becomes deferred rather than sequenced, and nothing else in this section changes.

### 10.1a Reconciling the delivery decision with Constitution Rule 2

Rule 2 says the **accountable IT operator** executes remediation whenever practical — Compuwork for Compuwork clients, an MSP partner for partner-led accounts, internal IT for internally managed environments.

At first read that conflicts with §10.1. It does not, and the reconciliation is worth stating because it makes the model cleaner than the version in §10.1:

**§10.1 is a special case of Rule 2, not an exception to it.** Compuwork executes for Compuwork clients *because Compuwork is the accountable operator there* — not because Centience subcontracted to it. In a partner-led account the MSP partner executes. In an internally managed environment internal IT executes. **Centience never becomes the executor.**

Two consequences, both good:

**Open question 13 is largely answered.** There is no need for a Centience-arranged fallback executor for clients who refuse Compuwork — their own accountable operator executes, which is the Rule 2 default. The Constitution's "or a lower-cost execution layer" leaves room for a Centience-arranged option, but it is the alternative, not the design.

**The §9.2 arithmetic gets easier, not harder.** Earlier framing treated Compuwork as a lower-cost execution layer beneath a Centience Enforcement offer — labour arbitrage. Under Rule 2 there is no remediation labour on Centience's books to keep off a governance engineer's plate, because it was never Centience's work. What the client pays the Enforcement premium for is:

- **Write authority and automated re-assertion** of approved baselines (Rule 7, and §10.3 Layer 3)
- **Remediation specification** precise enough that the operator can execute without interpreting
- **Cycle time** — drift caught and corrected on a schedule rather than at the next assessment

All three are leverage rather than hours, which is what Rule 9 and Rule 10 ask for. The premium is a governance premium, not a marked-up labour rate.

**Terminology this forces.** *Remediation* is the first-time human fix and belongs to the accountable operator. *Enforcement* is automated maintenance of an already-approved state and belongs to the platform. Rules 2 and 7 only look contradictory if those two words are used interchangeably — so they should not be, anywhere in the product or a contract.

### 10.2 The finding lifecycle

"Enforce once corrected" is a state-machine question. The states we need:

| State | Meaning |
|---|---|
| `open` | Detected, failing, unassigned |
| `assigned` | Owner set — firm / client IT or MSP / compliance partner / Centience |
| `in_remediation` | Work underway |
| `awaiting_verification` | Someone asserts it is fixed; not yet re-tested |
| `verified` | Re-test passed, evidence and configuration captured, timestamped |
| `drifted` | Was verified, now failing again — **the state this section exists for** |
| `accepted_risk` | Exception with named owner, rationale and expiry (§6.2) |
| `not_applicable` | The control does not apply to this environment; rationale and approval recorded |

`awaiting_verification` must be distinct from `verified`. A client's IT saying "done" is a claim; the re-test is the evidence. Collapsing the two is how a dashboard ends up green while the control is failing, which is the exact failure we are hired to prevent.

`not_applicable` is required and was missing from earlier drafts here. Without it a control that genuinely does not apply either sits `open` forever as permanent noise, or gets filed as `accepted_risk` — which asserts the firm accepted a risk when there was no risk to accept. That is a misstatement in an evidence record, and it needs rationale and approval for exactly that reason (Constitution, finding-state standard).

`drifted` must be distinct from `open`. A control that was verified and regressed is a different governance event from one never fixed — it implies a change-management gap rather than a backlog, and an examiner reads them differently.

### 10.3 Three layers, the first two needing no write access

**Layer 1 — Continuous verification.** Checks are currently on-demand only (July review), so a control verified in March is just an old timestamp by September. A scheduled re-run writing to `enforcement_results` makes "continuous governance" literally true, makes the red-turning-green dashboard trustworthy, and raises a drift event on any `verified` → failing transition.

Cheapest item here, highest value, and a hard prerequisite for everything below. Nothing else in this section works without it.

**Layer 2 — Approved-baseline snapshots.** On verification, capture the *observed configuration* — which Conditional Access policies, which retention labels, which exclusion groups — not merely a pass. Re-tests then compare against the approved baseline rather than against pass/fail.

This catches the case a naive check misses: someone adds an exclusion group to a CA policy and it still passes. Baseline comparison sees it. That is precisely the drift an examiner cares about and that a point-in-time assessment cannot detect — a capability Drawbridge structurally does not have, since they do not hold a continuous baseline.

Still no write access. Layers 1 and 2 are the differentiated product.

**Layer 3 — Enforcement as re-assertion.** The framing that makes write access sellable: **do not ask for the right to configure a client's tenant. Ask for the right to restore a setting they already approved, when it drifts.**

"Restore the approved baseline on drift" is a far smaller capability than "make arbitrary changes," with a proportionally smaller blast radius. It is also exactly what enforce-once-corrected means, it is straightforward to write into a scope statement, and it is much easier to obtain consent for.

**Layer 3a — the free path, available now.** For Compuwork-managed clients, Compuwork already holds admin access. Re-assertion can execute through that existing access rather than through Centience platform credentials — no new consent, no new scopes, no new trust ask.

Consequence of the §10.1 delivery decision: **Layer 3 ships to the managed base immediately, and the platform-credential version waits until a non-Compuwork client demands it.** Build order follows from that.

### 10.4 Constraints on platform-held write access

Non-negotiable if and when we hold write credentials ourselves:

- **Opt-in per control domain**, never blanket. The memo's §11 already requires clear technical domains and explicit write authority.
- **Narrowest viable Graph scopes per domain.** Not tenant admin. Some scopes — Conditional Access policy write, for instance — are extremely powerful and should be requested only for domains we actually enforce.
- **Every write logged** with actor, prior value, new value, timestamp, and the authorising document.
- **Reversible.** Store prior state so any assertion can be rolled back.
- **Re-assertion only.** The platform restores an approved baseline. It does not accept arbitrary configuration instructions.

### 10.5 Security precondition, not a nice-to-have

Holding write credentials across many regulated tenants makes Centience a supply-chain target. We would be the single place holding keys to our clients' environments.

This elevates open question 4 from an item to an absolute gate: **we cannot hold write credentials in a system where credential encryption fails open when an environment variable is missing.** `CREDENTIAL_ENCRYPTION_KEY` must be set and any plaintext backfilled before Layer 3 exists in any form — including Layer 3a, since a compromise of the platform would expose the findings and baselines that tell an attacker exactly which controls are weak.

### 10.6 Not everything is software-enforceable

Claiming otherwise is the overclaim §2.2 warns against. "Annual supervisory review documented" cannot be enforced by writing configuration — it is a human artifact.

Every check needs an explicit enforcement mechanism:

| Mechanism | Meaning | Example |
|---|---|---|
| `software_enforceable` | Baseline can be tested and re-asserted | MFA enforcement, retention label, CA policy |
| `verifiable_only` | Can be tested, cannot be re-asserted | A required document exists and is current |
| `attestation_only` | Neither tested nor asserted; a person confirms | Supervisory review performed |

The dashboard must be honest per finding. A client who sees "enforced" against something we can only ask about will find out, and that is a credibility loss we do not recover from — particularly in front of a compliance partner whose own reputation is riding on the referral.

### 10.7 What this produces, and why it is the product

The artifact worth paying for is not the green light. It is the chain:

> Control X verified 12 March · drifted 4 June · re-asserted 4 June by Y under authority Z · verified 5 June

Neither a point-in-time assessment nor an MSP's ticket queue can produce that. It is what makes the evidence vault worth a recurring fee rather than a one-off report, it is the record that answers an examiner's real question — did the control operate over the period — and it only exists if Layer 1 ships.

---

## 11. Sequencing

**Now, before any demo or client login**
1. Get the two pricing facts from Pete (§5.1) and the referral-fee conflict question (§8)
2. Confirm `CREDENTIAL_ENCRYPTION_KEY` is set in Vercel
3. De-mock `/connectors`
4. Rewrite remediation copy for a customer audience
5. Establish the capacity number (§9)

**Then, before the first Governance client**
6. Owner field + dashboard filtering by owner
7. Citation per finding
8. Exception workflow with owner and expiry
9. Account-type flag (four values — §6.2)
10. Duty-to-remediate language in the contract
11. Finding lifecycle states, with `awaiting_verification` distinct from `verified` and `drifted` distinct from `open` (§10.2)
12. Enforcement-mechanism field on every check, so the dashboard cannot label something enforced that we can only ask about (§10.6)

**Then, to make "continuous" true — the enforcement layers (§10.3)**

Strict order. Each depends on the one before it.

13. **Layer 1 — scheduled re-testing.** The prerequisite for everything else. Without it a verified control is just an old timestamp, and drift is undetectable.
14. **Layer 2 — approved-baseline snapshots** on verification, and baseline comparison on re-test. This is the differentiated capability, and it needs no write access.
15. **Layer 3a — re-assertion through Compuwork's existing admin access** for managed clients. No new consent, no new scopes. Ships to the managed base first.
16. **Layer 3b — platform-held write scopes** for non-Compuwork clients. Gated on `CREDENTIAL_ENCRYPTION_KEY` (§10.5) and on confirming open question 14. Deferred until a client actually demands it.

**First cohort**
Two or three Abide clients as design partners. M365-anchored only. Priced as base plus enforcement rather than a platform subscription. Small enough that the one-org limit does not bite and we learn the delivery model before committing to volume.

**Expansion trigger — do not get this wrong**
Not our renewal. MSP contracts run on their own cycle, usually multi-year or auto-renewing. Clients actually switch at **the incumbent's renewal window, a failed exam, or an incident.** Capture the incumbent's contract end date as a field at onboarding and drive the expansion play off that. Otherwise we pitch at month twelve to a client locked in for another eighteen who has just been reminded we want their MSP's job.

**Pricing guard**
Price platform access as something worth selling on its own. The failure mode is a client who buys visibility, never buys the fixing, and leaves us a software vendor to an account we wanted managed. Bundling a fixed block of remediation hours from day one is the cheap insurance — it starts the fixing motion immediately and builds the habit.

---

## 12. Open questions, consolidated

| # | Question | Owner | Blocks |
|---|---|---|---|
| 1 | What does Drawbridge charge by firm size, and what is included? | Orville → Pete | All pricing |
| 2 | What was Abide earning on Drawbridge referrals? | Orville → Pete | Channel economics |
| 3 | Does Abide have a referral-compensation conflict to disclose? | Orville → Pete | First contract |
| 4 | Is `CREDENTIAL_ENCRYPTION_KEY` set in Vercel? | Orville | First client tenant |
| 5 | Accounts per governance engineer, by offer, enforcement labour excluded | Orville | Intake pace, pricing floor |
| 6 | Has any July punch-list item shipped since? | Verify in repo | Build sequencing |
| 7 | Does Abide's own client agreement permit substituting a vendor mid-relationship? | Orville → Pete | Cohort timing |
| ~~8~~ | ~~Does enforcement execution sit with Compuwork technicians?~~ **RESOLVED — yes; Compuwork delivers, Centience contracts (§10.1)** | — | — |
| 9 | Which control domains will Centience enforce while another MSP remains in place? | Orville | Enforcement scope statement |
| 10 | Target gross margin and ARR-per-engineer threshold, set before final pricing | Orville | Pricing |
| 11 | Three-year path to the **first $10M** ARR | Orville | Everything downstream of it |
| 12 | Which control domains are `software_enforceable` vs `verifiable_only` vs `attestation_only`? | Orville + build | Honest dashboard labelling (§10.6) |
| ~~13~~ | ~~Fallback executor for clients who refuse Compuwork~~ **LARGELY RESOLVED by Constitution Rule 2 — the accountable operator executes (§10.1a)** | — | — |
| 14 | Confirm the write-scopes decision in §10.1 was intended, not inferred | Orville | Layer 3 build scope |
| 15 | **Proposed Constitution rule — client evidence handling.** Retention, segregation, and what happens to a client's evidence record at termination | Orville | Client and examiner questions; see below |
| 16 | **Proposed Constitution rule — aggregate data use.** Whether client control data may ever be aggregated, and on what consent | Orville | Preserves the benchmarking option cleanly; see below |

Items 8–11 came from the memo's §12; items 12–14 fall out of the enforcement architecture in §10.

**Item 4 is now a gate, not a task.** It was "confirm an env var is set." With write credentials in scope it becomes the precondition for Layer 3 existing at all — see §10.5.

**Item 14 exists because a decision was inferred from a one-word confirmation.** Cheap to close, and it changes what gets built.

**On item 11:** the memo is right that a $10M path should exist before extrapolating to $50M. The near-term work is the first $10M, and the Abide cohort is the first few accounts of it — not a test of the $50M model.

---

## 13. Two rules the Constitution may be missing

Offered as proposals for the Constitution, not inserted into it. Both concern the same asset: **the platform accumulates findings and approved baselines across many regulated firms — a map of who is weak where.** Nothing in the Constitution currently addresses that concentration, and it is the kind of gap a client's counsel or an examiner finds before we do.

### Proposed — client evidence handling

The Constitution covers what we do *with* controls but not what we do with the *record*. Worth deciding: how long a client's evidence is retained, how it is segregated between tenants, and what happens to it at termination — returned, exported, destroyed, or retained for our own defence.

That last one is genuinely two-sided. A departing client may want their evidence record destroyed; we may want to keep it to defend our own work if an incident later gets litigated. Those conflict, and the answer belongs in a rule and a contract rather than in an argument after the fact.

This also connects to §10.5: we would be asking regulated firms to trust us with both the map of their weaknesses and, at Layer 3b, the keys to fix them.

### Proposed — aggregate data use

Peer benchmarking is Drawbridge's actual moat (§2.2), and at 1,300 accounts we would hold the dataset to build one. That makes it a commercial temptation with a predictable arrival date.

Deciding the rule now is cheap. Deciding it later, under revenue pressure, is how trust gets spent. A rule along the lines of *aggregate use requires explicit opt-in consent and must never identify or be reasonably attributable to a firm* preserves the option while removing the temptation to reinterpret silence as permission.

Note this sits in tension with §2.2's advice not to promise benchmarking. Both can hold: do not promise it now, and do not foreclose it by taking the data on terms that would make it impossible later.

---

## 14. Sources

Drawbridge: [drawbridgeco.com](https://drawbridgeco.com/) · [Solutions](https://drawbridgeco.com/solutions) · [Francisco Partners investment](https://www.franciscopartners.com/media/drawbridge-announces-strategic-growth-investment-from-francisco-partners) · [Long Ridge on the Francisco round](https://long-ridge.com/long-ridge-portfolio-company-drawbridge-announces-strategic-growth-investment-from-francisco-partners/) · [Long Ridge initial investment](https://www.privateequitywire.co.uk/long-ridge-equity-partners-invests-drawbridge/)

Platform state: `docs/marketing/centience-platform-standalone-review.md`, July 2026, grounded in `cpwk-code/centience-platform` @ `main`.
