import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

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
    // Support both split firstName/lastName (ContactPage) and single name (NativeContactForm)
    const {
      firstName, lastName, name,
      email, phone, company, jobTitle,
      service, reason, message, referringPage,
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
          created_at: submittedAt,
        });
        if (dbError) console.error('Supabase insert error:', dbError.message);
      } catch (dbErr) {
        console.error('Supabase insert error (non-fatal):', dbErr);
      }
    }

    // 2. Send email notification via Resend
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      try {
        const resend = new Resend(resendKey);
        await resend.emails.send({
          from: 'Centience <notifications@website.cpwk.com>',
          to: 'hello@centience.ai',
          subject: `New Contact: ${fullName} — ${company || 'No Company'}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f9; border-radius: 8px;">
              <div style="background: #0f1f3d; padding: 20px 24px; border-radius: 8px 8px 0 0;">
                <h1 style="color: #e8a820; margin: 0; font-size: 20px;">New Contact Form Submission</h1>
                <p style="color: #ffffff; margin: 4px 0 0; font-size: 14px;">${referringPage || 'centience.ai/contact'}</p>
              </div>
              <div style="background: #ffffff; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0; border-top: none;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr><td style="padding: 8px 0; color: #666; font-size: 13px; width: 130px;">Name</td><td style="padding: 8px 0; font-weight: bold; font-size: 14px;">${fullName}</td></tr>
                  <tr style="background: #f9f9f9;"><td style="padding: 8px 4px; color: #666; font-size: 13px;">Email</td><td style="padding: 8px 4px; font-size: 14px;"><a href="mailto:${email}" style="color: #0f1f3d;">${email}</a></td></tr>
                  <tr><td style="padding: 8px 0; color: #666; font-size: 13px;">Phone</td><td style="padding: 8px 0; font-size: 14px;">${phone || '—'}</td></tr>
                  <tr style="background: #f9f9f9;"><td style="padding: 8px 4px; color: #666; font-size: 13px;">Company</td><td style="padding: 8px 4px; font-size: 14px;">${company || '—'}</td></tr>
                  <tr><td style="padding: 8px 0; color: #666; font-size: 13px;">Job Title</td><td style="padding: 8px 0; font-size: 14px;">${jobTitle || '—'}</td></tr>
                  <tr style="background: #f9f9f9;"><td style="padding: 8px 4px; color: #666; font-size: 13px;">Service / Reason</td><td style="padding: 8px 4px; font-size: 14px;">${serviceOrReason || '—'}</td></tr>
                  <tr style="background: #f9f9f9;"><td style="padding: 8px 4px; color: #666; font-size: 13px;">Submitted</td><td style="padding: 8px 4px; font-size: 14px;">${new Date(submittedAt).toLocaleString('en-US', { timeZone: 'America/New_York' })} ET</td></tr>
                </table>
                <div style="margin-top: 16px; padding: 16px; background: #f9f9f9; border-radius: 6px; border-left: 3px solid #e8a820;">
                  <p style="color: #666; font-size: 12px; margin: 0 0 6px;">Message</p>
                  <p style="font-size: 14px; margin: 0; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
                </div>
                <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #e0e0e0;">
                  <a href="mailto:${email}?subject=Re: Your Centience Inquiry" style="display: inline-block; background: #e8a820; color: #0f1f3d; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 14px;">Reply to ${fullName.split(' ')[0]}</a>
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
