import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css"

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
   try {
     const response = await fetch(`http://localhost:8000/api/v1/user/register`,{
       method:'POST',
       headers:{
         'Content-Type':'application/json'
       },
       body:JSON.stringify(user)
     })
     const data = await response.json()
    if(response.ok){
      alert(data.msg)
      setUser({username:"", email:"", phone:"",
        password:""
      })
      navigate("/login")
    }else{
      alert(data.msg)
    }
   } catch (error) {
    console.log(error)
   }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Create an Account</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
            value={user.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
            value={user.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="signup-button">
          Register
        </button>
        <div className="login-link">
          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Register;