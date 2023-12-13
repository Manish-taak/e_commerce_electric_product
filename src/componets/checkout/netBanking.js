import React from 'react'

import arrowdown from '../img/ArrowDropDownOutlined.png'
const NetBanking = () => {
  return (
   <>
    <div className="upipayment">
        <div className="upi-option">
        </div>
        <div className="line-x"></div>
        <div className="Other-upi">
          <h2 className='common-16-3'>Other UPI</h2>
          <div className="optional">
            <input className='optional-inpuit common-16-2' type="text" placeholder='Punjab' />
            <img src={arrowdown} alt="arrowdown" />
          </div>
          <div className="line-x"></div>
          <div className="saveaddress-cancel">
            <button className=' savecard btn-customer' >  SAVE CARD </button>
            <button className=' cancel-btn common-15-1-btn ' >CANCEL</button>
          </div>
        </div>
      </div>
   </>
  )
}

export default NetBanking