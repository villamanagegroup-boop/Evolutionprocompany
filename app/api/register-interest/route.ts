import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@evolutionproductionco.com";
  const FROM_EMAIL = process.env.FROM_EMAIL || "EPC <noreply@evolutionproductionco.com>";

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();
    const { firstName, lastName, email, age, cityState, discipline, bio } = body;

    if (!firstName || !lastName || !email || !age || !cityState || !discipline) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Confirmation email to submitter
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "You're on the list — Evolution Production Company",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { background: #0D0A14; color: #FFF8F0; font-family: sans-serif; margin: 0; padding: 0; }
            .container { max-width: 560px; margin: 0 auto; padding: 40px 24px; }
            .header { background: linear-gradient(135deg, #7B2FBE, #C2185B, #E8334A); border-radius: 12px; padding: 32px; text-align: center; margin-bottom: 32px; }
            .header h1 { font-size: 32px; letter-spacing: 0.1em; margin: 0 0 8px; color: #FFF8F0; }
            .header p { color: rgba(255,248,240,0.8); font-style: italic; margin: 0; }
            .body { padding: 0 8px; }
            .body p { color: rgba(255,248,240,0.7); line-height: 1.6; font-size: 15px; }
            .detail-row { display: flex; gap: 12px; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.08); }
            .detail-label { color: rgba(255,248,240,0.4); font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; min-width: 100px; }
            .detail-value { color: #FFF8F0; font-size: 14px; }
            .cta { margin: 32px 0 0; text-align: center; }
            .cta a { display: inline-block; background: #F5C842; color: #0D0A14; font-weight: 700; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-size: 15px; }
            .footer { margin-top: 40px; text-align: center; color: rgba(255,248,240,0.3); font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>EVOLUTION PRODUCTION COMPANY</h1>
              <p>Where Ice Meets Dance. Where Art Becomes Legend.</p>
            </div>
            <div class="body">
              <p>Hi ${firstName},</p>
              <p>You're officially on the list. We've received your interest in joining Evolution Production Company, and we'll reach out directly when audition dates for the DMV area are announced.</p>
              <p>Here's what you submitted:</p>
              <div style="margin: 20px 0; padding: 16px; background: rgba(255,255,255,0.04); border-radius: 10px; border: 1px solid rgba(255,255,255,0.08);">
                <div class="detail-row"><span class="detail-label">Name</span><span class="detail-value">${firstName} ${lastName}</span></div>
                <div class="detail-row"><span class="detail-label">Age</span><span class="detail-value">${age}</span></div>
                <div class="detail-row"><span class="detail-label">Location</span><span class="detail-value">${cityState}</span></div>
                <div class="detail-row"><span class="detail-label">Discipline</span><span class="detail-value">${discipline}</span></div>
                ${bio ? `<div class="detail-row"><span class="detail-label">Bio</span><span class="detail-value">${bio}</span></div>` : ""}
              </div>
              <p>In the meantime, review the company tracks and what to expect at <strong>evolutionproductionco.com/auditions</strong>.</p>
              <div class="cta">
                <a href="https://evolutionproductionco.com/company">Learn About the Company</a>
              </div>
            </div>
            <div class="footer">
              &copy; ${new Date().getFullYear()} Evolution Production Company &bull; DMV Area
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // Notification email to EPC admin
    await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `New Interest: ${firstName} ${lastName} — ${discipline}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { background: #0D0A14; color: #FFF8F0; font-family: sans-serif; margin: 0; padding: 0; }
            .container { max-width: 560px; margin: 0 auto; padding: 32px 24px; }
            h2 { color: #F5C842; font-size: 20px; margin: 0 0 20px; }
            .detail-row { display: flex; gap: 12px; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.08); }
            .label { color: rgba(255,248,240,0.4); font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; min-width: 100px; }
            .value { color: #FFF8F0; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>New Interest Registration</h2>
            <div class="detail-row"><span class="label">Name</span><span class="value">${firstName} ${lastName}</span></div>
            <div class="detail-row"><span class="label">Email</span><span class="value">${email}</span></div>
            <div class="detail-row"><span class="label">Age</span><span class="value">${age}</span></div>
            <div class="detail-row"><span class="label">Location</span><span class="value">${cityState}</span></div>
            <div class="detail-row"><span class="label">Discipline</span><span class="value">${discipline}</span></div>
            ${bio ? `<div class="detail-row"><span class="label">Bio</span><span class="value">${bio}</span></div>` : ""}
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Register interest error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
