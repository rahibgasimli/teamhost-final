import React from 'react'
import { AiOutlineInfoCircle } from "react-icons/ai";
const Managecard = (props) => {
  
    return (
    <div className="manage-card">

    <div className="manage-card-top">
        <img src={props.cardinIcerisindekiSekil} alt="" />
    </div>


    <div className="manage-card-bottom">
        <div className="cards-post">
            <div className="post-left">
                <h1>235</h1>
                <span>Posts</span>
            </div>


            <div className="post-right">
                <h1>678</h1>
                <span>Members</span>
            </div>

        </div>


        <div className="cards-text">
            <span><AiOutlineInfoCircle/>Latest active 2 months ago</span>
            <button>JOIN GROUP</button>
        </div>

    </div>


</div>
  )
}

export default Managecard