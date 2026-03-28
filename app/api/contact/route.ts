import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { transporter, ADMIN_EMAIL } from "@/lib/mailer";
import { escapeHtml, limit } from "@/lib/sanitize";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, subject, message } = body;

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (
      firstName.length > 100 || lastName.length > 100 ||
      email.length > 254 || subject.length > 200 ||
      message.length > 2000
    ) {
      return NextResponse.json({ error: "One or more fields exceed the maximum allowed length." }, { status: 400 });
    }

    const { error } = await supabase.from("contact_messages").insert({
      first_name: limit(firstName, 100),
      last_name: limit(lastName, 100),
      email: limit(email, 254),
      subject: limit(subject, 200),
      message: limit(message, 2000),
    });

    if (error) throw error;

    const eName = `${escapeHtml(firstName)} ${escapeHtml(lastName)}`;
    const eEmail = escapeHtml(email);
    const eSubject = escapeHtml(subject);
    const eMessage = escapeHtml(message);

    await transporter.sendMail({
      from: "EPC Website <evolutionprocompany@gmail.com>",
      to: ADMIN_EMAIL,
      subject: `Contact: ${eSubject} — ${eName}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:32px;background:#0D0A14;color:#FFF8F0;border-radius:12px;">
          <h2 style="color:#F5C842;margin:0 0 20px;">New Contact Message</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);color:rgba(255,248,240,.4);font-size:12px;text-transform:uppercase;letter-spacing:.1em;width:130px;">Name</td><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);font-size:14px;">${eName}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);color:rgba(255,248,240,.4);font-size:12px;text-transform:uppercase;letter-spacing:.1em;">Email</td><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);font-size:14px;">${eEmail}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);color:rgba(255,248,240,.4);font-size:12px;text-transform:uppercase;letter-spacing:.1em;">Subject</td><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);font-size:14px;">${eSubject}</td></tr>
            <tr><td style="padding:10px 0;color:rgba(255,248,240,.4);font-size:12px;text-transform:uppercase;letter-spacing:.1em;">Message</td><td style="padding:10px 0;font-size:14px;">${eMessage}</td></tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact error:", error);
    return NextResponse.json({ error: "Failed to submit. Please try again." }, { status: 500 });
  }
}
