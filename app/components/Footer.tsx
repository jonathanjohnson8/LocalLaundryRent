export default function Footer() {
  return (
    <div id="contact" style={{ padding: 64, borderTop: "1px solid #E4E6EC" }}>
      <div
        style={{
          maxWidth: 1520,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 24,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 9,
              background: "#10182B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F7F8FA" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="13" r="6"></circle>
              <path d="M9 4h6"></path>
            </svg>
          </div>
          <span style={{ fontSize: 16.5, fontWeight: 700 }}>Local Laundry Rent</span>
        </div>
        <div style={{ fontSize: 14.5, color: "#8A91A3" }}>© 2026 Local Laundry Rent. All rights reserved.</div>
      </div>
    </div>
  );
}
