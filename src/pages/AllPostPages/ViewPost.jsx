import React, { useState, useEffect, useContext } from "react";
import "./blogs.css";
import parse from "html-react-parser";
import { NavLink, useParams } from "react-router-dom";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Loader from "../../components/Spinner/Loader";
import Comments from "../../components/Comments/Comments.jsx";
import UserContext from "../../context/UserContext.js";

const ViewPost = () => {
  const { user } = useContext(UserContext);
  const { setNotification } = useContext(UserContext);
  const { postId } = useParams();
  const [loading, setLoading] = useState(false);
  const [postDetails, setPostDetails] = useState(null);
  const [ownerDetails, setOwnerDetails] = useState(null);
  const [hideComments, setHideComments] = useState(true);
  const [openReplies, setOpenReplies] = useState(false);
  const [openReplyCommentBox, setOpenReplyCommentBox] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [totalSubscribers, setTotalSubscribers] = useState(null);
  const [openShare, setOpenShare] = useState(false);
  const [totalLikes, setTotalLikes] = useState(0);

  const converDate = () => {
    const dateString = postDetails?.createdAt;
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

  const blogData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/blogs/get-blog/${postId}`,
        {
          method: "GET",
        }
      );
      const results = await response.json();
      if (results.success) {
        setPostDetails(results.data);
        findOwner(results.data.owner);
        getTotalLikes();
      } else {
        console.log(results.message);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const findOwner = async (ownerId) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/users/get-user/${ownerId}`,
        {
          method: "GET",
        }
      );
      const results = await response.json();
      if (results.success) {
        setOwnerDetails(results.data);
        checkSubscribed(results.data._id);
      } else {
        console.log("failed to fetch owner details");
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const DoSubscribe = async () => {
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
            subscribeTo: postDetails?.owner,
            action: "subscribe",
          }),
        }
      );
      const results = await response.json();
      if (results.success) {
        setNotification({
          value: true,
          message: `Subscribed to ${ownerDetails?.username}`,
        });
        setIsSubscribed(true);
      } else {
        console.log(`failed to subscribe  ${ownerDetails?.username}`);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const DoUnSubscribe = async () => {
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
            subscribeTo: postDetails?.owner,
            action: "unsubscribe",
          }),
        }
      );
      const results = await response.json();
      if (results.success) {
        setNotification({
          value: true,
          message: `UnSubscribed to ${ownerDetails?.username}`,
        });
        setIsSubscribed(false);
      } else {
        console.log(`failed to Unsubscribe  ${ownerDetails?.username}`);
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

  const getTotalSubscribers = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/channel/get-total-subscribers/${postDetails?.owner}`,
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
        setNotification({
          value: true,
          message: `Post Liked Successfully`,
        });
        getTotalLikes();
      } else {
        setNotification({
          value: true,
          message: results.message,
        });
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
  const getTotalLikes = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/blogs/total-post-likes/${postId}`,
        {
          method: "GET",
        }
      );
      const results = await response.json();
      if (results.success) {
        setTotalLikes(results.data.totalLikes);
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    blogData();
    if (postDetails) {
      getTotalSubscribers(postDetails?.owner);
    }
  }, [isSubscribed, totalLikes]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="post-container" onClick={handleShare}>
          <div className="post-container-top">
            <div className="post-left-container">
              <div className="post-left-container-image">
                <img
                  src={postDetails?.postImage}
                  alt=""
                  className="post-image"
                />
              </div>
              <div className="post-left-container-owner">
                <div className="post-left-container-post-title">
                  <div className="post-left-title">{postDetails?.title}</div>
                  <div className="post-created-time">
                    <div className="created-time">{converDate()}</div>
                    <div className="post-category">{postDetails?.category}</div>
                  </div>
                </div>
                <div className="post-left-container-owner-details">
                  <NavLink to={`/channels/${ownerDetails?.username}`}>
                    <div className="post-left-container-owner-details-box">
                      <div className="post-left-container-owner-image">
                        <img
                          src={ownerDetails?.avatar}
                          alt=""
                          className="owner-image"
                        />
                      </div>
                      <div className="owner-username">
                        {ownerDetails?.username}
                      </div>
                      <div className="owner-subscribers">
                        {findOwner ? totalSubscribers : "0"}
                      </div>
                    </div>
                  </NavLink>
                  <div
                    className="owner-subscribe-button"
                    onClick={isSubscribed ? DoUnSubscribe : DoSubscribe}
                  >
                    <button className="subscribe-button" style={user?._id!=postDetails?.owner?{visibility:'visible'}:{display:"none"}}>
                      {isSubscribed ? "Unsubscribe" : "Subscribe"}
                    </button>
                  </div>
                </div>
                <div className="post-left-container-post-like-share">
                  <div className="post-like" onClick={handleLike}>
                    <div className="post-like-icon">
                      <AiOutlineLike />
                    </div>
                    <div className="post-like-count">{totalLikes}</div>
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
                <div className="post-right-title">{postDetails?.title}</div>
              </div>
              <div className="post-right-container-desc">
                <div className="post-right-desc">
                  {parse(`${postDetails?.description} `)}
                </div>
              </div>
            </div>
          </div>
          <div className="comments">
            <div className="comment-box">
              <div className="comment-box-top">
                <div className="comment-title">Comments</div>
                {!hideComments && (
                  <div className="comment-close-button">
                    <IoClose
                      className="comment-close-icon"
                      onClick={() => setHideComments(true)}
                    />
                  </div>
                )}
              </div>
              <hr className="comment-hr" />
              <div>
                <div
                  className="comment-fetched"
                  style={
                    hideComments
                      ? { height: "10vh", overflow: "hidden" }
                      : { height: "30vh", overflow: "auto", marginTop: "1rem" }
                  }
                  onClick={() => setHideComments(false)}
                >
                  <div className="comment-details">
                    <div className="comment-user-img">
                      <img
                        src="https://res.cloudinary.com/dll4smvrf/image/upload/v1726639336/h9hlltm9f0p8yyzua0gt.webp"
                        alt=""
                        className="comment-user-avatar"
                      />
                    </div>
                    <div className="comment-user-details">
                      <div className="comment-user-username">@anurag24</div>
                      <div className="comment-user-comment">
                        Next Docker..... Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Asperiores, rerum.
                      </div>
                      <div className="comment-user-cdl">
                        <div className="comment-cdl-box">
                          <div className="comment-cdl-icon">
                            <AiOutlineLike />
                          </div>
                          <div className="comment-cdl-count">10k</div>
                        </div>
                        <div className="comment-cdl-box">
                          <div className="comment-cdl-icon">
                            <AiOutlineDislike />
                          </div>
                          <div className="comment-cdl-count">1.2k</div>
                        </div>
                        <div className="comment-cdl-box">
                          <div
                            className="comment-cdl-icon"
                            onClick={() => setOpenReplyCommentBox(true)}
                          >
                            <BiCommentDetail />
                          </div>
                          <div
                            className="comment-cdl-reply-count"
                            onClick={() => setOpenReplyCommentBox(false)}
                          >
                            {openReplyCommentBox ? "close" : "1 reply"}
                          </div>
                        </div>
                        <div
                          className="comment-cdl-view-replies"
                          onClick={() => setOpenReplies(!openReplies)}
                        >
                          {openReplies ? "hide replies" : "open replies"}
                        </div>
                      </div>
                      {openReplies && (
                        <div>
                          <div className="comment-details">
                            <div className="comment-user-img">
                              <img
                                src="https://res.cloudinary.com/dll4smvrf/image/upload/v1726639336/h9hlltm9f0p8yyzua0gt.webp"
                                alt=""
                                className="comment-user-avatar"
                              />
                            </div>
                            <div className="comment-user-details">
                              <div className="comment-user-username">
                                @anurag24
                              </div>
                              <div className="comment-user-comment">
                                Next Docker..... Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Asperiores, rerum.
                              </div>
                              <div className="comment-user-cdl">
                                <div className="comment-cdl-box">
                                  <div className="comment-cdl-icon">
                                    <AiOutlineLike />
                                  </div>
                                  <div className="comment-cdl-count">10k</div>
                                </div>
                                <div className="comment-cdl-box">
                                  <div className="comment-cdl-icon">
                                    <AiOutlineDislike />
                                  </div>
                                  <div className="comment-cdl-count">1.2k</div>
                                </div>
                                <div className="comment-cdl-box">
                                  <div className="comment-cdl-icon">
                                    <BiCommentDetail />
                                  </div>
                                  <div className="comment-cdl-reply-count">
                                    1 reply
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="comment-details">
                            <div className="comment-user-img">
                              <img
                                src="https://res.cloudinary.com/dll4smvrf/image/upload/v1726639336/h9hlltm9f0p8yyzua0gt.webp"
                                alt=""
                                className="comment-user-avatar"
                              />
                            </div>
                            <div className="comment-user-details">
                              <div className="comment-user-username">
                                @anurag24
                              </div>
                              <div className="comment-user-comment">
                                Next Docker..... Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Asperiores, rerum.
                              </div>
                              <div className="comment-user-cdl">
                                <div className="comment-cdl-box">
                                  <div className="comment-cdl-icon">
                                    <AiOutlineLike />
                                  </div>
                                  <div className="comment-cdl-count">10k</div>
                                </div>
                                <div className="comment-cdl-box">
                                  <div className="comment-cdl-icon">
                                    <AiOutlineDislike />
                                  </div>
                                  <div className="comment-cdl-count">1.2k</div>
                                </div>
                                <div className="comment-cdl-box">
                                  <div className="comment-cdl-icon">
                                    <BiCommentDetail />
                                  </div>
                                  <div className="comment-cdl-reply-count">
                                    1 reply
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="comment-details">
                            <div className="comment-user-img">
                              <img
                                src="https://res.cloudinary.com/dll4smvrf/image/upload/v1726639336/h9hlltm9f0p8yyzua0gt.webp"
                                alt=""
                                className="comment-user-avatar"
                              />
                            </div>
                            <div className="comment-user-details">
                              <div className="comment-user-username">
                                @anurag24
                              </div>
                              <div className="comment-user-comment">
                                Next Docker..... Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Asperiores, rerum.
                              </div>
                              <div className="comment-user-cdl">
                                <div className="comment-cdl-box">
                                  <div className="comment-cdl-icon">
                                    <AiOutlineLike />
                                  </div>
                                  <div className="comment-cdl-count">10k</div>
                                </div>
                                <div className="comment-cdl-box">
                                  <div className="comment-cdl-icon">
                                    <AiOutlineDislike />
                                  </div>
                                  <div className="comment-cdl-count">1.2k</div>
                                </div>
                                <div className="comment-cdl-box">
                                  <div className="comment-cdl-icon">
                                    <BiCommentDetail />
                                  </div>
                                  <div className="comment-cdl-reply-count">
                                    1 reply
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {openReplyCommentBox && (
                        <div>
                          <Comments />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div
                  className="comment-comment-box"
                  style={
                    hideComments
                      ? { display: "none" }
                      : {
                          position: "relative",
                          bottom: "1rem",
                          marginTop: "2rem",
                        }
                  }
                >
                  {!openReplyCommentBox && <Comments />}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewPost;
