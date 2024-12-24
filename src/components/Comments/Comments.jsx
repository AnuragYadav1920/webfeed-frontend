import React, { useEffect, useState } from "react";
import "./comment.css";

const Comments = ({ postId }) => {
  const [allComments, setAllComments] = useState(null);
  const [showAllComments, setShowAllComments] = useState(false);

  const fetchComments = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/blogs/all-comments/${postId}`,
        {
          method: "GET",
        }
      );
      const results = await response.json();
      if (results.success) {
        setAllComments(results.data);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleCommentBox = () => {
    setShowAllComments(!showAllComments);
  };
  useEffect(() => {
    fetchComments();
  });

  return (
    <>
      <div className="all-comment-box">
        <div style={showAllComments?{maxHeight:"60vh", overflow:"auto", margin:"1rem 0 3rem 0"}:{maxHeight:"20vh", overflow:"hidden"}}>
          {allComments?.map((comment, index) => (
            <div className="coment" key={index}>
              <div className="comment-user-avatar">
                <img
                  src={comment?.avatar}
                  alt=""
                  className="comment-user-image"
                />
              </div>
              <div className="comment-data">
                <div className="comment-username">{comment.username}</div>
                <div className="comment-value">{comment.comment}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="more-button-div" onClick={handleCommentBox} style={{opacity:"1"}}>
          <button className="more-button">{showAllComments ? "okay i get it" : "Show more"}</button>
        </div>
      </div>
    </>
  );
};

export default Comments;
