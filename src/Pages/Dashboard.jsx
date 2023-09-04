import React, { useEffect } from "react";
import LogoutButton from "../components/LogoutButton";
import AddJobOfferForm from "../components/AddJobOfferForm";
import { Link } from "react-router-dom";

export default function Dashboard() {
  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    console.log("Access token in Dashboard:", accessToken);
    if (!accessToken) {
      console.log("Access token missing, redirecting to login.");
      window.location.href = "/";
    }

    // Fetch job offers here and update the state
    // Example:
    // fetchJobOffers().then((offers) => setJobOffers(offers));
  }, []);

  return (
    <div className="bg-gray-800 h-screen p-10">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <div className="text-4xl text-white mb-4 sm:mb-0">Welcome to the Dashboard!</div>
        <div className="flex space-x-4">
          <LogoutButton />
          <Link
            to="/manage-job-offers"
            className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring focus:ring-teal-200"
          >
            Manage Job Offers
          </Link>
        </div>
      </div>
      <AddJobOfferForm />
      {/* Other content */}
    </div>
  );
}
