import React from 'react'

const FilterBox = () => {
  return (
    <>
        <div className='h-auto w-48 bg-gray-200 border-2 border-gray-400 rounded-lg p-4 cursor-pointer'>
            <div className=' p-2 hover:bg-zinc-950 && hover:text-gray-300 rounded-lg'>
                <p>Bussiness</p>
            </div>
            <div className=' p-2 hover:bg-zinc-950 && hover:text-gray-300 rounded-lg'>
                <p>Sports</p>
            </div>
            <div className=' p-2 hover:bg-zinc-950 && hover:text-gray-300 rounded-lg'>
                <p>Technology</p>
            </div>
            <div className=' p-2 hover:bg-zinc-950 && hover:text-gray-300 rounded-lg'>
                <p>Stock Market</p>
            </div>
            <div className=' p-2 hover:bg-zinc-950 && hover:text-gray-300 rounded-lg'>
                <p>Education</p>
            </div>
            <div className=' p-2 hover:bg-zinc-950 && hover:text-gray-300 rounded-lg'>
                <p>Entertaintment</p>
            </div>
        </div>
    </>
  )
}

export default FilterBox