import React, { useEffect } from 'react'
import { useState } from 'react'
import Carousal from '../../components/Banner/Carousal.jsx';
import Filter from '../../components/Filter/Filter.jsx';
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import BlogCard from '../../components/BlogCard/BlogCard.jsx';

const Blogs = () => {
  return (
    <>
     <div className='space-y-8 my-8'>
        <div>
          <Carousal/>
        </div>
        <div className='p-8 bg-slate-900 rounded-lg'>
          <div><Filter/></div>
          <div>
          <div className='flex-row w-full bg-transparent mt-8 border-2 border-gray-500 rounded-lg '>
                <div className='flex gap-8 flex-wrap py-8 px-7 -z-20'>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/> 
                </div>
                <div className='relative my-8'>
                    <div className='flex px-8 space-x-2  text-gray-500 font-bold absolute bottom-2 right-4'>
                        <div className='content-center text-2xl'><CiCircleChevLeft/></div>
                        <div className='content-center'>1</div>
                        <div className='content-center text-2xl'><CiCircleChevRight/></div>
                    </div>
                </div>
            </div>
          </div>
          
        </div>
     </div>
     
  </>

  )
}

export default Blogs