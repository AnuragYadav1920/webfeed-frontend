import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer.jsx'
import Hambergurmenu from "./components/Navbar/Hambergurmenu/Hambergurmenu.jsx.jsx";

const index = () => {
  return (
    <>  
      <div className=''>
        <div className=' '>
          <Navbar/>
          {/* <Hambergurmenu/> */}
           <Outlet/>
        </div>  
        <Footer />
      </div>
    </>
    
  )
}

export default index;