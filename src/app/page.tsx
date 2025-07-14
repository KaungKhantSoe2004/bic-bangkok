"use client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import EnquirePage from "./pages/enquire";
import IGCSEPage from "./pages/igcse";
import ALevelsPage from "./pages/alevels";
import OSSDPage from "./pages/ossd";
import GEDPage from "./pages/ged";
import AdmissionPage from "./pages/admission";
import { useState } from "react";

export default function App() {
  const [language, setLanguage] = useState("en");

  return (
    <Router>
      <div className="min-h-screen bg-slate-950">
        <Navigation language={language} setLanguage={setLanguage} />
        <Routes>
          <Route path="/" element={<HomePage language={language} />} />
          <Route path="/about" element={<AboutPage language={language} />} />
          <Route
            path="/enquire"
            element={<EnquirePage language={language} />}
          />
          <Route path="/igcse" element={<IGCSEPage language={language} />} />
          <Route
            path="/alevels"
            element={<ALevelsPage language={language} />}
          />
          <Route path="/ossd" element={<OSSDPage language={language} />} />
          <Route path="/ged" element={<GEDPage language={language} />} />
          <Route
            path="/admission"
            element={<AdmissionPage language={language} />}
          />
        </Routes>
        <Footer language={language} />
      </div>
    </Router>
  );
}
