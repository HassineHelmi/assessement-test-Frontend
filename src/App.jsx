import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import ProtectedRoute from "./components/Login/ProtectedRoute";
import Dashboard from "./components/Admin/Dashboard";
import ManageJobOffers from "./components/Admin/ManageJobOffers";
import { UserProvider } from "./components/hooks/UserContext"; // Import the UserProvider
import LogoutButton from "./components/Admin/LogoutButton";

function App() {
  return (
    <Router>
      <UserProvider> {/* Wrap your app with UserProvider to manage user authentication */}
        <Routes>
          {/* Define routes for different pages */}
          <Route path="/" element={<Login />} /> {/* Landing page */}
          <Route
            path="/dashboard/*"
            element={
              <>
                <ProtectedRoute component={<Dashboard />} />
                <LogoutButton /> {/* Render the LogoutButton component only on the dashboard */}
              </>
            }
          /> {/* Protected dashboard page */}
          <Route path="/manage-job-offers" element={<ManageJobOffers />} /> {/* Job offers page */}
          <Route path="/login" element={<Login />} /> {/* Login page */}
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
