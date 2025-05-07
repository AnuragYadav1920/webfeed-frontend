import React, { useState } from "react";
import "./feedback.css"

const Feedback = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    description: "Please share your valuable feedback about our services. It will great help to us.",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log("Submitted data:", formData);
    // Reset form fields
    setFormData({
      username: "",
      email: "",
      description: "Feel free to contact us. We will be glad to see you here.",
    });
  };

  return (
    <div className="feedback-container">
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>Feedback</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Message:</label>
          <textarea
            id="description"
            name="description"
            rows="5"
            value={formData.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="feedback-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Feedback;
