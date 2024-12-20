import React, { useContext, useEffect, useState } from "react";
import "./accountinfo.css";
import Profile from "../../components/Profile/Profile.jsx";
import { NavLink } from "react-router-dom";
import BlogCard from "../../components/BlogCard/BlogCard.jsx";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import UserContext from "../../context/UserContext.js";
import Loader from "../../components/Spinner/Loader.jsx";
import Filter from "../../components/Filter/Filter.jsx";

const AccountDetails = () => {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [hideLeftCircle, setHideLeftCircle] = useState(false);
  const [hideRightCircle, setHideRightCirlce] = useState(false);

  const userAllPosts = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/blogs/get-user-blogs?page=${page}&query=${query}`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      const results = await response.json();
      if (results.success) {
        setAllPosts(results.data.posts);
        setTotalPages(results.data.totalPages);
      } else {
        console.log("failed in fetching user all posts");
      }
    } catch (error) {
      console.log("Error", error);
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
    userAllPosts();
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
      {loading ? (
        <Loader />
      ) : (
        <div className="account-details ">
          <div className="account-details-user">
            {/* user info */}
            <Profile userdata={user} />
            {/* user all posts */}
            <div className="account-details-user-posts">
              <div className="account-page-search-blogs-and-filter">
                <div className="account-page-search-blogs-and-filter-box">
                  <Filter filterChange={handleFilterChange} />
                </div>
                <div className="account-page-search-blogs-and-filter-all-blogs-box">
                  <div>
                    {allPosts && allPosts.length > 0 ? (
                      <div className="account-page-search-blogs-and-filter-all-blogs">
                        {allPosts.map((post, index) => (
                          <div className="user-post-card" key={index}>
                            <NavLink to={`/posts/${post._id}`}>
                              <BlogCard blogdata={post} />
                            </NavLink>
                            <div className="user-post-edit-delete-div">
                              <button className="user-post-edit">
                                <NavLink to={`/edit-post/${post._id}`}>
                                  Edit
                                </NavLink>
                              </button>
                              <button className="user-post-delete">
                                Delete
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="no-post-found">No post found !!!!</div>
                    )}
                  </div>
                </div>
                <div
                  className="account-page-search-blogs-and-filter-all-blogs-pagination"
                  style={
                    allPosts && allPosts.length > 0 && totalPages > 1
                      ? { visibility: "visible" }
                      : { display: "none" }
                  }
                >
                  <div className="account-page-search-blogs-and-filter-all-blogs-pagination-box">
                    <div
                      className="account-page-search-blogs-and-filter-all-blogs-pagination-box-prev-and-next-icon"
                      style={
                        hideLeftCircle ? { opacity: 0.15 } : { opacity: 1 }
                      }
                      onClick={() => handleClick("prev")}
                    >
                      <CiCircleChevLeft />
                    </div>
                    <div className="account-page-search-blogs-and-filter-all-blogs-pagination-box-curr-page">
                      {page}
                    </div>
                    <div
                      className="account-page-search-blogs-and-filter-all-blogs-pagination-box-prev-and-next-icon"
                      style={
                        hideRightCircle ? { opacity: 0.15 } : { opacity: 1 }
                      }
                      onClick={() => handleClick("next")}
                    >
                      <CiCircleChevRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccountDetails;
