import React from 'react'
import { BsFillHexagonFill } from "react-icons/bs";
import { PiCrownSimpleFill } from "react-icons/pi";

const TopCreators = () => {
  return (
    <>
        <div>
            <div className='flex-row space-y-16 my-16'>
                <div className='h-auto grid w-custom-podium-width grid-cols-3 content-end  items-end  gap-8 mx-auto text-white text-center '>
                    <div className='h-48 '>
                            <div className='w-28 mx-auto'>
                                <div className='bg-gray-400 p-1 rounded-full'>
                                    <img src="images/photo-modified.png" alt="" />
                                </div>
                            </div>
                            <div className='grid justify-center text-white relative font-bold bottom-5'>
                            <div className='text-gray-500 text-4xl justify-center'>
                                <BsFillHexagonFill/>
                            </div>
                            <div className='rank-icon'>
                                2
                            </div>
                        </div>
                            <div className='text-xl bg-gray-400 h-1.5'></div>
                            <div className='font-bold text-2xl'>@anurag24</div>
                            <div className='font-semibold text-lg'>Anurag Yadav</div>
                        
                    </div>
                    <div className='h-64'>
                            <div className='w-32 mx-auto'>
                                <div className='bg-yellow-500 p-1 rounded-full'>
                                    <img src="images/photo-modified.png" alt="" />
                                </div>
                            </div>
                            <div className='grid justify-center text-white relative font-bold bottom-7'>
                            <div className='text-yellow-600 text-4xl justify-center'>
                                <BsFillHexagonFill/>
                            </div>
                            <div className='rank-icon'>
                                1
                            </div>
                        </div>
                            <div className='text-xl bg-yellow-500 h-1.5'></div>
                            <div className='font-bold text-2xl'>@anurag24</div>
                            <div className='font-semibold text-lg'>Anurag Yadav</div>
                         
                    </div>
                    <div className=' h-40  '>
                            <div className='w-24 mx-auto'>
                                <div className='bg-amber-700 p-1 rounded-full'>
                                    <img src="images/photo-modified.png" alt="" />
                                </div>
                            </div>
                        <div className='grid justify-center text-white relative bottom-4'>
                            <div className='text-amber-900 text-4xl justify-center font-bold '>
                                <BsFillHexagonFill/>
                            </div>
                            <div className='rank-icon'>
                                3
                            </div>
                        </div>
                            <div className='text-xl bg-amber-700 h-1.5'></div>
                            <div className='font-bold text-2xl'>@anurag24</div>
                            <div className='font-semibold text-lg'>Anurag Yadav</div>
                           
                    </div>
                </div>
                <div className='w-full bg-green-200 h-32 '>

                </div>
            </div>
            
        </div>
    </>
  )
}

export default TopCreators