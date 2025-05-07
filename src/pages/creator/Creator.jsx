
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./creator.css";
import { Link, useParams } from "react-router-dom";
import components from "../../exports/components"


const CreatorChannelPage = () => {
  const [creator, setCreator] = useState(null);
  const {id} = useParams();
  const [posts, setPosts] = useState(null)

  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(posts);
  const [currentPage, setCurrentPage] = useState(0);
  const blogsPerPage = 5;


  const getCreator = async()=>{
    try {
      const response = await fetch(`http://localhost:8000/api/v1/user/get-creator`,{
        method:'POST',
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify({
          'userId':id
        })
      })
      if(response.ok){
        const data = await response.json();
        setCreator(data['user'])
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getCreatorPosts = async()=>{
    try {
      const response = await fetch(`http://localhost:8000/api/v1/blog/get-creator-posts`,{
        method:"POST",
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify({
          'userId':id
        })
      })
      if(response.ok){
        const data = await response.json()
        setPosts(data['posts'])
      };

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCreator();
    getCreatorPosts();
    if (selectedCategory) {
      setFilteredBlogs(
        posts.filter((post) => blog.category === selectedCategory)
      );
    } else {
      setFilteredBlogs(posts);
    }
    setCurrentPage(0);
  }, [selectedCategory, posts]);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * blogsPerPage;
  const currentBlogs = filteredBlogs?.slice(offset, offset + blogsPerPage);
  const pageCount = Math.ceil(filteredBlogs?.length / blogsPerPage);
  const categories = [...new Set(posts?.map((post) => post.category))];

  return (
    <div className="creator-channel-page">
      {/* Cover Image */}
      <div
        className="cover-image"
        style={{ backgroundImage: `url(${creator?.cover})` }}
      >
        <div className="avatar-container">
          <img src={creator?.avatar} alt="creator-image" className="avatar" />
        </div>
      </div>

      {/* Creator Info */}
      <div className="creator-info">
        <h2>{creator?.fullName}</h2>
        <p>{creator?.about}</p>
        <p>
          <strong>Profession:</strong> {creator?.occupation}
        </p>
        <p>
          <strong>Contact Info:</strong> {creator?.email}
        </p>
        <p>
          <strong>Location:</strong> {creator?.location}
        </p>
        <button className="subscribe-button">Follow</button>
        <p>
          <strong>Followers:</strong> 112
        </p>
      </div>

      {/* Filter */}
      <div className="filter-container">
        <label htmlFor="category-filter">Filter by Category:</label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All</option>
          {categories?.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Blogs List */}
      <div className="blogs-list">
        {posts?.map((post, index) => (
          <Link to="/blogpost" key={index}>
            <components.Blogcard post ={post}/>
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

export default CreatorChannelPage;
