import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext.js";
import Components from "../../Imports/Components.js"
import "./login&signup.css"

const SignUp = () => {
  const { setUser} = useContext(UserContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const createNewUser = async (formData) => {
    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/users/register",
        {
          method: "POST",
          credentials: "include",
          body: formData,
        }
      );
      const results = await response.json();
      if(results.success){
        alert(results.message)
        navigate("/login");
      }  
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    createNewUser(formData);
  };

  return (
    <>
      {loading ? (
        <Components.Loader />
      ) : (
        <div className="signup-container">
          <div className="signup-heading-div">
            <span className="signup-heading-text">Sign Up</span>
          </div>
          <div className="signup-form-div">
            <form onSubmit={handleSubmit}>
              <div className="signup-form-inner-div">
                <div className="signup-form-input-label-div">
                  <label htmlFor="username">Username :</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="enter your username"
                    required
                  />
                </div>
                <div className="signup-form-input-label-div">
                  <label htmlFor="fullName">Full Name :</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="enter your Full Name"
                    required
                  />
                </div>
                <div className="signup-form-input-label-div">
                  <label htmlFor="email">Email :</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="enter your email"
                    required
                  />
                </div>
                <div className="signup-form-input-label-div">
                  <label htmlFor="password">Password :</label>
                  <input
                    type="text"
                    id="password"
                    name="password"
                    placeholder="enter your password"
                    required
                  />
                </div>
                <div className="signup-form-input-label-div">
                  <label htmlFor="avatar">Profile Image :</label>
                  <input type="file" id="avatar" name="avatar" required />
                </div>
                <div className="signup-form-input-label-div">
                  <label htmlFor="coverImage">Cover Image :</label>
                  <input
                    type="file"
                    id="coverImage"
                    name="coverImage"
                    required
                  />
                </div>
                <div className="signup-form-input-label-div">
                  <label htmlFor="instagram">Instagram :</label>
                  <input
                    type="text"
                    id="instagram"
                    name="instagram"
                    placeholder="enter your Instagram Id"
                  />
                </div>
                <div className="signup-form-input-label-div">
                  <label htmlFor="facebook">Facebook :</label>
                  <input
                    type="text"
                    id="facebook"
                    name="facebook"
                    placeholder="enter your Facebook Id"
                  />
                </div>
                <div className="signup-form-input-label-div">
                  <label htmlFor="linkedin">LinkedIn :</label>
                  <input
                    type="text"
                    id="linkedin"
                    name="linkedin"
                    placeholder="enter your LinkedIn Id"
                  />
                </div>
                <div className="signup-form-input-label-div">
                  <label htmlFor="website">Website :</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    placeholder="enter your website "
                  />
                </div>
                <div className="signup-form-input-label-div">
                  <label htmlFor="about">About :</label>
                  <textarea name="about" id="about" rows={3} placeholder="tell us about yourself">                   
                  </textarea>
                </div>
              </div>
              <div className="signup-from-button-div">
                <button type="submit">submit</button>
              </div>
            </form>
          </div>
          <div className="login-container-link-div">
            <span>Already registered? </span>
            <span className="login-link">
              <NavLink to="/login">Login</NavLink>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
