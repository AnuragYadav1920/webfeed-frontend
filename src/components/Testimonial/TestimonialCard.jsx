import React, { useState, useEffect } from 'react'
import './testimonial.css'

const TestimonialCard = ({data}) => {
  return (
    <>
        <div className='testimonial-card'>
            <div className='testimonial-user-detail'>
                <div className='user-detail-image-box'>
                    <img src={data?.avatar} alt="" className='user-detail-image-box-image'/>
                </div>
                <div className=''>
                    <div className='testimonial-user-detail-info-username'>{data?.fullName}</div>
                    <div className='testimonial-user-detail-info-work'>{data?.work}</div>
                </div>
            </div>
            <div className='testimonial-content'>
                {data?.description}
            </div>
        </div>
    </>
  )
}

export default TestimonialCard