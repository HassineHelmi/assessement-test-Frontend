import React from "react";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the access token from local storage
    localStorage.removeItem("access_token");
    // Navigate to the login page
    navigate("/login"); // Use the 'navigate' function to navigate
  };

  return (
    <button
      className="my-3 px-4 py-2 bg-red-500 text-white rounded-lg"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}
