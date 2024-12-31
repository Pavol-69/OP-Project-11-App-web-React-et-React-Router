// Imports
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Components
import HomePage from "./pages/HomePage";
import AProposPage from "./pages/AboutPage";
import LogementPage from "./pages/LogementPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/logement/:log_id" element={<LogementPage />} />
          <Route path="/a-propos" element={<AProposPage />} />
          <Route path="/erreur" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/erreur" replace />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;
