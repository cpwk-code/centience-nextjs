# Session Handoff — Centience Growth Plan

> Portable summary to continue work in a new session. Everything strategic is committed in **PR #1** on branch `claude/centience-marketing-50m-plan-g2u8mf`.

## What exists now (committed)
- **Plan:** `docs/marketing/centience-2028-growth-plan.md` (repo `cpwk-code/centience-nextjs`) — currently **v2** (platform-led).
- **Branch:** `claude/centience-marketing-50m-plan-g2u8mf`
- **Draft PR:** #1 — "Add Centience 2028 growth plan (v2, platform-led) → $50M ARR"

## Key facts about the business
- **Centience** = continuous AI + technology governance for regulated firms (3 layers: managed infrastructure + cybersecurity + AI/data governance). Founder/CEO: Orville Matias. Site: centience.ai.
- **Origin:** evolved from **Compuwork, an MSP with ~75 clients and ~$2.2M revenue** — the launchpad.
- **Decisions made:**
  1. Build the **platform tier** (productize; not services-only).
  2. Starting point is the ~$2.2M Compuwork base.
  3. The "free 5-day assessment" becomes an **automated self-scored Governance Score**, not a delivered engagement.
  4. **LinkedIn outreach = Marketing Shed** (agency), fueled by our Apollo lists + sequences (HeyReach removed).

## Strategy in the plan (v2)
- **Three tiers:** free **Governance Score** (automated hook + data moat) → **Governance Platform** subscription (~$15K, software margin, carries volume) → **Managed Program** (~$110K, services margin, enterprise ACV).
- **Path to $50M:** $2.2M → $4.5M (2026) → $18M (2027) → $50M (2028); ~1,700-customer mix where only ~230 carry heavy delivery.
- **5 growth engines (ranked):** 1) expand the Compuwork base · 2) the Governance Score funnel · 3) product-led + sales-assisted acquisition · 4) channel/partnerships · 5) MSP tuck-in rollups (accelerator).

## Open strategic question (in progress)
**Can the governance platform stand alone — without Centience operating the MSP/infra — selling to firms with internal IT or an existing MSP?**
- Working view: **Yes, and it should be the default.** Multiplies TAM, removes rip-and-replace friction, turns other MSPs into partners, is the scalable tier.
- **Make-or-break = the integration layer** (M365/Google, Intune/Jamf MDM, EDR, Okta/Entra IdP, cloud, archiving). With integrations = real continuous governance; without = "just a GRC tool."

## Why a new session
The app lives in **`cpwk-code/centience-platform`**, which was **not in this session's repo scope**. `add_repo` needed an interactive approval a non-interactive session couldn't grant; git clone and direct reads were denied. Credentials/email cannot override the scope.

## ▶️ Do this in the new session
1. **Start it with BOTH repos in scope:** `cpwk-code/centience-nextjs` **and** `cpwk-code/centience-platform` (add both as sources), or grant `centience-platform` to Claude Code in GitHub settings first.
2. **First ask:**
   > "Review the centience-platform app and give an honest assessment of what's missing — especially whether the governance platform can run standalone without the MSP side — and the gap to the Platform tier in the growth plan (`docs/marketing/centience-2028-growth-plan.md` on branch `claude/centience-marketing-50m-plan-g2u8mf`, PR #1)."
3. Review will cover **5 areas:** architecture / multi-tenancy · the **integration layer** (the crux) · built-vs-scaffolded · MSP-dependency points · sized gap-to-Platform-tier punch list.

## Deliverables queued (not yet done)
- [ ] Honest code review of `centience-platform` (blocked on access).
- [ ] Governance Score MVP spec (question set, scoring logic, benchmark, tier-routing).
- [ ] Compuwork base-expansion QBR kit (founder script + one-pager).

## Notes / constraints
- No outbound, emails, lead sourcing, or CRM/product changes have been executed — planning only.
- Connected tools (HubSpot, Apollo, Resend, Make, etc.) must be **authorized in an interactive session** before any automation can run.
