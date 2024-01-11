import React from 'react'
import register from '../img/register.svg'
import login from '../img/login.svg'
import google from '../img/google.svg'
import facebook from '../img/facebook.svg'
import right from '../img/rightarrowsvg.svg'
import Summary from './summary'
import { Link } from 'react-router-dom'
const Checkoutsignin = () => {
    return (
        <>
            <div className="checkoutsignin ">
                <div className="online-options">
                    <Link to="/mainuseraccount/register" >
                        <div style={{ cursor: "pointer" }} className="online-option-1">
                            <div className="online-option-1-image-name">
                                <img src={register} alt="register" />
                                <p className='common-16-3'> Register</p>
                            </div>
                            <img src={right} alt="right" />
                        </div>
                    </Link>
                    <Link to="/mainuseraccount/login" >
                        <div style={{ cursor: "pointer" }} className="online-option-1">
                            <div className="online-option-1-image-name">
                                <img src={login} alt="register" />
                                <p className='common-16-3'> Log In</p>
                            </div>
                            <img src={right} alt="right" />
                        </div>
                    </Link>

                    <div className="online-option-1">
                        <div className="online-option-1-image-name">
                            <img src={google} alt="register" />
                            <p className='common-16-3'> Google</p>
                        </div>
                        <img src={right} alt="right" />
                    </div>

                    <div className="online-option-1">
                        <div className="online-option-1-image-name">
                            <img src={facebook} alt="register" />
                            <p className='common-16-3'> Facebook</p>
                        </div>
                        <img src={right} alt="right" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkoutsignin