export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

function escapeHtml(s: any) {
  return String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
function nl2br(s: string) {
  return String(s ?? "").replace(/\n/g, "<br/>");
}

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = (await req.json().catch(() => ({}))) as Body;

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    // Check ENV
    const missing = ["SMTP_HOST", "SMTP_USER", "SMTP_PASS", "TO_EMAIL"].filter(k => !process.env[k]);
    if (missing.length) {
      return NextResponse.json({ ok: false, error: `Missing ENV: ${missing.join(", ")}` }, { status: 500 });
    }

    // Strato via 587 + STARTTLS
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false, // STARTTLS
      auth: {
        user: process.env.SMTP_USER as string,
        pass: process.env.SMTP_PASS as string,
      },
    });

    const info = await transporter.sendMail({
      from: `"Iconic Classic Cars" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject: subject || "Nieuwe contactaanvraag vanaf de website",
      text: `Naam: ${name}
E-mail: ${email}
Telefoon: ${phone || "-"}
Onderwerp: ${subject || "-"}

Bericht:
${message || "-"}`,
      html: `
        <h2>Nieuwe contactaanvraag</h2>
        <p><strong>Naam:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
        <p><strong>Telefoon:</strong> ${escapeHtml(phone || "-")}</p>
        <p><strong>Onderwerp:</strong> ${escapeHtml(subject || "-")}</p>
        <p><strong>Bericht:</strong><br/>${nl2br(escapeHtml(message || "-"))}</p>
      `,
    });

    return NextResponse.json({ ok: true, id: info.messageId }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message || String(err) }, { status: 500 });
  }
}

// Optioneel: nette 405 op GET
export async function GET() {
  return NextResponse.json({ ok: false, error: "Method not allowed" }, { status: 405 });
}
