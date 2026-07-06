import { Resend } from "resend";

export function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("Resend is not configured. Set RESEND_API_KEY.");
  }

  return new Resend(apiKey);
}

export const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "Local Laundry Rent <onboarding@resend.dev>";
export const LEAD_NOTIFY_EMAIL = process.env.LEAD_NOTIFY_EMAIL || "jonathanjohnson8@gmail.com";
