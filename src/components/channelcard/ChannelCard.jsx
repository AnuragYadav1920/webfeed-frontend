import React from "react";
import "./channelcard.css"
import {Link} from "react-router-dom"
const ChannelCard = ({creator, closeComponent}) => {
  return (
    <>
      <div className="creator-card">
        <img
          src={creator.avatar}
          alt={creator.username}
          className="creator-avatar"
        />
        <div className="creator-info-box">
          <h2>{creator.username}</h2>
          <Link to={`/creator/${creator.username}`} onClick={()=>closeComponent()}><button className="follow-button">View Creator</button></Link>
        </div>
      </div>
    </>
  );
};

export default ChannelCard;
