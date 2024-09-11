import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { NavLink} from 'react-router-dom'
import Account from '../Navbar/Account/Account.jsx'
import Discover from './Discover/Discover.jsx';
import Hambergurmenu from './Hambergurmenu/Hambergurmenu.jsx.jsx';

const Navbar = () => {

    const [discover, setDiscover] = useState(false)
    const [profile, setProfile] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [hamberger, setHamberger] = useState(false)

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
        <nav className="relative z-20   bg-sky-800">
            <div className="navbar text-yellow-400 text-sm py-1.5">
                {/* navbar-container-left-section-start */}
                <div className='nav-left-items flex space-x-10 content-center '>
                    {/* logo-section */}
                    <NavLink to="/">
                        <div className='flex'>
                            <img src="images/logo.png" alt="logo" className='object-fill w-10 h-10 ' />
                            <span className='content-center text-xl font-bold'>WebFeed</span>
                        </div>
                    </NavLink>                   
                    {/* search-bar section */}
                    <div className='flex border-2 border-yellow-400 px-3 rounded-full content-center'>
                        <input type="text" placeholder='Search here' className='bg-transparent border-none outline-none placeholder-yellow-400'   />
                        <span className='text-lg content-center '> <FaSearch /> </span>
                    </div> 
                </div> 
                
                {/* navbar-container-left-section-end */}
                    <div className='nav-right-items '>

                        <div className='content-center'>
                            <NavLink to="/">Home</NavLink>
                        </div>

                        {/* discover */}
                        <div className='content-center cursor-pointer'>
                            <p onClick={()=>handleClick("Discover")}>Discover</p>
                            {discover && (
                                <div className='absolute top-20 right-100  bg-yellow-400 rounded-lg'>
                                <Discover />
                                </div>
                            )}
                        </div>
                        {/* Contact */}

                        <div className='content-center '>
                            <NavLink to="/contact">Contact</NavLink>
                        </div>

                        {/* login  & Sign Up */}

                            {!isLoggedIn &&(
                                <>
                                    <div className='content-center'>
                                        <NavLink to="/login">Login</NavLink>
                                    </div>
                                    <div className='content-center'>
                                        <NavLink to="/signup">Sign Up</NavLink>
                                    </div>
                                </>
                            )}  


                        {/* account & Create*/}

                            {isLoggedIn &&(
                                <>
                                    <div className='content-center'>
                                        <NavLink to="/create">Create</NavLink>
                                    </div>

                                    <div className='content-center h-10 w-10 cursor-pointer'>
                                        <img src="images/photo-modified.png"alt="" className='w-8 h-8 object-fill' onClick={()=>handleClick("Profile")} />
                                        {profile &&  (
                                            <div className='absolute top-20 right-10  bg-yellow-400 rounded-lg'>
                                                <Account/>
                                            </div>
                                        )}
                                    </div>                                  
                                </>
                            )}
                    </div> 
                        <span className='hamberger px-4 py-0.5 hover:backdrop-brightness-75 backdrop-opacity-20 content-center'  onClick={()=>setHamberger(!hamberger)}>Menu</span>
                        {
                            hamberger&&(
                                <div className='absolute top-12 right-0'>
                                    <Hambergurmenu/>
                                </div>
                            )
                        }
                </div>
            </nav>
    </>
  )
}

export default Navbar