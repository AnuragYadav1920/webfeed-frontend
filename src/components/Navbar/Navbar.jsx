import React, { useState, useEffect, useContext } from "react";
import "./navbar.css";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import Account from "../Navbar/Account/Account.jsx";
import Discover from "./Discover/Discover.jsx";
import Hambergurmenu from "./Hambergurmenu/Hambergurmenu.jsx.jsx";
import UserContext from "../../context/UserContext.js";

const Navbar = () => {
  const { user, openComponents, setOpenComponents, isLoggedIn } =
    useContext(UserContext);
  const [hamberger, setHamberger] = useState(false);
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [query, setQuery] = useState(null);

  const handleOpenComponents = (tabName) => {
    setOpenComponents(
      openComponents.map((component) => ({
        ...component,
        isOpen: component.id === tabName ? !component.isOpen : false,
      }))
    );
  };
  const closeAllComponents = () => {
    setOpenComponents(
      openComponents.map((component) => ({
        ...component,
        isOpen: false,
      }))
    );
  };
  const handleSearchbar = ()=>{
    if(openSearchBar){
      setOpenSearchBar(false)
    }
  }
  useEffect(() => {}, []);
  return (
    <>
      <section className="section">
        <nav className="navbar">
          <div className="navbar-container">
            {/* navbar-left-section */}
            <div className="navbar-container-left-section">
              <div className="navbar-container-left-section-logo">
                <ul>
                  <li>
                    <NavLink to="/">WebFeed</NavLink>
                  </li>
                </ul>
              </div>
              <div className="navbar-container-left-section-links">
                <ul>
                  <li className="home-link">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li
                    className="remaining-link"
                    onClick={() => handleOpenComponents("discover")}
                  >
                    Discover
                  </li>
                  <li className="remaining-link">
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
                {openComponents[0].isOpen && (
                  <div
                    className="navbar-container-left-section-discover"
                    onClick={closeAllComponents}
                  >
                    <Discover />
                  </div>
                )}
              </div>
            </div>
            {/* navbar-right-section for tablets and pc */}
            <div className="navbar-container-right-section">
              <div className="navbar-container-right-section-search">
                <div
                  className="navbar-container-right-section-search-icon "
                  onClick={() => setOpenSearchBar(!openSearchBar)}
                >
                  <FaSearch />
                </div>
              </div>
              {!isLoggedIn && (
                <div className="navbar-container-right-section-links">
                  <ul>
                    <li className="remaining-link">
                      <NavLink to="/login">Sign In</NavLink>
                    </li>
                  </ul>
                </div>
              )}
              {isLoggedIn && (
                <div className="navbar-container-right-section-account">
                  <li onClick={() => handleOpenComponents("profile")}>
                    {user && (
                      <img
                        src={user?.avatar}
                        alt="User"
                        className="account-icon"
                      />
                    )}
                  </li>
                  {openComponents[1].isOpen && (
                    <div
                      className="navbar-container-right-section-account-box"
                      onClick={closeAllComponents}
                    >
                      <Account />
                    </div>
                  )}
                </div>
              )}
              {/* navbar-right-section for mobile devices */}
              <div className="navbar-container-right-section-hamberger-menu">
                <GiHamburgerMenu onClick={() => setHamberger(!hamberger)} />
              </div>
            </div>
          </div>
        </nav>

        {openSearchBar && (
          <div className="navbar-search">
            <div className="input-searchbar">
              <input
                type="text"
                className="navbar-search-input"
                placeholder="explore your feeds"
                onChange={(e) => setQuery(e.target.value)}
                required
              />
              <button className="navbar-search-button" onClick={handleSearchbar}>
                <NavLink to={`/search?query=${query}`}>
                  <FaSearch />
                </NavLink>
              </button>
            </div>
            <div
              className="navbar-searchbar-close"
              onClick={() => setOpenSearchBar(false)}
            >
              Close
            </div>
          </div>
        )}

        {hamberger && (
          <div className="hamberger-div">
            <Hambergurmenu className="hamberger" />
          </div>
        )}
      </section>
    </>
  );
};

export default Navbar;
