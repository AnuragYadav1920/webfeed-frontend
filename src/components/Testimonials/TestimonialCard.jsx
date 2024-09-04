import React from 'react'
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";

const TestimonialCard = () => {
  return (
            <>
                <div className='cursor-pointer relative flex text-black w-custom-card-width h-custom-card-height justify-center '>
                    <div className='w-custom-card-width '>
                        <div className='w-24 h-24 mx-auto bg-custom-bg-color  rounded-full z-10 '>
                            <img src="images/photo-modified.png" alt="" width={80} height={80} className='mx-auto py-2 '/>
                        </div>
                    </div>
                    <div className='bg-yellow-400  w-custom-card-width pt-14  absolute top-12 -z-20'>
                        <div className='text-lg font-bold relative '>
                            <span className='absolute left-4 text-gray-600'><ImQuotesLeft/></span>
                        </div>
                        <div className='px-10 py-6 text-sm text-center text-sky-900'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima modi minus ea Minima modi minus ea </p>
                        </div>
                        <div className='text-lg font-bold relative '>
                            <span className=' absolute right-4 text-gray-600'><ImQuotesRight/></span>
                        </div>
                        <div className='relative py-10'>
                            <div className='grid absolute right-4 text-purple-950'>
                                <span>By: anurag@Official</span>
                            </div>                          
                        </div>
                    </div>
                </div>

            </>
  )
}

export default TestimonialCard