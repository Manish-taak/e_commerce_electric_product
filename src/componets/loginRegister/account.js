import React, { useEffect } from 'react'
import goggle from '../img/GoggleIcon.svg'
import facebook from '../img/facebookIcon.svg'
import { Link, useParams } from 'react-router-dom'
import Register from './register'
import { Login } from './login'
const Account = ({ setsection, section }) => {

    const { type } = useParams();
    useEffect(() => {
        setsection(type === 'register' ? false : true);
    }, [type]); 
 
    return (
        <>
            <div className="login-register-section">
                <div className="tabs-log-reg">
                    <Link onClick={() => setsection(true)} className='tab-user-login' >
                        <p className='common-14-2' >Log In</p>
                    </Link>
                    <Link onClick={() => setsection(false)} className='tab-user-login' >
                        <p className='common-14-2' >register </p>
                    </Link>
                </div>
                {
                    (section === false) && (<>
                        <Register />
                    </>)
                }
                {
                    (section === true) && (<>
                        <Login />
                    </>)
                }
                <div className="line-or">
                    <span style={{
                        width: "100%"
                    }} className='line-x' ></span>
                    <span>or</span>
                    <span style={{
                        width: "100%"
                    }} className='line-x' ></span>
                </div>
                <div className="other-options">
                    <button className='goggle-btn common-15-1-btn ' >
                        <img src={goggle} alt="goggle" />google
                    </button>
                    <button className='goggle-btn common-15-1-btn ' >
                        <img src={facebook} alt="facebook" />facebook
                    </button>
                </div>
            </div>
        </>
    )
}

export default Account