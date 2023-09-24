import React from 'react'

const Activities = () => {
  return (
    <div className="activities">
        <div className="activities-head">
            <h1>Activities</h1>
            <a href="">VIEW ALL</a>
        </div>

        <div className="activites-body">
            <div className="activities-buy-card">
                <div className="buy-card-logo">
                    <img src="	https://www.pro-theme.com/html/teamhost/assets/img/game-1.jpg" alt="" />
                </div>

                <div className="buy-card-text">
                    <h1>Grand Theft Auto</h1>
                    <span>5 Jul,2020</span>
                </div>

                <div className="buy-card-price">
                    <span>-14.80 USD</span>
                </div>

                

            </div>

            <div className="activities-buy-card">
                <div className="buy-card-logo">
                    <img src="https://www.pro-theme.com/html/teamhost/assets/img/game-2.jpg" alt="" />
                </div>

                <div className="buy-card-text">
                    <h1>Counter-Strike: ..</h1>
                    <span>25 Apr,2020</span>
                </div>

                <div className="buy-card-price">
                    <span>-14.99 USD</span>
                </div>

                

            </div>



        </div>



    </div>
  )
}

export default Activities