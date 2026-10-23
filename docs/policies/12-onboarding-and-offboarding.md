# Onboarding and Offboarding Policy

| | |
|---|---|
| **Document owner** | `[VERIFY — security lead]` |
| **Version** | 1.0 — draft · **Effective** `[VERIFY]` · **Review** annually |
| **Parent** | [Information Security Policy](00-information-security-policy.md) |
| **Classification** | Internal — releasable to clients and prospects |

---

## 1. Why this is a security policy

Joiner, mover and leaver is where access control succeeds or fails in practice. A firm can have excellent policies and still leave a departed contractor's API token live for six months.

**Each step produces a record.** A checklist completed and filed is the evidence; a checklist followed from memory is not.

---

## 2. Before a joiner starts

| | |
|---|---|
| Background check | `[DECIDE — conduct them, or document the decision not to and the reasoning. Either is defensible; silence is not, and client DDQs ask this directly.]` |
| Confidentiality agreement | Signed before any access |
| Contract or engagement letter | Executed |
| Role defined | Determines the access template applied |

---

## 3. Onboarding

| Step | Owner | Evidence |
|---|---|---|
| Identity created in Entra ID, MFA enrolled | `[VERIFY]` | Account record |
| Device issued, encrypted, enrolled in NinjaRMM | `[VERIFY]` | Device record |
| Access granted **from the role template**, not copied from a colleague | `[VERIFY]` | Access register entry |
| Password manager access provisioned | `[VERIFY]` | |
| Policies issued and acknowledged — Information Security, Acceptable Use | `[VERIFY]` | Signed acknowledgement |
| Security awareness training assigned | `[VERIFY]` | Completion record |
| Client confidentiality obligations explained | Manager | Onboarding record |

**Access is granted from the role template.** Copying an existing person's access is how privilege accumulates invisibly across a firm, and it is one of the findings Centience most often writes for clients.

**Platform access to client organizations** is granted per engagement, not per person, and only for clients the individual is actually working on.

---

## 4. Movers

A change of role is not additive.

Access is **re-derived from the new role**, and access belonging only to the previous role is removed. The review is recorded with the date and the resulting changes.

This is the step most firms skip entirely, and it is why long-tenured staff often hold more access than anyone intended.

---

## 5. Offboarding

**All access is revoked on the final working day**, or immediately where the departure is involuntary or contentious.

| Step | Owner | Evidence |
|---|---|---|
| Entra ID account disabled | `[VERIFY]` | Timestamp |
| Platform access revoked, all organizations | `[VERIFY]` | Timestamp |
| Production infrastructure access removed — Vercel, Supabase, GitHub | `[VERIFY]` | Timestamp |
| Third-party SaaS accounts disabled — HubSpot, Resend, NinjaRMM, Granola, Strac, others per the register | `[VERIFY]` | Per-system record |
| **API tokens and personal access tokens revoked** | `[VERIFY]` | Timestamp |
| Password manager access revoked, shared credentials rotated | `[VERIFY]` | Rotation record |
| Device returned and wiped | `[VERIFY]` | Device record |
| Mailbox handled per retention policy | `[VERIFY]` | |
| Confirmation that no client data is retained personally | Manager | Signed |

**The tokens row is the one that gets missed.** Disabling the identity does not revoke a personal access token or an API key issued to that person. Each must be revoked explicitly.

**Where the departing person held production access or credential-store access, rotate the credentials they could have read.** Disabling their account does not un-know a secret.

---

## 6. Contractors

Contractors are onboarded and offboarded under this policy with no reduction. Where a contractor works through an agency, the confidentiality obligation is confirmed in writing before access.

Contractor access carries an **end date set at provisioning**, so that lapsed access expires by default rather than by someone remembering.

---

## 7. Verification

Offboarding completion is verified by someone other than the person who performed it, within `[DECIDE — recommend 5 business days]`, and the verification recorded.

The next scheduled access review (per [Access Control](01-access-control-policy.md) §5) is the backstop, and is expected to find nothing.
