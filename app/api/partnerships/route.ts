import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@evolutionproductionco.com";
  const FROM_EMAIL = process.env.FROM_EMAIL || "EPC <noreply@evolutionproductionco.com>";

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();
    const { firstName, lastName, organization, email, phone, partnershipType, message } = body;

    if (!firstName || !lastName || !organization || !email || !partnershipType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "Partnership Inquiry Received — Evolution Production Company",
      html: `<!DOCTYPE html><html><head><style>
        body{background:#0D0A14;color:#FFF8F0;font-family:sans-serif;margin:0;padding:0}
        .c{max-width:560px;margin:0 auto;padding:40px 24px}
        .h{background:linear-gradient(135deg,#7B2FBE,#C2185B,#E8334A);border-radius:12px;padding:32px;text-align:center;margin-bottom:32px}
        .h h1{font-size:26px;letter-spacing:.1em;margin:0 0 6px;color:#FFF8F0}
        .h p{color:rgba(255,248,240,.8);font-style:italic;margin:0;font-size:13px}
        p{color:rgba(255,248,240,.7);line-height:1.6;font-size:15px}
        .box{padding:16px;background:rgba(255,255,255,.04);border-radius:10px;border:1px solid rgba(255,255,255,.08);margin:20px 0}
        .row{display:flex;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.06)}
        .row:last-child{border-bottom:none}
        .lbl{color:rgba(255,248,240,.4);font-size:12px;text-transform:uppercase;letter-spacing:.1em;min-width:120px;flex-shrink:0}
        .val{color:#FFF8F0;font-size:14px}
        .ft{margin-top:36px;text-align:center;color:rgba(255,248,240,.3);font-size:12px}
      </style></head><body><div class="c">
        <div class="h"><h1>EVOLUTION PRODUCTION COMPANY</h1><p>Partnership Inquiry Received</p></div>
        <p>Hi ${firstName},</p>
        <p>Thank you for reaching out about a <strong>${partnershipType}</strong> partnership with Evolution Production Company. We review every inquiry personally and will follow up directly to explore what we can build together.</p>
        <div class="box">
          <div class="row"><span class="lbl">Organization</span><span class="val">${organization}</span></div>
          <div class="row"><span class="lbl">Partnership</span><span class="val">${partnershipType}</span></div>
        </div>
        <p>We look forward to connecting with you.</p>
        <div class="ft">&copy; ${new Date().getFullYear()} Evolution Production Company &bull; DMV Area</div>
      </div></body></html>`,
    });

    await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `Partnership Inquiry: ${partnershipType} — ${organization}`,
      html: `<!DOCTYPE html><html><head><style>
        body{background:#0D0A14;color:#FFF8F0;font-family:sans-serif;margin:0;padding:0}
        .c{max-width:560px;margin:0 auto;padding:32px 24px}
        h2{color:#F5C842;font-size:20px;margin:0 0 20px}
        .row{display:flex;gap:12px;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08)}
        .lbl{color:rgba(255,248,240,.4);font-size:12px;text-transform:uppercase;letter-spacing:.1em;min-width:120px;flex-shrink:0}
        .val{color:#FFF8F0;font-size:14px;flex:1}
      </style></head><body><div class="c">
        <h2>New Partnership Inquiry</h2>
        <div class="row"><span class="lbl">Name</span><span class="val">${firstName} ${lastName}</span></div>
        <div class="row"><span class="lbl">Organization</span><span class="val">${organization}</span></div>
        <div class="row"><span class="lbl">Email</span><span class="val">${email}</span></div>
        ${phone ? `<div class="row"><span class="lbl">Phone</span><span class="val">${phone}</span></div>` : ""}
        <div class="row"><span class="lbl">Type</span><span class="val">${partnershipType}</span></div>
        ${message ? `<div class="row"><span class="lbl">Message</span><span class="val">${message}</span></div>` : ""}
      </div></body></html>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Partnership inquiry error:", error);
    return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 500 });
  }
}
