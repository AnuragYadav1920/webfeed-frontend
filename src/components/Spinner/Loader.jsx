import React from 'react'
import './Spinner.css'

const Loader = () => {
  return (
    <>
        <div className="loader">
        <div className="spinner-icon"></div>
        <div className="loading-text">
          Please wait a while !.
        </div>
      </div>
    </>
  )
}

export default Loader