import React, { useState, useContext } from "react";
import "./feedback.css";
import UserContext from "../../context/UserContext.js";

const Feedback = () => {
  const { setNotification } = useContext(UserContext);
  const [feedback, setFeedback] = useState({
    email: "",
    work: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/user/feedback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(feedback),
        }
      );
      const results = await response.json();
      alert(results.message)
    } catch (error) {
      console.log("Error", error);
    } finally {
      setFeedback({
        email: "",
        work: "",
        description: "",
      });
    }
  };

  return (
    <>
      <div className="feedback-container">
        <div className="feedback-title">Feedback</div>
        <div className="feedback-form-fields">
          <div className="fedback-input-field">
            <label htmlFor="email" className="feedback-label">
              Email :
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="feedback-input"
              value={feedback.email}
              placeholder="enter your email"
              required
              onChange={handleChange}
            />
          </div>
          <div className="fedback-input-field">
            <label htmlFor="work" className="feedback-label">
              Work :
            </label>
            <input
              type="text"
              name="work"
              id="work"
              className="feedback-input"
              value={feedback.work}
              placeholder="tell us about your job"
              required
              onChange={handleChange}
            />
          </div>
          <div className="feedback-textarea-fields">
            <label htmlFor="description" className="feedback-label">
              Description :
            </label>
            <textarea
              name="description"
              id="description"
              className="feedback-textarea"
              value={feedback.description}
              required
              placeholder="give your valuable feedback"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="feedback-submit">
            <button className="feeback-submit-button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
