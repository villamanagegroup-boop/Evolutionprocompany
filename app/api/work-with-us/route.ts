import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@evolutionproductionco.com";
  const FROM_EMAIL = process.env.FROM_EMAIL || "EPC <noreply@evolutionproductionco.com>";

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();
    const { firstName, lastName, email, role, background, why } = body;

    if (!firstName || !lastName || !email || !role || !background) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Confirmation to applicant
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "We received your application — Evolution Production Company",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { background: #0D0A14; color: #FFF8F0; font-family: sans-serif; margin: 0; padding: 0; }
            .container { max-width: 560px; margin: 0 auto; padding: 40px 24px; }
            .header { background: linear-gradient(135deg, #7B2FBE, #C2185B, #E8334A); border-radius: 12px; padding: 32px; text-align: center; margin-bottom: 32px; }
            .header h1 { font-size: 28px; letter-spacing: 0.1em; margin: 0 0 8px; color: #FFF8F0; }
            .header p { color: rgba(255,248,240,0.8); font-style: italic; margin: 0; font-size: 14px; }
            p { color: rgba(255,248,240,0.7); line-height: 1.6; font-size: 15px; }
            .detail { padding: 16px; background: rgba(255,255,255,0.04); border-radius: 10px; border: 1px solid rgba(255,255,255,0.08); margin: 20px 0; }
            .detail-row { display: flex; gap: 12px; padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.06); }
            .detail-row:last-child { border-bottom: none; }
            .label { color: rgba(255,248,240,0.4); font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; min-width: 100px; }
            .value { color: #FFF8F0; font-size: 14px; }
            .footer { margin-top: 40px; text-align: center; color: rgba(255,248,240,0.3); font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>EVOLUTION PRODUCTION COMPANY</h1>
              <p>We received your application</p>
            </div>
            <p>Hi ${firstName},</p>
            <p>Thank you for your interest in working with Evolution Production Company. We review every submission and reach out directly to candidates whose background and vision align with where EPC is going.</p>
            <div class="detail">
              <div class="detail-row"><span class="label">Name</span><span class="value">${firstName} ${lastName}</span></div>
              <div class="detail-row"><span class="label">Role</span><span class="value">${role}</span></div>
            </div>
            <p>We'll be in touch. In the meantime, learn more about what we're building at <strong>evolutionproductionco.com</strong>.</p>
            <div class="footer">&copy; ${new Date().getFullYear()} Evolution Production Company &bull; DMV Area</div>
          </div>
        </body>
        </html>
      `,
    });

    // Notification to admin
    await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `Work With Us: ${firstName} ${lastName} — ${role}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { background: #0D0A14; color: #FFF8F0; font-family: sans-serif; margin: 0; padding: 0; }
            .container { max-width: 560px; margin: 0 auto; padding: 32px 24px; }
            h2 { color: #F5C842; font-size: 20px; margin: 0 0 20px; }
            .row { display: flex; gap: 12px; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.08); }
            .label { color: rgba(255,248,240,0.4); font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; min-width: 100px; }
            .value { color: #FFF8F0; font-size: 14px; flex: 1; }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>New Work With Us Application</h2>
            <div class="row"><span class="label">Name</span><span class="value">${firstName} ${lastName}</span></div>
            <div class="row"><span class="label">Email</span><span class="value">${email}</span></div>
            <div class="row"><span class="label">Role</span><span class="value">${role}</span></div>
            <div class="row"><span class="label">Background</span><span class="value">${background}</span></div>
            ${why ? `<div class="row"><span class="label">Why EPC</span><span class="value">${why}</span></div>` : ""}
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Work with us error:", error);
    return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 500 });
  }
}
