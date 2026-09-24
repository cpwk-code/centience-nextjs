# Proposal — International Assets Advisory

**AI Governance and Supervision**

**DRAFT FOR ORVILLE'S REVIEW — DO NOT SEND AS-IS.**
Two items need your decision first; both are flagged inline in `>` blocks and must be
resolved or removed before this goes to David. Prepared 23 September 2026, following
the introductory call of 17 September and the platform demonstration of 23 September.

---

## 1. What you asked us to solve

From both conversations, three things:

**Visibility.** Your advisors are adopting AI faster than any approval process can move — note-takers, assistants, and general-purpose models, bought individually, often on accounts that do not carry your domain. You can see that it is happening. You cannot see what goes into those tools or what comes back.

**Supervision you can evidence without over-committing.** Rich needs a review workflow that surfaces what matters rather than everything, on a documented basis — the same shape as your lexicon-based email review in Global Relay, applied to a channel that currently produces no logs at all. As David put it, a firm that appears to review every item will be held to reviewing every item.

**Proof that an AI agent stayed within its entitlements.** As Matt integrates Claude with your systems, the question a regulator will ask is how you know the agent only reached the folders it was granted. That is a control question, not a records question, and it needs an answer that does not depend on the AI's own account of itself.

---

## 2. What we propose

### 2.1 Discovery first

Before anything is configured, the platform sweeps for AI tools already in use across three independent signals: OAuth application consents, sign-in activity, and endpoint inventory. Each answers a different question and each alone gives a confident and wrong picture.

If a permission or connector is missing, you are told the sweep could not run. **You will never be shown a clean result that only means we could not look.** For a firm with independent contractors on unmanaged accounts, that distinction is the whole value of the exercise.

Discovered tools land in your inventory as *unapproved*, for triage. Once someone records a decision, re-scanning never overwrites it.

### 2.2 Supervision, risk-ranked

AI interactions are scored against lexicons and data categories you define — client PII, account numbers, trade and suitability language, complaint indicators, and advisors on heightened supervision. Items are surfaced by severity, not in bulk.

In the demonstration this was 71 items surfaced from 466 interactions. Everything remains retrievable; the queue is what requires attention.

Reviewers annotate and clear, with the disposition and timestamp retained. Multiple reviewers, assigned by user or by activity, with viewer, CCO, CISO, admin and custom roles. Notifications are configurable, including alerts on items left unreviewed past a threshold you set, and a weekly digest for anyone who would rather not log in.

**PII detection is a setting, not a default.** You told us on 17 September that some workflows require client information to reach the model — Rich's AML work among them. PII can be scored as a risk, or not, per your instruction.

### 2.3 Agent entitlement evidence

This is David's question, and there are two ways to answer it.

| | How it works | Trade-off |
|---|---|---|
| **A — File-server connection** | Centience reads your file store and compares what the AI actually touched against what it reports touching | Strongest control evidence. Requires granting Centience read access to your file server |
| **B — Endpoint and browser DLP** | A connector at the browser and endpoint observes, and where you choose redacts or blocks, reporting to the Claude Compliance API | No Centience access to your file server. Evidence comes from the interaction boundary rather than the file store |

**We recommend B**, on your own reasoning from the call: it answers the entitlement question without widening your attack surface, and it is the option your security review will find easier to approve. It is included in the pricing below.

Redaction is configurable **per group**. It can run for the groups where it helps and stay off where client information in the model is the point of the work.

### 2.4 Licence and adoption reconciliation

Usage and spend per user, across API, chat, code and collaborative surfaces, reconciled against the seats you are paying for. In the demonstration this showed 24 seats purchased against 12 active — the two problems it surfaces at once are licences nobody uses and use on accounts nobody is paying for.

### 2.5 Policy and control mapping

Your AI policy is uploaded or generated, then mapped to the controls the engine tests, so the document and the environment agree. Findings carry a named owner, the obligation or policy clause behind them, and a timestamped record of when each was last verified.

---

## 3. Scope and dependencies

**In scope:** AI governance and supervision for International Assets Advisory across its registered entities, covering the governed users named at onboarding.

**Not in scope, and stated so it is not assumed:** identity and access, records and retention, device and infrastructure posture, third-party and vendor risk, and incident workflow are separate governed domains. They are available and priced in §4; none is included here. **The supervision record covers governed AI users only.** Advisors outside the governed set are not monitored and should not be represented as such.

**Dependencies on your side:**

- **Enterprise licensing.** API access requires enterprise-tier subscriptions — Claude Enterprise, and ChatGPT Enterprise if added later. Consumer and team tiers do not expose the APIs this depends on.
- **Centralized access.** Governance operates against firm-held tenancy. Tools bought individually by advisors on personal accounts cannot be connected until they are brought under the firm's tenancy.
- **A named administrator** able to authorize the application registrations at onboarding.

**Your existing IT provider stays in place.** We govern the technology regardless of who operates it.

---

## 4. Commercial terms

### Pricing

| | |
|---|---|
| **Platform access and AI Governance — includes up to 50 governed users** | **$21,000 / year** |
| Additional governed users above 50 | **$150 per user / year** |
| **DLP and redaction** (§2.3, option B) | **$4 per user / month** |
| Onboarding and configuration | **Included** |

**Illustrative, at the figures you gave us:**

| Scope | Annual |
|---|---|
| 30 home-office users | **$22,440** |
| 150 users, home office and field | **$43,200** |

Additional governed domains, if added later: $6,000–8,000 each, or $30,000 for all six.

### Terms

- **Annual agreement.** Billed annually.
- **30-day cancellation.** If the platform is not what you expected, cancel within 30 days of go-live for a full refund, no commitment beyond it.
- **Your evidence is yours.** On termination you receive a complete export of your evidence record. Any copy we retain to defend our own work is agreed in the contract in advance, never asserted afterwards.
- Pricing held for 60 days from the date of this proposal.

---

## 5. Onboarding

Configuration is done with you. No third-party implementation consultant is required.

| | |
|---|---|
| **Week 1** | Regulatory scoping, administrator authorization, tenant connection, discovery sweep |
| **Week 2** | AI policy uploaded or generated, control mapping, lexicons and risk thresholds set with Rich |
| **Week 3** | Reviewer roles, assignment rules, notification cadence, DLP groups defined |
| **Week 4** | First supervision cycle reviewed together; baseline evidence record established |

---

## 6. Vendor due diligence

Enclosed separately, from the policy set at `../policies/`:

- Information Security Policy, and the twelve policies beneath it — access control, acceptable use, data classification, retention and disposal, encryption and key management, change management and secure development, logging and monitoring, vendor management, risk management, onboarding and offboarding
- Incident Response Plan, including our 72-hour client breach notification commitment
- Business Continuity and Disaster Recovery Plan
- Sub-processor register with data location and assurance status

> **[ORVILLE — RISK ASSESSMENT AND PENETRATION TEST]**
>
> The 23 September call stated both were done. If they exist, attach them and delete this block.
> If they do not, remove them from this list — do not leave an offer of a document that cannot
> be produced on request. A reviewer who asks for one and is told it is coming has learned
> something about every other claim in this package.

> **[ORVILLE — DECISION REQUIRED BEFORE SENDING]**
>
> On the call you said the SOC report is "in process" and "probably by the end of the year."
> The readiness plan (`docs/platform/soc2-readiness-plan.md`) puts a Type II at 6–9 months
> from a standing start, including a three-month observation window, and the decision to
> pursue was taken on 17 September. **End of year is not achievable for a Type II.**
>
> David has a vendor due diligence checklist and will diarise whatever date appears here.
> Correct it now while it is cheap. Replace this block with whichever is true:
>
> - *"SOC 2 Type II observation window opens [month]. Report expected [quarter]."* — defensible, and a reviewer can work with it.
> - *"SOC 2 Type I expected [date] as an interim, with Type II to follow [quarter]."* — only if a Type I is actually commissioned, and only described as an interim.
>
> Do not leave "by the end of the year" in a document his legal team will keep.

> **[ORVILLE — REFERENCES]**
>
> David asked which financial services firms are using the platform today. Name only firms
> that have agreed to take the call. If the honest answer is two firms currently onboarding,
> say that — he will call them, and he will ask what they pay.

**Independence.** Centience verifies and evidences the controls it operates. Where genuine independence is required, an independent assessor consumes our evidence rather than competing with it. We will not tell you we are both the builder and the auditor.

---

## 7. Next steps

1. This proposal and the due diligence package with you — **by [date]**
2. Sample agreement to your legal team — **by [date]**
3. Reference calls, on request
4. Optional: a short live run against your own tenant before contracting, so you see what the discovery sweep finds in your environment rather than in a demonstration account

---

**Centience** · centience.ai · hello@centience.ai · (877) 945-7177
*Managed technology operations by Compuwork — #77, CRN 2026 Fast Growth 150.*
