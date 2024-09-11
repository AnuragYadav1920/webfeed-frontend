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
        <div className='footer-box'>
            <div className='footer-box-1'>              
                <div className='footer-box-1-logo'>
                    <img src="images/logo.png" alt="" className='footer-box-1-logo-image'/>
                </div>             
                <div className='footer-box-1-logo-name'>
                    <span>Web</span>
                    <span>Feed</span>
                </div>               
                <div className='footer-box-1-slogan'>𝕱𝖊𝖊𝖉 𝖞𝖔𝖚𝖗 𝖇𝖗𝖆𝖎𝖓</div>
            </div>
            <div className='footer-box-2-3'>
                <div className='footer-box-2-3-4-heading'>Information</div>
                <div className='footer-box-2-3-links'>
                    <li>About Us</li>
                    <li>Blog</li>
                    <li>More Search</li>
                    <li>Testimonials</li>
                    <li>Events</li>
                </div>
                
            </div>
            <div className='footer-box-2-3'>
                <div className='footer-box-2-3-4-heading'>Helpful Links</div>
                <div className='footer-box-2-3-links'>
                    <li>Services</li>
                    <li>Supports</li>
                    <li>Terms & Condition</li>
                    <li>Privacy Policy</li>
                </div>
            </div>
            <div className='footer-box-4'>
                <div className='footer-box-2-3-4-heading'>
                    Contact Us
                </div>
                <div className='footer-box-4-links'>
                    <div className='footer-box-4-link'><FaPhoneAlt/><span className=''>000-001-234-56789</span></div>
                    <div className='footer-box-4-link'><HiOutlineMail/><span className=''> example@gmail.com</span></div>
                    <div className='footer-box-4-link'><FaFacebookSquare className=''/><BsInstagram className=''/><IoLogoYoutube className=''/><FaLinkedin className=''/></div>
                </div>
            </div>
        </div>
        <div className='footer-box-hr'></div>
        <div className='footer-box-copyright'>
            <span>2024</span>
            <span className='footer-box-copyright-icon'> <FaCopyright /></span>
            <span> WebFeed.com || All Right Reserved</span>
        </div>
</>
  )
}

export default Footer