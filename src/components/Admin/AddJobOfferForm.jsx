import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddJobOfferForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    description: "",
    deadline: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add validation logic here
    // Check if job title has 5-64 characters, description has 100 characters, and deadline is in the future

    // API request to create job offer
    const response = await fetch("http://localhost:3000/job-offers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Handle success
      navigate("/dashboard");
    } else {
      // Handle error
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Add New Job Offer</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-600">Job Title</label>
          <input
            className="form-input mt-1 block w-full rounded-md border-gray-300"
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Description</label>
          <textarea
            className="form-textarea mt-1 block w-full rounded-md border-gray-300"
            rows="4"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Deadline</label>
          <input
            className="form-input mt-1 block w-full rounded-md border-gray-300"
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            required
          />
        </div>
        <button
          className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600"
          type="submit"
        >
          Create Job Offer
        </button>
      </form>
    </div>
  );
};

export default AddJobOfferForm;
