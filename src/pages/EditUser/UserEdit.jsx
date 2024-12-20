import React, { useState, useContext } from "react";
import "./edituser.css";
import { MdEdit } from "react-icons/md";
import EditDetailBox from "../../components/EditDetailBox/EditDetailBox";
import UserContext from "../../context/UserContext.js";
import ChooseProfileAndCoverImage from "../../components/Profile&CoverImage/Profile_Cover_Image.jsx"

const UserEdit = () => {
  const { user,openComponents, setOpenComponents } = useContext(UserContext);
  const [openProfile, setOpenProfile] = useState(false);
  const [openCoverImage, setOpenCoverImage] = useState(false)

  const handleComponents = (tabName) =>{
    setOpenComponents(openComponents.map(component=>({
      ...component,
      isOpen:component.id === tabName?!component.isOpen:false
    })))
}


  return (
    <>
      <div className="edit-user-detail-container">
      {
                openComponents[3].isOpen && (
                    <div className='profile-cover-Image-container' >
                        <ChooseProfileAndCoverImage name={"Cover Image"} />
                    </div>
                )
            }

            {
                openComponents[2].isOpen && (
                    <div className='profile-cover-Image-container' >
                        <ChooseProfileAndCoverImage name={"Profile Photo"} />
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
                <button className="profile-cover-button" onClick={()=>handleComponents("profileImage")}>Edit Profile Image</button>
                <button className="profile-cover-button" onClick={()=>handleComponents("coverImage")}>Edit Cover Image</button>
              </div>
            </div>
          </div>
          <div className="edit-fields">
            <EditDetailBox dataKey={"username"} />
            <EditDetailBox dataKey={"fullName"} />
            <EditDetailBox dataKey={"email"} />
            <EditDetailBox dataKey={"instagram"} />
            <EditDetailBox dataKey={"facebook"} />
            <EditDetailBox dataKey={"linkedin"} />
            <EditDetailBox dataKey={"website"} />
            <EditDetailBox dataKey={"about"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserEdit;
