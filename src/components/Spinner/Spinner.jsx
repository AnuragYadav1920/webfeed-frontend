import React from 'react'
import './spinner.css'

const Spinner = () => {
  return (
    <>
      <div className='spinner'>
         <div className='spinner-box'>
              <div className='box1'></div>
              <div className='box2'></div>
         </div>
         <div className='spinner-text'>
            <span className='span1'>Please wait......</span>
            <span className='span2'>While we are fetching your details................</span>
         </div>
      </div>
    </>
  )
}

export default Spinner