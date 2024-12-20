import React, { useContext, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import UserContext from "../../context/UserContext";
import "./profile&cover.css";

const ChooseProfileAndCoverImage = ({ name }) => {
  const {user, closeAllComponents, setNotification } =
    useContext(UserContext);

  const [urlParams, setUrlParams] = useState(null);

  const handleImageChange = async (formData) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/users/${urlParams}`,
        {
          method: "PATCH",
          credentials:'include',
          body: formData,
        }
      );
      const results = await response.json();
      if (results.success) {
        localStorage.removeItem("user");
        setNotification({
          value: true,
          message: `${name} updated successfully`,
        });
        localStorage.setItem("user", JSON.stringify(results.data));
      } else {
        console.log("failed in updating the avatar");
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleSubmit = (e) => {
    console.log(urlParams)
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    handleImageChange(formData);
  };
  useEffect(() => {
    if (name === "Profile Photo") {
      setUrlParams("update-avatar");
    } else if (name === "Cover Image") {
      setUrlParams("update-coverImage");
    }
  }, [urlParams]);
  return (
    <>
      <div className="edit-profile-cover-image">
        <div className="edit-profile-cover-image-top-section">
          <div className="edit-profile-cover-image-top-section-text">
            {name}
          </div>
          <div
            className="edit-profile-cover-image-top-section-close-button"
            onClick={closeAllComponents}
          >
            <IoClose />
          </div>
        </div>
        <div className="edit-profile-cover-image-mid-section">
          <div className="edit-profile-cover-image-mid-section-preview-image" style={name==='Profile Photo'?{alignContent:'center'}:{width:'100%'}}>
            <img
              src={name==='Profile Photo'?user?.avatar : user?.coverImage}
              alt=""
              style={name==='Profile Photo'?{width:'200px', height:'200px',borderRadius:'100%', margin:'0 auto'}:{objectFit:'fill'}}
              className="profile-and-cover-Image"
            />
          </div>
        </div>
        <div className="edit-profile-cover-image-bottom-section">
          <form onSubmit={handleSubmit}>
            <div className="edit-profile-cover-image-bottom-section-left">
              <label
                htmlFor="profile-Image"
                className="edit-profile-cover-image-bottom-section-button"
              >
                <input
                  type="file"
                  id="profile-Image"
                  name={name === "Profile Photo" ? "avatar" : "coverImage"}
                  className="profile-cover-input"
                />
                Edit
              </label>
              <button
                className="edit-profile-cover-image-bottom-section-button"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
          <div className="edit-profile-cover-image-bottom-section-right">
            <div
              className="edit-profile-cover-image-bottom-section-button"
              onClick={closeAllComponents}
            >
              Delete
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseProfileAndCoverImage;
