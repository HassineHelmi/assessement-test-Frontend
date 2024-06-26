import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddJobOfferForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    description: "",
    applicationDeadline: "",
  });

  const [message, setMessage] = useState(""); // State to store the success message

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/job-offers", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success
        setMessage("Job offer created successfully!");
        setFormData({
          // Clear the form fields
          jobTitle: "",
          description: "",
          applicationDeadline: "",
        });
        navigate("/dashboard");
      } else {
        // Handle error response
        const errorData = await response.json();
        setMessage(`Error creating job offer: ${errorData.message}`);
      }
    } catch (error) {
      // Handle network or other errors
      setMessage("Error creating job offer. Please try again later.");
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Add New Job Offer:</h2>
      {message && <p className="text-green-600">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Job Title</label>
          <input
            className="form-input mt-1 block w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-teal-500"
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">
            Description
          </label>
          <textarea
            className="form-textarea mt-1 block w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-teal-500"
            rows="4"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Deadline</label>
          <input
            className="form-input mt-1 block w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-teal-500"
            type="date"
            name="applicationDeadline"
            value={formData.applicationDeadline}
            onChange={handleChange}
            required
          />
        </div>
        <button
          className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-200"
          type="submit"
        >
          Create Job Offer
        </button>
      </form>
    </div>
  );
};

export default AddJobOfferForm;
