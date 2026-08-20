# Build Spec — AI Governance Observation Layer

**Target repo:** `cpwk-code/centience-platform` (Vercel project `finshield`, live at app.centience.ai)
**This document lives in:** `cpwk-code/centience-nextjs` — it is a handoff spec, not code for this repo.
**Status:** Ready to build Phase A. Phases C and D are gated — see §11.
**Written for:** an engineer or agent starting fresh, with no access to the conversation that produced it.

---

## 1. What this is

The observation layer for the **AI Governance** domain: discover what AI a client organisation is actually using, reconcile it against what they have approved, and produce findings for the gaps.

It closes an existing stub. `EC-010` (AI inventory) currently degrades to a warning because the `ai_governance` table was never schematised. This spec is what that check was waiting for.

### The one idea that shapes everything

**Reconciliation, not surveillance.**

We only ever connect to accounts the organisation pays for. We do not attempt to observe personal accounts — we cannot, and trying would make this an employee-monitoring product, which is a different business with a worse reputation.

Shadow AI is detected from the **gap** between what the company pays for and what the company's usage should look like. That gap is computed from billing, seats, entitlements and activity counts.

**Consequence, and it is the most important line in this document: shadow-AI detection requires no prompt or completion content at all.** It is pure reconciliation. Phase A ships without touching a single prompt.

Content is needed only for the *retention and supervision* product, which is a separate job with a separate risk profile (§11).

---

## 2. Constitutional constraints

These are not preferences. `docs/marketing/centience-constitution.md` governs; where this spec and the Constitution disagree, the Constitution wins.

| Rule | What it requires here |
|---|---|
| **5. Findings attributable and defensible** | Every finding carries an owner, a citation (obligation and/or client policy clause), a state, and a decision path. Findings are evidence, not opinion. |
| **6. Platform governs the lifecycle** | requirement → control → observation → finding → owner → decision → remediation → verification → evidence → drift. This layer supplies *observation*; it must feed the existing finding lifecycle rather than build a parallel one. |
| **7. Enforcement narrow and reversible** | This layer is **read-only**. It observes and evidences. It does not deprovision users, revoke seats, or change any client configuration. |
| **10. Human judgment is premium** | The layer produces findings and routes them. It does not ask a governance engineer to read logs. Anything repetitive belongs in code. |
| **11. Client evidence held in trust** | Segregated per tenant, defined retention, complete export on termination. The concentration is a custodial obligation, not an asset. |
| **12. Aggregate use requires consent and anonymity** | No cross-client aggregation, benchmarking, or comparison without explicit opt-in, and never in a form reasonably attributable to an organisation. **Do not build a benchmarking feature in this phase.** |

Also binding: the finding-state standard in the Constitution, including `not_applicable`.

---

## 3. Step 0 — capability discovery, before any schema work

**Do not design against assumed provider capabilities.** They differ by provider, by plan tier, and by surface, and the differences are the hard part of this build.

Produce a capability matrix first. For each provider the client pays for, and for each surface within it, record:

- Is there an admin/usage API? What auth does it need, and what scopes?
- What granularity of usage does it expose — org, project/workspace, API key, individual user?
- Does it expose cost, or only token counts?
- Is there a compliance/audit export for conversation content? On which plan tiers?
- Is user identity resolvable to a directory identity (email/UPN), or only to an opaque key?
- What is the retention period on the provider's side, and is it configurable?

Surfaces to cover at minimum: direct API usage, hosted chat, agentic/coding surfaces (these often run locally against the API, so usage appears in billing while content may not surface centrally), and any newer product surfaces.

**Write the matrix into the repo** as `docs/ai-providers-capability-matrix.md` and keep it current. Every downstream design decision references it.

Where a capability is absent, that is not a blocker — it is a **blind spot to be surfaced in the product** (§6).

---

## 4. Scope

### In scope (Phase A)

- Read-only connection to provider admin/usage APIs for accounts the org pays for
- A vendor register sourced from the client (AP ledger / expense export / stated list)
- An approved-tool register with owner and approval date
- Reconciliation producing findings (§5)
- A coverage metric with a stated denominator rule (§7)
- Surfacing what we *cannot* see, as a first-class output

### Out of scope

- **Personal or unmanaged accounts.** We do not attempt detection of an individual's private usage.
- **Any write action** against a provider — no deprovisioning, no seat changes, no config changes.
- **Prompt/completion capture.** Deferred to Phase C, gated (§11).
- **In-path proxy or gateway.** Explicitly excluded pending its own architecture review — see §11.3.
- **Productivity or ROI measurement.** Not technology governance. Belongs to the client's adoption partner. See §7.3.
- **Cross-client benchmarking.** Constitution Rule 12.

---

## 5. The reconciliation ladder

Each rung is a distinct comparison producing a distinct finding type. Implement as discrete checks so each can pass, fail, or be `not_applicable` independently.

| # | Comparison | Finding when it fails | Notes |
|---|---|---|---|
| 1 | Paid seats vs provisioned users | Seats billed but unassigned — orphaned access and wasted spend | Cheap, high credibility in a first assessment |
| 2 | Provisioned users vs active users | Entitlement with no usage — least-privilege gap | Also an input to rung 4 |
| 3 | Active users vs approved-tool register | Usage on a tool with no policy — **ungoverned channel** | The core finding |
| 4 | Expected users vs covered users | Role that should show AI usage and does not — possible personal-account use | See §5.1 on honesty |
| 5 | Paid vendors vs connected vendors | A vendor being paid that is not in the governance perimeter at all | **Cheapest and lands hardest. Needs no API integration — just the vendor list.** Implement first. |

### 5.1 Two kinds of shadow AI, and the paid kind matters more

The category most people mean is an employee on a personal account. The category that carries more data is **sanctioned-but-ungoverned**: a team that put coding-assistant licences on a corporate card, a department with an expensed enterprise seat nobody told compliance about.

That is the company paying for a tool carrying company data at scale with no policy, no retention and no owner. It is fully visible from the AP ledger, and it is what rung 5 catches.

### 5.2 Absence findings must be honest

Rung 4 produces false positives. Low usage may mean leave, a role that genuinely does not need AI, or preference.

The finding is **"unexplained absence requiring review"** with a named owner. It is never "this person is using shadow AI." Route it through the existing exception workflow — reviewed, explained, closed with a rationale and an expiry — so an explained absence becomes a recorded decision rather than a permanently red light.

---

## 6. Surface the blind spots as a first-class output

The headline panel is not a usage feed. It is:

> Here is your AI usage. Here is what we can see. **Here is what we cannot.**

A polished dashboard over the fraction of usage that happens to be visible manufactures a false sense of completeness — a screen that reads "governed" when it is not. That is the precise failure this product exists to detect, and shipping it would be worse than shipping nothing.

Every coverage number must be accompanied by its known exclusions, derived from the Step 0 capability matrix.

---

## 7. The coverage metric

The one number this layer can legitimately produce.

```
coverage = users with AI activity on governed, approved accounts
           ---------------------------------------------------
                        expected AI users
```

### 7.1 The denominator rule is load-bearing

A coverage ratio is theatre unless "expected AI users" follows a stated rule. Pick one, document it in the methodology, apply it identically for every client, and version it. Candidate rules: all staff holding a given licence type; all knowledge workers by job family; role-based from the directory.

**Do not let the denominator move per client or per reporting period.** If it can be tuned, the metric is worthless and a client will eventually tune it.

### 7.2 Why coverage and not productivity

Coverage is countable, falsifiable, and improves monotonically as the programme works. It gives a board something true rather than something flattering — not "AI made us 15% faster" but "94% of AI usage is inside the governed perimeter, up from 31%."

### 7.3 Do not build productivity measurement

Quantifying AI spend against productivity is an unbounded, per-client, unfalsifiable problem — infinite candidate metrics, each multi-dimensional, none agreed. It is also the two most gameable metrics in engineering (change counts and cycle time) waiting for Goodhart's law.

Harder still, it needs a counterfactual nobody has: without a holdout cohort, any ROI claim is correlation reported as attribution.

That work belongs to the client's adoption partner. Ours is whether the usage is governed. **Spend is in scope only as a governance signal (§8), never as a cost-optimisation feature.**

---

## 8. Spend as a governance signal

Join spend to governance data and it stops being FinOps:

- **Shadow AI by absence** — a provisioned user with near-zero spend whose role implies heavy use (rung 4)
- **Least-privilege gaps** — entitlement with zero consumption (rung 2)
- **Retention plausibility** — volume tells you whether the retention configuration could plausibly be capturing everything, or whether the numbers fail to reconcile

Anomalous spend is a control indicator. Cost reduction is somebody else's product.

---

## 9. Data model

Additive. Reuse the existing lifecycle rather than building a parallel one.

**New tables** — all org-scoped with RLS keyed off `current_org_id()`, matching the existing 14-table pattern:

- `ai_vendors` — the register rung 5 needs. Vendor, source (AP ledger / expense / stated), first seen, monthly spend, connected boolean, owner.
- `ai_tools_approved` — approved-tool register. Tool, surface, approving person, approval date, policy reference, expiry.
- `ai_accounts` — a connected provider account. Provider, plan tier, credential reference into `connector_credentials`, capability flags from the Step 0 matrix.
- `ai_usage_snapshots` — periodic reconciliation input. Account, period, user identity, seat state, activity count, token count, cost. **Metadata only — no content.**
- `ai_governance` — **the table `EC-010` has been waiting for.** Ship the migration as part of this phase so that check stops degrading to a warning.

**Reuse, do not duplicate:**

- `enforcement_results` for check outcomes — results are already persisted and timestamped there
- `connector_credentials` for provider credentials
- The existing finding lifecycle and states, including `not_applicable`
- `audit_log`
- The DLP classifier at `lib/dlp/classifier.ts` (27 entity types, unit-tested) — Phase C only

**Identity resolution** is the hard join. Provider-side identity may be an opaque key rather than a directory identity. Where it cannot be resolved to a person, the record must be explicitly marked unresolved and counted as a blind spot, never silently dropped or guessed.

---

## 10. Findings: owners, citations, states

Per Constitution Rule 5, every finding needs four things. Do not create a finding that lacks any of them.

**Owner** — one of: the firm itself, client IT or their MSP, the compliance partner, or Centience. Plus `accepted_risk`. The dashboard must filter by owner: a client whose IT reads a list containing findings that belong to their CCO experiences the product as a list of complaints.

**Citation** — the governing obligation and/or the client's own policy clause. A finding worded as opinion is dismissible by a motivated incumbent; a finding citing the rule and the client's own WSP is not.

**State** — the Constitution's standard: `open`, `assigned`, `in_remediation`, `awaiting_verification`, `verified`, `drifted`, `accepted_risk`, `not_applicable`. Two distinctions matter: `awaiting_verification` is a *claim*, `verified` is a re-test; and `drifted` (was verified, now failing) is a change-management event, not a backlog item.

**Decision path** — how it was resolved and by whom, durably.

---

## 11. Build order and gates

### Phase A — Inventory and coverage *(build now)*

Rung 5 first, then rungs 1–4. Vendor register, approved-tool register, provider connections, reconciliation, coverage metric, blind-spot panel. `ai_governance` migration shipped.

**No content. No writes.**

Acceptance: a client can be onboarded, their paid AI vendors enumerated, coverage computed with its denominator stated, and findings produced with owner, citation and state — with known blind spots displayed alongside.

### Phase B — Retention verification *(next, still no content)*

Verify the client's *own* compliance export or retention configuration is enabled, complete, and retained for the applicable period; produce findings when it is not.

This is "prove the record is being kept without being the keeper," and it is the honest version of the retention product.

### Phase C — Classification and flagged review *(GATED)*

Content enters the system. Three-tier custody model:

1. **Metadata always** — who, when, surface, tokens, cost. Low sensitivity.
2. **Classification always, content selectively** — run the DLP classifier at ingest; always store the classification result and a pointer; store content only where policy requires it or where it is flagged.
3. **Content at rest is client-held or client-keyed** — either it stays in their tenant and we index it, or we hold it encrypted under a key they control.

The design target is being able to say, truthfully: *"We cannot read your prompts. We can prove they exist, prove they are retained correctly, and produce them when you authorise it."*

Build the **flagged queue and sampling workflow with attestation**, not a general browsing UI. Nobody needs to browse everyone's conversations. A supervisor samples; an investigator retrieves; a triager reviews flags. The defensible artifact is the record of *what was sampled, by whom, on what cadence, with what findings, attested* — that is the product, not the log viewer.

**Gate — all three must hold before Phase C ships:**

1. `CREDENTIAL_ENCRYPTION_KEY` is set in Vercel and any plaintext secrets are backfill-encrypted. The July review found it unset. We cannot hold conversation content in a system where credential encryption fails open on a missing environment variable.
2. A DPA and sub-processor disclosure exist. If enrichment or processing touches third parties, the client is told who.
3. Constitution Rule 11's residual items are closed: the actual retention period is set, and the termination-export clause is drafted.

### Phase D — Retrieval and legal hold *(after C)*

Search and export under authorisation. Every access logged to `audit_log` with actor, scope and justification.

### 11.3 Explicitly deferred: in-path capture

If content proves unavailable through any admin or compliance API, the only route is sitting in the request path as a proxy or gateway.

**That is a separate decision requiring its own architecture review.** It puts Centience in the critical path of the client's AI usage — if the proxy degrades, their AI stops. That is an availability obligation of the kind Constitution Rule 1 says is not our business, attached to a product whose value is governance. Do not build toward it as part of this spec.

---

## 12. Security requirements

Non-negotiable:

- **Read-only credentials** at every provider. Request the narrowest scope that satisfies the capability matrix. Never request write scopes for this layer.
- **Per-org credentials.** Never a single shared Centience account across client orgs — that is the pattern that made Ninja/Halo/Keeper managed-only.
- **RLS on every new table**, keyed off `current_org_id()`, matching the existing pattern. API routes run on the service-role key and therefore bypass RLS, so `requireOrgAccess(req, orgId)` is the actual tenant guard on the API surface and must be applied to every new route.
- **No client AI content in logs.** Not in application logs, not in error traces, not in exception reporting.
- **HubSpot boundary.** The CRM already holds governance scores, priority gaps and full assessment responses per named contact. Do not extend that with AI usage or content. It is the wrong custody boundary and it is already the most sensitive thing in a system third parties can be granted access to.

---

## 13. Open questions the builder must resolve, not guess

1. **Capability matrix (§3).** Blocks schema design. Do this first.
2. **Denominator rule for coverage (§7.1).** Product decision, needs Orville. Blocks the metric shipping.
3. **Identity resolution strategy** where provider-side identity is opaque. Determines whether rungs 2 and 4 are computable per provider.
4. **Reconciliation cadence.** Checks are currently on-demand only — there is no scheduled re-scan anywhere in the platform. This layer needs one, and building it here means building it for every check. Coordinate rather than adding a bespoke scheduler.
5. **Vendor register ingest.** How does the AP ledger actually arrive — CSV upload, accounting integration, or a manual list? Rung 5 depends on it and it is the highest-value rung.
6. **Is `CREDENTIAL_ENCRYPTION_KEY` set?** Gates Phase C. Orville to confirm; not visible from a coding session.

---

## 14. What not to build

- Productivity or ROI measurement (§7.3)
- Cross-client benchmarking or comparison (Rule 12)
- Any write or enforcement action against a provider (Rule 7 — this layer is observation)
- A general-purpose conversation browser (§11 Phase C)
- An in-path proxy or gateway (§11.3)
- Personal-account detection of any kind (§4)

---

## 15. The positioning line this enables

Worth keeping in view while building, because it is what the design is protecting:

> **We don't monitor your people. We govern your accounts.**

That is defensible with employees, counsel and works councils, and it separates this from anything resembling employee surveillance — the reputational trap in this category. For a firm selling governance, deliberately *not* looking at personal accounts is worth more than the marginal detection that looking would buy.
