import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <div className='text-yellow-400 '>
        <h1 className='text-5xl font-bold text-center mb-16'>Contact</h1>
        <div className='flex space-x-28 justify-center'>
            <div className='flex-row space-y-6'>
                <div className='space-y-2'>
                    <div className='flex space-x-2 font-bold'><FaLocationDot/><span>ADDRESS</span></div>
                    <div className='w-60 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, architecto.</div>
                </div>
                <div className='space-y-2'>
                    <div className='flex space-x-2 font-bold'><HiOutlineMail className='text-2xl'/><span>EMAIL</span></div>
                    <div className='text-sm'>example@gmail.com</div>
                </div>
                <div className='space-y-2'>
                    <div className='flex space-x-2 font-bold'><FaPhoneAlt className='text-sm mt-1.5'/><span>PHONE</span></div>
                    <div className='text-sm'>000-001-345-67890</div>
                </div>
                <div className='space-y-4'>
                <div className='flex space-x-2 font-bold'><BsGlobeCentralSouthAsia className='text-lg'/><span>SOCIAL</span></div>
                    <div className='flex space-x-4 text-xl'><FaFacebookSquare /><BsInstagram className='text-black bg-yellow-400 rounded-full'/><IoLogoYoutube/><FaLinkedin/></div>
                </div>
            </div>
            <div>
                <form action="">
                    <div className='grid justify-items-center space-y-4'>
                        <div className='grid space-y-2 '>
                            <div>
                                <label htmlFor="" className='font-bold'>Username</label>                                   
                            </div>
                            <div className='border-2 border-yellow-400 p-2 w-custom-input-width rounded-lg'>
                                <input type="text" placeholder='ex: john doe' className='placeholder-yellow-400 bg-transparent outline-none border-none text-sm' />
                            </div>
                        </div>
                        <div className='grid space-y-2 '>
                            <div>
                                <label htmlFor="" className='font-bold'>Email address</label>                                   
                            </div>
                            <div className='flex border-2 border-yellow-400  w-custom-input-width rounded-lg space-x-1 '>
                                <HiOutlineMail className='text-xl text-black bg-yellow-400 h-full w-10 rounded-l-md '/>
                                <input type="text" placeholder='example@gmail.com' className='placeholder-yellow-400 p-2 bg-transparent outline-none border-none text-sm' />
                            </div>
                        </div>
                        <div className='grid space-y-2'>
                            <div>
                                <label htmlFor="" className='font-bold'>Message</label>                                   
                            </div>
                            <div className='border-2 border-yellow-400 p-2 w-custom-input-width  rounded-lg'>
                                <textarea name="" id=""  placeholder='feel free to contact us.'className='placeholder-yellow-400 bg-transparent outline-none border-none text-sm w-full h-custom-textarea-height '  ></textarea>
                            </div>
                        </div>
                        <div className='w-custom-button-width bg-yellow-400 text-black p-3 text-center rounded-full '>
                            <button>Send Message</button>
                        </div>                                          
                    </div>   
                </form>
            </div>
        </div>
      </div>  
    </>
  )
}

export default Contact