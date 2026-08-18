# Centience Tiered Governance Model — Working Document

**Status:** Working draft. Open questions are marked **[OPEN]** and should be resolved before anything is quoted or built.
**Owner:** Orville Matias
**Started:** August 2026
**Companion docs:** `centience-platform-standalone-review.md` (July 2026 code review) · `centience-2028-growth-plan.md` · `HANDOFF.md`

**What this is:** the model established in conversation for selling platform-plus-professional governance in three tiers, the Abide channel that prompted it, and the product and commercial work it implies. It is not a plan of record yet — the pricing section is deliberately unfinished pending two facts we do not have.

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

### 3.2 Three tiers

| Tier | Platform + named professional | Who cures | Who does support / overall IT |
|---|---|---|---|
| **1 — Oversight** | Centience | Client's own IT | Client's own IT or existing MSP |
| **2 — Oversight + Enforcement** | Centience | **Centience**, in systems it can reach | Client's own IT or existing MSP |
| **3 — Managed Governance** | Centience | Centience | Centience |

The customer's existing IT or MSP keeps support and overall management in tiers 1 and 2. We are not asking anyone to rip out an incumbent on a first purchase.

### 3.3 Why land-and-expand is the right shape

- **It removes the biggest objection in MSP displacement.** Nobody fires an incumbent MSP as a first transaction. By not asking, we get in at low friction.
- **It matches what the platform already is.** One-user-one-org, per-tenant M365 credentials, self-serve onboarding. The product is built for "customer logs into their own org," not "Centience operates from a console." We would be selling what exists.
- **It makes the expansion case itself.** The dashboard documents what the incumbent is not doing. We do not argue for the takeover; the evidence trail argues it.
- **It collapses the Phase B problem.** If the client's own IT can be a user, then Ninja / Halo / Keeper / Dropsuite sitting on Centience-owned accounts stops being a gap — gate them as managed-only (small) rather than refactoring to per-org credentials (large).

### 3.4 The sharp edge

**We are handing the incumbent MSP a scoreboard of their own failures.**

Two outcomes. They quietly fix the findings themselves — we did free consulting and lost both the add-on and the expansion case. Or, more likely from a threatened incumbent, they attack the tool's credibility to the client: *"these findings aren't applicable, Centience is drumming up work."*

They win that argument if findings read as opinion. They cannot touch it if every finding cites the obligation and the client's own policy:

> MFA not enforced on 12 accounts · Advisers Act 204-2 · your WSP §4.2

**This makes citation-per-finding a hard product requirement, not a nice-to-have.** See §6.

---

## 4. The four-party responsibility model

Responsibility needs named roles for the firm itself, their IT or MSP, the compliance consultant (Abide), and Centience.

The consequence: **some findings can never be cured by anyone we are selling to.** "Annual supervisory review not documented" is a CCO task. "Staff attestation not collected" belongs to the firm. Those are not IT gaps and not ours — but they sit red on the dashboard, and a tier-1 client's IT will reasonably say "half of this isn't mine."

**Required:** owner field with at least four values, and dashboard filtering by owner.

Without it, tier-1 clients experience the product as a list of complaints rather than a work plan, and the renewal conversation starts from defence. With it, the upgrade sells itself honestly:

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

### 5.3 Scaling variable

**Headcount band × registration type.** Not AUM.

AUM is what alts firms are used to quoting, but it swings, it is awkward for accounting and law clients, and it does not track our cost. Our cost is driven by how many accounts and endpoints need review and how many rule sets we evidence against. A 12-person RIA and a 200-person dual registrant are genuinely different amounts of work, and registration type determines whether we are evidencing 204-2, 17a-4, or both.

Also easier to defend in negotiation — the client can see what drives it.

### 5.4 Abide channel economics — **[OPEN]**

- Percentage of first-year revenue on **services**, consistent with the Jeneca structure.
- **No perpetual revenue share on the platform base.** That is the software margin the 2028 plan rests on.
- Floor is set by whatever Drawbridge was paying them — see §5.1.

### 5.5 What must be bounded in tier 1

**Argument is the unbounded cost.** An incumbent IT team that disputes every finding will consume the professional's time without limit, and tier 1 has the thinnest margin.

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

**Account-type flag** for Abide-referred vs. direct, to drive the role split in §7. Convention is not enough; conventions erode the first time somebody is short of quota.

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

**Duty-to-remediate boundary, in writing, before the first tier-1 client.** If the platform flagged a deficiency, the client's MSP was supposed to fix it, nobody did, and there is an incident — we are the party holding timestamped proof that everyone knew, and we will be in discovery. Platform access is assessment and evidence, **not an obligation to cure**; remediation responsibility sits with whoever holds it. Cheap now, expensive later.

**Abide referral-fee conflict — [OPEN].** If Abide is a compliance consultancy serving RIAs, compensation for vendor referrals may be a conflict their clients must be told about. Same shape as the AICPA independence problem on CPA referrals. Raise it with Pete before money moves — better from us than from someone's examiner.

---

## 9. Capacity — the real constraint

Every tier includes a human. The question is not whether the platform scales but **how many accounts one governance engineer carries at tier 1.**

**[OPEN]** Establish that number. If it is 15–25, a twenty-client Abide cohort is a full hire, and we need to decide whether we fund ahead of revenue or pace intake to match.

**That number sets how fast we say yes to Pete — not the size of his book.**

---

## 10. Sequencing

**Now, before any demo or client login**
1. Get the two pricing facts from Pete (§5.1) and the referral-fee conflict question (§8)
2. Confirm `CREDENTIAL_ENCRYPTION_KEY` is set in Vercel
3. De-mock `/connectors`
4. Rewrite remediation copy for a customer audience
5. Establish the capacity number (§9)

**Then, before the first tier-1 client**
6. Owner field + dashboard filtering by owner
7. Citation per finding
8. Exception workflow with owner and expiry
9. Account-type flag
10. Duty-to-remediate language in the contract

**First cohort**
Two or three Abide clients as design partners. M365-anchored only. Priced as base plus enforcement rather than a platform subscription. Small enough that the one-org limit does not bite and we learn the delivery model before committing to volume.

**Expansion trigger — do not get this wrong**
Not our renewal. MSP contracts run on their own cycle, usually multi-year or auto-renewing. Clients actually switch at **the incumbent's renewal window, a failed exam, or an incident.** Capture the incumbent's contract end date as a field at onboarding and drive the expansion play off that. Otherwise we pitch at month twelve to a client locked in for another eighteen who has just been reminded we want their MSP's job.

**Pricing guard**
Price platform access as something worth selling on its own. The failure mode is a client who buys visibility, never buys the fixing, and leaves us a software vendor to an account we wanted managed. Bundling a fixed block of remediation hours from day one is the cheap insurance — it starts the fixing motion immediately and builds the habit.

---

## 11. Open questions, consolidated

| # | Question | Owner | Blocks |
|---|---|---|---|
| 1 | What does Drawbridge charge, by firm size? | Orville → Pete | All pricing |
| 2 | What was Abide earning on Drawbridge referrals? | Orville → Pete | Channel economics |
| 3 | Does Abide have a referral-compensation conflict to disclose? | Orville → Pete | First contract |
| 4 | Is `CREDENTIAL_ENCRYPTION_KEY` set in Vercel? | Orville | First client tenant |
| 5 | Accounts per governance engineer at tier 1? | Orville | Intake pace |
| 6 | Has any July punch-list item shipped since? | Verify in repo | Build sequencing |
| 7 | Does Abide's own client agreement permit substituting a vendor mid-relationship? | Orville → Pete | Cohort timing |

---

## 12. Sources

Drawbridge: [drawbridgeco.com](https://drawbridgeco.com/) · [Solutions](https://drawbridgeco.com/solutions) · [Francisco Partners investment](https://www.franciscopartners.com/media/drawbridge-announces-strategic-growth-investment-from-francisco-partners) · [Long Ridge on the Francisco round](https://long-ridge.com/long-ridge-portfolio-company-drawbridge-announces-strategic-growth-investment-from-francisco-partners/) · [Long Ridge initial investment](https://www.privateequitywire.co.uk/long-ridge-equity-partners-invests-drawbridge/)

Platform state: `docs/marketing/centience-platform-standalone-review.md`, July 2026, grounded in `cpwk-code/centience-platform` @ `main`.
