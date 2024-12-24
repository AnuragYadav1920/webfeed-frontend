import React, { useState, useEffect, useContext } from "react";
import parse from "html-react-parser";
import { NavLink, useParams } from "react-router-dom";
import UserContext from "../../context/UserContext.js";
import { AiOutlineLike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Components from "../../Imports/Components.js"
import "./blogs.css";


const ViewPost = () => {
  const { user } = useContext(UserContext);
  const { postId } = useParams();
  const [loading, setLoading] = useState(false);
  const [blogDetails, setBlogDetails] = useState(null);
  const [hideComments, setHideComments] = useState(true);
  const [openReplies, setOpenReplies] = useState(false);
  const [openReplyCommentBox, setOpenReplyCommentBox] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [totalSubscribers, setTotalSubscribers] = useState(0);
  const [openShare, setOpenShare] = useState(false);

  const converDate = () => {
    const dateString = blogDetails?.createdAt;
    const date = new Date(dateString);
    const dateOnly = date.toDateString().split("T")[0];
    return dateOnly;
  };
  const handleShare = () => {
    if (openShare) {
      setOpenShare(false);
    }
  };
  const currentUrl = window.location.href;
  const shareText = "want to share this blog";
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    currentUrl
  )}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    currentUrl
  )}`;
  const WhatsAppUrl = `https://wa.me/?text=${encodeURIComponent(
    shareText
  )}%20${encodeURIComponent(currentUrl)}`;

  const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
    currentUrl
  )}&title=${encodeURIComponent(shareText)}`;

  const blogData =async() => {
    setLoading(true);
    try {
      const response =await fetch(
        `http://localhost:8000/api/v1/blogs/get-blog/${postId}`,
        {
          method: "GET",
        }
      );
      const results = await response.json();
      if (results.success) {
        setBlogDetails(results.data);
        checkSubscribed(results.data.owner);
        getTotalSubscribers(results.data.owner)
      }
    } catch (error) {
      console.log("Error", error);
    }finally{
      setLoading(false)
    }
  };

  const DoSubscribeAndUnSubscribe = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/channel/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            subscribeTo: blogDetails?.owner
          }),
        }
      );
      const results = await response.json();
      if (results.success) {
        alert(`${results.data.subscribed?"Subscribed ":"Unsubscribed "} to ${blogDetails?.ownerDetails.username}`)
        setIsSubscribed(results.data.subscribed);
      } else {
        console.log(`failed to subscribe  ${blogDetails?.ownerDetails.username}`);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const checkSubscribed = async (ownerId) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/channel/check-subscribed/${ownerId}`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      const results = await response.json();
      if (results.data.subscribed) {
        setIsSubscribed(true);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const getTotalSubscribers = async (ownerId) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/channel/get-total-subscribers/${ownerId}`,
        {
          method: "GET",
        }
      );
      const results = await response.json();
      if (results.success) {
        setTotalSubscribers(results.data.totalSubscribers);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleLike = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/blogs/like-post/${postId}`,
        {
          method: "POST",
          credentials: "include",
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

  useEffect(() => {
    blogData()
  }, [isSubscribed]);
  return (
    <>
      {loading ? (
        <Components.Loader />
      ) : (
        <>
          <div className="post-container" onClick={handleShare}>
            <div className="post-container-top">
              <div className="post-left-container">
                <div className="post-left-container-image">
                  <img
                    src={blogDetails?.postImage}
                    alt=""
                    className="post-image"
                  />
                </div>
                <div className="post-left-container-owner">
                  <div className="post-left-container-post-title">
                    <div className="post-left-title">{blogDetails?.title}</div>
                    <div className="post-created-time">
                      <div className="created-time">{converDate()}</div>
                      <div className="post-category">
                        {blogDetails?.category}
                      </div>
                    </div>
                  </div>
                  <div className="post-left-container-owner-details">
                    <NavLink to={`/channels/${blogDetails?.ownerDetails.username}`}>
                      <div className="post-left-container-owner-details-box">
                        <div className="post-left-container-owner-image">
                          <img
                            src={blogDetails?.ownerDetails.avatar}
                            alt=""
                            className="owner-image"
                          />
                        </div>
                        <div className="owner-username">
                          {blogDetails?.ownerDetails.username}
                        </div>
                        <div className="owner-subscribers">
                          {totalSubscribers}
                        </div>
                      </div>
                    </NavLink>
                    <div
                      className="owner-subscribe-button"
                      onClick={DoSubscribeAndUnSubscribe}
                    >
                      <button
                        className="subscribe-button"
                        style={
                          user?._id != blogDetails?.owner
                            ? { visibility: "visible" }
                            : { display: "none" }
                        }
                      >
                        {isSubscribed ? "Unsubscribe" : "Subscribe"}
                      </button>
                    </div>
                  </div>
                  <div className="post-left-container-post-like-share">
                    <div className="post-like" onClick={handleLike}>
                      <div className="post-like-icon">
                        <AiOutlineLike />
                      </div>
                      <div className="post-like-count">{blogDetails?.totalLikes}</div>
                    </div>
                    <div
                      className="post-share"
                      onClick={() => setOpenShare(true)}
                    >
                      <div className="post-share-icon">
                        <RiShareForwardLine />
                      </div>
                      <div className="post-share-text">Share</div>
                    </div>
                  </div>
                  {openShare && (
                    <div className="share-buttons">
                      {/* Share on whatapp */}
                      <a href={WhatsAppUrl} target="_blank">
                        <IoLogoWhatsapp />
                      </a>
                      {/* Share on Twitter */}
                      <a href={twitterUrl} target="_blank">
                        <FaTwitter />
                      </a>

                      {/* Share on Facebook */}
                      <a href={facebookUrl} target="_blank">
                        <FaFacebook />
                      </a>

                      {/* Share onLinkedIn */}
                      <a href={linkedInUrl} target="_blank">
                        <FaLinkedin />
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <div className="post-right-container">
                <div className="post-right-container-title">
                  <div className="post-right-title">{blogDetails?.title}</div>
                </div>
                <div className="post-right-container-desc">
                  <div className="post-right-desc">
                    {parse(`${blogDetails?.description} `)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="comments">
            <div className="comment-box">
            <div className="comment-title">Comments</div>
            <div>
              <hr className="comment-hr"/>
            </div>
            <div>
              {/* comment-container */}
              <div>
                <Components.Comments postId={postId}/>
              </div>
              {/* comment-box */}
              <div>
                <Components.CommentBox postId={postId}/>
              </div>
            </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ViewPost;
