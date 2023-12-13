import React from 'react'
import resently from '../img/UpdateOutlined.svg'
import checkbox from '../img/checkbox.svg'
import visa from '../img/visa.svg'
const DebitCredit = () => {
  return (
    <>
      <div className="DebitCredit">
        <div className="shpping-Card">
          <div className="shpping-card-1">
            <div className=" shpping-card-1-headding common-justify-bt">
              <div className="card-name">
                <img src={checkbox} alt="checkbox" />
                <p className='common-16-1' >Shpping Card</p>
              </div>
              <img src={visa} alt="visa" />
            </div>
            <div className=" shippingcard-number common-justify-bt">
              <li style={{ color: "#2E1A3E" }} className='common-14-2' >2356</li>
              <li style={{ color: "#2E1A3E" }} className='common-14-2' >2356</li>
              <li style={{ color: "#2E1A3E" }} className='common-14-2' >2356</li>
              <li style={{ color: "#2E1A3E" }} className='common-14-2' >2356 </li>
            </div>
            <div className="shpping-card-1-bottom">
              <div className="common-justify-bt">
                <div>
                  <p style={{ fontSize: '10px' }} className='common-14-1' >Card Holder</p>
                  <p style={{ color: '#FFF' }} className='common-14-2' >Ahmad Dorwart</p>
                </div>
                <p style={{ color: '#FFF' }} className='common-14-2' ><span style={{ fontSize: '10px' }} className='common-14-1' >Exp</span>09/25</p>
              </div>
            </div>
          </div>

          <div className="shpping-card-1">
            <div className=" shpping-card-1-headding common-justify-bt">
              <div className="card-name">
                <img src={checkbox} alt="checkbox" />
                <p className='common-16-1' >Shpping Card</p>
              </div>
              <img src={visa} alt="visa" />
            </div>
            <div className=" shippingcard-number common-justify-bt">
              <li style={{ color: "#2E1A3E" }} className='common-14-2' >2356</li>
              <li style={{ color: "#2E1A3E" }} className='common-14-2' >2356</li>
              <li style={{ color: "#2E1A3E" }} className='common-14-2' >2356</li>
              <li style={{ color: "#2E1A3E" }} className='common-14-2' >2356 </li>
            </div>
            <div className="shpping-card-1-bottom">
              <div className="common-justify-bt">
                <div>
                  <p style={{ fontSize: '10px' }} className='common-14-1' >Card Holder</p>
                  <p style={{ color: '#FFF' }} className='common-14-2' >Ahmad Dorwart</p>
                </div>
                <p style={{ color: '#FFF' }} className='common-14-2' ><span style={{ fontSize: '10px' }} className='common-14-1' >Exp</span>09/25</p>
              </div>
            </div>
          </div>
          <div className=" debit-card-add add-card">
            <p className='common-16-1' > + Add Card</p>
          </div>
        </div>
        <div className="line-x"></div>
        <p className='common-16-3' >Other Card</p>
        <div className="othercard">
            <input className='simple-inpuit common-16-2 ' type="text" placeholder='Card name' />
            <input className='simple-inpuit common-16-2 ' type="text" placeholder='Card number' />
            <input className='simple-inpuit common-16-2 ' type="text" placeholder='CVV' />
            <div className="optional">
              <input className='optional-inpuit common-16-2' type="text" placeholder='Exp Date' />
              <img src={resently} alt="arrowdowndrop" />
            </div>
        </div>
        <div className="line-x"></div>
        <div className="saveaddress-cancel">
          <button className=' savecard btn-customer' >  SAVE CARD </button>
          <button className=' cancel-btn common-15-1-btn ' >CANCEL</button>
        </div>
      </div>
    </>
  )
}

export default DebitCredit