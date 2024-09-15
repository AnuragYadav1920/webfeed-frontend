import React from 'react'
import { NavLink } from 'react-router-dom';
import { MdLogout } from "react-icons/md"; 
import { FiEdit } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { MdVerified } from "react-icons/md";
const Account = () => {
  return (
    <>
     <div className='account ' >
          <div className='account-top'>
              <div className='account-top-image-box'>
                <img src="images/photo-modified.png" alt="" className='account-top-image-box-image'/>
              </div>
              <div className='account-top-user-details-box'>
                  <div className='account-top-user-details-box-username-box'>
                    <div >@anurag24</div>
                    <div className='verified-icon'><MdVerified/></div>
                  </div>
                  <div className='account-top-user-details-box-followers-box '>
                      <div className='follower-icon'>
                        <img src="images/flower.png" alt="" />
                      </div>
                      <div className='total-followers'>110k</div>                  
                  </div>
              </div>
          </div>
          <div className='account-bottom'>                    
              <div className='account-bottom-item-box'>
                <div className='account-bottom-item-box-icon'>
                  <VscAccount />
                </div>
                <div className='account-bottom-item-box-text'>
                  <NavLink to="/account-info">Account info</NavLink>
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
                  <MdLogout />
                </div>
                <div className='account-bottom-item-box-text'>
                  <NavLink to="logout">Logout</NavLink>
                </div>
              </div>            
          </div>
        </div>
    </>
  )
}

export default Account