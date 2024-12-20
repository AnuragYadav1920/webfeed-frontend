import React from 'react'
import { NavLink } from 'react-router-dom'
const Discover = () => {
  return (
    <>
      <div>
        <div className='discover ' >
          <NavLink to="/posts">
            <div className='discover-item'>Posts</div>
          </NavLink>
          <NavLink to="/top-creators">
            <div className='discover-item'>Top Creators</div>
          </NavLink>
          <NavLink to="/about">
            <div className='discover-item'>About us</div>
          </NavLink>
          <NavLink to="/events">
            <div className='discover-item'>Events</div>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Discover