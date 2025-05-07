import React, { useState } from 'react';
import './settings.css';
import components from '../../exports/components';
import UpdateImage from './UpdateImage';

const Settings = () => {
  const [openEditBox, setOpenEditBox] = useState(null);

  const toggleEditBox = (editBox) =>{
    setOpenEditBox((prev)=>(prev===editBox?null: editBox))
  }
  return (
    <div className="settings-container">
      {/* Left Column: User Details */}
      <div className="settings-details">
        <div className="cover-image">
          <img src="https://images.pexels.com/photos/1323206/pexels-photo-1323206.jpeg?cs=srgb&dl=pexels-mixu-513809-1323206.jpg&fm=jpg" alt="Cover" />
        </div>
        <div className="avatar-section">
          <img src="https://img.freepik.com/free-photo/beautiful-girl-stands-park_8353-5084.jpg?semt=ais_hybrid&w=740" alt="Avatar" className="avatar" />
        </div>
        <div className="user-info">
          <h2>Deepika Singh</h2>
          <p><strong>Full Name:</strong>Deepika Singh</p> 
          <p><strong>Email:</strong> deepikaSingh@gmail.com</p>
          <p><strong>Phone No:</strong> +91 5689974213</p>
          <p><strong>Instagram:</strong> deepikaSingh@official</p>
          <p><strong>Website:</strong> www.deepikaSingh@work.com</p>
          <p><strong>About:</strong> Passionate blogger and tech enthusiast.Passionate blogger and tech enthusiast.Passionate blogger and tech enthusiast.Passionate blogger and tech enthusiast.Passionate blogger and tech enthusiast.</p>
        </div>
      </div>

      {/* Right Column: Action Buttons */}
      <div className="settings-actions">
        <button className="btn update-cover" onClick={()=>toggleEditBox("cover")}>Update Cover Image</button>
        {
          openEditBox==='cover'&&(
            <div>
              <components.UpdateImage/>
            </div>
          )
        }
        <button className="btn update-avatar" onClick={()=>toggleEditBox("avatar")}>Update Avatar</button>
        {
          openEditBox==='avatar'&&(
            <div>
              <components.UpdateUser/>
            </div>
          )
        }
        <button className="btn update-fullName" onClick={()=>toggleEditBox("fullName")}>Update Full Name</button>
        {
          openEditBox==='fullName'&&(
            <div>
              <components.UpdateUser/>
            </div>
          )
        }
        
        <button className="btn update-password" onClick={()=>toggleEditBox("password")}>Update Password</button>
        {
          openEditBox==='password'&&(
            <div>
              <components.UpdateUser/>
            </div>
          )
        }
        <button className="btn update-phone" onClick={()=>toggleEditBox("phone")}>Update Phone No</button>
        {
          openEditBox==='phone'&&(
            <div>
              <components.UpdateUser/>
            </div>
          )
        }
        <button className="btn update-instagram" onClick={()=>toggleEditBox("instagram")}>Update Instagram</button>
        {
          openEditBox==='instagram'&&(
            <div>
              <components.UpdateUser/>
            </div>
          )
        }
        <button className="btn update-about" onClick={()=>toggleEditBox("about")}>Update About</button>
        {
          openEditBox==='about'&&(
            <div>
              <components.UpdateUser/>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Settings;

