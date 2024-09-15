import React from 'react'

const SearchBar = () => {
  return (
    <>
        <div className='search-box'>
            <label htmlFor="searching" className='search-box-label'>
                <input type="text" id='searching' className='search-box-input' placeholder='search here ....................'/>
                <button className='search-button'>Search</button>
            </label>
        </div>
    </>
  )
}

export default SearchBar