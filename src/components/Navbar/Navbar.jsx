import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
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
       <nav className='navbar'>
                    
            <div className='navbar-container'>
            {/* navbar-left-section */}
            <div className='navbar-container-left-section'>
                <div className='navbar-container-left-section-logo'>
                    <ul>
                        <li><NavLink to="/">WebFeed</NavLink></li>
                    </ul>
                </div>
                <div className='navbar-container-left-section-links'>
                    <ul>
                        <li><NavLink to="/">HOME</NavLink></li>
                        <li onClick={()=>handleClick("Discover")}>EXPLORE</li>
                        <li><NavLink to="/contact">CONTACT</NavLink></li>
                        <li><NavLink to="/create">CREATE</NavLink></li>
                    </ul>
                    {
                        discover&&(
                            <div className='navbar-container-left-section-discover'>
                                <Discover/>
                            </div>
                        )
                    }
                </div>
            </div>
            {/* navbar-right-section for tablets and pc */}
            <div className='navbar-container-right-section'>
            <div className='navbar-container-right-section-search'>
                <FaSearch/>
            </div>
            {
                !isLoggedIn&&(
                    <div className='navbar-container-right-section-links'>
                        <ul>
                            <li><NavLink to="/login">Login</NavLink></li>
                            <li><NavLink to="/signup">Sign up</NavLink></li>
                        </ul>
                    </div>
                )
            }
            {
                isLoggedIn&&(
                    <div className='navbar-container-right-section-account'>
                        <li onClick={()=>handleClick("Profile")}>A</li>
                        {
                            profile&&(
                                <div className='navbar-container-right-section-account-box'>
                                    <Account/>
                                </div>
                            )
                        }
                    </div>
                )
            }
            {/* navbar-right-section for mobile devices */}
            <div className='navbar-container-right-section-hamberger-menu'>
                <li><GiHamburgerMenu/></li> 
            </div>
            </div>
        </div>
    </nav>
</>
  )
}

export default Navbar