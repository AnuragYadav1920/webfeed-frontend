import React, { useEffect, useState } from "react";
import "./blogpost.css";
import components from "../../exports/components";
import { Link, useParams } from "react-router-dom";

const SingleBlogPost = () => {
  const [post, setPost] = useState(null);
  const [posts, setPosts] =useState(null)
  const { id } = useParams();
  const [postId, setPostId] = useState(id)

  const getPostDetails = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/v1/blog/get-singlepost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postId: postId }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch post details");
      }

      const data = await response.json();
      setPost(data.post);
    } catch (error) {
      console.error("Error fetching post details:", error);
    }
  };

  const getAllPosts = async()=>{
    try {
      const response = await fetch(`http://localhost:8000/api/v1/blog/get-all-posts`,{
        method:'GET'
      })
      const data = await response.json()
      if(response.ok){
        setPosts(data['posts'])
        console.log(data['msg'])
      }
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getPostDetails();
    getAllPosts()
  }, [id, postId]);
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
              <span className="blog-post-likes">❤️ {200}</span>
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
                    <Link to={`/creator/${post?.creator?._id}`}>View Channel</Link>
                  </button>
                </div>
              </div>
              <p className="blog-post-description">
                {post?.description}
              </p>
            </div>
          </div>
          <aside className="recommended-posts">
            <h3>Recommended Posts</h3>
            <div className="recommended-posts-grid">
              {posts?.map((post, index) => (
                <div onClick={()=>setPostId(post?.id)} key={index}>
                  <components.Blogcard post={post}/>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default SingleBlogPost;
