import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Components from "../../Imports/Components.js";
import "./channel.css";

const Channel = () => {
  const { channelName } = useParams();
  const [userloading, setUserLoading] = useState(false);
  const [postloading, setPostLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [allPosts, setAllPosts] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [totalPages, setTotalPages] = useState(0);

  const channelDetails = async () => {
    setUserLoading(true);
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/users/get-user-channel/${channelName}`,
        {
          method: "GET",
        }
      );
      const results = await response.json();
      if (results.success) {
        setUser(results.data);
        channelAllPosts(results.data._id);
      } else {
        console.log("failed to fetch the user details");
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      setUserLoading(false);
    }
  };

  const channelAllPosts = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/blogs/get-channel-blogs/${userId}?page=${page}&query=${query}`,
        {
          method: "GET",
        }
      );
      const results = await response.json();
      if (results.success) {
        setAllPosts(results.data.post);
        setTotalPages(results.data.totalPages);
      } else {
        console.log("failed in fetching user all posts");
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleFilterChange = (value) => {
    setQuery(value);
  };

  const handlePagination = (value) => {
    setPage(value);
  };

  useEffect(() => {
    if (!query) {
      channelDetails();
    } else {
      channelAllPosts(user?._id);
      setUserLoading(false);
    }
  }, [page, query]);
  return (
    <>
      <div className="account-details ">
        <div className="account-details-user">
          {/* user info */}
          {userloading ? (
            <Components.Loader />
          ) : (
            <Components.Profile userdata={user} />
          )}
          {/* user all posts */}
          <div className="account-details-user-posts">
            <div className="account-page-search-blogs-and-filter">
              <div className="account-page-search-blogs-and-filter-box">
                <Components.Filter filterChange={handleFilterChange} />
              </div>
              <div className="account-page-search-blogs-and-filter-all-blogs-box">
                <div>
                  {allPosts && allPosts.length > 0 ? (
                    <div className="account-page-search-blogs-and-filter-all-blogs">
                      {allPosts.map((post, index) => (
                        <div className="user-post-card" key={index}>
                          <NavLink to={`/posts/${post._id}`}>
                            <Components.BlogCard blogdata={post} />
                          </NavLink>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="no-post-found">No post found !!!!</div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {totalPages > 1 && (
            <div>
              <Components.Pagination
                changePage={handlePagination}
                totalPages={totalPages}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Channel;
