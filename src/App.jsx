// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Network from "./pages/Network.jsx";
import Me from "./pages/Me.jsx";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-root">
        {/* No global header/nav bar anymore */}
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
