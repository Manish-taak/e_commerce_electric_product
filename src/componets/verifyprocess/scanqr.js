import React from 'react'
import payment from '../img/paymentkaro.svg'
import question from '../img/Questionmarks.svg'
import icon from '../img/Icon.png'
import close from '../img/close.svg'
import { Link } from 'react-router-dom'

const Scanqr = (props) => {
    return (
        <>

            <div className=" outer-border otp center-popup ">
                <div className="otp-headding">
                    <img src={icon} alt="icon" />
                    <p className='now-only' ><span className='buy-only' >Buy</span>now</p>
                    <img className='close-icon' onClick={()=>{props?.setClick(false)}}  src={close} alt="close" />
                </div>
                <div className="scanqr enter-otp-process">
                    <p className='common-20-1'>Scan QR to pay</p>
                    <div className="scaner">
                        <div className="qr-code">
                            <img src={payment} alt="payment" />
                        </div>
                    </div>
                    <div className="or">
                        <span className='line-x or-width ' ></span>
                        <p className='common-14-4' >or</p>
                        <span className='line-x or-width ' ></span>
                    </div>
                    <div className="enter-upi-id">
                        <p className='common-16-3' >Enter your UPI ID</p>
                        <img src={question} alt="question" />
                    </div>
                    <input className='simple-inpuit common-16-2 ' type="text" placeholder='UPI iDs' />
                    <Link to="#" >
                        <button className=' scanqr-btn btn-common-main' >Verify & pay</button>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default Scanqr