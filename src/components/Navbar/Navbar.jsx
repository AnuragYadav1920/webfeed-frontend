import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";
import "./navbar.css";
import components from "../../exports/components";
import useClickOutside from "../../hooks/useClickOutside";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const exploreRef = useRef(null);
  const searchRef = useRef(null);
  const dashboardRef = useRef(null);
  const menuRef = useRef(null);


  const toggleDropdown = (dropdown) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };



  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-bar">
          <div className="nav-container-left">
            <div className="logo">
              <NavLink to="/">WebFeed</NavLink>
            </div>
            <div className="nav-links">
              <div
                className="explore nav-active"
                onClick={() => toggleDropdown("explore")}
              >
                <span className="explore-btn">Explore</span>
                <span className="explore-icon">
                  <IoIosArrowDown className="icon" />
                </span>
              </div>
              <span className="link nav-active">
                <NavLink to="/blogs">Blogs</NavLink>
              </span>
              <span className="link nav-active">
                <NavLink to="/about">About</NavLink>
              </span>
              <span className="link nav-active">
                <NavLink to="/contact">Contact</NavLink>
              </span>
            </div>
          </div>
          <div className="nav-container-right">
            <span
              className="link nav-active"
              onClick={() => toggleDropdown("search")}
            >
              <CiSearch />
            </span>
            <div className="login nav-active">
              <NavLink to="/login">Login</NavLink>
            </div>
            <div className="login nav-active">
              <NavLink to="/register">Register</NavLink>
            </div>
            <div className="login nav-active hidden">
              <NavLink to="/dashboard"><MdAccountCircle/></NavLink>
            </div>
            <span
              className="link nav-active hidden"
              onClick={() => toggleDropdown("menu")}
            >
              <GiHamburgerMenu />
            </span>
          </div>
        </div>
        <hr />
        {openDropdown === "explore" && (
          <div className="nav-component" ref={exploreRef}>
            <components.Explore closeComponent={setOpenDropdown} />
          </div>
        )}
        {openDropdown === "search" && (
          <div className="nav-component" ref={searchRef}>
            <components.Search closeComponent={setOpenDropdown} />
          </div>
        )}
        {openDropdown === "menu" && (
          <div className="nav-dropdown" ref={menuRef}>
            <components.Menu closeComponent={setOpenDropdown} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


