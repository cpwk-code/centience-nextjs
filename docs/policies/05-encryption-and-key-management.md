# Encryption and Key Management Policy

| | |
|---|---|
| **Document owner** | `[VERIFY — engineering lead]` |
| **Version** | 1.0 — draft · **Effective** `[VERIFY]` · **Review** annually |
| **Parent** | [Information Security Policy](00-information-security-policy.md) |
| **Classification** | Internal — releasable to clients and prospects |

---

## 1. In transit

All connections carrying Centience or client information use TLS 1.2 or higher.

- The web application and API are served over HTTPS only, with HSTS
- Connections to Supabase, Microsoft Graph, Anthropic and all other providers are TLS
- Plain HTTP is not accepted; requests are redirected

---

## 2. At rest

| Store | Encryption |
|---|---|
| Platform database (Supabase) | Encrypted at rest by the provider (AES-256) |
| Object storage | Encrypted at rest by the provider |
| Backups | Encrypted at rest by the provider |
| Staff devices | Full-disk encryption required — [Acceptable Use](02-acceptable-use-policy.md) §3 |
| Microsoft 365 | Encrypted at rest by the provider |

---

## 3. Client credentials — application-layer encryption

Credentials and tokens for client environments receive a second layer of protection above the database's own encryption.

**They are encrypted by the application before storage, with a dedicated key held in environment configuration and never in the repository.**

The control that matters most is the failure behaviour:

> In production, if the encryption key is unavailable, the write **fails with an error**. It does not store the credential in plaintext.

This is enforced in code rather than by convention (`lib/crypto.ts`, `encryptForStorage`). Outside production, where no client data exists, plaintext is permitted for local development only.

**`[VERIFY — confirm `CREDENTIAL_ENCRYPTION_KEY` is set in the production environment. If it is not, production writes are failing closed, which is correct but will be visible as errors; and until it is set the control is untested.]`**

---

## 4. Key management

| | |
|---|---|
| **Where keys live** | Platform environment configuration, accessible only to holders of production access |
| **Who can read them** | `[VERIFY — named holders, expected to be very few]` |
| **In source control** | Never. No key, token or secret is committed |
| **In logs** | Never. Credential values are excluded from all logging |
| **Rotation** | On suspected compromise, on departure of a holder, and `[DECIDE — on a fixed schedule, or on event only]` |

**Rotation procedure** for the credential encryption key requires re-encrypting stored credentials under the new key. `[DECIDE — document the procedure before it is needed, not during an incident.]`

---

## 5. The service-role key

The Supabase service-role key bypasses row-level security and is the most consequential secret the firm holds. Its handling is set out in [Access Control](01-access-control-policy.md) §4.

Restated here because it belongs in both places: **any API route holding this key must perform an explicit tenant check on every request**, because the database will not do it for them.

---

## 6. Cryptographic standards

- Symmetric encryption: AES-256
- Hashing: SHA-256 or stronger
- Passwords: handled by the identity provider; Centience does not store password material
- No custom or in-house cryptography. Platform and standard library primitives only

---

## 7. Client-side

No client information is stored in browser local storage beyond what a session requires. Session tokens are held per the authentication provider's defaults and are not persisted beyond the session lifetime. `[VERIFY]`
