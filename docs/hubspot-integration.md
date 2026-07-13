# HubSpot Integration (website forms → CRM)

Every website form now creates or updates a **HubSpot contact**, and the Governance Score also writes the **results + the firm's actual answers** onto that contact's timeline — so sales can use them in the conversation and to get ahead of onboarding.

## What syncs

| Form (API route) | Contact | Note on the record |
|---|---|---|
| Assessment gate (`/api/assessment-lead`) | ✅ lead | "Started assessment: {type}" |
| **Governance Score results** (`/api/assessment-results`) | ✅ lead | **Score + per-domain + priority gaps + recommended tier + every question & answer** |
| Contact form (`/api/contact`) | ✅ lead | Reason + page + full message |
| Guide download (`/api/guide-leads`) | ✅ lead | "Downloaded guide: {title}" |
| Newsletter (`/api/newsletter-signup`) | ✅ subscriber | "Newsletter signup" |

All writes are **guarded and non-fatal** (same pattern as the existing Supabase/Resend calls): if HubSpot isn't configured, the form still succeeds — it just skips the sync. Contact upsert is create-or-update **by email**, so repeat submissions enrich one record instead of duplicating.

## Setup (one env var to go live)

Add to Vercel (Production) and `.env.local`:

```
HUBSPOT_ACCESS_TOKEN=pat-...   # HubSpot private-app token
```

Create the token: HubSpot → Settings → Integrations → **Private Apps** → create app → scopes:
- `crm.objects.contacts.write` (and `.read`)
- `crm.objects.notes.write`

That's all that's required. Contacts use only **standard** HubSpot properties (email, first/last name, company, job title, phone, industry, lifecycle stage), so nothing can break on a missing custom field — all assessment specifics live in the Note.

## Optional: structured score fields (for filtering/reporting in HubSpot)

If you want the score as filterable contact properties (not just in the Note), create these **custom contact properties** in HubSpot, then set the flag:

```
HUBSPOT_SCORE_PROPS=true
```

Custom properties to create (Settings → Properties → Contact):
- `governance_score` — Number
- `governance_tier` — Single-line text (monitor / platform / managed)
- `governance_assessed_at` — Date picker

Until `HUBSPOT_SCORE_PROPS` is enabled, these are skipped (no errors). The Note always carries the full detail regardless.

## Notes

- This is the **runtime** integration (a private-app token used server-side by the site). It is separate from the HubSpot **MCP connector** used for interactive/agent work — that still needs authorizing in an interactive session before agent-driven automations can run.
- Answers are stored in the HubSpot Note today (per request). If you also want them queryable for onboarding pre-fill, we can persist them to a Supabase `assessment_results` table as a follow-up.
- Code: `lib/hubspot.ts` (`upsertContact`, `addNoteToContact`, `setScoreProperties`, `splitName`).
