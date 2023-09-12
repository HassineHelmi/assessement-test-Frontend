import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const ManageJobOffers = () => {
  const [jobOffers, setJobOffers] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});
  const [formData, setFormData] = useState({
    jobTitle: "",
    description: "",
    deadline: "",
  });

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");

    const fetchJobOffers = async (page) => {
      const limit = 10; // Fixed limit
      try {
        const response = await fetch(
          `http://localhost:3000/job-offers?page=${page}&limit=${limit}`,
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + accessToken,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setJobOffers(data);
        setTotalPages(Math.ceil(data.length / limit));
      } catch (error) {
        setError(error);
      }
    };

    fetchJobOffers(currentPage); // Use the currentPage state as the page parameter
  }, [currentPage]);

  const handlePageChange = (currentPage) => {
    setCurrentPage(currentPage);
  };

 

 

  const toggleJobStatus = async (jobOffer) => {
    const accessToken = localStorage.getItem("access_token");
    const status = jobOffer.open ? "close" : "open"; // Determine the new status

    try {
      const response = await fetch(
        `http://localhost:3000/job-offers/${jobOffer.id}/${status}`,
        {
          method: "PUT",
          headers: {
            Authorization: "Bearer " + accessToken,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Update the jobOffers state with the updated job offer
      setJobOffers((prevJobOffers) =>
        prevJobOffers.map((offer) =>
          offer.id === jobOffer.id ? { ...offer, open: !offer.open } : offer
        )
      );
    } catch (error) {
      setError(error);
    }
  };

  const deleteJobOffer = async (jobOffer) => {
    const accessToken = localStorage.getItem("access_token");
    

    try {
      const response = await fetch(
        `http://localhost:3000/job-offers/${jobOffer.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Remove the deleted job offer from the jobOffers state
      setJobOffers((prevJobOffers) =>
        prevJobOffers.filter((offer) => offer.id !== jobOffer.id)
      );
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="bg-gray-800 h-100vw p-10">
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
              Deadline:{" "}
              {new Date(offer.applicationDeadline).toLocaleDateString()}
            </p>
            <div className="mt-2 flex items-center">
              {/* Button to toggle job status */}
              <button
                onClick={() => toggleJobStatus(offer)}
                className={`${
                  offer.open ? "bg-green-500" : "bg-red-500"
                } text-white py-2 px-4 rounded-lg hover:bg-teal-600`}
              >
                {offer.open ? "Job Open" : "Job Closed"}
              </button>
              {/* Button to delete job offer */}
              {offer.open ? (
                <button
                  disabled
                  className="bg-gray-500 text-white py-2 px-4 rounded-lg ml-2"
                >
                  Delete
                </button>
              ) : (
                <button
                  onClick={() => deleteJobOffer(offer)}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg ml-2 hover:bg-red-600"
                >
                  Delete
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>

      <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
};

export default ManageJobOffers;
