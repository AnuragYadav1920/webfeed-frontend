import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
const BlogCard = () => {
  return (
    <>
        <div className='blogCard'>
              <img src="images/image3.jpeg" alt="" className='blogCard-Image' /> 
            <div className='blogCard-desc '>
                <div className='blogCard-desc-top'>
                    <div className='blogCard-desc-top-like-icon'><FaHeart/></div>
                    <div className='blogCard-desc-top-total-likes'>100k</div>
                </div>
                <div className='blogCard-desc-mid'>
                    <FaExternalLinkAlt/>
                </div>
                <div className='blogCard-desc-bottom'>Web Development </div>
            </div>                     
      </div>
    </> 
 )
}

export default BlogCard