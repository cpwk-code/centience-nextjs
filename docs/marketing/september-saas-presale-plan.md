# Centience Platform — September Launch Pre-Sale Plan

A founder-led pre-sale / pre-order plan to enter the September Platform launch with paying, committed customers and real case studies — not a cold start. Built for the actual state of things: the engine is real (M365/Google control monitoring, Governance Score, evidence vault, WSP/PDF, DLP, control mapping), but self-serve billing and some edges aren't finished yet. So this is a **high-touch Founding Customer program**, not a public self-serve checkout. That's a feature, not a limitation — it's how every good B2B SaaS pre-sells.

**Timeline anchors:** design-partner test starts **end of July** · full launch **early September**.

---

## 1. Why pre-sell (the objective)

- **Launch with revenue and proof, not hope.** Walk into September with signed founding customers and 2–3 reference stories instead of an empty pipeline.
- **De-risk the product.** Design partners in the July test surface what's broken/missing before the public sees it.
- **Fund the last mile.** Pre-orders (deposits / annual prepay) bring in cash now to finish the platform edges.
- **Create urgency + scarcity.** A time-boxed, limited Founding Customer cohort is a real reason to decide now instead of "circle back after launch."

This is the SaaS/Platform-tier motion. It runs *alongside* — not instead of — the base MSP expansion that drives the bulk of the near-term $4M.

---

## 2. Targets (keep them concrete)

| Milestone | By when | Target |
|---|---|---|
| **Design partners** (free/deep-discount, hands-on, feedback + testimonial) | July test (end July) | **3–5** |
| **Founding Customers pre-committed** (order form + deposit/prepay) | By launch (early Sept) | **12–20** |
| **Pre-sold ARR** | By launch | **~$120K–$250K** (see pricing) |
| **Reference stories / mini case studies** | By launch | **3** |

These are proof-and-momentum numbers, not the whole $4M. The point is a credible, revenue-backed launch and repeatable proof you can scale.

---

## 3. The Founding Customer offer

A limited, time-boxed charter cohort. Confirmed pricing (anchored to Nightfall/Strac, who charge $12,500/yr for DLP-for-AI *alone* — the platform does far more, so that's the floor, not the target):

- **Platform (SaaS) list at launch: $18,000/yr** (single framework) · **Platform+ $25,000/yr** (multi-framework/entity). **Floor: $12,500/yr — never below.**
- **Founding price: $12,500/yr, locked 3 years** — the pitch: *"pay a DLP-tool price, get the whole platform,"* while list rises to $18K+.
- **Reserve a launch slot with a deposit:** refundable **$1,000** deposit (applies to year one) OR prepay year one at the founding rate for the biggest discount.
- **Note:** SaaS is the *wedge* and qualifier. The revenue engine is the premium managed/co-managed book (~$450–550/user/mo, $10–25K/mo accounts) — see the internal Premium Account Growth & Pricing doc.
- **Founding perks:**
  - Direct founder access + guided white-glove onboarding at launch
  - Influence on the roadmap (they help prioritize what gets built next)
  - "Founding Customer" recognition
  - First access to new modules (continuous re-scan, vendor/AI registers) as they ship
- **Risk reversal:** launch-window satisfaction guarantee (e.g., 60-day money-back after go-live) — removes the "it's not proven yet" objection.
- **Cap it:** "Founding Customer pricing is limited to the first 20 firms." Real scarcity, and it matches what you can actually onboard by hand.

**Design partners** (the July test cohort) are a step earlier: free or near-free for ~60–90 days in exchange for weekly feedback, a reference call, and a testimonial. Convert them to Founding Customers at launch.

---

## 4. Who to target — three concentric rings (work them in order)

1. **Ring 1 — the base (warmest, start here).** Compuwork's existing MSP clients who are regulated (RIAs, BDs, healthcare). They already trust you and already have the pain. These are your first design partners and your highest-conversion pre-orders. A handful of yes's here proves the motion.
2. **Ring 2 — warm network + referrals.** Past clients, partners, PE portfolio contacts (the 135-company PE relationship is a standout — one default-provider yes there is a cohort). LinkedIn 1st-degree.
3. **Ring 3 — the 316-lead list.** The July 2026 CCO/COO list Matt is working. Use the free **Governance Score** as the opener; the highest-scoring-intent responders become founding-customer conversations.

Sequence matters: **lock 3–5 design partners from Ring 1 for the July test now**, then open the Founding Customer offer to Rings 1–2 in August, then Ring 3 as the warm outreach produces engaged leads.

---

## 5. The pre-sale flow (the funnel)

Every path routes through the free Governance Score — it's the qualifier and the wedge:

1. **On-ramp:** prospect runs the free **Governance Score** (or you run it with them). They see their 0–100 score + priority gaps mapped to the rules. Instant, personalized pain.
2. **Demo:** 30-min working session — show the platform *on their environment* (connect M365 read-only), turn their gaps into a live example. (Set `CREDENTIAL_ENCRYPTION_KEY` in Vercel first — the connect flow 500s without it.)
3. **Founding offer:** present the charter program — founding price, price-lock, perks, guarantee, the cap.
4. **Close to a pre-order:** sign the one-page order form / LOI + take the deposit (or annual prepay). Reserve their September onboarding slot.
5. **Onboard at launch:** white-glove onboarding in September; convert design partners; collect the testimonial.

---

## 6. What to build (collateral) — I can produce these

- **Founding Customer one-pager** — the offer, perks, price-lock, guarantee, the cap. (PDF/web.)
- **Pre-order form / Letter of Intent** — name, firm, tier, founding price, deposit, price-lock term, expected go-live. Simple and signable (DocuSign/PDF).
- **A `/founding` (or `/early-access`) page** on the site — the charter offer + a "Reserve your slot" form that feeds HubSpot as a pre-order lead. (Ties into the platform page we shipped.)
- **Design-partner brief** — what the July test asks of them (time, feedback, reference) and what they get.
- **A short demo script + gap-to-offer talk track** for the working sessions.

Say the word and I'll draft any/all of these.

---

## 7. Pre-order mechanics & tracking

- **Instrument:** a countersigned **order form or LOI** is enough to count as pre-sold; a **deposit or annual prepay** makes it real money and a real commitment. Prefer prepay-at-founding-rate for the discount; offer the small deposit as the low-friction option.
- **No self-serve checkout needed** — you're invoicing founding customers by hand, which fits the pre-launch stage (Stripe/self-serve is a later platform milestone).
- **Track in HubSpot:** a "Founding Customer" pipeline — stages: Score completed → Demo booked → Offer presented → Pre-order signed → Deposit paid → Onboarded. The site already upserts anyone who runs the Score, so these tie to the contact record.

---

## 8. The month-by-month plan

**Late July (test kickoff)**
- Lock 3–5 Ring-1 design partners; start the platform test with them.
- Finalize founding pricing + the guarantee; build the one-pager + order form.
- Set `CREDENTIAL_ENCRYPTION_KEY` + the two Supabase Auth config steps so demos/onboarding actually work.

**August (pre-sale push)**
- Open the Founding Customer offer to Rings 1–2. Run Governance Score → demo → offer.
- Warm outreach (Matt) drives Ring-3 Score completions; route engaged responders to founding conversations.
- Weekly design-partner feedback → fix the edges. Collect first testimonial.
- Track toward 12–20 signed pre-orders.

**Early September (launch)**
- Onboard the founding cohort white-glove; convert design partners.
- Publish 2–3 reference stories.
- Announce launch to the full list, leading with founding-customer proof ("X regulated firms already onboarded").

---

## 9. Metrics to watch

Score completions → demos booked (aim ~40%+ of engaged) → offers presented → pre-orders signed (aim ~30–40% of demos in the warm rings) → deposit/prepay collected. Weekly review; if demo→pre-order is low, the issue is the offer or the demo, not the top of funnel.

---

## 10. Guardrails (stay honest — your audience checks)

- **Sell it as what it is: a Founding Customer / charter program for a launching product.** Don't imply a finished self-serve SaaS. Regulated buyers respect "early, hands-on, price-locked" far more than overselling.
- **Demo on real capabilities only** (per the platform review) — DETECT + EVIDENCE. Say "detected / recommended," never "enforced," for anything Centience doesn't operate.
- **Don't take real client tenants live until `CREDENTIAL_ENCRYPTION_KEY` is set** — connector secrets must be encrypted.
- **Keep the cohort small enough to onboard by hand.** Overselling founding slots you can't service is worse than fewer, delighted references.

---

_Companion docs: `path-to-4m-h2-2026-gtm-execution.md`, `linkedin-outreach-sequence.md`, `hubspot-integration.md`, `centience-platform-standalone-review.md`._
