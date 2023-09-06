import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ManageJobOffers = () => {
  const [jobOffers, setJobOffers] = useState([]);

  useEffect(() => {
    // Fetch job offers from API and update the state
    // Example:
    // fetchJobOffers().then((offers) => setJobOffers(offers));
    const dummyJobOffers = [
      {
        id: 1,
        jobTitle: "Software Developer",
        description: "Join our team as a software developer...",
        deadline: "2023-09-30",
        status: "open",
      },
      // Add more job offers
    ];
    setJobOffers(dummyJobOffers);
  }, []);

  const handleUpdate = (offerId) => {
    // Implement logic to navigate to the update page for the selected offer
  };

  const handleClose = (offerId) => {
    // Implement logic to close the selected offer
  };

  const handleDelete = (offerId) => {
    // Implement logic to delete the selected offer
  };

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
          <li
            key={offer.id}
            className="bg-white p-4 mb-4 rounded-lg shadow-md"
          >
            <h3 className="text-lg font-semibold">{offer.jobTitle}</h3>
            <p className="text-gray-600">{offer.description}</p>
            <p className="text-gray-500">
              Deadline: {new Date(offer.deadline).toLocaleDateString()}
            </p>
            <p className={`mt-2 ${offer.status === "closed" ? "text-red-500" : "text-green-500"}`}>
              Status: {offer.status === "closed" ? "Closed" : "Open"}
            </p>
            <div className="mt-2">
              <button
                className="text-teal-500 hover:underline mr-2"
                onClick={() => handleUpdate(offer.id)}
              >
                Update
              </button>
              <button
                className={`${
                  offer.status === "closed" ? "text-gray-500" : "text-red-500"
                } hover:underline mr-2`}
                onClick={() => handleClose(offer.id)}
                disabled={offer.status === "closed"}
              >
                Close
              </button>
              <button
                className="text-red-500 hover:underline"
                onClick={() => handleDelete(offer.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageJobOffers;
