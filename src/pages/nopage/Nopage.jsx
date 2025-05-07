import React from "react";
import "./nopage.css";
import { useNavigate } from 'react-router-dom';

const Nopage = () => {
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

export default Nopage;
