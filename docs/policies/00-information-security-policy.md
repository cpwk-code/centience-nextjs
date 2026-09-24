# Information Security Policy

| | |
|---|---|
| **Document owner** | Orville Matias, Chief Executive Officer |
| **Approved by** | `[VERIFY — approver and date]` |
| **Version** | 1.0 — draft |
| **Effective** | `[VERIFY — date of approval]` |
| **Review** | Annually, and on material change to the business or environment |
| **Classification** | Internal — releasable to clients and prospects |

---

## 1. Purpose and scope

Centience operates technology governance for regulated firms. In doing so it connects to client environments, tests controls against them, and holds the resulting evidence record. Clients are subject to SEC, FINRA, NFA, NYDFS and HIPAA obligations, and they rely on Centience to handle their information accordingly.

This policy applies to **all Centience personnel, contractors and systems**, and to all client information Centience receives, processes, stores or transmits.

It is the master document. The policies listed in §7 sit beneath it and are binding to the same extent.

---

## 2. Principles

1. **Least privilege.** Access is granted for a stated purpose and removed when that purpose ends.
2. **Segregation by tenant.** Each client's data is logically separated. No control depends on staff remembering which client they are looking at.
3. **Evidence over assertion.** Where a control matters, its operation is recorded. A claim that a control operated is not the same as a record that it did.
4. **Fail closed.** Where a security control cannot be applied, the operation stops rather than proceeding unprotected.
5. **Client evidence is held in trust, not owned.** It is a custodial obligation, not an asset. See §04 and the Centience Constitution, Rule 11.
6. **Scope what is operable.** Centience does not commit to a control it cannot perform consistently.

---

## 3. Roles

| Role | Held by | Responsible for |
|---|---|---|
| Executive owner | Orville Matias, CEO | Approval of this policy set, risk acceptance, resourcing |
| Security lead | `[VERIFY — named individual]` | Day-to-day operation of controls, incident coordination, access reviews |
| Engineering lead | `[VERIFY — named individual]` | Secure development, change management, production access |
| Every member of staff | — | Following this policy, completing training, reporting suspected incidents without delay |

A firm of this size does not have separate security and engineering functions, and this policy does not pretend otherwise. Where one person holds two of the roles above, **the compensating control is that production changes require review by a second person** (see §06).

---

## 4. The environment

Recorded so that the policies beneath this one describe something real.

| Layer | Provider | Notes |
|---|---|---|
| Application hosting | Vercel | Next.js application and serverless API routes |
| Database, auth, storage, edge functions | Supabase | PostgreSQL with row-level security; tenant isolation enforced by policy on `org_id` |
| AI processing | Anthropic | Model inference and Enterprise API for client AI adoption metrics |
| Client environment access | Microsoft Graph / Entra ID | Application registrations against client tenants |
| Endpoint telemetry | NinjaRMM | Contributes to shadow-AI discovery |
| Data loss prevention | Strac `[VERIFY — current status]` | Engaged where DLP is in a client's scope |
| Source control and CI | GitHub | Pull-request review required before merge |
| Transactional email | Resend | |
| CRM and marketing | HubSpot | Prospect and client contact data |
| Corporate productivity | Microsoft 365 | Email, documents, identity for Centience staff |

The authoritative list of third parties handling client data, with DPA status, is the [Sub-Processor Register](13-sub-processor-register.md).

---

## 5. Client data — what Centience holds

Stated plainly, because clients ask and because it bounds every other policy.

**Centience holds:**
- Control test results and findings, with timestamps and observed configuration
- Client policies and written supervisory procedures uploaded or generated
- Attestation records
- Inventories of AI tools, vendors and sub-processors
- Metadata about AI usage — user, tool, surface, volume, spend
- Credentials and tokens for authorized connections to client environments, encrypted at rest

**Centience holds AI interaction content only where a client has enabled that module**, and then on the retention period that client sets. See §04.

**Centience does not hold** client end-customer account records, trading or position data, or client financial records, except where such data appears incidentally within a document a client uploads.

---

## 6. Compliance obligations Centience owes its clients

Centience is a **service provider** to covered institutions. Amended Regulation S-P requires those institutions to have policies reasonably designed to ensure their service providers protect customer information and notify them promptly of a breach.

**Centience commits to notifying an affected client as soon as possible and no later than 72 hours** after becoming aware of a breach of security resulting in unauthorized access to a system holding that client's information. This is operationalized in the [Incident Response Plan](08-incident-response-plan.md).

---

## 7. The policy set

| Ref | Policy |
|---|---|
| 01 | [Access Control](01-access-control-policy.md) |
| 02 | [Acceptable Use](02-acceptable-use-policy.md) |
| 03 | [Data Classification and Handling](03-data-classification-and-handling.md) |
| 04 | [Data Retention and Disposal](04-data-retention-and-disposal.md) |
| 05 | [Encryption and Key Management](05-encryption-and-key-management.md) |
| 06 | [Change Management and Secure Development](06-change-management-and-sdlc.md) |
| 07 | [Logging and Monitoring](07-logging-and-monitoring.md) |
| 08 | [Incident Response Plan](08-incident-response-plan.md) |
| 09 | [Business Continuity and Disaster Recovery](09-business-continuity-and-disaster-recovery.md) |
| 10 | [Vendor and Third-Party Management](10-vendor-and-third-party-management.md) |
| 11 | [Risk Management](11-risk-management-policy.md) |
| 12 | [Onboarding and Offboarding](12-onboarding-and-offboarding.md) |

---

## 8. Training and awareness

All staff complete security awareness training on joining and at least annually thereafter, with completion recorded. `[DECIDE — training provider and annual month]`

All staff acknowledge this policy and the Acceptable Use Policy on joining and on each material revision. Acknowledgements are retained as evidence.

---

## 9. Exceptions

An exception to this policy set requires a written request, a named owner, a stated business rationale, compensating controls where available, and an expiry date. Exceptions are approved by the CEO and recorded in the risk register.

**An exception that reaches its expiry date without renewal is closed, and the underlying requirement applies again.** An exception is a decision with a clock on it, not a permanent waiver.

---

## 10. Enforcement

Failure to comply may result in withdrawal of access and, for employees and contractors, disciplinary action up to and including termination of employment or engagement.

---

## 11. Review

This policy is reviewed at least annually by the document owner, and on any material change to the business, the environment, or the regulatory obligations of clients. The date, reviewer and outcome of each review are recorded.
