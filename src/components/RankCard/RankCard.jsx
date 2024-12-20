import React from 'react'

const RankCard = ({channel, rank}) => {
  return (
    <>
        <div>
            <div className=' flex-row h-20 w-full bg-transparent space-y-4 content-center '>
                <div className='flex justify-between px-8 '>
                <div className='flex space-x-8'>
                    <div className='font-semibold text-xl content-center text-gray-700'>{rank+4}</div>
                    <div className='content-center'>
                        <div className='bg-white  w-12 h-12 rounded-full  border-custom border-gray-200 shadow-md shadow-gray-400 '>
                            <img src={channel?.channelDetails.avatar} alt="" className=' w-12 h-12 rounded-full'/>
                        </div>
                    </div>
                    <div className='flex-row content-center '>
                        <div className='font-semibold text-lg text-sky-900'>{channel?.channelDetails.fullName}</div>
                        <div className='text-custom text-gray-700 font-normal'>{channel?.channelDetails.username}</div>
                    </div>
                </div>
                <div className='flex space-x-2 items-center '>
                    <div className='w-5 h-5 '><img src="https://res.cloudinary.com/dll4smvrf/image/upload/v1726639336/h9hlltm9f0p8yyzua0gt.webp" alt="" /></div>
                    <div className='text-custom'>{channel?.count}</div>
                </div>
                </div>
                <hr className='h-custom-hr bg-slate-400 mx-4 border-none'/>
            </div>
        </div>
    </>
  )
}

export default RankCard