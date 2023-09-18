import React, { useState } from "react";

const EditJobOffer = ({ jobOffer, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    jobTitle: jobOffer.jobTitle,
    description: jobOffer.description,
    applicationDeadline: new Date(jobOffer.applicationDeadline)
      .toISOString()
      .slice(0, 10),
    isOpen: jobOffer.isOpen, // Include the isOpen field with its initial value
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    // Ensure isOpen is a boolean value
    const updatedData = {
      jobTitle: formData.jobTitle,
      description: formData.description,
      applicationDeadline: formData.applicationDeadline,
      isOpen: formData.isOpen, // Use the updated value
    };

    // Call the onEdit function with the updated data
    onEdit(jobOffer.id, updatedData);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          <input
            type="date"
            name="applicationDeadline"
            value={formData.applicationDeadline}
            onChange={handleChange}
          />
          <label>
            Is Open:
            <input
              type="checkbox"
              name="isOpen"
              checked={formData.isOpen}
              onChange={(e) => setFormData({ ...formData, isOpen: e.target.checked })}
            />
          </label>
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <button
            onClick={handleEdit}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg ml-2 hover:bg-blue-600"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default EditJobOffer;
