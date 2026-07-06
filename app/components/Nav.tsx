export default function Nav() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        padding: "18px 32px",
        borderBottom: "1px solid #E4E6EC",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 9,
            background: "#10182B",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F7F8FA" strokeWidth="2" strokeLinecap="round">
            <circle cx="12" cy="13" r="6"></circle>
            <path d="M9 4h6"></path>
          </svg>
        </div>
        <span style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>
          Local Laundry Rent
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px 22px",
          fontSize: 14.5,
          color: "#4B5266",
          flex: "1 1 320px",
          minWidth: 0,
        }}
      >
        <a href="#how" style={{ textDecoration: "none", color: "inherit", whiteSpace: "nowrap" }}>How It Works</a>
        <a href="#pricing" style={{ textDecoration: "none", color: "inherit", whiteSpace: "nowrap" }}>Pricing</a>
        <a href="#residents" style={{ textDecoration: "none", color: "inherit", whiteSpace: "nowrap" }}>For Residents</a>
        <a href="#faqs" style={{ textDecoration: "none", color: "inherit", whiteSpace: "nowrap" }}>FAQs</a>
        <a href="#contact" style={{ textDecoration: "none", color: "inherit", whiteSpace: "nowrap" }}>Contact</a>
      </div>
      <a
        href="#get-started"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          background: "#10182B",
          color: "#F7F8FA",
          padding: "12px 20px",
          borderRadius: 9,
          fontSize: 14.5,
          fontWeight: 600,
          textDecoration: "none",
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}
      >
        Start Your Rental
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6"></path>
        </svg>
      </a>
    </div>
  );
}
