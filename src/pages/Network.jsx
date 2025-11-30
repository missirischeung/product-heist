// src/pages/Network.jsx
import { useState, useMemo } from "react";
import { GraphCanvas, darkTheme } from "reagraph";
import "./Network.css";
import Profile from "./Profile";
import { PEOPLE, RELATIONSHIPS } from "../data/networkData";

export default function Network() {
  const [viewMode, setViewMode] = useState("graph"); // "graph" | "list"
  const [selectedPersonId, setSelectedPersonId] = useState("me");
  const [searchQuery, setSearchQuery] = useState("");
  const [overlayPerson, setOverlayPerson] = useState(null);

  const filteredPeople = useMemo(() => {
    if (!searchQuery.trim()) return PEOPLE;
    const q = searchQuery.toLowerCase();
    return PEOPLE.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.headline.toLowerCase().includes(q) ||
        (p.company && p.company.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const nodes = useMemo(
    () =>
      filteredPeople.map((p) => ({
        id: p.id,
        label: p.name,
        data: {
          headline: p.headline,
          company: p.company,
          tags: p.tags,
        },
      })),
    [filteredPeople]
  );

  const nodeIdSet = useMemo(() => new Set(nodes.map((n) => n.id)), [nodes]);

  const edges = useMemo(
    () =>
      RELATIONSHIPS.filter(
        (r) => nodeIdSet.has(r.fromId) && nodeIdSet.has(r.toId)
      ).map((r) => ({
        id: r.id,
        source: r.fromId,
        target: r.toId,
        label: r.type,
      })),
    [nodeIdSet]
  );

  const handleNodeClick = (node) => {
    const person = PEOPLE.find((p) => p.id === node.id);
    if (person) {
      setSelectedPersonId(person.id);
      setOverlayPerson(person);
    }
  };

  const handleCardClose = () => setOverlayPerson(null);

  return (
    <div className="network">
      <header className="network-header">
        <div>
          <h1 className="network-title">Network Map</h1>
          <p className="network-subtitle">
            Explore your connections in full-screen graph or list view.
          </p>
        </div>

        <div className="network-right-controls">
          <div className="network-search">
            <input
              type="text"
              placeholder="Search by name, role, company..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* MAIN AREA */}
      <div className="network-main-full">
        {/* GRAPH VIEW */}
        {viewMode === "graph" && (
          <div className="network-graph-full">
            <GraphCanvas
              className="network-graph-canvas"
              nodes={nodes}
              edges={edges}
              layoutType="forceDirected2d"
              theme={darkTheme}
              labelType="all"
              onNodeClick={handleNodeClick}
            />

            {/* Overlay card ONLY for graph view */}
            {overlayPerson && (
              <div className="profile-overlay">
                <div className="profile-card">
                  <button
                    className="profile-card-close"
                    onClick={handleCardClose}
                  >
                    ✕
                  </button>
                  <Profile person={overlayPerson} />
                </div>
              </div>
            )}
          </div>
        )}

        {/* LIST VIEW */}
        {viewMode === "list" && (
          <div className="network-list-full">
            <div className="list-main">
              <h2 className="section-title">All Connections</h2>

              <div className="node-grid">
                {filteredPeople.map((person) => (
                  <button
                    key={person.id}
                    className={
                      person.id === selectedPersonId
                        ? "node-card selected"
                        : "node-card"
                    }
                    onClick={() => {
                      setSelectedPersonId(person.id);
                      setOverlayPerson(person);
                    }}
                  >
                    <div className="node-initials">
                      {person.name
                        .split(" ")
                        .map((p) => p[0])
                        .join("")
                        .toUpperCase()
                        .slice(0, 2)}
                    </div>

                    <div className="node-info">
                      <div className="node-name">{person.name}</div>
                      <div className="node-headline">{person.headline}</div>
                      {person.company && (
                        <div className="node-company">{person.company}</div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {overlayPerson && (
              <div className="list-profile-wrapper">
                <div className="profile-card">
                  <button
                    className="profile-card-close"
                    onClick={handleCardClose}
                  >
                    ✕
                  </button>
                  <Profile person={overlayPerson} />
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* BOTTOM TOGGLE BAR */}
      <div className="network-bottom-toggle">
        <button
          className={
            viewMode === "graph"
              ? "bottom-toggle-btn active"
              : "bottom-toggle-btn"
          }
          onClick={() => setViewMode("graph")}
        >
          Graph View
        </button>
        <button
          className={
            viewMode === "list"
              ? "bottom-toggle-btn active"
              : "bottom-toggle-btn"
          }
          onClick={() => setViewMode("list")}
        >
          List View
        </button>
      </div>
    </div>
  );
}
