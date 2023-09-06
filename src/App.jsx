import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import ProtectedRoute from "./components/Login/ProtectedRoute";
import Dashboard from "./components/Admin/Dashboard";
import ManageJobOffers from "./components/Admin/ManageJobOffers";
import LogoutButton from "./components/Admin/LogoutButton"; // Import the LogoutButton component
import { UserProvider } from "./components/Login/UserContext"; // Import the UserProvider

function App() {
  return (
    <Router>
      <UserProvider> {/* Wrap your app with UserProvider */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard/*" element={<ProtectedRoute component={<Dashboard />} />} />
          <Route path="/manage-job-offers" element={<ManageJobOffers />} />
          <Route path="/login" element={<Login />} /> {/* Add a route for the "/login" page */}
        </Routes>
        <LogoutButton /> {/* Render the LogoutButton component */}
      </UserProvider>
    </Router>
  );
}

export default App;
