# Data Retention and Disposal Policy

| | |
|---|---|
| **Document owner** | `[VERIFY — security lead]` |
| **Version** | 1.0 — draft · **Effective** `[VERIFY]` · **Review** annually |
| **Parent** | [Information Security Policy](00-information-security-policy.md) |
| **Classification** | Internal — releasable to clients and prospects |

---

## 1. The governing principle

**Client evidence is held in trust, not owned.** Centience is a custodian of a record that belongs to the client. The concentration of that record across many regulated firms is a custodial obligation, not a commercial asset.

This is Rule 11 of the Centience Constitution and it governs everything below.

---

## 2. Retention schedule

| Data | Retained | Basis |
|---|---|---|
| Control test results and findings | `[DECIDE — recommend the client's applicable record period, default 6 years]` | Client's own recordkeeping obligation |
| Observed configuration and evidence items | As above | As above |
| Client policies and WSPs | Life of engagement + `[DECIDE]` | Client record |
| Attestation records | As findings | Supervisory evidence |
| **AI interaction content** | **Set by the client at onboarding. 30-day auto-delete and multi-year retention are equally supported.** | Client's determination |
| AI usage metadata — user, tool, surface, volume, spend | `[DECIDE]` | Operational and billing |
| Client environment credentials | Life of engagement. Destroyed on termination | Operational necessity |
| Platform audit logs | `[DECIDE — recommend minimum 1 year]` | Security and SOC 2 |
| Corporate email and documents | `[DECIDE]` | Business record |
| Meeting recordings and transcripts | `[DECIDE — recommend short; these are client communications]` | See §6 |
| Prospect and marketing contact data | Until opt-out or `[DECIDE]` | Legitimate interest |

**On the AI content row.** Whether AI prompts constitute required records is genuinely unsettled. Centience does not take a position on a client's behalf, does not default them into retention they did not choose, and will not manufacture a recordkeeping obligation in order to enlarge its own scope. The client decides with their counsel; the platform implements whatever they decide.

---

## 3. Termination

On termination of an engagement, the client receives **a complete export of their evidence record** in a portable format — findings, evidence, attestations, policies and decision history.

The export is provided within `[DECIDE — recommend 30 days]` of the termination date, at no additional charge.

**Any copy Centience retains to defend its own work must be agreed in the contract in advance.** It is never asserted after the fact. Where such a copy is retained:

- It is limited to what is necessary to evidence the work performed
- It is held under the same protections as live client data
- It is destroyed at the end of the agreed period
- The client is told, in the contract, that it exists

**Client environment credentials are destroyed on termination**, and the corresponding application registrations in the client's tenant are disabled. The client should also revoke consent on their side; Centience confirms in writing when its side is complete.

---

## 4. Disposal

- **Database records** are deleted through the application, which removes dependent records rather than orphaning them
- **Backups** age out on the backup retention cycle; a record deleted from production persists in backup until that cycle completes, and clients are told so
- **Documents** in Microsoft 365 are deleted through retention policy, not manually
- **Devices** are wiped before disposal or reassignment, with the wipe recorded
- **Paper**, where any exists, is shredded

---

## 5. Legal hold

Where litigation, an examination or a regulatory inquiry is reasonably anticipated, **routine deletion stops** for the affected records until the hold is lifted. A hold is applied by the CEO, recorded with its scope and date, and reviewed `[DECIDE — quarterly]` while it remains in force.

A legal hold overrides every retention period in §2, including a client-set short retention on AI content.

---

## 6. Meeting recordings

Client meetings are recorded and transcribed using Granola, which processes that content as a sub-processor.

- Participants are informed that recording is taking place
- Transcripts are retained for `[DECIDE — recommend the shortest period that serves the purpose]`
- Recordings and transcripts of client meetings are Class 1

`[VERIFY — confirm the current Granola retention setting and that participant notice is given consistently. This is the most likely place for a gap between practice and policy, and a client DDQ will reach it.]`

---

## 7. Aggregate use

Client control data may be aggregated only under **explicit opt-in consent**, and never in a form reasonably attributable to an organization. Silence is not consent.

Constitution Rule 12. It exists because the ordinary way this rule fails is not a decision to break it but the absence of one.
