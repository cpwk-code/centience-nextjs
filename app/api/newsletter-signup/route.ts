import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { upsertContact, addNoteToContact, splitName } from '@/lib/hubspot';
import { guardSubmission } from '@/lib/submissionGuard';
import { safe, subjectSafe, escapeHtml, capped } from '@/lib/emailSafe';

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

    // Spam / geo gate: honeypot + USA-only + email validation (+ hCaptcha if a token is sent).
    const guard = await guardSubmission(req, body, { captcha: 'optional' });
    if (!guard.ok) return guard.response!;

    const { name, email, industry } = body;

    if (!name || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const submittedAt = new Date().toISOString();

    // 1. Save to Supabase
    const supabase = getSupabase();
    if (supabase) {
      try {
        const { error: dbError } = await supabase.from('newsletter_subscribers').insert({
          name,
          email,
          industry: industry || null,
          ip_address: guard.ip,
          country: guard.country,
          created_at: submittedAt,
        });
        if (dbError) console.error('Supabase insert error:', dbError.message);
      } catch (dbErr) {
        console.error('Supabase insert error (non-fatal):', dbErr);
      }
    }

    // 1b. Upsert to HubSpot (non-fatal) — every form becomes a contact
    try {
      const { firstname, lastname } = splitName(name);
      const contactId = await upsertContact({
        email, firstname, lastname, industry, lifecyclestage: 'subscriber',
      });
      await addNoteToContact(contactId, `Newsletter signup${industry ? ` · Industry: ${industry}` : ''}.`);
    } catch (hsErr) {
      console.error('HubSpot sync error (non-fatal):', hsErr);
    }

    // 2. Send email notification via Resend
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      try {
        const resend = new Resend(resendKey);
        await resend.emails.send({
          from: 'Centience <notifications@website.cpwk.com>',
          to: 'hello@centience.ai',
          subject: `New Newsletter Subscriber: ${subjectSafe(name, 80)}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f9; border-radius: 8px;">
              <div style="background: #0f1f3d; padding: 20px 24px; border-radius: 8px 8px 0 0;">
                <h1 style="color: #e8a820; margin: 0; font-size: 20px;">New Newsletter Subscriber</h1>
                <p style="color: #ffffff; margin: 4px 0 0; font-size: 14px;">Governance Intelligence Newsletter</p>
              </div>
              <div style="background: #ffffff; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0; border-top: none;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr><td style="padding: 8px 0; color: #666; font-size: 13px; width: 130px;">Name</td><td style="padding: 8px 0; font-weight: bold; font-size: 14px;">${safe(name, 120)}</td></tr>
                  <tr style="background: #f9f9f9;"><td style="padding: 8px 4px; color: #666; font-size: 13px;">Email</td><td style="padding: 8px 4px; font-size: 14px;"><a href="mailto:${encodeURIComponent(email)}" style="color: #0f1f3d;">${safe(email, 200)}</a></td></tr>
                  <tr><td style="padding: 8px 0; color: #666; font-size: 13px;">Industry</td><td style="padding: 8px 0; font-size: 14px;">${safe(industry, 120) || '—'}</td></tr>
                  <tr style="background: #f9f9f9;"><td style="padding: 8px 4px; color: #666; font-size: 13px;">Subscribed</td><td style="padding: 8px 4px; font-size: 14px;">${new Date(submittedAt).toLocaleString('en-US', { timeZone: 'America/New_York' })} ET</td></tr>
                </table>
                <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #e0e0e0;">
                  <a href="mailto:${encodeURIComponent(email)}" style="display: inline-block; background: #e8a820; color: #0f1f3d; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 14px;">Email ${safe(String(name).split(' ')[0], 60)}</a>
                </div>
              </div>
              <p style="color: #999; font-size: 11px; text-align: center; margin-top: 16px;">Centience · centience.ai</p>
            </div>
          `,
        });
      } catch (emailErr) {
        console.error('Resend email error (non-fatal):', emailErr);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Newsletter signup API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
