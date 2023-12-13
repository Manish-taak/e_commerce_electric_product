import React from 'react'
import phonepay from '../img/phone-pay.svg'
import google from '../img/G-pay.svg'
import paytm from '../img/paytm.svg'
import ammzon from '../img/ammazon.svg'
import freelancer from '../img/freelancer.svg'
import hdfc from '../img/hdfc.svg'
import blo from '../img/bol.svg'
import icic from '../img/icic.svg'
import union from '../img/union.svg'
import pnb from '../img/pnb.svg'
import arrowdown from '../img/ArrowDropDownOutlined.png'
const UpiPayment = (props) => {
  return (
    <>
      <div className="upipayment">
        <div className="upi-option">
          {
            props.net === true ? (<>
            </>) : (<>
              <div className="optional">
                <label htmlFor="">
                  <input className='checkbox-input' type="checkbox" name="" id="" />
                  <input className='optional-inpuit common-16-2' type="text" placeholder='Phone pay' />
                </label>
                <img src={phonepay} alt="phonepay" />
              </div>
              <div className="optional">
                <label htmlFor="">
                  <input className='checkbox-input' type="checkbox" name="" id="" />
                  <input className='optional-inpuit common-16-2' type="text" placeholder='Google pay' />
                </label>
                <img src={google} alt="google" />
              </div>
              <div className="optional">
                <label htmlFor="">
                  <input className='checkbox-input' type="checkbox" name="" id="" />
                  <input className='optional-inpuit common-16-2' type="text" placeholder='Paytm' />
                </label>
                <img src={paytm} alt="paytm" />
              </div>
              <div className="optional">
                <label htmlFor="">
                  <input className='checkbox-input' type="checkbox" name="" id="" />
                  <input className='optional-inpuit common-16-2' type="text" placeholder='Amazon' />
                </label>
                <img src={ammzon} alt="ammzon" />
              </div>
              <div className="optional">
                <label htmlFor="">
                  <input className='checkbox-input' type="checkbox" name="" id="" />
                  <input className='optional-inpuit common-16-2' type="text" placeholder='Freerecharge ' />
                </label>
                <img src={freelancer} alt="freelancer" />
              </div>
              <div className=" add-card add-upi">
                <p className='common-16-1' >+ Add UPI</p>
              </div>
            </>)
          }

          {
            props.net === true && (
              <>
                <div className="optional">
                  <label htmlFor="">
                    <input className='checkbox-input' type="checkbox" name="" id="" />
                    <input className='optional-inpuit common-16-2' type="text" placeholder='HDFC' />
                  </label>
                  <img src={hdfc} alt="phonepay" />
                </div>
                <div className="optional">
                  <label htmlFor="">
                    <input className='checkbox-input' type="checkbox" name="" id="" />
                    <input className='optional-inpuit common-16-2' type="text" placeholder='BOI' />
                  </label>
                  <img src={blo} alt="google" />
                </div>
                <div className="optional">
                  <label htmlFor="">
                    <input className='checkbox-input' type="checkbox" name="" id="" />
                    <input className='optional-inpuit common-16-2' type="text" placeholder='ICICI' />
                  </label>
                  <img src={icic} alt="paytm" />
                </div>
                <div className="optional">
                  <label htmlFor="">
                    <input className='checkbox-input' type="checkbox" name="" id="" />
                    <input className='optional-inpuit common-16-2' type="text" placeholder='Union' />
                  </label>
                  <img src={union} alt="ammzon" />
                </div>
                <div className="optional">
                  <label htmlFor="">
                    <input className='checkbox-input' type="checkbox" name="" id="" />
                    <input className='optional-inpuit common-16-2' type="text" placeholder='PNB ' />
                  </label>
                  <img src={pnb} alt="freelancer" />
                </div>
                <div className=" add-card add-upi">
                  <p className='common-16-1' >+ Add UPI</p>
                </div>
              </>
            )
          }

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

export default UpiPayment