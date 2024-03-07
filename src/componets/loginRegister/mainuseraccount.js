import React, { useEffect, useState } from 'react'
import logo from '../img/Logo-main-header.svg'
import logout from '../img/logoutUser.svg'
import Loginmain from './loginmain'
import UserOtp from './userOtp'
import Resetpassword from './resetpassword'
import Passwordput from './passwordput'
import { useLocation, useParams } from 'react-router-dom'
// import { route } from 'browser-router'
// import { useLocation } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';


const Mainuseraccount = () => {
    const uselocation = useLocation()
    // const useparams = useParams()
    // const navigate = useNavigate();
    // const [previousLocation, setPreviousLocation] = useState(null);

    // useEffect(() => {
    //     // Update the previous location when the location changes
    //     const unlisten = navigate((location, action) => {
    //         if (action === 'PUSH' || action === 'REPLACE') {
    //             setPreviousLocation(location);
    //         }
    //     });

    //     // Cleanup the listener when the component unmounts
    //     return () => {
    //         unlisten();
    //     };
    // }, [navigate]);

    // const handleGoBack = () => {
    //     // Use navigate to navigate to the previous location
    //     if (previousLocation) {
    //         navigate(previousLocation.pathname);
    //     }
    // };
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
                                <Resetpassword /> : uselocation.pathname.includes("passwordput") ? <Passwordput /> : ""

                }
            </div>
        </>
    )
}

export default Mainuseraccount