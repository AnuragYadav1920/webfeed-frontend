import React, { useState, useContext, useEffect } from "react";
import "./hamberger.css";
import { NavLink, useNavigate } from "react-router-dom";
import { RiArrowRightWideLine } from "react-icons/ri";
import UserContext from "../../../context/UserContext.js";
const Hambergurmenu = () => {
  const { setIsLoggedIn,setUser, setNotification, isLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openAccount, setOpenAccount] = useState(false);

  const handleLogout = async () => {
    try {
      const respose = await fetch("http://localhost:8000/api/v1/users/logout", {
        method: "POST",
        credentials: "include",
      });
      const results = await respose.json();
      if (results.success) {
        setUser(null);
        localStorage.removeItem("user");
        setNotification({
          value: "true",
          message: results.message,
        });
        setIsLoggedIn(false);
        navigate("/");
      } else {
        setNotification({
          value: "true",
          message: "Sorry, logging out user failed",
        });
      }
    } catch (error) {
      console.log("Error occured while logging out", error);
    }
  };

  useEffect(()=>{
  },[isLoggedIn])

  return (
    <>
      <div className="hamberger-box">
        <div className="hamberger-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </div>
        <div className="hamberger-links">
          <div className="hamberger-discover-my-account">
            <li>Discover</li>
            <li
              onClick={() => setOpenDiscover(!openDiscover)}
              className="arrow-li"
            >
              <RiArrowRightWideLine
                style={openDiscover ? { rotate: "90deg" } : { rotate: "0deg" }}
              />
            </li>
          </div>

          {openDiscover && (
            <div className="hamberger-discover-sub-links">
              <li>
                <NavLink to="/posts">Posts</NavLink>
              </li>
              <li>
                <NavLink to="/top-creators">Top Creators</NavLink>
              </li>
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/events">Events</NavLink>
              </li>
            </div>
          )}
        </div>
        {isLoggedIn && (
          <div className="hamberger-links">
            <div className="hamberger-discover-my-account">
              <li>My Account</li>
              <li
                onClick={() => setOpenAccount(!openAccount)}
                className="arrow-li"
              >
                <RiArrowRightWideLine
                  style={openAccount ? { rotate: "90deg" } : { rotate: "0deg" }}
                />
              </li>
            </div>
            {openAccount && (
              <div className="hamberger-discover-sub-links">
                <li>
                  <NavLink to="/my-profile">Dashbaord</NavLink>
                </li>
                <li>
                  <NavLink to="/edit-details">Edit-details</NavLink>
                </li>
                <li>
                  <NavLink to="/create">Create Post</NavLink>
                </li>
                <li>
                  <NavLink to="/create">Liked Post</NavLink>
                </li>
              </div>
            )}
          </div>
        )}
        <div className="hamberger-links">
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </div>
        {isLoggedIn && (
          <div className="hamberger-links">
            <li onClick={handleLogout}>
              <NavLink>Logout</NavLink>
            </li>
          </div>
        )}
      </div>
    </>
  );
};

export default Hambergurmenu;
