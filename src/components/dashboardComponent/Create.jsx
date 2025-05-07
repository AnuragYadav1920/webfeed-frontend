import React, { useEffect, useState } from "react";
import "./create.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {useSelector, useDispatch} from "react-redux"
 import {getToken} from "../../features/auth/authSlice"

const CreateBlogPost = () => {
  const userToken = useSelector((state)=>state.authentication.token)
  const [coverImage, setCoverImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch()

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = e.target;
      const formData = new FormData(form);
      formData.append('title',title)
      formData.append('category',category)
      formData.append('description',description)
      formData.append('postImage',coverImage)
      dispatch(getToken())

      const response = await fetch(
        `http://localhost:8000/api/v1/blog/create-post`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        alert('post created successfully')
        setCategory("");
        setCoverImage(null);
        setDescription("")
        setImagePreview(null)
        setTitle("")
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="create-post-container">
      <h2>Create a New Blog Post</h2>
      <form onSubmit={handleSubmit} className="create-post-form">
        <div className="form-group">
          <label htmlFor="coverImage">Cover Image</label>
          <input
            type="file"
            id="coverImage"
            accept="image/*"
            onChange={handleImageChange}
          />
          {imagePreview && (
            <div className="image-preview">
              <img src={imagePreview} alt="Cover Preview" />
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter blog title"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter blog category"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <ReactQuill
            value={description}
            onChange={handleDescriptionChange}
            className="description"
            modules={{
              toolbar: [
                [{ header: [1, 2, 3, false] }],
                ["bold", "italic", "underline", "strike"],
                [{ list: "ordered" }, { list: "bullet" }],
                [{ color: [] }, { background: [] }],
                [{ align: [] }],
                ["clean"],
              ],
            }}
            formats={[
              "header",
              "bold",
              "italic",
              "underline",
              "strike",
              "list",
              "bullet",
              "color",
              "background",
              "align",
            ]}
          />
        </div>

        <button type="submit" className="submit-button">
          Publish
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPost;
