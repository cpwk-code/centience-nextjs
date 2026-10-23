# Change Management and Secure Development Policy

| | |
|---|---|
| **Document owner** | `[VERIFY — engineering lead]` |
| **Version** | 1.0 — draft · **Effective** `[VERIFY]` · **Review** annually |
| **Parent** | [Information Security Policy](00-information-security-policy.md) |
| **Classification** | Internal — releasable to clients and prospects |

---

## 1. Principle

Every change to production is **traceable to a request, reviewed by a second person, tested, and reversible.** A small team does not get an exemption from this; it gets a simpler version of it.

---

## 2. The path to production

| Stage | Control |
|---|---|
| Branch | Work happens on a branch, never directly on `main` |
| Pull request | Every change reaches `main` through a pull request describing what changed and why |
| Review | **Approved by someone other than the author** before merge |
| Automated checks | Build must pass. Tests must pass `[VERIFY — confirm CI runs the suite and blocks merge on failure]` |
| Merge | Squash merge to `main`, retaining the PR record |
| Deploy | Automatic on merge to `main` via Vercel |
| Rollback | Redeploy of the previous build |

The pull request history is the change record. At the time of writing there are more than eighty merged pull requests on the platform, each carrying its description, diff and approval — a stronger trail than most firms of this size can produce.

**`[VERIFY — the single most important item in this policy: confirm that branch protection on `main` actually requires an approving review, and that it cannot be bypassed. If the CEO can merge his own PR unreviewed, this policy is aspirational and a SOC 2 auditor will find it in the first hour. Either enable the protection or describe the compensating control honestly.]`**

---

## 3. Separation of duties

In a firm this size the author and the deployer are often the same person. The compensating control is that **the reviewer is not the author**, and that deployment is automated from an approved merge rather than performed by hand.

Where a change must ship without review — a production outage, a security fix — it is deployed, then **reviewed retrospectively within one business day**, and the exception is recorded. An emergency change that is never reviewed is an unrecorded change.

---

## 4. Environments

| Environment | Data | Access |
|---|---|---|
| Local development | Synthetic or anonymized only. **No client data** | Developers |
| Preview | Per-branch deployments. `[VERIFY — confirm previews do not connect to the production database]` | Developers |
| Production | Live client data | Restricted per [Access Control](01-access-control-policy.md) §4 |

**Client data is never copied into a non-production environment.** Where a production-like dataset is needed, it is synthetic.

---

## 5. Secure development

- **No secrets in source control.** Secret scanning is enabled on the repository `[VERIFY]`
- **Dependencies** are monitored for known vulnerabilities, and security updates applied on the schedule in §7
- **Input validation** on all API routes, particularly those accepting uploaded documents
- **Tenant isolation is a review item.** Any change touching data access is reviewed specifically for whether isolation still holds
- **Authentication and authorization changes** receive additional scrutiny and are never merged without review

---

## 6. Testing

The platform carries a test suite of `[VERIFY — current count; 64 test files as of September 2026]` files.

**Tests must pass before merge.** Once change management is in scope for SOC 2, "tests pass" becomes an auditable assertion, so a suite that is red or skipped is a finding rather than a nuisance. `[VERIFY — confirm the suite currently runs green in CI.]`

---

## 7. Vulnerability and patch management

| Severity | Remediated within |
|---|---|
| Critical | `[DECIDE — recommend 7 days]` |
| High | `[DECIDE — recommend 30 days]` |
| Medium | `[DECIDE — recommend 90 days]` |
| Low | Next convenient release |

Applies to application dependencies, and to staff devices through NinjaRMM.

Where a vulnerability cannot be remediated within the target, it is recorded as an exception with an owner, a compensating control and an expiry — per [Information Security Policy](00-information-security-policy.md) §9.

---

## 8. Database changes

Schema changes are applied through migrations held in source control and subject to the same review as application code. **A migration applied directly to production outside the migration path is an incident**, not a shortcut.

---

## 9. Third-party code

New dependencies are added deliberately, with consideration of maintenance status, licence and transitive footprint. A dependency that reaches client data is subject to [Vendor and Third-Party Management](10-vendor-and-third-party-management.md).
