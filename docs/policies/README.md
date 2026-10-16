# Centience Policy Set

**Status: drafts. Nothing here is approved, and nothing should be sent to a client or prospect until §3 below is completed.**

Written 24 September 2026 to support vendor due diligence requests, beginning with International Assets Advisory, and to serve as the policy foundation for SOC 2 readiness (`../platform/soc2-readiness-plan.md`).

---

## 1. What is here

| # | Document | Covers |
|---|---|---|
| 00 | [Information Security Policy](00-information-security-policy.md) | The master policy. Scope, roles, principles, and the index of everything else |
| 01 | [Access Control Policy](01-access-control-policy.md) | Identity, MFA, least privilege, privileged credentials, access reviews |
| 02 | [Acceptable Use Policy](02-acceptable-use-policy.md) | Staff use of firm systems, including AI tools |
| 03 | [Data Classification and Handling](03-data-classification-and-handling.md) | Four data classes and the handling rules for each |
| 04 | [Data Retention and Disposal](04-data-retention-and-disposal.md) | Retention periods, client evidence custody, termination export |
| 05 | [Encryption and Key Management](05-encryption-and-key-management.md) | Encryption in transit and at rest, credential encryption, key handling |
| 06 | [Change Management and Secure Development](06-change-management-and-sdlc.md) | Code review, approval, deployment, separation of duties |
| 07 | [Logging and Monitoring](07-logging-and-monitoring.md) | What is logged, retention, alerting, privileged action audit |
| 08 | [Incident Response Plan](08-incident-response-plan.md) | Severity, roles, the Reg S-P clocks, client notification |
| 09 | [Business Continuity and Disaster Recovery](09-business-continuity-and-disaster-recovery.md) | RTO/RPO, backup and restore, failure scenarios, testing |
| 10 | [Vendor and Third-Party Management](10-vendor-and-third-party-management.md) | Diligence, onboarding, ongoing review, sub-processor oversight |
| 11 | [Risk Management Policy](11-risk-management-policy.md) | How risk is identified, assessed, treated and accepted |
| 12 | [Onboarding and Offboarding](12-onboarding-and-offboarding.md) | Joiner, mover, leaver, with evidence per person |
| 13 | [Sub-Processor Register](13-sub-processor-register.md) | Every third party touching client data, with DPA status |

---

## 2. What is deliberately not here

**A risk assessment.** §11 is the *policy* describing how risk assessment is conducted. The assessment itself is a record of an exercise that was performed on a date, by named people, with findings. It cannot be drafted in advance — writing one would be fabricating a record.

**A penetration test summary.** Same reason, more so. This is a third party's report of work they did. It either exists or it does not.

**A SOC 2 report.** See `../platform/soc2-readiness-plan.md` §4a for what may and may not be claimed before one exists. Nothing in this set implies one.

> **Open item.** The IAA proposal §6 offers a risk assessment and a penetration test summary, and the 23 September call stated both were done. If they exist, attach them. If they do not, that needs correcting alongside the SOC 2 date — for the same reason and with the same person.

---

## 3. Before any of this is released

**Every `[VERIFY]` marker must be resolved.** They flag statements of fact about how Centience actually operates that only Orville can confirm. A policy asserting a control the firm does not operate is worse than having no policy, because it converts an informal gap into a documented failure.

**Every `[DECIDE]` marker must be answered.** These are cadences and thresholds — how often access is reviewed, how long logs are kept — where the document cannot choose for you.

Then: approve, date, version, and set the review cycle.

---

## 4. The discipline that governs this set

The same rule the product enforces, applied to ourselves.

`centience-platform/lib/ai-governance/monitoring-scope.ts` encodes a finding from a client CCO: *firms get findings for committing to procedures they don't follow, not just for rule violations.* She had her own policy's monitoring section softened because it created examinable obligations the firm could not sustain.

These policies are therefore written to be **operable by a firm of this size today**, not to look impressive in a questionnaire. Where a commitment would be aspirational, it is marked `[DECIDE]` rather than quietly asserted. A tightly scoped policy that is followed completely beats a broad one that is followed partly — and we sell that argument to clients, so we had better be able to survive it ourselves.
