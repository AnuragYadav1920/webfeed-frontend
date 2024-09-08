import React, { useState } from 'react'
import { MdEdit } from "react-icons/md";
import EditDetailBox from '../../components/EditDetailBox/EditDetailBox';

const UserEdit = () => {

  return (
    <>
        <div className='w-custom-account-sec-width auto bg-gray-100 px-16 py-8 mx-auto rounded-md'>
            <div className='text-5xl text-center pb-12 pt-4'>༒𝓔𝓭𝓲𝓽 𝓓𝓮𝓽𝓪𝓲𝓵𝓼༒</div>
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
    </>
  )
}

export default UserEdit