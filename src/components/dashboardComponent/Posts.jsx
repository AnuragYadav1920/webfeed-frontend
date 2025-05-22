import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../features/user/userSlice';
import { getToken } from '../../features/auth/authSlice';
import {Link} from "react-router-dom"
import "./posts.css"
const Posts = () => {
  const userDetails = useSelector((state)=>state.userLoggedIn.data)
  const userToken = useSelector((state)=>state.authentication.token)

  const [posts, setPosts] = useState(null)
  const dispatch = useDispatch()

  const getAllPosts = async()=>{
    try {
      const response = await fetch(`http://localhost:8000/api/v1/blog/get-creator-posts`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({'userId':userDetails?._id})
      })
      const data = await response.json()
      if(response.ok){
        setPosts(data['posts'])
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeletePost = async(postId)=>{
    try {
      const response = await fetch(`http://localhost:8000/api/v1/blog/delete-post`,{
        method:'POST',
        headers:{
          Authorization: `Bearer ${userToken}`,
          'Content-Type':'application/json'
        },
        body:JSON.stringify({'postId':postId})
      })
      if(response.ok){
        const data = await response.json();
        alert(data['msg']);
        getAllPosts()
      }else{
        alert('failed to delete the post')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    dispatch(getUser())
    dispatch(getToken())
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
                <button className='edit-btn'><Link to={`/dashboard/posts/update-post/${post?._id}`}>Edit</Link></button>
                <button className='delete-btn' onClick={()=>handleDeletePost(post?._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Posts;
