import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"
import "./posts.css"
const Posts = () => {
  const [posts, setPosts] = useState(null)

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
    <div className='post-container'>
      <table className='posts-table'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody >
          {posts?.map((post, index)=> (
            <tr key={index}>
              <td>{post.title}</td>
              <td>{post.date}</td>
              <td>
                <button className='edit-btn'><Link to={`/dashboard/posts/update-post/123`}>Edit</Link></button>
                <button className='delete-btn'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Posts;
