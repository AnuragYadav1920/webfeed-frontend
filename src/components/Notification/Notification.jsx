import React, {useContext} from 'react'
import './notification.css'
import UserContext from '../../context/UserContext';
import { MdVerifiedUser } from "react-icons/md";
const Notification = () => {
  const {notification} = useContext(UserContext)
  return (
    <>
      <div className='notification-box'>
        <span className='notification-icon'><MdVerifiedUser /></span>
        <span className='notification-message'>{notification.message}</span>
      </div>
    </>
  )
}

export default Notification;