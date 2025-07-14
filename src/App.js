import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { useState } from "react";
import HomePage from "./app/pages/home.jsx";

import Navigation from "./app/components/navigation.jsx";
import Footer from "./app/components/footer.jsx";

function App() {
  const [language, setLanguage] = useState("en");
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950">
        <Navigation language={language} setLanguage={setLanguage} />
        <Routes>
          <Route path="/" element={<HomePage language={language} />} />
          <Route path="/about" element={<h2>About page</h2>} />
          <Route path="/enquire" element={<h1>Enquire</h1>} />
          <Route path="/igcse" element={<h1>IGCSE</h1>} />
          <Route path="/alevels" element={<h1>A LEVELS</h1>} />
          <Route path="/ossd" element={<h2>OSSD</h2>} />
          <Route path="/ged" element={<h1>GED</h1>} />
          <Route path="/admission" element={<h2>admission</h2>} />
        </Routes>
        <Footer language={language} />
      </div>
    </BrowserRouter>
  );
}

export default App;
