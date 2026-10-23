# Business Continuity and Disaster Recovery Plan

| | |
|---|---|
| **Document owner** | Orville Matias, Chief Executive Officer |
| **Version** | 1.0 — draft · **Effective** `[VERIFY]` · **Review** annually, and after any invocation |
| **Parent** | [Information Security Policy](00-information-security-policy.md) |
| **Classification** | Internal — releasable to clients and prospects |

---

## 1. Scope and honest framing

Centience is a small firm operating on managed cloud infrastructure. It does not run data centres, and its continuity posture rests largely on provider resilience plus the firm's ability to work from anywhere.

**This plan says so rather than implying capability the firm does not have.** A client's due diligence reviewer will respect an accurate small-firm plan and will find an inflated one immediately.

---

## 2. What the business must be able to do

In priority order:

1. **Protect client data.** Availability failures are recoverable; confidentiality failures are not.
2. **Continue control testing and evidence capture**, because clients rely on it being continuous.
3. **Respond to client incidents**, including the 72-hour notification commitment, which does not pause because Centience has its own problem.
4. Restore platform access for clients.
5. Resume normal service delivery.

---

## 3. Recovery objectives

| | Target | Basis |
|---|---|---|
| **RTO** — platform availability | `[DECIDE — recommend 24 hours]` | Provider-dependent |
| **RPO** — maximum data loss | `[DECIDE — recommend ≤1 hour]` | Depends on Supabase point-in-time recovery being enabled |
| **Incident response capability** | Immediate, always | Does not depend on platform availability |
| **Client notification capability** | Immediate, always | Must survive loss of firm email — see §6 |

**`[VERIFY — the critical item: confirm whether Supabase point-in-time recovery is enabled on the production project, and the backup retention window. The RPO above is not achievable without it, and this is the first technical question a reviewer will ask about this plan.]`**

---

## 4. Scenarios

### 4.1 Hosting provider outage (Vercel)
Application unavailable; data intact.
**Response:** confirm via provider status, notify clients if beyond `[DECIDE]`, monitor. No action restores service faster than the provider.
**Client impact:** platform inaccessible. Scheduled control testing resumes on recovery.

### 4.2 Database provider outage (Supabase)
Application unavailable; data intact unless the incident is destructive.
**Response:** as above. If data loss is indicated, restore from point-in-time backup to a new project and repoint the application.
**`[DECIDE — the restore procedure should be written down and rehearsed before it is needed. §8.]`**

### 4.3 Data corruption or destructive error
Bad migration, erroneous deletion, or compromise.
**Response:** stop writes, identify the last good point, restore to a new environment, verify integrity, repoint. **Treat as a security incident until ruled out** — see [Incident Response](08-incident-response-plan.md).

### 4.4 Loss of a key person
A firm this size has real key-person concentration.
**Response:** production access is held by more than one person `[VERIFY — confirm, and if it is currently held by one person, that is the single highest-impact finding in this plan and should be fixed this week]`. Credentials are recoverable through the password manager's recovery process. Client relationships are documented in the CRM.

### 4.5 Loss of office or premises
Minimal impact. Staff work from managed devices on cloud services. No firm data is held only on premises. `[VERIFY]`

### 4.6 Sub-processor failure
An AI provider, DLP provider or telemetry provider becomes unavailable or is breached.
**Response:** per [Vendor Management](10-vendor-and-third-party-management.md) and, where client data is implicated, [Incident Response](08-incident-response-plan.md) §6. Degrade honestly — **a check that cannot run is reported as unable to run, never as passing.**

### 4.7 Ransomware or compromise of firm systems
**Response:** [Incident Response Plan](08-incident-response-plan.md), Severity 1. Isolate, preserve evidence, restore from backup, rotate all credentials including client environment credentials.
**Do not pay without CEO and counsel involvement.**

---

## 5. Backups

| | |
|---|---|
| Platform database | Provider-managed automated backup. `[VERIFY — frequency, retention, PITR status]` |
| Object storage | Provider-managed `[VERIFY]` |
| Source code | GitHub, distributed across developer clones |
| Microsoft 365 | Provider retention plus `[VERIFY — third-party backup in use?]` |
| Infrastructure configuration | In source control where possible; secrets in environment configuration `[VERIFY — are secrets backed up anywhere recoverable?]` |

**A backup that has never been restored is an assumption, not a control.** See §8.

---

## 6. Communication during disruption

| | |
|---|---|
| Staff | `[VERIFY — primary and out-of-band channel]` |
| Clients | Email, plus direct contact for materially affected clients |
| **If firm email is unavailable** | `[DECIDE — name the alternative now. The 72-hour client notification commitment does not pause because Microsoft 365 is down.]` |

A current client contact list is maintained and accessible outside firm systems. `[VERIFY]`

---

## 7. Invocation

The CEO invokes this plan. On invocation: record the time, assign the roles from the Incident Response Plan, open a timeline, and notify staff.

---

## 8. Testing

| Test | Frequency | Records |
|---|---|---|
| **Backup restore** — restore to a scratch environment and verify integrity | `[DECIDE — recommend semi-annually]` | Date, performer, data restored, time taken, issues |
| Tabletop exercise | Annually | Date, participants, scenario, findings |
| Key-person absence walk-through | Annually | Confirm a second person can perform each critical task |

**The restore test is the one that matters.** A documented restore that actually happened is the difference between this plan and a wish. Clients ask for the date of the last successful restore, and Centience asks its own clients the same question.

`[VERIFY — has a restore ever been performed? If not, do one before this plan is released, and record it.]`

---

## 9. Dependencies on this plan

Clients relying on Centience for continuous control testing should understand that a platform outage suspends testing but does not lose evidence already captured. Where a client's own obligations require continuity assurances, those are set in the engagement agreement.
