import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { setToken } from "../../features/auth/authSlice";
import { setUser } from "../../features/user/userSlice";
import "./login.css";

const Login = () => {
  const userLoggedInDetails = useSelector((state)=>state.userLoggedIn.data);
  const userLoggedInToken = useSelector((state)=>state.authentication.token)
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/api/v1/user/login`, {
        method: "POST",
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(credentials),
      });
      console.log(response);
      if (response.ok) {
        alert("logged in successfully")
        const data = await response.json();
        dispatch(setUser(data['user']))
        dispatch(setToken(data['token']))
        setCredentials({ email: "", password: "" });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Login to WebFeed</h2>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={credentials.email}
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
              value={credentials.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          <div className="register-link">
            <span>
              New user? <Link to="/signup">Register</Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
