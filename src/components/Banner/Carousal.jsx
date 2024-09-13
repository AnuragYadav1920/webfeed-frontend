import React from 'react'
import { useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

const Carousal = () => {
    
  const slides = [
    { id: 1, bgColor: 'bg-blue-500',url:'mountain.avif', title: 'Welcome to Our Website!', subtitle: 'Explore our amazing content' },
    { id: 2, bgColor: 'bg-green-500',url:'image2.jpeg', title: 'Discover New Features', subtitle: 'Check out what’s new' },
    { id: 3, bgColor: 'bg-red-500',url:'image3.jpeg', title: 'Special Offers', subtitle: 'Don’t miss out on our offers' },
  ];
  const [currentIndex, setCurrentIndex] = useState(0)
  const handleClickPrev = () =>{
      if(currentIndex > 0 ){
        setCurrentIndex((currentIndex - 1)% slides.length)
      }else{
        setCurrentIndex(slides.length - 1)
      }   
  }
  const handleClickNext = () =>{
    setCurrentIndex((currentIndex + 1)% slides.length)
  }
  return (
    <>
      <div className='carousal'>
          <div className='carousal-postview-icon-box' ><FaChevronLeft  onClick={handleClickPrev} /></div>
          <div className='carousal-bg-image-box'>
            <img src={`images/${slides[currentIndex].url}`} alt="" className='carousal-bg-image-box-image'/> 
          </div>
          <div className='carousal-preview-icon-box' ><FaChevronRight onClick={handleClickNext}/></div>
      </div>
    </>
  )
}

export default Carousal