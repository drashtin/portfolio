import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Contact form endpoint. Validates input and logs the message server-side.
 * Wire this up to an email provider (Resend, Nodemailer, etc.) by reading
 * the validated `{ name, email, subject, message }` below.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — bots fill hidden fields.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const subject = String(body.subject ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (name.length < 2)
    return NextResponse.json({ error: "Please enter your name." }, { status: 422 });
  if (!EMAIL_RE.test(email))
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 422 },
    );
  if (subject.length < 2)
    return NextResponse.json({ error: "Please add a subject." }, { status: 422 });
  if (message.length < 10)
    return NextResponse.json(
      { error: "Your message is a little short." },
      { status: 422 },
    );

  // TODO: integrate an email/notification provider here.
  console.log("[contact] new message", { name, email, subject });

  return NextResponse.json({ ok: true });
}
