import React from 'react'
import { MdLogout } from "react-icons/md"; 
import { FiEdit } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { MdVerified } from "react-icons/md";
const Account = () => {
  return (
    <>
     <div className='account ' >
          <div className='flex gap-4 text-gray-700'>
              <div className='content-center'>
                <div className='py-8'>
                  <img src="images/photo-modified.png" alt="" height={65} width={65}/>
                </div>
              </div>
              <div className='flex-row content-center space-y-2'>
                  <div className='flex text-2xl font-semibold space-x-2'>
                    <div className='content-center'>@anurag24</div>
                    <div className='content-center'><MdVerified/></div>
                  </div>
                  <div className='flex text-sm space-x-2 '>
                      <div>followers:</div>
                      <div>110k</div>                  
                  </div>
              </div>
          </div>
          <div>
            <div className='flex flex-wrap justify-start gap-4 text-gray-400'>
              <div className='w-16 h-16 bg-custom-bg-color text-center content-center rounded-lg'>All Posts</div>
              <div className='w-16 h-16 bg-custom-bg-color text-center content-center rounded-lg'>All Posts</div>
              <div className='w-16 h-16 bg-custom-bg-color text-center content-center rounded-lg'>All Posts</div>
              <div className='w-16 h-16 bg-custom-bg-color text-center content-center rounded-lg'>All Posts</div>
              <div className='w-16 h-16 bg-custom-bg-color text-center content-center rounded-lg'>All Posts</div>
            </div>
          </div>
          <div className='grid text-gray-700 my-4'>                    
              <div className='flex space-x-4 account-item w-full p-2 rounded-md'>
                <div className='content-center'>
                  <VscAccount className='text-lg'/>
                </div>
                <div>
                  Account Info
                </div>
              </div>                        
              <div className='flex space-x-4 account-item w-full p-2 rounded-md'>
                <div className='content-center'>
                  <FiEdit className='text-lg'/>
                </div>
                <div>
                  Edit details
                </div>
              </div>
              <div className='flex space-x-4 account-item w-full p-2 rounded-md'>
                <div className='content-center'>
                  <MdLogout className='text-lg'/>
                </div>
                <div>
                  Logout
                </div>
              </div>            
          </div>
        </div>
    </>
  )
}

export default Account