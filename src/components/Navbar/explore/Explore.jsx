import React, { useEffect, useRef , useState} from 'react';
import {Link} from "react-router-dom"
import components from "../../../exports/components"
import './explore.css';

const Explore = () => {
  const [posts, setPosts] = useState(null)
  const categories = ['Health & Fitness', 'Food & Recipes','Travel','Fashion $ Style', 'Technology & Gadgets', 'Finance & Family',  'Education & Learning', 'Lifestyle','DIY & Crafts', 'Photography', 'Gaming', 'Books & Literature', 'Music', 'Politics & Current Events', 'Entrepreneurship & Business']
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

  useEffect(()=>{
    getAllPosts()
  },[])
  return (
    <div className="explore-container" >
      {/* Left Sidebar */}
      <aside className="explore-sidebar">
        <section>
          <h3>Categories</h3>
          <ul>
            {
              categories?.map((category, index)=>(
                <li key={index}>{category}</li>
              ))
            }
          </ul>
        </section>
        <section>
          <h3>Important Links</h3>
          <ul>
            <li>Trending</li>
            <li>Top Creators</li>
            <li>Recently Uploaded</li>
            <li>Most Viewed</li>
          </ul>
        </section>
      
      </aside>

      {/* Right Content Area */}
      <main className="explore-content">
        {
          posts?.map((post, index)=>(
                <components.Blogcard post={post} key={index}/>
          ))
        }
      </main>
    </div>
  );
};

export default Explore;
