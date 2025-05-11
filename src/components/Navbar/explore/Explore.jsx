import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import components from "../../../exports/components";
import "./explore.css";

const Explore = ({ closeComponent }) => {
  const [posts, setPosts] = useState(null);
  const [creators, setCreators] = useState(null);
  const [exploreType, setExploreType] = useState("trending");
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
        setPosts(data["posts"]);
        console.log(data["msg"]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getCreators = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/user/creators`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const data = await response.json();
        setCreators(data.channels);
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreators = () => {
    getCreators();
    setExploreType("creators");
    console.log(creators);
  };

  const handleTrending = () => {
    getAllPosts();
    setExploreType("trending");
  };

  const handlePopular = () => {
    getAllPosts();
    setExploreType("popular");
  };

  useEffect(() => {
    getAllPosts();
  }, [exploreType]);
  return (
    <div className="explore-container">
      <div className="explore-bar ">
        <span className="explore-item" onClick={handleTrending}>
          Trending
        </span>
        <span className="explore-item" onClick={handlePopular}>
          Popular
        </span>
        <span className="explore-item" onClick={handleCreators}>
          Top Creators
        </span>
      </div>
      {/* Right Content Area */}
      <main className="explore-content">
        {exploreType === "popular" || exploreType === "trending"
          ? posts?.map((post, index) => (
              <Link to={`/blogs/post/${post?._id}`} onClick={() => closeComponent()}>
                <components.Blogcard
                  post={post}
                  key={index}
                  creator={post["creator"]}                 
                />
              </Link>
            ))
          : creators?.map((creator, index) => (
              <components.ChannelCard
                creator={creator}
                key={index}
                closeComponent={closeComponent}
              />
            ))}
      </main>
    </div>
  );
};

export default Explore;
