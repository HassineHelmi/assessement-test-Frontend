import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../hooks/UserContext"; // Import the user context
import AddJobOfferForm from "./AddJobOfferForm";

export default function Dashboard() {
  const { user } = useUser();

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
       
      <AddJobOfferForm />
      
    </div>
  );
}