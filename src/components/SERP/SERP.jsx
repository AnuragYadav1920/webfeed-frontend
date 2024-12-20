import React, { useEffect, useState } from "react";
import {NavLink, useNavigate} from 'react-router-dom'
import { IoMdSearch } from "react-icons/io";
import { LuArrowUpLeft } from "react-icons/lu";
import "./serp.css";
const SERP = ({ posts, channels }) => {
  return (
    <>
      <div className="SERP-container">
        <div className="SERP-container-box">
          {channels &&
            channels.map((channel, index) => (
              <NavLink to={`/channels/${channel?.username}`} key={index}>
                <div className="SERP-result"  >
                  <div className="SERP-search-icon">
                    <IoMdSearch />
                                   
                  </div>
                  <div className="SERP-result-details">
                    <div className="SERP-results-user-info">
                      <div className="SERP-results-user-info-username">
                        {channel.fullName}
                      </div>
                      <div className="SERP-results-user-info-fullname">
                        {channel.username}
                      </div>
                    </div>
                    <div className="SERP-results-user-info-image">
                      <img
                        src={channel.avatar}
                        alt="user avatar"
                        className="SERP-results-user-info-user-image"
                      />
                    </div>
                  </div>
                  <div className="SERP-arrow-icon">
                    <LuArrowUpLeft />
                  </div>
                </div>
                </NavLink>   
            ))}
          {posts &&
            posts.map((post, index) => (
              <NavLink to={`posts/${post?._id}`} key={index}>
              <div className="SERP-result" >
              <div className="SERP-search-icon">
                <IoMdSearch />
              </div>
              <div className="SERP-result-details">
                  <div className="SERP-results-post-title">
                    {post.title}
                  </div>
                <div className="SERP-results-post-image-box">
                  <img
                    src={post.postImage}
                    alt="user avatar"
                    className="SERP-results-post-image"
                  />
                </div>
              </div>
              <div className="SERP-arrow-icon">
                <LuArrowUpLeft />
              </div>
            </div>
            </NavLink>
            ))}
        </div>
      </div>
    </>
  );
};

export default SERP;
