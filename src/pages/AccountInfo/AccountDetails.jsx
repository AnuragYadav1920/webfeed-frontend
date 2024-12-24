import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../../context/UserContext.js";
import Components from "../../Imports/Components.js";
import "./accountinfo.css";

const AccountDetails = () => {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [totalPages, setTotalPages] = useState(0);

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

  const handleDeletePost = async(postId)=>{
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/blogs/delete-post/${postId}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      const results = await response.json();
      if(results.success){
        alert(results.message)
        userAllPosts()
      }else{
        alert("failed to delete the post")
      }
    } catch (error) {
      console.log("Error",error)
    }
  }

  const handleFilterChange = (value) => {
    setQuery(value);
  };

  const handlePagination = (value) => {
    setPage(value);
  };
  useEffect(() => {
    userAllPosts();
  }, [page, query, allPosts]);
  return (
    <>
      {loading ? (
        <Components.Loader />
      ) : (
        <div className="account-details ">
          <div className="account-details-user">
            {/* user info */}
            <Components.Profile userdata={user} />
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
                            <div className="user-post-edit-delete-div">
                              <button className="user-post-edit">
                                <NavLink to={`/edit-post/${post._id}`}>
                                  Edit
                                </NavLink>
                              </button>
                              <button className="user-post-delete" onClick={()=>handleDeletePost(post._id)}>
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
      )}
    </>
  );
};

export default AccountDetails;
