# Centience Platform — Completeness Gap List

**Repo:** `cpwk-code/centience-platform`
**Reviewed:** 15 September 2026, against `main` (91 commits since the July review)
**Governing document:** `centience-constitution.md`

**What "complete" means here.** Not feature-complete in the abstract — complete against three things the business has already committed to: the Constitution's own rules, what the four live channels need in order to be served, and what a SOC 2 Type II audit will ask for. Each gap below is tagged with which.

---

## What closed since July

Recorded so the list below isn't read as a regression. Verified in code, not from the changelog.

| July finding | State now |
|---|---|
| `/connectors` displayed fabricated "connected" states | De-mocked |
| `CREDENTIAL_ENCRYPTION_KEY` failed open → plaintext at rest | **Fail-closed in production.** `encryptForStorage` throws `CredentialEncryptionError`; plaintext only when `NODE_ENV !== production` |
| `/cloud`, `/alerts` static arrays | Cleared |
| Checks on-demand only — "continuous" was not literally true | `/api/cron/rescan`, daily via `vercel.json` |
| 13 checks, 9 executing | **35 defined, 34 executing** |
| `ai_governance` unschematised, EC-010 degrading to a warning | AI governance has control-map, policies and catalog; EC-010 executes |

Also new since July and not previously planned: attestations with token-based external signing, exam-readiness, regulatory scoping, vendors, vulnerabilities, WSP, BAA, and the `lib/adoption/` module — which is the AI observation layer, with `anthropic-enterprise.ts`, `metrics.ts`, `pricing.ts` and `providers.ts`, each tested, on the `api | chat | code | cowork` surface taxonomy.

`lib/enforcement/lifecycle.ts` is a genuinely good piece of thinking that wasn't asked for: setup versus operating phase, go-live never inferred from coverage, and a finding's age clock starting at go-live rather than at detection so a firm is never shown "failing for 90 days" for a period it wasn't operating under.

---

## 1. The finding lifecycle is a test result, not a governance state
**Constitution · channels · SOC 2**

The platform models `passing | failing | warning | pending`. That is the outcome of a test. The Constitution defines an eight-state lifecycle for a *finding*, and four states have no implementation:

| State | Present? |
|---|---|
| `open` | implied by `failing` |
| `assigned` | **missing** |
| `in_remediation` | **missing** |
| `awaiting_verification` | **missing** |
| `verified` | implied by `passing` |
| `drifted` | present |
| `accepted_risk` | **missing** |
| `not_applicable` | present |

**`awaiting_verification` is the one that matters most.** It is the difference between somebody saying a control is fixed and a re-test proving it. Without that state there is nowhere to record a claim as a claim, and the dashboard shows green the moment a test passes regardless of who asserted what.

This is not theoretical. On 4 September the response to a client's four open Drawbridge findings was "these have all been cured," sent two minutes after the findings arrived, with no per-finding evidence. `awaiting_verification` → re-test → `verified`, each timestamped, is exactly the artifact that sentence needed behind it.

**`accepted_risk` is the second.** A deliberate acceptance with a named owner, a rationale and an expiry reads as governance; a red light with no decision record reads as neglect. Same facts, opposite conclusion in an examination. There is currently no acceptance workflow and no expiry field anywhere in the finding path — `expiry` appears twice in the codebase, neither in this context.

**Needed:** the status field promoted from test outcome to lifecycle state; owner assignment; an acceptance workflow with owner, rationale and expiry, plus a job that reopens an expired acceptance; and a dashboard filter by owner so a client's IT does not read a list containing findings that belong to their CCO.

---

## 2. Remediation copy is still written for a Centience technician
**Constitution · channels**

43 references to operator-only tooling remain in the check runner, including verbatim:

> *"Log into Dropsuite and investigate the failed backup job. Restore and verify backup integrity."*
> *"Log into Dropsuite and confirm the firm's email domain is added and archiving is enabled."*

Under the current model the customer and their own IT read this dashboard. They see instructions addressed to somebody else, referencing tooling they cannot access, which reads as our internal ticket queue and exposes our operational stack to every client.

This was item 11 in the July punch list, sized S. It is now more urgent than it was, because the partner-referred accounts arriving through Abide and NextReg will have their own IT reading these screens.

**Needed:** finding text branched on managed versus standalone, with the customer-facing variant naming the outcome required rather than the console to open.

---

## 3. One user, one org — no operator console
**Channels**

`profiles.org_id` is still single-valued. There is no multi-org membership and no staff role, so a Centience person cannot operate across client tenants from one login.

In July I said this was urgent, then revised it: if the customer's login is for visibility and we work through our own tooling plus the MCP server and per-org API keys, staff never need to be inside a customer org. That reasoning still holds for a handful of accounts.

It stops holding at a cohort. Abide, NextReg, Merchant's portfolio and Greg are four channels; a governance engineer carrying twenty accounts through twenty separate logins is not a workflow, it is a tax that grows linearly with the thing the business is trying to scale.

**Needed:** multi-org membership plus a staff role, and an operator view listing accounts by posture. This is the one XL item and it should be scoped deliberately rather than grown into.

---

## 4. No account-type flag
**Constitution · channels**

Nothing in the schema distinguishes **direct**, **compliance-partner**, **MSP-partner** and **Compuwork-linked** accounts.

The Constitution requires different role boundaries for each — in an Abide or NextReg account our named person is a governance engineer, not a compliance consultant, and the platform's policy generation is positioned as drafts for the partner to review rather than as our output. Convention will not hold that line; the first quarter somebody is short of target, it goes.

**Needed:** an account-type field, and the behaviours that depend on it — which modules surface, how the named role is described, and partner attribution on findings.

---

## 5. No evidence export
**Constitution Rule 11 · SOC 2**

There is no `/api/export` route. Rule 11 requires that a client receives a **complete export of their evidence record on termination**, and that any copy retained for our own defence is agreed in the contract in advance.

Without an export path that rule cannot be honoured, and the commitment is unsellable to a counsel who asks what happens to their data when they leave. It is also the artifact that makes the vendor-DDQ pitch real: an evidence record you cannot hand over is not a record the client owns.

**Needed:** a per-org export producing findings, evidence, attestations, policies and decision history in a portable format, plus retention configuration.

---

## 6. Smaller, verified

**EC-054 is defined but never executed.** One of 35. Either implement it or mark it explicitly as requiring a connector, the way the July review recommended for the then-dormant checks — silence reads as coverage the firm does not have.

**The audit log is thin.** `lib/audit.ts` exists but is referenced in one place. SOC 2 will want privileged action logging with actor, timestamp and target across the admin surface, and Rule 11 implies the same for any access to client evidence.

**No billing.** No Stripe integration. Not required for partner-led or managed accounts, but it is the gate on any self-serve motion, and the growth plan's Platform tier assumes one.

**I could not run the test suite.** `vitest.config.ts` failed to load in a fresh clone — an environment artifact, not a code signal. 64 test files are present. Worth confirming green locally before the SOC 2 observation window opens, because "tests pass" becomes an auditable claim once change management is in scope.

---

## Suggested order

Two of these gate other work, so sequence matters more than size.

1. **Finding lifecycle** (§1) — everything about evidence credibility depends on it, and it is the artifact the Abide relationship is currently missing
2. **Remediation copy** (§2) — small, and every partner-referred account makes it more visible
3. **Evidence export** (§5) — Rule 11 is unhonoured until it exists, and SOC 2 will ask
4. **Account-type flag** (§4) — cheap now, expensive to retrofit across four channels
5. **Audit log breadth** (§6) — a SOC 2 prerequisite, easier before the observation window than during it
6. **Operator console** (§3) — the XL item; needed when the first cohort lands, not before
7. **Billing** (§6) — only when a self-serve motion is actually being sold

Items 1, 3 and 5 are also SOC 2 prerequisites. Doing them before the observation window opens means the audit evidence accumulates from day one rather than being reconstructed — which is the same argument this platform makes to its own customers.
