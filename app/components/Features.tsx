const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10182B" strokeWidth="2" style={{ marginBottom: 18 }}>
        <rect x="2" y="6" width="20" height="14" rx="2"></rect>
        <path d="M2 10h20"></path>
      </svg>
    ),
    title: "Affordable monthly pricing",
    body: "Skip the large upfront cost and pay one predictable monthly rate.",
    borderRight: true,
    borderBottom: true,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10182B" strokeWidth="2" style={{ marginBottom: 18 }}>
        <rect x="1" y="7" width="14" height="9"></rect>
        <path d="M15 10h4l3 3v3h-7z"></path>
        <circle cx="6" cy="19" r="1.6"></circle>
        <circle cx="18" cy="19" r="1.6"></circle>
      </svg>
    ),
    title: "Delivery & installation",
    body: "We bring the appliance to your home and set it up properly.",
    borderRight: true,
    borderBottom: true,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10182B" strokeWidth="2" style={{ marginBottom: 18 }}>
        <path d="M14.7 6.3a4 4 0 11-5.4 5.4L4 17v3h3l5.3-5.3"></path>
      </svg>
    ),
    title: "Maintenance included",
    body: "If something goes wrong, we help service or replace the unit.",
    borderRight: false,
    borderBottom: true,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10182B" strokeWidth="2" style={{ marginBottom: 18 }}>
        <rect x="3" y="4" width="18" height="17" rx="2"></rect>
        <path d="M3 9h18M8 2v4M16 2v4"></path>
      </svg>
    ),
    title: "Flexible rental terms",
    body: "Great for renters, students, temporary housing, and people who may move.",
    borderRight: true,
    borderBottom: false,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10182B" strokeWidth="2" style={{ marginBottom: 18 }}>
        <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6z"></path>
        <path d="M9 12l2 2 4-4"></path>
      </svg>
    ),
    title: "Transparent service",
    body: "No confusing contracts, surprise repair bills, or unnecessary stress.",
    borderRight: true,
    borderBottom: false,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10182B" strokeWidth="2" style={{ marginBottom: 18 }}>
        <path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"></path>
        <circle cx="12" cy="9" r="2.3"></circle>
      </svg>
    ),
    title: "Local support",
    body: "Work with a team that understands your area and responds quickly.",
    borderRight: false,
    borderBottom: false,
  },
];

export default function Features() {
  return (
    <div style={{ padding: "90px 64px", textAlign: "center" }}>
      <div style={{ maxWidth: 900, margin: "0 auto 56px" }}>
        <h2 style={{ fontSize: 44, fontWeight: 800, letterSpacing: "-0.015em", margin: "0 0 20px" }}>
          Laundry made simple, flexible, and affordable.
        </h2>
        <p style={{ fontSize: 18, color: "#5B6274", margin: 0 }}>
          Every rental includes delivery, standard installation, and ongoing maintenance support — all in one
          transparent monthly rate.
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          border: "1px solid #E4E6EC",
          borderRadius: 16,
          overflow: "hidden",
          maxWidth: 1520,
          margin: "0 auto",
          textAlign: "left",
          background: "#fff",
        }}
      >
        {features.map((f) => (
          <div
            key={f.title}
            style={{
              padding: 36,
              borderRight: f.borderRight ? "1px solid #E4E6EC" : undefined,
              borderBottom: f.borderBottom ? "1px solid #E4E6EC" : undefined,
            }}
          >
            {f.icon}
            <div style={{ fontSize: 19, fontWeight: 700, marginBottom: 10 }}>{f.title}</div>
            <div style={{ fontSize: 14.5, color: "#5B6274", lineHeight: 1.6 }}>{f.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
