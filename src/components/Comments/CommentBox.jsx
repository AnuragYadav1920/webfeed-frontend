import React, { useContext, useState } from "react";
import "./comment.css";
import { IoIosSend } from "react-icons/io";
import UserContext from "../../context/UserContext.js";

const CommentBox = ({ postId }) => {
  const { user} = useContext(UserContext);
  const [commentData, setCommentData] = useState("");
  const sendComment = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/blogs/create-comment/${postId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            comment: commentData
          }),
        }
      );
      const results = await response.json();
      if (results.success) {
        alert(results.message)
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
  const handleSubmitComment = () => {
    sendComment();
    setCommentData("")
  };
  return (
    <>
      <div className="add-comment-section">
        <div className="commenting-user-img">
          <img src={user?.avatar} alt="" className="commenting-user-avatar" />
        </div>
        <div className="comment-write-box">
          <div className="comment-input-div">
            <textarea
              type="text"
              className="comment-input"
              rows={1}
              placeholder="Add a comment..."
              value={commentData}
              onChange={(e) => setCommentData(e.target.value)}
            ></textarea>
          </div>
          <div className="comment-send-button" onClick={handleSubmitComment}>
            <IoIosSend className="comment-send-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentBox;
