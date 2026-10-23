# Vendor and Third-Party Management Policy

| | |
|---|---|
| **Document owner** | `[VERIFY — security lead]` |
| **Version** | 1.0 — draft · **Effective** `[VERIFY]` · **Review** annually |
| **Parent** | [Information Security Policy](00-information-security-policy.md) |
| **Classification** | Internal — releasable to clients and prospects |

---

## 1. Principle

Centience assesses its clients' third-party exposure. It holds itself to the same standard, and this policy is written knowing that clients will compare the two.

**Outsourcing a function does not outsource accountability for it.**

---

## 2. Tiers

| Tier | Definition | Diligence | Review |
|---|---|---|---|
| **Critical** | Handles Class 1 client information, or its failure stops service | Full, before engagement | Annually |
| **Important** | Handles Centience confidential data, or its failure degrades service | Proportionate | `[DECIDE — recommend every 2 years]` |
| **Standard** | No sensitive data, easily replaced | Basic | On material change |

Tiering is recorded in the [Sub-Processor Register](13-sub-processor-register.md) and reviewed when a provider's role changes.

---

## 3. Before engagement

For Critical and Important providers:

1. **What data will they hold**, of what classification, and where geographically
2. **Security posture** — SOC 2 Type II or equivalent; where none exists, a documented alternative assessment and a rationale for proceeding
3. **Sub-processors** — who do they rely on? A provider that cannot answer this is itself a finding
4. **Breach notification** — contractual commitment, and the window
5. **Data handling on termination** — export and deletion
6. **Business continuity** — their resilience posture
7. **Contractual terms** — confidentiality, data protection, right to audit or to receive assurance reports

Approval for a Critical provider rests with the CEO.

---

## 4. Reading a SOC 2 report properly

A SOC 2 report is filed by most firms and read by few. Centience reads them, and checks:

- **Type I or Type II.** A Type I describes design at a point in time. A Type II covers operating effectiveness over a period and is materially more informative
- **The period covered**, and whether it is current
- **The scope** — does it cover the service actually consumed, or a different product from the same vendor?
- **Complementary user entity controls** — the things the report assumes *we* operate. These are obligations transferred to us and are frequently ignored
- **Exceptions in the testing**, and the auditor's opinion on them
- **The sub-service organizations** carved out of scope

Findings are recorded against the provider. A report with material exceptions relevant to our use is escalated to the CEO.

The platform's own `soc2-reader` performs this for clients. The firm uses the same discipline on its own suppliers.

---

## 5. The Reg S-P expectation, applied outward

Centience's clients are covered institutions whose obligations flow down. Centience therefore requires of its own Critical providers:

> **Notification as soon as possible and no later than 72 hours** after they become aware of a breach of security resulting in unauthorized access to a system holding information we hold on behalf of clients.

Where a provider will not contract to this, the position is documented: what was requested, what was obtained, and why proceeding is reasonable. **A contractual commitment is the cleanest route but is not the only acceptable one** — the amended rule requires policies reasonably designed to achieve the outcome, not a specific instrument. Documented notice of the expectation, with evidence it was sent and acknowledged, can also support a reasonably designed program.

The commitment obtained from each provider is recorded in the register.

---

## 6. Ongoing review

Annually for Critical providers:

- Re-collect the SOC 2 report **before the current one lapses** — a report that expires unnoticed is the most common vendor-management finding in the assessments Centience performs
- Confirm the sub-processor list has not materially changed
- Confirm the service consumed is still in scope of the assurance held
- Review any incidents involving the provider
- Confirm the commercial relationship still warrants the access held

Report expiry dates are diarised. `[VERIFY — where? The platform's own vendor register should hold this, and using it is both correct and a useful demonstration.]`

---

## 7. Sub-processor changes

Where a Critical provider adds a sub-processor materially affecting client data, the change is assessed and the [Sub-Processor Register](13-sub-processor-register.md) updated.

**Clients are notified of material sub-processor changes** `[DECIDE — notification commitment and window; many client agreements will require this, so decide it before a client requires it]`.

---

## 8. Termination

On ending a provider relationship: confirm deletion of Centience and client data, retrieve any data held, revoke API access and credentials, remove them from the register, and record the date.

---

## 9. AI providers specifically

AI providers receive additional scrutiny, because the questions are new and the answers move:

- **Training.** Is submitted data used for model training? Is that contractual or a policy statement that may change?
- **Retention.** How long is submitted data held, where, and can we control it?
- **Sub-processors.** The chain behind a model provider is frequently longer than the buyer assumes and is rarely enumerated in the marketing material
- **Enterprise versus consumer terms.** The protections differ substantially, and only the enterprise tier typically offers the API access and contractual commitments required

The relevant question is not only what the provider's policy says today, but what latitude the policy language preserves.
