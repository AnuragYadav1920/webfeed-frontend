import React from "react";
import "./comment.css";
import { IoIosSend } from "react-icons/io";

const Comments = () => {
  return (
    <>
      <div className="add-comment-section">
        <div className="commenting-user-img">
          <img
            src="https://res.cloudinary.com/dll4smvrf/image/upload/v1726639336/h9hlltm9f0p8yyzua0gt.webp"
            alt=""
            className="commenting-user-avatar"
          />
        </div>
        <div className="comment-write-box">
          <div className="comment-input-div">
            <textarea type="text" className="comment-input" rows={1} placeholder="Add a comment...">
            </textarea>
          </div>
          <div className="comment-send-button">
            <IoIosSend className="comment-send-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
