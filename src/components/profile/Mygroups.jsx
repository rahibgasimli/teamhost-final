import React from 'react'

import { AiOutlineBars,AiOutlineRight } from "react-icons/ai";

const Mygroups = () => {
  return (
    <div className="my-groups">
        <h1><AiOutlineBars className='my-groups-bars'/>My Groups</h1>

        <nav className="my-groups-links">
            <a href="#"><AiOutlineRight className='my-groups-arrow'/>Fighting games</a>
            <a href="#"><AiOutlineRight className='my-groups-arrow'/>Beat`em up games</a>
            <a href="#"><AiOutlineRight className='my-groups-arrow'/>Stealth game</a>
            <a href="#"><AiOutlineRight className='my-groups-arrow'/>Action-adventure</a>
            <a href="#"><AiOutlineRight className='my-groups-arrow'/>Survival horror</a>
            <a href="#"><AiOutlineRight className='my-groups-arrow'/>Text adventures</a>
            <a href="#"><AiOutlineRight className='my-groups-arrow'/>Graphic adventures</a>
            <a href="#"><AiOutlineRight className='my-groups-arrow'/>Interactive movie</a>
        </nav>

    </div>
  )
}

export default Mygroups