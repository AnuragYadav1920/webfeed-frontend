import React from 'react'
import { BsFillHexagonFill } from "react-icons/bs";
import { PiCrownSimpleFill } from "react-icons/pi";
import RankCard from '../../components/RankCard/RankCard';

const TopCreators = () => {
  return (
    <>
        <div>
            <div className='flex-row space-y-16 my-16 bg-gray-50 rounded-lg'>
                <div className='text-gray-500 font-bold text-5xl text-center pt-16 '>
                    <p>༒𝓛𝓮𝓪𝓭𝓮𝓻𝓫𝓸𝓪𝓻𝓭༒</p>
                </div>
                <div className='h-auto grid w-full grid-cols-3 content-end  items-end  gap-8 mx-auto text-gray-500 text-center '>
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
                            <div className=' bg-gray-400 h-1.5 '></div>
                            <div className=' text-lg font-semibold text-sky-900'>@anurag24</div>
                            <div className='text-custom'>India</div>
                            <div className='flex justify-center space-x-1 text-custom py-1'>
                                <div className='h-5 w-5'><img src="images/flower.png" alt="" /></div>
                                <div>200k</div>
                            </div>
                        
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
                            <div className='text-lg font-semibold text-sky-900'>@anurag24</div>
                            <div className=' text-custom'>India</div>
                            <div className='flex justify-center space-x-1 text-custom py-1'>
                                <div className='h-5 w-5'><img src="images/flower.png" alt="" /></div>
                                <div>200k</div>
                            </div>
                         
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
                            <div className=' text-xl font-semibold text-sky-900'>@anurag24</div>
                            <div className=' text-custom'>India</div>
                            <div className='flex justify-center space-x-1 text-custom py-1'>
                                <div className='h-5 w-5'><img src="images/flower.png" alt="" /></div>
                                <div>200k</div>
                            </div>
                        </div>  
                </div>
                <div className='w-full  h-auto '>
                    <div className='flex-row  py-8 w-custom-account-sec-width justify-cente mx-auto'>                      
                        <RankCard/>
                        <RankCard/>
                        <RankCard/>
                        <RankCard/>
                        <RankCard/>
                        <RankCard/>
                        <RankCard/>
                        <RankCard/>
                        <RankCard/>
                        <RankCard/>
                    </div>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default TopCreators