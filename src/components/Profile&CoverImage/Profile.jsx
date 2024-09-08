import React from 'react'
import { IoClose } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Profile = ({close}) => {
  return (
    <>
        <div className='w-custom-profile&coverImage-width h-auto text-slate-100 text-lg font-semibold bg-transparent border-2 border-gray-500 bg-zinc-950 rounded-lg z-20'>
            <div className='flex px-8 pt-4 justify-between '>
                <div>Profile photo</div>
                <div className='text-3xl bg-transparent cursor-pointer p-1 rounded-full hover:bg-gray-600 ' onClick={close}><IoClose/></div>
            </div>
            <div className='h-80 w-full bg-transparent content-center'>
                <div className='h-64 w-64 bg-transparent mx-auto '>
                    <img src="images/mountain.avif" alt="" className='object-cover h-full w-full rounded-full' />
                </div> 
            </div>
            <div className='h-custom-hr w-full  bg-gray-600'></div>
            <div className='flex justify-between px-8 py-2'>
                <div>
                    <label htmlFor="profile-image">
                        <div className='grid justify-items-center py-1.5 px-4 hover:bg-gray-600 rounded-md cursor-pointer'>
                            <div className='text-2xl '><FaCamera/></div>
                            <div>Edit</div>
                            <input type="file" id='profile-image' className='hidden' />
                        </div>
                    </label>                  
                </div>
                <div className='grid justify-items-center p-1.5 hover:bg-gray-600 rounded-md cursor-pointer'>
                    <div className='text-2xl'><MdDelete/></div>
                    <div>Delete</div>
                </div>
            </div>

        </div>
    </>
  )
}

export default Profile