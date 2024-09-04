import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import {Link} from 'react-router-dom'
import Account from '../Navbar/Account/Account.jsx'
import Discover from './Discover/Discover.jsx';

const Navbar = () => {

    const [discover, setDiscover] = useState(false)
    const [profile, setProfile] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(true)

    const handleClick = (tabname)=>{
        if(tabname === "Discover"){
            setDiscover(!discover);
            setProfile(false);
        }else if(tabname === "Profile") {
            setDiscover(false);
            setProfile(!profile)
        }
    }

  return (
    <>
        <div className="navbar  relative z-20 bg-transparent py-4 ">
            <div className="navbar-container w-full flex  text-yellow-400 text-sm justify-between ">
                {/* navbar-container-left-section-start */}
                <div className='flex basis-nav-left justify-between'>
                    {/* logo-section */}
                    <div className='content-center'>
                        <img src="images/logo.png" alt="logo" width={60} height={60} />
                    </div>
                    {/* search-bar section */}
                    <div className='content-center'>
                        <div className='flex border-2 border-yellow-400 px-3 py-2 rounded-full'>
                            <div>
                                <input type="text" placeholder='Search here' className='bg-transparent border-none outline-none placeholder-yellow-400'   />
                            </div>
                            <div>
                                <FaSearch className='  text-xl  '/> 
                            </div>
                        </div>  
                    </div>   
                </div>
                {/* navbar-container-left-section-end */}
                <div className='basis-nav-right content-center '>
                    <div className='flex justify-between '>

                        {/* discover */}

                        <div className=' content-center'>
                            <p onClick={()=>handleClick("Discover")}>Discover</p>
                            {discover && (
                                <div className='absolute top-20 right-100  bg-yellow-400 rounded-lg'>
                                <Discover />
                                </div>
                            )}
                        </div>

                        {/* Contact */}

                        <div className=' content-center'>
                            <p>Contact</p>
                        </div>

                        {/* login  & Sign Up */}

                            {!isLoggedIn &&(
                                <>
                                    <div className='content-center'>
                                        <p>Login</p>
                                    </div>
                                    <div className='content-center'>
                                        <p>Sign Up</p>
                                    </div>
                                </>
                            )}  


                        {/* account & Create*/}

                            {isLoggedIn &&(
                                <>
                                    <div className='content-center'>
                                        <p> Create</p>
                                    </div>

                                    <div className='content-center '>
                                        <img src="images/photo-modified.png"alt="" height={30} width={30} onClick={()=>handleClick("Profile")} />
                                        {profile &&  (
                                            <div className='absolute top-20 right-10  bg-yellow-400 rounded-lg'>
                                                <Account/>
                                            </div>
                                        )}
                                    </div>
                                    
                                </>
                            )}
                    </div> 
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar