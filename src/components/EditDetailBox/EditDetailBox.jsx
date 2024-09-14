import React, { useState } from 'react'
import { MdEdit } from "react-icons/md";

const EditDetailBox = () => {
    const [showEditDetailBox, setShowEditDetailBox] = useState(false)
    const [showUserDetail, setShowUserDetail] = useState(true)

    const handleClick = ()=>{
            setShowEditDetailBox(!showEditDetailBox)
            setShowUserDetail(!showUserDetail)   
    }

  return (
    <>
                <div className='edit-detail-container'>
                    <div className='edit-detail-container-box'>
                        <div className='edit-detail-container-box-main'>
                            <div className='edit-detail-container-box-main-left'>
                                <div>Name</div>
                            {
                                showUserDetail&&(
                                    <div >Anurag</div>
                                )
                            }
                                
                            {showEditDetailBox&&(
                                <div className='edit-detail-container-box-main-left-edit-box'>
                                    <input type="text"  className='edit-detail-container-box-main-left-edit-box-input'/>
                                    <div className='edit-detail-container-box-main-left-edit-box-buttons'>
                                        <button className='edit-detail-container-box-main-left-edit-box-buttons-button save'>Save</button>
                                        <button className='edit-detail-container-box-main-left-edit-box-buttons-button delete' onClick={handleClick}>Cancel</button>
                                    </div>
                                </div>
                            )}
                            </div> 
                        {
                            showUserDetail &&(
                                <div className='edit-detail-container-box-main-right' onClick={handleClick}>
                                    <span className='edit-detail-container-box-main-right-icon'><MdEdit/></span>
                                    <span  >Edit</span>
                                </div>
                            )
                        }                                                     
                        </div>    
                    </div>
                </div>
    </>
  )
}

export default EditDetailBox