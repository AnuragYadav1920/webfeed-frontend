import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Components from "../../Imports/Components.js"
import Pages from "../../Imports/Pages.js"
import "./home.css";

const Home = () => {
  const [showMore, setShowMore] = useState(false);
  const [query, setQuery] = useState("");
  const [openSERP, setOpenSERP] = useState(false);
  const [fetchedUsers, setFetchedUsers] = useState(null);
  const [fetchedPosts, setFetchedPosts] = useState(null);
  const style = {
    height: "80vh",
    overflow: "hidden",
  };
  if (showMore) {
    style.height = "auto";
    style.overflow = "auto";
  }

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const fetchedData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/all/search?query=${query}`,
        {
          method: "GET",
        }
      );
      const results = await response.json();
      if (results.success) {
        setFetchedUsers(results.data.channels);
        setFetchedPosts(results.data.posts);
      } else {
        console.log("failed in fetching the data");
      }
    } catch (error) {
      console.log("Eror", error);
    }
  };
  useEffect(() => {
    if (query) {
      fetchedData();
      setOpenSERP(true);
    } else {
      setOpenSERP(false);
    }
  }, [query]);
  return (
    <>
      {/* top section container */}
      <div className="home">
        <div className="home-top">
          <div className="home-top-banner-text">
            <div className="heading">
              <span>
                Discover <br />
                and create your own feeds.
              </span>
            </div>
            <div className="home-desc">
              welcome to WebFeed, where you can feed your <br /> brain with your
              search.
            </div>
            <div className="create-account-div">
              <span className="create-account-div-text">
                {" "}
                Create an account for better feeds.
              </span>
              <button className="create-account-button">
                <NavLink to="/signup">Create Account </NavLink>
              </button>
            </div>
            <div className="home-explore">
              <div className="home-explore-box">
                <input
                  type="text"
                  className="explore-input"
                  placeholder="search your feeds here ...................."
                  onChange={handleInputChange}
                  required
                />
                <div className="explore-button">
                  <NavLink to={query?`/search?query=${query}`:'/'}>
                    <FaSearch />
                  </NavLink>
                </div>
              </div>
              {openSERP && (
              <div className="SERP">
                <Components.SERP channels={fetchedUsers} posts={fetchedPosts} />
              </div>
            )}
            </div>
            
          </div>
        </div>

        {/* mid section container */}

        <div className="home-mid">
          <div className="home-mid-box-heading">
            <p>"Best way to predict the future is to create it."</p>
          </div>
          <div className="home-mid-developer-section">
            <p>
              <span>I've created</span> this platform where individuals or
              organizations can publish articles, opinions, or updates on
              various topics.This websites typically feature a series of posts
              displayed in reverse chronological order, with the most recent
              content appearing first.Blogs can cover a wide range of subjects,
              from personal experiences and hobbies to professional insights and
              industry news.
            </p>
          </div>
          <div className="developer">
            <div className="developer-details">
              <div className="developer-image-box">
                <img
                  src="images/photo-modified.png"
                  alt=""
                  className="developer-image"
                />
              </div>
              <div className="developer-name-and-work">
                <div className="name">Anurag Yadav</div>
                <div className="work">Creator of WebFeed</div>
              </div>
            </div>
          </div>
        </div>

        {/* testimonials */}
        <div className="testimonial" style={style}>
          <div className="testimonial-container">
            <Pages.Testimonial />
          </div>
          <div className="testimonial-button-box">
            <div className="testimonial-hide-and-open">
              <button
                className="show-more-button"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? <div>Okay, i get it</div> : <div>Show more...</div>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
