import React, { useState, useContext, useEffect } from 'react'
import { MdEdit } from "react-icons/md";
import './editdetailbox.css'
import UserContext from '../../context/UserContext.js';

const EditDetailBox = ({dataKey}) => {
    const {user,setUser,setNotification} = useContext(UserContext)
    const [showEditDetailBox, setShowEditDetailBox] = useState(false)
    const [showUserDetail, setShowUserDetail] = useState(true)

    const UpdateDetails = async(formObj) =>{
        try {
            const response = await fetch('http://localhost:8000/api/v1/users/update-details',{
                method:'PATCH',
                headers:{
                    "Content-Type": "application/json"
                },
                credentials:'include',
                body:JSON.stringify(formObj)
            });
            const results = await response.json();
            if(results.success){
                setUser(results.data)
                localStorage.removeItem('user')
                setNotification({
                    value:true,
                    message:results.message
                })
                localStorage.setItem('user',JSON.stringify(results.data))  
                handleClick()          
            }
        } catch (error) {
            console.log("Error", error);
            setNotification({
                value: true,
                message: 'Failed to update user details'
            })
        }
        
    }
    const handleSubmit = (e) =>{
        e.preventDefault()

        const form = e.target;
        const formData = new FormData(form);
        const formObj = Object.fromEntries(formData.entries())
        UpdateDetails(formObj)
    }

    useEffect(()=>{   
    },[UpdateDetails])

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
                                <div className='dataKey'>{dataKey==='username'?'Username :':dataKey==='fullName'?'Full Name :':dataKey==='email'?'Email :':dataKey==='instagram'?'Instagram :':dataKey==='facebook'?'Facebook :':dataKey==='linkedin'?'LinkedIn :':dataKey==='website'?'Website :': 'About :'}</div>
                            {
                                showUserDetail&&(
                                    <div>{user?.[dataKey]}</div>
                                )
                            }
                                
                            {showEditDetailBox&&(
                                <div className='edit-detail-container-box-main-left-edit-box'>
                                    <form onSubmit={handleSubmit}>{
                                            dataKey==='about'?<textarea name={dataKey} className='edit-detail-container-box-main-left-edit-box-input' placeholder={user?.[dataKey]} ></textarea>:<input type="text" name={dataKey}  className='edit-detail-container-box-main-left-edit-box-input' placeholder={user?.[dataKey]}/>
                                        }
                                    
                                    <div className='edit-detail-container-box-main-left-edit-box-buttons'>
                                        <button className='edit-detail-container-box-main-left-edit-box-buttons-button-save' type='submit' >Save</button>
                                        <button className='edit-detail-container-box-main-left-edit-box-buttons-button-delete' onClick={handleClick}>Cancel</button>
                                    </div>
                                  </form>
                                </div>
                            )}
                            </div> 
                        {
                            showUserDetail &&(
                                <div className='edit-detail-container-box-main-right' onClick={handleClick}>
                                    <span className='edit-detail-container-box-main-right-icon'><MdEdit/></span>
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