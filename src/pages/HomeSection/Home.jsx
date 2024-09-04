import React, { useEffect, useState } from 'react'

import Testimonial from '../../components/Testimonials/testimonial';



const Home = () => {
 
  return (
    <>
      {/* top section container */}

      <div className='flex  flex-wrap mt-4 gap-16'>
          <div className=' basis-left-basis flex-row  space-y-8 pt-16 '>
            <div className='text-yellow-400 text-7xl font-bold '>
              Discover <br />and create the <br /> Feeds.
            </div>
            <div className='text-yellow-400'>welcome to WebFeed, where you can feed your brain with your search.</div>
            <div>
              <button className='bg-yellow-400 px-6 py-3 rounded-full'>
                Start your search
              </button>
            </div>
          </div>
        <div className='basis-right-basis pt-32 px-20 justify-items-end min-h-custom-size bg-transparent' >
          <div class="cube">
              <div class="face front ">
                  <img src="images/image1.jpeg" alt="" className='w-custom-blog-width h-custom-blog-height' />
              </div>
              <div class="face back">
                  <img src="images/image1.jpeg" alt="" className='w-custom-blog-width h-custom-blog-height'/>
              </div>
              <div class="face right">
                  <img src="images/image2.jpeg" alt="" className='w-custom-blog-width h-custom-blog-height'/>
              </div>
              <div class="face left">
                  <img src="images/image2.jpeg" alt="" className='w-custom-blog-width h-custom-blog-height'/>
              </div>
              <div class="face top">
                  <img src="images/image3.jpeg" alt="" className='w-custom-blog-width h-custom-blog-height'/>
              </div>
              <div class="face bottom">
                  <img src="images/image3.jpeg" alt=""className='w-custom-blog-width h-custom-blog-height' />
              </div>
          </div>
        </div>
      </div>

      {/* mid section container */}

      <div className='flex text-yellow-400 mb-8  text-center gap-20 '>
          <div className='grid justify-items-center space-y-4 '>
            <div>
                <img src="images/image3.jpeg" alt="" width={100} height={100} />
            </div>
            <div>
                <span className='font-bold text-lg '>Create </span>
            </div>
            <div>
               <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore molestias officiis unde</p>  
            </div>                            
          </div>

          <div className='grid justify-items-center space-y-4  '>
            <div>
                <img src="images/image3.jpeg" alt="" width={100} height={100} />
            </div>
            <div>
                <span className='font-bold text-lg '>Create </span>
            </div>
            <div>
               <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore molestias officiis unde</p>  
            </div>                            
          </div>

          <div className='grid justify-items-center  space-y-4 '>
            <div className=''>
                <img src="images/image3.jpeg" alt="" width={100} height={100} />
            </div>
            <div>
                <span className='font-bold text-lg '>Create </span>
            </div>
            <div>
               <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore molestias officiis unde</p>  
            </div>                            
          </div>

          <div className='grid justify-items-center space-y-4  '>
            <div>
                <img src="images/image3.jpeg" alt="" width={100} height={100} />
            </div>
            <div>
                <span className='font-bold text-lg '>Create </span>
            </div>
            <div>
               <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore molestias officiis unde</p>  
            </div>                            
          </div>
      </div>

      {/* testimonials */}
      <div>
        <Testimonial/>  
      </div>

       
    
    </>
  )
}
export default Home;

