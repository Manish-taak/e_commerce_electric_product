import React from 'react'
import Enterotp from '../verifyprocess/enterotp'
import otpimage from '../img/otpimage.png'
import logo from '../img/Logo-main-header.svg'
import logout from '../img/logoutUser.svg'
import { Link } from 'react-router-dom'

const UserOtp = () => {
  return (
    <>
      {/* <Enterotp/> */}
      <div className="userotp container ">
        {/**/}
        <div className="user-otp-section">
          <div className="otp-left-side-user">
            <div>
              <h3 style={{paddingBottom:"20px"}} className='common-20-1' >Please Check your Email! <span className='common-16-2' >(Reset Password OTP)</span></h3>
              <p className='common-16-2' >Please check your email, 6-digit confirmation code to Tim.@example, please enter the confirmation code to verify your email.</p>
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
            <div className='check-otp-btn' >
              <button className='btn-common-main'>VERIFY</button>
              <div>
                <p>Don’t have a code? <Link>Resend Code</Link></p>
              </div>
            </div>

          </div>
          <img className='image-acc-sec' src={otpimage} alt="register" />
        </div>
      </div>
    </>
  )
}

export default UserOtp