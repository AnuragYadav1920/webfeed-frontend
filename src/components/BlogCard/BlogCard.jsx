import React from 'react'
import { FaHeart } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
const BlogCard = () => {
  return (
    <>
        <div className='blogCard'>
          <div className='blogCard-Image-box'>
                <img src="images/image3.jpeg" alt="" className='blogCard-Image' />           
          </div>
          <div className='blogCard-top'>
            <div className='blogCard-top-like'>
              <FaHeart className='blogCard-top-like-icon'/>
            </div>
            <div className='blogCard-top-like-total-likes'>
              <p className='blogCard-top-like-total-likes-text'>20.18k</p>
            </div>
          </div>
          <div className='blogCard-post-info'>
            <div className='blogCard-post-date'>        
                <span>3 sept</span>
            </div>
            <div className='blogCard-post-title'>
              <p>Web Development course</p>
            </div>         
        </div>
      </div>
    </> 
 )
}

export default BlogCard