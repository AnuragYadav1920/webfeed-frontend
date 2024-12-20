import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <>
      <div className="Contact-container">
        <div className="Contact-title">Contact</div>
        <div className="Contact-form-fields">
        <div className="Contact-input-field">
            <label htmlFor="name" className="Contact-label">
              Name :
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="Contact-input"
              placeholder="enter your name"
              required
            />
          </div>
          <div className="Contact-input-field">
            <label htmlFor="email" className="Contact-label">
              Email :
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="Contact-input"
              placeholder="enter your email"
              required
            />
          </div>
          <div className="Contact-textarea-fields">
            <label htmlFor="description" className="Contact-label">
              Description :
            </label>
            <textarea
              name="description"
              id="description"
              className="Contact-textarea"
              required
              placeholder="Feel free to contact us. We will be glad to hear you..."
            >  
            </textarea>
          </div>
          <div className="Contact-submit">
            <button className="Contact-submit-button">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
