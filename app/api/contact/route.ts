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

    // Spam / geo gate: honeypot + USA-only + hCaptcha + email validation.
    const guard = await guardSubmission(req, body, { captcha: 'required' });
    if (!guard.ok) return guard.response!;

    // Support both split firstName/lastName (ContactPage) and single name (NativeContactForm)
    const {
      firstName, lastName, name,
      email, phone, company, jobTitle,
      service, reason, message, referringPage,
      smsConsent, smsConsentText,
    } = body;

    const fullName = (firstName && lastName)
      ? `${firstName} ${lastName}`.trim()
      : (name || '').trim();
    const serviceOrReason = service || reason || null;

    if (!fullName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const submittedAt = new Date().toISOString();

    // 1. Save to Supabase contact_submissions table
    const supabase = getSupabase();
    if (supabase) {
      try {
        const { error: dbError } = await supabase.from('contact_submissions').insert({
          full_name: fullName,
          email,
          phone: phone || null,
          company: company || null,
          reason: serviceOrReason,
          message,
          referring_page: referringPage || null,
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
      const first = firstName || splitName(fullName).firstname;
      const last = lastName || splitName(fullName).lastname;
      const contactId = await upsertContact({
        email, firstname: first, lastname: last, company,
        jobtitle: jobTitle, phone, lifecyclestage: 'lead',
      });
      await addNoteToContact(
        contactId,
        `Contact form submission.${serviceOrReason ? ` Reason: ${serviceOrReason}.` : ''}` +
        `${referringPage ? ` Page: ${referringPage}.` : ''}` +
        `\nSMS consent: ${smsConsent ? `GRANTED at ${submittedAt}${phone ? ` for ${phone}` : ''} — "${smsConsentText}"` : 'not given'}` +
        `\n\nMessage:\n${message}`
      );
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
          subject: `New Contact: ${subjectSafe(fullName, 80)} — ${subjectSafe(company, 80) || 'No Company'}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f9; border-radius: 8px;">
              <div style="background: #0f1f3d; padding: 20px 24px; border-radius: 8px 8px 0 0;">
                <h1 style="color: #e8a820; margin: 0; font-size: 20px;">New Contact Form Submission</h1>
                <p style="color: #ffffff; margin: 4px 0 0; font-size: 14px;">${safe(referringPage, 200) || 'centience.ai/contact'}</p>
              </div>
              <div style="background: #ffffff; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0; border-top: none;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr><td style="padding: 8px 0; color: #666; font-size: 13px; width: 130px;">Name</td><td style="padding: 8px 0; font-weight: bold; font-size: 14px;">${safe(fullName, 120)}</td></tr>
                  <tr style="background: #f9f9f9;"><td style="padding: 8px 4px; color: #666; font-size: 13px;">Email</td><td style="padding: 8px 4px; font-size: 14px;"><a href="mailto:${encodeURIComponent(email)}" style="color: #0f1f3d;">${safe(email, 200)}</a></td></tr>
                  <tr><td style="padding: 8px 0; color: #666; font-size: 13px;">Phone</td><td style="padding: 8px 0; font-size: 14px;">${safe(phone, 40) || '—'}</td></tr>
                  <tr style="background: #f9f9f9;"><td style="padding: 8px 4px; color: #666; font-size: 13px;">Company</td><td style="padding: 8px 4px; font-size: 14px;">${safe(company, 160) || '—'}</td></tr>
                  <tr><td style="padding: 8px 0; color: #666; font-size: 13px;">Job Title</td><td style="padding: 8px 0; font-size: 14px;">${safe(jobTitle, 120) || '—'}</td></tr>
                  <tr style="background: #f9f9f9;"><td style="padding: 8px 4px; color: #666; font-size: 13px;">Service / Reason</td><td style="padding: 8px 4px; font-size: 14px;">${safe(serviceOrReason, 200) || '—'}</td></tr>
                  <tr><td style="padding: 8px 0; color: #666; font-size: 13px;">SMS consent</td><td style="padding: 8px 0; font-size: 14px; font-weight: bold; color: ${smsConsent ? '#1a7f37' : '#999'};">${smsConsent ? `✓ Granted${phone ? ` — ${safe(phone, 40)}` : ''}` : 'Not given'}</td></tr>
                  <tr style="background: #f9f9f9;"><td style="padding: 8px 4px; color: #666; font-size: 13px;">Submitted</td><td style="padding: 8px 4px; font-size: 14px;">${new Date(submittedAt).toLocaleString('en-US', { timeZone: 'America/New_York' })} ET</td></tr>
                  <tr><td style="padding: 8px 0; color: #666; font-size: 13px;">IP / Country</td><td style="padding: 8px 0; font-size: 14px;">${guard.ip} · ${guard.country || 'Unknown'}</td></tr>
                </table>
                <div style="margin-top: 16px; padding: 16px; background: #f9f9f9; border-radius: 6px; border-left: 3px solid #e8a820;">
                  <p style="color: #666; font-size: 12px; margin: 0 0 6px;">Message</p>
                  <p style="font-size: 14px; margin: 0; line-height: 1.6;">${escapeHtml(capped(message, 5000)).replace(/\n/g, '<br>')}</p>
                </div>
                <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #e0e0e0;">
                  <a href="mailto:${encodeURIComponent(email)}?subject=Re: Your Centience Inquiry" style="display: inline-block; background: #e8a820; color: #0f1f3d; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 14px;">Reply to ${safe(String(fullName).split(' ')[0], 60)}</a>
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
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
