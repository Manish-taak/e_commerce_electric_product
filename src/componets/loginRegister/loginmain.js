import React, { useState } from 'react'
import logo from '../img/Logo-main-header.svg'
import logout from '../img/logoutUser.svg'
import register from '../img/register.png'
import goggle from '../img/GoggleIcon.svg'
import facebook from '../img/facebookIcon.svg'
import { Link } from 'react-router-dom'
import Account from './account'
import Register from './register'
import { Login } from './login'
import loginimage from '../img/loginimage.png'
import UserOtp from './userOtp'
import otpimage from '../img/otpimage.png'

const Loginmain = () => {
    const [section, setsection] = useState(true)
    const [tab, settab] = useState("account")
    return (
        <>
            <div className="top-user-section">
                <div className="loginmain container ">
                    <div className="sections-user">
                        {
                            tab === "account" && (
                                <>
                                    <Account  settab={settab} section={section} setsection={setsection} />
                                </>
                            )
                        }
                        <div className="register-img">
                            {
                                section === true ? (<> <img src={register} alt="register" /> </>) : section === false ? (<><img src={loginimage} alt="loginimage" /></>) :""
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loginmain