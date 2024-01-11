import React from 'react'
import logo from '../img/Logo-main-header.svg'
import logout from '../img/logoutUser.svg'
import eyes from '../img/blueEyes.svg'
import { Link } from 'react-router-dom'


export const Login = () => {
  return (
    <>
      <div className="login createaccount ">
        <p className='common-20-1' >Log in to buynow</p>
        <input className='simple-inpuit common-16-2 ' type="text" placeholder='Email/Phone no.' />
        <div className="optional">
          <input className='optional-inpuit common-16-2' type="text" placeholder='Password' />
          <img src={eyes} alt="location" />
        </div>
        <label className='ckeckbox-user' htmlFor="">
          <div className="check">
            <input className='check-box-returns' type="checkbox" name="" id="" />
            <p className='common-16-2' >By continuing, you agree to <span className='common-16-5' >Buynow</span>  policy</p>
          </div>
            <Link>Forgot?</Link>
        </label>
        <button style={{width:"97px"}} className='btn-common-main' >Log In</button>
      </div>
    </>
  )
}
