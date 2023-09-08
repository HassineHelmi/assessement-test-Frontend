import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ManageJobOffers = () => {
  const [jobOffers, setJobOffers] = useState([]);
  const [error, setError] = useState(null); // State for handling errors

  useEffect(() => {
    // Fetch job offers from API and update the state
    // Example:
    // fetchJobOffers().then((offers) => setJobOffers(offers));
    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwiaWF0IjoxNjkxMTY0NTg4LCJleHAiOjE2OTExNzE3ODh9.Fr7kZb5jc77Xv0WS9ZsiV912B0fU6sFIp7-TfGgD_m"; // Replace with your actual access token

    fetch("http://localhost:3000/job-offers", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`, // Include the access token
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((offers) => {
        setJobOffers(offers);
      })
      .catch((error) => {
        setError(error); // Handle API request error
      });
  }, []);

  return (
    <div className="bg-gray-800 h-screen p-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl text-white">Manage Job Offers</h1>
        <Link
          to="/dashboard"
          className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600"
        >
          Back to Dashboard
        </Link>
      </div>
      <ul>
        {jobOffers.map((offer) => (
          <li key={offer.id} className="bg-white p-4 mb-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{offer.jobTitle}</h3>
            <p className="text-gray-600">{offer.description}</p>
            <p className="text-gray-500">
              Deadline: {new Date(offer.deadline).toLocaleDateString()}
            </p>
            <p
              className={`mt-2 ${
                offer.status === "closed" ? "text-red-500" : "text-green-500"
              }`}
            >
              Status: {offer.status === "closed" ? "Closed" : "Open"}
            </p>
            <div className="mt-2">
              {/* Add your update, close, and delete buttons */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageJobOffers;
