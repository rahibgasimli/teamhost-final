import React from 'react'

const Payment = () => {
  return (
    <div className="payment">

        <div className="payment-head">
            <h1>Payment Method</h1>
            <a href="">EDIT</a>
        </div>

        <div className="payment-card">
            <div className="payment-card-top">
                <img src="https://www.pro-theme.com/html/teamhost/assets/img/payment-card-chip.svg" alt="" />
                <img className='master-card' src="https://www.pro-theme.com/html/teamhost/assets/img/payment-card-logo.svg" alt="" />
            </div>

            <div className="payment-card-text">
                <span>**** **** **** 6958</span>
            </div>

            <div className="payment-card-bottom">
                <span>$ 18,320.00</span>
            </div>

        </div>


    </div>
  )
}

export default Payment