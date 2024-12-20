import React, { useContext, useState } from "react";
import "./create.css";
import { Editor } from "@tinymce/tinymce-react";
import { FaImage } from "react-icons/fa";
import UserContext from "../../context/UserContext.js";

const Create = () => {
  const { setNotification } = useContext(UserContext);
  const [description, setDescription] = useState('');
  const uploadBlog = async (formData) => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/blogs/create-post",
        {
          method: "POST",
          credentials: "include",
          body: formData,
        }
      );
      const results = await response.json();
      if (results.success) {
        setNotification({
          value: true,
          message: results.message,
        });
      } else {
        setNotification({
          value: true,
          message: "Failed to create the post",
        });
      }
      console.log("Success", results);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleEditorChange = (content) =>{
    setDescription(content)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    formData.append('description', description);
    uploadBlog(formData);
  };
 
  return (
    <>
      <div className="create">
        <div className="create-container">
          <div className="create-post-heading">Create Post</div>
          <form onSubmit={handleSubmit}>
            <div className="create-container-box">
              <div className="create-container-box-div">
                <span className="label">Post Image :</span>
                <label htmlFor="postImage" className="image-select-box">
                  <div className="select-image-text">
                    Drag & drop file <br /> or Browse media on your device
                  </div>
                  <input type="file" id="postImage" name="postImage" />
                </label>
              </div>
              <div className="create-container-box-div">
                <label htmlFor="title" className="label">
                  Title :
                </label>
                <input type="text" className="input" id="title" name="title" />
              </div>
              <div className="create-container-box-div">
                <label htmlFor="category" className="label">
                  Category :
                </label>
                <input
                  type="text"
                  className="input"
                  id="category"
                  name="category"
                />
              </div>
              <div className="create-container-box-div">
                <label htmlFor="description" className="label">
                  Description :
                </label>
                <Editor
                  apiKey="ohp4ov019r6eyogxlr8ven1texhu4xrav9rnb0vr36ee7kz1"
                  name='description'
                  id="description"
                  onEditorChange={handleEditorChange}
                  init={{                   
                    height: 400,
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
              <div className="post-submit-div">
                <button className="post-submit-button" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
