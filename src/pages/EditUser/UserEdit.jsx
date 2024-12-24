import React, { useState, useContext } from "react";
import UserContext from "../../context/UserContext.js";
import Components from "../../Imports/Components.js"
import "./edituser.css";

const UserEdit = () => {
  const { user} = useContext(UserContext);
  const [openProfile, setOpenProfile] = useState(false)
  const [openCoverImage, setOpenCoverImage] = useState(false)

  const handleProfileCover = (value) =>{
    if(value==="profile"){
      setOpenProfile(true)
      setOpenCoverImage(false)
    }else{
      setOpenCoverImage(true)
      setOpenProfile(false)
    }
  }
  return (
    <>
      <div className="edit-user-detail-container">
      {
                openCoverImage && (
                    <div className='profile-cover-Image-container' >
                        <Components.ChooseProfileAndCoverImage name={"Cover Image"} onClick={()=>setOpenCoverImage(false)} />
                    </div>
                )
            }

            {
                openProfile&& (
                    <div className='profile-cover-Image-container' >
                        <Components.ChooseProfileAndCoverImage name={"Profile Photo"} onClick={()=>setOpenProfile(false)}/>
                    </div>
                    
                )
            }
        <div className="edit-user-detail-container-box">
          <div className="edit-user-detail-container-box-heading">
            Edit Details
          </div>
          <div className="edit-user-images">
            <div className="edit-user-cover-image">
              <img
                src={user?.coverImage}
                alt="cover-Image"
                className="edit-cover-image"
              />
            </div>
            <div className="edit-user-profile-image">
              <div className="edit-user-profile-image-box">
                <img
                  src={user?.avatar}
                  alt="profile-photo"
                  className="edit-profile-image"
                />
              </div>
            </div>
            <div className="edit-user-images-button">
              <div className="edit-user-images-button-inner-div">
                <button className="profile-cover-button" onClick={()=>handleProfileCover("profile")}>Edit Profile Image</button>
                <button className="profile-cover-button" onClick={()=>handleProfileCover("cover")}>Edit Cover Image</button>
              </div>
            </div>
          </div>
          <div className="edit-fields">
            <Components.EditDetailBox dataKey={"username"} />
            <Components.EditDetailBox dataKey={"fullName"} />
            <Components.EditDetailBox dataKey={"email"} />
            <Components.EditDetailBox dataKey={"instagram"} />
            <Components.EditDetailBox dataKey={"facebook"} />
            <Components.EditDetailBox dataKey={"linkedin"} />
            <Components.EditDetailBox dataKey={"website"} />
            <Components.EditDetailBox dataKey={"about"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserEdit;
