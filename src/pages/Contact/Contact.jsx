import React, { useEffect, useState } from "react";
import {getUser} from "../../features/user/userSlice"
import {getToken} from "../../features/auth/authSlice"
import {useSelector, useDispatch} from "react-redux";
import "./contact.css"

const Contact = () => {
  const userLoggedInDetails = useSelector((state)=>state.userLoggedIn.data);
  const userToken = useSelector((state)=>state.authentication.token);
  const [description, setDescription] = useState("");
  const dispatch = useDispatch()


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`http://localhost:8000/api/v1/contact/send-message`, {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${userToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "description":description
        })
      });
  
      if (response.ok) {
        alert('Message sent successfully');
        setDescription("")
      } else {
        alert('Failed to send the message');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while sending the message.');
    }
  };
  

  useEffect(()=>{
    dispatch(getUser())
    dispatch(getToken())
  },[])

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
            value={userLoggedInDetails?.username}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={userLoggedInDetails?.email}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Message:</label>
          <textarea
            id="description"
            name="description"
            rows="5"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            placeholder="Feel free to contact us. We will be glad to see you here."
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

