export default function Residents() {
  return (
    <div style={{ background: "#EFF1F5", padding: "90px 64px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", color: "#8A91A3", marginBottom: 18 }}>
          BUILT FOR YOU
        </div>
        <h2 style={{ fontSize: 44, fontWeight: 800, letterSpacing: "-0.015em", margin: "0 0 44px" }}>
          Made for your home.
        </h2>
        <div id="residents" style={{ background: "#fff", border: "1px solid #E4E6EC", borderRadius: 16, padding: 44, textAlign: "left" }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "#EEF1F7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 24,
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10182B" strokeWidth="2">
              <path d="M3 11l9-7 9 7"></path>
              <path d="M5 10v9h14v-9"></path>
            </svg>
          </div>
          <div style={{ fontSize: 27, fontWeight: 800, marginBottom: 14 }}>For Residents</div>
          <div style={{ fontSize: 16.5, color: "#5B6274", lineHeight: 1.6, marginBottom: 26 }}>
            Perfect for renters, students, families, and professionals who want in-home laundry without buying
            appliances.
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 30 }}>
            <span style={{ border: "1px solid #DEE1E9", borderRadius: 30, padding: "9px 16px", fontSize: 14, color: "#333A4D" }}>
              Single households
            </span>
            <span style={{ border: "1px solid #DEE1E9", borderRadius: 30, padding: "9px 16px", fontSize: 14, color: "#333A4D" }}>
              Family homes
            </span>
            <span style={{ border: "1px solid #DEE1E9", borderRadius: 30, padding: "9px 16px", fontSize: 14, color: "#333A4D" }}>
              Student apartments
            </span>
          </div>
          <a
            href="#get-started"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              background: "#10182B",
              color: "#fff",
              padding: "15px 24px",
              borderRadius: 9,
              fontWeight: 700,
              fontSize: 15,
              textDecoration: "none",
            }}
          >
            Rent for My Home
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
