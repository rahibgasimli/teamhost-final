import React from 'react'


import { FaSearch,FaMicrophone,FaCaretDown,} from "react-icons/fa";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { IoNotificationsSharp } from "react-icons/io5";
import { AiOutlineBars,AiOutlineClose } from "react-icons/ai";

import { Link } from 'react-router-dom';

const Navbar = () => {
  

    AiOutlineBars.onclick = function(){
        document.querySelector('.overlay').style.width="100%"
    }
  
    return (
    <div>

    <div className="overlay">
        <AiOutlineClose className='xmark'/>
        <div className="nav-links">
            <Link to="/"><span>Home</span></Link>
            <Link to="/profile"><span>Profile</span></Link>
            <Link to="/friends"><span>Friends</span></Link>
            <Link to="/wallet"><span>Wallet</span></Link>
            <Link to="/market"><span>Market</span></Link>
        </div>


    </div>




    <div className="navbar">

        <div className="navbar-left-side">
            <div className="logo">
                <img src="https://www.pro-theme.com/html/teamhost/assets/img/logo.png" alt="" />
                <h3>TEAMHOST</h3>
            </div>

            

            <div className="input">
                <input type="text" placeholder='Search' />
                <FaMicrophone className='mic-logo'/>
            </div>
        </div>

            
        <AiOutlineBars className='navbar-bars'/>

        <div className="navbar-right-side">

            <div className="language">
                <img src="https://www.pro-theme.com/html/teamhost/assets/img/united-kingdom.png" alt="" />
                <span>ENGLISH</span>
                <FaCaretDown/>
            </div>

            <BiSolidMessageAltDetail className='msg-logo'/>     
            <IoNotificationsSharp className='notification-logo'/>
            <button>SIGN UP</button>

        </div>



    </div>

    </div>
  )
}

export default Navbar