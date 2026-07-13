# Easy New-Client Onboarding

**Question:** how do we onboard *new* clients (not the base) quickly and without it all landing on you?

**Principle:** onboarding speed is a function of **who connects the data** and **how much a human has to do**. Design two fast paths and a standard 14-day runbook so a hire — or the software — carries it, not you.

## The two onboarding paths

### Path A — Managed / "we run it" (whales, higher ACV)
You operate their infrastructure, so onboarding = provisioning, not data-collection.
1. Signed order → create org in the platform.
2. Connect their M365 tenant (you do it, since you'll operate it).
3. Score runs automatically → instant gap map.
4. Generate WSP + first evidence pack.
**Time-to-value: days.** Human effort: an onboarding tech, from the runbook — not you.

### Path B — Platform / self-serve (Core + standalone firms with internal IT)
The firm's own IT connects a **read-only** M365 app registration; the app does the rest. This is the scale path — it removes you from the loop entirely.
1. Self-serve signup (existing onboarding wizard).
2. **Guided M365 app-registration wizard** (platform BUILD-BRIEF WI-2) walks their IT through creating the read-only app reg in <30 min.
3. Score runs → dashboard, gap map, WSP generator available immediately.
**Time-to-value: same day.** Human effort: near-zero; support only on connection issues.

> The single highest-leverage build for easy onboarding is **WI-2 (guided M365 connect)** in the platform build brief. Until it ships, Path B needs a human to hand-hold the app registration — the friction you want to remove.

## The standard 14-day activation runbook (both paths)
**Days 1–2:** org created · connectors connected · Score run · kickoff email with score + top 3 gaps.
**Days 3–7:** WSP generated · first evidence pack delivered · remediate/queue top gaps.
**Days 8–14:** confirm monitoring live · set quarterly re-score reminder · schedule 30-day check-in.
→ Client is "live and evidenced" in two weeks, every time. This runbook is a checklist a hire executes — capture it once, hand it off.

## What makes it *not* land on you
1. **The Score removes diagnosis effort** — no expert needed to find gaps; the software does it.
2. **The wizard removes connection effort** (once WI-2 ships) — the client's IT self-connects.
3. **The app generates the artifacts** (WSP, gap report, evidence pack) — a junior person delivers senior output.
4. **The runbook removes decision effort** — every onboarding is the same 14-day checklist.
5. **Founder touches only the whale kickoffs** — everything else is delegable from day one.

## Sequence
- **Now:** run Path A manually for base whales; document the runbook as you go (record onboardings like you record reviews).
- **When WI-2 ships:** open Path B self-serve for Core + standalone — this is what lets client count scale without a proportional onboarding team (the Platform-tier design in the growth plan).
- **First ops hire:** owns the runbook end-to-end; you stay on whale kickoffs only.
