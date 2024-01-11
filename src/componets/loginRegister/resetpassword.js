import React from 'react'
import { Link, useParams } from 'react-router-dom'
import imgset from '../img/resset.png'

const Resetpassword = () => {
 
  const {type} = useParams()
  
 
  return (
    <>
      <div className=" user-otp-section container ">
            <div className="reset-sec">
              <div className='enter-user-otp' >
                <p className='common-20-1' >reset your password</p>
                <p className='common-16-2' >Please enter your email or phone no with associated your account, we sent one time password to your (Email or phone).</p>
              </div>
              <input className='simple-inpuit common-16-2 ' type="text" placeholder='Email/Phone no.' />
              <div className='btn-resset-password verify-btns ' >
              <button className=' verify-btn-otp otp-btn btn-common-main' >VERIFY</button>
                <p>Back to <Link to="/mainuseraccount/register" >Register</Link> </p>
              </div>
            </div>
            <div className="image-acc-sec">
              <img src={imgset} alt="imgset" />
            </div>
      </div>
    </>
  )
}

export default Resetpassword