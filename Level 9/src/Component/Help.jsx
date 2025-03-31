import React, { useState } from "react";

const FeedbackForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback Submitted:", formData);
    alert("Thank you for your feedback!");
    setFormData({ name: "", email: "", description: "" });
    onClose(); 
  };

  return (
    <div className="feedback-container">
      <h2 className="feedback-title">User Feedback Form</h2>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Write your feedback..."
          required
        ></textarea>

        <button type="submit" className="submit-btn">Submit Feedback</button>
        <button type="button" className="submit-btn1" onClick={onClose}>Close</button>
      </form>
    </div>
  );
};

export default FeedbackForm;


