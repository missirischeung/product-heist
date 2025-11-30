import "./Profile.css";

export default function Profile({ person }) {
  if (!person) {
    return (
      <div className="profile empty">
        <p>Select a person to view details.</p>
      </div>
    );
  }

  return (
    <div className="profile">
      <div className="profile-header">
        <div className="profile-avatar">
          {person.name
            .split(" ")
            .map((p) => p[0])
            .join("")
            .toUpperCase()
            .slice(0, 2)}
        </div>

        <div>
          <h2 className="profile-name">{person.name}</h2>
          <p className="profile-headline">{person.headline}</p>
          {person.company && (
            <p className="profile-company">{person.company}</p>
          )}
          {person.location && (
            <p className="profile-location">{person.location}</p>
          )}
        </div>
      </div>

      {person.tags?.length > 0 && (
        <div className="profile-tags">
          {person.tags.map((tag) => (
            <span key={tag} className="profile-tag">
              {tag}
            </span>
          ))}
        </div>
      )}

      <p className="profile-note">Dummy data — will expand later.</p>
    </div>
  );
}
