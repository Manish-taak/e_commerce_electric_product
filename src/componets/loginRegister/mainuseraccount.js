import React from 'react'
import logo from '../img/Logo-main-header.svg'
import logout from '../img/logoutUser.svg'
import Loginmain from './loginmain'
import UserOtp from './userOtp'
import Resetpassword from './resetpassword'
import Passwordput from './passwordput'
import { useParams } from 'react-router-dom'
// import { route } from 'browser-router'
// import { useLocation } from 'react-router-dom'

const Mainuseraccount = () => {

    // const {type} = useParams();
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
                {/* <Loginmain/> */}
                <UserOtp/>
                {/* <Resetpassword/> */}
                {/* <Passwordput/> */}
            </div>
        </>
    )
}

export default Mainuseraccount