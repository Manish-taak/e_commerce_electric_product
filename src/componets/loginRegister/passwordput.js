import React from 'react'
import eyes from '../img/blueEyes.svg'
import password from '../img/passsss.png'

const Passwordput = () => {
    return (
        <>
            <div className=" user-otp-section container  ">
                <div className="reset-sec">
                    <div className="enter-user-otp">
                        <p className='common-20-1' >Enter New Password</p>
                        <p className='common-16-2' >New Password Must Be Different From Previous Used Password.</p>
                    </div>
                    <div>
                        <input className='simple-inpuit common-16-2 ' type="text" placeholder='password' />
                        <p className='warring-p' >Password Must Be 8 Characters</p>
                    </div>
                    <div className="optional">
                        <input className='optional-inpuit common-16-2' type="text" placeholder='Confirm password' />
                        <img src={eyes} alt="location" />
                    </div>
                </div>
                <div className="image-acc-sec">
                    <img src={password} alt="password" />
                </div>
            </div>
        </>
    )
}

export default Passwordput