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
      <div className='explore-bar '>
        <span className='explore-item'>Trending</span>
        <span className='explore-item'>Popular</span>
        <span className='explore-item'>Top Creators</span>
      </div>
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
