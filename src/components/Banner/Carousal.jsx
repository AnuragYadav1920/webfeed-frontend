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
      <div className='w-full h-96  flex text-gray-900 relative '>
          <div className=' h-full absolute left-0 content-center px-2 text-2xl cursor-pointer' ><FaChevronLeft  onClick={handleClickPrev} /></div>
          <div className='w-full h-full '>
            <img src={`images/${slides[currentIndex].url}`} alt="" className='object-fill w-full h-full rounded-lg'/> 
          </div>
          <div className=' h-full absolute right-0 content-center px-2 text-2xl cursor-pointer' ><FaChevronRight onClick={handleClickNext}/></div>
      </div>
    </>
  )
}

export default Carousal