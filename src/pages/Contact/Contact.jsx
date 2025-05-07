import React, { useState } from "react";
import "./contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    description: "Feel free to contact us. We will be glad to see you here.",
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
    <div className="contact-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Contact Us</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your name"
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
        <button type="submit" className="contact-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

