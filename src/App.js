import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { useState } from "react";
import HomePage from "./app/pages/home.jsx";

import Navigation from "./app/components/navigation.jsx";
import Footer from "./app/components/footer.jsx";
import AboutPage from "./app/pages/about.jsx";
import ContactPage from "./app/pages/enquire.jsx";
import AdmissionsPage from "./app/pages/admission.jsx";
import OssdPage from "./app/pages/ossd.jsx";
import ALevelsPage from "./app/pages/alevels.jsx";
import IGCSEPage from "./app/pages/igcse.jsx";
import GEDPage from "./app/pages/ged.jsx";

function App() {
  const [language, setLanguage] = useState("en");
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950">
        <Navigation language={language} setLanguage={setLanguage} />
        <Routes>
          <Route path="/" element={<HomePage language={language} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/enquire" element={<ContactPage />} />
          <Route path="/igcse" element={<IGCSEPage />} />
          <Route path="/alevels" element={<ALevelsPage />} />
          <Route path="/ossd" element={<OssdPage />} />
          <Route path="/ged" element={<GEDPage />} />
          <Route path="/admission" element={<AdmissionsPage />} />
        </Routes>
        <Footer language={language} />
      </div>
    </BrowserRouter>
  );
}

export default App;
