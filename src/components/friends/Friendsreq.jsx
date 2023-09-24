import React from 'react'

import { LuMoreHorizontal } from "react-icons/lu";
import { AiOutlineDown } from "react-icons/ai";


const Friendsreq = () => {
  return (
    <div className="friends-requests">
        <h1>Friends List</h1>
        <div className="friends-requests-input">
            <input type="text" placeholder='Search' />
            <div className="friends-filter">
                <span className='current'>Filter: Active<AiOutlineDown/></span>
                {/* <button className='friends-input-button'><LuMoreHorizontal/></button> */}
            </div>
            <button className='friends-input-button'><LuMoreHorizontal/></button>
        </div>
        
    </div>
  )
}

export default Friendsreq