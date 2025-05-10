import React, { useState , useEffect} from "react";
import {getUser} from "../../features/user/userSlice"
import {getToken} from "../../features/auth/authSlice"
import {useSelector, useDispatch} from "react-redux";
import "./feedback.css"

const Feedback = () => {
  const userLoggedInDetails = useSelector((state)=>state.userLoggedIn.data);
  const userToken = useSelector((state)=>state.authentication.token);
  const [description, setDescription] = useState("");
  const dispatch = useDispatch()


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`http://localhost:8000/api/v1/feedback/send-message`, {
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
            value={userLoggedInDetails?.username}
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
