import React from 'react'

import { FaSearch,FaMicrophone} from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";


const Marketform = () => {
  return (
    <div className="market">
      <h1>Market</h1>
      <div className="market-form">
        <div className="market-search">

          <div className="market-search-input">
            <input type="text" placeholder='Search'/>
          </div>
          <div className="market-search-mic">
            <FaMicrophone className='market-mic-btn'/>
          </div>
        </div>

        <div className="market-dropdowns">
          <span>Sort By:Popular <AiOutlineDown/></span>
          <span>Game: All <AiOutlineDown/></span>
        </div>
        <a href="#">15 items</a>
      </div>
    </div>
  )
}

export default Marketform