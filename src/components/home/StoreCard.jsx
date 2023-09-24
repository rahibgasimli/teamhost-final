import React from 'react'

import { AiFillStar,AiFillWindows,AiFillApple} from "react-icons/ai";
import user1 from '../../assets/images/populargroups/user-1.png'
import user2 from '../../assets/images/populargroups/user-2.png'
import user3 from '../../assets/images/populargroups/user-3.png'
import user4 from '../../assets/images/populargroups/user-4.png'


const StoreCard = (props) => {
  return (
    <div className="store-card">
    <div className="store-card-top">
        <img src={props.cardinIcerisindekiSekil} alt="" />
    </div>
    <div className="store-card-text-top">
        <a href="">{props.cardName}</a>
        <span>{props.content}</span>
        <div className="store-score-div">
            <h6>{props.score}<AiFillStar className='store-ulduz'/></h6>
            <h5>${props.price}</h5>
        </div>
    </div>

    <div className="store-card-text-bottom">
        <div className="windows-logo">
            <AiFillWindows/>
            <AiFillApple/>
        </div>

        <div className="store-users-photos">
            <img className='store-user'src={user1} alt="" />
            <img className='store-user'src={user2} alt="" />
            <img className='store-user'src={user3} alt="" />
            <img className='store-user'src={user4} alt="" />
        </div>
    </div>


</div>
  )
}

export default StoreCard