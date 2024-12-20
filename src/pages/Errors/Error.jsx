import React from "react";
import "./error.css";
import { useNavigate } from 'react-router-dom';
const Error = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/')
  };
  return (
    <>
      <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Sorry. Page Not Found !</p>
      <button className="go-home-button" onClick={goHome}>
        Go to Home
      </button>
    </div>
    </>
  );
};

export default Error;
