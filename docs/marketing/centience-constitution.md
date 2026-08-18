# Centience Constitution

**Working draft · August 2026 · Internal review**

> **Document hierarchy.** This is the governing document. Beneath it sit *What Centience Should Be* (the $50M ARR strategy memo) and then `centience-tiered-governance-model.md` (operating detail). Where they disagree, this document wins.

---

## Company definition

Centience is the **technology governance operating layer for regulated organizations**.

It maps obligations to technical controls, verifies whether those controls operate, assigns deficiencies to accountable owners, governs exceptions, verifies remediation, detects drift, and preserves the evidence.

> **Constitutional principle:** Centience governs technology regardless of who operates it.

---

## Non-negotiable rules

| Rule | Operating consequence |
|---|---|
| **1. Centience is not an MSP.** | Managed IT remains a separate Compuwork purchase. Centience must be commercially viable when Compuwork never wins the account. |
| **2. Centience does not displace the operator by default.** | The accountable IT operator executes remediation whenever practical: Compuwork for Compuwork clients, an MSP partner for partner-led accounts, or internal IT for internally managed environments. |
| **3. Centience owns governance, not legal or compliance interpretation.** | Compliance partners and client compliance teams own regulatory interpretation, WSP ownership, and exam strategy. Centience translates applicable obligations into technical controls and evidence. |
| **4. Independence is never overstated.** | Centience may verify and evidence controls it operates or enforces, but it does not claim independent attestation over its own work. Independent assessors remain a separate ecosystem role. |
| **5. Every finding must be attributable and defensible.** | Each finding needs an owner, an applicable obligation or policy citation, a defined status, and a documented decision path. Findings must be evidence, not opinion. |
| **6. The platform governs the lifecycle, not just the assessment.** | The core operating chain is: requirement → control → observation → finding → owner → decision → remediation → verification → evidence → drift. |
| **7. Enforcement is narrow, explicit, and reversible.** | Centience may enforce only defined control domains under explicit authority. Write access should be opt-in by domain, least-privilege, logged, reversible, and limited to restoring approved baselines rather than arbitrary administration. |
| **8. Good channel partners must benefit from Centience.** | The product may expose failures by any party, including Centience, but it must not be designed as a hidden MSP-replacement weapon. Good MSPs and compliance firms should be able to use Centience to prove that their responsibilities are being met. |
| **9. Growth in ACV should come from governance breadth before labor depth.** | The preferred expansion path is additional governance domains — cyber, AI, data, infrastructure, third-party, and resilience — rather than simply adding more remediation hours. |
| **10. Human judgment is premium; repetitive work belongs in the platform.** | Governance engineers should specify, review, assign, verify, and govern exceptions. They should not become the default remediation technician, help desk, account manager, or generic consultant. ARR per governance engineer is a core scaling metric. |

---

## Product architecture

**Centience Technology Governance** is the company-level product category. Individual governance domains sit underneath the same operating engine:

- Cyber Governance
- AI Governance
- Data Governance
- Infrastructure Governance
- Third-Party Governance
- Resilience Governance

Enforcement is a **capability, not the identity of the company**. It applies only to controls that are software-enforceable and only where the customer has explicitly authorized Centience to act.

---

## Finding-state standard

| State | Meaning |
|---|---|
| `open` | Detected and failing; no accountable owner set. |
| `assigned` | Responsible party is identified. |
| `in_remediation` | Corrective work is underway. |
| `awaiting_verification` | Someone claims the issue is fixed; Centience has not yet re-tested it. |
| `verified` | Re-test passed and the evidence/configuration state was captured. |
| `drifted` | A previously verified control is failing again. |
| `accepted_risk` | The control applies, but the organization has formally accepted the risk with owner, rationale, and expiry. |
| `not_applicable` | The control does not apply to the environment; rationale and approval are recorded. |

---

## Role definition: Governance Engineer

The Governance Engineer is accountable for translating applicable technology obligations into testable controls, reviewing exceptions, assigning findings, verifying remediation, and maintaining the evidence record.

| Owns | Does not normally own |
|---|---|
| Control interpretation within approved frameworks | Help desk / end-user support |
| Finding triage and ownership | Routine remediation execution |
| Exception review | Endpoint or infrastructure management |
| Remediation specification | Legal advice |
| Verification and evidence quality | Client compliance-program ownership |
| Governance reporting and escalation | Generic account management or project work |

---

## Scaling discipline

**Design target:** build Centience so recurring revenue scales faster than governance labor.

Track:
- ARR per governance engineer
- Gross margin by offer
- Governance hours per account
- Percentage of work automated versus judgment-based

### Commercial implication

Centience should grow account value primarily by **adding governance domains and software leverage**, not by adding equivalent amounts of senior human labor.

Enforcement revenue is attractive only if the governance engineer specifies and verifies while execution is handled by the accountable operator or a lower-cost execution layer.

---

## Decision test for future opportunities

- Does this make Centience more useful **regardless of who the MSP is**?
- Does it strengthen governance evidence, accountability, verification, or drift detection?
- Does it preserve **channel neutrality** rather than secretly steering the client toward Compuwork?
- Does it scale through software and repeatable process rather than senior-person heroics?
- Does it stay inside **technology governance** rather than drifting into legal advice, generic compliance consulting, or managed IT?
- Would a good MSP, compliance partner, or independent assessor still be comfortable participating in the model?

> If an opportunity fails multiple tests, it is probably revenue that weakens the company.
