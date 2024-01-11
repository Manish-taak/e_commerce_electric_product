import React from 'react'
import icon from '../img/Icon.png'
import close from '../img/close.svg'
const Thirdpartyprocess = (props) => {
    return (
        <>
            <div className=" outer-border otp center-popup ">
                <div className="otp-headding">
                    <img src={icon} alt="icon" />
                    <p className='now-only' ><span className='buy-only' >Buy</span>now</p>
                    <img className='close-icon' onClick={() => { props?.setClick(false); props?.setShow(false) }} src={close} alt="close" />
                </div>
                <div className="scanqr enter-otp-process ">
                    <p className='common-20-1' >Third party process</p>
                    <div className="process-payment">
                        <div className="first-round"></div>
                        <div className="secont-round"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Thirdpartyprocess