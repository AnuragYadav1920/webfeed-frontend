import React, { useContext, useState } from "react";
import {useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import UserContext from "../../context/UserContext";
import "./login&signup.css";


const Login = () => {
  const { setUser, setLoading, setIsLoggedIn } =
    useContext(UserContext);
  const navigate = useNavigate();

  const userLogin = async (formObj) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formObj),
      });
      const results = await response.json();
      if (results.success) {
        setUser(results.data);
        localStorage.setItem("user", JSON.stringify(results.data));
        setIsLoggedIn(true);
        alert(results.message);
      }else{
        alert(results.message)
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
      navigate("/");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formObj = Object.fromEntries(formData.entries());
    userLogin(formObj);
  };
  return (
    <>
      <div className="login-container">
        <div className="login-heading-div">
          <span className="login-heading-div-text">Login</span>
        </div>
        <div className="login-form-div">
          <form onSubmit={handleSubmit}>
            <div className="login-form-input-label-div">
              <label htmlFor="email">Email :</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="enter your email"
                required
              />
            </div>
            <div className="login-form-input-label-div">
              <label htmlFor="password">Password :</label>
              <input
                type="text"
                name="password"
                id="password"
                placeholder="enter your password"
                required
              />
            </div>
            <div className="login-from-button-div">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div className="login-container-link-div">
          <span>New User?</span>
          <span className="signup-link">
            <NavLink to="/signup">Create Account</NavLink>
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;
