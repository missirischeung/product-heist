// src/pages/Me.jsx
import "./Me.css";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { ME } from "../data/networkData";

export default function Me() {
    const me = ME;

    const company = me.companyDetails || {
        name: me.company,
        size: "",
        logo: "/company-logo.png",
    };

    return (
        <div className="me-page">
            <header className="me-header">
                <div>
                    <h1 className="me-title">My Profile</h1>
                    <p className="me-subtitle">
                        Personal view — soon powered by real network data.
                    </p>
                </div>

                {/* Back button (pill style) */}
                <Link to="/" className="me-back-btn">
                    ← Back to Network
                </Link>
            </header>

            {/* -------- TOP CARD -------- */}
            <section className="me-card">
                {/* LEFT SIDE (avatar + info) */}
                <div className="me-card-left">
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
                            {me.tags?.map((tag) => (
                                <span key={tag} className="me-tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE (LinkedIn button) */}
                <div className="me-card-right">
                    <Button
                        onClick={() =>
                            window.open(
                                me.linkedin ||
                                    "https://www.linkedin.com/in/icheung",
                                "https://www.linkedin.com/"
                            )
                        }
                    >
                        LinkedIn
                    </Button>
                </div>
            </section>

            {/* -------- 2x2 GRID (Name, Company, Industry, Education) -------- */}
            <section className="me-info-grid">
                <div className="me-info-box">
                    <h3>Name</h3>
                    <p>{me.name}</p>
                </div>

                <div className="me-info-box">
                    <h3>Company</h3>
                    <div className="me-company-box">
                        <img
                            src={company.logo}
                            alt="logo"
                            className="me-company-logo"
                        />
                        <div>
                            <p>{company.name}</p>
                            <span className="me-company-size">
                                {company.size}
                            </span>
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
                    <h3>Role</h3>
                    <p className="me-role">{me.headline}</p>
                </div>

                <div className="me-long-box">
                    <h3>Connections</h3>
                    <p className="me-connections">359 Connections</p>
                </div>
            </section>

            {/* -------- PATENTS + FUNDING -------- */}
            <section className="me-two-cols">
                <div className="me-long-box">
                    <h3>Patents</h3>
                    <ul>
                        {me.patents?.map((p, i) => (
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
                        {me.funding?.map((f, i) => (
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
