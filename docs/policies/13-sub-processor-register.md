# Sub-Processor Register

| | |
|---|---|
| **Document owner** | `[VERIFY — security lead]` |
| **Version** | 1.0 — draft · **Effective** `[VERIFY]` · **Review** annually and on change |
| **Parent** | [Vendor and Third-Party Management](10-vendor-and-third-party-management.md) |
| **Classification** | Internal — releasable to clients and prospects |

---

> **Draft. Every row requires verification before release.** The providers below are drawn from the technology actually in use; the **DPA, SOC 2 and 72-hour columns are unverified** and must be completed from the contracts and reports on file. A register with unverified assurance claims is worse than no register — it is a documented misstatement.

---

## 1. What this is

Every third party that may process, store or access information Centience holds on behalf of clients, or that is material to delivering the service.

Clients are entitled to this list. Material changes are notified per [Vendor Management](10-vendor-and-third-party-management.md) §7.

---

## 2. Critical — handle Class 1 client information

| Provider | Purpose | Data | Region | DPA | SOC 2 | 72-hr notice |
|---|---|---|---|---|---|---|
| **Vercel** | Application hosting, serverless execution | Client data in transit through the application | `[VERIFY]` | `[VERIFY]` | `[VERIFY — type & period]` | `[VERIFY]` |
| **Supabase** | Database, authentication, object storage, edge functions | **Primary store** — findings, evidence, policies, attestations, encrypted credentials | `[VERIFY]` | `[VERIFY]` | `[VERIFY]` | `[VERIFY]` |
| **Anthropic** | Model inference; Enterprise API for client AI adoption metrics | Content submitted for analysis; client AI usage metadata | `[VERIFY]` | `[VERIFY]` | `[VERIFY]` | `[VERIFY]` |
| **Microsoft** | Graph API access to client tenants; Entra ID; Microsoft 365 for the firm | Client environment configuration; firm email and documents containing client information | `[VERIFY]` | `[VERIFY]` | `[VERIFY]` | `[VERIFY]` |
| **Strac** | Data loss prevention, where in a client's scope | Content inspected for sensitive data | `[VERIFY]` | `[VERIFY]` | `[VERIFY]` | `[VERIFY]` |
| **NinjaRMM** | Endpoint telemetry feeding shadow-AI discovery | Device and software inventory from client endpoints | `[VERIFY]` | `[VERIFY]` | `[VERIFY]` | `[VERIFY]` |
| **Granola** | Meeting recording and transcription | **Client call recordings and transcripts** | `[VERIFY]` | `[VERIFY]` | `[VERIFY]` | `[VERIFY]` |

> **Granola deserves a second look.** It processes recordings of client conversations, which are Class 1 by any reading, and it is the kind of tool adopted for convenience rather than through vendor diligence. Confirm the terms, the retention setting and that participants are consistently told. This is exactly the finding Centience writes for clients.

> **Prompt Security** `[VERIFY — add as a row if the DLP layer moves there. $2.50/user/month with no minimum was quoted directly; the diligence has not been done.]`

---

## 3. Important — Centience confidential data

| Provider | Purpose | Data | DPA | SOC 2 |
|---|---|---|---|---|
| **GitHub** | Source control, CI | Source code, infrastructure configuration. **No client data, no secrets** | `[VERIFY]` | `[VERIFY]` |
| **HubSpot** | CRM, marketing | Client and prospect contacts, pipeline | `[VERIFY]` | `[VERIFY]` |
| **Resend** | Transactional email | Recipient addresses, message content | `[VERIFY]` | `[VERIFY]` |
| `[VERIFY]` Password manager | Credential storage | Credentials | `[VERIFY]` | `[VERIFY]` |
| `[VERIFY]` Accounting / payroll | Finance | Employee and financial records | `[VERIFY]` | `[VERIFY]` |

---

## 4. Client-directed

Where a client directs Centience to integrate with a system of their choosing — an archiving provider, a model provider on their tenancy, a line-of-business application — that provider is the client's, not Centience's sub-processor. The integration is recorded in the client's own connector configuration.

Centience does not assume responsibility for the security of a system the client selected and contracted, and says so in the engagement agreement rather than leaving it ambiguous.

---

## 5. Completing this register

For each Critical row, obtain and record:

1. Data processing agreement — executed, with date
2. Current SOC 2 Type II or equivalent — with **period covered and expiry diarised**
3. Breach notification commitment and window — contractual, or documented notice and acknowledgement per [Vendor Management](10-vendor-and-third-party-management.md) §5
4. Sub-processor list — theirs
5. Data location
6. Complementary user entity controls from their report — **the obligations their assurance transfers to us**

Item 6 is the one most often skipped and the one an auditor will test.

---

## 6. Change log

| Date | Change | Approved by |
|---|---|---|
| `[VERIFY]` | Register established | |
