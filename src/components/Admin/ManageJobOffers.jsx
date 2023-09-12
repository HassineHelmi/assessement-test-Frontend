import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const ManageJobOffers = () => {
  const [jobOffers, setJobOffers] = useState([]);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

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
  }, [currentPage]); // Include currentPage in the dependency array

  const handlePageChange = (currentPage) => {
    setCurrentPage(currentPage);
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
            <div className="mt-2 flex items-center"></div>
          </li>
        ))}
      </ul>

      <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
};
export default ManageJobOffers;
