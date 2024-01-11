import React from 'react'
import eyes from '../img/blueEyes.svg'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
      <div className="createaccount">
        <p className='common-20-1' >Create Your Account</p>
        <input className='simple-inpuit common-16-2 ' type="text" placeholder='Your name' />
        <input className='simple-inpuit common-16-2 ' type="text" placeholder='Email/Phone no.' />
        <input className='simple-inpuit common-16-2 ' type="text" placeholder='password' />
        <div className="optional">
          <input className='optional-inpuit common-16-2' type="text" placeholder='Confirm password' />
          <img src={eyes} alt="location" />
        </div>
        <label className='ckeckbox-user' htmlFor="">
          <div className="check">
            <input className='check-box-returns' type="checkbox" name="" id="" />
            <p className='common-16-2' >By continuing, you agree to <span className='common-16-5' >Buynow</span>  policy</p>
          </div>
        </label>
          <div className="account-btn btn-common-main">Create account</div>
      </div>
    </>
  )
}

export default Register