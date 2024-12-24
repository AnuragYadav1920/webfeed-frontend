import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Components from "../../Imports/Components.js";
import "./blogs.css";

const PostsPage = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [totalPages, setTotalPages] = useState(0);

  const getAllPosts = async () => {
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
    }
  };

  const handleFilterChange = (value) => {
    setQuery(value);
  };
  const handlePagination = (value) => {
    setPage(value);
  };

  useEffect(() => {
    getAllPosts();
  }, [page, query]);

  return (
    <>
      <div className="home-blogs-page">
        <div className="home-blogs-page-carousal">
          <Components.Carousal />
        </div>
        <div className="home-blogs-page-search-blogs-and-filter">
          <div className="home-blogs-page-search-blogs-and-filter-box">
            <Components.Filter filterChange={handleFilterChange} />
          </div>
          <div className="home-blogs-page-search-blogs-and-filter-all-blogs-box">
            <div>
              {allPosts && allPosts.length > 0 ? (
                <div className="home-blogs-page-search-blogs-and-filter-all-blogs">
                  {allPosts.map((post, index) => (
                    <NavLink to={`/posts/${post._id}`} key={index}>
                      <Components.BlogCard blogdata={post} />
                    </NavLink>
                  ))}
                </div>
              ) : (
                <div className="no-post-found">No post found !!!</div>
              )}
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
    </>
  );
};

export default PostsPage;
