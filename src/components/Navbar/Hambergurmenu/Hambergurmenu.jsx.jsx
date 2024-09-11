import React from 'react'
import { IoIosClose } from "react-icons/io";
import { RiArrowUpWideLine } from "react-icons/ri";
import { VscVerifiedFilled } from "react-icons/vsc";
const Hambergurmenu = () => {
  return (
    <>
      <div className=' bg-gray-400'>
        <div className='flex space-x-4 text-zinc-950 p-4 bg-transparent backdrop-brightness-50  backdrop-opacity-60'>           
            <div className='space-y-1 content-center '>
              <div className='flex space-x-0'>
                <span className='text-2xl font-semibold'>@anurag24</span>
                <span className='content-center text-lg'><VscVerifiedFilled/></span>
              </div>
              
              <div className='flex  space-x-3 content-center '>
                <img src="images/flower.png" alt="" className='w-5 h-5 object-fill'/>
                <span className='text-sm'>100k</span>
              </div>
            </div>
            <div className='content-center'>
                <div className='h-12 w-12 p-0.5 bg-white rounded-full'>
                  <img src="images/photo-modified.png" alt="" className='w-full h-full object-fill'/>
                </div>
            </div>
            
        </div>
        <div className='text-slate-900 p-2 relative cursor-pointer '>
            <div className='p-2 hover:bg-zinc-950 rounded-md hover:text-white'>Home</div>
            <div className='p-2 hover:bg-zinc-950 rounded-md hover:text-white'>Discover</div>
            <div className='p-2 hover:bg-zinc-950 rounded-md hover:text-white'>Contact</div>
            <div className='p-2 hover:bg-zinc-950 rounded-md hover:text-white'>Create</div>
            <div className='p-2 hover:bg-zinc-950 rounded-md hover:text-white'>Account</div>
        </div>
        <div className='flex space-x-2 content-center justify-center text-lg py-2 bg-transparent text-gray-300 cursor-pointer backdrop-brightness-50 backdrop-opacity-55'>
          <span className='content-center font-bold'><RiArrowUpWideLine/></span>
          <span className='text-sm'>Close</span>
        </div>
      </div>
    </>
  )
}

export default Hambergurmenu