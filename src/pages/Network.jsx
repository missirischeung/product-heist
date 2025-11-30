// src/pages/Network.jsx
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { GraphCanvas, darkTheme } from "reagraph";
import "./Network.css";
import Profile from "./Profile";
import { PEOPLE, RELATIONSHIPS } from "../data/networkData";

export default function Network() {
  const [viewMode, setViewMode] = useState("graph"); // "graph" | "list"
  const [selectedPersonId, setSelectedPersonId] = useState("me");
  const [searchQuery, setSearchQuery] = useState("");

  const selectedPerson = useMemo(
    () => PEOPLE.find((p) => p.id === selectedPersonId) ?? PEOPLE[0],
    [selectedPersonId]
  );

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
    setSelectedPersonId(node.id);
  };

  return (
    <div className="network">
      <header className="network-header">
        <div>
          <h1 className="network-title">Network Map</h1>
          <p className="network-subtitle">
            Toggle between graph and list view. Click any person to see details.
          </p>
        </div>

        <div className="network-right-controls">
          <Link to="/me">
            <button className="go-me-btn">My Profile</button>
          </Link>

          <div className="view-toggle">
            <button
              className={viewMode === "graph" ? "view-btn active" : "view-btn"}
              onClick={() => setViewMode("graph")}
            >
              Graph
            </button>
            <button
              className={viewMode === "list" ? "view-btn active" : "view-btn"}
              onClick={() => setViewMode("list")}
            >
              List
            </button>
          </div>

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

      <div className="network-body">
        <section className="network-main">
          {/* GRAPH VIEW (always mounted) */}
          <div
            className={
              viewMode === "graph"
                ? "network-graph network-view-visible"
                : "network-graph network-view-hidden"
            }
          >
            <GraphCanvas
              className="network-graph-canvas"
              nodes={nodes}
              edges={edges}
              layoutType="forceDirected2d"
              theme={darkTheme}
              labelType="all"
              onNodeClick={handleNodeClick}
            />
          </div>

          {/* LIST VIEW (always mounted) */}
          <div
            className={
              viewMode === "list"
                ? "network-list network-view-visible"
                : "network-list network-view-hidden"
            }
          >
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
                  onClick={() => setSelectedPersonId(person.id)}
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
        </section>

        <aside className="network-profile-panel">
          <Profile person={selectedPerson} />
        </aside>
      </div>
    </div>
  );
}
