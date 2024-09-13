import React from 'react'
import TestimonialCard from './TestimonialCard'
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { FaChevronCircleRight } from "react-icons/fa";

const Testimonial = () => {
  return (
    <>
        <div className='testimonial-box '>
                <div className='testimonial-heading-1'>TESTIMONIALS</div>
                <div className='testimonial-heading-2'>WHAT OUR USERS SAY</div>
                <div className='testimonial-hr' ></div>
                <div className='testimonial-p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam distinctio <br /> ipsum voluptates iste at architecto  reiciendis exercitat<br />ionem eligendi quam minus.
                </div>
                {/* <div className='testimonial-inner-box'>
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
                </div> */}
        </div>
    </>
  )
}

export default Testimonial