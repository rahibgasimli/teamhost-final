import React from 'react'

import { AiFillCheckCircle,AiFillDelete } from "react-icons/ai";



const Friendsadd = () => {
  return (
    <div className="friends-add">
        <h1>Friends Request</h1>
        <div className="friends-add-cards">
            <div className="friends-add-card">
                <div className="friends-add-card-left">
                    <img src="https://www.pro-theme.com/html/teamhost/assets/img/user-list-5.png" alt="" />
                    <h3>Fred Emil</h3>
                </div>

                <div className="friends-add-card-right">
                    <button className='friends-add-btn'><AiFillCheckCircle/></button>
                    <button className='friends-remove-btn'><AiFillDelete className='friends-remove-btn'/></button>
                </div>

            </div>

            <div className="friends-add-card">
                <div className="friends-add-card-left">
                    <img src="https://www.pro-theme.com/html/teamhost/assets/img/user-list-8.png" alt="" />
                    <h3>Leo Maxwell</h3>
                </div>

                <div className="friends-add-card-right">
                    <button className='friends-add-btn'><AiFillCheckCircle/></button>
                    <button className='friends-remove-btn'><AiFillDelete className='friends-remove-btn'/></button>
                </div>

            </div>

            <div className="friends-add-card">
                <div className="friends-add-card-left">
                    <img src="https://www.pro-theme.com/html/teamhost/assets/img/user-list-4.png" alt="" />
                    <h3>Olivia Mark</h3>
                </div>

                <div className="friends-add-card-right">
                    <button className='friends-add-btn'><AiFillCheckCircle/></button>
                    <button className='friends-remove-btn'><AiFillDelete className='friends-remove-btn'/></button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Friendsadd