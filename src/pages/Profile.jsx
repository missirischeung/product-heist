// src/pages/Profile.jsx
import "./Profile.css";

export default function Profile({ person }) {
  if (!person) {
    return (
      <div className="profile profile-empty">
        <p>Select a person to view details.</p>
      </div>
    );
  }

  // Normalize company info: works for both ME and others
  const companyName =
    person.companyDetails?.name || person.company || "—";
  const companySize = person.companyDetails?.size || "";
  const companyLogo = person.companyDetails?.logo || null;

  // 🔹 Tag → class mapping (for colours)
  function getTagClass(tag) {
    const t = tag.toLowerCase();

    if (t.includes("investor") || t.includes("vc") || t.includes("angel"))
      return "tag-investor";

    if (
      t.includes("funding") ||
      t.includes("fund") ||
      t.includes("raising") ||
      t.includes("looking for funding") ||
      t.includes("raising a round")
    )
      return "tag-raising";

    if (
      t.includes("founder") ||
      t.includes("ceo") ||
      t.includes("co-founder") ||
      t.includes("operator")
    )
      return "tag-founder";

    return "tag-default";
  }

  return (
    <div className="profile">
      {/* HEADER */}
      <div className="profile-header">
        <div className="profile-avatar">
          {person.name
            .replace(/[()]/g, "")
            .split(" ")
            .map((p) => p[0])
            .join("")
            .toUpperCase()
            .slice(0, 2)}
        </div>

        <div className="profile-main">
          <h2 className="profile-name">{person.name}</h2>
          {person.headline && (
            <p className="profile-headline">{person.headline}</p>
          )}
          <div className="profile-meta">
            {person.location && (
              <span className="profile-meta-item">
                {person.location}
              </span>
            )}
            {person.industry && (
              <span className="profile-meta-item">
                {person.industry}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* TAGS */}
      {person.tags?.length > 0 && (
        <div className="profile-tags">
          {person.tags.map((tag) => (
            <span
              key={tag}
              className={`profile-tag ${getTagClass(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* QUICK INFO GRID */}
      <div className="profile-info-grid">
        <div className="profile-info-box">
          <h3>Company</h3>
          <div className="profile-company-row">
            {companyLogo && (
              <img
                src={companyLogo}
                alt="logo"
                className="profile-company-logo"
              />
            )}
            <div>
              <p>{companyName}</p>
              {companySize && (
                <span className="profile-company-size">
                  {companySize}
                </span>
              )}
            </div>
          </div>
        </div>

        {person.education && (
          <div className="profile-info-box">
            <h3>Education</h3>
            <p>{person.education}</p>
          </div>
        )}
      </div>

      {/* BIO */}
      {person.bio && (
        <section className="profile-section">
          <h3>Bio</h3>
          <p className="profile-bio">{person.bio}</p>
        </section>
      )}

      {/* PATENTS */}
      {person.patents?.length > 0 && (
        <section className="profile-section">
          <h3>Patents</h3>
          <ul className="profile-list">
            {person.patents.map((p, idx) => (
              <li key={idx}>
                <span className="profile-list-title">{p.title}</span>
                {p.date && (
                  <span className="profile-list-meta">{p.date}</span>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* FUNDING */}
      {person.funding?.length > 0 && (
        <section className="profile-section">
          <h3>Funding</h3>
          <ul className="profile-list">
            {person.funding.map((f, idx) => (
              <li key={idx}>
                <span className="profile-list-title">{f.round}</span>
                {f.date && (
                  <span className="profile-list-meta">{f.date}</span>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
