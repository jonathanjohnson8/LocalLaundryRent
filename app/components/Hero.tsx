import LeadForm from "./LeadForm";

export default function Hero() {
  return (
    <div style={{ padding: "80px 64px 70px", maxWidth: 980, margin: "0 auto", textAlign: "center" }}>
      <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", color: "#8A91A3", marginBottom: 22 }}>
        IN-HOME LAUNDRY, DELIVERED
      </div>
      <h1 style={{ fontSize: 64, lineHeight: 1.08, fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 24px" }}>
        Rent a washer &amp; dryer without the upfront cost.
      </h1>
      <p style={{ fontSize: 19, lineHeight: 1.6, color: "#5B6274", maxWidth: 620, margin: "0 auto 44px" }}>
        Get reliable in-home laundry with affordable monthly payments, fast delivery, professional installation, and maintenance included.
      </p>

      <LeadForm />

      <div style={{ display: "flex", gap: 34, flexWrap: "wrap", justifyContent: "center", fontSize: 15, color: "#4B5266", marginTop: 36 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5B6274" strokeWidth="2">
            <rect x="1" y="7" width="14" height="9"></rect>
            <path d="M15 10h4l3 3v3h-7z"></path>
            <circle cx="6" cy="19" r="1.6"></circle>
            <circle cx="18" cy="19" r="1.6"></circle>
          </svg>
          Fast Delivery &amp; Setup
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5B6274" strokeWidth="2">
            <rect x="2" y="6" width="20" height="14" rx="2"></rect>
            <path d="M2 10h20"></path>
          </svg>
          Low Monthly Rates
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5B6274" strokeWidth="2">
            <path d="M14.7 6.3a4 4 0 11-5.4 5.4L4 17v3h3l5.3-5.3"></path>
          </svg>
          Maintenance Included
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5B6274" strokeWidth="2">
            <path d="M12 2l8 4v6c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6z"></path>
          </svg>
          No Hidden Fees
        </div>
      </div>
    </div>
  );
}
