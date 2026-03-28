import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { transporter, ADMIN_EMAIL } from "@/lib/mailer";
import { escapeHtml, limit } from "@/lib/sanitize";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, role, background, portfolio, why } = body;

    if (!firstName || !lastName || !email || !role || !background) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (
      firstName.length > 100 || lastName.length > 100 ||
      email.length > 254 || (phone && phone.length > 20) ||
      role.length > 100 || background.length > 2000 ||
      (portfolio && portfolio.length > 500) ||
      (why && why.length > 2000)
    ) {
      return NextResponse.json({ error: "One or more fields exceed the maximum allowed length." }, { status: 400 });
    }

    const { error } = await supabase.from("applications").insert({
      first_name: limit(firstName, 100),
      last_name: limit(lastName, 100),
      email: limit(email, 254),
      phone: phone ? limit(phone, 20) : null,
      role: limit(role, 100),
      background: limit(background, 2000),
      portfolio: portfolio ? limit(portfolio, 500) : null,
      why: why ? limit(why, 2000) : null,
    });

    if (error) throw error;

    const eName = `${escapeHtml(firstName)} ${escapeHtml(lastName)}`;
    const eEmail = escapeHtml(email);
    const ePhone = phone ? escapeHtml(phone) : null;
    const eRole = escapeHtml(role);
    const eBackground = escapeHtml(background);
    const ePortfolio = portfolio ? escapeHtml(portfolio) : null;
    const eWhy = why ? escapeHtml(why) : null;

    await transporter.sendMail({
      from: "EPC Website <evolutionprocompany@gmail.com>",
      to: ADMIN_EMAIL,
      subject: `Full Application: ${eName} — ${eRole}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:32px;background:#0D0A14;color:#FFF8F0;border-radius:12px;">
          <h2 style="color:#F5C842;margin:0 0 20px;">New Full Application</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);color:rgba(255,248,240,.4);font-size:12px;text-transform:uppercase;letter-spacing:.1em;width:130px;">Name</td><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);font-size:14px;">${eName}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);color:rgba(255,248,240,.4);font-size:12px;text-transform:uppercase;letter-spacing:.1em;">Email</td><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);font-size:14px;">${eEmail}</td></tr>
            ${ePhone ? `<tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);color:rgba(255,248,240,.4);font-size:12px;text-transform:uppercase;letter-spacing:.1em;">Phone</td><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);font-size:14px;">${ePhone}</td></tr>` : ""}
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);color:rgba(255,248,240,.4);font-size:12px;text-transform:uppercase;letter-spacing:.1em;">Role</td><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);font-size:14px;">${eRole}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);color:rgba(255,248,240,.4);font-size:12px;text-transform:uppercase;letter-spacing:.1em;">Background</td><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);font-size:14px;">${eBackground}</td></tr>
            ${ePortfolio ? `<tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);color:rgba(255,248,240,.4);font-size:12px;text-transform:uppercase;letter-spacing:.1em;">Portfolio</td><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);font-size:14px;">${ePortfolio}</td></tr>` : ""}
            ${eWhy ? `<tr><td style="padding:10px 0;color:rgba(255,248,240,.4);font-size:12px;text-transform:uppercase;letter-spacing:.1em;">Why EPC</td><td style="padding:10px 0;font-size:14px;">${eWhy}</td></tr>` : ""}
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Apply error:", error);
    return NextResponse.json({ error: "Failed to submit. Please try again." }, { status: 500 });
  }
}
