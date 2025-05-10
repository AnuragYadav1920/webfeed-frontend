import React, { useState, useEffect, useRef } from "react";
import {Link, Outlet} from "react-router-dom"
import "./dashboard.css";
import components from "../../exports/components"

const Dashboard = () => {

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Dashboard</h2>
          <ul>
            <li ><Link to="create">Create Post</Link></li>
            <li><Link to="posts">My Posts</Link></li>
            <li><Link to="settings">Settings</Link></li>
          </ul>
      </aside>
      <main className="main-content"><Outlet/></main>
    </div>
  );
};

export default Dashboard;
