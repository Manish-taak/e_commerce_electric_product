import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import imgset from '../img/resset.png'

const Resetpassword = () => {

  const [ressetpass, setressetpass] = useState({
    password: "",
    confirm_password: ""
  })

  const [inputErr, setInputErr] = useState("")
  const getuserdata = (e) => {
    let { name, value } = e.target;
    setressetpass({ ...ressetpass, [name]: value })
  }
  const submitRessetpassword = (e) => {
    e.preventDefault()
    if (ressetpass.password === "") {
        setInputErr("Enter your password")
    }
    if(ressetpass.confirm_password===""){
      setInputErr("Enter your confirm password")               
    }                                                        
    const fetchdata = fetch("", {
      method: "", //enter the mehtode upercase 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(ressetpass)
        .then((res) => window.alert(res)).catch((error) => window.alert(error))
    })
  }


  return (
    <>
      <div className=" user-otp-section container">
        <div className="reset-sec">
          <div className='enter-user-otp' >
            <p className='common-20-1' >reset your password</p>
            <p className='common-16-2' >Please enter your email or phone no with associated your account, we sent one time password to your (Email or phone).</p>
          </div>
          <input
            className='simple-inpuit common-16-2 '
            type="text"
            placeholder='Email/Phone no.'
            name='email'
            value={ressetpass.email}
            onChange={getuserdata}
          />
          <div className='btn-resset-password verify-btns ' >
            <button className=' verify-btn-otp otp-btn btn-common-main' onClick={(e) => submitRessetpassword(e)} >VERIFY</button>
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