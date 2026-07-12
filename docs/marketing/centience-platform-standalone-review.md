# Centience Platform — Standalone Readiness & Gap-to-Platform-Tier Review

**Reviewer:** Engineering review for Orville Matias · **Date:** July 2026
**Scope reviewed:** `cpwk-code/centience-platform` @ `main` (Vercel project `finshield`, live at app.centience.ai)
**Companion docs:** `docs/marketing/centience-2028-growth-plan.md` (v2, platform-led) · `docs/marketing/HANDOFF.md` · draft PR #1
**Question on the table:** *Can the governance platform stand alone — sold to firms with internal IT or an existing MSP — or is it structurally bound to Centience operating the infrastructure?*

> **Sourcing note.** This review is grounded in the code, not the docs. Two doc sets conflict: `README.md` / `PRODUCT.md` describe a pre-hardening prototype ("enforcement checks mocked," "no auth on API routes"), while `docs/HANDOFF.md` + `CLAUDE.md` describe the current hardened app. **The code confirms HANDOFF is correct** — enforcement is real, auth is enforced. The stale README/PRODUCT should be archived to avoid misleading a buyer or a new dev.

---

## TL;DR — the honest answer

**Yes, it can stand alone — but only in a narrower form than the pitch implies today, and the codebase is honest about ~70% of that gap already.**

There is a genuine, self-contained product loop that needs **zero Centience-operated infrastructure**: a firm connects its **own Microsoft 365 tenant** (via a per-tenant Azure app registration), and the platform runs live continuous checks, scans SharePoint/OneDrive/Exchange for sensitive data, generates WSPs and exam/board PDFs, and tracks incidents. That loop is real and demo-able against any customer's M365 today. **For an M365-anchored RIA/BD with internal IT, this stands alone right now.**

The catch is depth. Everything beyond M365 — backup/archiving health, endpoint posture (patch/AV/encryption), remediation ticketing, and credential custody — is wired to **Centience-operated tooling on single, shared, Centience-owned accounts** (Dropsuite reseller, NinjaRMM, HaloPSA, Keeper). A standalone firm can't plug in its *own* equivalents, so it gets a materially thinner product than the "continuous governance across your whole stack" promise. And the `/connectors` page currently *displays* AWS/Salesforce/Strac as "connected" with fake sync timestamps — which would blow up in a standalone demo.

**Verdict:** Standalone is not only viable, it's the right default (it's what the growth plan's Platform tier requires). The architecture doesn't block it. What blocks it is (1) breadth of **customer-owned** integrations and (2) some UI honesty. The core multi-tenant spine is sound.

---

## 1. Architecture & multi-tenancy

**What's solid:**
- **Real per-org isolation.** Postgres RLS is enabled on every org-scoped table, keyed off a `current_org_id()` SECURITY DEFINER function that reads `profiles.org_id` for `auth.uid()` (`supabase-schema.sql`, `-v2`, `-v6`). 14 tables, all scoped.
- **Defense in depth at the app layer.** API routes run on the **service-role key** (which *bypasses* RLS), so the actual tenant guard on the API surface is `requireOrgAccess(req, orgId)` in `lib/server-auth.ts` — it compares the session's `org_id` to the requested `orgId` and 403s on mismatch. This is applied **consistently** in every route I read (enforcement, dspm, connectors, integrations, keys). The old "no org ownership check" critical from the README is **fixed**.
- **Role hierarchy** (`viewer < member < cco/ciso/cto < admin < owner`) with fail-closed defaults (unknown role → viewer), enforced server-side via `minRole` on operational routes. Rate limiting (atomic `bump_rate_limit` RPC) and an `audit_log` are live.
- **Credential encryption** is real: AES-256-GCM (`lib/crypto.ts`) with an `enc:` prefix for migration. *Caveat:* it silently stores plaintext if `CREDENTIAL_ENCRYPTION_KEY` is unset (`encryptionAvailable()` fallback) — and HANDOFF says that key is **not yet set in Vercel**. So secrets may currently be at rest in plaintext in production. Set the key before any real client M365 tenant is connected.

**The structural constraint — one user = one org:**
- `profiles.org_id` is single-valued; `getSessionOrg` derives *the* org from the logged-in user. There is **no multi-org membership and no operator console** — the `/admin/clients` staff view was deliberately removed under this single-org model (per HANDOFF).
- This cuts both ways and is the most important architectural finding: the **MSP-operator integrations assume Centience manages many client orgs, but the auth model has no way to model a Centience staffer operating across many tenants.** So the app is, in its bones, **already a single-tenant, customer-logs-into-their-own-org product** — which is *good* for standalone and *bad* for the "we operate it for you" Managed tier (which currently has no in-app home). This is the reverse of how it's described.

**Bottom line (area 1):** The multi-tenant foundation is genuinely built and standalone-shaped. The gap is an **operator/Managed-tier console**, not tenant isolation. Reaching the Managed tier at scale needs an auth-model change (multi-org membership); reaching the self-serve **Platform tier** does not — the spine is already right for it.

---

## 2. The integration layer (the crux for standalone)

This is where standalone lives or dies. Here's the true state, connector by connector:

| Integration | Credential model | Standalone-capable? | Reality |
|---|---|---|---|
| **Microsoft 365 / Entra** | **Per-org** (tenant_id/client_id/secret in `connector_credentials`, encrypted) | ✅ **Yes** | Real client-credentials Graph flow (`lib/connectors/graph.ts`). Read-only. Powers MFA/CA, retention (Purview), archiving (Secure Score), SharePoint/OneDrive/Exchange DSPM+DLP. **This is the standalone engine.** |
| **Google Workspace** | **Per-org** (service-account JSON, encrypted) | ⚠️ Partial | Backend connector + validation is real (`/api/connectors/google`); DSPM runs via a Supabase edge function (`dlp-scan`, not in this repo). **But:** no UI to connect it (the `/connectors` page shows it as a static card), and **no Google-side enforcement checks** — all 9 live checks are M365/internal. RIAs on Google get DLP only, no enforcement parity. |
| **Dropsuite** (archiving/backup) | Per-org customer_id + key, **but a Centience reseller/partner model** | ⚠️ MSP-leaning | Real API calls for journaling (EC-011) and backup health (EC-012). Assumes the firm's archiving *is Dropsuite resold by Centience*. A standalone firm on Global Relay/Smarsh/Proofpoint/Mimecast has **no connector**. |
| **NinjaRMM** (endpoint posture) | **Single global env-var account** | ❌ No | One `NINJARMM_CLIENT_ID/SECRET` = Centience's RMM. Customer orgs are *sub-organizations inside Centience's Ninja account*. Real patch/AV/encryption assessment — but **only exists if Centience runs the RMM.** |
| **HaloPSA** (ticketing/remediation) | **Single global env-var account** | ❌ No | One Halo tenant = Centience's PSA. Creates tickets for failing checks. Pure operator workflow. |
| **Keeper** (secrets) | **Single global env-var vault** | ❌ No | Explicitly "Centience's single vault storing all client credentials," namespaced `centience/{orgId}/…`. Operator-only by construction. |
| **AWS / Azure / Salesforce / Bloomberg / Slack / Strac** | — | ❌ Not built | **Display-only mock cards** on `/connectors` with hardcoded statuses (AWS "connected, 5 min ago", Salesforce "connected", Strac "Real-time"). No backend. |

**What's missing entirely** — and these are exactly the standalone-defining categories from the growth plan's integration list:
- **MDM (Intune / Jamf):** none. The only device signal is NinjaRMM (MSP-operated).
- **EDR (CrowdStrike / SentinelOne / Defender for Endpoint):** none. NinjaRMM's reported "antivirus status" is the closest proxy — not a real EDR API.
- **IdP governance (Okta / Entra as a governance target):** only indirect — Entra Conditional Access is read for the MFA check. No Okta, no standalone IdP posture connector.
- **Cloud posture (AWS/GCP/Azure config):** none. Checks EC-006 (S3 retention) and EC-009 (encryption at rest) are **defined but never executed** (see §3).
- **Standalone archiving:** only Dropsuite. The remediation text name-drops Global Relay/Purview but no connectors exist.

**Bottom line (area 2):** The **per-tenant plumbing pattern is proven** (M365 + Google prove that a customer can supply their own credentials and the app scopes everything by `org_id`). The problem is that the *high-value governance depth* (device posture, backup, archiving, remediation) is currently delivered only through **Centience-owned shared accounts**. Standalone requires re-pointing those from "Centience's account" to "the customer's account (or their MSP's)" — or adding customer-owned equivalents (Intune, EDR, an archiver). **This is the single biggest body of work between here and a credible standalone Platform tier.**

---

## 3. What's actually built vs. scaffolded

**Genuinely built and working (verified in code):**
- **Enforcement engine** — real, connector-driven, with graceful degradation (`app/api/enforcement/run/route.ts`). Live Graph calls (Secure Score, Conditional Access, Security Defaults, Purview retention labels), live Dropsuite calls, and Supabase evidence queries. Results persisted and timestamped. This is the product's spine and it is **real, not mocked.**
- **DLP classifier** (`lib/dlp/classifier.ts`) — 27 entity types, in-process, unit-tested (a real SSN/credit-card redaction leak was found and fixed). Core IP, and fully offline/standalone.
- **WSP generation + PDF exports** (Claude + `@react-pdf/renderer`), **incident/Reg S-P clock**, **evidence vault + document analysis**, **MCP server** (`/api/mcp`, per-org API-key auth), **API-key management**, **team invites**, **self-serve onboarding wizard** (`app/onboarding/page.tsx` — creates the org for the signed-in user, i.e. already PLG-shaped).
- **31 Vitest tests pass; `tsc`/`build` clean.**

**Partially built / overstated:**
- **Only 9 of the 13 "enforcement checks" actually execute.** The run handler runs EC-001, 003, 004, 005, 007, 010, 011, 012, 013. **EC-002** (Teams/Slack archiving), **EC-006** (6-yr records retention on S3), **EC-008** (annual supervisory testing), and **EC-009** (encryption at rest) exist only as metadata in `lib/enforcement/checks.ts` — no logic runs. (Separately, `lib/mcp/tools.ts` carries a *different, stale* 10-item list — worth reconciling so the MCP tool doesn't advertise checks the engine doesn't run.)
- **`/connectors` page is mostly a mock.** Only Microsoft 365 has a live connect form. Every other card (Google, Slack, Salesforce, AWS, Azure, Bloomberg, Strac, Halo, Ninja, Keeper, Dropsuite) is a static array entry with a **hardcoded status** — including fake "connected" states. The backend routes for Google/Dropsuite/Halo/Ninja/Keeper are real, but **not wired into the connect UI.**
- **`/cloud` and `/alerts` pages are mock** (`CLOUD_FINDINGS` static array; CLAUDE.md confirms). Dashboard (`app/page.tsx`) is claimed wired to live Supabase.
- **`ai_governance` table has no migration** — the EC-010 AI-inventory check degrades gracefully to a warning, but the feature it implies isn't schematized.
- **No billing** (Stripe planned), **no scheduled/continuous re-scanning** (checks are on-demand only — see §5), **custom SMTP** still owed (manual dashboard step).

**Bottom line (area 3):** The *engine* is real; the *edges* (connector UI, cloud/alerts pages, 4 dormant checks, AI/vendor registers, billing) are scaffolded or stubbed. The gap between "impressive demo" and "product" is mostly at these edges, and the app's own HANDOFF is refreshingly honest about most of it.

---

## 4. Where the code assumes Centience operates the infra (MSP-dependency points)

Concrete, code-level dependencies — each is a thing a standalone customer either can't use or would be misled by:

1. **Global-account integrations (the big three).** HaloPSA, NinjaRMM, and Keeper authenticate with **single env-var credentials** — one Centience-owned account each. Customer orgs are sub-entities *inside* Centience's tooling (Ninja sub-orgs, Halo clients, Keeper `centience/{orgId}/…` records). A firm with internal IT cannot connect *its own* Ninja/Halo/Keeper, and gets no value from these unless Centience runs them.
2. **Dropsuite reseller model.** Coded as "Centience's default archiving solution for managed clients," with a reseller/partner key concept. Journaling (EC-011) and backup (EC-012) checks assume the firm's archiving is Dropsuite-via-Centience.
3. **Device posture only through Centience's RMM.** The only endpoint patch/AV/encryption signal comes from NinjaRMM — i.e., only firms whose endpoints Centience manages get device governance. A standalone firm's Intune/Jamf/EDR is invisible to the platform.
4. **Remediation workflow assumes a Centience PSA.** Failing checks "sync to HaloPSA" as tickets — a Centience-ops loop, not a customer-facing remediation workflow.
5. **Remediation *copy* assumes an operator.** Check findings say things like "Log into Dropsuite and investigate the failed backup job" — written for a Centience technician, not a CCO at a standalone firm.
6. **The auth model can't represent the operator.** As in §1, one-user-one-org means there's no way for Centience staff to operate many client tenants from one console — the "we run it for you" motion has no in-app home today.

**Not MSP-dependent (the standalone core):** M365 and Google connectors (per-tenant creds), the enforcement engine's M365 + internal checks, DLP classifier, WSP/PDF/exam/incident features, MCP, onboarding, RLS. This set is genuinely operator-independent.

**Bottom line (area 4):** MSP-dependency is **concentrated in the "operations" integrations (Ninja/Halo/Keeper/Dropsuite), not in the core.** That's the good news — the dependency is peripheral and re-pointable, not woven through the data model.

---

## 5. Sized, sequenced punch list — gap to the growth-plan "Platform tier"

The plan's **Platform tier** = a low-touch, software-margin, **self-serve** subscription: "continuous monitoring dashboard, evidence vault, AI/vendor registers, policy templates, control mapping, score re-tracking, alerts, light-touch support," with transparent pricing and PLG signup — explicitly **standalone-capable**. Here's the gap, sequenced so each phase is independently shippable. Sizes are rough dev-days (S ≤ 2d, M 3–5d, L 6–10d, XL = multi-week); "Claude builds this," so these are build-effort, not team-quarters.

### Phase A — Make the M365-standalone MVP honestly shippable *(the fastest path to a real standalone sale)*
1. **De-mock `/connectors`; wire real per-org status** from `connector_credentials`; remove fake "connected" cards. Expose the **Google connect UI** (backend already exists). — **M**
2. **Guided M365 app-registration onboarding.** The self-serve unlock: a wizard + doc that walks a customer's internal IT through creating the read-only Azure app registration and pasting tenant/client/secret. This is *the* thing that turns "Centience connects it" into "the customer connects it." — **M**
3. **Set `CREDENTIAL_ENCRYPTION_KEY` in Vercel** and backfill-encrypt any plaintext secrets. Non-negotiable before real client tenants. — **S**
4. **Resolve the 4 dormant checks.** Ship EC-008 (doc-based, trivial) and EC-002 (Teams via Graph); mark EC-006/EC-009 as "requires cloud connector" instead of silently absent. Reconcile the stale MCP checks list. — **M**
5. **Assessment → gap-map PDF** (already queued in HANDOFF). Turn an enforcement run into the branded, downloadable **Governance Score** report the growth plan's funnel depends on. — **M**

### Phase B — Standalone integration breadth *(decouple governance depth from Centience-operated tooling)*
6. **Decision + refactor: per-org credentials for Ninja/Halo/Keeper, OR gate them "managed-only."** Either let a standalone customer/their MSP supply their own account, or hide these for non-managed orgs so the app never implies a capability a standalone tenant lacks. (Gating: **S**; true per-org refactor: **L**.)
7. **Intune device posture via the existing M365 app registration** (Graph `managedDevices` / device compliance). Cheapest real device-governance win because it **reuses the M365 connection** — no new customer-owned account needed. Delivers standalone endpoint checks (encryption, compliance state). — **L**
8. **One customer-owned EDR** (Defender for Endpoint is closest to the M365 story; CrowdStrike/SentinelOne next) and **Jamf** for Mac shops. — **L each**
9. **Google Workspace enforcement parity** (2SV/MFA, Vault archiving, retention) to match M365, so RIAs on Google are first-class. — **L**
10. **At least one standalone archiver** (Global Relay / Smarsh / Proofpoint / Mimecast) so archiving isn't Dropsuite-only. — **M each**
11. **Rewrite remediation copy** to be customer-facing (not "log into Dropsuite"), branching on managed vs. standalone. — **S**

### Phase C — Platform-tier product surface *(the features that justify the subscription + PLG)*
12. **Continuous monitoring for real.** Today checks are on-demand; add a scheduled re-scan (cron/edge) + **state-change alerts**. This backs the literal "continuously monitored" claim and the quarterly **re-score loop** in the plan. — **L**
13. **Score trend/history view** (data is already timestamped in `enforcement_results`). — **M**
14. **Vendor register + AI register as first-class** (migrate `ai_governance`; build vendor-risk EC-005 that's currently only namechecked). — **L**
15. **Policy template library + control-mapping surface** (the 942-line NIST CSF lib exists — expose it as templates/mappings in-app). — **M**
16. **Self-serve billing (Stripe)** + plan gating at the Platform price point; make `/onboarding` → paid without a human. — **L**
17. **Make `/cloud` and `/alerts` real** (depends on cloud connectors from Phase B for `/cloud`). — **M**

### Phase D — Managed tier & scale *(only if the Managed/MSP-base motion is served from this app)*
18. **Multi-tenant operator console** — the auth-model change (multi-org membership + staff role) so Centience can operate many client tenants from one login. This is the one **XL** item and the only place the current architecture actively resists the plan. Scope it deliberately; it's not needed for the Platform tier. — **XL**

**Sequencing logic:** Phase A alone yields a *truthful* standalone product for M365 firms (weeks, not quarters) — enough to sell the Platform tier to the growth plan's Phase-1 finance ICP. Phase B is the real "standalone depth" investment and the crux of the whole question. Phase C makes it a subscription worth $8–25K/yr rather than an assessment tool. Phase D is a separate track for the Managed/base motion and shouldn't gate Platform.

---

## Answering the strategic question directly

> *Can the governance platform stand alone?*

**Architecturally, yes — and the code is already built that way.** The multi-tenant spine, the per-tenant M365/Google credential model, and the self-serve onboarding are all standalone-shaped. The MSP-dependency is **peripheral** (four operations integrations on shared Centience accounts), **not structural** (it's not in the data model or the isolation model). The working strategic view in the HANDOFF — *"yes, and it should be the default"* — is supported by the code.

**But the honest current product is "standalone governance for an M365 firm," not "continuous governance across your whole stack."** The breadth that makes the second pitch true (device posture, EDR, cloud, non-Dropsuite archiving, IdP) is the Phase-B gap. Until that lands, a standalone customer with internal IT gets the M365 slice — real and sellable, but you should scope the pitch to it rather than the full three-layer story. And Phase A's honesty fixes (de-mock `/connectors`, encrypt secrets) should happen before the next standalone demo regardless.

*This review covers the app only. Anything about marketing-site positioning or which verticals to lead with lives with the growth plan, not here.*
