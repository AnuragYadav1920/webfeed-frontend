import React from "react";
import "./blogcard.css";

const Blogcard = ({post, creator}) => {
  return (
    <div className="blogcard-container">
      <div className="blogcard-image">
        <img
          src={post['postImage']}
        />
      </div>
      <div className="blogcard-details">
        <div className="blogcard-creator">
          <span className="blogcard-date">{new Date(post['createdAt']).toLocaleDateString()}</span>
          <div className="creator-image-wrapper">
            <img
              src={creator?.avatar}
              alt="creator"
              className="creator-image"
            />
          </div>
        </div>
        <div className="blogcard-td">
          <span className="blogcard-title">
            {post['title']}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Blogcard;