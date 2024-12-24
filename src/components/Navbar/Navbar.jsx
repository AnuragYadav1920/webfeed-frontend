import React, { useState, useEffect, useContext , useRef} from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../../context/UserContext.js";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Components from "../../Imports/Components.js"
import "./navbar.css";


const Navbar = () => {
  const { user, isLoggedIn } = useContext(UserContext);
  const [hamberger, setHamberger] = useState(false);
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [openDiscover, setOpenDiscover] = useState(false)
  const [openAccount, setOpenAccount]  = useState(false)
  const [query, setQuery] = useState(null);

  const handleClick = (value)=>{
    if(value==="search"){
      setOpenSearchBar(true);
      setOpenDiscover(false)
      setOpenAccount(false)
      setHamberger(false)
    }else if(value==="discover"){
      setOpenSearchBar(false);
      setOpenDiscover(true)
      setOpenAccount(false)
      setHamberger(false)
    }else if(value==="account"){
      setOpenSearchBar(false);
      setOpenDiscover(false)
      setOpenAccount(true)
      setHamberger(false)
    }else{
      setOpenSearchBar(false);
      setOpenDiscover(false)
      setOpenAccount(false)
      setHamberger(true)
    }
  }
  useEffect(() => {
  }, []);
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
                    onClick={()=>handleClick("discover")}
                  >
                    Discover
                  </li>
                  <li className="remaining-link">
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
                {openDiscover&& (
                  <div
                    className="navbar-container-left-section-discover"
                    onClick={()=>setOpenDiscover(false)}
                  >
                    <Components.Discover />
                  </div>
                )}
              </div>
            </div>
            {/* navbar-right-section for tablets and pc */}
            <div className="navbar-container-right-section">
              <div className="navbar-container-right-section-search">
                <div
                  className="navbar-container-right-section-search-icon "
                  onClick={()=>handleClick("search")}
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
                  <li onClick={() => handleClick("account")}>
                    {user && (
                      <img
                        src={user?.avatar}
                        alt="User"
                        className="account-icon"
                      />
                    )}
                  </li>
                  {openAccount&& (
                    <div
                      className="navbar-container-right-section-account-box"
                      onClick={()=>setOpenAccount(false)}
                    >
                      <Components.Account />
                    </div>
                  )}
                </div>
              )}
              {/* navbar-right-section for mobile devices */}
              <div className="navbar-container-right-section-hamberger-menu">
                <GiHamburgerMenu onClick={() =>handleClick()} />
              </div>
            </div>
          </div>
        </nav>

        {openSearchBar && (
          <div className="navbar-search">
            <div className="input-searchbar" >
              <input
                type="text"
                className="navbar-search-input"
                placeholder="explore your feeds"
                onChange={(e) => setQuery(e.target.value)}
                required
              />
              <button className="navbar-search-button" onClick={()=>setOpenSearchBar(false)}>
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
            <Components.Hambergurmenu className="hamberger" onClick={()=>setHamberger(false)}/>
          </div>
        )}
      </section>
    </>
  );
};

export default Navbar;
