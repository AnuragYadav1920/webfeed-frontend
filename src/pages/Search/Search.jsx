import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import Components from "../../Imports/Components.js"
import "./search.css";

const Search = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");
  const [allData, setAllData] = useState(null);
  const [openPost, setOpenPost] = useState(true);
  const [openChannel, setOpenChannel] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [hideLeftCircle, setHideLeftCircle] = useState(false);
  const [hideRightCircle, setHideRightCirlce] = useState(false);

  const handleChannels = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/all/search/users?query=${query}&page=${page}`,
        {
          method: "GET",
        }
      );
      const results = await response.json();
      if (results.success) {
        setAllData(results.data.channels);
        setTotalPages(results.data.totalPages);
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePosts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/all/search/blogs?query=${query}&page=${page}`,
        {
          method: "GET",
        }
      );
      const results = await response.json();
      if (results.success) {
        setAllData(results.data.post);
        setTotalPages(results.data.totalPages);
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

  const handleToggle = (value) => {
    if (value === "posts") {
      setOpenChannel(false);
      setOpenPost(true);
    } else if (value === "channels") {
      setOpenPost(false);
      setOpenChannel(true);
    }
  };
  useEffect(() => {
    if (openPost) {
      handlePosts();
    }
    if (openChannel) {
      handleChannels();
    }
    if (page === 1) {
      setHideLeftCircle(true);
      setHideRightCirlce(false);
    }
    if (page === totalPages) {
      setHideRightCirlce(true);
      setHideLeftCircle(false);
    }
  }, [page, openChannel, openPost]);
  return (
    <>
      {loading ? (
        <Components.Loader />
      ) : (
        <div className="search-container">
          <div className="result-choose">
            <div
              className="result-select-post"
              onClick={() => handleToggle("posts")}
              style={openPost ? { opacity: 1 } : { opacity: 0.3 }}
            >
              Posts
            </div>
            <div
              className="result-select-channel"
              onClick={() => handleToggle("channels")}
              style={openChannel ? { opacity: 1 } : { opacity: 0.3 }}
            >
              Channels
            </div>
          </div>
          <div className="result-view-container">
            <div className="home-blogs-page-search-blogs-and-filter-all-blogs-box">
              <div>
                {allData && allData.length > 0 ? (
                  <div className="home-blogs-page-search-blogs-and-filter-all-blogs">
                    {openPost ? (
                      <>
                        {allData.map((data, index) => (
                          <NavLink to={`/posts/${data._id}`} key={index}>
                            <Components.BlogCard blogdata={data} />
                          </NavLink>
                        ))}
                      </>
                    ) : (
                      <>
                        {allData.map((data, index) => (
                          <Components.Channel channelData={data} key={index} />
                        ))}
                      </>
                    )}
                  </div>
                ) : (
                  <div className="no-results-found">
                    {openPost ? "No post found !" : "No channel found !"}
                  </div>
                )}
              </div>
            </div>
            <div
              className="home-blogs-page-search-blogs-and-filter-all-blogs-pagination"
              style={
                allData && allData.length > 0 && totalPages > 1
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
      )}
    </>
  );
};

export default Search;
