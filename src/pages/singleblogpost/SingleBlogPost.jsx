import React, { useEffect, useState } from "react";
import "./blogpost.css";
import components from "../../exports/components";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../features/auth/authSlice";
import { AiOutlineLike } from "react-icons/ai";
import parse from 'html-react-parser';

const SingleBlogPost = () => {
  const userToken = useSelector((state) => state.authentication.token);
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [totalLikes, setTotalLikes] = useState(0);
  const [recommendedPosts, setRecommendedPosts] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getAllPosts = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/blog/get-all-posts`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      if (response.ok) {
        setRecommendedPosts(data["posts"]);
        console.log(data["msg"]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLikeAndDislike = async () => {
    if (userToken) {
      try {
        const response = await fetch(
          `http://localhost:8000/api/v1/blog/like-and-dislike`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${userToken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ postId: id }),
          }
        );
        if (response.ok) {
          const data = await response.json();
          alert(data?.msg);
          getTotalLikes();
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      navigate("/login");
    }
  };

  const getTotalLikes = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/blog/get-likes`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ postId: id }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        setTotalLikes(data.total);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(getToken());
    const getPostDetails = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/v1/blog/get-singlepost",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ postId: id }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch post details");
        }

        const data = await response.json();
        setPost(data.post);
      } catch (error) {
        console.error("Error fetching post details:", error);
      }
    };
    getPostDetails();
    getAllPosts();
    getTotalLikes();
  }, [id]);
  return (
    <>
      <div className="blog-page">
        <div className="blog-container">
          <div className="blog-post-container">
            <img
              src={post?.postImage}
              alt={"post-image"}
              className="blog-post-image"
            />
            <div className="blog-post-content">
              <span className="blog-post-category">{post?.title}</span>
              <span className="blog-post-date">
                {new Date(post?.createdAt).toLocaleDateString()}
              </span>
              <span
                className="blog-post-likes"
                onClick={() => handleLikeAndDislike()}
              >
                <AiOutlineLike style={{ fontSize: "1.3rem",cursor:"pointer" }} /> {totalLikes}
              </span>
              <h1 className="blog-post-title">{post?.title}</h1>
              <div className="blog-post-meta">
                <div className="author-info">
                  <img
                    src={post?.creator.avatar}
                    alt={"creator"}
                    className="author-image"
                  />
                  <span className="author-name">{post?.fullName}</span>
                </div>
                <div className="author-channel">
                  <button>
                    <Link to={`/creator/${post?.creator?.username}`}>
                      Visit Creator
                    </Link>
                  </button>
                </div>
              </div>
              <p className="blog-post-description">{parse(`${post?.description}`)}</p>
            </div>
          </div>
          <aside className="recommended-posts">
            <h3>Recommended Posts</h3>
            <div className="recommended-posts-grid">
              {recommendedPosts?.map((post) => (
                <Link to={`/blogs/post/${post._id}`} key={post._id}>
                  <components.Blogcard post={post} creator={post.creator} />
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default SingleBlogPost;
