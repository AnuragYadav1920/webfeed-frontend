import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../features/auth/authSlice";
import "./updatepost.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const UpdatePost = () => {
  const userToken = useSelector((state) => state.authentication.token);
  const [coverImage, setCoverImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchPostDetails = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/blog/get-singlepost`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ postId: id }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        setTitle(data.post.title);
        setCategory(data.post.category);
        setDescription(data.post.description);
        setImagePreview(data.post.postImage);
        setCoverImage(data.post.postImage);
      }
    } catch (error) {
      console.log(error);
    }
  };
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
      formData.append("title", title);
      formData.append("category", category);
      formData.append("description", description);
      formData.append("postImage", coverImage);
      formData.append("postId", id);

      const response = await fetch(
        `http://localhost:8000/api/v1/blog/update-post-details`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        alert("post updated successfully");
        setCategory("");
        setCoverImage(null);
        setDescription("");
        setImagePreview(null);
        setTitle("");
        navigate("/dashboard/posts");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(getToken);
    fetchPostDetails();
  }, []);

  return (
    <div className="create-post-container">
      <h2>Edit Your Blog Post</h2>
      <form onSubmit={handleSubmit} className="create-post-form">
        <div className="form-group">
          <label htmlFor="coverImage">Image</label>
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
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UpdatePost;
