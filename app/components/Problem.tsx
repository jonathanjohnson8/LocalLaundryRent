const cards = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10182B" strokeWidth="2">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M12 7v5l3 3"></path>
      </svg>
    ),
    title: "No more laundromat trips",
    body: "Stop spending hours each week at shared laundry facilities just to stay caught up.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10182B" strokeWidth="2">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M12 7v10M9 9.5a3 3 0 013-1.5c1.7 0 3 1 3 2.3 0 1.6-1.6 2-3 2.4-1.4.4-3 .9-3 2.5 0 1.3 1.3 2.3 3 2.3a3 3 0 003-1.5"></path>
      </svg>
    ),
    title: "No large upfront purchase",
    body: "Skip the $1,500+ hit to your bank account just to do laundry at home.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10182B" strokeWidth="2">
        <path d="M14.7 6.3a4 4 0 11-5.4 5.4L4 17v3h3l5.3-5.3"></path>
      </svg>
    ),
    title: "No repair headaches",
    body: "If something breaks, you're not stuck calling technicians or shopping for parts.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10182B" strokeWidth="2">
        <rect x="3" y="8" width="18" height="12" rx="1"></rect>
        <path d="M3 8l9-5 9 5"></path>
      </svg>
    ),
    title: "No moving heavy appliances",
    body: "When you move, we coordinate pickup — no trucks, no helpers, no hassle.",
  },
];

export default function Problem() {
  return (
    <div style={{ background: "#EFF1F5", padding: "80px 64px" }}>
      <div style={{ maxWidth: 1520, margin: "0 auto" }}>
        <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", color: "#8A91A3", marginBottom: 20 }}>
          THE PROBLEM
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 60, marginBottom: 56 }}>
          <h2 style={{ fontSize: 42, fontWeight: 800, letterSpacing: "-0.015em", lineHeight: 1.15, margin: 0 }}>
            Stop wasting time at the laundromat.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "#4B5266", margin: 0 }}>
            Buying a washer and dryer can cost hundreds or thousands of dollars upfront. Moving them is a hassle.
            Repairs are expensive. Public laundromats take time out of your week. Our rental service gives you the
            convenience of laundry at home without the stress of ownership.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            background: "#fff",
            border: "1px solid #E4E6EC",
            borderRadius: 16,
            overflow: "hidden",
          }}
        >
          {cards.map((card, i) => (
            <div
              key={card.title}
              style={{
                padding: 32,
                borderRight: i < cards.length - 1 ? "1px solid #E4E6EC" : undefined,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: "#EEF1F7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                {card.icon}
              </div>
              <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{card.title}</div>
              <div style={{ fontSize: 14.5, color: "#5B6274", lineHeight: 1.55 }}>{card.body}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
