import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { upsertContact, addNoteToContact, setScoreProperties } from '@/lib/hubspot';
import { guardSubmission } from '@/lib/submissionGuard';
import { safe, subjectSafe } from '@/lib/emailSafe';

interface AnswerRow { question?: string; answer?: string | null; domain?: string }

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) return null;
  return createClient(url, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Spam / geo gate: honeypot + USA-only + email validation.
    //
    // Captcha is 'required' here rather than 'optional' because this is the one
    // route that emails a caller-supplied address. Under 'optional' the token is
    // only checked when one is sent, so omitting it skipped the check entirely —
    // leaving an unauthenticated caller able to send Centience-branded mail, with
    // a subject and body they control, to any address they chose. The honeypot is
    // bypassed by not sending the field and the geo gate by a US IP, so neither
    // closed it. Note that verifyHCaptcha still fails open when
    // HCAPTCHA_SECRET_KEY is unset, so this is only enforced once that is set in
    // Vercel.
    const guard = await guardSubmission(req, body, { captcha: 'required' });
    if (!guard.ok) return guard.response!;

    const { email, firstName, lastName, company, assessmentType, score, max, resultSummary, overall, tier, domains, topGaps, answers, firmSize, industrySlug } = body;

    if (!email || !firstName || !assessmentType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Persist the full result + answers to Supabase (non-fatal) so they're
    // queryable for onboarding pre-fill and reporting.
    try {
      const supabase = getSupabase();
      if (supabase) {
        const { error: dbErr } = await supabase.from('assessment_results').insert({
          email,
          first_name: firstName,
          last_name: lastName || null,
          company: company || null,
          assessment_type: assessmentType,
          industry_slug: industrySlug || null,
          firm_size: firmSize || null,
          overall: typeof overall === 'number' ? overall : null,
          tier: tier || null,
          domains: Array.isArray(domains) ? domains : [],
          top_gaps: Array.isArray(topGaps) ? topGaps : [],
          answers: Array.isArray(answers) ? answers : [],
          created_at: new Date().toISOString(),
        });
        if (dbErr) console.error('Supabase assessment_results insert error:', dbErr.message);
      }
    } catch (dbErr) {
      console.error('Supabase assessment_results insert error (non-fatal):', dbErr);
    }

    // Sync the Governance Score results + the firm's actual answers onto the
    // HubSpot record (non-fatal) so sales can use them in-conversation and to
    // get ahead of onboarding.
    try {
      const contactId = await upsertContact({
        email, firstname: firstName, lastname: lastName, company, lifecyclestage: 'lead',
      });
      if (contactId) {
        const domainLines = Array.isArray(domains)
          ? domains.map((d: { label?: string; score?: number }) => `  • ${d.label ?? ''}: ${d.score ?? '—'}/100`).join('\n')
          : '';
        const gapLines = Array.isArray(topGaps)
          ? topGaps.map((g: { question?: string; regulation?: string }) => `  • ${g.question ?? ''}${g.regulation ? ` [${g.regulation}]` : ''}`).join('\n')
          : '';
        const answerLines = Array.isArray(answers)
          ? (answers as AnswerRow[]).map((a) => `  • [${a.domain ?? ''}] ${a.question ?? ''}\n      → ${a.answer ?? '—'}`).join('\n')
          : '';
        const note =
          `GOVERNANCE SCORE — ${assessmentType}\n` +
          `Overall: ${typeof overall === 'number' ? overall + '/100' : (resultSummary ?? '—')}` +
          `${firmSize ? ` · Firm size: ${firmSize}` : ''}` +
          `${tier ? ` · Recommended track: ${tier}` : ''}\n\n` +
          (domainLines ? `Domain scores:\n${domainLines}\n\n` : '') +
          (gapLines ? `Priority gaps:\n${gapLines}\n\n` : '') +
          (answerLines ? `Full responses:\n${answerLines}` : '');
        await addNoteToContact(contactId, note);
        await setScoreProperties(contactId, {
          governance_score: typeof overall === 'number' ? overall : undefined,
          governance_tier: tier,
          governance_assessed_at: new Date().toISOString(),
        });
      }
    } catch (hsErr) {
      console.error('HubSpot results sync error (non-fatal):', hsErr);
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) return NextResponse.json({ success: true });

    const resend = new Resend(resendKey);

    // Prefer the 0–100 Governance Score when present; fall back to the legacy score/max ratio.
    const scoreDisplay = (typeof overall === 'number')
      ? `${overall}/100`
      : (max && max > 0) ? `${Math.round((score / max) * 100)}%` : '—';

    const tierLabel: Record<string, string> = {
      monitor: 'Monitor — maintain your posture',
      platform: 'Governance Platform — continuous monitoring',
      managed: 'Managed Program — fully operated governance',
    };
    // Arrays are capped as well as escaped — the caller controls their length,
    // and an unbounded list would let one request build an arbitrarily large
    // email.
    const domainRows = Array.isArray(domains) && domains.length > 0
      ? `<div style="margin: 0 0 24px;">${domains.slice(0, 20).map((d: { label?: string; score?: number }) =>
          `<div style="display:flex;justify-content:space-between;font-size:13px;color:#555;padding:4px 0;border-bottom:1px solid #eee;"><span>${safe(d.label, 120)}</span><strong>${typeof d.score === 'number' ? d.score : '—'}/100</strong></div>`
        ).join('')}</div>`
      : '';
    const gapRows = Array.isArray(topGaps) && topGaps.length > 0
      ? `<p style="margin:0 0 8px;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#888;">Priority gaps</p><ul style="margin:0 0 24px;padding-left:18px;color:#555;font-size:13px;">${topGaps.slice(0, 20).map((g: { question?: string; regulation?: string }) =>
          `<li style="margin-bottom:6px;">${safe(g.question, 300)}${g.regulation ? ` <em style="color:#888;">(${safe(g.regulation, 120)})</em>` : ''}</li>`
        ).join('')}</ul>`
      : '';
    const tierRow = tier && tierLabel[tier]
      ? `<p style="font-size:14px;color:#555;margin:0 0 24px;">Recommended track: <strong>${tierLabel[tier]}</strong></p>`
      : '';

    const levelColor = resultSummary === 'Strong Governance Posture'
      ? '#10b981'
      : resultSummary === 'Moderate Risk — Governance Gaps Identified'
      ? '#f59e0b'
      : '#ef4444';

    await resend.emails.send({
      from: 'Centience <notifications@website.cpwk.com>',
      to: email,
      cc: 'hello@centience.ai',
      subject: `Your ${subjectSafe(assessmentType, 80)} Results — ${subjectSafe(resultSummary, 80)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f9; border-radius: 8px;">
          <div style="background: #0f1f3d; padding: 20px 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #e8a820; margin: 0; font-size: 20px;">Your Assessment Results</h1>
            <p style="color: #ffffff; margin: 4px 0 0; font-size: 14px;">${safe(assessmentType, 120)}</p>
          </div>
          <div style="background: #ffffff; padding: 28px 24px; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0; border-top: none;">
            <p style="font-size: 15px; color: #333; margin: 0 0 20px;">Hi ${safe(firstName, 80)},</p>
            <p style="font-size: 14px; color: #555; line-height: 1.6; margin: 0 0 24px;">
              Thank you for completing the <strong>${safe(assessmentType, 120)}</strong>. Here is a summary of your results.
            </p>

            <div style="background: #f5f7fa; border-left: 4px solid ${levelColor}; border-radius: 6px; padding: 20px 20px; margin-bottom: 24px;">
              <p style="margin: 0 0 4px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: #888;">Your Result</p>
              <p style="margin: 0 0 6px; font-size: 18px; font-weight: bold; color: ${levelColor};">${safe(resultSummary, 120)}</p>
              <p style="margin: 0; font-size: 14px; color: #666;">Score: <strong>${scoreDisplay}</strong></p>
            </div>

            ${domainRows}
            ${gapRows}
            ${tierRow}

            <p style="font-size: 14px; color: #555; line-height: 1.6; margin: 0 0 24px;">
              Our team has also received a copy of your results and will reach out shortly to discuss your governance posture and next steps.
            </p>

            <div style="text-align: center; margin-bottom: 24px;">
              <a href="https://centience.ai/assessments/ai-governance" style="display: inline-block; background: #e8a820; color: #0f1f3d; padding: 12px 28px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 14px;">
                Book Your Governance Assessment
              </a>
            </div>

            <div style="border-top: 1px solid #e0e0e0; padding-top: 20px; text-align: center;">
              <p style="font-size: 13px; color: #888; margin: 0 0 6px;">Questions? We're here.</p>
              <p style="font-size: 13px; color: #555; margin: 0;">
                <a href="tel:+18779457177" style="color: #0f1f3d;">(877) 945-7177</a> &nbsp;·&nbsp;
                <a href="mailto:hello@centience.ai" style="color: #0f1f3d;">hello@centience.ai</a>
              </p>
            </div>
          </div>
          <p style="color: #999; font-size: 11px; text-align: center; margin-top: 16px;">Centience · centience.ai</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Assessment results email error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
