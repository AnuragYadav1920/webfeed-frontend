import React from 'react'
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";

const TestimonialCard = () => {
  return (
            <>
                <div className='testimonial-card'>
                    <div className='testimonial-card-outer-box'>
                        <div className='testimonial-card-box '>
                            <img src="images/photo-modified.png" className="testimonial-card-box-image" />        
                        </div>
                    </div>
                    <div className='testimonial-card-content'>
                        <span className='testimonial-card-content-quote'><ImQuotesLeft className='testimonial-card-content-quote-left' /></span>
                        <div className='testimonial-card-content-desc'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima modi Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, at. minus ea Minima modi minus ea  </p>
                        </div>
                        <span className='testimonial-card-content-quote'><ImQuotesRight className='testimonial-card-content-quote-right' /></span>
                        <div className='testimonial-card-content-user'>
                            <span className='testimonial-card-content-user-id'>By: anurag@Official</span>  
                        </div>
                                
                    </div> 
                </div>
            </>
  )
}

export default TestimonialCard