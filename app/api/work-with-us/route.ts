import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { transporter, ADMIN_EMAIL } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, role, background, why } = body;

    if (!firstName || !lastName || !email || !role || !background) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { error } = await supabase.from("work_with_us").insert({
      first_name: firstName,
      last_name: lastName,
      email,
      role,
      background,
      why: why || null,
    });

    if (error) throw error;

    await transporter.sendMail({
      from: "EPC Website <evolutionprocompany@gmail.com>",
      to: ADMIN_EMAIL,
      subject: `Work With Us: ${firstName} ${lastName} — ${role}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:32px;background:#0D0A14;color:#FFF8F0;border-radius:12px;">
          <h2 style="color:#F5C842;margin:0 0 20px;">New Work With Us Application</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);color:rgba(255,248,240,.4);font-size:12px;text-transform:uppercase;letter-spacing:.1em;width:130px;">Name</td><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);font-size:14px;">${firstName} ${lastName}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);color:rgba(255,248,240,.4);font-size:12px;text-transform:uppercase;letter-spacing:.1em;">Email</td><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);font-size:14px;">${email}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);color:rgba(255,248,240,.4);font-size:12px;text-transform:uppercase;letter-spacing:.1em;">Role</td><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);font-size:14px;">${role}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);color:rgba(255,248,240,.4);font-size:12px;text-transform:uppercase;letter-spacing:.1em;">Background</td><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,.08);font-size:14px;">${background}</td></tr>
            ${why ? `<tr><td style="padding:10px 0;color:rgba(255,248,240,.4);font-size:12px;text-transform:uppercase;letter-spacing:.1em;">Why EPC</td><td style="padding:10px 0;font-size:14px;">${why}</td></tr>` : ""}
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Work with us error:", error);
    return NextResponse.json({ error: "Failed to submit. Please try again." }, { status: 500 });
  }
}
