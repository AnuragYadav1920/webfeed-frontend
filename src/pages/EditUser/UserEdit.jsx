import React, { useState } from 'react'
import { MdEdit } from "react-icons/md";
import EditDetailBox from '../../components/EditDetailBox/EditDetailBox';

const UserEdit = () => {

  return (
    <>  
      <div className='edit-user-detail-container'>
        <div className='edit-user-detail-container-box'>
            <div className='edit-user-detail-container-box-heading'>Edit Details</div>
            <div>
                <EditDetailBox/>
                <EditDetailBox/>
                <EditDetailBox/>
                <EditDetailBox/>
                <EditDetailBox/>
                <EditDetailBox/>
                <EditDetailBox/>
                <EditDetailBox/>
            </div>
          </div> 
      </div>     
    </>
  )
}

export default UserEdit