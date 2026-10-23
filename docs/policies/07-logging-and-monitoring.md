# Logging and Monitoring Policy

| | |
|---|---|
| **Document owner** | `[VERIFY — engineering lead]` |
| **Version** | 1.0 — draft · **Effective** `[VERIFY]` · **Review** annually |
| **Parent** | [Information Security Policy](00-information-security-policy.md) |
| **Classification** | Internal — releasable to clients and prospects |

---

## 1. Principle

If a privileged action cannot be attributed to a person, a time and a target, it did not happen in a way the firm can defend.

---

## 2. What is logged

| Source | Captured | Retention |
|---|---|---|
| Application — authentication | Sign-in, sign-out, failure, MFA challenge | `[DECIDE — recommend ≥1 year]` |
| Application — privileged actions | Actor, timestamp, target, action. Org and user administration, module configuration, connector changes, access to client evidence | `[DECIDE — recommend ≥1 year]` |
| Control testing | Every check run, with result, timestamp and observed configuration | Per client retention — §04 |
| Infrastructure (Vercel) | Request and function logs | Provider default `[VERIFY]` |
| Database (Supabase) | Connection and query logs | Provider default `[VERIFY]` |
| Corporate identity (Entra ID) | Sign-in and audit logs | `[VERIFY — current M365 licence retention]` |
| Endpoints (NinjaRMM) | Device state, patch status, software inventory | `[VERIFY]` |

**Never logged:** credential values, encryption keys, session tokens, or client end-customer personal information.

---

## 3. Privileged action logging — current state

**`[VERIFY — and this one needs an honest answer.]`**

The platform has an audit logging module (`lib/audit.ts`), but as of the September 2026 review it was referenced in only one place. SOC 2 will expect privileged action logging with actor, timestamp and target **across the administrative surface**, and Constitution Rule 11 implies the same for any access to client evidence.

Until that coverage exists, this policy describes an intention rather than a control. **Either extend the coverage before this policy is released, or describe the current state accurately and give the remediation date.** Publishing the stronger version and being found out is materially worse than publishing the honest one.

This is tracked in `../platform/completeness-gap-list.md` §6.

---

## 4. Monitoring and alerting

| Condition | Alert to | Response |
|---|---|---|
| Application error rate above threshold | `[VERIFY — channel]` | Investigate within `[DECIDE]` |
| Failed authentication cluster | `[VERIFY]` | Investigate; consider incident |
| Scheduled control re-scan failure | `[VERIFY]` | Investigate same business day — clients are relying on continuous testing |
| Credential encryption failure | `[VERIFY]` | **Immediate.** Indicates key unavailability; writes are failing closed |
| Provider status incident | `[VERIFY]` | Per [BCDR](09-business-continuity-and-disaster-recovery.md) |

`[DECIDE — this firm does not have 24/7 monitoring and should not claim it. State the monitored hours plainly. Business-hours monitoring, honestly described, is defensible; an implied NOC is not.]`

---

## 5. Review

Logs are reviewed `[DECIDE — cadence]` for anomalies, and on any incident or investigation. The review is recorded: date, reviewer, scope, outcome.

Choose a cadence that will actually be kept. An unreviewed log is still useful forensically, but a policy that promises weekly review and delivers none is a finding.

---

## 6. Integrity

Logs are held in systems where staff cannot alter historical entries. Deletion of log data before its retention period is a privileged action requiring CEO approval and is itself recorded.

---

## 7. Client-facing evidence

Control test results are not merely logs — they are the client's evidence record. They are timestamped at production, retained per the client's schedule, exportable on request, and covered by the custody obligations in [Data Retention and Disposal](04-data-retention-and-disposal.md).
