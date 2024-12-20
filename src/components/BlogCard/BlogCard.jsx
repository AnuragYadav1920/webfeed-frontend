import React from 'react'
import './blogCard.css'
const BlogCard = ({blogdata}) => {
  return (
    <>
        <div className='blogCard'>
              <img src={blogdata.postImage} alt="postImage" className='blogCard-Image' />           
              <div className='blogCard-desc'>{blogdata.title}</div>                
      </div>
    </> 
 )
}

export default BlogCard