import React from "react";

const JobOfferList = ({ jobOffers }) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Job Offers</h2>
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobOfferList;
