import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ReactPaginate from "react-paginate";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import components from "../../exports/components";
import "./blogspage.css";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const blogsPerPage = 8;

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/blog/get-all-posts");
        const data = await response.json();
        if (response.ok) {
          setPosts(data.posts || []);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllPosts();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredBlogs(posts.filter((post) => post.category === selectedCategory));
    } else {
      setFilteredBlogs(posts);
    }
    setCurrentPage(0);
  }, [selectedCategory, posts]);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * blogsPerPage;
  const currentBlogs = filteredBlogs.slice(offset, offset + blogsPerPage);
  const pageCount = Math.ceil(filteredBlogs.length / blogsPerPage);
  const categories = [...new Set(posts.map((post) => post.category))];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  // You need to define featuredPosts or fallback to latest few posts
  const featuredPosts = posts.slice(0, 3); // Adjust as needed

  return (
    <div className="blog-page">
      {/* Carousel */}
      <Slider {...carouselSettings}>
        {featuredPosts.map((post, index) => (
          <div key={index} className="carousel-slide">
            <img src={post.postImage} alt={post.title} className="carousel-image" />
            <div className="carousel-caption">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Filter */}
      <div className="filter-container">
        <label htmlFor="category-filter">Filter by Category:</label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Blog Posts */}
      <div className="blogs-list">
        {currentBlogs.map((post, index) => (
          <Link to={`post/${post._id}`} key={index}>
            <components.Blogcard post={post} creator={post.creator} />
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default BlogPage;

