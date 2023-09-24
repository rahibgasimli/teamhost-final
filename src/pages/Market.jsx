import React from 'react'
import Marketform from '../components/market/Marketform'
import Marketlist from '../components/market/Marketlist'
import Uploaditem from '../components/market/Uploaditem'

const Market = () => {
  return (
    <div className="market-pages">
      <div className="market-page-left">
        <Marketform/>
        <Marketlist/>
      </div>

      <div className="market-page-right">
        <Uploaditem/>
      </div>

    </div>
  )
}

export default Market