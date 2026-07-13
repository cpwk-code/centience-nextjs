/**
 * HubSpot integration (server-side).
 *
 * Every website form → a HubSpot contact (create-or-update by email), plus an
 * optional timeline Note carrying the rich detail (assessment answers + results,
 * contact message, guide downloaded, etc.). Sales sees it on the record and can
 * use it for the conversation and to get ahead of onboarding.
 *
 * Design:
 *  - Guarded + non-fatal, exactly like the Supabase/Resend calls in the form
 *    routes: if HUBSPOT_ACCESS_TOKEN is unset, every function is a no-op.
 *  - Contact upsert sets only STANDARD HubSpot properties (always exist), so it
 *    can never fail on a missing custom property. All assessment specifics go in
 *    the Note (no property setup required to be useful on day one).
 *  - Optional custom score properties are written ONLY when HUBSPOT_SCORE_PROPS
 *    is enabled AND you've created them in the portal — see setScoreProperties().
 *
 * Env:
 *  - HUBSPOT_ACCESS_TOKEN  (private-app token; scopes: crm.objects.contacts.write, crm.objects.notes.write)
 *  - HUBSPOT_SCORE_PROPS   (optional: "1"/"true" to also write custom governance_* props)
 */

const HS_BASE = "https://api.hubapi.com";
const NOTE_TO_CONTACT_ASSOCIATION_TYPE_ID = 202; // HubSpot-defined: note → contact

export function hubspotEnabled(): boolean {
  return !!process.env.HUBSPOT_ACCESS_TOKEN;
}

async function hbFetch(path: string, init: RequestInit): Promise<Response> {
  return fetch(`${HS_BASE}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
      ...(init.headers ?? {}),
    },
  });
}

/** Standard, always-present HubSpot contact properties. Unknown keys are dropped. */
const STANDARD_KEYS = new Set([
  "email", "firstname", "lastname", "company", "jobtitle", "phone", "industry", "lifecyclestage", "website",
]);

export interface ContactProps {
  email: string;
  firstname?: string;
  lastname?: string;
  company?: string;
  jobtitle?: string;
  phone?: string;
  industry?: string;
  lifecyclestage?: string; // e.g. "lead" | "subscriber"
  website?: string;
}

function cleanProps(props: ContactProps): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(props)) {
    if (STANDARD_KEYS.has(k) && v !== undefined && v !== null && `${v}`.trim() !== "") {
      out[k] = `${v}`;
    }
  }
  return out;
}

function extractExistingId(msg: string): string | null {
  // 409 body: "Contact already exists. Existing ID: 12345"
  const m = msg.match(/Existing ID:\s*(\d+)/i);
  return m ? m[1] : null;
}

/**
 * Create-or-update a contact by email. Returns the contact id, or null if
 * HubSpot is not configured or the call failed (never throws).
 */
export async function upsertContact(props: ContactProps): Promise<string | null> {
  if (!hubspotEnabled() || !props.email) return null;
  const properties = cleanProps(props);

  try {
    const res = await hbFetch("/crm/v3/objects/contacts", {
      method: "POST",
      body: JSON.stringify({ properties }),
    });

    if (res.ok) {
      const data = await res.json();
      return data.id ?? null;
    }

    if (res.status === 409) {
      // Already exists — extract id and PATCH.
      const text = await res.text();
      const id = extractExistingId(text);
      if (!id) return null;
      const patch = await hbFetch(`/crm/v3/objects/contacts/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ properties }),
      });
      return patch.ok ? id : id; // return id regardless; PATCH failure is non-fatal
    }

    console.error("HubSpot upsertContact error:", res.status, await res.text());
    return null;
  } catch (err) {
    console.error("HubSpot upsertContact exception (non-fatal):", err);
    return null;
  }
}

/** Attach a timeline Note to a contact. Non-fatal. */
export async function addNoteToContact(contactId: string | null, body: string): Promise<void> {
  if (!hubspotEnabled() || !contactId || !body) return;
  try {
    await hbFetch("/crm/v3/objects/notes", {
      method: "POST",
      body: JSON.stringify({
        properties: {
          hs_timestamp: new Date().toISOString(),
          hs_note_body: body,
        },
        associations: [
          {
            to: { id: contactId },
            types: [
              { associationCategory: "HUBSPOT_DEFINED", associationTypeId: NOTE_TO_CONTACT_ASSOCIATION_TYPE_ID },
            ],
          },
        ],
      }),
    });
  } catch (err) {
    console.error("HubSpot addNoteToContact exception (non-fatal):", err);
  }
}

/**
 * Optionally write custom governance score properties. No-op unless
 * HUBSPOT_SCORE_PROPS is enabled — because these are CUSTOM properties you must
 * first create in the portal (governance_score:number, governance_tier:string,
 * governance_assessed_at:date). Guarded so it can't break the contact write.
 */
export async function setScoreProperties(
  contactId: string | null,
  fields: { governance_score?: number; governance_tier?: string; governance_assessed_at?: string }
): Promise<void> {
  const enabled = process.env.HUBSPOT_SCORE_PROPS === "1" || process.env.HUBSPOT_SCORE_PROPS === "true";
  if (!hubspotEnabled() || !enabled || !contactId) return;
  const properties: Record<string, string> = {};
  if (typeof fields.governance_score === "number") properties.governance_score = `${fields.governance_score}`;
  if (fields.governance_tier) properties.governance_tier = fields.governance_tier;
  if (fields.governance_assessed_at) properties.governance_assessed_at = fields.governance_assessed_at;
  if (Object.keys(properties).length === 0) return;
  try {
    await hbFetch(`/crm/v3/objects/contacts/${contactId}`, {
      method: "PATCH",
      body: JSON.stringify({ properties }),
    });
  } catch (err) {
    console.error("HubSpot setScoreProperties exception (non-fatal):", err);
  }
}

/** Split a single "Full Name" into first/last for HubSpot. */
export function splitName(name: string): { firstname: string; lastname: string } {
  const parts = (name || "").trim().split(/\s+/);
  if (parts.length <= 1) return { firstname: parts[0] ?? "", lastname: "" };
  return { firstname: parts[0], lastname: parts.slice(1).join(" ") };
}
