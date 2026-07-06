const steps = [
  {
    label: "STEP 01",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10182B" strokeWidth="2">
        <path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"></path>
        <circle cx="12" cy="9" r="2.3"></circle>
      </svg>
    ),
    title: "Check availability",
    body: "Enter your ZIP code to confirm service in your area.",
  },
  {
    label: "STEP 02",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10182B" strokeWidth="2">
        <path d="M3 11l9-7 9 7"></path>
        <path d="M5 10v9h14v-9"></path>
      </svg>
    ),
    title: "Choose your appliance",
    body: "Select a washer, dryer, (full set) based on your space and budget.",
  },
  {
    label: "STEP 03",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10182B" strokeWidth="2">
        <rect x="1" y="7" width="14" height="9"></rect>
        <path d="M15 10h4l3 3v3h-7z"></path>
        <circle cx="6" cy="19" r="1.6"></circle>
        <circle cx="18" cy="19" r="1.6"></circle>
      </svg>
    ),
    title: "We deliver, install & support",
    body: "Our team delivers, installs, services, and picks up your rental when you are done.",
  },
];

export default function HowItWorks() {
  return (
    <div id="how" style={{ padding: "90px 64px", textAlign: "center" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto 56px" }}>
        <h2 style={{ fontSize: 44, fontWeight: 800, letterSpacing: "-0.015em", margin: "0 0 20px" }}>
          Three simple steps to laundry at home.
        </h2>
        <p style={{ fontSize: 18, color: "#5B6274", margin: 0 }}>
          A straightforward rental experience, built around convenience and transparency.
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 24,
          maxWidth: 1520,
          margin: "0 auto 44px",
          textAlign: "left",
        }}
      >
        {steps.map((step) => (
          <div key={step.label} style={{ border: "1px solid #E4E6EC", borderRadius: 16, padding: 32, background: "#fff" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 26 }}>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", color: "#8A91A3" }}>{step.label}</span>
              {step.icon}
            </div>
            <div style={{ fontSize: 21, fontWeight: 700, marginBottom: 10 }}>{step.title}</div>
            <div style={{ fontSize: 15, color: "#5B6274", lineHeight: 1.6 }}>{step.body}</div>
          </div>
        ))}
      </div>
      <a
        href="#get-started"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          background: "#10182B",
          color: "#fff",
          padding: "17px 30px",
          borderRadius: 10,
          fontWeight: 700,
          fontSize: 16,
          textDecoration: "none",
          marginBottom: 16,
        }}
      >
        Start Your Rental Today
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6"></path>
        </svg>
      </a>
      <div style={{ fontSize: 14.5, color: "#8A91A3" }}>No credit impact to check availability.</div>
    </div>
  );
}
