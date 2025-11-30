import "./Me.css";

export default function Me() {
  const me = {
    name: "You (Main User)",
    company: {
      name: "Stealth",
      size: "1–10 employees",
      logo: "/company-logo.png",
    },
    industry: "Software / AI",
    education: "UBC — BCS Program",
    patents: [
      { title: "Graph-Based Social Discovery Engine", date: "2024-08-12" },
      { title: "Adaptive Embedding Compression Model", date: "2025-02-01" },
    ],
    funding: [
      { round: "Pre-Seed", date: "2024-11-03" },
      { round: "Angel", date: "2025-04-22" },
    ],
    bio: "Building products, mapping networks, and connecting ambitious people.",
    tags: ["Founder", "BCS", "UBC", "Builder"],
    location: "Vancouver, BC",
    headline: "Founder @ Stealth Startup",
  };

  return (
    <div className="me-page">
      <header className="me-header">
        <h1 className="me-title">My Profile</h1>
        <p className="me-subtitle">
          Personal view — soon powered by real network data.
        </p>
      </header>

      {/* -------- TOP CARD -------- */}
      <section className="me-card">
        <div className="me-avatar">
          {me.name
            .replace(/[()]/g, "")
            .split(" ")
            .map((p) => p[0])
            .join("")
            .toUpperCase()
            .slice(0, 2)}
        </div>

        <div className="me-main">
          <h2 className="me-name">{me.name}</h2>
          <p className="me-headline">{me.headline}</p>
          <p className="me-location">{me.location}</p>

          <div className="me-tags">
            {me.tags.map((tag) => (
              <span key={tag} className="me-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* -------- INFO GRID -------- */}
      <section className="me-info-grid">
        <div className="me-info-box">
          <h3>Name</h3>
          <p>{me.name}</p>
        </div>

        <div className="me-info-box">
          <h3>Company</h3>
          <div className="me-company-box">
            <img src={me.company.logo} alt="logo" className="me-company-logo" />
            <div>
              <p>{me.company.name}</p>
              <span className="me-company-size">{me.company.size}</span>
            </div>
          </div>
        </div>

        <div className="me-info-box">
          <h3>Industry</h3>
          <p>{me.industry}</p>
        </div>

        <div className="me-info-box">
          <h3>Education</h3>
          <p>{me.education}</p>
        </div>
      </section>

    {/* -------- ROLE + CONNECTIONS -------- */}
      <section className="me-two-cols">
        <div className="me-long-box">
          <h3>Role </h3>
          <p className="me-role">{me.headline}</p>
        </div>

        <div className="me-long-box">
          <h3>Connections</h3>
          <p className="me-connections">128 Connections</p>
        </div>
      </section>

      {/* -------- PATENTS + FUNDING -------- */}
      <section className="me-two-cols">
        <div className="me-long-box">
          <h3>Patents</h3>
          <ul>
            {me.patents.map((p, i) => (
              <li key={i}>
                <strong>{p.title}</strong>
                <span>{p.date}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="me-long-box">
          <h3>Funding</h3>
          <ul>
            {me.funding.map((f, i) => (
              <li key={i}>
                <strong>{f.round}</strong>
                <span>{f.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
