import React, { useEffect, useState } from "react";
import "./menu.css";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { Link , useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getToken, deleteToken } from "../../../features/auth/authSlice";
import { getUser, deleteUser } from "../../../features/user/userSlice";

const Menu = ({ closeComponent }) => {
  const userToken = useSelector((state) => state.authentication.token);
  const userDetails = useSelector((state) => state.userLoggedIn.data);
  const [openExplore, setOpenExplore] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleLogout = () => {
    if (userToken && userDetails){
      dispatch(deleteToken());
      dispatch(deleteUser());
      closeComponent();
      alert("Logged out successfully")
      navigate("/")
    }; 
  };
  useEffect(() => {
    dispatch(getToken());
    dispatch(getUser())
  }, [userToken]);
  return (
    <div className="menu-container">
      <ul>
        <li
          onClick={() => setOpenExplore((prev) => !prev)}
          className="menu-item explore-item"
        >
          Explore
          {openExplore ? (
            <FaCaretUp className="caret-icon" />
          ) : (
            <FaCaretDown className="caret-icon" />
          )}
        </li>
        {openExplore && (
          <ul className="submenu" onClick={() => closeComponent()}>
            <li>Trending</li>
            <li>Popular</li>
            <li>Top Creators</li>
          </ul>
        )}
        <li className="menu-item" onClick={() => closeComponent()}>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li className="menu-item" onClick={() => closeComponent()}>
          <Link to="/about">About</Link>
        </li>
        <li className="menu-item" onClick={() => closeComponent()}>
          <Link to="/contact">Contact</Link>
        </li>
        {userToken && (
          <li className="menu-item" onClick={handleLogout}>
            Logout
          </li>
        )}
      </ul>
    </div>
  );
};

export default Menu;
