import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/UserContext"; // Import the useUser hook

export default function LogoutButton() {
  const navigate = useNavigate();
  const { setUser } = useUser(); // Use the useUser hook to access user state

  const handleLogout = () => {
    // Clear the access token from local storage
    localStorage.removeItem("access_token");

    // Update the user context to reflect the user is no longer authenticated
    setUser(null);

    // Navigate to the login page
    navigate("/login");
  };

  
}
