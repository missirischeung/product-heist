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

  // Base graph nodes (for both views)
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

  // Base graph edges
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

  // 🔹 Compute "ego network" around selectedPersonId (1–2 hops out)
  const egoNodeIds = useMemo(() => {
    const maxDepth = 2; // 1 = direct only, 2 = 1st + 2nd degree
    const visited = new Set();
    const queue = [];

    if (selectedPersonId) {
      visited.add(selectedPersonId);
      queue.push({ id: selectedPersonId, depth: 0 });
    }

    while (queue.length) {
      const { id, depth } = queue.shift();
      if (depth >= maxDepth) continue;

      for (const rel of RELATIONSHIPS) {
        if (rel.fromId === id || rel.toId === id) {
          const otherId = rel.fromId === id ? rel.toId : rel.fromId;
          if (!visited.has(otherId)) {
            visited.add(otherId);
            queue.push({ id: otherId, depth: depth + 1 });
          }
        }
      }
    }

    return visited;
  }, [selectedPersonId]);

  // 🔹 Nodes actually rendered in the "orbit" (bigger center node)
  const orbitNodes = useMemo(
    () =>
      graphNodes
        .filter((n) => egoNodeIds.has(n.id))
        .map((n) => ({
          ...n,
          size: n.id === selectedPersonId ? 18 : 8,
        })),
    [graphNodes, egoNodeIds, selectedPersonId]
  );

  // 🔹 Only keep edges fully inside that ego set
  const orbitEdges = useMemo(
    () =>
      graphEdges.filter(
        (e) => egoNodeIds.has(e.source) && egoNodeIds.has(e.target)
      ),
    [graphEdges, egoNodeIds]
  );

  // 🔹 Dark space theme: soft blue stars, white lines, orange active node
 // ...imports etc stay the same

// inside Network component, before return:
const graphTheme = useMemo(
    () => ({
      ...darkTheme,
      canvas: {
        ...darkTheme.canvas,
        background: "#020617", // deep navy
        fog: "#020617",
      },
      node: {
        ...darkTheme.node,
        fill: "#7dd3fc",        // ⭐ soft blue stars
        activeFill: "#f97316",  // ☀️ orange selected node
        opacity: 1,
        selectedOpacity: 1,
        inactiveOpacity: 0.25,
        label: {
          ...darkTheme.node.label,
          color: "#ffffff",     // white names
          activeColor: "#ffffff",
          stroke: "#020617",    // dark outline for contrast
        },
      },
      ring: {
        ...darkTheme.ring,
        fill: "rgba(56, 189, 248, 0.22)",   // minty halo
        activeFill: "rgba(56, 189, 248, 0.85)",
      },
      edge: {
        ...darkTheme.edge,
        fill: "#e5e7eb",        // white constellation lines
        activeFill: "#ffffff",
        opacity: 0.45,
        selectedOpacity: 0.9,
        inactiveOpacity: 0.12,
        label: {
          ...darkTheme.edge.label,
          color: "#cbd5f5",
          activeColor: "#ffffff",
          stroke: "#020617",
          fontSize: 10,
        },
      },
    }),
    []
  );
  

  const handleNodeClick = (node) => {
    const person = peopleById.get(node.id);
    if (!person) return;

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
            Click any node to see their orbit — 1st–2nd degree connections around them.
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
  nodes={orbitNodes}
  edges={orbitEdges}
  layoutType="radialOut3d"
  animated={true}
  cameraMode="pan"
  labelType="nodes"
  sizingType="default"
  defaultNodeSize={7}
  minNodeSize={5}
  maxNodeSize={20}
  selections={[selectedPersonId]}
  onNodeClick={handleNodeClick}
  theme={graphTheme}
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
                      <div className="node-headline">
                        {person.headline}
                      </div>
                      {person.company && (
                        <div className="node-company">
                          {person.company}
                        </div>
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
