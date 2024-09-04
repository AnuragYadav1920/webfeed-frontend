import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
<>
    <div className='grid space-y-4 text-black bg-yellow-400  mt-10 '>
        <div className='flex justify-around py-8'>
            <div className='grid '>
                
                <div className='mx-auto'>
                    <img src="images/logo.png" alt="" className='rounded-full justify-center' height={70} width={70} />
                </div>
              
                <div className='flex h-8 text-xl font-bold'>
                    <div className='bg-custom-bg-color text-gray-400 pl-8 pr-2 content-center -skew-x-custom-logo-skew'>WEB</div>
                    <div className='bg-gray-400 text-black pl-2 pr-8 content-center      -skew-x-custom-logo-skew'>FEED</div>
                </div>
                
                <div className='text-center text-xl font-bold text-gray-700'>𝕱𝖊𝖊𝖉 𝖞𝖔𝖚𝖗 𝖇𝖗𝖆𝖎𝖓</div>
            </div>
            <div className='grid space-y-2 my-2'>
                <div className='text-xl font-bold'>Information</div>
                <div className='text-sm font-semibold text-gray-700 cursor-pointer'>
                    <li>About Us</li>
                    <li>Blog</li>
                    <li>More Search</li>
                    <li>Testimonials</li>
                    <li>Events</li>
                </div>
                
            </div>
            <div className='grid space-y-2 my-2'>
                <div className='text-xl font-bold'>Helpful Links</div>
                <div className='text-sm font-semibold text-gray-700 cursor-pointer'>
                    <li>Services</li>
                    <li>Supports</li>
                    <li>Terms & Condition</li>
                    <li>Privacy Policy</li>
                </div>
            </div>
            <div className='grid space-y-4'>
                <div className='text-xl font-bold'>
                    Contact Us
                </div>
                <div className='cursor-pointer'>
                    <div className='flex space-x-2'><FaPhoneAlt/><span className='text-sm font-semibold text-gray-700'>000-001-234-56789</span></div>
                    <div className='flex space-x-2'><HiOutlineMail/><span className='text-sm font-semibold text-gray-700'> example@gmail.com</span></div>
                    <div className='flex space-x-6 text-xl py-6'><FaFacebookSquare className='text-2xl'/><BsInstagram className='bg-black text-yellow-400 rounded-full text-2xl'/><IoLogoYoutube className='text-2xl'/><FaLinkedin className='text-2xl'/></div>
                </div>
            </div>
        </div>
        <div className='relative'>
            <div className='px-20'><hr  className='w-full bg-gray-600 h-1 outline-none border-none'/></div>
            <div className='flex justify-around py-4'>
                <div className='flex space-x-2 w-80 justify-center'>
                    <span>2024</span>
                    <span className='content-center'> <FaCopyright /></span>
                    <span> webFeed.com || All Right Reserved</span></div>
                <div className='flex justify-evenly space-x-4 absolute right-20 text-gray-700 cursor-pointer'>
                    <div>FAQ</div>
                    <div>Privacy</div>
                    <div>Terms & Condition</div>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default Footer