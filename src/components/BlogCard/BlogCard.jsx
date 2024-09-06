import React from 'react'
import { FaHeart } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
const BlogCard = () => {
  return (
    <>
        <div className='flex-row w-56 h-56 bg-custom-bg-color rounded-lg relative text-gray-900 cursor-pointer'>
          <div className='absolute w-full rounded-lg '>
                <img src="images/image3.jpeg" alt="" className='h-56 rounded-lg' />           
          </div>
          <div className='flex justify-between h-10 w-full relative top-0 overflow-hidden rounded-tr-lg z-10'>
            <div className='content-center px-8 py-1 text-2xl'>
              <FaHeart className='text-s-200 like'/>
            </div>
            <div className='bg-yellow-500 w-28 px-4 py-2 content-center text-center skew-x-custom-skew  absolute -right-4 rounded-bl-md'>
              <p className='-skew-x-custom-skew'>20.18k</p>
            </div>
          </div>
          <div className='flex-row absolute bottom-0  overflow-hidden w-full z-10'>
            <div className='relative '>
              <div className='flex pl-6 py-1 w-32 text-center bg-yellow-500 space-x-2 skew-x-custom-skew relative -left-4  rounded-tr-md'>
                <div className='content-center -skew-x-custom-skew'><MdDateRange/></div>
                <div className='content-center -skew-x-custom-skew'>
                  <p>3 sept</p>
                </div>
              </div>
             
            </div>
            <div className='bg-yellow-500 px-2 py-1 w-full rounded-b-lg font-semibold text-nowrap'>
              <p>Web Development course</p>
            </div>
          </div>
          
        </div>
    </> 
 )
}

export default BlogCard