// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Network from "./pages/Network.jsx";
import Me from "./pages/Me.jsx";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-root">
        <header className="app-nav">
          <Link to="/" className="app-logo">
            VC Map
          </Link>

          <div className="app-tabs">
            <Link to="/" className="app-tab">Network</Link>
            <Link to="/me" className="app-tab">Me</Link>
          </div>
        </header>

        <main className="app-main">
          <Routes>
            <Route path="/" element={<Network />} />
            <Route path="/me" element={<Me />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
