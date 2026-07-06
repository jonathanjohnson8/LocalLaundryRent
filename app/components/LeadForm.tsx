"use client";

import { useState } from "react";

const inputStyle: React.CSSProperties = {
  width: "100%",
  border: "1px solid #DEE1E9",
  borderRadius: 9,
  padding: "13px 14px",
  fontSize: 15,
  outline: "none",
  color: "#10182B",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 13,
  fontWeight: 600,
  color: "#4B5266",
  marginBottom: 6,
};

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

export default function LeadForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  function update(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setSubmittedName(form.firstName);
      setStatus("success");
      setForm(initialState);
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        id="get-started"
        style={{
          background: "#fff",
          border: "1px solid #E4E6EC",
          borderRadius: 20,
          padding: 40,
          boxShadow: "0 20px 50px rgba(16,24,43,0.06)",
          textAlign: "center",
          maxWidth: 640,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "#EEF1F7",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 22px",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2E9E5B" strokeWidth="3">
            <path d="M4 12l5 5L20 6"></path>
          </svg>
        </div>
        <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 10 }}>You&apos;re on the list.</div>
        <div style={{ fontSize: 15.5, color: "#5B6274", lineHeight: 1.6 }}>
          Thanks, {submittedName || "there"}! We&apos;ll reach out shortly to confirm availability at your address.
        </div>
      </div>
    );
  }

  return (
    <form
      id="get-started"
      onSubmit={handleSubmit}
      style={{
        background: "#fff",
        border: "1px solid #E4E6EC",
        borderRadius: 20,
        padding: 40,
        boxShadow: "0 20px 50px rgba(16,24,43,0.06)",
        textAlign: "left",
        maxWidth: 640,
        margin: "0 auto",
      }}
    >
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "#8A91A3", marginBottom: 6, textAlign: "center" }}>
        GET YOUR RATE
      </div>
      <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 26, textAlign: "center" }}>
        Tell us where to deliver.
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
        <div>
          <label style={labelStyle}>First name</label>
          <input required placeholder="Jordan" value={form.firstName} onChange={update("firstName")} style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Last name</label>
          <input required placeholder="Avery" value={form.lastName} onChange={update("lastName")} style={inputStyle} />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
        <div>
          <label style={labelStyle}>Email</label>
          <input required type="email" placeholder="jordan@email.com" value={form.email} onChange={update("email")} style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Phone</label>
          <input required type="tel" placeholder="(555) 123-4567" value={form.phone} onChange={update("phone")} style={inputStyle} />
        </div>
      </div>

      <div style={{ marginBottom: 14 }}>
        <label style={labelStyle}>Street address</label>
        <input required placeholder="123 Maple Street, Apt 4B" value={form.address} onChange={update("address")} style={inputStyle} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 14, marginBottom: 26 }}>
        <div>
          <label style={labelStyle}>City</label>
          <input required placeholder="Austin" value={form.city} onChange={update("city")} style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>State</label>
          <input required placeholder="TX" value={form.state} onChange={update("state")} style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>ZIP</label>
          <input required placeholder="78701" value={form.zip} onChange={update("zip")} style={inputStyle} />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          background: "#10182B",
          color: "#fff",
          padding: "16px 24px",
          border: "none",
          borderRadius: 9,
          fontWeight: 700,
          fontSize: 16,
          textDecoration: "none",
          marginBottom: errorMessage ? 14 : 22,
          opacity: status === "submitting" ? 0.7 : 1,
        }}
      >
        {status === "submitting" ? "Checking..." : "Check Availability"}
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6"></path>
        </svg>
      </button>

      {errorMessage && (
        <div style={{ color: "#C0392B", fontSize: 14, textAlign: "center", marginBottom: 22 }}>
          {errorMessage}
        </div>
      )}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          borderTop: "1px solid #EEF0F4",
          paddingTop: 20,
          fontSize: 15,
          color: "#4B5266",
          textAlign: "center",
        }}
      >
        <span style={{ fontSize: 22, fontWeight: 800, color: "#10182B" }}>$45/mo</span>
        for a full washer &amp; dryer set — maintenance included.
      </div>
    </form>
  );
}
