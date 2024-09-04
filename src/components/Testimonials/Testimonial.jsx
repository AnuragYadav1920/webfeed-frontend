import React from 'react'
import TestimonialCard from './TestimonialCard'
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { FaChevronCircleRight } from "react-icons/fa";

const Testimonial = () => {
  return (
    <>
        <div className='text-yellow-400 text-center space-y-3 my-2 py-20'>
            <div>
                <span className='font-bold'>TESTIMONIALS</span>
            </div>
            <div>
                <span className='text-3xl font-bold text-gray-500'>WHAT OUR USERS SAY</span>
            </div>
            <div className=''>
                <hr className='mx-auto outline-none border-none h-1 w-96 bg-yellow-400' />
            </div>
            <div className='px-64 py-8'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam distinctio ipsum voluptates iste at architecto reiciendis exercitationem eligendi quam minus.</p>
            </div>
            <div className='py-0'>
                <div className='flex justify-items-center w-full'>
                    <div className='text-4xl mx-auto content-center w-0.5/5 cursor-pointer'>
                        <FaCircleChevronLeft/>
                    </div>
                    <div className='space-x-10 px-14  flex overflow-x-auto  w-3/5 '>
                        <TestimonialCard/>
                        <TestimonialCard/>
                        <TestimonialCard/>
                        <TestimonialCard/>
                        <TestimonialCard/>
                        <TestimonialCard/>
                        <TestimonialCard/>
                        <TestimonialCard/>
                    </div>
                    <div className='text-4xl mx-auto content-center w-0.5/5 cursor-pointer'>
                        <FaCircleChevronRight/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Testimonial