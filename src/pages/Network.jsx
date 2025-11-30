// src/pages/Network.jsx
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { GraphCanvas, darkTheme, lightTheme } from "reagraph";
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

  // LIST / GRAPH FILTER: filter by search text
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

  // For convenience: set of visible IDs (used by graph nodes + edges)
  const visibleIds = useMemo(
    () => new Set(filteredPeople.map((p) => p.id)),
    [filteredPeople]
  );

  // --- PROXIMITY / DEGREE FROM CURRENTLY SELECTED NODE ---
  // 0 = selected node itself
  // 1 = one hop away, 2 = two hops, 3+ = outer orbit
  const degreesFromSelected = useMemo(() => {
    const rootId = selectedPersonId;
    if (!rootId) return new Map();

    // Build undirected adjacency list over the FULL graph
    const adjacency = new Map();
    for (const p of PEOPLE) {
      adjacency.set(p.id, new Set());
    }
    for (const r of RELATIONSHIPS) {
      adjacency.get(r.fromId)?.add(r.toId);
      adjacency.get(r.toId)?.add(r.fromId);
    }

    const result = new Map();
    const queue = [rootId];

    result.set(rootId, 0);

    while (queue.length > 0) {
      const current = queue.shift();
      const currentDegree = result.get(current);
      const neighbors = adjacency.get(current) || [];

      for (const neighbor of neighbors) {
        if (!result.has(neighbor)) {
          const nextDegree = currentDegree + 1;
          result.set(neighbor, nextDegree);

          // only BFS outward up to 3 levels,
          // anything further we just treat as "3+"
          if (nextDegree < 3) {
            queue.push(neighbor);
          }
        }
      }
    }

    return result;
  }, [selectedPersonId]);

  // Map numeric degree → label + edge color
  const getProximityMeta = (degree) => {
    if (degree === 0) {
      return { label: "You are here", color: "#60a5fa" }; // blue-ish for the focus node (not used on edges)
    }
    if (degree === 1) {
      return { label: "Inner circle", color: "#22c55e" }; // green
    }
    if (degree === 2) {
      return { label: "Warm path", color: "#eab308" }; // yellow
    }
    if (degree >= 3 && degree !== Infinity) {
      return { label: "Outer orbit", color: "#ef4444" }; // red
    }
    // disconnected / unknown
    return { label: "", color: "#9ca3af" }; // neutral grey
  };

  const graphTheme = useMemo(
    () => ({
      ...darkTheme,
      canvas: {
        ...darkTheme.canvas,
        background: "#020617",
        fog: "#020617",
      },

      node: {
        ...darkTheme.node,
        fill: "#60a5fa", // default soft blue
        activeFill: "#f97316", // orange for selected node
        opacity: 1,
        selectedOpacity: 1,
        inactiveOpacity: 0.3,
        label: {
          ...darkTheme.node.label,
          color: "#ffffff",
          stroke: "#020617",
        },
      },

      ring: {
        ...lightTheme.ring,
        fill: "#1e293b",
        activeFill: "#60a5fa",
      },

      edge: {
        ...darkTheme.edge,
        fill: "#ffffff", // default; per-edge `fill` overrides this
        activeFill: "#ffffff",
        opacity: 0.55,
        inactiveOpacity: 1,
        label: {
          ...darkTheme.edge.label,
          color: "#ffffff",
          stroke: "#020617",
        },
      },

      arrow: {
        ...darkTheme.arrow,
        fill: "#ffffff", // default; per-edge `fill` overrides this
        activeFill: "#ffffff",
      },
    }),
    []
  );

  // ----- GRAPH NODES / EDGES (NOW SEARCH-AWARE) -----

  const graphNodes = useMemo(
    () =>
      filteredPeople.map((p) => {
        const degree = degreesFromSelected.get(p.id);
        let proximityLabel = "";

        if (degree === 0) proximityLabel = "Current focus";
        else if (degree === 1) proximityLabel = "Inner circle";
        else if (degree === 2) proximityLabel = "Warm path";
        else if (degree >= 3 && degree !== undefined)
          proximityLabel = "Outer orbit";

        return {
          id: p.id,
          label: p.name,
          data: {
            headline: p.headline,
            company: p.company,
            tags: p.tags,
            degree,
            proximityLabel,
          },
        };
      }),
    [filteredPeople, degreesFromSelected]
  );

  const graphEdges = useMemo(
    () =>
      RELATIONSHIPS
        // only keep edges where BOTH ends are currently visible
        .filter(
          (r) => visibleIds.has(r.fromId) && visibleIds.has(r.toId)
        )
        .map((r) => {
          const fromDegree = degreesFromSelected.get(r.fromId) ?? Infinity;
          const toDegree = degreesFromSelected.get(r.toId) ?? Infinity;

          // Edge proximity = closest endpoint to the selected person
          const edgeDegree = Math.min(fromDegree, toDegree);

          const { label, color } = getProximityMeta(edgeDegree);

          return {
            id: r.id,
            source: r.fromId,
            target: r.toId,
            label: label || undefined,
            fill: color, // colors the line & arrow
          };
        }),
    [degreesFromSelected, visibleIds]
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
  <div className="network-header-left">
    <img src="/netsphere.png" alt="logo" className="network-logo" />

    <div>
      <h1 className="network-title">NetSphere Networking Map</h1>
      <p className="network-subtitle">
        Click any person to see how the network ripples out from them.
      </p>
    </div>
  </div>

  <div className="network-right-controls">
    <Link to="/me" className="network-me-link">Me</Link>

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
              animated={true}
              cameraMode="pan"
              labelType="all"
              sizingType="default"
              defaultNodeSize={9}
              minNodeSize={6}
              maxNodeSize={20}
              selections={[selectedPersonId]}
              onNodeClick={handleNodeClick}
              theme={graphTheme}
            />

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
