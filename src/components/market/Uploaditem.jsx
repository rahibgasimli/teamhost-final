import React from 'react'


import { AiOutlineDown } from "react-icons/ai";


const Uploaditem = () => {
  return (
    <div className="upload-item">
        <h1>Upload Item</h1>

        <div className="upload-item-form">

            <div className="upload-item-dropdown">
                <span>Select Game <AiOutlineDown/>  </span>
            </div>

            <button>Next</button>

        </div>
    </div>
  )
}

export default Uploaditem