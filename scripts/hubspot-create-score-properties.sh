#!/usr/bin/env bash
#
# Create the three custom HubSpot contact properties that the Governance Score
# funnel writes to. Run this ONCE against your HubSpot portal.
#
# These match exactly what lib/hubspot.ts -> setScoreProperties() sends:
#   governance_score        number     (0–100 overall score)
#   governance_tier         enumeration (monitor | platform | managed)
#   governance_assessed_at  datetime   (ISO 8601 timestamp of the assessment)
#
# Usage:
#   export HUBSPOT_ACCESS_TOKEN="pat-na1-xxxxxxxx"   # private-app token
#   bash scripts/hubspot-create-score-properties.sh
#
# The private app needs the scope: crm.schemas.contacts.write
# (property creation), in addition to crm.objects.contacts.write and
# crm.objects.notes.write that the runtime integration already uses.
#
# Safe to re-run: if a property already exists HubSpot returns 409 and the
# script reports it and moves on.

set -euo pipefail

if [[ -z "${HUBSPOT_ACCESS_TOKEN:-}" ]]; then
  echo "ERROR: HUBSPOT_ACCESS_TOKEN is not set." >&2
  echo "  export HUBSPOT_ACCESS_TOKEN=\"pat-na1-...\" and re-run." >&2
  exit 1
fi

BASE="https://api.hubapi.com/crm/v3/properties/contacts"
GROUP="contactinformation"

create() {
  local name="$1" payload="$2"
  echo "→ Creating '${name}' ..."
  local code
  code=$(curl -sS -o /tmp/hs_prop_resp.json -w "%{http_code}" \
    -X POST "$BASE" \
    -H "Authorization: Bearer ${HUBSPOT_ACCESS_TOKEN}" \
    -H "Content-Type: application/json" \
    -d "$payload")
  case "$code" in
    2*) echo "  ✓ created (${code})" ;;
    409) echo "  • already exists (409) — skipping" ;;
    *)  echo "  ✗ failed (${code}):"; cat /tmp/hs_prop_resp.json; echo ;;
  esac
}

create "governance_score" '{
  "name": "governance_score",
  "label": "Governance Score",
  "type": "number",
  "fieldType": "number",
  "groupName": "'"$GROUP"'",
  "description": "Overall Centience Governance Score (0-100) from the free assessment."
}'

create "governance_tier" '{
  "name": "governance_tier",
  "label": "Governance Tier",
  "type": "enumeration",
  "fieldType": "select",
  "groupName": "'"$GROUP"'",
  "description": "Recommended Centience entry track routed from the Governance Score.",
  "options": [
    { "label": "Monitor",  "value": "monitor",  "displayOrder": 0 },
    { "label": "Platform", "value": "platform", "displayOrder": 1 },
    { "label": "Managed",  "value": "managed",  "displayOrder": 2 }
  ]
}'

create "governance_assessed_at" '{
  "name": "governance_assessed_at",
  "label": "Governance Assessed At",
  "type": "datetime",
  "fieldType": "date",
  "groupName": "'"$GROUP"'",
  "description": "Timestamp of the most recent Governance Score assessment."
}'

echo
echo "Done. Next steps:"
echo "  1. In Vercel, set HUBSPOT_SCORE_PROPS=1 (and HUBSPOT_ACCESS_TOKEN if not already)."
echo "  2. Redeploy. New assessment submissions will now populate these 3 fields,"
echo "     which you can filter on in HubSpot lists, views, and reports."
