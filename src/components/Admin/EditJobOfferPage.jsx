import React from "react";
import { useParams, Link } from "react-router-dom";
import EditJobOffer from "./EditJobOffer";

const EditJobOfferPage = ({ jobOffers, onEdit }) => {
  const { id } = useParams();
  const jobOffer = jobOffers.find((offer) => offer.id === parseInt(id));

  if (!jobOffer) {
    return <div>Job offer not found.</div>;
  }

  return (
    <div>
      <h2>Edit Job Offer</h2>
      <EditJobOffer jobOffer={jobOffer} onEdit={onEdit} />
      <Link to="/manage-job-offers">
        <button>Back to Manage Job Offers</button>
      </Link>
    </div>
  );
};

export default EditJobOfferPage;
