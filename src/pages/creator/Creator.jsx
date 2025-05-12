
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./creator.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import components from "../../exports/components"
import { getToken } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";


const CreatorChannelPage = () => {
  const userToken = useSelector((state)=>state.authentication.token)
  const {username} = useParams();
  const [posts, setPosts] = useState(null)
  const [creator, setCreator] = useState(null)
  const [subscribers, setSubscribers] = useState(0)
  const [alreadySubscribed, setAlreadySubscribed] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(posts);
  const [currentPage, setCurrentPage] = useState(0);
  const blogsPerPage = 5;
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const getCreator = async()=>{
    try {
      const response = await fetch(`http://localhost:8000/api/v1/blog/get-creator`,{
        method:"POST",
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify({
          'username':username
        })
      })
      if(response.ok){
        const data = await response.json()
        setPosts(data['posts'])
        setCreator(data['creator'])
        fetchTotalSubscribers()
      };

    } catch (error) {
      console.log(error)
    }
  }
  const subscribeAndUnsubscribe = async() =>{
    if(userToken){
    try {
      const response = await fetch(`http://localhost:8000/api/v1/user/subscribe-and-unsubscribe`, {
        method:'POST',
        headers:{
          Authorization: `Bearer ${userToken}`,
          'Content-Type':'application/json'
        },
        body:JSON.stringify({'channelId':creator?._id})
      })
      if(response.ok){
        const data = await response.json();
        alert(data.msg)
        fetchTotalSubscribers()
      }
    } catch (error) {
      console.log(error)
    }}else{
      navigate("/login")
    }
  }
  const fetchTotalSubscribers = async()=>{
    try {
      const response = await fetch(`http://localhost:8000/api/v1/user/get-subscribers`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({"creatorId":creator?._id})
      })
      if(response.ok){
        const data = await response.json()
        setSubscribers(data.total)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const checkSubscribed = async()=>{
    try {
      const response = await fetch(`http://localhost:8000/api/v1/user/check-subscribed`,{
        method:'POST',
        headers:{
          Authorization:`Bearer ${userToken}`,
          'Content-Type':'application/json'
        },
        body:JSON.stringify({'channelId':creator?._id})
      })
      if(response.ok){
        const data = await response.json()
        setAlreadySubscribed(data?.isSubscribed)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    dispatch(getToken())
    getCreator();
    if (selectedCategory) {
      setFilteredBlogs(
        posts.filter((post) => blog.category === selectedCategory)
      );
    } else {
      setFilteredBlogs(posts);
    }
    setCurrentPage(0);
    checkSubscribed()
  }, [subscribers]);

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
        <button className="subscribe-button" onClick={subscribeAndUnsubscribe}>{alreadySubscribed?'Following':'Follow'}</button>
        <p>
          <strong>Followers:</strong> {subscribers}
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
          <Link to={`/blogs/post/${post._id}`} key={index}>
            <components.Blogcard post ={post} creator={creator}/>
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
