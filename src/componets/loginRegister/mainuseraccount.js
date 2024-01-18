import React from 'react'
import logo from '../img/Logo-main-header.svg'
import logout from '../img/logoutUser.svg'
import Loginmain from './loginmain'
import UserOtp from './userOtp'
import Resetpassword from './resetpassword'
import Passwordput from './passwordput'
import { useLocation } from 'react-router-dom'
// import { route } from 'browser-router'
// import { useLocation } from 'react-router-dom'

const Mainuseraccount = () => {
    const uselocation = useLocation()
    return (
        <>
            <div className="mainuseraccout">
                <div className='border-b'>
                    <div className="container">
                        <div className="project-login-logo">
                            <img src={logo} alt="logo" />
                            <div className='logout' >
                                <p className='common-16-2'>Log in or Register For Best Experience</p>
                                <img src={logout} alt="logout" />
                            </div>
                        </div>
                    </div>
                </div>
                {
                    uselocation.pathname.includes("register") ?
                        <Loginmain /> : uselocation.pathname.includes("userotp") ? 
                        <UserOtp /> : uselocation.pathname.includes("ressetpassword") ? 
                        <Resetpassword /> : uselocation.pathname.includes("passwordput") ? <Passwordput /> :""

                }
            </div>
        </>
    )
}

export default Mainuseraccount