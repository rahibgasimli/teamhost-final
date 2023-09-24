import React,{useState,useEffect} from 'react'

import { LuMoreHorizontal } from "react-icons/lu";




const Friendscard = ({friendsLogo,friendsName,friendsGame}) => {
  

  
  
  
    return (
        <div>

    <div className="friends-list-card">
        <div className="friends-list-card-left">
            <img src={friendsLogo} alt="" />
    
            <div className="friends-list-card-text">
                <h3>{friendsName}</h3>
                <h6><span>Playing</span> {friendsGame} </h6>
            </div>
        </div>

        <div className="friends-list-card-right">
            <button><LuMoreHorizontal/></button>
        </div>

    </div>

    </div>
  )
}

export default Friendscard