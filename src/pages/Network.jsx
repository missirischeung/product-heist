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

  // Map id -> person
  const peopleById = useMemo(() => {
    const map = new Map();
    for (const p of PEOPLE) {
      map.set(p.id, p);
    }
    return map;
  }, []);

  // LIST VIEW: filter by search text
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

  // GRAPH NODES: fixed data
  const graphNodes = useMemo(
    () =>
      PEOPLE.map((p) => ({
        id: p.id,
        label: p.name,
        data: {
          headline: p.headline,
          company: p.company,
          tags: p.tags,
        },
      })),
    []
  );

  // GRAPH EDGES: fixed
  const graphEdges = useMemo(
    () =>
      RELATIONSHIPS.map((r) => ({
        id: r.id,
        source: r.fromId,
        target: r.toId,
        label: r.type,
      })),
    []
  );

  const handleNodeClick = (node) => {
    const person = peopleById.get(node.id);
    if (!person) return;

    // update selected + overlay
    setSelectedPersonId(person.id);
    setOverlayPerson(person);
  };

  const handleCardClose = () => setOverlayPerson(null);

  return (
    <div className="network">
      <header className="network-header">
        <div>
          <h1 className="network-title">Network Map</h1>
          <p className="network-subtitle">
            Click any node to zoom into their neighborhood and see 1st–3rd
            degree connections.
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
              nodes={graphNodes}
              edges={graphEdges}
              layoutType="forceDirected2d"
              theme={darkTheme}
              labelType="all"
              cameraMode="pan"
              animated={false} // <- stop layout re-animating
              selections={[selectedPersonId]} // <- tell reagraph which node is selected
              sizingType="default"
              defaultNodeSize={7}
              minNodeSize={5}
              maxNodeSize={16}
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
                      // No zoom here since we're in list view
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
                      <div className="node-headline">
                        {person.headline}
                      </div>
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
