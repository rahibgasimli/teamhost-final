import React from 'react'
import Walletleft from '../components/wallet/Walletleft'
import Payment from '../components/wallet/Payment'
import Activities from '../components/wallet/Activities'

const Wallet = () => {
  return (

    
    <div className='wallet-main'>
        <Walletleft/>
      <div className="wallet-right">
        <Payment/>  
        <Activities/>
      </div>
    </div>
  )
}

export default Wallet