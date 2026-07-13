# Base Account Ranking Playbook

**Purpose:** turn the 75 Compuwork clients into a ranked outreach order for the H2 base-expansion push (`path-to-4m-h2-2026-gtm-execution.md`). Use with `base-account-ranking-template.csv` (import to Google Sheets).

## How to use (30 minutes for the whole base)
1. Import `base-account-ranking-template.csv` into Google Sheets.
2. One row per client. Fill the input columns (most you already know; the Score comes from running the Governance Score on data you already operate).
3. Paste the **Priority Score** formula (below). Sort descending. That's your call order.
4. Assign Track, Owner, and Next Action. Work top-down.

## Column definitions
| Column | How to fill |
|---|---|
| **Governance Score (0-100)** | From the Centience Governance Score run on their environment. Lower = more upside + more urgency. |
| **Critical Gaps** | Count of critical-flagged gaps from the Score (MFA, archiving, WSP, IRP, retention, backup, AI inventory). |
| **Reg Exposure (1-5)** | 5 = dual-registered / recently examined / prior deficiency; 1 = light-touch, low scrutiny. |
| **Account Size (1-3)** | 3 = large (Managed-fit, $75K+ potential); 2 = mid (Platform-fit); 1 = small (tail). |
| **Current Annual $** | What they pay Compuwork today. |
| **Est. Upsell ACV** | Realistic governance add: Whale $80–120K · Core $15–30K · Tail $0–8K. |
| **Track** | Whale / Core / Tail — see rule below. |
| **Priority Score** | Computed. Higher = call first. |

## The Priority Score formula
Priority = **GapSeverity × Reg Exposure × Account Size**, where GapSeverity converts the Score to an urgency number (a low Score = high severity) and adds weight for critical gaps.

Google Sheets (assuming Score in **E2**, Critical Gaps **F2**, Reg Exposure **G2**, Account Size **H2**):

```
=ROUND( ( (100 - E2) + F2*10 ) * G2 * H2 / 10 , 0 )
```

- `(100 - E2)` → the gap (lower Score → bigger number).
- `+ F2*10` → each critical gap adds urgency.
- `× Reg Exposure × Account Size` → weight by scrutiny and deal size.
- `/10` → keep the number readable.

> Example: RIA A — Score 58, 3 critical, exposure 5, size 3 → `((42)+(30))×5×3/10 = 108`… tune the divisor to taste; only the *ranking* matters, not the absolute number. (The CSV's example values use a slightly different constant — recompute with the formula once imported.)

## Track assignment rule
- **Whale** → Account Size = 3 (or AUM ≥ ~$1B). Route to **Managed** (founder-led, $75K+). These are also your proof + referral engine.
- **Core** → Account Size = 2. Route to **Platform** (bundle onto MSP invoice, $15–30K).
- **Tail** → Account Size = 1 and Score ≥ 75. Nurture, quarterly re-score, light add-on only.

## Working order for H2
1. **Whales first** (highest ACV + proof) — even though there are few, they anchor the number and unlock referrals.
2. **High-priority Core** (high gap × exposure) — the volume of the $4M plan.
3. **Tail** — concierge email, no founder time.

Re-rank monthly as Scores update. Feed every closed deal's Score-delta back into case studies.
