import React, { useState, useEffect } from 'react'
import './testimonial.css'

const TestimonialCard = ({data}) => {
    const [userDetails, setUserDetails] = useState(null)
    const getUserDetails = async()=>{
        try {
            const response = await fetch(`http://localhost:8000/api/v1/users/get-user/${data.userId}`,
                {
                    method:"GET"
                }
            )
            const results = await response.json()
            if(results.success){
                setUserDetails(results.data)
            }else{
                console.log('Failed in fetching the feedbacks')
            }
        } catch (error) {
            console.log("Error", error)
        }
    }

    useEffect(()=>{
        getUserDetails()
    },[])

  return (
    <>
        <div className='testimonial-card'>
            <div className='testimonial-user-detail'>
                <div className='user-detail-image-box'>
                    <img src={userDetails?.avatar} alt="" className='user-detail-image-box-image'/>
                </div>
                <div className=''>
                    <div className='testimonial-user-detail-info-username'>{userDetails?.fullName}</div>
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