# Incident Response Plan

| | |
|---|---|
| **Document owner** | `[VERIFY — security lead]` |
| **Version** | 1.0 — draft · **Effective** `[VERIFY]` · **Review** annually, and after every Severity 1 or 2 incident |
| **Parent** | [Information Security Policy](00-information-security-policy.md) |
| **Classification** | Internal — releasable to clients and prospects |

---

## 1. Scope

Any event that compromises, or may compromise, the confidentiality, integrity or availability of Centience or client information. Includes suspected events. **A suspicion is reported and triaged; it is not filtered at source by the person who noticed it.**

---

## 2. Severity

| | Definition | Examples |
|---|---|---|
| **Sev 1** | Confirmed unauthorized access to client information, or total service loss | Credential compromise with evidence of use; database exposure; ransomware |
| **Sev 2** | Credible risk of unauthorized access, or major degradation | Lost unencrypted device; phishing with credentials entered; tenant isolation defect; sub-processor breach affecting us |
| **Sev 3** | Security-relevant, contained, no client data at risk | Blocked phishing; failed intrusion attempt; minor misconfiguration found and fixed |
| **Sev 4** | Informational | Policy violation with no data impact |

**When severity is uncertain, treat it as the higher one** until the facts say otherwise. Downgrading later is cheap; discovering you under-triaged is not.

---

## 3. Roles

| Role | Held by | Responsible for |
|---|---|---|
| Incident Lead | `[VERIFY]` | Running the response, declaring severity, deciding closure |
| Executive | Orville Matias, CEO | Client and regulatory notification decisions, external communication |
| Technical Lead | `[VERIFY]` | Containment, evidence preservation, remediation |
| Scribe | Assigned at declaration | The timeline. Every action, decision and time |

One person may hold more than one role in a firm this size, **except that the Executive role for notification decisions is never delegated to the person who caused or discovered the incident.**

---

## 4. Process

### Report
Anyone, immediately, to `[VERIFY — channel and out-of-hours contact]`. No triage by the reporter.

### Declare
Incident Lead confirms and assigns severity. The clock starts here and is recorded.

### Contain
Stop the bleeding before understanding it fully. Revoke credentials, disable accounts, isolate devices, disable connectors.

**Preserve evidence while containing.** Do not wipe a compromised device before it has been imaged; do not delete logs to clean up.

### Assess
- What data, whose, how much, over what period?
- Client information involved? Which clients?
- Client end-customer personal information involved?
- Is it ongoing?

### Notify
Per §5. **The clocks start at discovery, not at the end of the investigation.**

### Remediate
Fix the cause, not just the symptom. Verify the fix. Record what was done.

### Close
Incident Lead confirms containment and remediation are complete and evidenced.

### Review
Within `[DECIDE — recommend 10 business days]` for Sev 1 and 2: what happened, what worked, what did not, what changes, who owns each change and by when. **Blameless on people, unsparing on process.**

---

## 5. Notification obligations

### 5.1 To clients — the 72-hour commitment

**Centience is a service provider to covered institutions.** Amended Regulation S-P requires those institutions to have policies reasonably designed to ensure their service providers notify them promptly of a breach.

> **Centience notifies an affected client as soon as possible and no later than 72 hours after becoming aware of a breach of security resulting in unauthorized access to a system holding that client's information.**

This is a commitment Centience makes and is measured against. The 72 hours runs from **awareness**, not from confirmation, not from completion of the investigation.

The first notification does not need to be complete. It needs to be on time, accurate about what is known and honest about what is not.

**Initial notification contains:** what happened, when discovered, what information is involved so far as known, what has been done, what the client should consider doing, and who to contact.

### 5.2 Clients' own downstream obligations

A client receiving our notification may owe their own customers notification under Regulation S-P **within 30 days** of determining that sensitive customer information was, or was reasonably likely to have been, accessed without authorization.

**Their 30-day clock may depend on our 72-hour notice.** That is the reason the commitment above is firm, and why it is not softened for convenience during an incident.

Centience supports the client's assessment with the facts they need to make their own determination. **Centience does not make that determination for them**, and does not advise on whether their obligation is triggered — that is their counsel's judgement.

### 5.3 Other

| | |
|---|---|
| Law enforcement | At the CEO's discretion, on advice |
| Cyber insurance | Per the policy's notification requirements `[VERIFY — carrier, policy number, notification deadline]` |
| Regulators | Centience is not itself a registrant. Obligations arise through client contracts |
| Sub-processors | Where their systems are implicated, engaged immediately |

---

## 6. If the incident is at a sub-processor

Centience remains accountable to its clients for information held by its sub-processors.

On notification from a provider: assess exposure to Centience data, assess which clients are affected, and **run §5.1 on our own clock**. The 72 hours runs from the moment Centience becomes aware, not from the moment the sub-processor completes their investigation.

The [Sub-Processor Register](13-sub-processor-register.md) records the notification commitment obtained from each provider.

---

## 7. Communication

All external communication about an incident goes through the CEO. Staff do not discuss incidents with clients, press or on social media.

Internal coordination uses `[VERIFY — channel]`. **Where firm systems may be compromised, coordination moves to an out-of-band channel** agreed in advance. `[DECIDE — name it now; deciding during an incident is too late.]`

---

## 8. Testing

This plan is exercised at least annually through a tabletop involving all named roles, with the date, participants, scenario and findings recorded. `[DECIDE — month]`

**An untested plan is a document, not a capability.** The first Severity 1 should not be the first time anyone has read this.

---

## 9. Contacts

`[VERIFY — complete before release, and keep a copy accessible outside firm systems]`

| | |
|---|---|
| Incident Lead | |
| Executive | Orville Matias · |
| Technical Lead | |
| Cyber insurance | |
| External counsel | |
| Forensics provider | |
