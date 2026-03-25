import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { transporter, ADMIN_EMAIL } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, organization, email, phone, partnershipType, message } = body;

    if (!firstName || !lastName || !organization || !email || !partnershipType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { error } = await supabase.from("partnership_inquiries").insert({
      first_name: firstName,
      last_name: lastName,
      organization,
      email,
      phone: phone || null,
      partnership_type: partnershipType,
      message: message || null,
    });

    if (error) throw error;

    await transporter.sendMail({
      from: "EPC Website <evolutionprocompany@gmail.com>",
      to: ADMIN_EMAIL,
      subject: `Partnership Inquiry: ${partnershipType} — ${organization}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:32px;background:#0D0A14;color:#FFF8F0;border-radius:12px;">
          <h2 style="color:#F5C842;margin:0 0 20px;">New Partnership Inquiry</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);color:rgba(255,248,240,.4);font-size:12px;text-transform:uppercase;letter-spacing:.1em;width:130px;">Name</td><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);font-size:14px;">${firstName} ${lastName}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);color:rgba(255,248,240,.4);font-size:12px;text-transform:uppercase;letter-spacing:.1em;">Organization</td><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);font-size:14px;">${organization}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);color:rgba(255,248,240,.4);font-size:12px;text-transform:uppercase;letter-spacing:.1em;">Email</td><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);font-size:14px;">${email}</td></tr>
            ${phone ? `<tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);color:rgba(255,248,240,.4);font-size:12px;text-transform:uppercase;letter-spacing:.1em;">Phone</td><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);font-size:14px;">${phone}</td></tr>` : ""}
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);color:rgba(255,248,240,.4);font-size:12px;text-transform:uppercase;letter-spacing:.1em;">Type</td><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);font-size:14px;">${partnershipType}</td></tr>
            ${message ? `<tr><td style="padding:10px 0;color:rgba(255,248,240,.4);font-size:12px;text-transform:uppercase;letter-spacing:.1em;">Message</td><td style="padding:10px 0;font-size:14px;">${message}</td></tr>` : ""}
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Partnership error:", error);
    return NextResponse.json({ error: "Failed to submit. Please try again." }, { status: 500 });
  }
}
