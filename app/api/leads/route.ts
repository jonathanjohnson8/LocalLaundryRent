import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabaseClient";
import { getResendClient, FROM_EMAIL, LEAD_NOTIFY_EMAIL } from "@/lib/email";

const REQUIRED_FIELDS = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "address",
  "city",
  "state",
  "zip",
] as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LEN = 200;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  for (const field of REQUIRED_FIELDS) {
    const value = body[field];
    if (typeof value !== "string" || !value.trim() || value.length > MAX_LEN) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }
  }

  const lead = Object.fromEntries(
    REQUIRED_FIELDS.map((field) => [field, (body[field] as string).trim()])
  ) as Record<(typeof REQUIRED_FIELDS)[number], string>;

  if (!EMAIL_RE.test(lead.email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  try {
    const supabase = getSupabaseClient();
    const { error } = await supabase.from("leads").insert({
      first_name: lead.firstName,
      last_name: lead.lastName,
      email: lead.email,
      phone: lead.phone,
      address: lead.address,
      city: lead.city,
      state: lead.state,
      zip: lead.zip,
    });

    if (error) throw error;

    try {
      const resend = getResendClient();
      const fullAddress = `${lead.address}, ${lead.city}, ${lead.state} ${lead.zip}`;

      await Promise.all([
        resend.emails.send({
          from: FROM_EMAIL,
          to: LEAD_NOTIFY_EMAIL,
          subject: `New lead: ${lead.firstName} ${lead.lastName}`,
          text: `New signup from the website:\n\nName: ${lead.firstName} ${lead.lastName}\nEmail: ${lead.email}\nPhone: ${lead.phone}\nAddress: ${fullAddress}`,
        }),
        resend.emails.send({
          from: FROM_EMAIL,
          to: lead.email,
          subject: "You're on the list — Local Laundry Rent",
          text: `Hi ${lead.firstName},\n\nThanks for signing up! We'll reach out shortly to confirm availability at ${fullAddress}.\n\n— Local Laundry Rent`,
        }),
      ]);
    } catch (emailErr) {
      console.error("Failed to send lead emails:", emailErr);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to save lead:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
