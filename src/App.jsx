import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./Pages/Dashboard";
import ManageJobOffers from "./components/ManageJobOffers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard/*"
          element={<ProtectedRoute component={<Dashboard />} />}
        />
        <Route path="/manage-job-offers" element={<ManageJobOffers />} />
      </Routes>
    </Router>
  );
}

export default App;
