import "./Me.css";

export default function Me() {
  const me = {
    name: "You (Main User)",
    headline: "Founder @ Stealth Startup",
    location: "Vancouver, BC",
    company: "Stealth",
    bio: "Building products, mapping networks, and connecting ambitious people.",
    tags: ["Founder", "BCS", "UBC", "Builder"],
  };

  return (
    <div className="me-page">
      <header className="me-header">
        <h1 className="me-title">My Profile</h1>
        <p className="me-subtitle">
          Personal view just for you. Later we can connect this to your real network data.
        </p>
      </header>

      <section className="me-card">
        <div className="me-avatar">
          {me.name
            .split(" ")
            .map((p) => p[0])
            .join("")
            .toUpperCase()
            .slice(0, 2)}
        </div>

        <div className="me-main">
          <h2 className="me-name">{me.name}</h2>
          <p className="me-headline">{me.headline}</p>
          <p className="me-company">{me.company}</p>
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

      <section className="me-bio-section">
        <h2>About</h2>
        <p className="me-bio">{me.bio}</p>
      </section>
    </div>
  );
}
