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
import OptionCheckbox from '../../snippets/optionCheckbox'
const UpiPayment = ({ upi, emi }) => {
  return (
    <>
      <div className="upipayment">
        <div className="upi-option">
          {
            upi === true && (<>
              <OptionCheckbox url={phonepay} label={"Phone pay"} />
              <OptionCheckbox url={google} label={"Google pay"} />
              <OptionCheckbox url={paytm} label={"Paytm"} />
              <OptionCheckbox url={ammzon} label={"Amazon"} />
              <OptionCheckbox url={freelancer} label={"Freerecharge"} />
            </>)
          }
          {
            emi === true && (
              <>
                <OptionCheckbox url={hdfc} label={"HDFC"} />
                <OptionCheckbox url={blo} label={"BOI"} />
                <OptionCheckbox url={icic} label={"ICICI"} />
                <OptionCheckbox url={union} label={"Union"} />
                <OptionCheckbox url={pnb} label={"PNB"} />
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