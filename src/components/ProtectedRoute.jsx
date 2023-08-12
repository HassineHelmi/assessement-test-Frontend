import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Dashboard from "../components/Dashboard";

const ProtectedRoute = ({ component }) => {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    setAccessToken(accessToken);
  }, []);

  if (!accessToken) {
    return <Redirect to="/" />;
  }

  return (
    <Route path="/src/components/Dashboard.jsx" element={component} />
  );
};

export default ProtectedRoute;