import React from 'react'

import { AiOutlineHome,AiOutlineUser,AiOutlineHeart,AiOutlineComment,AiOutlineUsergroupAdd
,AiOutlineWallet,AiOutlineWifi,AiOutlinePartition,AiOutlineTeam,AiOutlineReconciliation,
AiOutlineShoppingCart,AiOutlineVideoCamera,AiOutlineTool,AiOutlineQuestionCircle } from "react-icons/ai";


import { Link } from 'react-router-dom';



const Mainleft = () => {
  return (
    <div className="main-left">

        <div className="home-menu">
            <Link to="/"><AiOutlineHome/><span>Home</span></Link>
        </div>

        

    <div className="account-menu">
        <h4>ACCOUNT</h4>
        <Link to="/profile"><AiOutlineUser/><span>Profile</span></Link>
        <a href=""><AiOutlineHeart/><span>Favorites</span></a>
        <a href=""><AiOutlineComment/><span>Chats</span></a>
        <Link to="/friends"><AiOutlineUsergroupAdd/><span>Friends</span></Link>
        <Link to="/wallet"><AiOutlineWallet/><span>Wallet</span></Link>
    </div>

    
    <div className="main-menu">
        <h4>MAIN</h4>
        <a href=""><AiOutlineWifi/><span>News</span></a>
        <a href=""><AiOutlinePartition/><span>Community</span></a>
        <a href=""><AiOutlineTeam/><span>Members</span></a>
        <Link to="/market"><AiOutlineShoppingCart/><span>Market</span></Link>
        <a href=""><AiOutlineVideoCamera/><span>Streams</span></a>
    </div>

        <div className="support-menu">
            <h4>SUPPORT</h4>
            <a href=""><AiOutlineTool/><span>Report</span></a>
            <a href=""><AiOutlineQuestionCircle/><span>Help</span></a>
        </div>



    </div>
  )
}

export default Mainleft