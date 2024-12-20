import React, { useEffect, useState, useContext } from "react";
import "./blogs.css";
import { NavLink } from "react-router-dom";
import Carousal from "../../components/Banner/Carousal.jsx";
import { FaSearch } from "react-icons/fa";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import BlogCard from "../../components/BlogCard/BlogCard.jsx";
import Loader from "../../components/Spinner/Loader.jsx";
import Filter from "../../components/Filter/Filter.jsx"

const PostsPage = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [hideLeftCircle, setHideLeftCircle] = useState(false);
  const [hideRightCircle, setHideRightCirlce] = useState(false);

  const getAllPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/blogs/get-all-posts?page=${page}&query=${query}`,
        {
          method: "GET",
        }
      );
      const results = await response.json();
      if (results.success) {
        setAllPosts(results.data.posts);
        setTotalPages(results.data.totalPages);
      } else {
        console.log("failed in fetching all posts");
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };
  const handleClick = (value) => {
    if (value === "next" && page < totalPages) {
      setPage(page + 1);
      setHideLeftCircle(false);
      setHideRightCirlce(false);
    } else if (value === "prev" && page > 1) {
      setPage(page - 1);
      setHideLeftCircle(false);
      setHideRightCirlce(false);
    }
  };
  const handleFilterChange = (value)=>{
    setQuery(value)
  }

  useEffect(() => {
    getAllPosts();
    if (page === 1) {
      setHideLeftCircle(true);
      setHideRightCirlce(false);
    }
    if (page === totalPages) {
      setHideRightCirlce(true);
      setHideLeftCircle(false);
    }
  }, [page, query]);

  return (
    <>
      <div className="home-blogs-page">
        <div className="home-blogs-page-carousal">
          <Carousal />
        </div>
          <div className="home-blogs-page-search-blogs-and-filter">
            <div className="home-blogs-page-search-blogs-and-filter-box">
              <Filter filterChange={handleFilterChange}/>
            </div>
            {loading ? (
          <Loader  />
        ) : (
            <div className="home-blogs-page-search-blogs-and-filter-all-blogs-box">
              <div>
                {allPosts && allPosts.length > 0 ? (
                  <div className="home-blogs-page-search-blogs-and-filter-all-blogs">
                    {allPosts.map((post, index) => (
                      <NavLink to={`/posts/${post._id}`} key={index}>
                        <BlogCard blogdata={post} />
                      </NavLink>
                    ))}
                  </div>
                ) : (
                  <div className="no-post-found">No post found !!!</div>
                )}
              </div>
            </div>
             )}
            <div
              className="home-blogs-page-search-blogs-and-filter-all-blogs-pagination"
              style={
                allPosts && allPosts.length > 0
                  ? { visibility: "visible" }
                  : { display: "none" }
              }
            >
              <div className="home-blogs-page-search-blogs-and-filter-all-blogs-pagination-box">
                <div
                  className="home-blogs-page-search-blogs-and-filter-all-blogs-pagination-box-prev-and-next-icon"
                  style={hideLeftCircle ? { opacity: 0.15 } : { opacity: 1 }}
                  onClick={() => handleClick("prev")}
                >
                  <CiCircleChevLeft />
                </div>
                <div className="home-blogs-page-search-blogs-and-filter-all-blogs-pagination-box-curr-page">
                  {page}
                </div>
                <div
                  className="home-blogs-page-search-blogs-and-filter-all-blogs-pagination-box-prev-and-next-icon"
                  style={hideRightCircle ? { opacity: 0.15 } : { opacity: 1 }}
                  onClick={() => handleClick("next")}
                >
                  <CiCircleChevRight />
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default PostsPage;
