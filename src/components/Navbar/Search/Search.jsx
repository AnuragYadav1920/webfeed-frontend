import React from 'react'
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <>
        <div className="">
            <input type="text" placeholder='search here'/>
            <span><CiSearch /></span>
        </div>
    </>
  )
}

export default Search