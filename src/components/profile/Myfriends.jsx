import React from 'react'

import { AiOutlineTrophy } from "react-icons/ai";


const Myfriends = () => {
  return (
    <div className="my-friends">

        <span><AiOutlineTrophy className='friends-kubok' /> My Friends</span>
        <div className="friends-card">
            <div className="friend-card-logo">
                <img src="https://www.pro-theme.com/html/teamhost/assets/img/user-1.png" alt="" />
            </div>
            <div className="friend-card-text">
                <a href="#">Kristen Oswalt</a>
                <span>Dec 15,2020</span>
            </div>
        </div>

        <div className="friends-card">
            <div className="friend-card-logo">
                <img src="https://www.pro-theme.com/html/teamhost/assets/img/user-2.png" alt="" />
            </div>
            <div className="friend-card-text">
                <a href="#">Emma Stone</a>
                <span>Jan 15,2022</span>
            </div>
        </div>

        <div className="friends-card">
            <div className="friend-card-logo">
                <img src="https://www.pro-theme.com/html/teamhost/assets/img/user-3.png" alt="" />
            </div>
            <div className="friend-card-text">
                <a href="#">Lester Barry</a>
                <span>Feb 15,2021</span>
            </div>
        </div>

        <button>VIEW ALL</button>

    </div>
  )
}

export default Myfriends