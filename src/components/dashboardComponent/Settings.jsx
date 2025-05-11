import React, { useState, useCallback, useEffect } from "react";
import "./settings.css";
import components from "../../exports/components";
import { useSelector, useDispatch } from "react-redux";
import {getToken} from "../../features/auth/authSlice"
import {getUser, setUser, deleteUser} from "../../features/user/userSlice"

const Settings = () => {
  const userToken = useSelector((state)=>state.authentication.token)
  const userDetails = useSelector((state)=>state.userLoggedIn.data)
  const [openEditBox, setOpenEditBox] = useState(null);
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch()
  const toggleEditBox = (editBox) => {
    setOpenEditBox((prev) => (prev === editBox ? null : editBox));
  };

  const handleUpdate = async (field) => {
    if (!value) {
      setMessage("Please provide a value.");
      return;
    }
  
    const formData = new FormData();
  
    if (field === "avatar" || field === "cover") {
      // Ensure 'value' is a File object
      if (value instanceof File) {
        formData.append(field, value);
      } else {
        setMessage("Please select a valid file.");
        return;
      }
    } else {
      // For text fields like 'fullName' or 'password'
      formData.append(field, value);
    }
  
    try {
      const response = await fetch("http://localhost:8000/api/v1/user/update-profile", {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error("Failed to update");
      }
  
      const result = await response.json();
      alert("profile updated successfully")
      setMessage(result.msg || "Update successful!");
      dispatch(deleteUser())
      dispatch(setUser(result.user))
      toggleEditBox(null);
      setMessage("")
      setValue("")
    } catch (error) {
      setMessage(error.message || "An error occurred");
    }
  };

  useEffect(()=>{
    dispatch(getToken())
    dispatch(getUser())
  },[userToken])

  return (
    <div className="settings-container">
      {/* Left Column: User Details */}
      <div className="settings-details">
        <div className="cover-image">
          <img
            src={userDetails?.cover}
            alt="Cover"
          />
        </div>
        <div className="avatar-section">
          <img
            src={userDetails?.avatar}
            alt="Avatar"
            className="avatar"
          />
        </div>
        <div className="user-info">
          <h2>{userDetails?.username}</h2>
          <p>
            <strong>Full Name:</strong>{userDetails?.fullName}
          </p>
          <p>
            <strong>Email:</strong> {userDetails?.email}
          </p>
          <p>
            <strong>Phone No:</strong> {userDetails?.phone}
          </p>
          <p>
          <strong>Profession:</strong> {userDetails?.occupation}
          </p>
          <p>
          <strong>Location:</strong> {userDetails?.location}
          </p>
          <p>
            <strong>About:</strong> {userDetails?.about}
          </p>
        </div>
      </div>

      {/* Right Column: Action Buttons */}
      <div className="settings-actions">
        {[
          "cover",
          "avatar",
          "fullName",
          "password",
          "location",
          "occupation",
          "about",
        ].map((field) => (
          <div key={field}>
            <button
              className={`btn update-${field} btn-${field}`}
              onClick={() => toggleEditBox(field)}
            >
              Update {field.charAt(0).toUpperCase() + field.slice(1)}
            </button>
            {openEditBox === field && (
              <components.UpdateUser
                label={`Update ${
                  field.charAt(0).toUpperCase() + field.slice(1)
                }`}
                fieldName={field}
                value={value}
                setValue={setValue}
                handleUpdate={()=>handleUpdate(field)}
                message={message}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;
