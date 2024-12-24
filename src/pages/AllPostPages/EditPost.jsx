import React, { useEffect, useState, useContext } from "react";
import {NavLink, useParams} from 'react-router-dom'
import { Editor } from "@tinymce/tinymce-react";
import UserContext from '../../context/UserContext.js'
import Components from "../../Imports/Components.js"
import "./blogs.css";

const EditPost = () => {
  const {postId} = useParams()
  const [loading, setLoading] = useState(false)
  const [postDetails, setPostDetails] = useState(null);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('')

  const getPostData = async() =>{
    setLoading(true)
    try {
      const response = await fetch(`http://localhost:8000/api/v1/blogs/get-blog/${postId}`,{
        method:'GET'
      })
      const results = await response.json();
      if(results.success){
        setPostDetails(results.data)
        setTitle(results.data.title)
        setCategory(results.data.category)
        setDescription(results.data.description)
      }else{
        console.log(results.message)
      }
    } catch (error) {
      console.log("Error", error)
    }finally{
      setLoading(false)
    }
  }

  const UpdatePostImage = async(formData) =>{
    setLoading(true)
    try {
      const response = await fetch(`http://localhost:8000/api/v1/blogs//update-post-image/${postId}`,
        {
          method:'PATCH',
          credentials:'include',
          body: formData
        }
      )
      const results = await response.json()
      if(results.success){
        setPostDetails(results.data)
       alert("Post updated successfully")
      }else{
        alert("failed to update the post")
      }
    } catch (error) {
      console.log('Error', error)
    }finally{
      setLoading(false)
    }
  }

  const UpdatePostDetails = async(data) =>{
    setLoading(true)
    try {
        const response = await fetch(`http://localhost:8000/api/v1/blogs/update-post/${postId}`,{
            method:'PATCH',
            headers:{
                "Content-Type": "application/json"
            },
            credentials:'include',
            body:JSON.stringify(data)
        });
        const results = await response.json()
        if(results.success){
            setPostDetails(results.data)
            alert("Post Updated successfully")
        }
    } catch (error) {
        console.log("Error", error);
        alert("failed to update the post")
    }finally{
      setLoading(false)
    }
    
}

  const handleImageSubmit = (e) => {
    e.preventDefault();
    const form = e.target
    const formData = new FormData(form)
    UpdatePostImage(formData)
  };

  const handleTitleSubmit = () =>{
    const data = {'title': title}
    console.log(data)
    UpdatePostDetails(data)
  }

  const handleCategorySubmit = () =>{
    const data = {'category': category}
    console.log(data)
    UpdatePostDetails(data)
  }

  const handleDescriptionSubmit = ()=>{
    const data = {'description':description}
    console.log(data)
    UpdatePostDetails(data);
  }
  const handleTitleChange = (e)=>{
    setTitle(e.target.value)
  }
  const handleCategoryChange = (e)=>{
    setCategory(e.target.value)
  }
  const handleEditorChange = (content) =>{
    setDescription(content)
  }

  useEffect(()=>{
    getPostData()
  },[])
  return (
    <>
    {
      loading?<Components.Loader/>:
      <div className="edit-post-container">
      <div className="edit-post-container-top">
        <div className="edit-post-container-left">
          <div className="edit-post-container-left-image-prev">
            <img
              src={postDetails?.postImage}
              alt="postImage"
              className="edit-post-curr-post-image"
            />
          </div>
          <div className="edit-post-container-left-image-form">
            <form onSubmit={handleImageSubmit} >
              <div className="edit-post-image-input">
              <label htmlFor="postImage" >
                <input type="file" name='postImage' id="postImage" className="post-image-input" />
                <div className="edit-image-post-button">Edit</div>
              </label>
              <button className="edit-image-post-button" type="submit">Save</button>
              </div>
            </form>
          </div>
          
        </div>
        <div className="edit-post-container-right">
          <div >
              <div className="edit-post-input-form">
              <div className="edit-post-input-div">
                <label htmlFor="title" className="edit-post-label">Title </label>
              </div>
              <div className="edit-post-input-save-div">
                <input type="text" name='title' id="title" className="edit-post-input" placeholder="enter the title" value={title} onChange={handleTitleChange} />
                <button  className="edit-post-submit" onClick={handleTitleSubmit}>Save</button>
              </div>
              </div>
          </div>
          <div>
            <div className="edit-post-input-form">
              <div className="edit-post-input-div">
                <label htmlFor="category" className="edit-post-label">Category </label>
              </div>
              <div className="edit-post-input-save-div">
                <input
                  type="text"
                  id="category"
                  name="category"
                  placeholder="enter the category"
                  className="edit-post-input"
                  value={category} onChange={handleCategoryChange}
                />
                <button  className="edit-post-submit" onClick={handleCategorySubmit}>Save</button>
              </div>
              </div>
          </div>
          <div className="edit-post-description-div">
            <div className="edit-post-input-div">
              <label htmlFor="description" className="edit-post-label">Description</label>
            </div>
            <div className="edit-post-desc">
              <Editor
                apiKey="ohp4ov019r6eyogxlr8ven1texhu4xrav9rnb0vr36ee7kz1"
                name="description"
                id="description"
                value={description}
                onEditorChange={handleEditorChange}
                init={{
                  min_height:400,
                  menubar: true,
                  // plugins: [
                  //   "advlist autolink lists link image charmap preview anchor",
                  //   "searchreplace visualblocks code fullscreen",
                  //   "insertdatetime media table paste code help wordcount",
                  // ],
                  toolbar:
                    "undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | " +
                    "bullist numlist outdent indent | link image | preview code | help",
                }}
              />
            </div>
            <div  className="edit-post-submit-desc" onClick={handleDescriptionSubmit}>
                Save
              </div>
          </div>
        </div>
      </div>
      <div className="edit-post-container-bottom">
        <NavLink to='/my-profile'>Close</NavLink>
      </div>
     </div>
       }
    </>
  );
};

export default EditPost;
