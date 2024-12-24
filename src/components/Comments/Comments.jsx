import React, { useState } from 'react'
import "./comment.css"

const Comments = ({postId}) => {
    const [allComment, setAllComments] = useState(null)

    const fetchComments = async()=>{
        try {
            const response = await fetch(`http://localhost:8000/api/v1/blogs/all-comments/${postId}`,
                {
                    method:'GET'
                }
            )
            const results = await response.json()
            if(results.success){
                setAllComments(results.data)
            }
        } catch (error) {
            console.log("Error", error)
        }
    }

  return (
    <>
        <div className='coment'>
            <div className='comment-user-avatar'>
                <img src="../images/photo-modified.png" alt="" className='comment-user-image'/>
            </div>
            <div className='comment-data'>
                <div className='comment-username'>username</div>
                <div className='comment-value'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, molestiae?</div>
            </div>
        </div>
    </>
  )
}

export default Comments