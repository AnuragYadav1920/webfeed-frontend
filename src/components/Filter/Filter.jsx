import React, { useState } from 'react'
import { FaFilter } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import FilterBox from './FilterBox';
const Filter = () => {
    const [filter, setFilter] = useState(false)
  return (
    <>
        <div>
            <div className='filter-container'>
                <div className='filter-container-left'>
                    <div className='filter-container-left-search-icon-box'>
                        <FaSearch className='filter-container-left-search-icon'/>
                    </div>
                    <div className='filter-container-left-search-input-box'>
                        <input type="text" className='filter-container-left-search-input' placeholder='filter the blogs'/>
                    </div>
                </div>
                
                <div className='filter-container-right' onClick={()=>setFilter(!filter)}>
                    <div className='filter-container-right-filter-icon-box'>
                        <FaFilter className='filter-container-right-filter-icon'/>
                    </div>
                    <div className='filter-container-right-filter-text'>
                        Filter
                    </div>
                </div>
                {       
                        filter && (
                            <div className='filter-container-right-filter-options-box'>
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