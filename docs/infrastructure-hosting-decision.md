# Decision Record — Infrastructure Hosting (managed stack vs. AWS)

**Status:** Decided — **stay on GitHub + Supabase + Vercel. Do NOT migrate to AWS now.** Revisit only when a trigger below is hit.
**Date:** July 2026 · **Owner:** Orville
**Applies to:** the Centience Platform app (`centience-platform`, Vercel project `finshield`).

## Decision
Keep the current managed stack (Next.js on **Vercel**, Postgres/Auth/RLS on **Supabase**, code on **GitHub**). Defer any AWS migration.

## Why (condensed)
- **It doesn't block SOC 2 or enterprise sales.** Supabase and Vercel are both SOC 2 Type II and **run on AWS under the hood** — we already inherit AWS-grade infra without the ops burden. "Hosted on Supabase (US) + Vercel, both on AWS" is a normal, acceptable DDQ answer for our ICP.
- **HIPAA is achievable without moving** — it needs **BAAs** (Supabase paid tier; Vercel Enterprise), a plan upgrade, not a cloud migration.
- **Opportunity cost is brutal.** Raw AWS = VPC/IAM/RDS/containers/patching = a DevOps hire and months of undifferentiated work for a thin team. The managed stack is a force multiplier at our stage.
- **No lock-in.** The app is standard Next.js + Postgres + RLS — portable. Next.js → AWS (Amplify/ECS/OpenNext) and Postgres → RDS are clean migrations later if needed.
- **Cost isn't the driver** at hundreds of orgs (low-thousands/mo vs. one $200K account).

## Revisit AWS only if one of these becomes true (none are today)
- A contract **requires** single-tenant/VPC isolation or a specific cloud.
- **Scale economics** clearly exceed managed pricing + a platform hire.
- We've **hired a dedicated infra/platform team**.
- A **data-residency mandate** Supabase regions can't meet.

## When we DO get there — the to-do (not now)
- Get **BAAs** from Supabase + Vercel; pin Supabase region to US. *(Needed for the healthcare book — Alvita, Graviton.)*
- Collect subprocessors' **SOC 2 reports** as evidence for our own SOC 2 + DDQs.
- Enable Supabase **PITR/backups**; finish prod hardening (`CREDENTIAL_ENCRYPTION_KEY`, org-scoping guardrail).
- Maintain a **subprocessor list + data-flow diagram** (DDQ asset). Draft the DDQ/SOC 2 infrastructure section.

## Scaling caveat (solved within the current stack, not by AWS)
Enforcement runs are synchronous. Continuous re-scan across many orgs will outgrow inline request handlers — fix with **Vercel Cron + a job queue** (or Supabase Edge Functions), *not* a move to AWS.
