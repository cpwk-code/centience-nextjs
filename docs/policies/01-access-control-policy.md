# Access Control Policy

| | |
|---|---|
| **Document owner** | `[VERIFY — security lead]` |
| **Version** | 1.0 — draft · **Effective** `[VERIFY]` · **Review** annually |
| **Parent** | [Information Security Policy](00-information-security-policy.md) |
| **Classification** | Internal — releasable to clients and prospects |

---

## 1. Principle

Access is granted **for a stated purpose, at the minimum level required, to a named individual**, and removed when the purpose ends. There are no shared logins to systems holding client information.

---

## 2. Identity

**Corporate identity** is Microsoft Entra ID. Every member of staff has a single named account. Shared mailboxes exist but are accessed through individual identities, never through a shared password.

**Multi-factor authentication is required** for all staff on all corporate systems, and for all access to production systems and client environments. There is no exemption for convenience, and no standing exclusion list. `[VERIFY — confirm MFA is enforced by conditional access policy with no exclusions, and attach the policy export]`

**Platform identity.** Access to the Centience platform is by named account with MFA. Microsoft SSO is available to client organizations that prefer it.

---

## 3. Levels of access

| Level | What it permits | Who holds it |
|---|---|---|
| Staff — standard | Corporate email, documents, collaboration | All staff |
| Platform — operational | Client-facing platform functions within assigned client accounts | Governance engineers |
| Platform — administrative | Org and user administration, module configuration | `[VERIFY — named holders]` |
| Production infrastructure | Vercel deployment, Supabase project, secrets | `[VERIFY — named holders, expected to be very few]` |
| Client environment connections | Microsoft Graph application registrations against client tenants | Service identities, not individuals |

**Client environment access is held by service identities with scoped permissions**, authorized by the client, and not by individual staff logins. Staff act through the platform, which mediates and logs the access.

---

## 4. Privileged access

Production infrastructure access is restricted to the smallest number of people who can operate the service. Each holder is named in the access register.

**The Supabase service-role key bypasses row-level security.** It is therefore treated as the most sensitive credential the firm holds:

- It is never present in client-side code, in the repository, or in any log
- It is held only in server-side environment configuration
- API routes using it must call the tenant guard (`requireOrgAccess`) on every request, because the database will not enforce isolation for them

That last point is a control, not a convention. Any route holding the service-role key without an explicit tenant check is a defect and is treated as one.

---

## 5. Access reviews

Access to production infrastructure, platform administration, and client environments is reviewed **`[DECIDE — quarterly or semi-annually]`**.

Each review records the date, the reviewer, the accounts examined, and any changes made. **A review with no record did not happen**, which is the single most common finding in the assessments Centience performs for clients.

`[DECIDE]` — choose the cadence you will actually keep. Semi-annual and performed is stronger than quarterly and skipped.

---

## 6. Joiners, movers and leavers

Governed by the [Onboarding and Offboarding Policy](12-onboarding-and-offboarding.md). In summary:

- Access is provisioned from a role template, not by copying another person's access
- On role change, access is re-derived from the new role and the old access removed — not added to
- **On departure, all access is revoked the same day**, covering corporate identity, platform, production infrastructure, third-party SaaS and API tokens

Email disabled quickly and SaaS accounts left open for weeks is the recurring pattern Centience finds in client environments. It applies here too.

---

## 7. Passwords and secrets

- Corporate accounts follow Entra ID password policy with MFA enforced `[VERIFY — current settings]`
- A password manager is required for any credential not federated through SSO `[VERIFY — which one]`
- Secrets are never committed to source control, shared over email or chat, or stored in documents
- Production secrets live in the platform environment configuration and are accessible only to holders of production access

**Credential rotation** occurs on staff departure, on suspected compromise, and `[DECIDE — on a fixed schedule, or on event only]`.

---

## 8. Remote access and devices

Staff work from firm-managed devices. Device requirements — disk encryption, screen lock, endpoint protection, supported OS with current patches — are set in the [Acceptable Use Policy](02-acceptable-use-policy.md) and monitored through NinjaRMM.

`[VERIFY — whether any staff or contractors use unmanaged personal devices for firm work, and if so what compensating controls apply. Answer honestly; a client DDQ will ask.]`

---

## 9. Client access to their own data

Client users access only their own organization. Isolation is enforced at the database layer by row-level security keyed on organization, and at the API layer by an explicit tenant guard.

**Partner organizations** — compliance consultancies and advisers working with a shared client — receive access only where the client has authorized it, scoped to that client.

---

## 10. Exceptions

Per [Information Security Policy](00-information-security-policy.md) §9: written, owned, justified, time-limited, recorded.
