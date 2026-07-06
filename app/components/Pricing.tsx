const checkIcon = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2E9E5B" strokeWidth="3">
    <path d="M4 12l5 5L20 6"></path>
  </svg>
);

export default function Pricing() {
  return (
    <div id="pricing" style={{ background: "#EFF1F5", padding: "90px 64px" }}>
      <div style={{ maxWidth: 1520, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", color: "#8A91A3", marginBottom: 18 }}>
            FEATURED RENTAL OPTION
          </div>
          <h2 style={{ fontSize: 44, fontWeight: 800, letterSpacing: "-0.015em", margin: "0 0 16px" }}>
            One simple rate for everything you need.
          </h2>
          <p style={{ fontSize: 17, color: "#5B6274", maxWidth: 520, margin: "0 auto" }}>
            One simple monthly rate covers the appliance, delivery, standard installation, and ongoing maintenance
            support.
          </p>
        </div>

        <div style={{ maxWidth: 440, margin: "0 auto" }}>
          <div
            style={{
              background: "#fff",
              border: "2px solid #10182B",
              borderRadius: 16,
              padding: 36,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", color: "#10182B", marginBottom: 20 }}>
              MOST POPULAR
            </div>
            <div style={{ display: "flex", gap: 10, marginBottom: 22 }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  border: "2px solid #DEE1E9",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: 30, height: 30, borderRadius: "50%", border: "3px solid #B7BCC9" }}></div>
              </div>
              <div
                style={{
                  width: 56,
                  height: 56,
                  border: "2px solid #DEE1E9",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: 30, height: 30, borderRadius: "50%", border: "3px solid #B7BCC9" }}></div>
              </div>
            </div>
            <div style={{ fontSize: 21, fontWeight: 700, marginBottom: 10 }}>Washer &amp; Dryer Set</div>
            <div style={{ fontSize: 14.5, color: "#5B6274", lineHeight: 1.55, marginBottom: 22 }}>
              Best for apartments, townhomes, and families.
            </div>
            <div style={{ marginBottom: 20 }}>
              <span style={{ fontSize: 14, color: "#5B6274" }}>Starting at&nbsp;</span>
              <span style={{ fontSize: 34, fontWeight: 800 }}>$45</span>
              <span style={{ fontSize: 15, color: "#5B6274" }}> / month</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14.5, color: "#333A4D", marginBottom: 26, flex: 1 }}>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>{checkIcon}Side-by-side or stacked</div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>{checkIcon}Front-load drum models</div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>{checkIcon}Pedestals available</div>
            </div>
            <a
              href="#get-started"
              style={{
                textAlign: "center",
                background: "#10182B",
                color: "#fff",
                padding: 14,
                borderRadius: 9,
                fontWeight: 700,
                fontSize: 15,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
              }}
            >
              Select This Set
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6"></path>
              </svg>
            </a>
          </div>
        </div>
        <div style={{ textAlign: "center", fontSize: 14, color: "#8A91A3", marginTop: 32 }}>
          Final pricing may vary by location, availability, and rental term.
        </div>
      </div>
    </div>
  );
}
