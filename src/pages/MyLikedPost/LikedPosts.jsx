import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Components from "../../Imports/Components.js"
import './myLikedPosts.css'

const LikedPosts = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchLikedPost = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/blogs/get-my-liked-post`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      const results = await response.json();
      if (results.success) {
        const postsData = [];
        for (let i = 0; i < results.data.length; i++) {
          const postData = await fetchPostData(results.data[i].blog);
          postsData.push(postData)
        }
        setBlogPosts(postsData)
      }
    } catch (error) {
        console.log("Error", error);
      }finally {
        setLoading(false)
      }
  };

  const fetchPostData = async (postId) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/blogs/get-blog/${postId}`,
        {
          method: "GET",
        }
      );
      const results = await response.json();
      if (results.success) {
        return results.data;
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
  useState(() => {
    fetchLikedPost();
  },[]);
  return (
    <>
      {loading ? (
        <Components.Loader />
      ) : (
        <div className="my-liked-posts">
          {blogPosts.length > 0 ?
            blogPosts.map((blogdata, index) => (
              <NavLink to={`/posts/${blogdata._id}`} key={index} >
                <Components.BlogCard blogdata={blogdata} />
              </NavLink>  
              )):
              "No Post Found"
        }
        </div>
      )}
    </>
  );
};

export default LikedPosts;
