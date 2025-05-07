// BlogPage.js
import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import Slider from "react-slick";
import ReactPaginate from "react-paginate";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import components from "../../exports/components"
import "./blogspage.css";


const BlogPage = () => {
  const [posts, setPosts] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 8;

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
    getAllPosts()
    if (selectedCategory) {
      setFilteredPosts(
        posts?.filter((post) => post.category === selectedCategory)
      );
    } else {
      setFilteredPosts(posts);
    }
    setCurrentPage(0);
  }, [selectedCategory]);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * postsPerPage;
  const currentPosts = filteredPosts?.slice(offset, offset + postsPerPage);
  const pageCount = Math.ceil(filteredPosts?.length / postsPerPage);
  const categories = [...new Set(posts?.map((post) => post.category))];
  const featuredPosts = posts?.slice(0, 5); // Adjust as needed

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="blog-page">
      {/* Carousel */}
      <Slider {...carouselSettings}>
        {featuredPosts?.map((post, index) => (
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
          {categories?.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Blog Posts */}
      <div className="blogs-list">
        {currentPosts?.map((post,index) => (
          <Link to={`post/${post._id}`} key={index}>
          <components.Blogcard post={post}/>
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
