import React from 'react'

import { AiFillStar} from "react-icons/ai";
import user1 from '../../assets/images/populargroups/user-1.png'
import user2 from '../../assets/images/populargroups/user-2.png'
import user3 from '../../assets/images/populargroups/user-3.png'
import user4 from '../../assets/images/populargroups/user-4.png'



const GroupsCard = (props) => {
  return (
    <div className="groups-card">
    <div className="groups-card-left">
        <a href="">{props.groupsName}</a>
        <span>Public Group</span>
        <button>Read More</button>
    </div>

    <div className="groups-card-right">
        <div className="ulduz-divi">
            <AiFillStar className='ulduz'/><AiFillStar className='ulduz'/><AiFillStar className='ulduz'/><AiFillStar className='ulduzsuz'/><AiFillStar className='ulduzsuz'/>
        </div>
        <h6>{props.reviews} Reviews</h6>

        <div className="groups-users-photos">
            <img className='groups-user'src={user1} alt="" />
            <img className='groups-user'src={user2} alt="" />
            <img className='groups-user'src={user3} alt="" />
            <img className='groups-user'src={user4} alt="" />
        </div>
    </div>

</div>
  )
}

export default GroupsCard