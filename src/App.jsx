import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/Dashboard";
import ManageJobOffers from "./components/ManageJobOffers"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
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
