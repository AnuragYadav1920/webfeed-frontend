import React, {useContext, useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import UserContext from '../../../context/UserContext';
import { MdLogout } from "react-icons/md"; 
import { FiEdit } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { MdVerified } from "react-icons/md";
import { BiLike } from "react-icons/bi";

const Account = () => {
  const {user,setUser,setNotification, setIsLoggedIn} = useContext(UserContext);
    const navigate = useNavigate()
    const handleLogout = async() =>{
      try {
        const respose = await fetch('http://localhost:8000/api/v1/users/logout',
          {
            method:"POST",
            credentials:"include",
          }
        )
        const results = await respose.json();
      if(results.success){
        setUser(null);  
        localStorage.removeItem('user');
        alert(results.message)
        setIsLoggedIn(false)
        navigate('/')
      }else{
        alert('failed while loggging out')
      }      
      } catch (error) {
        console.log("Error occured while logging out", error)
      }
    }

  return (
    <>
     <div className='account ' >
          <div className='account-top'>
              <div className='account-top-image-box'>
                <img src={user?.avatar} alt="" className='account-top-image-box-image'/>
              </div>
              <div className='account-top-user-details-box'>
                  <div className='account-top-user-details-box-fullName-box'>
                    <div >{user?.fullName}</div>
                    <div className='verified-icon'><MdVerified/></div>
                  </div>
                  <div className='account-top-user-details-box-username-box'>{user?.username}</div>
              </div>
          </div>
          <div className='account-bottom'>                    
              <div className='account-bottom-item-box'>
                <div className='account-bottom-item-box-icon'>
                  <VscAccount />
                </div>
                <div className='account-bottom-item-box-text'>
                  <NavLink to="/my-profile">My Account</NavLink>
                </div>
              </div>                        
              <div className='account-bottom-item-box'>
                <div className='account-bottom-item-box-icon'>
                  <FiEdit />
                </div>
                <div className='account-bottom-item-box-text'>
                  <NavLink to="/edit-details">Edit details</NavLink>
                </div>
              </div>
              <div className='account-bottom-item-box'>
                <div className='account-bottom-item-box-icon'>
                  <FiEdit />
                </div>
                <div className='account-bottom-item-box-text'>
                  <NavLink to="/create">Create Post</NavLink>
                </div>
              </div>
              <div className='account-bottom-item-box'>
                <div className='account-bottom-item-box-icon'>
                  <BiLike/>
                </div>
                <div className='account-bottom-item-box-text'>
                  <NavLink to="/liked-post">Liked Post</NavLink>
                </div>
              </div>
              <div className='account-bottom-item-box'>
                <div className='account-bottom-item-box-icon'>
                  <MdLogout />
                </div>
                <div className='account-bottom-item-box-text'>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              </div>            
          </div>
        </div>
    </>
  )
}

export default Account