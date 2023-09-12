import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import ProtectedRoute from "./components/Login/ProtectedRoute";
import Dashboard from "./components/Admin/Dashboard";
import ManageJobOffers from "./components/Admin/ManageJobOffers";
import { UserProvider } from "./components/hooks/UserContext";
import Layout from "./components/layout/layout"; // Import the Layout component





function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard/*"
            element={
              <Layout>
                <ProtectedRoute component={<Dashboard />} />
                
              </Layout>
            }
          />
          <Route
            path="/manage-job-offers"
            element={
              <Layout>
                <ManageJobOffers />
              </Layout>
            }
          />
          <Route path="/login" element={<Login />} />
          
        </Routes>
      </UserProvider>
      
    </Router>
  );
}

export default App;
