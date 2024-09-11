import React from 'react'
import TestimonialCard from './TestimonialCard'
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { FaChevronCircleRight } from "react-icons/fa";

const Testimonial = () => {
  return (
    <>
        <div className='testimonial-box '>
                <span className='testimonial-heading-1'>TESTIMONIALS</span>
                <span className='testimonial-heading-2'>WHAT OUR USERS SAY</span>
                <hr className='testimonial-hr' />
                <div className='testimonial-p'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam distinctio ipsum voluptates iste at architecto reiciendis exercitationem eligendi quam minus.</p>
                </div>
                <div className='testimonial-inner-box'>
                    <div className='testimonial-inner-box-arrow'>
                        <FaCircleChevronLeft/>
                    </div>
                    <div className='testimonial-inner-box-feedback'>
                        <div className='testimonial-inner-box-feedback-container'>
                            <TestimonialCard/>
                            <TestimonialCard/>
                            <TestimonialCard/>
                            <TestimonialCard/>
                            <TestimonialCard/>
                        </div>
                    </div>
                    <div className='testimonial-inner-box-arrow'>
                        <FaCircleChevronRight/>
                    </div>
                </div>
        </div>
    </>
  )
}

export default Testimonial