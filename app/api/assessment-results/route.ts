import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, firstName, assessmentType, score, max, resultSummary } = body;

    if (!email || !firstName || !assessmentType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) return NextResponse.json({ success: true });

    const resend = new Resend(resendKey);

    const scoreDisplay = (max && max > 0) ? `${Math.round((score / max) * 100)}%` : '—';

    const levelColor = resultSummary === 'Strong Governance Posture'
      ? '#10b981'
      : resultSummary === 'Moderate Risk — Governance Gaps Identified'
      ? '#f59e0b'
      : '#ef4444';

    await resend.emails.send({
      from: 'Centience <notifications@website.cpwk.com>',
      to: email,
      cc: 'hello@centience.ai',
      subject: `Your ${assessmentType} Results — ${resultSummary}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f9; border-radius: 8px;">
          <div style="background: #0f1f3d; padding: 20px 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #e8a820; margin: 0; font-size: 20px;">Your Assessment Results</h1>
            <p style="color: #ffffff; margin: 4px 0 0; font-size: 14px;">${assessmentType}</p>
          </div>
          <div style="background: #ffffff; padding: 28px 24px; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0; border-top: none;">
            <p style="font-size: 15px; color: #333; margin: 0 0 20px;">Hi ${firstName},</p>
            <p style="font-size: 14px; color: #555; line-height: 1.6; margin: 0 0 24px;">
              Thank you for completing the <strong>${assessmentType}</strong>. Here is a summary of your results.
            </p>

            <div style="background: #f5f7fa; border-left: 4px solid ${levelColor}; border-radius: 6px; padding: 20px 20px; margin-bottom: 24px;">
              <p style="margin: 0 0 4px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: #888;">Your Result</p>
              <p style="margin: 0 0 6px; font-size: 18px; font-weight: bold; color: ${levelColor};">${resultSummary}</p>
              <p style="margin: 0; font-size: 14px; color: #666;">Score: <strong>${scoreDisplay}</strong></p>
            </div>

            <p style="font-size: 14px; color: #555; line-height: 1.6; margin: 0 0 24px;">
              Our team has also received a copy of your results and will reach out shortly to discuss your governance posture and next steps.
            </p>

            <div style="text-align: center; margin-bottom: 24px;">
              <a href="https://centience.ai/ai-governance-risk-assessment" style="display: inline-block; background: #e8a820; color: #0f1f3d; padding: 12px 28px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 14px;">
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
