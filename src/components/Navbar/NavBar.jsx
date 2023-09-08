import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../hooks/UserContext"; // Import the useUser hook

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // Use the useNavigate hook to navigate
  const { setUser } = useUser(); // Use the useUser hook to access user state

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      // Clear the access token from local storage
      localStorage.removeItem("access_token");

      // Update the user context to reflect the user is no longer authenticated
      setUser(null);

      // Navigate to the login page
      navigate("/login");
    }
  };

  return (
    <nav className="bg-indigo-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/dashboard" className="text-white text-2xl font-bold">
          Welcome to JobHub
        </Link>
        {/* Mobile menu button (shown on small screens) */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-white hover:underline transform rotate-0 transition-transform ease-in-out duration-300"
        >
          <ion-icon
            name={mobileMenuOpen ? "close-outline" : "menu-outline"}
            style={{ fontSize: "24px" }}
          ></ion-icon>
        </button>
        <ul
          className={`lg:flex items-center ${
            mobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <li className="lg:inline">
            <Link
              to="/manage-job-offers"
              className="text-white hover:bg-indigo-700 hover:border-indigo-800 hover:text-indigo-100 hover:shadow-md lg:mr-4 my-2 px-4 py-2 rounded-lg block lg:inline transition-all duration-300"
            >
              Manage Job Offers
            </Link>
          </li>
          <li className="lg:inline">
            <button
              onClick={handleLogout}
              className="text-white hover:bg-red-600 hover:border-red-800 hover:text-white hover:shadow-md lg:mx-4 my-2 px-4 py-2 rounded-lg block lg:inline transition-all duration-300"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
