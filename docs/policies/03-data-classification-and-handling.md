# Data Classification and Handling Policy

| | |
|---|---|
| **Document owner** | `[VERIFY — security lead]` |
| **Version** | 1.0 — draft · **Effective** `[VERIFY]` · **Review** annually |
| **Parent** | [Information Security Policy](00-information-security-policy.md) |
| **Classification** | Internal — releasable to clients and prospects |

---

## 1. Why this exists

Centience holds information belonging to regulated firms, and those firms are accountable for it. Classification determines how each kind of information is stored, who may see it, how long it is kept, and what happens when something goes wrong.

---

## 2. The four classes

### Class 1 — Client Confidential

The most sensitive category and the reason the rest of this policy set exists.

**Includes:** control test results and findings; observed configuration from a client environment; client policies and written supervisory procedures; attestation records; AI interaction content where that module is enabled; credentials and tokens for client environments; any client end-customer personal information appearing in an uploaded document.

**Handling:**
- Stored only in the platform database, segregated by tenant, or in the firm's own Microsoft 365 where a working copy is unavoidable
- Encrypted in transit and at rest
- Accessible only to staff with a current business reason
- Never copied to personal storage, personal email, or an unapproved service
- Never used in a sales or marketing artifact without written client consent
- Aggregated only under opt-in consent and never in a form reasonably attributable to an organization — Constitution Rule 12

### Class 2 — Centience Confidential

Source code, infrastructure configuration, commercial terms, pricing, internal strategy, personnel records.

Restricted to staff with a business need. Not shared externally without approval.

### Class 3 — Internal

Day-to-day operational material with no client or commercial sensitivity. Available to all staff. Not published.

### Class 4 — Public

Website content, published articles, marketing collateral. No restriction.

---

## 3. Credentials are their own problem

Client environment credentials and API tokens are Class 1, but they carry a further rule: **they are encrypted at rest with a dedicated key, and the system fails closed if that key is unavailable.**

In production, an attempt to store a credential without encryption raises an error and the operation stops. It does not fall back to plaintext. See [Encryption and Key Management](05-encryption-and-key-management.md).

---

## 4. Tenant segregation

Client data is separated by organization at the database layer using row-level security. Application routes that bypass that layer — those using the service-role key — must perform an explicit tenant check on every request.

**No control here depends on a person remembering which client they are looking at.**

---

## 5. Sharing with third parties

Class 1 information reaches a third party only where:

1. The third party is in the [Sub-Processor Register](13-sub-processor-register.md), **or** the client has specifically authorized the disclosure
2. A written agreement covering confidentiality and data protection is in place
3. The disclosure is limited to what the purpose requires

**Partner access.** Compliance consultancies and advisers may be granted access to a shared client's data, scoped to that client, where the client has authorized it. Partner access is client-authorized, never assumed from the commercial relationship.

---

## 6. Where client information may live

| Location | Permitted classes | Notes |
|---|---|---|
| Platform database (Supabase) | 1, 2, 3 | Primary store. RLS-segregated |
| Firm Microsoft 365 | 1, 2, 3 | Working copies and correspondence. Retention per §04 |
| GitHub | 2, 3 | **No Class 1.** No client data, no secrets |
| HubSpot | 2, 3 | Contact and pipeline data. No client evidence |
| Personal devices or storage | none | Prohibited for Class 1 and 2 |
| Unapproved SaaS or AI tools | none | Prohibited for Class 1 and 2 |

---

## 7. Labelling

Documents produced for clients carry a classification marking in the footer. Internal documents carry one where ambiguity is possible.

**Absence of a label does not mean public.** Unlabelled material defaults to Internal, and anything containing client information is Class 1 whether or not it says so.

---

## 8. Disposal

Per the [Data Retention and Disposal Policy](04-data-retention-and-disposal.md).
