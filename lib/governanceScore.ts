/**
 * Centience Governance Score — scoring engine
 *
 * Turns a weighted, domain-tagged questionnaire into:
 *   - an overall 0–100 score + band
 *   - per-domain sub-scores (0–100)
 *   - a prioritized gap list (with regulation citation + real-world consequence)
 *   - a peer benchmark comparison
 *   - automated tier routing (Monitor / Platform / Managed)
 *
 * Pure functions only — no framework/runtime dependencies. This is the funnel's
 * core IP and the input to CRM tier-routing (growth plan §9.1).
 *
 * NOTE ON BENCHMARKS: the peer averages in `PEER_BENCHMARKS` are SEED values,
 * not live data. Replace them with aggregated real Score data once volume exists
 * (that aggregate is the data moat — growth plan §9.5). They are clearly marked.
 */

// ── Domains ─────────────────────────────────────────────────────────────────
export type Domain =
  | "infrastructure"   // backup/DR, patching, endpoint mgmt, BCP
  | "cybersecurity"    // MFA/access, EDR/AV, vuln mgmt, incident response
  | "data_protection"  // archiving (17a-4), retention, DLP, encryption, Reg S-P
  | "ai_governance"    // AI inventory, policy, shadow-AI
  | "compliance_ops";  // WSP, 3120 testing, vendor risk, exam readiness, board reporting

export const DOMAIN_LABELS: Record<Domain, string> = {
  infrastructure: "Infrastructure & Resilience",
  cybersecurity: "Cybersecurity & Access",
  data_protection: "Data Protection & Records",
  ai_governance: "AI Governance",
  compliance_ops: "Compliance & Supervision",
};

export const DOMAIN_ORDER: Domain[] = [
  "cybersecurity",
  "data_protection",
  "compliance_ops",
  "infrastructure",
  "ai_governance",
];

// ── Question / answer shapes ──────────────────────────────────────────────────
export interface ScoreOption {
  label: string;
  /** 0..N — higher = better posture. The question's max option defines "full marks". */
  points: number;
}

export interface ScoreQuestion {
  id: string;
  domain: Domain;
  question: string;
  options: ScoreOption[];
  /** Relative importance multiplier (default 1). Critical controls weigh more. */
  weight?: number;
  /** Regulation this maps to, shown in the gap list. */
  regulation?: string;
  /** Plain-English consequence of failing this control (the urgency line). */
  gapConsequence?: string;
  /**
   * If true, a low/zero answer is a "critical gap" — surfaced first and used by
   * tier routing (drives firms with critical gaps toward a Managed strategy call).
   */
  critical?: boolean;
}

/** answers[i] = chosen option label for questions[i], or null if unanswered. */
export type ScoreAnswers = (string | null)[];

// ── Results shapes ────────────────────────────────────────────────────────────
export type Band = "strong" | "moderate" | "exposed";

export interface DomainScore {
  domain: Domain;
  label: string;
  score: number;       // 0–100
  earned: number;      // weighted points earned
  possible: number;    // weighted points possible
  answered: number;    // # answered in this domain
  total: number;       // # questions in this domain
}

export interface Gap {
  id: string;
  domain: Domain;
  question: string;
  regulation?: string;
  consequence?: string;
  critical: boolean;
  /** fraction of full marks earned on this question, 0..1 */
  attainment: number;
}

export interface ScoreResult {
  overall: number;                 // 0–100
  band: Band;
  bandLabel: string;
  domains: DomainScore[];
  gaps: Gap[];                     // sorted: critical first, then lowest attainment
  criticalGapCount: number;
  answered: number;
  total: number;
}

const BAND_LABELS: Record<Band, string> = {
  strong: "Strong Governance Posture",
  moderate: "Moderate Risk — Governance Gaps Identified",
  exposed: "Significant Governance Exposure",
};

export function bandFor(overall: number): Band {
  if (overall >= 80) return "strong";
  if (overall >= 60) return "moderate";
  return "exposed";
}

function maxPoints(q: ScoreQuestion): number {
  return q.options.reduce((m, o) => Math.max(m, o.points), 0);
}

function pointsFor(q: ScoreQuestion, answerLabel: string | null): number | null {
  if (answerLabel === null) return null;
  const opt = q.options.find((o) => o.label === answerLabel);
  return opt ? opt.points : null;
}

/**
 * Compute the full score. Unanswered questions are excluded from both earned and
 * possible (so a partial run still yields a fair score), but `answered/total`
 * lets the UI require completion before showing a final result.
 */
export function computeScore(questions: ScoreQuestion[], answers: ScoreAnswers): ScoreResult {
  const byDomain = new Map<Domain, { earned: number; possible: number; answered: number; total: number }>();
  const gaps: Gap[] = [];
  let answered = 0;

  questions.forEach((q, i) => {
    const w = q.weight ?? 1;
    const qMax = maxPoints(q);
    const d = byDomain.get(q.domain) ?? { earned: 0, possible: 0, answered: 0, total: 0 };
    d.total += 1;

    const pts = pointsFor(q, answers[i] ?? null);
    if (pts !== null && qMax > 0) {
      answered += 1;
      d.answered += 1;
      d.earned += (pts / qMax) * w * 100;
      d.possible += w * 100;

      const attainment = pts / qMax;
      // A gap is any question where the firm earned < 100% of marks.
      if (attainment < 1) {
        gaps.push({
          id: q.id,
          domain: q.domain,
          question: q.question,
          regulation: q.regulation,
          consequence: q.gapConsequence,
          critical: !!q.critical && attainment <= 0.5,
          attainment,
        });
      }
    }
    byDomain.set(q.domain, d);
  });

  const domains: DomainScore[] = [];
  let totalEarned = 0;
  let totalPossible = 0;
  for (const domain of DOMAIN_ORDER) {
    const d = byDomain.get(domain);
    if (!d || d.total === 0) continue;
    totalEarned += d.earned;
    totalPossible += d.possible;
    domains.push({
      domain,
      label: DOMAIN_LABELS[domain],
      score: d.possible > 0 ? Math.round((d.earned / d.possible) * 100) : 0,
      earned: d.earned,
      possible: d.possible,
      answered: d.answered,
      total: d.total,
    });
  }

  const overall = totalPossible > 0 ? Math.round((totalEarned / totalPossible) * 100) : 0;
  const band = bandFor(overall);

  gaps.sort((a, b) => {
    if (a.critical !== b.critical) return a.critical ? -1 : 1;
    return a.attainment - b.attainment;
  });

  return {
    overall,
    band,
    bandLabel: BAND_LABELS[band],
    domains,
    gaps,
    criticalGapCount: gaps.filter((g) => g.critical).length,
    answered,
    total: questions.length,
  };
}

// ── Tier routing (growth plan §4/§9.1) ────────────────────────────────────────
export type Tier = "monitor" | "platform" | "managed";

/** Firm-size band used for routing. Map headcount OR AUM to this at the UI layer. */
export type FirmSize = "small" | "mid" | "large";

export interface RoutingInput {
  overall: number;
  criticalGapCount: number;
  firmSize: FirmSize;
}

export interface Routing {
  tier: Tier;
  reason: string;
  cta: string;
  ctaHref: string;
}

/**
 * Route a completed Score to the right entry tier:
 *   - Managed  → high complexity or high exposure: needs an operated program + strategy call
 *   - Platform → meaningful gaps a self-serve/assisted subscription closes
 *   - Monitor  → strong + small: nurture, quarterly re-score, light offer
 */
export function routeTier({ overall, criticalGapCount, firmSize }: RoutingInput): Routing {
  const highExposure = overall < 50 || criticalGapCount >= 3;
  const complex = firmSize === "large";

  if (complex || highExposure) {
    return {
      tier: "managed",
      reason:
        firmSize === "large"
          ? "Firm size and complexity warrant a fully operated governance program."
          : "Exposure level warrants an operated program with hands-on remediation.",
      cta: "Book a Governance Strategy Call",
      ctaHref: "/ai-governance-risk-assessment",
    };
  }

  if (overall < 80) {
    return {
      tier: "platform",
      reason: "Meaningful gaps that a continuous-monitoring subscription can close.",
      cta: "See the Governance Platform",
      ctaHref: "/governance",
    };
  }

  return {
    tier: "monitor",
    reason: "Strong posture — maintain it with continuous monitoring and quarterly re-scoring.",
    cta: "Keep Your Score Current",
    ctaHref: "/governance",
  };
}

// ── Peer benchmarks (SEED DATA — replace with live aggregate) ──────────────────
export interface Benchmark {
  overall: number;
  domains: Partial<Record<Domain, number>>;
  seed: true;
}

export const PEER_BENCHMARKS: Record<string, Benchmark> = {
  "financial-services": {
    overall: 71,
    domains: { cybersecurity: 74, data_protection: 68, compliance_ops: 70, infrastructure: 76, ai_governance: 58 },
    seed: true,
  },
  healthcare: {
    overall: 69,
    domains: { cybersecurity: 72, data_protection: 70, compliance_ops: 67, infrastructure: 73, ai_governance: 55 },
    seed: true,
  },
  "law-firms": {
    overall: 66,
    domains: { cybersecurity: 68, data_protection: 65, compliance_ops: 64, infrastructure: 71, ai_governance: 60 },
    seed: true,
  },
  default: {
    overall: 68,
    domains: { cybersecurity: 70, data_protection: 66, compliance_ops: 66, infrastructure: 73, ai_governance: 57 },
    seed: true,
  },
};

export function getBenchmark(industrySlug: string | undefined): Benchmark {
  return PEER_BENCHMARKS[industrySlug ?? "default"] ?? PEER_BENCHMARKS.default;
}
