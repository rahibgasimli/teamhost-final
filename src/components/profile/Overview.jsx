import React from 'react'

import { AiOutlineHome,AiOutlineInfoCircle,AiOutlineClockCircle,
    AiOutlineUser,AiOutlineNodeIndex} from "react-icons/ai";



const Overview = () => {
  return (
    <div className="overview">
        <a href="#"><AiOutlineHome className='overview-logo'/>Overview</a>
        <a href="#"><AiOutlineInfoCircle className='overview-logo'/>Info</a>
        <a href="#"><AiOutlineClockCircle className='overview-logo'/>Activity</a>
        <a href="#"><AiOutlineUser className='overview-logo'/>Friends</a>
        <a href="#"><AiOutlineNodeIndex className='overview-logo'/>Groups</a>
    </div>
  )
}

export default Overview