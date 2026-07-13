-- ============================================================
-- assessment_results — persisted Governance Score results + answers
-- Run in: Supabase → SQL Editor. Mirrors the site's other lead tables
-- (assessment_leads, guide_leads, contact_submissions, newsletter_subscribers).
-- Written server-side with the service-role key; not read by the public client.
-- ============================================================

CREATE TABLE IF NOT EXISTS assessment_results (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email           TEXT NOT NULL,
  first_name      TEXT,
  last_name       TEXT,
  company         TEXT,
  assessment_type TEXT,
  industry_slug   TEXT,
  firm_size       TEXT,
  overall         INTEGER,          -- 0–100
  tier            TEXT,             -- monitor | platform | managed
  domains         JSONB DEFAULT '[]'::jsonb,   -- [{domain,label,score}]
  top_gaps        JSONB DEFAULT '[]'::jsonb,   -- [{question,regulation}]
  answers         JSONB DEFAULT '[]'::jsonb,   -- [{domain,question,answer}]
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_assessment_results_email   ON assessment_results(email);
CREATE INDEX IF NOT EXISTS idx_assessment_results_created ON assessment_results(created_at DESC);

-- Service-role writes only; no public policies (RLS on, no client access).
ALTER TABLE assessment_results ENABLE ROW LEVEL SECURITY;
