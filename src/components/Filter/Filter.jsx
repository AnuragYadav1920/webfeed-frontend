import React, { useState } from 'react'
import { FaFilter } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import FilterBox from './FilterBox';
const Filter = () => {
    const [filter, setFilter] = useState(false)
  return (
    <>
        <div>
            <div className='flex justify-between relative '>
                <div className='w-custom-filter-width flex text-gray-400 bg-transparent px-4 py-2 content-center space-x-2 border-2 border-gray-500 rounded-md cursor-pointer'>
                    <div className='content-center'>
                        <FaSearch className='font-bold text-xl'/>
                    </div>
                    <div className='content-center'>
                        <input type="text" className='bg-transparent border-none outline-none w-custom-input-width' placeholder='filter the blogs'/>
                    </div>
                </div>
                
                <div className='flex  space-x-2 text-gray-300 px-2 py-2 border-2 border-gray-500 rounded-md cursor-pointer' onClick={()=>setFilter(!filter)}>
                    <div className='content-center'>
                        <FaFilter className='bg-gray  text-lg '/>
                    </div>
                    <div className='content-center font-semibold'>
                        Filter
                    </div>
                </div>
                {       
                        filter && (
                            <div className='absolute top-16 right-2 z-20'>
                                <FilterBox/>
                            </div>
                            
                        )
                    }
                
            </div>
        </div>
    </>
  )
}

export default Filter