import React, { useState } from "react";
import "./contact.css";
const Contact = () => {
  const [contactDetails, setContactDetails] = useState({
    name:"",
    email:"",
    description:""
  })

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    setContactDetails({...contactDetails, [name]:value})
  }

  const handleContactSubmit = async() =>{
    try {
      const response = await fetch('http://localhost:8000/api/v1/user/sent-message',
        {
          method:'POST',
          headers:{
            "Content-Type": "application/json",
          },
          body:JSON.stringify(contactDetails)
        }
      )
      const results = await response.json()
      if(results.success){
        alert(results.message)
      }else{
        alert("failed to sent message")
      }
    } catch (error) {
      console.log("Error", error)
    }finally{
      setContactDetails({
        name:"",
        email:"",
        description:""
      })
    }
  }
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
              value={contactDetails.name}
              onChange={handleInputChange}
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
              value={contactDetails.email}
              onChange={handleInputChange}
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
              value={contactDetails.description}
              onChange={handleInputChange}
            >  
            </textarea>
          </div>
          <div className="Contact-submit">
            <button className="Contact-submit-button" onClick={handleContactSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
