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
                <div className='border-b-2 border-gray-200'>
                    <div className='flex py-3 px-3 relative'>
                        <div className=' flex w-full justify-between'>
                            <div className='flex gap-20 '>
                                <div>Name</div>
                            {
                                showUserDetail&&(
                                    <div >Anurag</div>
                                )
                            }
                                
                            {showEditDetailBox&&(
                                <div className='space-y-3'>
                                    <input type="text"  className='h-8 rounded-md'/>
                                    <div className='flex space-x-3'>
                                        <button className='px-2 py-1.5 bg-blue-400 text-white cursor-pointer rounded-md'>Save</button>
                                        <button className='px-2 py-1.5 bg-slate-200 text-black cursor-pointer rounded-md' onClick={handleClick}>Cancel</button>
                                    </div>
                                </div>
                            )}
                            </div> 
                        {
                            showUserDetail &&(
                                <div className='flex space-x-2 text-blue-700 content-center cursor-pointer' onClick={handleClick}>
                                    <span className='text-xl content-center'><MdEdit/></span>
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