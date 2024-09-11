import React, { useEffect, useState } from 'react'

import Testimonial from '../../components/Testimonials/testimonial';



const Home = () => {
 
  return (
    <>
      {/* top section container */}

      <div className='home-top '>
          <div className='home-top-left'>
            <div className='heading'>
              <span>Discover <br /> </span>
              <span>and  create the <br /></span>
              <span>Feeds</span>
            </div>
            <div className='home-desc'>welcome to WebFeed, where you can feed your brain with your search.</div>
            <div>
              <button className='bg-yellow-400 px-6 py-3 rounded-full'>
                Start your search
              </button>
            </div>
          </div>
        <div className='home-top-right' >
            <img src="images/mountain.avif" alt="" className='home-top-right-image'/>
        </div>
      </div>

      {/* mid section container */}

      <div className='home-mid'>
          <div className='home-mid-box '>
                <img src="images/image3.jpeg" alt="" className='home-mid-box-image'/>
                <span className='home-mid-box-title'>Create </span>
                <span className='home-mid-box-desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore molestias officiis 
                </span>                           
          </div>
          <div className='home-mid-box '>
                <img src="images/image3.jpeg" alt="" className='home-mid-box-image'/>
                <span className='home-mid-box-title'>Search</span>
                <span className='home-mid-box-desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore molestias officiis 
                </span>                           
          </div>
          <div className='home-mid-box '>
                <img src="images/image3.jpeg" alt="" className='home-mid-box-image'/>
                <span className='home-mid-box-title'>follow</span>
                <span className='home-mid-box-desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore molestias officiis 
                </span>                           
          </div>
          <div className='home-mid-box '>
                <img src="images/image3.jpeg" alt="" className='home-mid-box-image'/>
                <span className='home-mid-box-title'>Like & Share</span>
                <span className='home-mid-box-desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore molestias officiis 
                </span>                           
          </div>
      </div>

      {/* testimonials */}
      <div className='testimonial'>
        <Testimonial/>  
      </div>
    </>
  )
}
export default Home;

