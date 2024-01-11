import React from 'react'
import { Link } from 'react-router-dom'
import close from '../img/close.svg'
import logo from '../img/whitelogo.svg'
const   Enterotp = (props) => {
    return (
        <>
            <div className=" outer-border otp center-popup">
                <div className="otp-headding">
                    <img src={logo} alt="logo" />
                    <img className='close-icon' src={close} alt="close" onClick={()=>{props?.setClick(false); props?.   setShow(false)}} />
                </div>
                <div className="enter-otp-process">
                    <div className="enter-otp">
                        <p className='common-20-1'>Enter OTP</p>
                        <p className='common-16-2' >Please check your mobile, 6-digit confirmation code to (+1234567890), please enter the confirmation code to verify it’s you.</p>
                    </div>
                    <div className="otp-number">
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                        </ul>
                    </div>
                    <div>
                        <button className=' popupbtn btn-common-main' >VERIFY</button>
                        <p className='resendcode' ><span className='donthave' >Don’t have a code? </span> <Link className='common-16-5' to="#"> Resend Code </Link> </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Enterotp