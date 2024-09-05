import React from 'react'

const RankCard = () => {
  return (
    <>
        <div>
            <div className=' flex-row h-20 w-full bg-transparent space-y-4 content-center '>
                <div className='flex justify-between px-8 '>
                <div className='flex space-x-8'>
                    <div className='font-semibold text-xl content-center text-gray-700'>4</div>
                    <div className='content-center'>
                        <div className='bg-white p-0.5 w-12 rounded-full  border-custom border-gray-200 shadow-md shadow-gray-400 '>
                            <img src="images/photo-modified.png" alt="" />
                        </div>
                    </div>
                    <div className='flex-row content-center '>
                        <div className='font-semibold text-lg text-sky-900'>Anurag Yadav</div>
                        <div className='text-custom text-gray-700 font-normal'>India</div>
                    </div>
                </div>
                <div className='flex space-x-2 items-center '>
                    <div className='w-5 h-5 '><img src="images/flower.png " alt="" /></div>
                    <div className='text-custom'>100k</div>
                </div>
                </div>
                <hr className='h-custom-hr bg-slate-400 mx-4 border-none'/>
            </div>
        </div>
    </>
  )
}

export default RankCard