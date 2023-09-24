import React from 'react'


import { BsFillArrowUpSquareFill,BsFillArrowDownSquareFill } from "react-icons/bs";



const Marketlist = () => {
  return (
    <div className="market-list">
        <div className="market-card">
            <div className="market-card-img">
                <img src="https://www.pro-theme.com/html/teamhost/assets/img/game-1.jpg" alt="" />
            </div>

            <div className="market-card-text">
                <a href="#">Halloween Chest</a>
                <p>Hero Siege</p>
                <h6>Starting at: <span className='price-up'>$0.04 <BsFillArrowUpSquareFill className='price-icon'/></span></h6>
                <h6>Quantity: <span className='price-up'>25,341</span></h6>
            </div>


        </div>

        <div className="market-card">
            <div className="market-card-img">
                <img src="https://www.pro-theme.com/html/teamhost/assets/img/game-2.jpg" alt="" />
            </div>

            <div className="market-card-text">
                <a href="#">High Quality Crate</a>
                <p>Rust</p>
                <h6>Starting at: <span className='price-down'>$5.55 <BsFillArrowDownSquareFill className='price-icon'/></span></h6>
                <h6>Quantity: <span className='price-down'>1,271</span></h6>
            </div>


        </div>

        <div className="market-card">
            <div className="market-card-img">
                <img src="https://www.pro-theme.com/html/teamhost/assets/img/market-item-1.jpg" alt="" />
            </div>

            <div className="market-card-text">
                <a href="#">Trifecta - SCAR-L</a>
                <p>BATTLEGROUNDS</p>
                <h6>Starting at: <span className='price-up'>$0.95</span></h6>
                <h6>Quantity: <span className='price-up'>2,878</span></h6>
            </div>


        </div>

        <div className="market-card">
            <div className="market-card-img">
                <img src="https://www.pro-theme.com/html/teamhost/assets/img/game-3.jpg" alt="" />
            </div>

            <div className="market-card-text">
                <a href="#">Operation Broken Fang Case</a>
                <p>Counter-Strike: Global Offensive</p>
                <h6>Starting at: <span className='price-up'>$0.55</span></h6>
                <h6>Quantity: <span className='price-up'>401,244</span></h6>
            </div>


        </div>
    </div>
  )
}

export default Marketlist