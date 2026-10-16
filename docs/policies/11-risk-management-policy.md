# Risk Management Policy

| | |
|---|---|
| **Document owner** | Orville Matias, Chief Executive Officer |
| **Version** | 1.0 — draft · **Effective** `[VERIFY]` · **Review** annually |
| **Parent** | [Information Security Policy](00-information-security-policy.md) |
| **Classification** | Internal — releasable to clients and prospects |

---

> **This is the policy describing how risk is managed. It is not a risk assessment.**
> The assessment is a record of an exercise performed on a date by named people, producing findings. It cannot be written in advance. See `README.md` §2.

---

## 1. Purpose

To identify, assess, treat and monitor risks to Centience's information, its service, and the client information it holds.

---

## 2. Scope

Information security, operational, third-party and regulatory risk affecting Centience or the client data it holds. Commercial and strategic risk sit with the CEO outside this policy.

---

## 3. The cycle

**Identify → Assess → Treat → Record → Monitor → Review**

Risks are identified from the annual assessment, incidents and near-misses, vulnerability and monitoring output, vendor reviews, client due diligence questionnaires, regulatory change, and material change to the business or environment.

Anyone may raise a risk. A risk raised by a member of staff is recorded whether or not it is ultimately accepted.

---

## 4. Assessment

Each risk is assessed on **likelihood** and **impact**, each Low / Medium / High, producing an inherent rating. Existing controls are then considered to produce a residual rating.

| | Low impact | Medium impact | High impact |
|---|---|---|---|
| **High likelihood** | Medium | High | Critical |
| **Medium likelihood** | Low | Medium | High |
| **Low likelihood** | Low | Low | Medium |

Impact is assessed against client harm first, then regulatory exposure, then commercial loss — in that order, because a client's regulatory exposure is the thing Centience is trusted with.

---

## 5. Treatment

| Option | Meaning |
|---|---|
| **Mitigate** | Implement or strengthen a control |
| **Transfer** | Insurance or contractual allocation |
| **Avoid** | Stop the activity |
| **Accept** | Take it, deliberately, with a record |

Every treatment has a **named owner** and a **target date**. An unowned treatment is not a treatment.

---

## 6. Acceptance

A deliberate acceptance requires: the risk, the rationale, the residual rating, a **named accepting owner**, and an **expiry date**.

Acceptance authority:

| Residual | Accepted by |
|---|---|
| Low | Security lead |
| Medium | Security lead, notified to the CEO |
| High or Critical | CEO |

**An acceptance that reaches expiry without renewal reopens.** The risk returns to the register as untreated.

This is the same standard the platform applies for clients, and for the same reason: *a risk accepted deliberately, with a named owner, a rationale and a review date, reads as governance. A red light with no decision record reads as neglect. The facts are identical; the conclusion an examiner draws is not.*

---

## 7. The register

A single risk register is maintained, holding for each risk: identifier, description, category, owner, inherent rating, controls, residual rating, treatment, target date, status, and — where accepted — the acceptance record and expiry.

`[VERIFY — where the register lives. The platform has the workflow for exactly this. Using it is both operationally sensible and a demonstrable case study.]`

---

## 8. The annual assessment

At least annually, a documented risk assessment is performed covering: the asset and data inventory, the threat landscape for a firm holding regulated clients' governance evidence, third-party exposure, the control environment, and changes since the last assessment.

**Output:** an updated register, a set of treatments with owners and dates, and a written summary that can be provided to clients under NDA.

`[DECIDE — the month. Pick one, and pick it so it lands before the busiest client due-diligence season rather than during it.]`

---

## 9. Reporting

Critical and High residual risks are reported to the CEO on identification. The register is reviewed in full `[DECIDE — recommend quarterly]`, with the date, attendees and decisions recorded.

---

## 10. Known concentrations

Recorded here because an assessment that omits them is not credible, and clients will identify them unprompted.

| | |
|---|---|
| **Key person** | A firm of this size concentrates knowledge and access in very few people. Mitigation in [BCDR](09-business-continuity-and-disaster-recovery.md) §4.4 |
| **Evidence concentration** | Centience holds a map of which client organizations are weak where. Constitution Rule 11 treats this as a custodial obligation. It is also a target |
| **Provider concentration** | Application, database and authentication rest on a small number of providers. Deliberate, and the risk is the inability to act independently of them |
| **Self-assessment tension** | Centience operates controls and produces evidence about them. Mitigated by never claiming independence — an independent assessor consumes our evidence rather than competing with it |
