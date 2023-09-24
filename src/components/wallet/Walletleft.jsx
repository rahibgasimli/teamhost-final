import React from 'react'

import { AiOutlineWallet } from "react-icons/ai";




const Walletleft = () => {
  return (
    <div className="wallet-left">
        <h1>Wallet</h1>
        <div className="balance">

            <h4>504.00 USD</h4>
            <span><AiOutlineWallet className='wallet-icon'/>Available</span>

        </div>


    </div>
  )
}

export default Walletleft