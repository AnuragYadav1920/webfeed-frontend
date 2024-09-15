import React from 'react'
import { NavLink } from 'react-router-dom'
const Discover = () => {
  return (
    <>
      <div>
        <div className='discover ' >
            <div className='discover-item'>
              <NavLink to="/blogs">Blogs</NavLink>
            </div>
            <div className='discover-item'>
            <NavLink to="/top-creators">Top Creators</NavLink>
            </div>
            <div className='discover-item'>
            <NavLink to="/about">About us</NavLink>
            </div>
            <div className='discover-item'>
            <NavLink to="/events">Events</NavLink>
            </div>
        </div>
      </div>
    </>
  )
}

export default Discover