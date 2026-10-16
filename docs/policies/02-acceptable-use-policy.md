# Acceptable Use Policy

| | |
|---|---|
| **Document owner** | `[VERIFY — security lead]` |
| **Version** | 1.0 — draft · **Effective** `[VERIFY]` · **Review** annually |
| **Parent** | [Information Security Policy](00-information-security-policy.md) |
| **Classification** | Internal — releasable to clients and prospects |
| **Acknowledgement** | Required on joining and on each material revision |

---

## 1. Scope

Applies to every employee and contractor, on every device used for Centience work, and to every system holding Centience or client information.

---

## 2. General conduct

Firm systems are provided for firm business. Incidental personal use is permitted where it does not interfere with work, consume meaningful resource, or introduce risk.

You must not:

- Share your credentials, or use anyone else's
- Disable or circumvent a security control — endpoint protection, MFA, disk encryption, update policy
- Install software on a firm device outside the approved process
- Move client information to personal storage, personal email, or an unapproved service
- Access client data you have no current business reason to access

**That last point deserves emphasis.** Centience holds a map of which client organizations are weak where. Browsing it out of curiosity is a breach of this policy, not a minor lapse.

---

## 3. Devices

Every device used for firm work must have:

- Full-disk encryption enabled
- A screen lock engaging after no more than 15 minutes
- Endpoint protection running and reporting
- A supported operating system with current security updates
- Remote wipe available for firm data

Devices are enrolled in management through NinjaRMM. `[VERIFY — confirm enrolment covers all staff devices, and whether any exceptions exist]`

Report a lost or stolen device **immediately** — see the [Incident Response Plan](08-incident-response-plan.md). There is no penalty for reporting quickly and no excuse for reporting late.

---

## 4. Email and communications

- Verify unexpected requests for payment, credentials or data changes through a second channel. Do not rely on the email itself.
- Report suspected phishing rather than deleting it.
- Do not use personal messaging apps for firm business involving client information.

---

## 5. AI tools

Centience sells AI governance. Its own use of AI must be at least as well governed as what it asks of clients.

**Approved tools** are listed in the AI tool inventory and maintained by `[VERIFY — owner]`. Current approved tools: `[VERIFY — list them. Claude, Granola and the development tooling are in use and should be named explicitly if approved.]`

**Rules:**

1. **Use firm-provisioned enterprise accounts.** Not personal subscriptions, not personal accounts on a firm device.
2. **Client information may be submitted only to approved tools**, under the firm's enterprise tenancy, where the provider does not train on the data and the interaction is retained under firm control.
3. **Client end-customer personal information — names, account numbers, government identifiers — must not be submitted** unless the specific workflow has been approved and the handling documented.
4. **Do not act on AI output affecting a client without human review.** An AI-drafted finding, policy or client communication is a draft until a person has checked it.
5. **Meeting recording and transcription requires participant consent** and the retention period set in §04. Client calls are client information.

**Shadow AI.** A tool not on the approved list is not approved, regardless of how useful it is. The route to approval is to ask — it is fast, and the alternative is that the firm's own discovery sweep finds it and records it as a finding against us.

---

## 6. Working outside the office

Do not display client information on screens visible to others in public spaces. Use a trusted network or a mobile connection rather than open public Wi-Fi where practical.

---

## 7. Departure

On leaving, return all firm devices and firm data. Do not retain client information in any form. Access is revoked on the final working day; see [Onboarding and Offboarding](12-onboarding-and-offboarding.md).

---

## 8. Reporting

Report anything that looks like a security problem — a suspicious message, an unexpected prompt, an access you should not have, a file where it should not be — to `[VERIFY — reporting channel and address]`.

**Report early and be wrong rather than late and right.** Nobody has ever been penalised at this firm for raising something that turned out to be nothing.

---

## 9. Acknowledgement

I have read and understood this policy and agree to comply with it.

Name · Signature · Date
